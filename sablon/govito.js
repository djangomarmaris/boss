// GoVito LinkedIn gönderileri — koyu zemin + GoVito yeşili
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const fd = path.join(__dirname, 'node_modules/@fontsource');
const font = (pkg, w) => fs.readFileSync(`${fd}/${pkg}/${w}.css`, 'utf8').replace(/url\(\.\/files\//g, `url(file://${fd}/${pkg}/files/`);
const FONTS = ['400', '500', '700', '800'].map(w => font('plus-jakarta-sans', w)).join('');
const GN = '#2BD47D', BG = '#07110C';
const LOGO = `<div style="display:flex;align-items:center;gap:18px"><span style="width:72px;height:72px;border-radius:20px;background:#0E1A14;border:2px solid #1F3A2C;display:grid;place-items:center;font-weight:800;font-size:40px;color:${GN};letter-spacing:-2px">go</span><span style="font-size:42px;font-weight:800;color:#fff;letter-spacing:-1px">Go<span style="color:${GN}">Vito</span></span></div>`;
const ICON = {
  car: `<path d="M5 17h14v-4l-2-5H7l-2 5zM7 17v2M17 17v2M5 13h14" stroke="${GN}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="14.5" r="1" fill="${GN}"/><circle cx="16" cy="14.5" r="1" fill="${GN}"/>`,
  tag: `<path d="M3 12V4h8l10 10-8 8z" stroke="${GN}" stroke-width="2" fill="none" stroke-linejoin="round"/><circle cx="7.5" cy="8.5" r="1.5" fill="${GN}"/>`,
  shield: `<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" stroke="${GN}" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M8.5 12l2.5 2.5 4.5-5" stroke="${GN}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  pin: `<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" stroke="${GN}" stroke-width="2" fill="none"/><circle cx="12" cy="9.5" r="2.5" stroke="${GN}" stroke-width="2" fill="none"/>`,
  doc: `<path d="M6 3h8l4 4v14H6z" stroke="${GN}" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M9 12h6M9 16h6M14 3v4h4" stroke="${GN}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  api: `<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" stroke="${GN}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  card: `<rect x="3" y="6" width="18" height="12" rx="2" stroke="${GN}" stroke-width="2" fill="none"/><path d="M3 10h18M7 15h4" stroke="${GN}" stroke-width="2" stroke-linecap="round"/>`,
  globe: `<circle cx="12" cy="12" r="9" stroke="${GN}" stroke-width="2" fill="none"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" stroke="${GN}" stroke-width="2" fill="none"/>`,
  chart: `<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="${GN}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  hotel: `<path d="M4 21V5h10v16M14 9h6v12M7 9h4M7 13h4M7 17h4M2 21h20" stroke="${GN}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};
const ic = k => `<svg viewBox="0 0 24 24" width="44" height="44">${ICON[k]}</svg>`;

function page(o) {
  const body = o.stats
    ? `<div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:64px">${o.stats.map(([n, l]) => `<div style="background:#0E1A14;border:2px solid #1C3328;border-radius:30px;padding:36px 36px"><div style="font-size:84px;font-weight:800;color:${GN};letter-spacing:-3px;line-height:1">${n}</div><div style="font-size:30px;color:#B9CFC2;margin-top:12px;font-weight:500;line-height:1.3">${l}</div></div>`).join('')}</div>`
    : `<div style="display:flex;flex-direction:column;gap:20px;margin-top:64px">${o.items.map(([k, t, d]) => `<div style="display:flex;gap:26px;align-items:center;background:#0E1A14;border:2px solid #1C3328;border-radius:30px;padding:28px 34px"><span style="width:84px;height:84px;flex:none;border-radius:24px;background:rgba(43,212,125,.1);display:grid;place-items:center">${ic(k)}</span><div><div style="font-size:36px;font-weight:800;color:#fff;letter-spacing:-.5px">${t}</div><div style="font-size:27px;color:#9FB8AA;margin-top:4px;line-height:1.35">${d}</div></div></div>`).join('')}</div>`;
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${FONTS}*{box-sizing:border-box;margin:0}body{margin:0}</style></head><body>
  <div style="width:1080px;height:1350px;position:relative;overflow:hidden;font-family:'Plus Jakarta Sans';background:radial-gradient(circle at 92% 6%,rgba(43,212,125,.28) 0,transparent 40%),radial-gradient(circle at 0% 100%,rgba(43,212,125,.12) 0,transparent 45%),${BG};display:flex;flex-direction:column;padding:72px 80px 66px">
   <svg style="position:absolute;inset:0;opacity:.06" width="1080" height="1350"><defs><pattern id="g" width="54" height="54" patternUnits="userSpaceOnUse"><path d="M54 0H0V54" fill="none" stroke="#fff" stroke-width="1"/></pattern></defs><rect width="1080" height="1350" fill="url(#g)"/></svg>
   <div style="display:flex;justify-content:space-between;align-items:center;position:relative">${LOGO}<span style="padding:14px 26px;border-radius:999px;border:2px solid #24503A;color:${GN};font-size:26px;font-weight:700">${o.chip}</span></div>
   <div style="position:relative;margin-top:84px"><div style="font-size:26px;font-weight:800;letter-spacing:7px;color:${GN}">${o.kick}</div>
    <h1 style="font-size:${o.fs || 88}px;line-height:1.02;letter-spacing:-3.5px;font-weight:800;color:#fff;margin-top:22px">${o.h1}<br><span style="color:${GN}">${o.h2}</span></h1>
    <p style="font-size:32px;color:#B9CFC2;margin-top:26px;line-height:1.4;max-width:880px">${o.sub}</p></div>
   <div style="position:relative">${body}</div>
   <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center;position:relative;border-top:2px solid #1C3328;padding-top:34px"><span style="font-size:32px;font-weight:800;color:#fff">${o.url || 'govitoapp.com'}</span><span style="background:${GN};color:#04130B;font-weight:800;font-size:30px;padding:20px 36px;border-radius:999px">${o.cta} →</span></div>
  </div></body></html>`;
}

const P = [
 ['2026-11-04T20:30', { chip: 'Transfer pazaryeri', kick: 'GOVITO NEDİR?', h1: 'Transfer sektörünün', h2: 'dijital pazaryeri.', sub: 'Havalimanı ve otel transferlerinde yolcuyu lisanslı VIP Vito araçlarıyla, sabit fiyatla saniyeler içinde buluşturuyoruz.', cta: 'Keşfet',
   items: [['tag', 'Sabit ve şeffaf fiyat', 'Rota girildiği anda net fiyat, pazarlık yok'], ['shield', 'Yalnızca belgeli firmalar', 'Lisanslı araç ve şoför ağı'], ['pin', 'Canlı şoför takibi', 'Yolcu, aracını uygulamadan izler']] },
  `Türkiye'yi her yıl milyonlarca turist ziyaret ediyor ve çoğu havalimanından otele transfer kullanıyor. Bu pazar hâlâ büyük ölçüde telefonla pazarlık ve dağınık fiyatlarla işliyor.\n\nGoVito bunu değiştirmek için kuruldu:\n\n✅ Rota girildiği anda sabit ve şeffaf fiyat\n✅ Yalnızca belgeli transfer firmaları ve şoförler\n✅ Güvenli kartlı ödeme\n✅ Canlı şoför takibi\n\nWeb sitesi, iOS ve Android uygulamalarıyla yayındayız.\n\n👉 govitoapp.com\n\n#GoVito #transfer #turizm #havalimanıtransfer #girişimcilik #mobilite`],
 ['2026-11-05T10:00', { chip: 'Araç sahipleri', kick: 'TRANSFER FİRMALARI VE ŞOFÖRLER İÇİN', h1: 'Aracınız', h2: 'boş beklemesin.', sub: 'GoVito\u2019ya katılın; rezervasyonlar doğrudan panelinize düşsün. Fiyatınızı ve hizmet bölgenizi siz belirleyin.', cta: 'Partner ol', url: 'partner.govitoapp.com',
   items: [['car', 'Kendi paneliniz', 'Fiyat, bölge ve rezervasyon tek ekranda'], ['doc', 'Otomatik U-ETDS bildirimi', 'Yasal yolcu bildirimi sizin yerinize'], ['card', 'Güvenli ödeme', 'Kartlı ödeme altyapısı ile tahsilat']] },
  `Transfer firması ya da VIP araç sahibi misiniz? 🚐\n\nGoVito partner panelinde:\n\n• Fiyatınızı ve hizmet bölgenizi siz belirlersiniz\n• Rezervasyonlar doğrudan panelinize düşer\n• U-ETDS yolcu bildirimi otomatik yapılır\n• Ödemeler güvenli kartlı ödeme altyapısıyla alınır\n\nYüzlerce transfer firması ve şoför GoVito'da. Siz de katılın.\n\n👉 partner.govitoapp.com\n\n#GoVito #transfer #VIPtransfer #şoför #turizm #iştekalite`],
 ['2026-11-06T10:00', { chip: 'Oteller & acenteler', kick: 'B2B İŞ ORTAKLIĞI', h1: 'Misafirinizin transferi', h2: 'tek tıkla hazır.', sub: 'Oteller, seyahat acenteleri ve tur operatörleri için B2B satış paneli ve partner API\u2019si.', cta: 'İş ortağı ol', fs: 80,
   items: [['hotel', 'Oteller', 'Misafir transferlerini tek panelden yönetin'], ['globe', 'Acente & tur operatörü', 'B2B panel ile kendi müşterinize satış'], ['api', 'Partner API', 'GoVito\u2019yu kendi sisteminize bağlayın']] },
  `Otel, seyahat acentesi veya tur operatörü müsünüz? 🏨\n\nMisafirlerinizin havalimanı transferini GoVito ile tek tıkla ayarlayın:\n\n• B2B satış paneli\n• Partner API ile kendi sisteminize entegrasyon\n• Lisanslı VIP Vito araçlar, sabit fiyat\n• Canlı şoför takibi ile sorunsuz karşılama\n\nİş ortaklığı için bize yazın.\n\n👉 govitoapp.com\n\n#GoVito #otelcilik #seyahatacentesi #turoperatörü #B2B #turizm`],
 ['2026-11-09T10:00', { chip: 'Yasal uyum', kick: 'U-ETDS', h1: 'Yolcu bildirimi', h2: 'otomatik.', sub: 'Her GoVito transferinde U-ETDS yolcu bildirimi sistem tarafından otomatik yapılır. Firmalar evrak işine değil, yolculuğa odaklanır.', cta: 'Detaylar',
   items: [['doc', 'Otomatik bildirim', 'Rezervasyon onaylanınca sistem gönderir'], ['shield', 'Yasal güvence', 'Belgeli firma, kayıtlı yolculuk'], ['chart', 'Daha az iş yükü', 'Manuel giriş ve hata riski azalır']] },
  `Transfer firmalarının en çok zaman kaybettiği işlerden biri: U-ETDS yolcu bildirimi. 📄\n\nGoVito'da bu adım otomatik:\n\n✅ Rezervasyon onaylanınca bildirim sistem tarafından yapılır\n✅ Manuel giriş ve hata riski azalır\n✅ Firma, evrak işine değil yolculuğa odaklanır\n\nYasal uyumu kolaylaştıran transfer platformu: GoVito.\n\n👉 govitoapp.com\n\n#GoVito #UETDS #transfer #turizm #dijitaldönüşüm`],
 ['2026-11-10T10:00', { chip: 'Rakamlarla GoVito', kick: 'BUGÜN NEREDEYİZ?', h1: 'Kurucu öz kaynağıyla', h2: 'büyüyen platform.', sub: 'Web sitesi, iOS ve Android uygulamalarıyla yayındayız.', cta: 'İncele', fs: 82,
   stats: [['233', 'tamamlanmış transfer'], ['160+', 'kayıtlı transfer firması ve şoför'], ['200+', 'müşteri üyesi'], ['75+', 'havalimanı-şehir rotası']] },
  `Rakamlarla GoVito 📈\n\n• 233 tamamlanmış transfer\n• 160'tan fazla kayıtlı transfer firması ve şoför\n• 200'ün üzerinde müşteri üyesi\n• 75'ten fazla havalimanı-şehir rotası için Türkçe ve İngilizce sabit fiyatlı sayfalar\n\nÜrünü tamamen kurucu öz kaynağıyla geliştirdik. Web, iOS ve Android'de yayındayız.\n\nHedefimiz: transfer sektörünün "Booking"i olmak.\n\n👉 govitoapp.com\n\n#GoVito #girişim #startup #transfer #turizm #büyüme`],
 ['2026-11-11T10:00', { chip: 'Güvenli ödeme', kick: 'YOLCU İÇİN GÜVEN', h1: 'Ödeme güvende,', h2: 'yolculuk net.', sub: 'Kartlı ödeme altyapısı ve dolandırıcılık koruması ile yolcu, ne ödediğini ve ne alacağını önceden bilir.', cta: 'Rezervasyon',
   items: [['card', 'Güvenli kartlı ödeme', 'Lisanslı ödeme altyapısı'], ['shield', 'Dolandırıcılık koruması', 'Çok katmanlı kontrol'], ['tag', 'Sürpriz yok', 'Fiyat rezervasyonda sabitlenir']] },
  `Transfer rezervasyonunda en büyük endişe: "Ödediğim parayla gerçekten araç gelecek mi?" 🔒\n\nGoVito'da:\n\n✅ Güvenli kartlı ödeme altyapısı\n✅ Dolandırıcılık koruması\n✅ Fiyat rezervasyon anında sabitlenir\n✅ Yalnızca belgeli firmalar ve şoförler\n\nGüven, transferin ilk adımı.\n\n👉 govitoapp.com\n\n#GoVito #güvenliödeme #transfer #turizm #müşterideneyimi`],
 ['2026-11-12T10:00', { chip: 'Canlı takip', kick: 'MÜŞTERİ DENEYİMİ', h1: 'Şoförünüz nerede?', h2: 'Uygulamada.', sub: 'Yolcu, aracının konumunu anlık izler. Karşılama kaçmaz, bekleme stresi biter.', cta: 'Uygulamayı indir',
   items: [['pin', 'Anlık konum', 'Şoför haritada canlı görünür'], ['car', 'Doğru araç', 'Plaka ve araç bilgisi önceden'], ['globe', 'Türkçe & İngilizce', 'Yabancı misafirler için kolay kullanım']] },
  `Havalimanından çıktınız, şoförünüz nerede? 📍\n\nGoVito uygulamasında yolcu, aracının konumunu canlı izler:\n\n• Şoför haritada anlık görünür\n• Araç ve plaka bilgisi önceden gelir\n• Türkçe ve İngilizce kullanım\n\nKarşılama kaçmaz, bekleme stresi biter. iOS ve Android'de.\n\n👉 govitoapp.com\n\n#GoVito #canlıtakip #transfer #mobiluygulama #turizm`],
 ['2026-11-13T10:00', { chip: 'Türkiye ve ötesi', kick: 'ROTALAR VE ENTEGRASYONLAR', h1: '75+ rota,', h2: 'sınırların ötesinde.', sub: 'Antalya, Dalaman, Bodrum, İzmir, İstanbul ve Kıbrıs; uluslararası tedarikçi entegrasyonlarıyla Türkiye dışı talepler de karşılanıyor.', cta: 'Rotaları gör',
   items: [['pin', 'Akdeniz-Ege hattı', 'Antalya, Dalaman, Bodrum, İzmir'], ['globe', 'Uluslararası', 'Movia, SunTransfers, MeetTransfer entegrasyonları'], ['tag', 'Sabit fiyatlı sayfalar', 'Türkçe ve İngilizce rota sayfaları']] },
  `GoVito'da 75'ten fazla havalimanı-şehir rotası için Türkçe ve İngilizce sabit fiyatlı sayfalar var. ✈️🚐\n\nOdak noktamız: Antalya, Dalaman, Bodrum, İzmir, İstanbul ve Kıbrıs havalimanları.\n\nMovia, SunTransfers ve MeetTransfer entegrasyonlarıyla Türkiye dışından gelen transfer talepleri de karşılanıyor.\n\n👉 govitoapp.com\n\n#GoVito #transfer #havalimanıtransfer #turizm #Antalya #Bodrum #Dalaman`],
];

(async () => {
  const out = path.join(__dirname, 'govito'); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const posts = [];
  for (let i = 0; i < P.length; i++) {
    const [d, o, cap] = P[i];
    fs.writeFileSync(path.join(__dirname, '_gv.html'), page(o));
    await p.goto('file://' + path.join(__dirname, '_gv.html')); await p.evaluate(() => document.fonts.ready);
    const f = `gv1-${String(i + 1).padStart(2, '0')}.jpg`; await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 92 });
    posts.push({ date: d + ':00', file: f, text: cap });
  }
  fs.writeFileSync(path.join(out, 'posts.json'), JSON.stringify(posts, null, 1));
  await b.close(); console.log(posts.length);
})();
