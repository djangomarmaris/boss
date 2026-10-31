const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const { lux, page } = require('./_base.js');
const U = [
 { id:'ub-1', art:'plane', kicker:'Yurt dışı uçak bileti', h:'Yurt dışı biletinde uygun fiyat.', sub:'Birçok havayolunu tek aramada karşılaştırın.', cta:'Bileti bul →' },
 { id:'ub-2', art:'ticket', kicker:'Uçak bileti', h:'Avrupa, Dubai, Bakü. Tek aramada.', sub:'Fiyatları görün, size uyanı seçin.', cta:'Uçuşlara bak →' },
 { id:'ub-3', art:'van', kicker:'VIP Vito transfer', h:'Dalaman → Marmaris VIP transfer.', sub:'Sabit fiyat, uçuş saatinize göre karşılama.', cta:'Rezervasyon yap →' },
 { id:'ub-4', art:'plane', kicker:'Ucuz Bilet Bak', h:'Bilet + VIP transfer, tek adres.', sub:'Uçuşunuzu alın, transferinizi ekleyin.', cta:'Hemen ara →' },
];
const ctaHtml = t => `<div style="display:inline-block;margin-top:36px;background:#5FD899;color:#0B2B1B;font-weight:800;font-size:40px;padding:22px 46px;border-radius:60px">${t}</div>`;
function ub(s, story) {
  let h = lux(s).replace('</p></div><div class="f">', '</p>' + ctaHtml(s.cta) + '</div><div class="f">');
  if (story) h = h.replace('class="r dark"', 'class="r dark" style="height:1920px"').replace('<div class="p">', '<div class="p" style="height:900px">').replace('<div class="t">', '<div class="t" style="padding-top:90px">').replace('<div class="f">', '<div class="f" style="bottom:250px">');
  return h;
}
// KADER
const fd = path.join(__dirname, 'node_modules/@fontsource');
const kf = ['cormorant-garamond/600.css','cormorant-garamond/700.css','sora/400.css','sora/800.css'].map(f => fs.readFileSync(fd + '/' + f, 'utf8').replace(/url\(\.\/files\//g, `url(file://${fd}/${f.split('/')[0]}/files/`)).join('');
const K = [
 { id:'kd-1', icon:'cup', kicker:'Kahve falı', h:'Fincanının fotoğrafını çek, Kader yorumlasın.', sub:'Kahve falı, tarot, burç ve rüya tabiri tek uygulamada.' },
 { id:'kd-2', icon:'card', kicker:'Tarot', h:'Bugün senin kartın hangisi?', sub:'Kartını çek, günün mesajını oku.' },
 { id:'kd-3', icon:'moon', kicker:'Rüya tabiri', h:'Rüyanı anlat, anlamını öğren.', sub:'Dün gece ne gördün? Kader yorumlasın.' },
 { id:'kd-4', icon:'stars', kicker:'Burç yorumları', h:'Burcun bugün ne diyor?', sub:'Günlük burç yorumu ve doğum haritası.' },
];
const G = '#D9B56C';
const ICON = {
 moon: `<svg viewBox="0 0 200 200" width="360"><path d="M130 30a80 80 0 1 0 40 120A70 70 0 0 1 130 30z" fill="${G}"/></svg>`,
 cup: `<svg viewBox="0 0 240 200" width="420"><path d="M40 60h130v40a65 65 0 0 1-130 0z" fill="none" stroke="${G}" stroke-width="8"/><path d="M170 75a28 28 0 0 1 0 50" fill="none" stroke="${G}" stroke-width="8"/><ellipse cx="105" cy="185" rx="95" ry="10" fill="none" stroke="${G}" stroke-width="6"/><path d="M80 40c-10-12 10-18 0-32M110 40c-10-12 10-18 0-32M140 40c-10-12 10-18 0-32" stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
 card: `<svg viewBox="0 0 220 300" width="300"><rect x="10" y="10" width="200" height="280" rx="16" fill="none" stroke="${G}" stroke-width="8"/><rect x="30" y="30" width="160" height="240" rx="8" fill="none" stroke="${G}" stroke-width="3"/><circle cx="110" cy="130" r="40" fill="${G}"/><path d="M110 60l6 18h19l-15 11 6 18-16-11-16 11 6-18-15-11h19z" fill="${G}" transform="translate(0 150) scale(1)"/></svg>`,
 stars: `<svg viewBox="0 0 300 220" width="440"><g fill="${G}"><path d="M150 10l14 44h46l-37 27 14 44-37-27-37 27 14-44-37-27h46z"/><path d="M50 120l7 22h23l-19 13 7 22-18-13-18 13 7-22-19-13h23z"/><path d="M250 130l7 22h23l-19 13 7 22-18-13-18 13 7-22-19-13h23z"/></g></svg>`,
};
function kd(s, story) {
  const H = story ? 1920 : 1350;
  const dots = Array.from({ length: 60 }, (_, i) => { const x = (i * 137) % 1080, y = (i * 271) % (story ? 1000 : 640), r = 1 + (i % 3); return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${0.15 + (i % 5) / 10}"/>`; }).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>${kf}*{box-sizing:border-box}body{margin:0}
.r{width:1080px;height:${H}px;background:radial-gradient(circle at 50% 25%,#26305C 0,#141A33 55%,#0C1022 100%);position:relative;overflow:hidden;color:#F3EAD7;font-family:Sora}
.st{position:absolute;inset:0}.ic{position:absolute;left:0;right:0;top:${story ? 260 : 120}px;display:flex;justify-content:center}
.t{position:absolute;left:90px;right:90px;top:${story ? 900 : 640}px}
.k{font-size:28px;letter-spacing:7px;text-transform:uppercase;color:${G};font-weight:800}
h1{font-family:'Cormorant Garamond';font-weight:700;font-size:96px;line-height:1.02;margin:22px 0 0;color:#F3EAD7}
p{font-size:36px;line-height:1.4;margin:26px 0 0;color:#C9C3B3}
.c{display:inline-block;margin-top:36px;background:${G};color:#141A33;font-weight:800;font-size:38px;padding:22px 46px;border-radius:60px}
.f{position:absolute;left:90px;right:90px;bottom:${story ? 250 : 64}px;display:flex;justify-content:space-between;align-items:center;font-size:28px;color:#A8A08C}
.wm{font-family:'Cormorant Garamond';font-weight:700;font-size:52px;letter-spacing:8px;color:${G}}
</style></head><body><div class="r"><svg class="st" width="1080" height="${H}">${dots}</svg><div class="ic">${ICON[s.icon]}</div>
<div class="t"><div class="k">${s.kicker}</div><h1>${s.h}</h1><p>${s.sub}</p><div class="c">Uygulamayı indir →</div></div>
<div class="f"><div class="wm">KADER</div><div>Fal · Tarot · Burç</div></div></div></body></html>`;
}
(async () => {
  const out = path.join(__dirname, 'reklam'); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const fl = [];
  const jobs = [...U.map(s => [s, false, 'u']), ...U.map(s => [s, true, 'u']), ...K.map(s => [s, false, 'k']), ...K.map(s => [s, true, 'k'])];
  for (const [s, st, t] of jobs) {
    await p.setViewportSize({ width: 1080, height: st ? 1920 : 1350 });
    fs.writeFileSync(path.join(__dirname, '_s.html'), t === 'u' ? page(ub(s, st)) : kd(s, st));
    await p.goto('file://' + path.join(__dirname, '_s.html')); await p.evaluate(() => document.fonts.ready);
    const f = `${s.id}-${st ? 'story' : 'feed'}.jpg`; await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 92 }); fl.push(f);
  }
  for (const [name, pre] of [['ucuz', 'ub-'], ['kader', 'kd-']]) {
    const sel = fl.filter(f => f.startsWith(pre));
    await p.setViewportSize({ width: 1600, height: 300 });
    fs.writeFileSync(path.join(__dirname, '_c.html'), `<body style="margin:0;background:#333;display:flex;gap:8px;padding:8px;align-items:flex-start">${sel.map(f => `<img src="file://${out}/${f}" style="width:${f.includes('story') ? 180 : 230}px">`).join('')}</body>`);
    await p.goto('file://' + path.join(__dirname, '_c.html')); await p.waitForLoadState('networkidle');
    await p.screenshot({ path: path.join(__dirname, `reklam-${name}-onizleme.png`), fullPage: true });
  }
  await b.close(); console.log(fl.length);
})();
