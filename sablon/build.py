import os
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__))
A = f"file://{D}/assets"

CSS = f"""
@font-face{{font-family:Frak;src:url({A}/frak.woff2)}}
*{{margin:0;padding:0;box-sizing:border-box}}
:root{{--paper:#F4EEE3;--ink:#16181D;--red:#B5121B;--gold:#B08A4A;--mute:#5a5148}}
body{{width:1080px;height:1350px;position:relative;overflow:hidden;background:var(--paper);
 font-family:'Liberation Serif',serif;color:var(--ink)}}
.paper{{position:absolute;inset:0;
 background:repeating-linear-gradient(to bottom,transparent 0 47px,rgba(80,60,30,.07) 47px 48px),
 radial-gradient(ellipse at 50% 35%,rgba(255,255,255,.55),transparent 70%);}}
.wm{{position:absolute;top:70px;left:0;right:0;text-align:center}}
.wm img{{height:62px}}
.foot{{position:absolute;bottom:58px;left:80px;right:80px;display:flex;justify-content:space-between;
 align-items:center;font-size:30px;font-weight:700;color:var(--mute)}}
.pill{{display:inline-block;background:var(--red);color:#fff;font-weight:700;font-size:34px;
 padding:10px 26px;border-radius:6px;box-shadow:0 3px 0 #7d0c12}}
.foot .pill{{font-size:26px;padding:8px 18px}}
.c{{position:absolute;left:80px;right:80px;text-align:center}}
.h{{font-weight:700;font-size:86px;line-height:1.06;letter-spacing:-1px}}
.h .r{{color:var(--red)}}
.f{{font-family:Frak;color:var(--red);font-weight:400}}
.b{{font-size:38px;line-height:1.45;color:#2b2925}}
.rule{{display:flex;align-items:center;justify-content:center;gap:18px;color:var(--gold);font-size:26px;margin:34px 0}}
.rule span{{width:130px;height:2px;background:var(--gold)}}
.eng{{position:absolute;bottom:0;height:640px;object-fit:cover;
 -webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 38%);opacity:.95}}
.fade{{position:absolute;left:0;right:0;bottom:0;height:190px;background:linear-gradient(to bottom,transparent,var(--paper) 70%)}}
.dots{{font-size:30px;font-weight:700;color:var(--mute);margin-top:26px}}
.dots b{{color:var(--gold);margin:0 16px}}
"""

def page(body):
    return f"<html><head><meta charset=utf-8><style>{CSS}</style></head><body><div class=paper></div>" \
           f"<div class=wm><img src='{A}/wordmark.png'></div>{body}" \
           f"<div class=fade></div><div class=foot><span>@eyayinevi</span><span class=pill>Yayınevi 5.0</span></div></body></html>"

def era(city_year, num, title_html, body, img_side):
    eng = {
        "left": f"<img class=eng src='{A}/eng_left.png' style='left:50%;transform:translateX(-50%);width:1080px;object-position:50% 4%'>",
        "right": f"<img class=eng src='{A}/eng_right.png' style='left:50%;transform:translateX(-50%);width:1080px;object-position:60% 20%'>",
        "logo": f"<img src='{A}/logo_block.png' style='position:absolute;bottom:250px;left:50%;transform:translateX(-50%);width:300px;filter:drop-shadow(0 30px 30px rgba(0,0,0,.25))'>",
    }[img_side]
    return page(f"""{eng}
<div class=c style='top:190px'>
 <span class=pill>{city_year}</span>
 <div style='font-size:46px;font-weight:700;color:var(--mute);margin-top:34px;letter-spacing:6px'>{num}</div>
 <div class=h style='margin-top:10px'>{title_html}</div>
 <div class=rule><span></span>✦<span></span></div>
 <div class=b>{body}</div>
</div>""")

