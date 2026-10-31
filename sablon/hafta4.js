var { chromium } = require('playwright'); var fs = require('fs'), path = require('path');
const src = fs.readFileSync(__dirname + '/pro.js', 'utf8');
eval(src.slice(0, src.indexOf('// 1) Yurt')).replace(/^const /gm, 'var ').replace("var { chromium } = require('playwright');", '').replace("var fs = require('fs'), path = require('path');", ''));
var VAN = eval('`' + src.match(/const VAN = `([\s\S]*?)`;\n  const feats/)[1] + '`');
const p2 = fs.readFileSync(__dirname + '/pro2.js', 'utf8'), v = fs.readFileSync(__dirname + '/vip.js', 'utf8');
eval(p2.slice(p2.indexOf('const dot'), p2.indexOf('const ADS')).replace(/^const /gm, 'var '));
eval(v.slice(v.indexOf('const CK'), v.indexOf('const ADS')).replace(/^const /gm, 'var '));
const B = 'BOARDING PASS', E = 'EKONOMİ';
const bp = (fc, from, tc, to, k, s) => ({ tag: B, fc, from, tc, to, meta: [['KAPI', k], ['KOLTUK', s], ['SINIF', E]] });
const FT = '#ucuzbiletbak #uçakbileti #ucuzbilet #yurtdışıuçakbileti #seyahat';
const IT = '#ucuzbiletbak #uçakbileti #ucuzbilet #yurtiçiuçakbileti #seyahat';
const VT = '#ucuzbiletbak #viptransfer #vitokiralama #vipvito #havalimanıtransfer #seyahat';
const P = [
 ['2026-11-03T10:00', 'card', { chip: 'Yurt dışı uçuşlar', h1: 'Amsterdam’a uç.', h2: 'Kanallar seni bekliyor.', sub: 'Avrupa uçuşlarını tek aramada karşılaştırın.', cta: 'Bileti bul', card: bp('IST', 'İstanbul', 'AMS', 'Amsterdam', 'E21', '17A') }, `Amsterdam'a uç. 🇳🇱\n\nKanallar, bisikletler, müzeler… Avrupa uçuşlarında en uygun bileti tek aramada bulun.\n\nucuzbiletbak.com\n\n${FT} #amsterdam`],
 ['2026-11-03T19:00', 'vip', { kick: 'DALAMAN HAVALİMANI', h1: 'Dalaman’a indin mi?', h2: 'Aracın hazır.', fs: 86, badge: 'Sabit<br>fiyat', cta: 'Rezervasyon yap', feats: ['Marmaris, Fethiye, Bodrum transferi', 'Uçuş saatinize göre karşılama', 'Şoförlü, konforlu VIP Vito'] }, `Dalaman'a indin mi? Aracın hazır. 🚐\n\nMarmaris, Fethiye, Bodrum… Şoförlü VIP Vito ile sabit fiyatlı, uçuş saatinize göre planlanan transfer.\n\nRezervasyon: ucuzbiletbak.com\n\n${VT} #dalaman #marmaris #fethiye`],
 ['2026-11-04T10:00', 'card', { chip: 'Yurt dışı uçuşlar', h1: 'Roma’ya kaçamak?', h2: 'Bilet bizden.', sub: 'Birçok havayolunu tek aramada karşılaştırın.', cta: 'Uçuşlara bak', card: bp('IST', 'İstanbul', 'FCO', 'Roma', 'B07', '11C') }, `Roma'ya kaçamak? Bilet bizden. 🇮🇹\n\nBirçok havayolunu tek aramada karşılaştırın, size uyan uçuşu seçin.\n\nucuzbiletbak.com\n\n${FT} #roma #italya`],
 ['2026-11-04T19:00', 'card', { chip: 'Yurt içi uçuşlar', h1: 'Ankara’dan Dalaman’a.', h2: 'Tek aramada.', sub: 'Yurt içi uçuşlarda en uygun fiyatı bulun.', cta: 'Bileti bul', card: bp('ESB', 'Ankara', 'DLM', 'Dalaman', 'C02', '08A') }, `Ankara'dan Dalaman'a, tek aramada. ✈️\n\nYurt içi uçuşlarda fiyatları karşılaştırın; isterseniz Dalaman'dan otelinize VIP transferi de ekleyin.\n\nucuzbiletbak.com\n\n${IT} #ankara #dalaman`],
 ['2026-11-05T10:00', 'vip', { kick: 'KURUMSAL TRANSFER', h1: 'Misafirin', h2: 'VIP karşılansın.', badge: 'VIP<br>Vito', cta: 'Transfer ayarla', feats: ['Toplantı, fuar ve iş seyahatleri', 'Şoförlü, konforlu VIP Vito', 'Kapıdan kapıya, sabit fiyat'] }, `Misafiriniz VIP karşılansın. 🤝\n\nToplantı, fuar ve iş seyahatleri için şoförlü VIP Vito. Kapıdan kapıya, sabit fiyat.\n\nRezervasyon: ucuzbiletbak.com\n\n${VT} #kurumsaltransfer`],
 ['2026-11-05T19:00', 'card', { chip: 'Yurt dışı uçuşlar', h1: 'Bakü’ye uç.', h2: 'Kısa uçuş, yeni şehir.', sub: 'Uygun fiyatlı uçuşları tek aramada bulun.', cta: 'Bileti bul', card: bp('IST', 'İstanbul', 'GYD', 'Bakü', 'F11', '19D') }, `Bakü'ye uç. 🇦🇿\n\nKısa bir uçuşla yeni bir şehir. Uygun fiyatlı uçuşları tek aramada bulun.\n\nucuzbiletbak.com\n\n${FT} #bakü #azerbaycan`],
 ['2026-11-06T10:00', 'app', null, `Ucuz uçak bileti artık cebinde! 📲\n\nUcuz Bilet uygulaması App Store'da. Yüzlerce havayolunu karşılaştır, en uygun bileti saniyeler içinde al.\n\n📥 App Store'da "Ucuz Bilet" yazıp indir.\n🤖 Android çok yakında.\n🌐 ucuzbiletbak.com\n\n#ucuzbiletbak #ucuzbilet #uçakbileti #yeniuygulama #appstore`],
 ['2026-11-06T19:00', 'card', { chip: 'Yurt dışı uçuşlar', h1: 'Tiflis bir uçuş uzağında.', h2: 'Hafta sonu senin.', sub: 'Fiyatları tek aramada karşılaştırın.', cta: 'Uçuşlara bak', card: bp('IST', 'İstanbul', 'TBS', 'Tiflis', 'D14', '05F') }, `Tiflis bir uçuş uzağında. 🇬🇪\n\nHafta sonu kaçamağı için kısa ve uygun bir uçuş. Fiyatları tek aramada karşılaştırın.\n\nucuzbiletbak.com\n\n${FT} #tiflis #gürcistan`],
 ['2026-11-07T10:00', 'vip', { kick: 'AİLE TATİLİ', h1: 'Çocuklar, valizler,', h2: 'hepsi tek araçta.', fs: 86, badge: 'Bol<br>bagaj', cta: 'Transfer ayarla', feats: ['Geniş iç hacim, bol bagaj yeri', 'Havalimanından otele kapıdan kapıya', 'Sabit fiyat, sürpriz yok'] }, `Çocuklar, valizler, hepsi tek araçta. 🧳\n\nAile tatillerinde iki taksiye bölünmeyin. Şoförlü VIP Vito ile havalimanından otelinize, sabit fiyatla.\n\nRezervasyon: ucuzbiletbak.com\n\n${VT} #ailetatili`],
 ['2026-11-07T19:00', 'card', { chip: 'Yurt dışı uçuşlar', h1: 'Londra’da hafta sonu?', h2: 'Biletin hazır.', sub: 'Birçok havayolunu tek aramada karşılaştırın.', cta: 'Bileti bul', card: bp('IST', 'İstanbul', 'LHR', 'Londra', 'A03', '22B') }, `Londra'da hafta sonu? Biletin hazır. 🇬🇧\n\nBirçok havayolunu tek aramada karşılaştırın, en uygun uçuşu seçin.\n\nucuzbiletbak.com\n\n${FT} #londra`],
 ['2026-11-08T10:00', 'card', { chip: 'Yurt içi uçuşlar', h1: 'Karadeniz’e uç.', h2: 'Trabzon seni bekliyor.', sub: 'Yurt içi uçuşları tek aramada karşılaştırın.', cta: 'Bileti bul', card: bp('IST', 'İstanbul', 'TZX', 'Trabzon', 'B15', '03C') }, `Karadeniz'e uç. 🌲\n\nTrabzon ve tüm şehirler için yurt içi uçuşları tek aramada karşılaştırın.\n\nucuzbiletbak.com\n\n${IT} #trabzon #karadeniz`],
 ['2026-11-08T19:00', 'vip', { kick: 'BODRUM · ANTALYA · İZMİR', h1: 'Tatile', h2: 'VIP başla.', badge: 'Şoförlü<br>Vito', cta: 'Rezervasyon yap', feats: ['Bodrum, Antalya, İzmir havalimanları', 'Uçuş saatinize göre karşılama', 'Türkiye genelinde hizmet'] }, `Tatile VIP başla. 🚐\n\nBodrum, Antalya, İzmir ve Türkiye genelinde havalimanından otelinize şoförlü VIP Vito transfer.\n\nRezervasyon: ucuzbiletbak.com\n\n${VT} #bodrum #antalya #izmir`],
 ['2026-11-09T10:00', 'card', { chip: 'Yurt dışı uçuşlar', h1: 'Kışın güneş mi?', h2: 'Dubai’ye uç.', sub: 'Uzak rotalarda da tek aramada karşılaştırma.', cta: 'Bileti bul', card: bp('IST', 'İstanbul', 'DXB', 'Dubai', 'F07', '21C') }, `Kışın güneş mi? Dubai'ye uç. ☀️🇦🇪\n\nUzak rotalarda da birçok havayolunu tek aramada karşılaştırın.\n\nucuzbiletbak.com\n\n${FT} #dubai`],
 ['2026-11-09T19:00', 'card', { chip: 'Bilet + transfer', h1: 'Bilet + transfer.', h2: 'Tek adres.', sub: 'Uçuşunuzu alın, VIP Vito transferinizi ekleyin.', cta: 'Hemen planla', card: { tag: 'VIP TRANSFER', fc: 'IST', from: 'İstanbul Havalimanı', tc: 'OTEL', to: 'Kapınıza', icon: VANI, meta: [['ARAÇ', 'VIP VITO'], ['ŞOFÖR', 'DAHİL'], ['FİYAT', 'SABİT']] } }, `Bilet + transfer, tek adres. ✈️🚐\n\nUçuşunuzu alın, havalimanından otelinize VIP Vito transferinizi ekleyin.\n\nucuzbiletbak.com\n\n${FT} #viptransfer`],
];
(async () => {
  const out = path.join(__dirname, 'hafta4'); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const res = [];
  for (let i = 0; i < P.length; i++) {
    const [date, type, o, caption] = P[i]; const f = `h4-${String(i + 1).padStart(2, '0')}.jpg`;
    if (type === 'app') { res.push({ date, caption, url: 'app-feed.jpg' }); continue; }
    fs.writeFileSync(path.join(__dirname, '_s.html'), `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${BASE}</style></head><body>${type === 'card' ? card(o, 1350) : vip(o, 1350)}</body></html>`);
    await p.goto('file://' + path.join(__dirname, '_s.html')); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 93 }); res.push({ date, caption, url: f });
  }
  fs.writeFileSync(path.join(out, 'posts.json'), JSON.stringify(res, null, 1));
  await p.setViewportSize({ width: 1600, height: 300 });
  fs.writeFileSync(path.join(__dirname, '_c.html'), `<body style="margin:0;background:#2b2b2b;display:grid;grid-template-columns:repeat(7,1fr);gap:8px;padding:8px">${res.map(r => `<img src="file://${r.url.startsWith('app') ? path.join(__dirname, '../media') : out}/${r.url}" style="width:100%">`).join('')}</body>`);
  await p.goto('file://' + path.join(__dirname, '_c.html')); await p.waitForLoadState('networkidle');
  await p.screenshot({ path: path.join(__dirname, 'hafta4-onizleme.png'), fullPage: true });
  await b.close(); console.log(res.length);
})();
