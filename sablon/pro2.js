const src = require('fs').readFileSync(__dirname + '/pro.js', 'utf8');
const head = src.slice(0, src.indexOf('// 1) Yurt'));
var { chromium } = require('playwright'); var fs = require('fs'), path = require('path');
eval(head.replace(/^const /gm, 'var ').replace("var { chromium } = require('playwright');",'').replace("var fs = require('fs'), path = require('path');",''));

const dot = t => t.replace(/\.(<|$)/g, '<span style="margin-left:-.12em">.</span>$1');
// generic green card ad
function card(o, H) {
  const s = H > 1400;
  const ticket = (c, y, rot, z) => `<div style="position:absolute;left:90px;right:90px;top:${y}px;transform:rotate(${rot}deg);z-index:${z};background:#fff;border-radius:40px;box-shadow:0 30px 70px rgba(0,0,0,.35);display:flex;overflow:hidden">
   <div style="flex:1;padding:44px 50px">
    <div style="display:flex;justify-content:space-between;font-size:24px;font-weight:700;letter-spacing:4px;color:#8A94A3"><span>${c.tag}</span><span style="color:${G}">UCUZBILETBAK</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:26px">
     <div><div style="font-family:'JetBrains Mono';font-size:${c.fs || 96}px;font-weight:700;color:#0B1E3B;line-height:1">${c.fc}</div><div style="font-size:30px;color:#4B5768;margin-top:6px">${c.from}</div></div>
     <div style="flex:1;margin:0 30px;border-top:4px dashed #CBD3DE;position:relative;top:-18px"><div style="position:absolute;left:50%;top:-34px;transform:translateX(-50%) ${c.icon ? '' : 'rotate(90deg)'};width:64px;height:64px">${c.icon || PLANE(G)}</div></div>
     <div style="text-align:right"><div style="font-family:'JetBrains Mono';font-size:${c.fs || 96}px;font-weight:700;color:#0B1E3B;line-height:1">${c.tc}</div><div style="font-size:30px;color:#4B5768;margin-top:6px">${c.to}</div></div>
    </div>
    <div style="display:flex;gap:50px;margin-top:30px;font-size:22px;color:#8A94A3;font-weight:700;letter-spacing:2px">${c.meta.map(([a, b]) => `<div>${a}<div style="font-size:32px;color:#0B1E3B;letter-spacing:0;margin-top:6px">${b}</div></div>`).join('')}</div>
   </div>
   <div style="width:150px;border-left:4px dashed #E2E7EE;background:#F5F8FB;display:flex;align-items:center;justify-content:center"><div style="display:flex;gap:6px;height:220px">${[10, 4, 14, 4, 8, 4, 12, 6, 4, 10].map(w => `<span style="width:${w}px;background:#0B1E3B;border-radius:2px"></span>`).join('')}</div></div>
  </div>`;
  return `<div class="r" style="height:${H}px;background:radial-gradient(circle at 80% 10%,#16C172 0,transparent 45%),linear-gradient(160deg,#0B6B3D 0%,#06371F 100%)">
   <div style="padding:${s ? 120 : 70}px 80px 0;display:flex;justify-content:space-between;align-items:center">${LOGO()}<span class="chip" style="background:rgba(255,255,255,.12);color:#fff;border:2px solid rgba(255,255,255,.25)">${o.chip}</span></div>
   <div style="padding:${s ? 90 : 56}px 80px 0"><h1 style="font-size:92px;line-height:1;letter-spacing:-3.5px;font-weight:800;color:#fff">${dot(o.h1)}<br><span style="color:#7CF0B2">${dot(o.h2)}</span></h1>
   <p style="font-size:36px;color:#CDEFDD;margin-top:24px">${o.sub}</p></div>
   <div style="position:relative;height:${s ? 820 : 560}px">${s && o.card2 ? ticket(o.card2, 470, 4, 1) : ''}${ticket(o.card, s ? 90 : 70, -3, 2)}</div>
   <div style="margin-top:auto;padding:0 80px ${s ? 240 : 70}px;display:flex;justify-content:space-between;align-items:center"><span class="cta" style="background:#fff;color:${GD}">${o.cta} <i>→</i></span><span style="font-size:32px;font-weight:700;color:#fff">ucuzbiletbak.com</span></div>
  </div>`;
}
const BP = 'BOARDING PASS';
const VANI = `<svg viewBox="0 0 64 40" width="64" height="40" style="margin-top:12px"><path fill="${G}" d="M2 30V12Q2 6 8 6h34q5 0 8 4l8 9q4 1 4 5v6z"/><rect x="8" y="10" width="14" height="8" rx="2" fill="#fff"/><rect x="25" y="10" width="14" height="8" rx="2" fill="#fff"/><circle cx="15" cy="31" r="6" fill="#0B1E3B"/><circle cx="49" cy="31" r="6" fill="#0B1E3B"/></svg>`;
const ADS = {
  'pro-2': { chip: 'Uçak bileti', h1: 'Biletin hazır.', h2: 'Sadece yerini seç.', sub: 'Birçok havayolunu tek aramada karşılaştırın.', cta: 'Uçuşlara bak',
    card: { tag: BP, fc: 'IST', from: 'İstanbul', tc: 'LHR', to: 'Londra', meta: [['KAPI', 'B12'], ['KOLTUK', '14A'], ['SINIF', 'EKONOMİ']] },
    card2: { tag: BP, fc: 'LHR', from: 'Londra', tc: 'IST', to: 'İstanbul', meta: [['KAPI', 'C04'], ['KOLTUK', '14A'], ['SINIF', 'EKONOMİ']] } },
  'pro-5': { chip: 'Yurt dışı uçuşlar', h1: 'Dubai, Paris, Roma…', h2: 'Hepsi tek aramada.', sub: 'Yurt dışı biletinde en uygun fiyatı bulun.', cta: 'Bileti bul',
    card: { tag: BP, fc: 'IST', from: 'İstanbul', tc: 'DXB', to: 'Dubai', meta: [['KAPI', 'F07'], ['KOLTUK', '21C'], ['SINIF', 'EKONOMİ']] },
    card2: { tag: BP, fc: 'IST', from: 'İstanbul', tc: 'CDG', to: 'Paris', meta: [['KAPI', 'A18'], ['KOLTUK', '09F'], ['SINIF', 'EKONOMİ']] } },
  'pro-6': { chip: 'Yurt içi uçuşlar', h1: 'Hafta sonu kaçamağı?', h2: 'Bilet bizden.', sub: 'Antalya, İzmir, Bodrum, Dalaman ve tüm şehirler.', cta: 'Bileti bul',
    card: { tag: BP, fc: 'IST', from: 'İstanbul', tc: 'AYT', to: 'Antalya', meta: [['KAPI', 'D03'], ['KOLTUK', '06A'], ['SINIF', 'EKONOMİ']] },
    card2: { tag: BP, fc: 'ESB', from: 'Ankara', tc: 'BJV', to: 'Bodrum', meta: [['KAPI', 'B09'], ['KOLTUK', '12C'], ['SINIF', 'EKONOMİ']] } },
  'pro-7': { chip: 'VIP Vito transfer', h1: 'Uçaktan in.', h2: 'Aracın kapıda.', sub: 'Şoförlü VIP Vito, sabit fiyat, Türkiye geneli.', cta: 'Rezervasyon yap',
    card: { tag: 'VIP TRANSFER', fc: 'DLM', from: 'Dalaman Havalimanı', tc: 'MRM', to: 'Marmaris', icon: VANI, meta: [['ARAÇ', 'VIP VITO'], ['KARŞILAMA', 'UÇUŞTA'], ['FİYAT', 'SABİT']] },
    card2: { tag: 'VIP TRANSFER', fc: 'IST', from: 'İstanbul Havalimanı', tc: 'OTEL', to: 'Kapınıza', icon: VANI, meta: [['ARAÇ', 'VIP VITO'], ['ŞOFÖR', 'DAHİL'], ['FİYAT', 'SABİT']] } },
};
(async () => {
  const out = path.join(__dirname, 'reklam');
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }); const p = await b.newPage(); const fl = [];
  for (const [id, o] of Object.entries(ADS)) for (const H of [1350, 1920]) {
    await p.setViewportSize({ width: 1080, height: H });
    fs.writeFileSync(path.join(__dirname, '_s.html'), `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${BASE}</style></head><body>${card(o, H)}</body></html>`);
    await p.goto('file://' + path.join(__dirname, '_s.html')); await p.evaluate(() => document.fonts.ready);
    const f = `${id}-${H > 1400 ? 'story' : 'feed'}.jpg`; await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 93 }); fl.push(f);
  }
  await p.setViewportSize({ width: 1400, height: 300 });
  for (const kind of ['feed', 'story']) {
    fs.writeFileSync(path.join(__dirname, '_c.html'), `<body style="margin:0;background:#2b2b2b;display:flex;gap:10px;padding:10px">${fl.filter(f => f.includes(kind)).map(f => `<img src="file://${out}/${f}" style="width:${kind === 'feed' ? 340 : 250}px">`).join('')}</body>`);
    await p.goto('file://' + path.join(__dirname, '_c.html')); await p.waitForLoadState('networkidle');
    await p.screenshot({ path: path.join(__dirname, `yesil-${kind}-onizleme.png`), fullPage: true });
  }
  await b.close(); console.log(fl.join(' '));
})();
