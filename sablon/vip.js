var { chromium } = require('playwright'); var fs = require('fs'), path = require('path');
const src = fs.readFileSync(__dirname + '/pro.js', 'utf8');
const head = src.slice(0, src.indexOf('// 1) Yurt'));
eval(head.replace(/^const /gm, 'var ').replace("var { chromium } = require('playwright');", '').replace("var fs = require('fs'), path = require('path');", ''));
var VAN = eval('`' + src.match(/const VAN = `([\s\S]*?)`;\n  const feats/)[1] + '`');
const dot = t => t.replace(/\.(<|$)/g, '<span style="margin-left:-.12em">.</span>$1');
const CK = `<svg viewBox="0 0 24 24" width="38" height="38"><circle cx="12" cy="12" r="11" fill="#7CF0B2"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#06371F" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
function vip(o, H) {
  const s = H > 1400;
  return `<div class="r" style="height:${H}px;background:radial-gradient(circle at 80% 10%,#16C172 0,transparent 45%),linear-gradient(160deg,#0B6B3D 0%,#06371F 100%)">
   <div style="padding:${s ? 120 : 70}px 80px 0;display:flex;justify-content:space-between;align-items:center">${LOGO()}<span class="chip" style="background:#7CF0B2;color:#06371F">VIP TRANSFER</span></div>
   <div style="padding:${s ? 90 : 50}px 80px 0"><div style="font-size:28px;letter-spacing:7px;font-weight:800;color:#7CF0B2">${o.kick}</div>
    <h1 style="font-size:${o.fs || 92}px;line-height:1;letter-spacing:-3.5px;font-weight:800;color:#fff;margin-top:18px">${dot(o.h1)}<br><span style="color:#7CF0B2">${dot(o.h2)}</span></h1></div>
   <div style="position:relative;margin-top:${s ? 110 : 40}px;padding:0 50px">
    <div style="position:absolute;left:0;right:0;bottom:-6px;height:90px;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.35))"></div>
    <div style="position:absolute;left:0;right:0;bottom:26px;height:5px;background:repeating-linear-gradient(90deg,rgba(124,240,178,.7) 0 80px,transparent 80px 160px)"></div>
    <div style="position:absolute;right:70px;top:-10px;background:#fff;color:#06371F;border-radius:24px;padding:18px 26px;font-weight:800;font-size:30px;box-shadow:0 20px 40px rgba(0,0,0,.3);z-index:3;line-height:1.15">${o.badge}</div>
    ${VAN}</div>
   <div style="margin:${s ? 110 : 34}px 80px 0;background:rgba(255,255,255,.1);border:2px solid rgba(255,255,255,.18);border-radius:30px;padding:${s ? 40 : 28}px 40px;display:flex;flex-direction:column;gap:${s ? 24 : 16}px">${o.feats.map(f => `<div style="display:flex;align-items:center;gap:20px;font-size:${s ? 38 : 34}px;color:#fff;font-weight:600">${CK}${f}</div>`).join('')}</div>
   <div style="margin-top:auto;padding:0 80px ${s ? 240 : 64}px;display:flex;justify-content:space-between;align-items:center"><span class="cta" style="background:#fff;color:${GD}">${o.cta} <i>→</i></span><span style="font-size:32px;font-weight:700;color:#fff">ucuzbiletbak.com</span></div>
  </div>`;
}
const ADS = {
  'pro-8': { kick: 'ŞOFÖRLÜ VIP VITO', h1: 'VIP transfer,', h2: 'havalimanından kapınıza.', fs: 84, badge: 'Sabit<br>fiyat', cta: 'Rezervasyon yap',
    feats: ['Uçuş saatinize göre karşılama', 'Şoförlü, konforlu VIP Vito', 'Türkiye genelinde hizmet'] },
  'pro-9': { kick: 'AİLE · GRUP · KURUMSAL', h1: 'Herkes tek araçta.', h2: 'Valizler de.', badge: 'VIP<br>Vito', cta: 'Transfer ayarla',
    feats: ['Geniş iç hacim, bol bagaj yeri', 'Düğün, toplantı ve özel günler', 'Kapıdan kapıya, sabit fiyat'] },
};
(async () => {
  const out = path.join(__dirname, 'reklam');
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }); const p = await b.newPage(); const fl = [];
  for (const [id, o] of Object.entries(ADS)) for (const H of [1350, 1920]) {
    await p.setViewportSize({ width: 1080, height: H });
    fs.writeFileSync(path.join(__dirname, '_s.html'), `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${BASE}</style></head><body>${vip(o, H)}</body></html>`);
    await p.goto('file://' + path.join(__dirname, '_s.html')); await p.evaluate(() => document.fonts.ready);
    const f = `${id}-${H > 1400 ? 'story' : 'feed'}.jpg`; await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 93 }); fl.push(f);
  }
  await p.setViewportSize({ width: 1400, height: 300 });
  fs.writeFileSync(path.join(__dirname, '_c.html'), `<body style="margin:0;background:#2b2b2b;display:flex;gap:10px;padding:10px;align-items:flex-start">${fl.map(f => `<img src="file://${out}/${f}" style="width:${f.includes('feed') ? 380 : 270}px">`).join('')}</body>`);
  await p.goto('file://' + path.join(__dirname, '_c.html')); await p.waitForLoadState('networkidle');
  await p.screenshot({ path: path.join(__dirname, 'vip-onizleme.png'), fullPage: true });
  await b.close(); console.log(fl.join(' '));
})();
