// Ucuz Bilet — tasarım v2 (yeşil biniş kartı serisinin geliştirilmiş hali)
const src = require('fs').readFileSync(__dirname + '/pro.js', 'utf8');
const head = src.slice(0, src.indexOf('// 1) Yurt'));
var { chromium } = require('playwright'); var fs = require('fs'), path = require('path');
eval(head.replace(/^const /gm, 'var ').replace("var { chromium } = require('playwright');", '').replace("var fs = require('fs'), path = require('path');", ''));
const VAN = eval('`' + src.slice(src.indexOf('const VAN = `') + 13, src.indexOf('</svg>`;', src.indexOf('const VAN = `')) + 6) + '`');

const MINT = '#7CF0B2', INK = '#0B1E3B';
const GRAIN = `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.07;mix-blend-mode:overlay;pointer-events:none"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`;
const OK = (c, t) => `<span style="display:inline-flex;align-items:center;gap:12px;padding:14px 24px;border-radius:999px;background:${t ? 'rgba(255,255,255,.1)' : '#fff'};border:2px solid ${t ? 'rgba(255,255,255,.18)' : '#D5EBDD'};font-size:27px;font-weight:700;color:${t ? '#fff' : INK}"><svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="11" fill="${c}"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const APPB = (dark) => `<span style="display:inline-flex;align-items:center;gap:10px;font-size:24px;font-weight:700;color:${dark ? '#fff' : INK};opacity:.9"><svg viewBox="0 0 24 24" width="30" height="30"><path fill="${dark ? '#fff' : INK}" d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.8 1.2 1.8 2.6 3.1 2.5 1.3-.1 1.7-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.2 3-2.5 1-1.4 1.3-2.7 1.4-2.8-.1 0-2.7-1-2.7-4.1zM14 5.3c.7-.8 1.2-2 1-3.2-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 2.9-1.3z"/></svg>App Store'da</span>`;

function ticket(c, dark) {
  const bg = dark ? '#0A3D24' : '#fff', fg = dark ? '#fff' : INK, mut = dark ? '#9FD9B8' : '#7A8597', line = dark ? 'rgba(255,255,255,.22)' : '#CBD3DE';
  const notch = `radial-gradient(circle at 0 50%,transparent 26px,#000 27px) left/51% 100% no-repeat,radial-gradient(circle at 100% 50%,transparent 26px,#000 27px) right/51% 100% no-repeat`;
  return `<div style="position:relative;filter:drop-shadow(0 34px 50px rgba(0,0,0,.35))"><div style="background:${bg};border-radius:36px;-webkit-mask:${notch};mask:${notch};display:flex;overflow:hidden">
   <div style="flex:1;padding:0 0 40px">
    <div style="background:${G};color:#fff;display:flex;justify-content:space-between;align-items:center;padding:20px 52px;font-size:22px;font-weight:800;letter-spacing:5px"><span>${c.tag}</span><span style="display:flex;align-items:center;gap:10px"><span style="width:26px;height:26px">${PLANE('#fff')}</span>UCUZBILETBAK</span></div>
    <div style="display:flex;align-items:flex-end;justify-content:space-between;padding:34px 52px 0">
     <div><div style="font-size:22px;font-weight:700;letter-spacing:3px;color:${mut}">NEREDEN</div><div style="font-family:'JetBrains Mono';font-size:${c.fs || 112}px;font-weight:700;color:${fg};line-height:1;margin-top:8px">${c.fc}</div><div style="font-size:30px;color:${mut};margin-top:8px;font-weight:500">${c.from}</div></div>
     <svg viewBox="0 0 300 120" width="300" height="120" style="margin-bottom:46px"><path d="M10 105 Q150 -15 290 105" fill="none" stroke="${line}" stroke-width="4" stroke-dasharray="4 12" stroke-linecap="round"/><circle cx="10" cy="105" r="8" fill="${G}"/><circle cx="290" cy="105" r="8" fill="none" stroke="${G}" stroke-width="4"/><g transform="translate(150 45) rotate(90) translate(-26 -26)"><svg width="52" height="52" viewBox="0 0 24 24">${c.icon ? '' : `<path fill="${G}" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>`}</svg></g>${c.icon ? `<g transform="translate(118 18)">${c.icon}</g>` : ''}</svg>
     <div style="text-align:right"><div style="font-size:22px;font-weight:700;letter-spacing:3px;color:${mut}">NEREYE</div><div style="font-family:'JetBrains Mono';font-size:${c.fs || 112}px;font-weight:700;color:${fg};line-height:1;margin-top:8px">${c.tc}</div><div style="font-size:30px;color:${mut};margin-top:8px;font-weight:500">${c.to}</div></div>
    </div>
    <div style="margin:30px 52px 0;border-top:3px dashed ${line}"></div>
    <div style="display:flex;justify-content:space-between;padding:24px 52px 0;font-size:21px;color:${mut};font-weight:700;letter-spacing:2px">${c.meta.map(([a, b]) => `<div>${a}<div style="font-size:31px;color:${fg};letter-spacing:0;margin-top:6px;font-weight:800">${b}</div></div>`).join('')}</div>
   </div>
   <div style="width:128px;border-left:4px dashed ${line};display:flex;align-items:center;justify-content:center;background:${dark ? '#08331E' : '#F3F7F5'}"><div style="display:flex;gap:5px;height:250px">${[10, 4, 14, 4, 8, 4, 12, 6, 4, 10, 6].map(w => `<span style="width:${w}px;background:${fg};border-radius:2px"></span>`).join('')}</div></div>
  </div></div>`;
}

