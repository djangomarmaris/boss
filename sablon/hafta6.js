const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const { A, B, V, BASE, BP } = require('./v2.js');
const T = (fc, from, tc, to) => ({ tag: BP, fc, from, tc, to, meta: [['KAPI', 'B' + (10 + to.length)], ['KOLTUK', (9 + to.length) + 'A'], ['SINIF', 'EKONOMİ'], ['E-BİLET', 'ANINDA']] });
const UT = (fc, from, tc, to) => ({ tag: 'UÇUŞ + TRANSFER', fc, from, tc, to, meta: [['UÇUŞ', 'EKONOMİ'], ['TRANSFER', 'VIP VITO'], ['KARŞILAMA', 'KAPIDA'], ['FİYAT', 'SABİT']] });
const F1 = ['Yüzlerce havayolu tek aramada', 'Anında e-bilet'];
const FU = ['Bilet ve transfer tek adreste', 'Uçuş saatinize göre karşılama'];
const VF = [['Havalimanı', 'Uçuşunuza göre karşılama'], ['Aile & grup', 'Geniş araç, bol bagaj'], ['Türkiye', 'Tüm havalimanları']];
const HB = '#ucuzbiletbak #uçakbileti #ucuzbilet #seyahat';
const HV = '#ucuzbiletbak #viptransfer #vipvito #havalimanıtransfer #seyahat';
const YD = 'Yurt dışı uçuşlar', UC = 'Uçuş + transfer', VL = 'ucuzbiletbak.com/vip-transfer';

// 10 Kasım anma: satış dili yok, sade koyu yeşil
const ANMA = (o, H) => `<div class="r" style="height:${H}px;background:linear-gradient(170deg,#0B3A24 0%,#04170D 100%);align-items:center;justify-content:center;text-align:center">
 <div style="font-size:30px;font-weight:800;letter-spacing:12px;color:#BFE9D1">10 KASIM 1938</div>
 <div style="font-family:'JetBrains Mono';font-size:210px;font-weight:700;color:#fff;line-height:1;margin-top:34px">09.05</div>
 <div style="width:120px;height:4px;background:#BFE9D1;margin:56px auto"></div>
 <div style="font-size:60px;font-weight:800;line-height:1.15;color:#fff;letter-spacing:-1px;padding:0 90px">Ulu Önder<br>Mustafa Kemal Atatürk’ü<br>saygı ve özlemle anıyoruz.</div>
 <div style="position:absolute;bottom:70px;left:0;right:0;font-size:30px;font-weight:700;color:#BFE9D1;letter-spacing:1px">Ucuz Bilet Bak</div>
</div>`;

