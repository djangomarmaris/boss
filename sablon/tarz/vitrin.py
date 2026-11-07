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
def vitrin(kicker, line1, line2, slugs, foot="Kitabını bastırmak için DM'den yaz →"):
    sq = S[slugs[0]][4] == "3-7"
    cols = 3; w = 268 if sq else 250; h = w if sq else round(w * 1.5)
    gap = 26
    covers = "".join(f"<div style='width:{w}px;height:{h}px;border-radius:4px 8px 8px 4px;overflow:hidden;box-shadow:6px 10px 18px rgba(40,30,20,.28);position:relative'><img src='{C}/kapak-{s}.jpg' style='width:100%;height:100%;object-fit:cover'><div style='position:absolute;left:0;top:0;bottom:0;width:12px;background:linear-gradient(to right,rgba(0,0,0,.22),rgba(255,255,255,.15))'></div></div>" for s in slugs)
    return f"""<html><head><meta charset=utf-8><style>{FONT}*{{margin:0;box-sizing:border-box}}body{{width:1080px;height:1350px;background:#FFFBF2;position:relative;overflow:hidden;font-family:B,sans-serif}}</style></head><body>
{DOODLES}
<div style='position:absolute;top:44px;left:0;right:0;text-align:center'>
 <div style='font-size:42px;font-weight:800;color:#E8833A;letter-spacing:1px'>{kicker}</div>
 <div style='font-size:96px;font-weight:800;color:#7BAE3F;line-height:1;margin-top:8px;text-shadow:3px 3px 0 #fff'>{line1}</div>
 <div style='font-size:80px;font-weight:800;color:#2F6FCF;line-height:1.05;margin-top:6px'>{line2}</div>
</div>
<div style='position:absolute;top:{360 if sq else 360}px;left:0;right:0;display:grid;grid-template-columns:repeat({cols},{w}px);gap:{gap}px;justify-content:center'>{covers}</div>
<div style='position:absolute;bottom:34px;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:24px'>
 <img src='{AS}/wordmark.png' style='height:44px'>
 <span style='font-size:38px;font-weight:700;color:#2B2B2B'>{foot}</span>
</div></body></html>"""