// A — koyu yeşil, dev hayalet havalimanı kodu
function A(o, H) {
  return `<div class="r" style="height:${H}px;background:radial-gradient(circle at 85% 8%,#1ED67F 0,transparent 42%),radial-gradient(circle at 0% 100%,#0B5A33 0,transparent 55%),linear-gradient(165deg,#0A6B3C 0%,#053019 100%)">
  ${GRAIN}
  <div style="position:absolute;right:-40px;bottom:${H > 1400 ? 330 : 150}px;font-family:'JetBrains Mono';font-weight:700;font-size:430px;line-height:1;color:transparent;-webkit-text-stroke:3px rgba(255,255,255,.09);letter-spacing:-10px">${o.ghost}</div>
  <div style="padding:${H > 1400 ? 130 : 66}px 76px 0;display:flex;justify-content:space-between;align-items:center;position:relative">${LOGO()}<span class="chip" style="background:rgba(255,255,255,.12);color:#fff;border:2px solid rgba(255,255,255,.25)">${o.chip}</span></div>
  <div style="padding:${H > 1400 ? 90 : 50}px 76px 0;position:relative">
   <div style="font-size:26px;font-weight:800;letter-spacing:7px;color:${MINT}">${o.kick}</div>
   <h1 style="font-size:${o.fs || 100}px;line-height:.98;letter-spacing:-4px;font-weight:800;color:#fff;margin-top:18px">${o.h1}<br><span style="color:${MINT}">${o.h2}</span></h1></div>
  <div style="padding:${H > 1400 ? 110 : 46}px 64px 0;position:relative;transform:rotate(-2deg)">${ticket(o.card, false)}</div>
  <div style="padding:${H > 1400 ? 80 : 40}px 76px 0;display:flex;gap:14px;flex-wrap:wrap;position:relative">${o.feats.map(f => OK('#16C172', 1) + f + '</span>').join('')}</div>
  <div style="margin-top:auto;padding:0 76px ${H > 1400 ? 230 : 62}px;display:flex;justify-content:space-between;align-items:center;position:relative"><span class="cta" style="background:#fff;color:${GD};box-shadow:0 14px 30px rgba(0,0,0,.25)">${o.cta} <i>→</i></span><div style="text-align:right"><div style="font-size:32px;font-weight:800;color:#fff">ucuzbiletbak.com</div><div style="margin-top:8px">${APPB(1)}</div></div></div>
 </div>`;
}