const P = [
 ['2026-11-10T10:00', ANMA, {},
  `10 Kasım 🇹🇷\n\nCumhuriyetimizin kurucusu Ulu Önder Mustafa Kemal Atatürk'ü, ebediyete intikalinin 88. yılında saygı ve özlemle anıyoruz.\n\nUcuz Bilet Bak\n\n#10Kasım #Atatürk #ucuzbiletbak`],
 ['2026-11-10T15:00', V, { kick: 'ESENBOĞA HAVALİMANI', h1: 'Esenboğa’dan', h2: 'adresinize.', cta: 'Rezervasyon yap', feats: [['Ankara', 'Otel ve ev adresi'], ['İş', 'Toplantıya zamanında'], ['Sabit fiyat', 'Sürpriz yok']] },
  `Esenboğa'dan adresinize. 🚐\n\nAnkara Esenboğa Havalimanı'ndan otelinize ya da toplantınıza şoförlü VIP Vito, sabit fiyat.\n\nRezervasyon: ${VL}\n\n${HV} #ankara #esenboğa`],
 ['2026-11-10T20:00', A, { ghost: 'BER', chip: YD, kick: 'İSTANBUL → BERLİN', h1: 'Berlin’e uç.', h2: 'Noel pazarları yakın.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'BER', 'Berlin'), feats: F1, fs: 90 },
  `Berlin'e uç. Noel pazarları yakın. 🇩🇪\n\nBerlin uçuşlarını tek aramada karşılaştır, e-biletin anında gelsin.\n\nucuzbiletbak.com\n\n${HB} #berlin #almanya`],
 ['2026-11-11T10:00', B, { ghost: 'PRG', chip: YD, kick: 'İSTANBUL → PRAG', h1: 'Prag’da', h2: 'masal gibi kış.', cta: 'Uçuşlara bak', card: T('IST', 'İstanbul', 'PRG', 'Prag'), feats: F1 },
  `Prag'da masal gibi kış. 🇨🇿\n\nPrag uçuşlarında birçok havayolunu tek aramada karşılaştır, sana uyanı seç.\n\nucuzbiletbak.com\n\n${HB} #prag #çekya`],
 ['2026-11-11T15:00', V, { kick: 'DÜĞÜN & ETKİNLİK', h1: 'Misafirleriniz', h2: 'düğüne VIP gelsin.', cta: 'Teklif al', feats: [['Düğün', 'Misafir karşılama'], ['Etkinlik', 'Otel ↔ mekân'], ['Şoförlü', 'Konforlu VIP Vito']], fs: 90 },
  `Misafirleriniz düğüne VIP gelsin. 💍\n\nDüğün ve özel etkinliklerde misafirleriniz havalimanından otele, otelden mekâna şoförlü VIP Vito ile gitsin.\n\nTeklif al: ${VL}\n\n${HV} #düğün #etkinlik`],
 ['2026-11-11T20:00', A, { ghost: 'DOH', chip: YD, kick: 'İSTANBUL → DOHA', h1: 'Doha’da mola değil,', h2: 'tatil yap.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'DOH', 'Doha'), feats: F1, fs: 90 },
  `Doha'da mola değil, tatil yap. 🇶🇦\n\nKış güneşine kısa bir kaçış için Doha uçuşlarını tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #doha #katar`],
 ['2026-11-12T10:00', B, { ghost: 'ASR', chip: UC, kick: 'BİLET + VIP VITO', h1: 'Kayseri’ye uç,', h2: 'Kapadokya’ya VIP git.', cta: 'Hemen planla', card: UT('IST', 'İstanbul', 'ASR', 'Kayseri'), feats: FU, fs: 90 },
  `Kayseri'ye uç, Kapadokya'ya VIP git. ✈️🚐\n\nBileti al, Kayseri Havalimanı'ndan Göreme ya da Ürgüp'teki otelinize şoförlü VIP Vito transferini ekle.\n\nucuzbiletbak.com\n\n${HB} #kapadokya #kayseri #viptransfer`],
 ['2026-11-12T15:00', A, { ghost: 'BUD', chip: YD, kick: 'İSTANBUL → BUDAPEŞTE', h1: 'Budapeşte’de', h2: 'termal kaçamak.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'BUD', 'Budapeşte'), feats: F1 },
  `Budapeşte'de termal kaçamak. 🇭🇺\n\nKışın sıcak sulara. Budapeşte uçuşlarını tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #budapeşte #macaristan`],
 ['2026-11-12T20:00', B, { ghost: 'MAD', chip: YD, kick: 'İSTANBUL → MADRİD', h1: 'Madrid’e uç.', h2: 'Geceler uzun sürer.', cta: 'Uçuşlara bak', card: T('IST', 'İstanbul', 'MAD', 'Madrid'), feats: F1, fs: 92 },
  `Madrid'e uç. Geceler uzun sürer. 🇪🇸\n\nMadrid uçuşlarında en uygun bileti tek aramada bul, e-biletin anında gelsin.\n\nucuzbiletbak.com\n\n${HB} #madrid #ispanya`],
 ['2026-11-13T10:00', V, { kick: 'KAYAK TRANSFERİ', h1: 'Kayak sezonu geliyor.', h2: 'Piste VIP git.', cta: 'Rezervasyon yap', feats: [['Erciyes', 'Kayseri’den'], ['Palandöken', 'Erzurum’dan'], ['Bagaj', 'Geniş araç']], fs: 90 },
  `Kayak sezonu geliyor. Piste VIP git. ⛷️\n\nHavalimanından kayak otelinize şoförlü VIP Vito. Geniş araç, bol bagaj, sabit fiyat.\n\nRezervasyon: ${VL}\n\n${HV} #kayak #erciyes #palandöken`],
 ['2026-11-13T15:00', B, { ghost: 'ATH', chip: YD, kick: 'İSTANBUL → ATİNA', h1: 'Komşuya uç.', h2: 'Atina çok yakın.', cta: 'Uçuşlara bak', card: T('IST', 'İstanbul', 'ATH', 'Atina'), feats: F1, fs: 96 },
  `Komşuya uç. Atina çok yakın. 🇬🇷\n\nKısa bir uçuşla Akropolis. Atina uçuşlarını tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #atina #yunanistan`],
 ['2026-11-13T20:00', A, { ghost: 'LIS', chip: YD, kick: 'İSTANBUL → LİZBON', h1: 'Avrupa’nın ucuna uç.', h2: 'Lizbon seni bekler.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'LIS', 'Lizbon'), feats: F1, fs: 88 },
  `Avrupa'nın ucuna uç. Lizbon seni bekler. 🇵🇹\n\nLizbon uçuşlarında birçok havayolunu tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #lizbon #portekiz`],
 ['2026-11-14T10:00', B, { ghost: 'TZX', chip: UC, kick: 'BİLET + VIP VITO', h1: 'Trabzon’a uç,', h2: 'yaylaya VIP çık.', cta: 'Hemen planla', card: UT('IST', 'İstanbul', 'TZX', 'Trabzon'), feats: FU, fs: 94 },
  `Trabzon'a uç, yaylaya VIP çık. ✈️🚐\n\nBileti al, Trabzon Havalimanı'ndan Uzungöl ya da otelinize şoförlü VIP Vito transferini ekle.\n\nucuzbiletbak.com\n\n${HB} #trabzon #uzungöl #viptransfer`],
 ['2026-11-14T15:00', A, { ghost: 'CPH', chip: YD, kick: 'İSTANBUL → KOPENHAG', h1: 'Kopenhag’da', h2: 'kuzey kışı.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'CPH', 'Kopenhag'), feats: F1 },
  `Kopenhag'da kuzey kışı. 🇩🇰\n\nİskandinavya uçuşlarını tek aramada karşılaştır, sana uyanı seç.\n\nucuzbiletbak.com\n\n${HB} #kopenhag #danimarka`],
 ['2026-11-14T20:00', V, { kick: 'SABİT FİYAT', h1: 'Fiyat baştan belli.', h2: 'Yolda sürpriz yok.', cta: 'Rezervasyon yap', feats: VF, fs: 92 },
  `Fiyat baştan belli. Yolda sürpriz yok. 🚐\n\nHavalimanı transferinde sabit fiyat. Şoförlü VIP Vito, uçuş saatinize göre karşılama.\n\nRezervasyon: ${VL}\n\n${HV}`],
 ['2026-11-15T10:00', B, { ghost: 'SJJ', chip: YD, kick: 'İSTANBUL → SARAYBOSNA', h1: 'Saraybosna’da', h2: 'tanıdık sokaklar.', cta: 'Uçuşlara bak', card: T('IST', 'İstanbul', 'SJJ', 'Saraybosna'), feats: F1, fs: 94 },
  `Saraybosna'da tanıdık sokaklar. 🇧🇦\n\nBalkanlar'a kısa bir kaçamak için Saraybosna uçuşlarını tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #saraybosna #balkanlar`],
 ['2026-11-15T15:00', V, { kick: 'GAZİPAŞA HAVALİMANI', h1: 'Gazipaşa’dan', h2: 'Alanya’ya VIP.', cta: 'Rezervasyon yap', feats: [['Alanya', 'Otel kapısına'], ['Mahmutlar', 'Ev ve rezidans'], ['Sabit fiyat', 'Sürpriz yok']] },
  `Gazipaşa'dan Alanya'ya VIP. 🚐\n\nGazipaşa-Alanya Havalimanı'ndan Alanya ve Mahmutlar'a şoförlü VIP Vito, sabit fiyat.\n\nRezervasyon: ${VL}\n\n${HV} #alanya #gazipaşa`],
 ['2026-11-15T20:00', A, { ghost: 'MXP', chip: YD, kick: 'İSTANBUL → MİLANO', h1: 'Milano’ya uç.', h2: 'Vitrinler seni çağırıyor.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'MXP', 'Milano'), feats: F1, fs: 86 },
  `Milano'ya uç. Vitrinler seni çağırıyor. 🇮🇹\n\nMilano uçuşlarını tek aramada karşılaştır, e-biletin anında gelsin.\n\nucuzbiletbak.com\n\n${HB} #milano #italya`],
 ['2026-11-16T10:00', B, { ghost: 'GZT', chip: UC, kick: 'BİLET + VIP VITO', h1: 'Antep’e uç,', h2: 'sofraya VIP git.', cta: 'Hemen planla', card: UT('IST', 'İstanbul', 'GZT', 'Gaziantep'), feats: FU },
  `Antep'e uç, sofraya VIP git. ✈️🚐\n\nBileti al, Gaziantep Havalimanı'ndan otelinize şoförlü VIP Vito transferini ekle.\n\nucuzbiletbak.com\n\n${HB} #gaziantep #viptransfer`],
 ['2026-11-16T15:00', A, { ghost: 'BKK', chip: YD, kick: 'İSTANBUL → BANGKOK', h1: 'Kışı atla,', h2: 'Bangkok’a uç.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'BKK', 'Bangkok'), feats: F1 },
  `Kışı atla, Bangkok'a uç. 🇹🇭\n\nUzak Doğu uçuşlarında birçok havayolunu tek aramada karşılaştır.\n\nucuzbiletbak.com\n\n${HB} #bangkok #tayland`],
 ['2026-11-16T20:00', V, { kick: 'EVE DÖNÜŞ', h1: 'Tatil bitti mi?', h2: 'Eve VIP dön.', cta: 'Rezervasyon yap', feats: [['Ev', 'Kapınıza kadar'], ['Valiz', 'Geniş bagaj alanı'], ['Uçuş', 'Saatinize göre karşılama']] },
  `Tatil bitti mi? Eve VIP dön. 🚐\n\nDönüş uçuşunuz inince taksi sırası beklemeyin. Havalimanından evinize şoförlü VIP Vito, sabit fiyat.\n\nRezervasyon: ${VL}\n\n${HV}`],
];

// Satış kampanyası reklam görselleri (besleme 1080x1350, story 1080x1920)
const ADS = [
 ['r6-dis', A, { ghost: 'IST', chip: YD, kick: 'YURT DIŞI UÇAK BİLETİ', h1: 'Yurt dışı bileti mi?', h2: 'Tek aramada bul.', cta: 'Bileti bul', card: T('IST', 'İstanbul', 'CDG', 'Paris'), feats: F1, fs: 92 }],
 ['r6-vip', V, { kick: 'ŞOFÖRLÜ VIP VITO', h1: 'Havalimanından', h2: 'kapınıza VIP.', cta: 'Rezervasyon yap', feats: VF }],
];

(async () => {
  const out = path.join(__dirname, '..'); 
  const b = await chromium.launch({ executablePath: process.env.CHROME || undefined }); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const shot = async (html, f, H) => {
    await p.setViewportSize({ width: 1080, height: H });
    fs.writeFileSync(path.join(__dirname, '_h6.html'), `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${BASE}</style></head><body>${html}</body></html>`);
    await p.goto('file://' + path.join(__dirname, '_h6.html')); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 92 });
  };
  const posts = [];
  for (let i = 0; i < P.length; i++) {
    const [d, fn, o, cap] = P[i]; const f = `u6-${String(i + 1).padStart(2, '0')}.jpg`;
    await shot(fn(o, 1350), f, 1350); posts.push({ date: d + ':00', file: f, text: cap });
  }
  for (const [n, fn, o] of ADS) { await shot(fn(o, 1350), n + '-feed.jpg', 1350); await shot(fn(o, 1920), n + '-story.jpg', 1920); }
  fs.writeFileSync(path.join(__dirname, 'hafta6-posts.json'), JSON.stringify(posts, null, 1));
  fs.unlinkSync(path.join(__dirname, '_h6.html'));
  await b.close(); console.log(posts.length);
})();
