"""Karusel kartlarından 9:16 Reels videosu üretir: her kart krem zeminde, hafif yakınlaşma, yumuşak geçiş.
Kullanım: python3 reel.py <çıktı_adı> <kart1> <kart2> ...   (kartlar 2026-11/tarz/ altındaki jpg adları, uzantısız)"""
import os, sys, subprocess, tempfile
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tarz import A
from playwright.sync_api import sync_playwright
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
SRC = os.path.join(ROOT, "2026-11/tarz")
OUT = os.path.join(ROOT, "2026-11/reels"); os.makedirs(OUT, exist_ok=True)
PER, FADE = 2.6, 0.45
def frame(img):
    return f"""<html><body style='margin:0;width:1080px;height:1920px;background:#F4EEE3;position:relative;overflow:hidden;font-family:"Liberation Serif",serif'>
<div style='position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(255,255,255,.6),transparent 65%)'></div>
<img src='file://{SRC}/{img}.jpg' style='position:absolute;top:230px;left:40px;width:1000px;border-radius:18px;box-shadow:0 30px 50px rgba(40,25,10,.25)'>
<div style='position:absolute;bottom:230px;left:0;right:0;text-align:center;font-size:46px;font-weight:700;color:#16181D'>Kitabını bastırmak için <span style='color:#B5121B'>DM'den yaz</span></div>
</body></html>"""
def build(name, cards):
    tmp = tempfile.mkdtemp()
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page(viewport={"width":1080,"height":1920})
        for i, c in enumerate(cards):
            f = f"{tmp}/f{i}.html"; open(f,"w").write(frame(c)); pg.goto("file://"+f); pg.wait_for_timeout(250)
            pg.screenshot(path=f"{tmp}/f{i}.png")
        b.close()
    fr = 30; n = int(PER*fr)
    clips = []
    for i in range(len(cards)):
        o = f"{tmp}/c{i}.mp4"
        subprocess.run(["ffmpeg","-y","-loglevel","error","-loop","1","-i",f"{tmp}/f{i}.png","-t",str(PER),
          "-vf",f"scale=2160:-1,zoompan=z='min(1+0.0009*on,1.07)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={n}:s=1080x1920:fps={fr},format=yuv420p",
          "-c:v","libx264","-preset","veryfast","-crf","20",o],check=True)
        clips.append(o)
    # xfade zinciri
    inputs = sum([["-i",c] for c in clips],[])
    fc, last = [], "[0:v]"
    for i in range(1,len(clips)):
        off = round(i*(PER-FADE),3); lbl = f"[v{i}]"
        fc.append(f"{last}[{i}:v]xfade=transition=fade:duration={FADE}:offset={off}{lbl}"); last = lbl
    total = len(clips)*(PER-FADE)+FADE
    out = f"{OUT}/{name}.mp4"
    subprocess.run(["ffmpeg","-y","-loglevel","error",*inputs,"-f","lavfi","-t",str(total),"-i","anullsrc=r=44100:cl=stereo",
      "-filter_complex",";".join(fc) if fc else "null","-map",last if fc else "0:v","-map",f"{len(clips)}:a",
      "-c:v","libx264","-preset","medium","-crf","21","-pix_fmt","yuv420p","-c:a","aac","-shortest","-movflags","+faststart",out],check=True)
    subprocess.run(["ffmpeg","-y","-loglevel","error","-i",f"{tmp}/f0.png","-q:v","3",f"{OUT}/{name}-kapak.jpg"],check=True)
    return out
if __name__ == "__main__":
    print(build(sys.argv[1], sys.argv[2:]))
