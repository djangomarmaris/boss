"""Rengârenk 'kitap vitrini' kartı: üstte el yazısı başlık, 3x3 (kare kapak) ya da 3x2 (dikey kapak) ızgara, çocuk çizimi süslemeler."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tarz import S
D = os.path.dirname(os.path.abspath(__file__)); AS = f"file://{D}/../assets"; C = f"file://{D}/covers"
FONT = f"""@font-face{{font-family:B;font-weight:800;src:url({AS}/baloo-800.woff2);unicode-range:U+0000-00FF}}
@font-face{{font-family:B;font-weight:800;src:url({AS}/baloo-800-ext.woff2);unicode-range:U+0100-024F}}
@font-face{{font-family:B;font-weight:700;src:url({AS}/baloo-700.woff2);unicode-range:U+0000-00FF}}
@font-face{{font-family:B;font-weight:700;src:url({AS}/baloo-700-ext.woff2);unicode-range:U+0100-024F}}"""
DOODLES = """
<svg style='position:absolute;left:20px;top:30px' width='170' height='110' viewBox='0 0 170 110' fill='none' stroke='#5B8FD9' stroke-width='4' stroke-linecap='round'><path d='M20 80 Q10 50 40 45 Q45 15 80 25 Q100 5 125 30 Q160 30 150 65 Q160 90 125 88 L35 90 Q15 92 20 80Z' fill='#DCE9FB'/><path d='M45 70 Q60 60 75 70 M90 62 Q105 52 120 64'/></svg>
<svg style='position:absolute;right:24px;top:40px' width='150' height='100' viewBox='0 0 170 110' fill='none' stroke='#5B8FD9' stroke-width='4' stroke-linecap='round'><path d='M20 80 Q10 50 40 45 Q45 15 80 25 Q100 5 125 30 Q160 30 150 65 Q160 90 125 88 L35 90 Q15 92 20 80Z' fill='#DCE9FB'/></svg>
<svg style='position:absolute;left:16px;top:250px;transform:rotate(-30deg)' width='96' height='96' viewBox='0 0 100 100' stroke='#E8833A' stroke-width='3.5' stroke-linejoin='round'><path d='M50 8 Q72 28 66 62 L34 62 Q28 28 50 8Z' fill='#FFB36B'/><circle cx='50' cy='34' r='7' fill='#fff'/><path d='M34 52 L20 70 L36 64 M66 52 L80 70 L64 64' fill='#F25C54'/><path d='M42 66 L50 92 L58 66' fill='#FFD166'/></svg>
<svg style='position:absolute;right:40px;bottom:230px' width='90' height='170' viewBox='0 0 60 120' fill='none' stroke='#E45D5D' stroke-width='3.5' stroke-linecap='round'><ellipse cx='30' cy='30' rx='24' ry='28' fill='#F7A1A1'/><path d='M30 58 Q22 75 32 88 Q42 100 28 116'/></svg>
<svg style='position:absolute;left:30px;bottom:150px' width='90' height='90' viewBox='0 0 100 100' stroke='#E8B53A' stroke-width='4' fill='#FFE08A'><circle cx='50' cy='28' r='14'/><circle cx='72' cy='50' r='14'/><circle cx='50' cy='72' r='14'/><circle cx='28' cy='50' r='14'/><circle cx='50' cy='50' r='10' fill='#fff'/></svg>
<svg style='position:absolute;right:30px;top:250px' width='70' height='70' viewBox='0 0 100 100' stroke='#E8B53A' stroke-width='4' fill='#FFE08A'><circle cx='50' cy='28' r='14'/><circle cx='72' cy='50' r='14'/><circle cx='50' cy='72' r='14'/><circle cx='28' cy='50' r='14'/><circle cx='50' cy='50' r='10' fill='#fff'/></svg>"""
def tiles(text, size, bg="#16181D", fg="#fff", red_first=False):
    out = []
    for i, ch in enumerate(text):
        if ch == " ":
            out.append(f"<span style='display:inline-block;width:{size*0.35}px'></span>"); continue
        b = "#B5121B" if (red_first and i == 0) else bg
        sh = "#7d0c12" if (red_first and i == 0) else "#000"
        out.append(f"<span style='display:inline-flex;align-items:center;justify-content:center;width:{size*0.82}px;height:{size*1.05}px;margin:0 2px;background:{b};color:{fg};border-radius:{size*0.12}px;box-shadow:0 {size*0.08}px 0 {sh};font-family:\"Liberation Serif\",serif;font-weight:700;font-size:{size*0.78}px'>{ch}</span>")
    return "".join(out)

def vitrin(kicker, line1, line2, slugs, foot="Tarzını seç, kitabını bastır"):
    """Dizgi kasası vitrini: ahşap kasanın gözlerinde kapaklar, altlarında tarz adı; başlık harf bloklarıyla."""
    sq = S[slugs[0]][4] == "3-7"
    w = 236 if sq else 244; h = w if sq else round(w * 1.5)
    cell_w, cell_h = w + 36, h + 70
    letters = len(line1.replace(" ", ""))
    tsize = min(78, int(900 / max(letters, 1) / 0.86))
    cells = "".join(
        f"<div style='width:{cell_w}px;height:{cell_h}px;background:linear-gradient(#E9D3AE,#DDC08F);box-shadow:inset 0 6px 10px rgba(80,50,20,.35),inset 0 -2px 0 rgba(255,255,255,.4);border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:14px'>"
        f"<div style='width:{w}px;height:{h}px;border-radius:3px 7px 7px 3px;overflow:hidden;box-shadow:4px 8px 14px rgba(40,25,10,.35);position:relative'><img src='{C}/kapak-{s}.jpg' style='width:100%;height:100%;object-fit:cover'><div style='position:absolute;left:0;top:0;bottom:0;width:10px;background:linear-gradient(to right,rgba(0,0,0,.25),rgba(255,255,255,.15))'></div></div>"
        f"<div style='margin-top:12px;background:#B5121B;color:#fff;font-family:\"Liberation Serif\",serif;font-weight:700;font-size:21px;padding:3px 12px;border-radius:4px;white-space:nowrap'>{S[s][0]}</div></div>"
        for s in slugs)
    return f"""<html><head><meta charset=utf-8><style>*{{margin:0;box-sizing:border-box}}body{{width:1080px;height:1350px;background:#F4EEE3;position:relative;overflow:hidden;font-family:"Liberation Serif",serif;color:#16181D}}</style></head><body>
<div style='position:absolute;inset:0;background:radial-gradient(ellipse at 50% 30%,rgba(255,255,255,.65),transparent 65%)'></div>
<div style='position:absolute;top:36px;left:0;right:0;text-align:center'>
 <div style='font-size:24px;font-weight:700;letter-spacing:6px;color:#B5121B'>{kicker}</div>
 <div style='margin-top:14px;white-space:nowrap'>{tiles(line1, tsize, red_first=True)}</div>
 <div style='font-size:44px;font-style:italic;font-weight:700;color:#B5121B;margin-top:16px'>{line2}</div>
</div>
<div style='position:absolute;top:{262 if sq else 268}px;left:50%;transform:translateX(-50%);padding:18px;background:#6B4423;border-radius:10px;box-shadow:0 14px 30px rgba(40,25,10,.35),inset 0 0 0 3px #8A5A33;display:grid;grid-template-columns:repeat(3,{cell_w}px);gap:12px'>{cells}</div>
<div style='position:absolute;bottom:34px;left:60px;right:60px;display:flex;align-items:center;justify-content:space-between'>
 <img src='{AS}/wordmark.png' style='height:46px'>
 <span style='background:#B5121B;color:#fff;font-weight:700;font-size:32px;padding:12px 26px;border-radius:8px;box-shadow:0 4px 0 #7d0c12'>{foot}</span>
</div></body></html>"""
