// GoVito LinkedIn v2 — ürün ekranı mockup'ları, koyu premium
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const fd = path.join(__dirname, 'node_modules/@fontsource');
const font = (pkg, w) => fs.readFileSync(`${fd}/${pkg}/${w}.css`, 'utf8').replace(/url\(\.\/files\//g, `url(file://${fd}/${pkg}/files/`);
const FONTS = ['400', '500', '600', '700', '800'].map(w => { try { return font('plus-jakarta-sans', w); } catch { return ''; } }).join('') + font('jetbrains-mono', '700');
const G = '#3BE08C', G2 = '#1FA463', BG = '#050B08', MUT = '#8FA89A';
const LOGO = 'file://' + path.join(__dirname, 'gvlogo.png');
const WORD = (s = 44) => `<span style="display:inline-flex;align-items:center;gap:${Math.round(s*.28)}px"><img src="${LOGO}" style="width:${Math.round(s*1.3)}px;height:${Math.round(s*1.3)}px;border-radius:50%;object-fit:cover"><span style="font-size:${s}px;font-weight:800;letter-spacing:-1px;color:#fff">GoVito</span></span>`;
const GRAIN = `<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.08;mix-blend-mode:overlay;pointer-events:none"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`;
const CAR = (c = G) => `<svg viewBox="0 0 64 40" width="56" height="35"><path fill="${c}" d="M2 30V12Q2 6 8 6h34q5 0 8 4l8 9q4 1 4 5v6z"/><rect x="8" y="10" width="14" height="8" rx="2" fill="#0B1410"/><rect x="25" y="10" width="14" height="8" rx="2" fill="#0B1410"/><circle cx="15" cy="31" r="6" fill="#0B1410" stroke="${c}" stroke-width="2"/><circle cx="49" cy="31" r="6" fill="#0B1410" stroke="${c}" stroke-width="2"/></svg>`;
const OK = `<svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="11" fill="${G}"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#04130B" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// harita (soyut yol ağı)
const MAP = (h, route) => `<svg viewBox="0 0 400 ${h}" width="100%" height="${h}" style="display:block;background:#0C1712">
 ${Array.from({ length: 9 }, (_, i) => `<path d="M${-20 + i * 55} ${h} C ${40 + i * 50} ${h * .6}, ${i * 40} ${h * .3}, ${60 + i * 48} -10" stroke="#16261E" stroke-width="${i % 3 ? 3 : 7}" fill="none"/>`).join('')}
 ${Array.from({ length: 6 }, (_, i) => `<path d="M-10 ${30 + i * h / 6} Q 200 ${10 + i * h / 6} 410 ${50 + i * h / 6}" stroke="#16261E" stroke-width="${i % 2 ? 3 : 6}" fill="none"/>`).join('')}
 <path d="M0 ${h * .78} Q 120 ${h * .7} 210 ${h * .82} T 400 ${h * .74} V ${h} H0Z" fill="#0A2A1F" opacity=".9"/>
 <path d="${route}" stroke="${G}" stroke-width="7" fill="none" stroke-linecap="round" stroke-dasharray="1 0"/>
 <path d="${route}" stroke="${G}" stroke-width="18" fill="none" stroke-linecap="round" opacity=".18"/>
</svg>`;

function PHONE(inner, w = 430) {
  const h = Math.round(w * 2.05);
  return `<div style="width:${w}px;height:${h}px;border-radius:64px;background:#0E1311;padding:14px;box-shadow:0 60px 120px rgba(0,0,0,.6),0 0 0 2px #2A332F,inset 0 0 0 2px #1B221F;position:relative">
   <div style="width:100%;height:100%;border-radius:52px;overflow:hidden;background:#07100B;position:relative;font-family:'Plus Jakarta Sans'">
    <div style="position:absolute;top:14px;left:50%;transform:translateX(-50%);width:120px;height:34px;border-radius:20px;background:#000;z-index:5"></div>
    <div style="height:60px;display:flex;justify-content:space-between;align-items:flex-end;padding:0 34px 6px;font-size:17px;font-weight:700;color:#fff"><span>9:41</span><span>●●● ▮</span></div>
    ${inner}
   </div></div>`;
}

const BOOK = (w) => PHONE(`
 <div style="padding:10px 26px 14px;display:flex;justify-content:space-between;align-items:center">${WORD(30)}<span style="width:40px;height:40px;border-radius:50%;background:#14231B;display:grid;place-items:center;color:${G};font-weight:800;font-size:18px">İG</span></div>
 ${MAP(330, 'M70 270 C 120 200, 170 220, 220 150 S 300 80, 330 60')}
 <div style="position:absolute;left:58px;top:378px;width:26px;height:26px;border-radius:50%;background:#fff;border:7px solid ${G}"></div>
 <div style="position:absolute;left:316px;top:168px;width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${G}"></div>
 <div style="margin:-40px 16px 0;position:relative;background:#101C16;border:1.5px solid #1F3329;border-radius:30px;padding:22px 22px">
  <div style="display:flex;gap:14px;align-items:center"><span style="width:12px;height:12px;border-radius:50%;background:#fff;box-shadow:0 0 0 4px #2A3A32"></span><div><div style="font-size:13px;color:${MUT};font-weight:700;letter-spacing:1px">NEREDEN</div><div style="font-size:19px;color:#fff;font-weight:700">Dalaman Havalimanı (DLM)</div></div></div>
  <div style="margin:8px 0 8px 5px;height:22px;border-left:2px dashed #2F4A3C"></div>
  <div style="display:flex;gap:14px;align-items:center"><span style="width:12px;height:12px;border-radius:3px;background:${G}"></span><div><div style="font-size:13px;color:${MUT};font-weight:700;letter-spacing:1px">NEREYE</div><div style="font-size:19px;color:#fff;font-weight:700">Marmaris, otel kapısı</div></div></div>
 </div>
 <div style="margin:14px 16px 0;background:#101C16;border:1.5px solid ${G};border-radius:26px;padding:16px 18px;display:flex;align-items:center;gap:14px">${CAR()}<div style="flex:1"><div style="font-size:18px;color:#fff;font-weight:800">Mercedes Vito · VIP</div><div style="font-size:14px;color:${MUT};margin-top:2px">Şoförlü · Lisanslı araç</div></div><span style="font-size:13px;font-weight:800;color:#04130B;background:${G};padding:6px 12px;border-radius:999px">SABİT FİYAT</span></div>
 <div style="margin:14px 16px 0;background:${G};border-radius:22px;padding:18px;text-align:center;font-size:20px;font-weight:800;color:#04130B">Rezervasyonu tamamla</div>
`, w);

const TRACK = (w) => PHONE(`
 <div style="padding:10px 26px 14px;display:flex;justify-content:space-between;align-items:center">${WORD(30)}<span style="font-size:14px;font-weight:800;color:${G};background:#12261B;padding:8px 14px;border-radius:999px">● CANLI</span></div>
 ${MAP(470, 'M40 430 C 90 360, 160 380, 200 300 S 260 160, 340 110')}
 <div style="position:absolute;left:178px;top:330px;background:#0B1410;border:3px solid ${G};border-radius:18px;padding:4px 6px;box-shadow:0 0 0 12px rgba(59,224,140,.15)">${CAR()}</div>
 <div style="position:absolute;left:326px;top:150px;width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#fff"></div>
 <div style="margin:-60px 16px 0;position:relative;background:#101C16;border:1.5px solid #1F3329;border-radius:30px;padding:22px">
  <div style="display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:14px;color:${G};font-weight:800;letter-spacing:1px">ŞOFÖRÜNÜZ YOLDA</div><div style="font-size:30px;color:#fff;font-weight:800;margin-top:4px">8 dk uzakta</div></div><span style="width:62px;height:62px;border-radius:50%;background:linear-gradient(135deg,#2A4436,#16261E);display:grid;place-items:center;font-size:22px;font-weight:800;color:#fff">MK</span></div>
  <div style="height:8px;border-radius:9px;background:#1A2A22;margin-top:16px;overflow:hidden"><div style="width:72%;height:100%;background:${G};border-radius:9px"></div></div>
  <div style="display:flex;justify-content:space-between;margin-top:14px;font-size:15px;color:${MUT};font-weight:600"><span>Mercedes Vito · VIP</span><span>Plaka uygulamada</span></div>
 </div>
`, w);

function PANEL() {
  const row = (r, s, c) => `<div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1.5px solid #15241C"><div style="display:flex;gap:14px;align-items:center"><span style="width:40px;height:40px;border-radius:12px;background:#12221A;display:grid;place-items:center">${CAR(G).replace('width="56" height="35"', 'width="28" height="18"')}</span><span style="font-size:19px;color:#fff;font-weight:700">${r}</span></div><span style="font-size:14px;font-weight:800;color:${c};background:${c}22;padding:6px 12px;border-radius:999px">${s}</span></div>`;
  return `<div style="width:900px;border-radius:26px;background:#0B130F;border:2px solid #1F3329;box-shadow:0 60px 120px rgba(0,0,0,.6);overflow:hidden;font-family:'Plus Jakarta Sans'">
   <div style="height:46px;background:#0F1A14;display:flex;align-items:center;gap:9px;padding:0 18px;border-bottom:1.5px solid #1A2A22"><span style="width:13px;height:13px;border-radius:50%;background:#FF5F57"></span><span style="width:13px;height:13px;border-radius:50%;background:#FEBC2E"></span><span style="width:13px;height:13px;border-radius:50%;background:#28C840"></span><span style="margin-left:20px;font-size:15px;color:${MUT};background:#0B130F;padding:6px 18px;border-radius:9px;font-weight:600">partner.govitoapp.com</span></div>
   <div style="display:flex">
    <div style="width:200px;background:#09110D;padding:22px 18px;border-right:1.5px solid #15241C;font-size:16px;font-weight:700;color:${MUT};display:flex;flex-direction:column;gap:18px">${WORD(26)}<span style="color:#fff;background:#12261B;padding:10px 12px;border-radius:12px">▦ Rezervasyonlar</span><span style="padding:0 12px">◎ Hizmet bölgesi</span><span style="padding:0 12px">₺ Fiyatlarım</span><span style="padding:0 12px">▣ Araçlarım</span><span style="padding:0 12px">⎙ U-ETDS</span></div>
    <div style="flex:1;padding:24px">
     <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px">${[['Yeni talepler', '▲'], ['Bugünkü transferler', '◷'], ['U-ETDS bildirimi', 'OTOMATİK']].map(([t, v], i) => `<div style="background:#101C16;border:1.5px solid #1F3329;border-radius:18px;padding:16px"><div style="font-size:14px;color:${MUT};font-weight:700">${t}</div><div style="font-size:${i === 2 ? 22 : 30}px;color:${i === 2 ? G : '#fff'};font-weight:800;margin-top:8px">${v}</div></div>`).join('')}</div>
     <div style="margin-top:16px;background:#101C16;border:1.5px solid #1F3329;border-radius:18px;overflow:hidden">
      ${row('Dalaman Havalimanı → Marmaris', 'ONAYLANDI', G)}${row('Antalya Havalimanı → Belek', 'YENİ TALEP', '#FFC857')}${row('Bodrum Havalimanı → Yalıkavak', 'ONAYLANDI', G)}${row('İzmir Havalimanı → Çeşme', 'YOLDA', '#5CC8FF')}${row('İstanbul Havalimanı → Beşiktaş', 'ONAYLANDI', G)}
     </div>
    </div>
   </div></div>`;
}

function NETWORK() {
  const N = { IST: [470, 120, 'İstanbul'], ADB: [250, 420, 'İzmir'], BJV: [300, 600, 'Bodrum'], DLM: [440, 680, 'Dalaman'], AYT: [620, 630, 'Antalya'], ECN: [660, 840, 'Kıbrıs'] };
  const arcs = [['IST', 'ADB'], ['IST', 'BJV'], ['IST', 'DLM'], ['IST', 'AYT'], ['IST', 'ECN'], ['ADB', 'BJV'], ['BJV', 'DLM'], ['DLM', 'AYT'], ['AYT', 'ECN']];
  return `<svg viewBox="0 0 920 960" width="920" height="960" style="display:block">
   ${Array.from({ length: 23 }, (_, r) => Array.from({ length: 22 }, (_, c) => `<circle cx="${20 + c * 42}" cy="${20 + r * 42}" r="2.2" fill="#13241B"/>`).join('')).join('')}
   ${arcs.map(([a, b]) => { const [x1, y1] = N[a], [x2, y2] = N[b]; const mx = (x1 + x2) / 2 + (y2 - y1) * .18, my = (y1 + y2) / 2 - (x2 - x1) * .18; return `<path d="M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}" stroke="${G}" stroke-width="3" fill="none" opacity=".55" stroke-dasharray="2 10" stroke-linecap="round"/>`; }).join('')}
   ${Object.entries(N).map(([k, [x, y, n]]) => `<circle cx="${x}" cy="${y}" r="34" fill="${G}" opacity=".12"/><circle cx="${x}" cy="${y}" r="13" fill="${G}"/><circle cx="${x}" cy="${y}" r="5" fill="${BG}"/>
     <g transform="translate(${x + 26} ${y - 30})"><rect width="${k.length * 26 + n.length * 15 + 40}" height="60" rx="16" fill="#0E1913" stroke="#21392C" stroke-width="2"/><text x="18" y="40" font-family="JetBrains Mono" font-weight="700" font-size="28" fill="#fff">${k}</text><text x="${18 + k.length * 22 + 16}" y="39" font-family="Plus Jakarta Sans" font-weight="600" font-size="22" fill="${MUT}">${n}</text></g>`).join('')}
  </svg>`;
}

const API = `<div style="width:900px;border-radius:26px;background:#0B130F;border:2px solid #1F3329;box-shadow:0 60px 120px rgba(0,0,0,.6);overflow:hidden">
 <div style="height:46px;background:#0F1A14;display:flex;align-items:center;gap:9px;padding:0 18px;border-bottom:1.5px solid #1A2A22"><span style="width:13px;height:13px;border-radius:50%;background:#FF5F57"></span><span style="width:13px;height:13px;border-radius:50%;background:#FEBC2E"></span><span style="width:13px;height:13px;border-radius:50%;background:#28C840"></span><span style="margin-left:20px;font-family:'JetBrains Mono';font-size:16px;color:${MUT}">govito-partner-api</span></div>
 <pre style="margin:0;padding:30px 34px;font-family:'JetBrains Mono';font-size:27px;line-height:1.65;color:#C9DCD1"><span style="color:${G}">POST</span> /partner/bookings
{
  <span style="color:#7CC7FF">"pickup"</span>:   <span style="color:#FFD37A">"DLM"</span>,
  <span style="color:#7CC7FF">"dropoff"</span>:  <span style="color:#FFD37A">"Marmaris · Otel"</span>,
  <span style="color:#7CC7FF">"vehicle"</span>:  <span style="color:#FFD37A">"Mercedes Vito VIP"</span>,
  <span style="color:#7CC7FF">"guests"</span>:   <span style="color:#FFD37A">"Misafir adı"</span>
}

<span style="color:${MUT}">→</span> <span style="color:${G}">201 Created</span>  ·  sabit fiyat  ·  şoför atandı</pre></div>`;

function frame(o) {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${FONTS}*{box-sizing:border-box;margin:0}body{margin:0}</style></head><body>
 <div style="width:1080px;height:1350px;position:relative;overflow:hidden;font-family:'Plus Jakarta Sans';background:radial-gradient(ellipse at ${o.gx || '75%'} ${o.gy || '62%'},rgba(59,224,140,.22) 0,transparent 48%),radial-gradient(circle at 0% 0%,rgba(31,164,99,.18) 0,transparent 40%),${BG};display:flex;flex-direction:column">
  ${GRAIN}
  <div style="position:relative;padding:72px 80px 0;display:flex;justify-content:space-between;align-items:center">${WORD(46)}<span style="font-size:24px;font-weight:700;color:${MUT};letter-spacing:4px">${o.tag}</span></div>
  <div style="position:relative;padding:${o.top || 60}px 80px 0">
   ${o.big ? `<div style="font-size:150px;font-weight:800;letter-spacing:-7px;line-height:.9;color:${G}">${o.big}</div>` : ''}
   <h1 style="font-size:${o.fs || 76}px;line-height:1.04;letter-spacing:-3px;font-weight:800;color:#fff;margin-top:${o.big ? 18 : 0}px">${o.h1}</h1>
   ${o.sub ? `<p style="font-size:30px;color:#B6CABD;margin-top:22px;line-height:1.4;max-width:${o.subw || 900}px">${o.sub}</p>` : ''}
  </div>
  <div style="position:relative;flex:1">${o.visual}</div>
  <div style="position:relative;margin:0 80px;padding:30px 0 64px;border-top:1.5px solid #1A2A22;display:flex;justify-content:space-between;align-items:center"><div style="display:flex;gap:26px;font-size:22px;font-weight:700;color:#CFE0D6">${o.pts.map(p => `<span style="display:flex;align-items:center;gap:10px">${OK}${p}</span>`).join('')}</div><span style="font-size:28px;font-weight:800;color:#fff">${o.url || 'govitoapp.com'}</span></div>
 </div></body></html>`;
}

const src = fs.readFileSync(path.join(__dirname, 'pro.js'), 'utf8');
const VAN = eval('`' + src.slice(src.indexOf('const VAN = `') + 13, src.indexOf('</svg>`;', src.indexOf('const VAN = `')) + 6) + '`');
const VANBOX = (w, x, y) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px"><div style="position:absolute;left:8%;right:8%;bottom:-6px;height:50px;background:radial-gradient(ellipse,rgba(0,0,0,.75),transparent 70%)"></div>${VAN}</div>`;
const CARD = (inner, extra = '') => `<div style="background:#0E1913;border:1.5px solid #1F3329;border-radius:26px;padding:26px 30px;${extra}">${inner}</div>`;
const ROUTE = (code, from, to, stops) => `
  <div style="position:absolute;left:80px;right:80px;top:30px">${CARD(`
   <div style="display:flex;justify-content:space-between;align-items:center">
    <div><div style="font-family:'JetBrains Mono';font-size:110px;font-weight:700;color:${G};line-height:1">${code}</div><div style="font-size:26px;color:${MUT};margin-top:8px;font-weight:700">${from}</div></div>
    <svg width="230" height="40"><path d="M5 20 H210" stroke="${G}" stroke-width="3" stroke-dasharray="3 10" stroke-linecap="round"/><path d="M200 8 L222 20 L200 32" stroke="${G}" stroke-width="4" fill="none" stroke-linecap="round"/></svg>
    <div style="text-align:right"><div style="font-size:60px;font-weight:800;color:#fff;line-height:1">${to}</div><div style="font-size:26px;color:${MUT};margin-top:8px;font-weight:700">otel kapısı</div></div>
   </div>
   <div style="display:flex;gap:10px;margin-top:26px;flex-wrap:wrap">${stops.map(x => `<span style="font-size:22px;font-weight:700;color:#CFE0D6;border:1.5px solid #24503A;border-radius:999px;padding:8px 16px">${x}</span>`).join('')}</div>`, 'padding:34px 40px')}</div>
  ${VANBOX(560, 440, 380)}`;
const NOTE = (rows, x, y, w = 520) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;display:flex;flex-direction:column;gap:16px">${rows.map(([a, b]) => CARD(`<div style="font-size:30px;font-weight:800;color:#fff">${a}</div><div style="font-size:22px;color:${MUT};margin-top:4px">${b}</div>`)).join('')}</div>`;
const FLIGHT = (title, sub, badge, bc) => `<div style="position:absolute;left:80px;right:80px;top:40px">${CARD(`
  <div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:22px;color:${MUT};font-weight:800;letter-spacing:2px">UÇUŞ DURUMU</span><span style="font-size:22px;font-weight:800;color:${bc};background:${bc}22;padding:8px 16px;border-radius:999px">${badge}</span></div>
  <div style="font-size:54px;font-weight:800;color:#fff;margin-top:16px">${title}</div><div style="font-size:26px;color:${MUT};margin-top:6px">${sub}</div>
  <div style="height:10px;border-radius:9px;background:#1A2A22;margin-top:24px;overflow:hidden"><div style="width:64%;height:100%;background:${G}"></div></div>`, 'padding:34px 40px')}</div>`;
const MEMORIAL = `<!doctype html><html><head><meta charset="utf-8"><style>${FONTS}*{margin:0;box-sizing:border-box}</style></head><body><div style="width:1080px;height:1350px;background:#050807;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Plus Jakarta Sans';text-align:center;color:#fff">
 <div style="font-size:200px;font-weight:800;letter-spacing:-8px;line-height:1">10 Kasım</div><div style="width:120px;height:4px;background:#C8102E;margin:50px 0"></div>
 <div style="font-size:44px;font-weight:600;line-height:1.4;color:#E6ECE8">Cumhuriyetimizin kurucusu<br>Gazi Mustafa Kemal Atatürk'ü<br>saygı ve özlemle anıyoruz.</div>
 <div style="margin-top:110px;opacity:.8">${WORD(34)}</div></div></body></html>`;
const H = '#GoVito';
const POSTS = [
 ['2026-11-07T10:00', frame({ tag: 'ROTA', h1: 'Dalaman’dan<br>Marmaris’e, kapıya.', fs: 74, top: 56, visual: ROUTE('DLM', 'Dalaman Havalimanı', 'Marmaris', ['İçmeler', 'Turunç', 'Fethiye', 'Göcek', 'Sarıgerme']), pts: ['Sabit fiyat', 'VIP Vito', 'Kartla öde'] }),
  `Dalaman Havalimanı'ndan Marmaris'e, otel kapınıza kadar. 🚐\n\nİçmeler, Turunç, Fethiye, Göcek, Sarıgerme… Rotanı yaz, sabit fiyatı gör, lisanslı VIP Vito'nu seç.\n\nPazarlık yok, sürpriz ücret yok.\n\n👉 govitoapp.com\n\n${H} #Dalaman #Marmaris #VIPtransfer #havalimanıtransfer`],
 ['2026-11-07T15:00', frame({ tag: 'UÇUŞ BİLGİSİ', h1: 'Uçuş kodunu ekle,<br><span style="color:' + G + '">gerisini düşünme.</span>', fs: 70, top: 56, visual: FLIGHT('İniş saatin güncellendi', 'Şoförün yeni saati görüyor', 'GÜNCEL', '#FFC857') + NOTE([['Uçuş bilgisi', 'Rezervasyona eklenir'], ['Şoför bilgisi', 'Önceden uygulamada'], ['Canlı konum', 'Aracını haritada izle']], 80, 380, 480) + VANBOX(400, 600, 560), pts: ['iOS', 'Android', 'Web'] }),
  `Uçuş kodunu rezervasyona ekle, karşılama ona göre planlansın. ✈️\n\n• Şoför ve araç bilgisi önceden uygulamana gelir\n• Aracını canlı haritada izlersin\n• Kartla güvenli ödeme, belgeli firma ve şoför\n\nHavalimanında beklemek yok, aramak yok.\n\n👉 govitoapp.com\n\n${H} #havalimanıtransfer #VIPtransfer #seyahat`],
 ['2026-11-07T20:00', frame({ tag: 'TRANSFER FİRMALARI', h1: 'Aracın boş<br>beklemesin.', sub: 'Fiyatını ve bölgeni sen belirle, talepler paneline düşsün.', subw: 860, top: 56, gx: '50%', gy: '72%', visual: `<div style="position:absolute;left:80px;top:40px;transform:perspective(1800px) rotateY(6deg) rotateX(3deg);transform-origin:top right">${PANEL()}</div>`, pts: ['Kendi fiyatın', 'Otomatik U-ETDS'] }),
  `Transfer firması ya da VIP Vito sahibi misin? Aracın boş beklemesin. 🚐\n\nGoVito Partner Paneli ile:\n• Fiyatını ve hizmet bölgeni sen belirlersin\n• Rezervasyon talepleri doğrudan paneline düşer\n• U-ETDS bildirimi otomatik yapılır\n• Ödemeler güvenli kartlı ödeme altyapısıyla alınır\n\n👉 partner.govitoapp.com\n\n${H} #transferfirması #VIPtransfer #turizm`],
 ['2026-11-08T10:00', frame({ tag: 'ROTA', h1: 'Bodrum’a in,<br>Yalıkavak’a kadar.', fs: 74, top: 56, visual: ROUTE('BJV', 'Milas-Bodrum Havalimanı', 'Bodrum', ['Yalıkavak', 'Türkbükü', 'Gümüşlük', 'Turgutreis', 'Torba']), pts: ['Sabit fiyat', 'VIP Vito', 'Kartla öde'] }),
  `Milas-Bodrum Havalimanı'ndan Yalıkavak, Türkbükü, Gümüşlük, Turgutreis ya da Torba'ya. 🌊\n\nSabit fiyatlı VIP Vito transfer, kapıdan kapıya. Rotanı yaz, fiyatı hemen gör.\n\n👉 govitoapp.com\n\n${H} #Bodrum #Yalıkavak #VIPtransfer #havalimanıtransfer`],
 ['2026-11-08T15:00', frame({ tag: 'AİLE & GRUP', h1: 'Herkes tek araçta.<br><span style="color:' + G + '">Valizler de.</span>', fs: 72, top: 56, gx: '60%', gy: '75%', visual: NOTE([['Geniş iç hacim', 'Aile ve gruplar için VIP Vito'], ['Bagaj derdi yok', 'Valizler aynı araçta'], ['Tek fiyat', 'Kişi başı değil, araç başı']], 80, 40, 520) + VANBOX(600, 400, 470), pts: ['Aile', 'Grup', 'Bagaj'] }),
  `Aileyle ya da arkadaşlarla tatile mi gidiyorsun? 🧳\n\nİki taksiye bölünmek yok. Herkes ve tüm valizler tek bir VIP Mercedes Vito'da, havalimanından otel kapısına.\n\nFiyat araç başına, sabit ve önceden belli.\n\n👉 govitoapp.com\n\n${H} #ailetatili #VIPtransfer #havalimanıtransfer`],
 ['2026-11-08T20:00', frame({ tag: 'NASIL ÇALIŞIR', big: '4 adım.', h1: 'Transferin hazır.', fs: 70, top: 56, gx: '72%', gy: '70%', visual: `<div style="position:absolute;right:110px;top:0;transform:rotate(-3deg) scale(.78);transform-origin:top right">${BOOK(430)}</div>` + `<div style="position:absolute;left:80px;top:90px;display:flex;flex-direction:column;gap:18px;width:440px">${[['Rotanı yaz', 'Havalimanı → otel'], ['Fiyatı gör', 'Sabit, pazarlıksız'], ['Kartla öde', 'Güvenli ödeme'], ['Takip et', 'Şoförün haritada']].map(([a, b], i) => `<div style="display:flex;gap:20px;align-items:center"><span style="width:62px;height:62px;flex:none;border-radius:20px;background:${G};display:grid;place-items:center;font-size:26px;font-weight:800;color:${BG}">${i + 1}</span><div><div style="font-size:31px;font-weight:800;color:#fff">${a}</div><div style="font-size:23px;color:${MUT};margin-top:2px">${b}</div></div></div>`).join('')}</div>`, pts: ['Web', 'iOS', 'Android'] }),
  `GoVito'da transfer 4 adımda hazır: 📲\n\n1️⃣ Rotanı yaz: havalimanından otele\n2️⃣ Sabit fiyatı gör, pazarlık yok\n3️⃣ Kartla güvenle öde\n4️⃣ Şoförünü canlı haritada takip et\n\nWeb, iOS ve Android'de.\n\n👉 govitoapp.com\n\n${H} #transfer #mobiluygulama #seyahat`],
 ['2026-11-09T10:00', frame({ tag: 'ROTA', h1: 'Antalya’dan<br>Belek’e, Side’ye.', fs: 74, top: 56, visual: ROUTE('AYT', 'Antalya Havalimanı', 'Belek', ['Side', 'Kemer', 'Alanya', 'Lara', 'Kundu']), pts: ['Sabit fiyat', 'VIP Vito', 'Kartla öde'] }),
  `Antalya Havalimanı'ndan Belek, Side, Kemer, Alanya, Lara ya da Kundu'ya. ☀️\n\nOtel kapına kadar sabit fiyatlı VIP Vito. Rezervasyon birkaç dakika.\n\n👉 govitoapp.com\n\n${H} #Antalya #Belek #Side #VIPtransfer`],
 ['2026-11-09T15:00', frame({ tag: 'GECE UÇUŞU', h1: 'Gece 03:00’te indin.<br><span style="color:' + G + '">Aracın orada.</span>', fs: 66, top: 56, gx: '70%', gy: '40%', visual: `<svg style="position:absolute;right:120px;top:20px" width="200" height="200"><circle cx="100" cy="100" r="80" fill="#E8F5EC"/><circle cx="140" cy="75" r="72" fill="${BG}"/></svg>` + NOTE([['Önceden rezerve et', 'Gece yarısı taksi aramak yok'], ['Sabit fiyat', 'Gece tarifesi sürprizi yok'], ['Şoför bilgisi', 'Önceden uygulamada']], 80, 60, 520) + VANBOX(480, 540, 470), pts: ['7/24', 'Sabit fiyat'] }),
  `Uçağın gece 03:00'te mi iniyor? 🌙\n\nTransferini önceden ayırt; gece yarısı taksi aramak, kapıda pazarlık yapmak yok. Fiyat sabit ve önceden belli, şoför bilgisi uygulamanda.\n\n👉 govitoapp.com\n\n${H} #geceuçuşu #havalimanıtransfer #VIPtransfer`],
 ['2026-11-09T20:00', frame({ tag: 'OTELLER & ACENTELER', h1: 'Misafir transferini<br>sisteminize bağlayın.', sub: 'B2B satış paneli ve partner API’si.', subw: 860, top: 56, gx: '60%', gy: '68%', visual: `<div style="position:absolute;left:90px;top:110px;transform:rotate(2deg)">${API}</div>`, pts: ['B2B panel', 'Partner API'] }),
  `Otel, seyahat acentesi veya tur operatörü müsünüz? 🏨\n\nMisafirlerinizin havalimanı transferini GoVito'ya bağlayın:\n• B2B satış paneli\n• Partner API ile rezervasyonları kendi sisteminizden açın\n• Lisanslı VIP Vito araçlar, sabit fiyat\n• Canlı şoför takibi\n\nİş ortaklığı için bize yazın.\n\n👉 govitoapp.com\n\n${H} #otelcilik #seyahatacentesi #B2B`],
 ['2026-11-10T10:00', MEMORIAL, `10 Kasım 🇹🇷\n\nCumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ü, aramızdan ayrılışının 88. yılında saygı ve özlemle anıyoruz.\n\nGoVito\n\n#10Kasım #Atatürk ${H}`],
 ['2026-11-10T15:00', frame({ tag: 'CANLI TAKİP', h1: 'Şoförün nerede?<br><span style="color:' + G + '">Haritada.</span>', fs: 74, top: 56, gx: '75%', gy: '60%', visual: `<div style="position:absolute;right:100px;top:-30px;transform:rotate(3deg) scale(.8);transform-origin:top right">${TRACK(430)}</div>` + NOTE([['Anlık konum', 'Aracın haritada canlı'], ['Araç bilgisi', 'Plaka ve şoför önceden'], ['Güvenli ödeme', 'Kartla, uygulamadan']], 80, 90, 440), pts: ['iOS', 'Android'] }),
  `Havalimanından çıktın, şoförün nerede? 📍\n\nGoVito uygulamasında aracını canlı haritada görürsün. Araç ve şoför bilgisi önceden gelir, karşılama kaçmaz.\n\niOS ve Android'de.\n\n👉 govitoapp.com\n\n${H} #canlıtakip #mobiluygulama #transfer`],
 ['2026-11-10T20:00', frame({ tag: 'DÜĞÜN · KONGRE · ETKİNLİK', h1: 'Misafirleriniz<br>VIP karşılansın.', fs: 74, top: 56, gx: '55%', gy: '70%', visual: NOTE([['Birden fazla araç', 'Tek rezervasyonla planla'], ['Havalimanı → otel → mekân', 'Tüm günün transferi'], ['Belgeli şoförler', 'Lisanslı firma ve araç']], 80, 40, 540) + VANBOX(360, 120, 520) + VANBOX(440, 560, 450), pts: ['Düğün', 'Kongre', 'Fuar'] }),
  `Düğün, kongre, fuar ya da şirket etkinliği mi düzenliyorsunuz? 🤝\n\nMisafirleriniz havalimanından otele, otelden mekâna VIP Vito ile gitsin. Birden fazla aracı tek seferde planlayın, fiyatı önceden görün.\n\n👉 govitoapp.com\n\n${H} #düğün #kongre #etkinlik #VIPtransfer`],
 ['2026-11-11T10:00', frame({ tag: 'ROTA', h1: 'İzmir’e in,<br>Çeşme’ye kadar.', fs: 74, top: 56, visual: ROUTE('ADB', 'İzmir Adnan Menderes', 'Çeşme', ['Alaçatı', 'Urla', 'Seferihisar', 'Kuşadası', 'Didim']), pts: ['Sabit fiyat', 'VIP Vito', 'Kartla öde'] }),
  `İzmir Adnan Menderes Havalimanı'ndan Çeşme, Alaçatı, Urla, Kuşadası ya da Didim'e. 🌬️\n\nKapıdan kapıya sabit fiyatlı VIP Vito transfer.\n\n👉 govitoapp.com\n\n${H} #İzmir #Çeşme #Alaçatı #VIPtransfer`],
 ['2026-11-11T15:00', frame({ tag: 'ROTA', h1: 'İstanbul’da<br>iki havalimanı, tek adres.', fs: 66, top: 56, visual: ROUTE('IST', 'İstanbul · Sabiha Gökçen', 'İstanbul', ['Taksim', 'Sultanahmet', 'Kadıköy', 'Levent', 'Ataşehir']), pts: ['IST', 'SAW', 'Sabit fiyat'] }),
  `İstanbul Havalimanı ya da Sabiha Gökçen: iki havalimanı, tek adres. ✈️\n\nTaksim, Sultanahmet, Kadıköy, Levent, Ataşehir… Otelinize ya da toplantınıza sabit fiyatlı VIP Vito.\n\n👉 govitoapp.com\n\n${H} #İstanbul #havalimanıtransfer #VIPtransfer`],
 ['2026-11-11T20:00', frame({ tag: 'ROTA AĞI', h1: 'Türkiye’nin turizm<br>kapılarında.', sub: 'İstanbul, İzmir, Bodrum, Dalaman, Antalya ve Kıbrıs.', subw: 760, top: 56, gx: '55%', gy: '70%', visual: `<div style="position:absolute;left:140px;top:0px;transform:scale(.8);transform-origin:top left">${NETWORK()}</div>`, pts: ['6 bölge', 'TR / EN', 'Sabit fiyat'] }),
  `GoVito; İstanbul, İzmir, Bodrum, Dalaman, Antalya ve Kıbrıs'ta havalimanından otele VIP Vito transfer. 🗺️\n\nNereye gidersen git, fiyat sabit, araç lisanslı, şoför takipte.\n\n👉 govitoapp.com\n\n${H} #transfer #turizm #Antalya #Bodrum #Kıbrıs`],
];
(async () => {
  const out = path.join(__dirname, 'govito3'); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const posts = [];
  for (const [d, html, cap] of POSTS) {
    fs.writeFileSync(path.join(__dirname, '_gv3.html'), html);
    await p.goto('file://' + path.join(__dirname, '_gv3.html')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(150);
    const f = `gv-${d.slice(0, 10).replace(/-/g, '')}-${d.slice(11, 13)}.jpg`; await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 92 });
    posts.push({ date: d + ':00', file: f, text: cap });
  }
  fs.writeFileSync(path.join(out, 'posts.json'), JSON.stringify(posts, null, 1)); await b.close(); console.log(posts.length);
})();