POSTS = {
 "01-merhaba": page(f"""
<img class=eng src='{A}/eng_left.png' style='left:-40px;width:600px;height:560px;object-position:40% 6%'>
<img class=eng src='{A}/eng_right.png' style='right:-40px;width:600px;height:560px;object-position:70% 6%'>
<div class=c style='top:180px'>
 <div style='font-size:40px;font-weight:700;color:var(--red);letter-spacing:4px'>MERHABA</div>
 <div class=h style='margin-top:30px'><span class=f style='font-size:120px'>M</span>atbaa iki kez<br>icat edildi.<br><span class=r>Üçüncüsünü<br>biz yaptık.</span></div>
 <div class=dots>Mainz 1455<b>•</b>İstanbul 1727<b>•</b><span style='color:var(--red)'>Türkiye 2023</span></div>
</div>"""),
 "02-mainz": era("Mainz · 1455", "BİRİNCİ İCAT",
    "Harfler<br><span class=r>yerinden oynadı.</span>",
    "Gutenberg'in hareketli harfleri,<br>kitabı birkaç kişinin değil<br>herkesin malı yaptı.", "right"),
 "03-istanbul": era("İstanbul · 1727", "İKİNCİ İCAT",
    "Osmanlı'nın<br><span class=r>ilk yayınevi.</span>",
    "İbrahim Müteferrika'nın Sultanahmet'teki<br>atölyesinden çıkan kitaplar,<br>bu toprakların okuma serüvenini başlattı.", "left"),
 "04-turkiye": era("Türkiye · 2023", "ÜÇÜNCÜ İCAT",
    "Yayınevi <span class=r>5.0</span>",
    "Yazdığın satırdan okurun eline kadar<br>bütün yolculuk tek çatı altında.", "logo"),
 "05-yazar": page(f"""
<div class=c style='top:260px'>
 <div class=h style='font-size:104px'><span class=f style='font-size:150px'>K</span>itabın<br>çekmecede<br><span class=r>kalmasın.</span></div>
 <div class=rule><span></span>✦<span></span></div>
 <div class=b>Müsvedden, dosyan, yarım kalmış romanın…<br>Hepsinin bir okuru var.<br>Onu birlikte bulalım.</div>
 <div style='margin-top:60px'><span class=pill style='font-size:38px'>Kitabını bizimle yayımla</span></div>
</div>"""),
 "06-yolculuk": page(f"""
<div class=c style='top:200px'>
 <div class=h style='font-size:78px'>Bir kitabın<br><span class=r>yolculuğu</span></div>
 <div class=rule><span></span>✦<span></span></div>
 <div style='text-align:left;margin:10px auto 0;width:640px'>
 {''.join(f"<div style='display:flex;align-items:center;gap:30px;margin:0 0 26px'><span style='width:74px;height:74px;flex:none;border-radius:8px;background:{'var(--red)' if i in (0,5) else 'var(--ink)'};color:#fff;font-size:40px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 0 {'#7d0c12' if i in (0,5) else '#000'}'>{i+1}</span><span style='font-size:46px;font-weight:700'>{t}</span></div>" for i,t in enumerate(['Yazı','Editörlük ve düzelti','Dizgi','Kapak tasarımı','ISBN ve bandrol','Okur']))}
 </div>
</div>"""),
 "07-biliyor": page(f"""
<img class=eng src='{A}/eng_left.png' style='left:50%;transform:translateX(-50%);width:1080px;height:480px;object-position:50% 4%;opacity:.45'>
<div class=c style='top:200px'>
 <span class=pill>Biliyor muydunuz?</span>
 <div style='font-size:330px;font-weight:700;color:var(--red);line-height:1;margin-top:30px'>17</div>
 <div class=h style='font-size:60px;margin-top:0'>Müteferrika matbaası,<br>1729-1742 arasında<br>17 eser bastı.</div>
 <div class=b style='margin-top:30px'>İlki, iki ciltlik Vankulu Lügati'ydi.</div>
</div>"""),
}

if __name__ == "__main__":
    out = os.path.join(D, "out"); os.makedirs(out, exist_ok=True)
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1080, "height": 1350})
        for name, html in POSTS.items():
            f = os.path.join(out, name + ".html"); open(f, "w").write(html)
            pg.goto("file://" + f); pg.wait_for_timeout(500)
            pg.screenshot(path=os.path.join(out, name + ".jpg"), type="jpeg", quality=92)
        b.close()
    print("ok")
