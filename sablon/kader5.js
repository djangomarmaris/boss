const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'reklam2.js'), 'utf8');
const seg = src.slice(src.indexOf('// KADER'), src.indexOf('function kd('));
eval(seg.replace(/^const /gm, 'var '));
ICON.sun = `<svg viewBox="0 0 220 220" width="340"><circle cx="110" cy="110" r="46" fill="${G}"/><g stroke="${G}" stroke-width="8" stroke-linecap="round">${Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return `<line x1="${110+66*Math.cos(a)}" y1="${110+66*Math.sin(a)}" x2="${110+98*Math.cos(a)}" y2="${110+98*Math.sin(a)}"/>`}).join('')}</g></svg>`;

function kd(s) {
  const H = 1350;
  const dots = Array.from({ length: 60 }, (_, i) => { const x = (i * 137) % 1080, y = (i * 271) % 600, r = 1 + (i % 3); return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${0.15 + (i % 5) / 10}"/>`; }).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>${kf}*{box-sizing:border-box}body{margin:0}
.r{width:1080px;height:${H}px;background:radial-gradient(circle at 50% 25%,#26305C 0,#141A33 55%,#0C1022 100%);position:relative;overflow:hidden;color:#F3EAD7;font-family:Sora}
.st{position:absolute;inset:0}.ic{position:absolute;left:0;right:0;top:110px;height:400px;display:flex;justify-content:center;align-items:center}
.t{position:absolute;left:90px;right:90px;top:590px}
.k{font-size:28px;letter-spacing:7px;text-transform:uppercase;color:${G};font-weight:800}
h1{font-family:'Cormorant Garamond';font-weight:700;font-size:${s.fs||92}px;line-height:1.02;margin:22px 0 0;color:#F3EAD7}
p{font-size:34px;line-height:1.42;margin:26px 0 0;color:#C9C3B3}
.f{position:absolute;left:90px;right:90px;bottom:64px;display:flex;justify-content:space-between;align-items:center;font-size:28px;color:#A8A08C}
.wm{font-family:'Cormorant Garamond';font-weight:700;font-size:52px;letter-spacing:8px;color:${G}}
</style></head><body><div class="r"><svg class="st" width="1080" height="${H}">${dots}</svg><div class="ic">${ICON[s.icon]}</div>
<div class="t"><div class="k">${s.kicker}</div><h1>${s.h}</h1><p>${s.sub}</p></div>
<div class="f"><div class="wm">KADER</div><div>Fal · Tarot · Burç</div></div></div></body></html>`;
}

const TAG_T = '\n\nSen bugün hangi kartı çekerdin? 🃏\nKendi tarot açılımın için Kader 👉 link profilde\n\n#tarot #gününkartı #tarotfalı #fal #ezoterik #kaderapp';
const TAG_K = '\n\nFincanının fotoğrafını çek, Kader yorumlasın 👉 link profilde\n\n#kahvefalı #fal #türkkahvesi #falcı #fincan #kaderapp';
const TAG_R = '\n\nSen dün gece ne gördün? Yorumlara yaz 👇\nRüyanı anlat, Kader yorumlasın 👉 link profilde\n\n#rüyatabiri #rüya #rüyayorumu #ezoterik #fal #kaderapp';
const TAG_B = '\n\nBurcunu yorumlara yaz, arkadaşını etiketle 👇\nDetaylı yorum Kader\'de 👉 link profilde\n\n#burçlar #astroloji #burçyorumları #kaderapp';

const P = [
 ['2026-10-31T08:30:00', {icon:'card',kicker:'Günün kartı · III',h:'İmparatoriçe',sub:'Bolluk ve üretkenlik. Bugün emek verdiğin şey filizleniyor; kendine ve sevdiklerine şefkat göster.'}, '✨ Günün Kartı: III · İMPARATORİÇE\n\nBolluk ve üretkenlik. Bugün emek verdiğin şey filizleniyor; kendine ve sevdiklerine şefkat göster.'+TAG_T],
 ['2026-10-31T21:30:00', {icon:'moon',kicker:'Rüya tabiri',h:'Rüyada deniz görmek',sub:'Sakin deniz huzur, dalgalı deniz yoğun duygular, denizde yüzmek ise yeni bir maceraya hazır olduğun anlamına gelir.',fs:84}, '🌙 Rüyada deniz görmek\n\nDeniz duyguların aynasıdır.\n✨ Sakin deniz: huzurlu bir dönem.\n✨ Dalgalı deniz: yoğun duygular, sabırlı ol.\n✨ Denizde yüzmek: yeni bir maceraya hazırsın.'+TAG_R],
 ['2026-11-01T08:30:00', {icon:'card',kicker:'Günün kartı · VIII',h:'Güç',sub:'Gerçek güç sakinlikte. Bugün öfkeyle değil sabırla kazanırsın.'}, '✨ Günün Kartı: VIII · GÜÇ\n\nGerçek güç sakinlikte. Bugün öfkeyle değil sabırla kazanırsın; yumuşak bir söz sert bir kapıyı açar.'+TAG_T],
 ['2026-11-01T21:30:00', {icon:'cup',kicker:'Kahve falı',h:'Fincanında kuş mu var?',sub:'Kuş haber demektir. Uçan kuş yakında gelecek güzel bir haberi, konmuş kuş ise beklediğin bir cevabı müjdeler.',fs:84}, '☕ Fincanında kuş mu var?\n\nFincanda kuş haber demektir.\n🔮 Uçan kuş: yakında güzel bir haber.\n🔮 Konmuş kuş: beklediğin cevap geliyor.\n🔮 Birden çok kuş: kalabalık ve neşeli bir buluşma.'+TAG_K],
 ['2026-11-02T08:30:00', {icon:'card',kicker:'Günün kartı · XVII',h:'Yıldız',sub:'Umut geri dönüyor. Zor bir dönemin ardından içini ferahlatan bir işaret alabilirsin.'}, '✨ Günün Kartı: XVII · YILDIZ\n\nUmut geri dönüyor. Zor bir dönemin ardından içini ferahlatan bir işaret alabilirsin. Dileğini net söyle.'+TAG_T],
 ['2026-11-02T21:30:00', {icon:'stars',kicker:'Burçlar',h:'Ateş burçları: Koç, Aslan, Yay',sub:'Cesur, tutkulu ve hızlı. Haftaya enerjik başla ama sözünü tartarak konuş.',fs:82}, '🔥 Ateş burçları: Koç, Aslan, Yay\n\nCesur, tutkulu ve hızlı karar veren burçlar.\n♈ Koç: İlk adımı atan sen ol.\n♌ Aslan: Sahne senin, ama dinlemeyi unutma.\n♐ Yay: Yeni bir plan seni heyecanlandırıyor.'+TAG_B],
 ['2026-11-03T08:30:00', {icon:'card',kicker:'Günün kartı · II',h:'Azize',sub:'Sezgilerin bugün çok güçlü. Herkesin söylediğine değil, iç sesine kulak ver.'}, '✨ Günün Kartı: II · AZİZE\n\nSezgilerin bugün çok güçlü. Herkesin söylediğine değil, iç sesine kulak ver. Cevap sandığından yakın.'+TAG_T],
 ['2026-11-03T21:30:00', {icon:'moon',kicker:'Rüya tabiri',h:'Rüyada yılan görmek',sub:'Yılan dönüşümü anlatır. Kaçan yılan bir sorunun çözülmesi, renkli yılan ise yeni bir fırsat olarak yorumlanır.',fs:84}, '🌙 Rüyada yılan görmek\n\nYılan dönüşüm ve uyanış demektir.\n✨ Kaçan yılan: bir sorun çözülüyor.\n✨ Renkli yılan: yeni bir fırsat.\n✨ Yılandan korkmamak: zor bir durumu kontrol altına alıyorsun.'+TAG_R],
 ['2026-11-04T08:30:00', {icon:'card',kicker:'Günün kartı · X',h:'Kader Çarkı',sub:'Çark dönüyor. Beklemediğin bir gelişme işleri lehine çevirebilir; akışa güven.'}, '✨ Günün Kartı: X · KADER ÇARKI\n\nÇark dönüyor. Beklemediğin bir gelişme işleri lehine çevirebilir; akışa güven ve fırsatı kaçırma.'+TAG_T],
 ['2026-11-04T21:30:00', {icon:'cup',kicker:'Kahve falı',h:'Fincanında yol mu var?',sub:'Yol değişim demektir. Düz yol kolay bir süreç, kıvrımlı yol ise sabır isteyen ama güzel biten bir yolculuktur.',fs:84}, '☕ Fincanında yol mu var?\n\nFincanda yol değişim ve yolculuk demektir.\n🔮 Düz yol: işlerin kolay ilerliyor.\n🔮 Kıvrımlı yol: sabır iste, sonu güzel.\n🔮 Yol ayrımı: önünde bir karar var.'+TAG_K],
 ['2026-11-05T08:30:00', {icon:'card',kicker:'Günün kartı · VI',h:'Aşıklar',sub:'Kalbinle aklın arasında bir seçim. Bugün kendi değerlerine uygun olanı seç.'}, '✨ Günün Kartı: VI · AŞIKLAR\n\nKalbinle aklın arasında bir seçim var. Bugün kendi değerlerine uygun olanı seç; doğru karar içini rahatlatır.'+TAG_T],
 ['2026-11-05T21:30:00', {icon:'stars',kicker:'Burçlar',h:'Toprak burçları: Boğa, Başak, Oğlak',sub:'Sabırlı, planlı ve güvenilir. Bu hafta emeklerinin karşılığını görmeye başlıyorsun.',fs:78}, '🌿 Toprak burçları: Boğa, Başak, Oğlak\n\nSabırlı, planlı ve güvenilir burçlar.\n♉ Boğa: Kendine küçük bir ödül ver.\n♍ Başak: Düzen kurmak sana iyi gelecek.\n♑ Oğlak: Emeklerinin karşılığı geliyor.'+TAG_B],
 ['2026-11-06T08:30:00', {icon:'sun',kicker:'Günün kartı · XIX',h:'Güneş',sub:'Neşe ve açıklık. Bugün içten gülümsemen kapıları açıyor; parlamaktan çekinme.'}, '✨ Günün Kartı: XIX · GÜNEŞ\n\nNeşe ve açıklık. Bugün içten gülümsemen kapıları açıyor; parlamaktan çekinme.'+TAG_T],
 ['2026-11-06T21:30:00', {icon:'moon',kicker:'Rüya tabiri',h:'Rüyada para bulmak',sub:'Para emeğin ve değerin simgesidir. Yerde para bulmak beklenmedik bir kazanç ya da fırsat olarak yorumlanır.',fs:84}, '🌙 Rüyada para bulmak\n\nPara emeğin ve değerin simgesidir.\n✨ Yerde para bulmak: beklenmedik bir fırsat.\n✨ Bozuk para: küçük ama sevindirici kazançlar.\n✨ Parayı paylaşmak: bereket artıyor.'+TAG_R],
];

(async () => {
  const out = path.join(__dirname, 'kader5'); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  const posts = [];
  for (let i = 0; i < P.length; i++) {
    const [d, o, cap] = P[i];
    await p.setContent(kd(o), { waitUntil: 'load' }); await p.waitForTimeout(150);
    const f = `k5-${String(i + 1).padStart(2, '0')}.jpg`;
    await p.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 92 });
    posts.push({ date: d, file: f, text: cap });
  }
  fs.writeFileSync(path.join(out, 'posts.json'), JSON.stringify(posts, null, 1));
  // preview
  const imgs = posts.map(x => `<img src="file://${out}/${x.file}" style="width:270px;height:337px">`).join('');
  await p.setViewportSize({ width: 1890, height: 700 });
  await p.setContent(`<body style="margin:0;background:#111;display:flex;flex-wrap:wrap;width:1890px">${imgs}</body>`, { waitUntil: 'load' });
  await p.screenshot({ path: path.join(__dirname, 'kader5-onizleme.png'), fullPage: true });
  await b.close();
})();
