const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const FT = '#ucuzbiletbak #uçakbileti #ucuzbilet #yurtdışıuçakbileti #seyahat';
const VT = '#ucuzbiletbak #viptransfer #vitokiralama #vipvito #havalimanıtransfer #seyahat';
// type: route (city pair), lux (dark premium, art ticket/plane/van), tips (carousel light)
const posts=[];

const src = fs.readFileSync(path.join(__dirname, 'lux.js'), 'utf8');
const grab = n => src.match(new RegExp('const ' + n + ' = `([\\s\\S]*?)`;'))[1].replace(/\$\{Array[\s\S]*?join\(''\)\}/, Array.from({ length: 13 }, (_, i) => `<rect x="${170 + i * 24}" y="${112 - i * 0.55}" width="11" height="13" rx="4"/>`).join(''));
const PLANE = grab('PLANE'), VAN = grab('VAN'), TICKET = grab('TICKET');
const PLANEICON = c => `<svg viewBox="0 0 24 24" width="120" height="120" style="display:block;transform:rotate(180deg)"><path fill="${c}" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`;

const fdir = path.join(__dirname, 'node_modules/@fontsource/sora');
const fontCss = (fs.readFileSync(fdir + '/400.css', 'utf8') + fs.readFileSync(fdir + '/800.css', 'utf8')).replace(/url\(\.\/files\//g, `url(file://${fdir}/files/`);
const CSS = `${fontCss}
*{box-sizing:border-box}body{margin:0}
.r{width:1080px;height:1350px;font-family:Sora;position:relative;overflow:hidden;display:flex;flex-direction:column}
.dark{background:#121614;color:#fff}.green{background:#0A7D45;color:#fff}.light{background:#F2FAF5;color:#0B2B1B}
.p{height:640px;background:#0A7D45;position:relative;overflow:hidden}
.sun{position:absolute;right:-130px;top:-170px;width:640px;height:640px;border-radius:50%;background:#0B6B3C}
.road{position:absolute;left:0;right:0;bottom:0;height:120px;background:#075C33}
.dash{position:absolute;left:0;right:0;bottom:34px;height:8px;background:repeating-linear-gradient(90deg,#5FD899 0 70px,transparent 70px 140px);opacity:.7}
.cl{position:absolute;height:44px;border-radius:22px;background:#fff;opacity:.16}
.art{position:absolute}.art.van{left:120px;bottom:44px;width:840px}.art.plane{left:110px;top:150px;width:860px}.art.ticket{left:250px;top:100px;width:580px}
.t{padding:60px 80px 0}
.k{font-size:28px;font-weight:800;letter-spacing:6px;text-transform:uppercase;color:#E9EFEC}
h1{margin:24px 0 0;font-size:84px;line-height:1.06;letter-spacing:-2.5px;font-weight:800;color:#5FD899}
.s{margin:26px 0 0;font-size:38px;line-height:1.35;color:#E9EFEC}
.f{position:absolute;left:80px;right:80px;bottom:60px;display:flex;justify-content:space-between;align-items:center;font-size:28px;color:#A9B8B0;z-index:2}
.wm{font-size:36px;font-weight:800;letter-spacing:-1px;color:#5FD899}.wm b{color:#fff}
.light .wm{color:#0A7D45}.light .wm b{color:#0B2B1B}.light .f{color:#3E5A4B}
.top{display:flex;justify-content:space-between;align-items:center;padding:80px 88px 0;font-size:30px}
.green .wm{color:#C9F2DA}.green .wm b{color:#fff}
.kick{margin:110px 88px 0;font-size:30px;font-weight:800;letter-spacing:5px;text-transform:uppercase;color:#C9F2DA}
.rt{margin:28px 88px 0;font-size:136px;font-weight:800;letter-spacing:-5px;line-height:1}
.pl{margin:36px 88px 8px}
.sub{margin:32px 88px 0;font-size:40px;line-height:1.35;color:#E6F7EC;max-width:820px}
.foot{margin-top:auto;padding:0 88px 80px;display:flex;justify-content:space-between;font-size:30px;color:#E6F7EC}
.light .kick{color:#0A7D45}.light .sub{color:#2F4A3C}.light .foot{color:#3E5A4B}
.num{margin:150px 88px 0;font-size:210px;font-weight:800;line-height:1;letter-spacing:-8px;color:#0A7D45}
h2{margin:36px 88px 0;font-size:80px;line-height:1.08;letter-spacing:-2.5px;font-weight:800}
.body{margin:36px 88px 0;font-size:44px;line-height:1.4;color:#2F4A3C}
.idx{opacity:.8}.swipe{font-weight:800}
h1.lt{margin:28px 88px 0;font-size:92px;line-height:1.06;letter-spacing:-3px;font-weight:800;color:#fff}
`;
const wm = `<div class="wm"><b>ucuz</b>biletbak</div>`;
function lux(s) {
  const scene = s.art === 'van' ? `<div class="road"></div><div class="dash"></div><div class="art van">${VAN}</div>`
    : s.art === 'plane' ? `<div class="cl" style="left:70px;top:150px;width:230px"></div><div class="cl" style="right:90px;top:400px;width:300px"></div><div class="art plane">${PLANE}</div>`
    : `<div class="cl" style="left:60px;top:120px;width:200px"></div><div class="art ticket">${TICKET}</div>`;
  return `<div class="r dark"><div class="p"><div class="sun"></div>${scene}</div><div class="t"><div class="k">${s.kicker}</div><h1>${s.h}</h1><p class="s">${s.sub}</p></div><div class="f">${wm}<div>ucuzbiletbak.com</div></div></div>`;
}
function route(s) {
  return `<div class="r green"><div class="top">${wm}</div><div class="kick">Rota</div><div class="rt">${s.from}</div><div class="pl">${PLANEICON('#C9F2DA')}</div><div class="rt">${s.to}</div><p class="sub">${s.sub}</p><div class="foot"><div>ucuzbiletbak.com</div><div>@biletbakucuz</div></div></div>`;
}
function tipsCover(s, n) {
  return `<div class="r green"><div class="top">${wm}<div class="idx">1/${n}</div></div><div class="kick">${s.kicker}</div><h1 class="lt">${s.title}</h1><p class="sub">${s.sub}</p><div class="art ticket" style="right:60px;bottom:170px;left:auto;top:auto;width:480px;overflow:visible">${TICKET.replace(/#0B2B1B/g, '#0A7D45').replace(/fill="#fff"/, 'fill="#fff"')}</div><div class="foot"><div>ucuzbiletbak.com</div><div class="swipe">Kaydır →</div></div></div>`;
}
function tipsItem(s, i, n) {
  const [h, b] = s.items[i];
  return `<div class="r light"><div class="top">${wm}<div class="idx">${i + 2}/${n}</div></div><div class="num">0${i + 1}</div><h2>${h}</h2><p class="body">${b}</p><div class="foot"><div>ucuzbiletbak.com</div><div class="${i + 2 < n ? 'swipe' : ''}">${i + 2 < n ? 'Kaydır →' : '@biletbakucuz'}</div></div></div>`;
}
const page = body => `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>${CSS}</style></head><body>${body}</body></html>`;


module.exports={lux,page,PLANE,VAN,TICKET,CSS};