#!/usr/bin/env python3
"""LOGO: a logo oficial nunca é desenhada pela IA. Este script faz o que o gerador não deve fazer.

USO
  python ferramentas/logo.py checar  marca/logo.png
      Diz se o arquivo tem transparência real (arquivo "branco" sobre quadrado opaco cola o quadrado inteiro).

  python ferramentas/logo.py branca  marca/logo.png [saida.png]
      Gera a versão branca monocromática do arquivo oficial (mesma forma, proporção e espaçamento), para pousar
      em fundo escuro ou colorido. Sem transparência, remove o fundo pela cor dos cantos. Saída padrão:
      marca/logo-branca.png ao lado do original.

  python ferramentas/logo.py compor  arte.png marca/logo.png [--canto inferior-direito] [--largura 0.22]
                                      [--margem 0.06] [--sombra]
      Plano B, para quando o gerador errou a marca: compõe o arquivo oficial sobre a arte gerada, na escala
      (fração da largura) e no canto pedidos, com sombra suave opcional (nunca chapa atrás). Avisa se a área sob
      a logo não está limpa (texto ou detalhe que a logo cobriria). Saída: arte-com-logo.png.

Precisa de Python 3 e Pillow (pip install pillow).
"""
import sys
import argparse
from pathlib import Path

try:
    from PIL import Image, ImageFilter, ImageStat
except ImportError:  # pragma: no cover
    sys.exit("Falta o Pillow: pip install pillow")


def tem_transparencia(im: Image.Image) -> bool:
    if im.mode not in ("RGBA", "LA") and "transparency" not in im.info:
        return False
    alfa = im.convert("RGBA").getchannel("A")
    menor, _ = alfa.getextrema()
    return menor < 250


def remover_fundo(im: Image.Image, tolerancia: int = 40) -> Image.Image:
    """Tira o fundo sólido pela cor média dos 4 cantos (para arquivo sem transparência)."""
    im = im.convert("RGBA")
    w, h = im.size
    cantos = [im.getpixel((0, 0)), im.getpixel((w - 1, 0)), im.getpixel((0, h - 1)), im.getpixel((w - 1, h - 1))]
    fundo = tuple(sum(c[i] for c in cantos) // 4 for i in range(3))
    px = im.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            dist = abs(r - fundo[0]) + abs(g - fundo[1]) + abs(b - fundo[2])
            if dist <= tolerancia:
                px[x, y] = (r, g, b, 0)
            elif dist <= tolerancia * 2:  # borda: transição suave, sem serrilhado
                px[x, y] = (r, g, b, int(a * (dist - tolerancia) / tolerancia))
    return im


def versao_branca(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA") if tem_transparencia(im) else remover_fundo(im)
    alfa = im.getchannel("A")
    branca = Image.new("RGBA", im.size, (255, 255, 255, 0))
    branca.putalpha(alfa)
    return branca.crop(alfa.getbbox()) if alfa.getbbox() else branca


def compor(arte: Image.Image, logo: Image.Image, canto: str, largura: float, margem: float, sombra: bool):
    arte = arte.convert("RGBA")
    W, H = arte.size
    logo = logo.convert("RGBA")
    if logo.getchannel("A").getbbox():
        logo = logo.crop(logo.getchannel("A").getbbox())
    lw = max(1, round(W * largura))
    lh = max(1, round(logo.height * lw / logo.width))
    logo = logo.resize((lw, lh), Image.LANCZOS)
    m = round(W * margem)
    vert, horiz = (canto.split("-") + ["direito"])[:2]
    x = {"esquerdo": m, "centro": (W - lw) // 2, "direito": W - lw - m}[horiz]
    y = {"superior": m, "meio": (H - lh) // 2, "inferior": H - lh - m}[vert]

    area = arte.crop((x, y, x + lw, y + lh)).convert("L")
    desvio = ImageStat.Stat(area).stddev[0]
    aviso = None
    if desvio > 38:
        aviso = (f"a área sob a logo não está limpa (variação {desvio:.0f}): pode haver texto ou detalhe. "
                 "Confira a peça; se cobriu algo, gere de novo com esse canto vazio ou troque o canto.")

    if sombra:
        s = Image.new("RGBA", arte.size, (0, 0, 0, 0))
        preta = Image.new("RGBA", logo.size, (0, 0, 0, 0))
        preta.putalpha(logo.getchannel("A").point(lambda v: int(v * 0.45)))
        s.paste(preta, (x + max(1, lw // 120), y + max(1, lw // 90)), preta)
        arte = Image.alpha_composite(arte, s.filter(ImageFilter.GaussianBlur(max(2, lw // 40))))
    camada = Image.new("RGBA", arte.size, (0, 0, 0, 0))
    camada.paste(logo, (x, y), logo)
    return Image.alpha_composite(arte, camada), aviso


def main(argv=None):
    p = argparse.ArgumentParser(description="Logo oficial: checar, gerar versão branca e compor sobre a arte.")
    sub = p.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("checar"); c.add_argument("logo")
    b = sub.add_parser("branca"); b.add_argument("logo"); b.add_argument("saida", nargs="?")
    k = sub.add_parser("compor"); k.add_argument("arte"); k.add_argument("logo")
    k.add_argument("--canto", default="inferior-direito",
                   choices=[f"{v}-{h}" for v in ("superior", "meio", "inferior") for h in ("esquerdo", "centro", "direito")])
    k.add_argument("--largura", type=float, default=0.22, help="fração da largura da arte (padrão 0.22)")
    k.add_argument("--margem", type=float, default=0.06, help="margem de segurança, fração da largura (padrão 0.06)")
    k.add_argument("--sombra", action="store_true", help="sombra suave de integração (nunca chapa)")
    k.add_argument("--saida")
    a = p.parse_args(argv)

    if a.cmd == "checar":
        im = Image.open(a.logo)
        if tem_transparencia(im):
            print(f"ok: {a.logo} tem transparência real ({im.size[0]}x{im.size[1]}).")
            return 0
        print(f"ATENÇÃO: {a.logo} não tem transparência. Anexado assim, o gerador cola o fundo junto. "
              "Use: python ferramentas/logo.py branca (ou peça ao dono da marca o PNG com fundo transparente).")
        return 1

    if a.cmd == "branca":
        origem = Path(a.logo)
        saida = Path(a.saida) if a.saida else origem.with_name(origem.stem + "-branca.png")
        versao_branca(Image.open(origem)).save(saida)
        print(f"versão branca gravada em {saida}")
        return 0

    arte_p = Path(a.arte)
    final, aviso = compor(Image.open(arte_p), Image.open(a.logo), a.canto, a.largura, a.margem, a.sombra)
    saida = Path(a.saida) if a.saida else arte_p.with_name(arte_p.stem + "-com-logo.png")
    final.convert("RGB").save(saida) if saida.suffix.lower() in (".jpg", ".jpeg") else final.save(saida)
    print(f"logo composta em {saida}")
    if aviso:
        print(f"aviso: {aviso}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