// B — açık nane zemin, koyu yeşil bilet (akışta ritim için)
function B(o, H) {
  return `<div class="r" style="height:${H}px;background:radial-gradient(circle at 100% 0%,#C8F2DA 0,transparent 50%),linear-gradient(170deg,#F2FBF5 0%,#E2F4E9 100%)">
  <div style="position:absolute;left:-60px;top:${H > 1400 ? 560 : 330}px;font-family:'JetBrains Mono';font-weight:700;font-size:430px;line-height:1;color:transparent;-webkit-text-stroke:3px rgba(15,163,91,.12);letter-spacing:-10px">${o.ghost}</div>
  <div style="padding:${H > 1400 ? 130 : 66}px 76px 0;display:flex;justify-content:space-between;align-items:center;position:relative">${LOGO(INK, G).replace('#06311C', '#fff')}<span class="chip" style="background:${G};color:#fff">${o.chip}</span></div>
  <div style="padding:${H > 1400 ? 90 : 50}px 76px 0;position:relative">
   <div style="font-size:26px;font-weight:800;letter-spacing:7px;color:${G}">${o.kick}</div>
   <h1 style="font-size:${o.fs || 100}px;line-height:.98;letter-spacing:-4px;font-weight:800;color:${INK};margin-top:18px">${o.h1}<br><span style="color:${G}">${o.h2}</span></h1></div>
  <div style="padding:${H > 1400 ? 110 : 46}px 64px 0;position:relative;transform:rotate(2deg)">${ticket(o.card, true)}</div>
  <div style="padding:${H > 1400 ? 80 : 40}px 76px 0;display:flex;gap:14px;flex-wrap:wrap;position:relative">${o.feats.map(f => OK(G, 0) + f + '</span>').join('')}</div>
  <div style="margin-top:auto;padding:0 76px ${H > 1400 ? 230 : 62}px;display:flex;justify-content:space-between;align-items:center;position:relative"><span class="cta" style="background:${GD};color:#fff;box-shadow:0 14px 30px rgba(6,82,46,.3)">${o.cta} <i>→</i></span><div style="text-align:right"><div style="font-size:32px;font-weight:800;color:${INK}">ucuzbiletbak.com</div><div style="margin-top:8px">${APPB(0)}</div></div></div>
 </div>`;
}

// V — VIP Vito, yeşil zemin + büyük araç + bilgi kartı
function V(o, H) {
  const s = H > 1400;
  return `<div class="r" style="height:${H}px;background:radial-gradient(ellipse at 50% 58%,#14A862 0,transparent 55%),linear-gradient(165deg,#0A6B3C 0%,#042716 100%)">
  ${GRAIN}
  <div style="padding:${s ? 130 : 66}px 76px 0;display:flex;justify-content:space-between;align-items:center;position:relative">${LOGO()}<span class="chip" style="background:#fff;color:${GD}">VIP Transfer</span></div>
  <div style="padding:${s ? 90 : 50}px 76px 0;position:relative">
   <div style="font-size:26px;font-weight:800;letter-spacing:7px;color:${MINT}">${o.kick}</div>
   <h1 style="font-size:${o.fs || 100}px;line-height:.98;letter-spacing:-4px;font-weight:800;color:#fff;margin-top:18px">${o.h1}<br><span style="color:${MINT}">${o.h2}</span></h1></div>
  <div style="position:relative;margin-top:${s ? 140 : 60}px;padding:0 90px">
   <div style="position:absolute;left:50px;right:50px;bottom:6px;height:120px;background:radial-gradient(ellipse at 50% 50%,rgba(0,0,0,.55),transparent 70%)"></div>${VAN}
   <div style="position:absolute;right:70px;top:-40px;background:#fff;border-radius:28px;padding:20px 28px;box-shadow:0 20px 40px rgba(0,0,0,.3);text-align:center"><div style="font-size:20px;font-weight:800;letter-spacing:3px;color:#7A8597;margin-bottom:6px">FİYAT</div><div style="font-size:40px;font-weight:800;color:${GD};line-height:1.2">SABİT</div></div></div>
  <div style="margin:${s ? 110 : 40}px 64px 0;display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;position:relative">${o.feats.map(([t, d]) => `<div style="background:rgba(255,255,255,.1);border:2px solid rgba(255,255,255,.18);border-radius:26px;padding:22px 22px"><div style="font-size:30px;font-weight:800;color:#fff">${t}</div><div style="font-size:23px;color:#BFE9D1;margin-top:6px;line-height:1.3">${d}</div></div>`).join('')}</div>
  <div style="margin-top:auto;padding:0 76px ${s ? 230 : 62}px;display:flex;justify-content:space-between;align-items:center;position:relative"><span class="cta" style="background:#fff;color:${GD};box-shadow:0 14px 30px rgba(0,0,0,.25)">${o.cta} <i>→</i></span><span style="font-size:32px;font-weight:800;color:#fff">ucuzbiletbak.com</span></div>
 </div>`;
}

