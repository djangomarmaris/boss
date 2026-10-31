const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const fd = path.join(__dirname, 'node_modules/@fontsource');
const font = (pkg, w) => fs.readFileSync(`${fd}/${pkg}/${w}.css`, 'utf8').replace(/url\(\.\/files\//g, `url(file://${fd}/${pkg}/files/`);
const FONTS = ['400', '500', '700', '800'].map(w => font('plus-jakarta-sans', w)).join('') + font('jetbrains-mono', '700');

const G = '#0FA35B', GD = '#06522E';
const LOGO = (c = '#fff', a = '#3DDC84') => `<div class="logo"><span class="mk" style="background:${a}"><svg viewBox="0 0 24 24" width="34" height="34"><path fill="#06311C" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg></span><span style="color:${c}"><b>ucuz</b>biletbak</span></div>`;
const PLANE = c => `<svg viewBox="0 0 24 24"><path fill="${c}" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`;
const CHECK = c => `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="${c}"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const BASE = `${FONTS}*{box-sizing:border-box;margin:0}body{margin:0}
.r{width:1080px;position:relative;overflow:hidden;font-family:'Plus Jakarta Sans';display:flex;flex-direction:column}
.logo{display:flex;align-items:center;gap:16px;font-size:40px;letter-spacing:-1px;font-weight:500}.logo b{font-weight:800}
.mk{width:60px;height:60px;border-radius:18px;display:grid;place-items:center}
.cta{display:inline-flex;align-items:center;gap:18px;font-weight:800;font-size:40px;padding:28px 52px;border-radius:999px}
.cta i{font-style:normal;font-size:44px}
.chip{display:inline-block;padding:14px 26px;border-radius:999px;font-weight:700;font-size:30px}
`;

// 1) Yurt dışı — uçak penceresinden gün batımı
function d1(H) {
  const s = H > 1400;
  return `<div class="r" style="height:${H}px;background:linear-gradient(180deg,#0B1E3B 0%,#1B3A6B 38%,#E2725B 72%,#F7B267 100%)">
  <svg style="position:absolute;inset:0" width="1080" height="${H}">${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 197) % 1080}" cy="${(i * 113) % (H * .35)}" r="${1 + i % 2}" fill="#fff" opacity="${.25 + (i % 4) / 8}"/>`).join('')}</svg>
  <div style="padding:${s ? 120 : 70}px 80px 0;display:flex;justify-content:space-between;align-items:center;position:relative;z-index:3">${LOGO()}<span class="chip" style="background:rgba(255,255,255,.14);color:#fff;border:2px solid rgba(255,255,255,.3)">Yurt dışı uçak bileti</span></div>
  <div style="position:relative;height:${s ? 900 : 600}px;margin-top:${s ? 60 : 20}px">
    <div style="position:absolute;left:50%;top:0;transform:translateX(-50%);width:${s ? 600 : 440}px;height:${s ? 800 : 560}px;border-radius:330px;background:#E9EEF5;box-shadow:0 40px 80px rgba(0,0,0,.35),inset 0 0 0 26px #D5DCE6,inset 0 0 0 30px #C3CCD8"></div>
    <div style="position:absolute;left:50%;top:${s ? 44 : 36}px;transform:translateX(-50%);width:${s ? 520 : 376}px;height:${s ? 720 : 488}px;border-radius:290px;overflow:hidden;background:linear-gradient(180deg,#4A6FA5 0%,#F08A5D 58%,#FBD38D 72%,#FFE8C2 100%)">
      <div style="position:absolute;left:-40px;right:-40px;bottom:0;height:42%;background:radial-gradient(ellipse at 30% 0%,#fff 0 30%,transparent 31%),radial-gradient(ellipse at 75% 10%,#FFF6EA 0 34%,transparent 35%),radial-gradient(ellipse at 50% 40%,#fff 0 46%,transparent 47%),linear-gradient(#FFF1DD,#FFE1BC)"></div>
      <div style="position:absolute;left:50%;top:44%;width:120px;height:120px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(#FFF7D6,#FFD27A 60%,rgba(255,210,122,0))"></div>
      <svg viewBox="0 0 600 300" style="position:absolute;left:-30px;bottom:${s ? 150 : 110}px;width:110%"><path d="M0 220 L600 120 L600 150 L40 250Z" fill="#B9C3D1"/><path d="M0 232 L600 138 L600 146 L20 244Z" fill="#8F9AAB"/><path d="M520 70 L560 130 L600 126 L560 60Z" fill="#9AA6B8"/></svg>
    </div>
    <div style="position:absolute;left:50%;top:${s ? 18 : 14}px;transform:translateX(-50%);width:120px;height:14px;border-radius:7px;background:#C3CCD8"></div>
  </div>
  <div style="flex:1;background:#fff;border-radius:56px 56px 0 0;margin-top:-70px;position:relative;z-index:4;padding:70px 80px ${s ? 240 : 60}px;display:flex;flex-direction:column">
    <h1 style="font-size:84px;line-height:1.02;letter-spacing:-3px;font-weight:800;color:#0B1E3B">Dünyayı keşfetmenin<br><span style="color:${G}">en uygun yolu.</span></h1>
    <p style="font-size:36px;color:#4B5768;margin-top:24px">Londra · Paris · Dubai · Roma · Bakü</p>
    <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center"><span class="cta" style="background:${G};color:#fff">Bileti bul <i>→</i></span><span style="font-size:32px;font-weight:700;color:#0B1E3B">ucuzbiletbak.com</span></div>
  </div></div>`;
}

// 2) Boarding pass — premium
function d2(H) {
  const s = H > 1400;
  const pass = (from, fc, to, tc, y, rot, z) => `<div style="position:absolute;left:90px;right:90px;top:${y}px;transform:rotate(${rot}deg);z-index:${z};background:#fff;border-radius:40px;box-shadow:0 30px 70px rgba(0,0,0,.35);display:flex;overflow:hidden">
   <div style="flex:1;padding:44px 50px">
    <div style="display:flex;justify-content:space-between;font-size:24px;font-weight:700;letter-spacing:4px;color:#8A94A3"><span>BOARDING PASS</span><span style="color:${G}">UCUZBILETBAK</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:26px">
     <div><div style="font-family:'JetBrains Mono';font-size:96px;font-weight:700;color:#0B1E3B;line-height:1">${fc}</div><div style="font-size:30px;color:#4B5768;margin-top:6px">${from}</div></div>
     <div style="flex:1;margin:0 30px;border-top:4px dashed #CBD3DE;position:relative;top:-18px"><div style="position:absolute;left:50%;top:-34px;transform:translateX(-50%) rotate(90deg);width:64px;height:64px">${PLANE(G)}</div></div>
     <div style="text-align:right"><div style="font-family:'JetBrains Mono';font-size:96px;font-weight:700;color:#0B1E3B;line-height:1">${tc}</div><div style="font-size:30px;color:#4B5768;margin-top:6px">${to}</div></div>
    </div>
    <div style="display:flex;gap:56px;margin-top:30px;font-size:22px;color:#8A94A3;font-weight:700;letter-spacing:2px">${[['KAPI', 'B12'], ['KOLTUK', '14A'], ['SINIF', 'EKONOMİ']].map(([a, b]) => `<div>${a}<div style="font-size:34px;color:#0B1E3B;letter-spacing:0;margin-top:6px">${b}</div></div>`).join('')}</div>
   </div>
   <div style="width:150px;border-left:4px dashed #E2E7EE;background:#F5F8FB;display:flex;align-items:center;justify-content:center"><div style="display:flex;gap:6px;height:220px">${[10, 4, 14, 4, 8, 4, 12, 6, 4, 10].map(w => `<span style="width:${w}px;background:#0B1E3B;border-radius:2px"></span>`).join('')}</div></div>
  </div>`;
  return `<div class="r" style="height:${H}px;background:radial-gradient(circle at 80% 10%,#16C172 0,transparent 45%),linear-gradient(160deg,#0B6B3D 0%,#06371F 100%)">
   <div style="padding:${s ? 120 : 70}px 80px 0;display:flex;justify-content:space-between;align-items:center">${LOGO()}<span class="chip" style="background:rgba(255,255,255,.12);color:#fff;border:2px solid rgba(255,255,255,.25)">Uçak bileti</span></div>
   <div style="padding:${s ? 90 : 56}px 80px 0"><h1 style="font-size:92px;line-height:1;letter-spacing:-3.5px;font-weight:800;color:#fff">Biletin hazır.<br><span style="color:#7CF0B2">Sadece yerini seç.</span></h1>
   <p style="font-size:36px;color:#CDEFDD;margin-top:24px">Birçok havayolunu tek aramada karşılaştırın.</p></div>
   <div style="position:relative;height:${s ? 820 : 560}px">${s ? pass('Londra', 'LHR', 'İstanbul', 'IST', 470, 4, 1) : ''}${pass('İstanbul', 'IST', 'Londra', 'LHR', s ? 90 : 70, -3, 2)}</div>
   <div style="margin-top:auto;padding:0 80px ${s ? 240 : 70}px;display:flex;justify-content:space-between;align-items:center"><span class="cta" style="background:#fff;color:${GD}">Uçuşlara bak <i>→</i></span><span style="font-size:32px;font-weight:700;color:#fff">ucuzbiletbak.com</span></div>
  </div>`;
}

// 3) Yurt içi — havalimanı kalkış panosu
function d3(H) {
  const s = H > 1400;
  const rows = [['08:15', 'ANTALYA', 'AYT'], ['09:40', 'İZMİR', 'ADB'], ['11:05', 'BODRUM', 'BJV'], ['12:30', 'DALAMAN', 'DLM'], ['14:20', 'TRABZON', 'TZX'], ['16:45', 'ANKARA', 'ESB'], ...(s ? [['18:10', 'GAZİANTEP', 'GZT'], ['19:35', 'VAN', 'VAN'], ['21:00', 'KAYSERİ', 'ASR']] : [])];
  const cell = t => `<span style="display:inline-block;background:#1E2329;color:#FFD23F;border-radius:6px;padding:4px 0;width:46px;text-align:center;margin-right:4px;box-shadow:inset 0 -2px 0 #000,inset 0 2px 0 #2A3038">${t}</span>`;
  const word = (w, n) => w.padEnd(n, ' ').split('').map(c => cell(c === ' ' ? '&nbsp;' : c)).join('');
  return `<div class="r" style="height:${H}px;background:linear-gradient(180deg,#0E1116,#151A21)">
   <div style="padding:${s ? 120 : 70}px 80px 0;display:flex;justify-content:space-between;align-items:center">${LOGO()}<span class="chip" style="background:#FFD23F;color:#151A21">Yurt içi uçuşlar</span></div>
   <div style="padding:${s ? 80 : 50}px 80px 0"><h1 style="font-size:88px;line-height:1.02;letter-spacing:-3px;font-weight:800;color:#fff">Türkiye'nin her yerine<br><span style="color:#3DDC84">uygun fiyatla uç.</span></h1></div>
   <div style="margin:${s ? 70 : 44}px 70px 0;background:#0A0C10;border-radius:28px;padding:34px 30px;border:3px solid #2A3038;box-shadow:0 30px 60px rgba(0,0,0,.5)">
    <div style="display:flex;justify-content:space-between;font-size:24px;font-weight:800;letter-spacing:5px;color:#8A94A3;margin-bottom:20px;padding:0 6px"><span>KALKIŞ · İSTANBUL</span><span>VARIŞ</span></div>
    ${rows.map(([t, c, k]) => `<div style="display:flex;justify-content:space-between;align-items:center;font-family:'JetBrains Mono';font-size:40px;font-weight:700;margin:10px 0"><span>${word(t, 5)}</span><span>${word(c, 9)}</span><span style="color:#3DDC84;font-size:30px;font-family:'Plus Jakarta Sans';font-weight:800">${k}</span></div>`).join('')}
   </div>
   <div style="margin-top:auto;padding:0 80px ${s ? 240 : 70}px;display:flex;justify-content:space-between;align-items:center"><span class="cta" style="background:#3DDC84;color:#06311C">Bileti bul <i>→</i></span><span style="font-size:32px;font-weight:700;color:#fff">ucuzbiletbak.com</span></div>
  </div>`;
}

// 4) VIP Vito — gece, lüks
function d4(H) {
  const s = H > 1400;
  const VAN = `<svg viewBox="0 0 900 360" style="width:100%;display:block;overflow:visible">
   <defs><linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A3F47"/><stop offset=".45" stop-color="#16191E"/><stop offset="1" stop-color="#0B0D10"/></linearGradient>
   <linearGradient id="w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5D6B7D"/><stop offset=".5" stop-color="#1A2028"/><stop offset="1" stop-color="#0B0E12"/></linearGradient>
   <radialGradient id="l" cx="0" cy=".5" r="1"><stop offset="0" stop-color="#FFF6D8" stop-opacity=".9"/><stop offset="1" stop-color="#FFF6D8" stop-opacity="0"/></radialGradient></defs>
   <ellipse cx="450" cy="322" rx="420" ry="22" fill="#000" opacity=".6"/>
   <path d="M870 250 L1200 210 L1200 300 L870 280Z" fill="url(#l)"/>
   <path fill="url(#b)" d="M40 290 V140 Q40 70 110 64 L580 56 Q640 56 690 96 L800 186 Q860 200 868 240 L872 290 Z"/>
   <path d="M60 110 Q300 96 600 92" stroke="#6A7280" stroke-width="3" fill="none" opacity=".7"/>
   <path fill="url(#w)" d="M110 96 H330 V176 H96 Q96 110 110 96Z"/><path fill="url(#w)" d="M346 96 H560 V176 H346Z"/><path fill="url(#w)" d="M576 96 H612 Q640 96 664 118 L736 178 H576Z"/>
   <path d="M338 92 V286 M568 92 V286" stroke="#05070A" stroke-width="4"/>
   <rect x="40" y="214" width="832" height="6" fill="#C9A45C" opacity=".85"/>
   <rect x="846" y="222" width="26" height="14" rx="4" fill="#FFF6D8"/><rect x="40" y="170" width="14" height="40" rx="4" fill="#B3261E"/>
   ${[190, 720].map(x => `<circle cx="${x}" cy="290" r="62" fill="#07080A"/><circle cx="${x}" cy="290" r="40" fill="#2B2F36"/><circle cx="${x}" cy="290" r="40" fill="none" stroke="#8B93A0" stroke-width="3"/>${Array.from({ length: 5 }, (_, i) => `<line x1="${x}" y1="290" x2="${x + 38 * Math.cos(i * 1.2566)}" y2="${290 + 38 * Math.sin(i * 1.2566)}" stroke="#9AA2AE" stroke-width="5"/>`).join('')}<circle cx="${x}" cy="290" r="10" fill="#C9A45C"/>`).join('')}
  </svg>`;
  const feats = ['Sabit fiyat, sürpriz yok', 'Uçuş saatinize göre karşılama', 'Türkiye genelinde hizmet'];
  return `<div class="r" style="height:${H}px;background:radial-gradient(ellipse at 50% ${s ? 46 : 52}%,#2A2418 0,#101114 55%,#08090B 100%)">
   <div style="padding:${s ? 120 : 70}px 80px 0;display:flex;justify-content:space-between;align-items:center">${LOGO('#fff', '#C9A45C')}<span class="chip" style="background:transparent;color:#E8CC8E;border:2px solid #C9A45C">VIP Transfer</span></div>
   <div style="padding:${s ? 80 : 50}px 80px 0"><div style="font-size:28px;letter-spacing:8px;font-weight:800;color:#C9A45C">ŞOFÖRLÜ VIP VITO</div>
   <h1 style="font-size:90px;line-height:1.02;letter-spacing:-3px;font-weight:800;color:#fff;margin-top:20px">Havalimanından<br>kapınıza, <span style="color:#E8CC8E">VIP.</span></h1></div>
   <div style="position:relative;margin:${s ? 120 : 50}px 0 0;padding:0 60px">
    <div style="position:absolute;left:0;right:0;bottom:-10px;height:70px;background:linear-gradient(90deg,transparent,rgba(201,164,92,.25),transparent)"></div>
    <div style="position:absolute;left:0;right:0;bottom:30px;height:4px;background:repeating-linear-gradient(90deg,#C9A45C 0 80px,transparent 80px 160px);opacity:.5"></div>${VAN}</div>
   <div style="padding:${s ? 110 : 40}px 80px 0;display:flex;flex-direction:column;gap:20px">${feats.map(f => `<div style="display:flex;align-items:center;gap:20px;font-size:36px;color:#E9E4D8;font-weight:500">${CHECK('#C9A45C')}${f}</div>`).join('')}</div>
   <div style="margin-top:auto;padding:0 80px ${s ? 240 : 70}px;display:flex;justify-content:space-between;align-items:center"><span class="cta" style="background:linear-gradient(90deg,#E8CC8E,#C9A45C);color:#141108">Rezervasyon yap <i>→</i></span><span style="font-size:32px;font-weight:700;color:#fff">ucuzbiletbak.com</span></div>
  </div>`;
}

const list = [['pro-1', d1], ['pro-2', d2], ['pro-3', d3], ['pro-4', d4]];
(async () => {
  const out = path.join(__dirname, 'reklam'); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage();
  const fl = [];
  for (const [id, fn] of list) for (const H of [1350, 1920]) {
    await p.setViewportSize({ width: 1080, height: H });
    fs.writeFileSync(path.join(__dirname, '_s.html'), `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${BASE}</style></head><body>${fn(H)}</body></html>`);
    await p.goto('file://' + path.join(__dirname, '_s.html')); await p.evaluate(() => document.fonts.ready);
    const f = `${id}-${H > 1400 ? 'story' : 'feed'}.jpg`; await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 93 }); fl.push(f);
  }
  await p.setViewportSize({ width: 1400, height: 300 });
  for (const kind of ['feed', 'story']) {
    fs.writeFileSync(path.join(__dirname, '_c.html'), `<body style="margin:0;background:#2b2b2b;display:flex;gap:10px;padding:10px">${fl.filter(f => f.includes(kind)).map(f => `<img src="file://${out}/${f}" style="width:${kind === 'feed' ? 340 : 250}px">`).join('')}</body>`);
    await p.goto('file://' + path.join(__dirname, '_c.html')); await p.waitForLoadState('networkidle');
    await p.screenshot({ path: path.join(__dirname, `pro-${kind}-onizleme.png`), fullPage: true });
  }
  await b.close(); console.log(fl.join(' '));
})();
