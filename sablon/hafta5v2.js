const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const { A, B, V, BASE, BP } = require('./v2.js');
const T = (fc, from, tc, to, meta) => ({ tag: BP, fc, from, tc, to, meta: meta || [['KAPI', 'B' + (10 + fc.length)], ['KOLTUK', '14A'], ['SINIF', 'EKONOMİ'], ['E-BİLET', 'ANINDA']] });
const UT = (fc, from, tc, to) => ({ tag: 'UÇUŞ + TRANSFER', fc, from, tc, to, meta: [['UÇUŞ', 'EKONOMİ'], ['TRANSFER', 'VIP VITO'], ['KARŞILAMA', 'KAPIDA'], ['FİYAT', 'SABİT']] });
const F1 = ['Yüzlerce havayolu tek aramada', 'Anında e-bilet'];
const FU = ['Bilet ve transfer tek adreste', 'Uçuş saatinize göre karşılama'];
const VF = [['Havalimanı', 'Uçuşunuza göre karşılama'], ['Aile & grup', 'Geniş araç, bol bagaj'], ['Türkiye', 'Tüm havalimanları']];
const HB = '#ucuzbiletbak #uçakbileti #ucuzbilet #seyahat';
const HV = '#ucuzbiletbak #viptransfer #vipvito #havalimanıtransfer #seyahat';