const BP = 'BOARDING PASS';
const VANI = `<svg viewBox="0 0 64 40" width="64" height="40"><path fill="${G}" d="M2 30V12Q2 6 8 6h34q5 0 8 4l8 9q4 1 4 5v6z"/><rect x="8" y="10" width="14" height="8" rx="2" fill="#fff"/><rect x="25" y="10" width="14" height="8" rx="2" fill="#fff"/><circle cx="15" cy="31" r="6" fill="#0B1E3B"/><circle cx="49" cy="31" r="6" fill="#0B1E3B"/></svg>`;
const SAMPLES = [
  ['v2-a', A, { ghost: 'DXB', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → DUBAİ', h1: 'Kışın güneş mi?', h2: 'Dubai’ye uç.', cta: 'Bileti bul',
    card: { tag: BP, fc: 'IST', from: 'İstanbul', tc: 'DXB', to: 'Dubai', meta: [['KAPI', 'F07'], ['KOLTUK', '21C'], ['SINIF', 'EKONOMİ'], ['E-BİLET', 'ANINDA']] },
    feats: ['Yüzlerce havayolu tek aramada', 'Anında e-bilet'] }],
  ['v2-b', B, { ghost: 'BJV', chip: 'Uçuş + transfer', kick: 'BİLET + VIP VITO', h1: 'Bodrum’a uç,', h2: 'aracın kapıda.', cta: 'Hemen planla',
    card: { tag: 'UÇUŞ + TRANSFER', fc: 'IST', from: 'İstanbul', tc: 'BJV', to: 'Bodrum', meta: [['UÇUŞ', 'EKONOMİ'], ['TRANSFER', 'VIP VITO'], ['KARŞILAMA', 'KAPIDA'], ['FİYAT', 'SABİT']] },
    feats: ['Bilet ve transfer tek adreste', 'Uçuş saatinize göre karşılama'] }],
  ['v2-v', V, { kick: 'ŞOFÖRLÜ VIP VITO', h1: 'Uçaktan in,', h2: 'aracın hazır.', cta: 'Rezervasyon yap',
    feats: [['Havalimanı', 'Uçuşunuza göre karşılama'], ['Aile & grup', 'Geniş araç, bol bagaj'], ['Türkiye', 'Tüm havalimanları']] }],
];

if (require.main === module) (async () => {
  const out = path.join(__dirname, 'v2'); fs.mkdirSync(out, { recursive: true });
  const only = process.argv[2];
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }); const p = await b.newPage(); const fl = [];
  for (const [id, fn, o] of SAMPLES) {
    if (only && id !== only) continue;
    await p.setViewportSize({ width: 1080, height: 1350 });
    fs.writeFileSync(path.join(__dirname, '_v2.html'), `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${BASE}</style></head><body>${fn(o, 1350)}</body></html>`);
    await p.goto('file://' + path.join(__dirname, '_v2.html')); await p.evaluate(() => document.fonts.ready);
    const f = path.join(out, id + '.jpg'); await p.screenshot({ path: f, type: 'jpeg', quality: 93 }); fl.push(f);
  }
  await b.close(); console.log(fl.join('\n'));
})();
module.exports = { A, B, V, ticket, BASE, BP, VANI };