const P = [
 ['2026-11-03T21:00', V, { kick: 'ŞOFÖRLÜ VIP VITO', h1: 'Uçaktan in,', h2: 'aracın hazır.', cta: 'Rezervasyon yap', feats: VF },
  `Uçaktan in, aracın hazır. 🚐\n\nŞoförlü VIP Vito ile havalimanından kapınıza. Uçuş saatinize göre karşılama, sabit fiyat, Türkiye genelinde hizmet.\n\nRezervasyon: ucuzbiletbak.com/vip-transfer\n\n${HV}`],
 ['2026-11-04T10:00', A, { ghost: 'DXB', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → DUBAİ', h1: 'Kışın güneş mi?', h2: 'Dubai’ye uç.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'DXB', 'Dubai'), feats: F1 },
  `Kışın güneş mi? Dubai'ye uç. ☀️🇦🇪\n\nYüzlerce havayolunu tek aramada karşılaştır, e-biletin anında gelsin.\n\nucuzbiletbak.com\n\n${HB} #dubai #yurtdışıuçakbileti`],
 ['2026-11-04T15:00', B, { ghost: 'BJV', chip: 'Uçuş + transfer', kick: 'BİLET + VIP VITO', h1: 'Bodrum’a uç,', h2: 'aracın kapıda.', cta: 'Hemen planla', card: UT('IST', 'İstanbul', 'BJV', 'Bodrum'), feats: FU },
  `Bodrum'a uç, aracın kapıda. ✈️🚐\n\nUçak biletini al, Bodrum Havalimanı'ndan otelinize şoförlü VIP Vito transferini ekle. Hepsi tek adreste.\n\nucuzbiletbak.com\n\n${HB} #bodrum #viptransfer`],
 ['2026-11-04T20:00', A, { ghost: 'CDG', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → PARİS', h1: 'Paris’te', h2: 'bir hafta sonu.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'CDG', 'Paris'), feats: F1 },
  `Paris'te bir hafta sonu. 🇫🇷\n\nAvrupa uçuşlarında birçok havayolunu tek aramada karşılaştır, sana uyanı seç.\n\nucuzbiletbak.com\n\n${HB} #paris #yurtdışıuçakbileti`],
 ['2026-11-05T10:00', V, { kick: 'DALAMAN HAVALİMANI', h1: 'Dalaman’dan', h2: 'kapınıza.', cta: 'Rezervasyon yap', feats: [['Marmaris', 'İçmeler, Turunç'], ['Fethiye', 'Ölüdeniz, Göcek'], ['Sabit fiyat', 'Sürpriz yok']] },
  `Dalaman'dan kapınıza. 🚐\n\nMarmaris, İçmeler, Turunç, Fethiye, Göcek… Dalaman Havalimanı'ndan otelinize şoförlü VIP Vito, sabit fiyat.\n\nRezervasyon: ucuzbiletbak.com/vip-transfer\n\n${HV} #dalaman #marmaris #fethiye`],
 ['2026-11-05T15:00', B, { ghost: 'FCO', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → ROMA', h1: 'Roma’ya kaçamak.', h2: 'Tek aramada.', cta: 'Uçuşlara bak', card: T('IST', 'İstanbul', 'FCO', 'Roma'), feats: F1 },
  `Roma'ya kaçamak. Tek aramada. 🇮🇹\n\nBirçok havayolunu karşılaştır, en uygun uçuşu dakikalar içinde al.\n\nucuzbiletbak.com\n\n${HB} #roma #italya`],
 ['2026-11-05T20:00', A, { ghost: 'LHR', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → LONDRA', h1: 'Londra çağırıyor.', h2: 'Biletin hazır.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'LHR', 'Londra'), feats: F1, fs: 92 },
  `Londra çağırıyor. Biletin hazır. 🇬🇧\n\nLondra uçuşlarını tek aramada karşılaştır, e-biletin anında gelsin.\n\nucuzbiletbak.com\n\n${HB} #londra #yurtdışıuçakbileti`],
 ['2026-11-06T10:00', B, { ghost: 'DLM', chip: 'Uçuş + transfer', kick: 'ANKARA → DALAMAN', h1: 'Dalaman’a uç,', h2: 'Marmaris’e VIP git.', cta: 'Hemen planla', card: UT('ESB', 'Ankara', 'DLM', 'Dalaman'), feats: FU, fs: 92 },
  `Dalaman'a uç, Marmaris'e VIP git. ✈️🚐\n\nAnkara'dan Dalaman'a bileti al, havalimanında şoförlü VIP Vito'n seni beklesin.\n\nucuzbiletbak.com\n\n${HB} #dalaman #marmaris #viptransfer`],
 ['2026-11-06T15:00', V, { kick: 'AİLE & GRUP TRANSFERİ', h1: 'Herkes tek araçta.', h2: 'Valizler de.', cta: 'Rezervasyon yap', feats: [['Aile', 'İki taksiye bölünmeyin'], ['Bagaj', 'Geniş bagaj alanı'], ['Konfor', 'Şoförlü VIP Vito']], fs: 92 },
  `Herkes tek araçta. Valizler de. 🧳\n\nAile ve grup yolculuklarında şoförlü VIP Vito ile havalimanından otelinize, sabit fiyatla.\n\nRezervasyon: ucuzbiletbak.com/vip-transfer\n\n${HV} #ailetatili`],
 ['2026-11-06T20:00', A, { ghost: 'AMS', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → AMSTERDAM', h1: 'Amsterdam’a uç.', h2: 'Kanallar bekliyor.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'AMS', 'Amsterdam'), feats: F1, fs: 92 },
  `Amsterdam'a uç. Kanallar bekliyor. 🇳🇱\n\nAvrupa uçuşlarında en uygun bileti tek aramada bul.\n\nucuzbiletbak.com\n\n${HB} #amsterdam #yurtdışıuçakbileti`],
 ['2026-11-07T10:00', A, { ghost: 'GYD', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → BAKÜ', h1: 'Bakü bir uçuş', h2: 'uzağında.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'GYD', 'Bakü'), feats: F1 },
  `Bakü bir uçuş uzağında. 🇦🇿\n\nKısa bir uçuşla yeni bir şehir. Fiyatları tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #bakü #azerbaycan`],
 ['2026-11-07T15:00', B, { ghost: 'AYT', chip: 'Uçuş + transfer', kick: 'BİLET + VIP VITO', h1: 'Antalya’ya uç,', h2: 'otele VIP git.', cta: 'Hemen planla', card: UT('IST', 'İstanbul', 'AYT', 'Antalya'), feats: FU },
  `Antalya'ya uç, otele VIP git. ✈️🚐\n\nBileti al, Antalya Havalimanı'ndan otelinize şoförlü VIP Vito transferini ekle.\n\nucuzbiletbak.com\n\n${HB} #antalya #viptransfer`],
 ['2026-11-07T20:00', V, { kick: 'KURUMSAL TRANSFER', h1: 'Misafiriniz', h2: 'VIP karşılansın.', cta: 'Teklif al', feats: [['Toplantı', 'Zamanında karşılama'], ['Fuar', 'Otel ↔ fuar alanı'], ['Şoförlü', 'Konforlu VIP Vito']], fs: 96 },
  `Misafiriniz VIP karşılansın. 🤝\n\nToplantı, fuar ve iş seyahatleri için şoförlü VIP Vito. Zamanında karşılama, konforlu yolculuk.\n\nucuzbiletbak.com/vip-transfer\n\n${HV} #kurumsaltransfer`],
 ['2026-11-08T10:00', B, { ghost: 'TBS', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → TİFLİS', h1: 'Tiflis’te', h2: 'hafta sonu.', cta: 'Uçuşlara bak', card: T('IST', 'İstanbul', 'TBS', 'Tiflis'), feats: F1 },
  `Tiflis'te hafta sonu. 🇬🇪\n\nKısa ve uygun bir kaçamak için Tiflis uçuşlarını tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #tiflis #gürcistan`],
 ['2026-11-08T15:00', A, { ghost: 'BCN', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → BARSELONA', h1: 'Barselona’ya uç.', h2: 'Güneş seni bekler.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'BCN', 'Barselona'), feats: F1, fs: 92 },
  `Barselona'ya uç. Güneş seni bekler. 🇪🇸\n\nİspanya uçuşlarında birçok havayolunu tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #barselona #ispanya`],
 ['2026-11-08T20:00', V, { kick: 'İSTANBUL HAVALİMANI', h1: 'İstanbul’da', h2: 'kapıdan kapıya.', cta: 'Rezervasyon yap', feats: [['IST & SAW', 'İki havalimanı'], ['Otel', 'Kapınıza kadar'], ['Sabit fiyat', 'Sürpriz yok']] },
  `İstanbul'da kapıdan kapıya. 🚐\n\nİstanbul ve Sabiha Gökçen havalimanlarından otelinize şoförlü VIP Vito, sabit fiyat.\n\nRezervasyon: ucuzbiletbak.com/vip-transfer\n\n${HV} #istanbul`],
 ['2026-11-09T10:00', A, { ghost: 'VIE', chip: 'Yurt dışı uçuşlar', kick: 'İSTANBUL → VİYANA', h1: 'Viyana’da kış.', h2: 'Biletin hazır.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'VIE', 'Viyana'), feats: F1 },
  `Viyana'da kış. Biletin hazır. 🇦🇹\n\nAvrupa uçuşlarını tek aramada karşılaştır, e-biletin anında gelsin.\n\nucuzbiletbak.com\n\n${HB} #viyana #yurtdışıuçakbileti`],
 ['2026-11-09T15:00', B, { ghost: 'ADB', chip: 'Uçuş + transfer', kick: 'BİLET + VIP VITO', h1: 'İzmir’e uç,', h2: 'aracın hazır.', cta: 'Hemen planla', card: UT('IST', 'İstanbul', 'ADB', 'İzmir'), feats: FU },
  `İzmir'e uç, aracın hazır. ✈️🚐\n\nBileti al, İzmir Havalimanı'ndan Çeşme, Alaçatı ya da otelinize şoförlü VIP Vito transferini ekle.\n\nucuzbiletbak.com\n\n${HB} #izmir #viptransfer`],
 ['2026-11-09T20:00', V, { kick: 'TÜRKİYE GENELİ', h1: 'Tatile', h2: 'VIP başla.', cta: 'Rezervasyon yap', feats: [['Bodrum', 'Milas-Bodrum'], ['Antalya', 'Belek, Kemer, Side'], ['Muğla', 'Dalaman, Fethiye']] },
  `Tatile VIP başla. 🚐\n\nBodrum, Antalya, Muğla ve Türkiye genelinde havalimanından otelinize şoförlü VIP Vito transfer.\n\nRezervasyon: ucuzbiletbak.com/vip-transfer\n\n${HV} #bodrum #antalya`],
];

(async () => {
  const out = path.join(__dirname, 'hafta5v2'); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const posts = [];
  for (let i = 0; i < P.length; i++) {
    const [d, fn, o, cap] = P[i];
    fs.writeFileSync(path.join(__dirname, '_h5.html'), `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${BASE}</style></head><body>${fn(o, 1350)}</body></html>`);
    await p.goto('file://' + path.join(__dirname, '_h5.html')); await p.evaluate(() => document.fonts.ready);
    const f = `u5-${String(i + 1).padStart(2, '0')}.jpg`; await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 92 });
    posts.push({ date: d + ':00', file: f, text: cap });
  }
  fs.writeFileSync(path.join(out, 'posts.json'), JSON.stringify(posts, null, 1));
  await b.close(); console.log(posts.length);
})();
