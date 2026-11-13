(function(){'use strict';
const MANIFEST=[{"p":"assets/anim/b1-bag.win.pack.mp4","s":191710,"v":"e0b6739d"},{"p":"assets/anim/b1-bag.win.webm","s":240158,"v":"e0e45516"},{"p":"assets/anim/hank.bigorder.pack.mp4","s":1429714,"v":"04c55e4a"},{"p":"assets/anim/hank.bigorder.webm","s":1266198,"v":"cebe9c28"},{"p":"assets/anim/hank.idle.pack.mp4","s":1281468,"v":"abd11100"},{"p":"assets/anim/hank.idle.webm","s":714713,"v":"b2f52ea1"},{"p":"assets/anim/hank.lose.pack.mp4","s":1139950,"v":"99c807bf"},{"p":"assets/anim/hank.lose.webm","s":1077026,"v":"28ad916e"},{"p":"assets/anim/hank.max.pack.mp4","s":2258571,"v":"c2d3f1d2"},{"p":"assets/anim/hank.max.webm","s":2469846,"v":"79ac7fce"},{"p":"assets/anim/hank.multi.pack.mp4","s":1373684,"v":"b734567c"},{"p":"assets/anim/hank.multi.webm","s":1702273,"v":"a0a80cff"},{"p":"assets/anim/hank.tease.pack.mp4","s":1158103,"v":"09612b46"},{"p":"assets/anim/hank.tease.webm","s":961872,"v":"8fabc865"},{"p":"assets/anim/hank.throw.pack.mp4","s":1121725,"v":"fb8286c2"},{"p":"assets/anim/hank.throw.webm","s":1359650,"v":"4e258920"},{"p":"assets/anim/hank.win.pack.mp4","s":1008384,"v":"04c80ade"},{"p":"assets/anim/hank.win.webm","s":1198414,"v":"5f57a909"},{"p":"assets/anim/s1-loaded-fries.win.pack.mp4","s":174801,"v":"5dc05713"},{"p":"assets/anim/s1-loaded-fries.win.webm","s":181208,"v":"bccbe0d1"},{"p":"assets/anim/s2-double-burger.win.pack.mp4","s":177508,"v":"e88a0edc"},{"p":"assets/anim/s2-double-burger.win.webm","s":155654,"v":"23133c98"},{"p":"assets/anim/s3-chicken-bucket.win.pack.mp4","s":177236,"v":"e54e9617"},{"p":"assets/anim/s3-chicken-bucket.win.webm","s":178971,"v":"96ae8364"},{"p":"assets/anim/s4-milkshake.win.pack.mp4","s":170786,"v":"b8e20de3"},{"p":"assets/anim/s4-milkshake.win.webm","s":170549,"v":"7877ebbe"},{"p":"assets/anim/s5-letter-a.win.pack.mp4","s":167510,"v":"b3de457f"},{"p":"assets/anim/s5-letter-a.win.webm","s":162759,"v":"b15a923b"},{"p":"assets/anim/s6-letter-k.win.pack.mp4","s":97326,"v":"f08ec959"},{"p":"assets/anim/s6-letter-k.win.webm","s":124017,"v":"9bc08667"},{"p":"assets/anim/s7-letter-q.win.pack.mp4","s":104862,"v":"730f9276"},{"p":"assets/anim/s7-letter-q.win.webm","s":139816,"v":"137a46b9"},{"p":"assets/anim/s8-letter-j.win.pack.mp4","s":84667,"v":"00224ced"},{"p":"assets/anim/s8-letter-j.win.webm","s":82676,"v":"3b0327dd"},{"p":"assets/anim/w1-fry-basket.win.pack.mp4","s":199451,"v":"92c54792"},{"p":"assets/anim/w1-fry-basket.win.webm","s":246092,"v":"497e8f96"},{"p":"assets/anim/w2-medium.win.pack.mp4","s":274284,"v":"663e4ea9"},{"p":"assets/anim/w2-medium.win.webm","s":256054,"v":"c7d7ef3c"},{"p":"assets/anim/w3-large.win.pack.mp4","s":347820,"v":"3b419feb"},{"p":"assets/anim/w3-large.win.webm","s":380540,"v":"303343f2"},{"p":"assets/audio/bagChime.mp3","s":3805,"v":"f9ce78ac"},{"p":"assets/audio/bagChime.ogg","s":5131,"v":"b0029694"},{"p":"assets/audio/bagSlap.mp3","s":2969,"v":"db48c7ce"},{"p":"assets/audio/bagSlap.ogg","s":5339,"v":"4d2c4d53"},{"p":"assets/audio/bagTrigger.mp3","s":8612,"v":"a8d9b3bc"},{"p":"assets/audio/bagTrigger.ogg","s":9615,"v":"d414e8f7"},{"p":"assets/audio/bigOrder.mp3","s":31181,"v":"c75c465c"},{"p":"assets/audio/bigOrder.ogg","s":31267,"v":"a878158c"},{"p":"assets/audio/broke.mp3","s":4432,"v":"072da4f5"},{"p":"assets/audio/broke.ogg","s":5861,"v":"b0b8f721"},{"p":"assets/audio/buyCancel.mp3","s":2969,"v":"0866b2bd"},{"p":"assets/audio/buyCancel.ogg","s":5118,"v":"d78a562a"},{"p":"assets/audio/buyConfirm.mp3","s":5477,"v":"15b79ef2"},{"p":"assets/audio/buyConfirm.ogg","s":6333,"v":"e2f2f35f"},{"p":"assets/audio/clang.mp3","s":4641,"v":"7200aca6"},{"p":"assets/audio/clang.ogg","s":5878,"v":"a1302d0b"},{"p":"assets/audio/click.mp3","s":1924,"v":"2b6994ad"},{"p":"assets/audio/click.ogg","s":4391,"v":"d0b64b74"},{"p":"assets/audio/countBell.mp3","s":5268,"v":"9f2a481a"},{"p":"assets/audio/countBell.ogg","s":6135,"v":"fe2d16f8"},{"p":"assets/audio/countBoom.mp3","s":4850,"v":"a327bfdb"},{"p":"assets/audio/countBoom.ogg","s":5118,"v":"046b2605"},{"p":"assets/audio/deposit.mp3","s":7358,"v":"cf6ea53c"},{"p":"assets/audio/deposit.ogg","s":9176,"v":"eb5cf7e0"},{"p":"assets/audio/fanfare0.mp3","s":11746,"v":"ba0963e4"},{"p":"assets/audio/fanfare0.ogg","s":13735,"v":"7ef8ddf9"},{"p":"assets/audio/fanfare1.mp3","s":17180,"v":"48527b6b"},{"p":"assets/audio/fanfare1.ogg","s":19639,"v":"47a90ae4"},{"p":"assets/audio/fanfare2.mp3","s":21986,"v":"11881f81"},{"p":"assets/audio/fanfare2.ogg","s":25245,"v":"12957653"},{"p":"assets/audio/fanfare3.mp3","s":26793,"v":"2ad65162"},{"p":"assets/audio/fanfare3.ogg","s":31283,"v":"f382b1c4"},{"p":"assets/audio/fanfare4.mp3","s":33062,"v":"c7a2b2fa"},{"p":"assets/audio/fanfare4.ogg","s":40194,"v":"ebdc20f0"},{"p":"assets/audio/line.mp3","s":2551,"v":"8f24dd4f"},{"p":"assets/audio/line.ogg","s":4734,"v":"5d6a0064"},{"p":"assets/audio/lose.mp3","s":11537,"v":"e95e404d"},{"p":"assets/audio/lose.ogg","s":8023,"v":"5d1679d8"},{"p":"assets/audio/musicBase.mp3","s":207587,"v":"1373eb1c"},{"p":"assets/audio/musicBase.ogg","s":198310,"v":"36ac74d8"},{"p":"assets/audio/musicRush.mp3","s":164067,"v":"488a2b55"},{"p":"assets/audio/musicRush.ogg","s":164804,"v":"1f5a7c6b"},{"p":"assets/audio/ping.mp3","s":3596,"v":"7915a8d8"},{"p":"assets/audio/ping.ogg","s":5280,"v":"367cf291"},{"p":"assets/audio/reelStop.mp3","s":2551,"v":"2ffa7dc4"},{"p":"assets/audio/reelStop.ogg","s":4642,"v":"ece9b970"},{"p":"assets/audio/rush1.mp3","s":12582,"v":"11233ae7"},{"p":"assets/audio/rush1.ogg","s":11374,"v":"7cb995a6"},{"p":"assets/audio/rush2.mp3","s":14254,"v":"9bc9e6f6"},{"p":"assets/audio/rush2.ogg","s":16028,"v":"1e0799db"},{"p":"assets/audio/rush3.mp3","s":14881,"v":"a81212df"},{"p":"assets/audio/rush3.ogg","s":13553,"v":"ef8b58f5"},{"p":"assets/audio/rushEnd.mp3","s":9030,"v":"ee507a14"},{"p":"assets/audio/rushEnd.ogg","s":8546,"v":"8a969485"},{"p":"assets/audio/sizzle.mp3","s":3596,"v":"7285f9af"},{"p":"assets/audio/sizzle.ogg","s":6423,"v":"160213d1"},{"p":"assets/audio/sizzleBed.mp3","s":28465,"v":"03623a1a"},{"p":"assets/audio/sizzleBed.ogg","s":32811,"v":"6a68da90"},{"p":"assets/audio/spin.mp3","s":4641,"v":"37ced222"},{"p":"assets/audio/spin.ogg","s":7605,"v":"a70011ca"},{"p":"assets/audio/spinBed.mp3","s":20524,"v":"191d4d4e"},{"p":"assets/audio/spinBed.ogg","s":23897,"v":"55336c3a"},{"p":"assets/audio/splat.mp3","s":2969,"v":"b03c6f4b"},{"p":"assets/audio/splat.ogg","s":5515,"v":"85b3e9df"},{"p":"assets/audio/tease.mp3","s":13209,"v":"5b3773e5"},{"p":"assets/audio/tease.ogg","s":18984,"v":"d0c0c18d"},{"p":"assets/audio/tick.mp3","s":1715,"v":"dc49ce67"},{"p":"assets/audio/tick.ogg","s":4409,"v":"8a3988b7"},{"p":"assets/audio/tossWarn.mp3","s":3805,"v":"4b7d50b7"},{"p":"assets/audio/tossWarn.ogg","s":6166,"v":"9cd8bb52"},{"p":"assets/audio/whoosh.mp3","s":4014,"v":"31889878"},{"p":"assets/audio/whoosh.ogg","s":6693,"v":"9fc7d689"},{"p":"assets/audio/winSmall.mp3","s":4223,"v":"41593a57"},{"p":"assets/audio/winSmall.ogg","s":6389,"v":"e28e5191"},{"p":"assets/audio/winTiny.mp3","s":2760,"v":"62d165df"},{"p":"assets/audio/winTiny.ogg","s":4980,"v":"d1e4b271"},{"p":"assets/bg/base.webp","s":228952,"v":"69be71d3"},{"p":"assets/bg/dinner.webp","s":225432,"v":"1a891b4a"},{"p":"assets/bg/late.webp","s":231746,"v":"ea0a529e"},{"p":"assets/bg/lunch.webp","s":243548,"v":"f5902e70"},{"p":"assets/hank/pose-bigorder.webp","s":89266,"v":"62f3da7a"},{"p":"assets/hank/pose-idle.webp","s":82174,"v":"7e04e12d"},{"p":"assets/hank/pose-lose.webp","s":76544,"v":"7761b04b"},{"p":"assets/hank/pose-max.webp","s":142178,"v":"febe277d"},{"p":"assets/hank/pose-multi.webp","s":65734,"v":"8b019785"},{"p":"assets/hank/pose-tease.webp","s":85488,"v":"693e0cdb"},{"p":"assets/hank/pose-throw.webp","s":75266,"v":"68e15a1f"},{"p":"assets/hank/pose-win.webp","s":89598,"v":"c1d398d4"},{"p":"assets/loader/hooligans-logo.webp","s":13818,"v":"10e92930"},{"p":"assets/loader/title-sign.svg","s":11602,"v":"8f857f14"},{"p":"assets/logo/hooligans.webp","s":14124,"v":"b2414e0b"},{"p":"assets/logo/title-plate.webp","s":108568,"v":"b7111c34"},{"p":"assets/sprite/b1-bag.win.0.webp","s":181222,"v":"7324999a"},{"p":"assets/sprite/hank.bigorder.0.webp","s":1267970,"v":"700256d3"},{"p":"assets/sprite/hank.idle.0.webp","s":1234216,"v":"4af044df"},{"p":"assets/sprite/hank.lose.0.webp","s":972570,"v":"6af62cc9"},{"p":"assets/sprite/hank.max.0.webp","s":1818170,"v":"a0857807"},{"p":"assets/sprite/hank.multi.0.webp","s":1148934,"v":"f4ce995b"},{"p":"assets/sprite/hank.tease.0.webp","s":1038998,"v":"824a0363"},{"p":"assets/sprite/hank.throw.0.webp","s":889414,"v":"f89b70af"},{"p":"assets/sprite/hank.win.0.webp","s":818332,"v":"5e6794d9"},{"p":"assets/sprite/s1-loaded-fries.win.0.webp","s":159360,"v":"847a69d4"},{"p":"assets/sprite/s2-double-burger.win.0.webp","s":177120,"v":"29569374"},{"p":"assets/sprite/s3-chicken-bucket.win.0.webp","s":176120,"v":"b8967c3e"},{"p":"assets/sprite/s4-milkshake.win.0.webp","s":164902,"v":"d52614e5"},{"p":"assets/sprite/s5-letter-a.win.0.webp","s":181602,"v":"0c8b1147"},{"p":"assets/sprite/s6-letter-k.win.0.webp","s":103996,"v":"0ce45f8d"},{"p":"assets/sprite/s7-letter-q.win.0.webp","s":114872,"v":"b1e1931b"},{"p":"assets/sprite/s8-letter-j.win.0.webp","s":92764,"v":"be1b09e2"},{"p":"assets/sprite/w1-fry-basket.win.0.webp","s":167696,"v":"27e31929"},{"p":"assets/sprite/w2-medium.win.0.webp","s":245810,"v":"692546a6"},{"p":"assets/sprite/w3-large.win.0.webp","s":292718,"v":"96320068"},{"p":"assets/sym/b1-bag.webp","s":16718,"v":"9afde126"},{"p":"assets/sym/s1-loaded-fries.webp","s":20110,"v":"a894369c"},{"p":"assets/sym/s2-double-burger.webp","s":19796,"v":"6fce468c"},{"p":"assets/sym/s3-chicken-bucket.webp","s":18562,"v":"7effd482"},{"p":"assets/sym/s4-milkshake.webp","s":17664,"v":"bf530276"},{"p":"assets/sym/s5-letter-a.webp","s":10946,"v":"cf17e858"},{"p":"assets/sym/s6-letter-k.webp","s":11990,"v":"6df6d616"},{"p":"assets/sym/s7-letter-q.webp","s":10506,"v":"704c71d9"},{"p":"assets/sym/s8-letter-j.webp","s":11178,"v":"d756a28f"},{"p":"assets/sym/s8-salt-shaker.webp","s":19018,"v":"ed2ced68"},{"p":"assets/sym/w1-fry-basket.webp","s":23512,"v":"636e4217"},{"p":"assets/sym/w2-medium.webp","s":25934,"v":"7d303a01"},{"p":"assets/sym/w3-large.webp","s":31416,"v":"d00db639"},{"p":"assets/tile/premium.webp","s":12848,"v":"5e8ab4a6"}];
// ---- 00-config.js
// API base: ?rgs= (local testing), else FRIES5_RGS at build time, else the live casino.
const Q = new URLSearchParams(location.search);
const LIVE_RGS = 'https://sk8.pred2upredictions.top';
const BUILD_RGS = '';
const LOCAL_PAGE = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
function pickRgs() { const q = Q.get('rgs'); if (LOCAL_PAGE && q && /^https?:\/\//.test(q)) return q.replace(/\/+$/, ''); return BUILD_RGS.startsWith('http') ? BUILD_RGS : LIVE_RGS; }
const RGS = pickRgs();
const TEST_SPEED = LOCAL_PAGE && +Q.get('speed') > 0 ? +Q.get('speed') : 1;   // ?speed=0.1 runs the animations 10x faster, local pages only
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const UA = navigator.userAgent;
const APPLE_MOBILE = /iPad|iPhone|iPod/.test(UA) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const SAFARI = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(UA);
let STILLS = Q.has('stills');   // held poses and CSS squash instead of clips
let PACKED = !STILLS && LOCAL_PAGE && Q.has('packed');   // H.264 clips with alpha packed beside the colour: kept for testing only (?packed=1 on local pages)
let SPRITES = !STILLS && !PACKED && (APPLE_MOBILE || SAFARI || (LOCAL_PAGE && Q.has('sprites')));   // no VP9 alpha: WebP sprite sheets, no video decoder at all; ?sprites=1 forces it on local pages

const API = 1e6;
const SID_KEY = 'fries5.sid', BET_KEY = 'fries5.bet', MUTE_KEY = 'fries5.mute', TURBO_KEY = 'fries5.turbo', VOL_KEY = 'fries5.vol';
const SID_RE = /^[A-Za-z0-9_-]{16,64}$/;
const SYM = ['s1-loaded-fries','s2-double-burger','s3-chicken-bucket','s4-milkshake','s5-letter-a','s6-letter-k','s7-letter-q','s8-letter-j','b1-bag','w1-fry-basket'];
const PREMIUM = 4;   // symbols 0 to 3 sit on the neon tile; 4 to 7 are the letters
const SYMBOL_NAME = { 4: 'A', 5: 'K', 6: 'Q', 7: 'J' };   // the math still calls these Soda, Nuggets, Ketchup and Salt; only what the player reads changes
const LOOPED = new Set(['tease']);
const SCRATCH_MIN = 22000, SCRATCH_SPAN = 16000;   // Hank rests on his first frame and only scratches every 22 to 38 seconds
const BG_OF_TIER = { 0: 'base', 1: 'lunch', 2: 'dinner', 3: 'late' };
const THEME_OF_TIER = { 0: 'theme-base', 1: 'theme-lunch', 2: 'theme-dinner', 3: 'theme-late' };
const WIN_TIERS = [[10, 'Nice Bag'], [50, 'Big Bag'], [250, 'Supersized'], [1000, 'Family Meal']];   // the top tier, Bag Secured, is the max win
const LOTTERY = new Set(['MYSTERY', 'BON']);
const BUY_ORDER = ['SALT', 'CRISPY', 'ORDER', 'LUNCH', 'DINNER', 'MYSTERY', 'BON'];
const ARMABLE = new Set(['SALT', 'CRISPY', 'ORDER']);   // buys that stay on, spin after spin

// ---- 10-util.js
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private window: keep going without it */ } },
};

// One clock for every pause: turbo and a slam (press Spin while it plays) shorten pauses already running.
const TURBO = 2.2;
const Time = { turbo: false, slam: false };
const turboRate = () => (Time.turbo ? TURBO : 1);   // the factor video clips use, so a clip and its wait stay together
const rate = () => turboRate() * (Time.slam ? 6 : 1) / TEST_SPEED;
async function wait(ms) { let left = ms; while (left > 0) { const r = rate(), step = Math.min(left / r, 30); await sleep(Math.max(step, 1)); left -= Math.max(step, 1) * r; } }

const fmtMoney = units => (units / API).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtX = x => (+x).toLocaleString('en-US', { minimumFractionDigits: (+x >= 100 || Number.isInteger(+x)) ? 0 : 2, maximumFractionDigits: +x >= 100 ? 0 : 2 }) + 'x';   // 25,000x and 36.05x, never 25,000.00x
const fmtPrice = n => (+n).toLocaleString('en-US', { maximumFractionDigits: 2 }) + 'x';
const fmtPlain = n => (+n).toLocaleString('en-US', { maximumFractionDigits: 2 });
const tokenText = v => v === 1 ? 'WILD' : 'x' + v;   // a plain basket has no multiplier to show: x1 is not an allowed value

// long numbers shrink to fit their ticket instead of being cut off
function fitText(e, text, room) { e.textContent = text; e.style.setProperty('--k', Math.min(1, room / text.length).toFixed(3)); }

const TRACE = [];
function trace(ev, data) { TRACE.push({ ev, data, t: Math.round(performance.now()) }); if (!LOCAL_PAGE && TRACE.length > 4000) TRACE.splice(0, 1000); }

const toastEl = () => $('toast'); let toastT = 0;
function toast(msg, ms = 3200, sticky = false) { const t = toastEl(); t.textContent = msg; t.classList.add('on'); trace('toast', msg); clearTimeout(toastT); if (!sticky) toastT = setTimeout(() => t.classList.remove('on'), ms); }
function toastClear() { clearTimeout(toastT); toastEl().classList.remove('on'); }

// ---- 20-api.js
// Server client. Every number the player sees about money starts here.
class ApiError extends Error { constructor(code, status, message) { super(message || code); this.code = code; this.status = status; } }

const CALL_TIMEOUT_MS = 20000;
async function rawCall(path, body) {
  // a hung request counts as a lost connection: the caller asks the server what happened
  const signal = AbortSignal.timeout ? AbortSignal.timeout(CALL_TIMEOUT_MS) : undefined;
  let res;
  try {
    res = await fetch(RGS + path, Object.assign({ signal }, body ? { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) } : {}));
  } catch (e) { throw new ApiError('ERR_NET', 0, e && e.name === 'TimeoutError' ? 'timeout' : 'network'); }
  const j = await res.json().catch(() => null);
  if (!j && signal && signal.aborted) throw new ApiError('ERR_NET', 0, 'timeout');
  if (!res.ok || !j || j.error) throw new ApiError((j && j.code) || 'ERR_HTTP', res.status, j && j.message);
  return j;
}

// ERR_RATE: the contract says wait 60ms and retry. The player sees it if it keeps happening.
async function apiCall(path, body) {
  for (let i = 0; ; i++) {
    try { return await rawCall(path, body); }
    catch (e) {
      if (e.code !== 'ERR_RATE' || i >= 20) throw e;
      if (i >= 1) toast('The kitchen is backed up. Retrying your order...', 1500);
      trace('rateRetry', { path, i });
      await sleep(60 + i * 40);
    }
  }
}

function makeSid() { const b = new Uint8Array(12); crypto.getRandomValues(b); return 'f' + Array.from(b, x => x.toString(16).padStart(2, '0')).join(''); }
function loadSid() {
  let id = store.get(SID_KEY);
  if (!id || id[0] !== 'f' || !SID_RE.test(id)) { id = makeSid(); store.set(SID_KEY, id); }
  return id;
}

const Server = {
  sid: null,
  game: () => apiCall('/game?game=fries5'),
  auth: () => apiCall('/wallet/authenticate', { sessionID: Server.sid }),
  deposit: amount => apiCall('/wallet/deposit', { sessionID: Server.sid, amount }),
  play: (mode, amount, cost) => apiCall('/wallet/play', { sessionID: Server.sid, mode, amount, cost }),
  endRound: () => apiCall('/wallet/end-round', { sessionID: Server.sid }),
  balance: () => apiCall('/wallet/balance', { sessionID: Server.sid }),
  history: () => apiCall('/wallet/history', { sessionID: Server.sid, limit: 100 }),
};

const ERR_TEXT = {
  ERR_IPB: 'Not enough play money for that order.',
  ERR_GEN: 'Kitchen error on the server. No money moved. Try again.',
  ERR_GLE: 'The casino is full right now. Try again in a while.',
  ERR_RATE: 'Too many orders at once. Give it a second.',
  ERR_NET: 'Cannot reach the kitchen. Check your connection.',
  ERR_HTTP: 'The server sent something unexpected. Try again.',
  ERR_IS: 'Your session was not found. Reconnecting...',
  ERR_STALE: 'The menu just changed. Nothing was charged. Check the new price and try again.',
  GAME_DOWN: 'The kitchen is closed for a moment. Nothing was charged. Try again soon.',
};
function errText(e) {
  if (e.code === 'ERR_GLE' && e.status !== 429) return 'You reached the $1,000,000 play-money limit.';
  return ERR_TEXT[e.code] || ('Server said no: ' + (e.message || e.code));
}

// ---- 30-audio.js
// Sounds. Every sound effect and both music loops were made in code by tools/sfx (python tools/sfx/make_all.py):
// no samples, nothing downloaded, nothing to license. They arrive after the board is up (loadLateAssets) and are
// decoded once the first tap has started audio. Until a sound's file is in, its old synthesised version plays instead.
const MASTER_VOL = 0.55, SFX_GAIN = 0.75, MUSIC_GAIN = 0.55, MUSIC_KEY = 'fries5.music';
const AUDIO_EXT = (() => { try { const a = document.createElement('audio'); return a.canPlayType('audio/ogg; codecs="vorbis"') === 'probably' ? 'ogg' : 'mp3'; } catch (e) { return 'mp3'; } })();
// loop files hold LOOP_PAD seconds of wrap-around on both ends; the loop itself is exactly this long (tools/sfx/loops.json)
const LOOP_PAD = 0.25, LOOPS = { spinBed: 2, sizzleBed: 3, musicBase: 29.090907, musicRush: 22.857143 };
const Sfx = {
  ctx: null, master: null, noise: null, muted: store.get(MUTE_KEY) === '1', vol: (v => (v === null || v === undefined || v === '' || isNaN(+v)) ? 1 : Math.max(0, Math.min(1, +v / 100)))(store.get(VOL_KEY)), beds: new Set(),
  musicOn: store.get(MUSIC_KEY) !== '0', musicBus: null, sfxBus: null, music: null, musicWant: 'musicBase',
  files: {}, busy: {}, buf: {}, stats: {}, fallbacks: {},
  _level() { return this.muted ? 0 : MASTER_VOL * this.vol; },
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume().then(() => this._musicSync()).catch(() => {}); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    try {
      const c = this.ctx = new AC();
      const comp = c.createDynamicsCompressor(); comp.connect(c.destination);
      this.master = c.createGain(); this.master.gain.value = this._level(); this.master.connect(comp);
      this.sfxBus = c.createGain(); this.sfxBus.gain.value = SFX_GAIN; this.sfxBus.connect(this.master);
      this.musicBus = c.createGain(); this.musicBus.gain.value = this.musicOn ? MUSIC_GAIN : 0; this.musicBus.connect(this.master);
      const len = c.sampleRate * 1.2 | 0, buf = this.noise = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      // iPhone: a silent buffer started inside the first tap unlocks the context for good
      const s = c.createBufferSource(); s.buffer = c.createBuffer(1, 1, c.sampleRate); s.connect(c.destination); s.start(0);
      if (c.state !== 'running') c.resume().then(() => this._musicSync()).catch(() => {}); else this._musicSync();
      Object.keys(this.files).forEach(n => this._decode(n));
    } catch (e) { this.ctx = null; }
  },
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {}); },
  setMuted(m) {
    this.muted = m; store.set(MUTE_KEY, m ? '1' : '0'); this._apply();
  },
  setVolume(pct) { this.vol = Math.max(0, Math.min(1, pct / 100)); store.set(VOL_KEY, Math.round(pct)); this._apply(); },
  setMusic(on) {
    this.musicOn = !!on; store.set(MUSIC_KEY, on ? '1' : '0');
    if (this.musicBus) { const t = this.ctx.currentTime, g = this.musicBus.gain; g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(on ? MUSIC_GAIN : 0, t + 0.3); }
    this._musicSync();
  },
  _apply() {
    if (!this.master) return;
    const t = this.ctx.currentTime, g = this.master.gain;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(this._level(), t + 0.03);
  },
  _ok() { return this.ctx && this.ctx.state === 'running' && !this.muted; },
  _pitch() { return 1 + (Math.random() - .5) * .08; },   // about 4 percent either way, so repeats do not sound stamped

  // ---- the made sounds: files in, decoded, played ----
  // called by loadLateAssets for each assets/audio/ file in this browser's format
  attach(p) {
    const m = /([\w-]+)\.(ogg|mp3)$/.exec(p); if (!m) return;
    this.files[m[1]] = Assets.url(p);
    if (this.ctx) this._decode(m[1]);
  },
  _decode(name) {
    if (this.buf[name] || this.busy[name] || !this.files[name]) return;
    const c = this.ctx; this.busy[name] = true;
    fetch(this.files[name]).then(r => r.arrayBuffer()).then(ab => new Promise((ok, no) => { const p = c.decodeAudioData(ab, ok, no); if (p && p.catch) p.catch(no); }))
      .then(b => { this.buf[name] = b; if (name.startsWith('music')) this._musicSync(); })
      .catch(() => { trace('audioDecodeFailed', name); })
      .then(() => { this.busy[name] = false; });
  },
  // one buffer through the effects bus. Returns false when the file is not in yet, so the caller plays the synth instead.
  _play(name, { rate = 1, vol = 1, at = 0, vary = false } = {}) {
    if (!this._ok()) return true;   // muted or not started: nothing plays, and no fallback either
    const b = this.buf[name]; if (!b) { this.fallbacks[name] = (this.fallbacks[name] || 0) + 1; return false; }
    if (vary) { rate *= 1 + (Math.random() - .5) * .07; vol *= 0.85 + Math.random() * .15; }
    const c = this.ctx, s = c.createBufferSource(), g = c.createGain();
    s.buffer = b; s.playbackRate.value = rate; g.gain.value = vol;
    s.connect(g); g.connect(this.sfxBus); s.start(c.currentTime + at);
    s.onended = () => { s.disconnect(); g.disconnect(); };
    this.stats[name] = (this.stats[name] || 0) + 1;
    return true;
  },
  // a seamless loop: plays from LOOP_PAD to LOOP_PAD + its length, which is seamless even with an MP3 decoder's offset
  _loop(name, vol, bus, from) {
    const c = this.ctx, b = this.buf[name], L = Math.min(LOOPS[name], b.duration - LOOP_PAD - 0.01);
    const s = c.createBufferSource(), g = c.createGain(), t = c.currentTime;
    s.buffer = b; s.loop = true; s.loopStart = LOOP_PAD; s.loopEnd = LOOP_PAD + L;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.05);
    s.connect(g); g.connect(bus); s.start(t, LOOP_PAD + (from === undefined ? Math.random() * L : from));
    this.stats[name] = (this.stats[name] || 0) + 1;
    return { s, g };
  },
  // a held bed that fades in and out; returns its stop. Runs muted too, so unmuting mid-bed just works.
  _bedFile(name, synth) {
    if (!this.ctx || this.ctx.state !== 'running') return () => {};
    if (!this.buf[name]) { this.fallbacks[name] = (this.fallbacks[name] || 0) + 1; return synth(); }
    const { s, g } = this._loop(name, 1, this.sfxBus), c = this.ctx;
    const stop = () => { if (!this.beds.delete(stop)) return; const e = c.currentTime; g.gain.cancelScheduledValues(e); g.gain.setValueAtTime(g.gain.value, e); g.gain.linearRampToValueAtTime(0, e + 0.08); s.stop(e + 0.1); };
    this.beds.add(stop); return stop;
  },
  // ---- music: one loop at a time, base game or Rush, crossfaded. Music off stops the loop outright. ----
  _musicSync() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const want = this.musicOn ? this.musicWant : null, cur = this.music;
    if (cur && cur.name === want) return;
    if (want && !this.buf[want]) return;   // not in yet: whatever plays keeps playing until it is
    const c = this.ctx, e = c.currentTime;
    if (cur) { cur.g.gain.cancelScheduledValues(e); cur.g.gain.setValueAtTime(cur.g.gain.value, e); cur.g.gain.linearRampToValueAtTime(0, e + 0.6); cur.s.stop(e + 0.65); this.music = null; }
    if (!want) return;
    const n = this._loop(want, 1, this.musicBus, 0); n.name = want;
    n.g.gain.cancelScheduledValues(e); n.g.gain.setValueAtTime(0, e); n.g.gain.linearRampToValueAtTime(1, e + (cur ? 0.6 : 1.5));
    this.music = n;
  },
  _musicTo(name) { this.musicWant = name; this._musicSync(); },
  // big moments push the music down for a while so the stinger owns the room
  _duck(sec) {
    if (!this.musicBus || !this.musicOn) return;
    const t = this.ctx.currentTime, g = this.musicBus.gain;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(MUSIC_GAIN * 0.3, t + 0.08);
    g.setValueAtTime(MUSIC_GAIN * 0.3, t + sec); g.linearRampToValueAtTime(MUSIC_GAIN, t + sec + 0.8);
  },

  // ---- old synth kit, still used as the fallback ----
  tone(freq, dur, { type = 'square', vol = 0.2, at = 0, to = null, attack = 0.004, pitch = this._pitch() } = {}) {
    if (!this._ok()) return; const c = this.ctx, t = c.currentTime + at, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq * pitch, t); if (to) o.frequency.exponentialRampToValueAtTime(to * pitch, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  },
  burst(dur, { vol = 0.2, at = 0, filter = 'bandpass', f = 1800, to = null, q = 1 } = {}) {
    if (!this._ok()) return; const c = this.ctx, t = c.currentTime + at, s = c.createBufferSource(), g = c.createGain(), fl = c.createBiquadFilter();
    s.buffer = this.noise; s.loop = true; fl.type = filter; fl.Q.value = q; fl.frequency.setValueAtTime(f, t); if (to) fl.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t, Math.random()); s.stop(t + dur + 0.02);
  },
  // a tune stays in tune: its notes share one pitch
  notes(list, step, opt) { const pitch = opt.pitch || this._pitch(); list.forEach((n, i) => this.tone(n, opt.dur || step * 1.6, Object.assign({}, opt, { at: i * step, pitch }))); },
  bed({ filter = 'bandpass', f = 900, q = 1, vol = 0.05 } = {}) {
    if (!this.ctx || this.ctx.state !== 'running') return () => {};
    const c = this.ctx, s = c.createBufferSource(), g = c.createGain(), fl = c.createBiquadFilter(), t = c.currentTime;
    s.buffer = this.noise; s.loop = true; fl.type = filter; fl.frequency.value = f; fl.Q.value = q;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.05);
    s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t, Math.random());
    const stop = () => { if (!this.beds.delete(stop)) return; const e = c.currentTime; g.gain.cancelScheduledValues(e); g.gain.setValueAtTime(g.gain.value, e); g.gain.linearRampToValueAtTime(0, e + 0.06); s.stop(e + 0.08); };
    this.beds.add(stop); return stop;
  },
  stopBeds() { Array.from(this.beds).forEach(s => s()); this._musicTo('musicBase'); },   // a round is over: back to the base-game music

  // ---- the cues the game calls ----
  click() { this._play('click', { vary: true }) || SYNTH.click.call(this); },
  spin() { this._play('spin') || SYNTH.spin.call(this); },
  spinBed() { return this._bedFile('spinBed', () => SYNTH.spinBed.call(this)); },
  reelStop() { this._play('reelStop', { vary: true }) || SYNTH.reelStop.call(this); },
  // n: Bags landed so far this spin; the chime climbs a pentatonic step for each one
  bag(n) {
    if (!this._play('bagSlap', { vary: true })) return SYNTH.bag.call(this, n);
    const steps = [0, 2, 4, 7, 9, 12, 14, 16], k = steps[Math.max(0, Math.min(steps.length - 1, (n | 0) - 1))];
    this._play('bagChime', { rate: Math.pow(2, k / 12), at: 0.035 });
  },
  // n: how many reels have teased already this spin; each one sits a little higher
  tease(n = 0) { this._play('tease', { rate: Math.pow(1.06, Math.min(n, 5)) }) || SYNTH.tease.call(this, n); },
  tossWarn() { this._play('tossWarn') || SYNTH.tossWarn.call(this); },
  whoosh() { this._play('whoosh', { vary: true }) || SYNTH.whoosh.call(this); },
  splat() { this._play('splat', { vary: true }) || SYNTH.splat.call(this); },
  clang() { this._play('clang', { vary: true }) || SYNTH.clang.call(this); },
  // v: the basket's multiplier; bigger values ping higher, up to almost an octave
  ping(v) { const n = Math.min(1, Math.log((+v || 0) + 1) / Math.log(101)); this._play('ping', { rate: 1 + n * 0.85, vary: true }) || SYNTH.ping.call(this, v); },
  sizzle() { this._play('sizzle', { vary: true }) || SYNTH.sizzle.call(this); },
  sizzleBed() { return this._bedFile('sizzleBed', () => SYNTH.sizzleBed.call(this)); },
  winTiny() { this._play('winTiny', { vary: true }) || SYNTH.winTiny.call(this); },
  winSmall() { this._play('winSmall') || SYNTH.winSmall.call(this); },
  line() { this._play('line', { vary: true }) || SYNTH.line.call(this); },
  bagTrigger(n) { const k = Math.pow(2, (Math.max(3, Math.min(6, n | 0)) - 3) * 2 / 12); if (this._play('bagTrigger', { rate: k })) this._duck(1.2); else SYNTH.bagTrigger.call(this, n); },
  fanfare(lv) { lv = Math.max(0, Math.min(4, lv | 0)); if (this._play('fanfare' + lv)) this._duck([1.6, 2.2, 2.8, 3.4, 4.2][lv]); else SYNTH.fanfare.call(this, lv); },
  tick() { this._play('tick', { vary: true }) || SYNTH.tick.call(this); },
  countHit(lv) {
    if (!this._play('countBoom')) return SYNTH.countHit.call(this, lv);
    this._play('countBell', { rate: Math.pow(2, Math.max(0, Math.min(4, lv | 0)) * 2 / 12) });
  },
  lose() { this._play('lose') || SYNTH.lose.call(this); },
  rush(tier = 1) { tier = Math.max(1, Math.min(3, tier | 0)); if (this._play('rush' + tier)) this._duck(1.6); else SYNTH.rush.call(this, tier); this._musicTo('musicRush'); },
  rushEnd() { this._play('rushEnd') || SYNTH.rushEnd.call(this); this._musicTo('musicBase'); },
  bigOrder() { if (this._play('bigOrder')) this._duck(4); else SYNTH.bigOrder.call(this); },
  buyConfirm() { this._play('buyConfirm') || SYNTH.buyConfirm.call(this); },
  buyCancel() { this._play('buyCancel') || SYNTH.buyCancel.call(this); },
  deposit() { this._play('deposit') || SYNTH.deposit.call(this); },
  broke() { this._play('broke') || SYNTH.broke.call(this); },
};

// The old oscillator versions, called with this = Sfx. They play only while a cue's file is not decoded yet.
const SYNTH = {
  click() { this.tone(520, 0.05, { vol: 0.12 }); },
  spin() { this.burst(0.35, { vol: 0.3, f: 500, to: 2400 }); },
  spinBed() { return this.bed({ f: 900, vol: 0.05 }); },
  reelStop() { this.tone(150, 0.09, { type: 'triangle', vol: 0.32, to: 70 }); this.tone(420, 0.06, { type: 'triangle', vol: 0.16, to: 180 }); this.burst(0.05, { vol: 0.1, f: 3000 }); },
  bag(n) { this.tone(95, 0.22, { type: 'sine', vol: 0.5, to: 45 }); this.tone(330 * Math.pow(1.26, n), 0.3, { type: 'triangle', vol: 0.22, at: 0.04 }); },
  tease(n = 0) {
    const k = Math.pow(1.06, n);
    for (let i = 0; i < 3; i++) {
      this.tone(60 * k, 0.12, { type: 'sine', vol: 0.3, at: i * 0.42 }); this.tone(55 * k, 0.12, { type: 'sine', vol: 0.24, at: i * 0.42 + 0.16 });
      this.tone(180 * k, 0.12, { type: 'triangle', vol: 0.12, at: i * 0.42 }); this.tone(165 * k, 0.12, { type: 'triangle', vol: 0.1, at: i * 0.42 + 0.16 });
    }
  },
  tossWarn() { this.tone(520, 0.12, { type: 'triangle', vol: 0.2, to: 780 }); this.tone(620, 0.16, { type: 'triangle', vol: 0.2, at: 0.13, to: 1040 }); },
  whoosh() { this.burst(0.3, { vol: 0.4, f: 700, to: 2600, q: 2 }); },
  splat() { this.burst(0.14, { vol: 0.3, filter: 'lowpass', f: 2200, to: 200 }); this.tone(170, 0.11, { type: 'triangle', vol: 0.3, to: 80 }); },
  clang() { [810, 1370, 2120].forEach((f, i) => this.tone(f, 0.32, { type: 'square', vol: 0.09, at: i * 0.008 })); this.burst(0.08, { vol: 0.2, f: 5000 }); },
  ping(v) { const n = Math.min(1, Math.log(v + 1) / Math.log(101)); this.tone(620 + n * 900, 0.16, { type: 'triangle', vol: 0.26 }); this.tone((620 + n * 900) * 1.5, 0.2, { type: 'sine', vol: 0.16, at: 0.05 }); },
  sizzle() { this.burst(0.28, { vol: 0.13, filter: 'highpass', f: 4200 }); },
  sizzleBed() { return this.bed({ filter: 'highpass', f: 4200, q: 0.7, vol: 0.035 }); },
  winTiny() { this.tone(660, 0.1, { type: 'triangle', vol: 0.09 }); },
  winSmall() { this.notes([523, 659, 784], 0.07, { type: 'triangle', vol: 0.18, dur: 0.14 }); },
  line() { this.tone(880, 0.08, { type: 'triangle', vol: 0.14 }); },
  bagTrigger(n) { const k = Math.pow(2, (n - 3) * 2 / 12); this.tone(80, 0.4, { type: 'sine', vol: 0.5, to: 40 }); this.notes([392 * k, 494 * k, 587 * k, 784 * k], 0.09, { type: 'triangle', vol: 0.24, dur: 0.26, at: 0.05, pitch: 1 }); },
  fanfare(lv) {
    const seqs = [[523, 659, 784, 1047], [523, 659, 784, 1047, 1319], [392, 523, 659, 784, 1047, 1319], [392, 523, 659, 784, 1047, 1319, 1568], [392, 523, 659, 784, 1047, 1319, 1568, 2093]];
    this.notes(seqs[lv], 0.11, { type: 'sawtooth', vol: [.10, .13, .16, .20, .24][lv], dur: 0.24, pitch: 1 }); this.notes(seqs[lv].map(f => f / 2), 0.11, { type: 'square', vol: 0.08, dur: 0.24, pitch: 1 });
  },
  tick() { this.tone(1200, 0.03, { vol: 0.05 }); },
  countHit(lv) { this.tone(110, 0.28, { type: 'sine', vol: 0.45, to: 55 }); this.tone(1047 + lv * 131, 0.22, { type: 'triangle', vol: 0.2 }); this.burst(0.12, { vol: 0.14, f: 3200 }); },
  lose() { this.tone(330, 0.3, { type: 'sawtooth', vol: 0.14 }); this.tone(294, 0.3, { type: 'sawtooth', vol: 0.14, at: 0.3 }); this.tone(262, 0.9, { type: 'sawtooth', vol: 0.15, at: 0.6, to: 150 }); },
  rush(tier = 1) { const k = Math.pow(2, [0, 3, 7][tier - 1] / 12); this.notes([262, 330, 392, 523, 392, 523, 659].map(f => f * k), 0.09, { type: 'square', vol: 0.13, dur: 0.16, pitch: 1 }); this.burst(0.6, { vol: 0.14, f: 900, to: 4000, at: 0.1 }); },
  rushEnd() { this.notes([659, 523, 392], 0.13, { type: 'triangle', vol: 0.16, dur: 0.24 }); },
  bigOrder() { for (let i = 0; i < 6; i++) this.tone(80 + i * 40, 0.3, { type: 'sawtooth', vol: 0.2, at: i * 0.2 }); this.burst(1.3, { vol: 0.3, filter: 'lowpass', f: 300, to: 5000 }); },
  buyConfirm() { this.notes([523, 784], 0.08, { type: 'triangle', vol: 0.2, dur: 0.14 }); },
  buyCancel() { this.notes([494, 370], 0.08, { type: 'triangle', vol: 0.14, dur: 0.12 }); },
  deposit() { this.notes([988, 1319, 1568], 0.07, { type: 'triangle', vol: 0.18, dur: 0.16 }); },
  broke() { this.tone(180, 0.14, { type: 'square', vol: 0.09 }); this.tone(150, 0.2, { type: 'square', vol: 0.09, at: 0.15 }); },
};
// read-only peek for the audio tests: which files decoded, how many buffers each cue started, which fell back to synth
window.__friesAudio = { get ext() { return AUDIO_EXT; }, get loaded() { return Object.keys(Sfx.buf); }, get stats() { return Object.assign({}, Sfx.stats); }, get fallbacks() { return Object.assign({}, Sfx.fallbacks); },
  get state() { return Sfx.ctx ? Sfx.ctx.state : 'none'; }, get level() { return Sfx.master ? Sfx.master.gain.value : null; }, get music() { return Sfx.music ? Sfx.music.name : null; }, get musicOn() { return Sfx.musicOn; },
  cue(name, ...a) { if (typeof Sfx[name] === 'function' && !name.startsWith('_')) { const r = Sfx[name](...a); if (typeof r === 'function') setTimeout(r, 600); } } };   // tests fire each cue once

// ---- 40-assets.js
// The kit the first spin needs is fetched before play, with a byte-accurate bar; everything else follows in the background.
const Assets = {
  urls: {}, have: p => !!Assets.urls[p], url: p => Assets.urls[p],
  sym: id => Assets.urls[`assets/sym/${SYM[id]}.webp`],
  key: k => Assets.urls[`assets/sym/${k}.webp`],
  anim: k => Assets.urls[`assets/anim/${k}.win.${PACKED ? 'pack.mp4' : 'webm'}`],
  hank: k => Assets.urls[`assets/anim/hank.${k}.${PACKED ? 'pack.mp4' : 'webm'}`],
  pose: k => Assets.urls[`assets/hank/pose-${k}.webp`],
  bg: k => Assets.urls[`assets/bg/${k}.webp`],
};

async function fetchOne(entry, onBytes) {
  for (let i = 0; i < 3; i++) {
    let got = 0;
    try {
      const res = await fetch(entry.p + '?v=' + entry.v);
      if (!res.ok) throw new Error('http ' + res.status);
      let blob;
      if (res.body && res.body.getReader) {
        const r = res.body.getReader(), parts = [];
        for (;;) { const { done, value } = await r.read(); if (done) break; parts.push(value); got += value.length; onBytes(value.length); }
        blob = new Blob(parts, { type: entry.p.endsWith('.mp4') ? 'video/mp4' : res.headers.get('content-type') || '' });   // Safari will not play a blob with no type
      } else { blob = await res.blob(); if (entry.p.endsWith('.mp4')) blob = blob.slice(0, blob.size, 'video/mp4'); got = blob.size; onBytes(got); }
      Assets.urls[entry.p] = URL.createObjectURL(blob);
      if (entry.p.startsWith('assets/sprite/')) Sprites.blobs[entry.p] = blob;   // decoded later, only when its clip is about to play
      return true;
    } catch (e) { onBytes(-got); await sleep(300 * (i + 1)); }
  }
  return false;
}

// A real check, not a guess: decode a frame and read a corner pixel. Opaque corner means this browser drops the alpha channel.
async function videoHasAlpha(url) {
  const v = document.createElement('video'); v.muted = true; v.playsInline = true; v.preload = 'auto'; v.src = url;
  try {
    await Promise.race([new Promise((ok, no) => { v.onloadeddata = ok; v.onerror = no; }), sleep(4000).then(() => { throw new Error('timeout'); })]);
    v.currentTime = 0.1;
    await Promise.race([new Promise(ok => { v.onseeked = ok; }), sleep(1500)]);
    const c = document.createElement('canvas'); c.width = 32; c.height = 56;
    const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(v, 0, 0, 32, 56);
    const a = x.getImageData(1, 1, 1, 1).data[3];
    return a < 40;
  } catch (e) { return false; } finally { v.removeAttribute('src'); v.load(); }
}

// what the first spin cannot do without
const BLOCKING = /^assets\/(sym\/|tile\/|bg\/base\.|anim\/hank\.idle\.|sprite\/hank\.idle\.|hank\/pose-idle\.|logo\/(title-plate|hooligans)\.)/;
const isPack = e => e.p.endsWith('.pack.mp4'), isVideo = e => e.p.endsWith('.webm') || isPack(e);
const isSprite = e => e.p.startsWith('assets/sprite/');
const isAudio = e => e.p.startsWith('assets/audio/');
const usable = e => isAudio(e) ? e.p.endsWith('.' + AUDIO_EXT) : isSprite(e) ? !STILLS && SPRITES : !isVideo(e) || (!STILLS && !SPRITES && isPack(e) === PACKED);   // a phone only ever downloads the set it can play; sounds come in one format
// symbols decoded once and held, so a reel never lands on a picture that is still being decoded
const Decoded = [];
function predecode() {
  const urls = Object.keys(Assets.urls).filter(p => /^assets\/(sym|tile)\//.test(p)).map(p => Assets.urls[p]);
  return Promise.race([Promise.all(urls.map(u => { const im = new Image(); im.src = u; Decoded.push(im); return im.decode ? im.decode().catch(() => {}) : 0; })), sleep(2000)]);
}

async function loadAssets(onProgress) {
  if (PACKED && !canPlayPacked()) { PACKED = false; STILLS = true; trace('noPacked'); }
  const list = MANIFEST.filter(e => BLOCKING.test(e.p) && usable(e));
  const total = list.reduce((n, e) => n + e.s, 0) || 1; let got = 0;
  const failed = [];
  const queue = list.slice().sort((a, b) => a.s - b.s);
  const worker = async () => { while (queue.length) { const e = queue.shift(); const ok = await fetchOne(e, n => { got += n; onProgress(Math.min(1, got / total)); }); if (!ok) failed.push(e.p); } };
  await Promise.all(Array.from({ length: 6 }, worker));
  trace('assets', { files: list.length, bytes: total, failed: failed.length });
  if (!STILLS && !PACKED && !SPRITES) {
    const idle = Assets.hank('idle');
    if (!idle || !(await videoHasAlpha(idle))) {
      trace('noAlpha');
      const sheets = MANIFEST.filter(e => e.p.startsWith('assets/sprite/hank.idle.'));   // this browser drops alpha from video: sprite sheets need no decoder
      SPRITES = true;
      const ok = sheets.length && (await Promise.all(sheets.map(e => fetchOne(e, () => {})))).every(Boolean);
      if (!ok) { SPRITES = false; STILLS = true; }
    }
  }
  await predecode();
  // the board cannot run without its symbols; the clips and art all have fallbacks
  const needed = SYM.map(s => `assets/sym/${s}.webp`).filter(p => failed.includes(p));
  if (needed.length) throw new Error('symbols failed to load');
  return failed;
}

// After the Go button is up: the rest, stills first, each put to use the moment it is in memory. Until then everything has a fallback.
async function loadLateAssets() {
  const late = MANIFEST.filter(e => !BLOCKING.test(e.p) && usable(e) && !e.p.startsWith('assets/loader/'));   // the loading screen's own art is in already
  const need = e => !isSprite(e) ? 0 : /hank\.throw\./.test(e.p) ? 0 : /\.win\./.test(e.p) && !/^assets\/sprite\/hank/.test(e.p) ? 1 : /hank\.(win|multi|tease)\./.test(e.p) ? 2 : 3;   // sprites in the order a round needs them
  const queue = late.slice().sort((a, b) => isVideo(a) - isVideo(b) || need(a) - need(b) || a.s - b.s);
  const worker = async () => { while (queue.length) { const e = queue.shift(); if (!(await fetchOne(e, () => {}))) { trace('lateClipFailed', e.p); continue; }
    if (isAudio(e)) { Sfx.attach(e.p); continue; }
    if (e.p.startsWith('assets/bg/')) applyArt();
    if (isSprite(e)) { const k = /^assets\/sprite\/(.+)\.\d+\.webp$/.exec(e.p); if (k && Sprites.have(k[1])) { if (k[1].startsWith('hank.')) Hank.attach(k[1].slice(5)); else Clips.attach(k[1].replace(/\.win$/, '')); } continue; }
    const hank = /hank\.(\w+)\.(?:pack\.mp4|webm)$/.exec(e.p), sym = /([\w-]+)\.win\.(?:pack\.mp4|webm)$/.exec(e.p);
    if (hank) Hank.attach(hank[1]); else if (sym) Clips.attach(sym[1]); } };
  await Promise.all(Array.from({ length: 2 }, worker));   // two at a time, so the board and the first rounds keep the bandwidth
  trace('lateClips', { files: late.length });
}

// ---- 45-unpack.js
// Packed clips, for browsers with no VP9 alpha (iPhone, Safari): one H.264 video, colour on the left half and alpha on the right.
// One shared WebGL context joins the halves; the result is copied into ordinary 2D canvases.
const INK_RGB = [0x1a / 255, 0x14 / 255, 0x10 / 255];   // what tools/pack-clips.js flattened the colour over
const Unpack = {
  gl: null, cv: null, tex: null, up: null, dead: false, vids: [], lastV: null, lastT: -1, size: 640,
  init() {
    if (this.gl) return true; if (this.dead) return false;
    const cv = this.cv || document.createElement('canvas'); if (!this.direct) cv.width = cv.height = this.size;
    const gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: LOCAL_PAGE });
    if (!gl) { this.dead = true; return false; }
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const p = gl.createProgram();
    gl.attachShader(p, sh(gl.VERTEX_SHADER, 'attribute vec2 p;varying vec2 u;void main(){u=p*.5+.5;gl_Position=vec4(p,0.,1.);}'));
    // the colour was laid over the ink, so taking the ink back out leaves clean edges with no dark fringe
    gl.attachShader(p, sh(gl.FRAGMENT_SHADER, `precision mediump float;varying vec2 u;uniform sampler2D t;uniform float h;const vec3 k=vec3(${INK_RGB.map(x => x.toFixed(4)).join(',')});
void main(){float x=clamp(u.x*.5,h,.5-h);float a=texture2D(t,vec2(.5+x,u.y)).r;vec3 c=texture2D(t,vec2(x,u.y)).rgb;gl_FragColor=vec4(clamp(c-k*(1.-a),0.,a),a);}`));
    gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS)) { this.dead = true; return false; }
    gl.useProgram(p);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(p, 'p'); gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    this.tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, this.tex);
    for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    this.up = gl.getUniformLocation(p, 'h'); gl.clearColor(0, 0, 0, 0);
    cv.addEventListener('webglcontextlost', e => { e.preventDefault(); this.dead = true; this.gl = null; goStills(); });
    this.gl = gl; this.cv = cv; return true;
  },
  // paints the video's current frame into a 2D context. False means there is no real frame yet, so the caller keeps what is showing
  draw(v, ctx, w, h) {
    if (this.dead || !this.init() || v.readyState < 2 || !v.videoWidth) return false;
    const gl = this.gl;
    try {
      if (v !== this.lastV || v.currentTime !== this.lastT) { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, v); this.lastV = v; this.lastT = v.currentTime; }
      gl.viewport(0, 0, w, h); gl.clear(gl.COLOR_BUFFER_BIT); gl.uniform1f(this.up, .5 / v.videoWidth); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!v._pkOk) {   // an iPhone can hand back an empty picture before the first real frame: never show that
        const px = new Uint8Array(4); let seen = false;
        for (let i = 1; i < 6 && !seen; i++) for (let j = 1; j < 6 && !seen; j++) { gl.readPixels((w * i / 6) | 0, (h * j / 6) | 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); seen = px[3] > 8; }
        if (!seen) return false;
        v._pkOk = true;
      }
      if (!this.direct) { ctx.clearRect(0, 0, w, h); ctx.drawImage(this.cv, 0, this.size - h, w, h, 0, 0, w, h); }   // Hank is direct: his canvas is the WebGL one, because copying WebGL into 2D every frame is what made him stutter on iPhone
      return true;
    } catch (e) { trace('unpackError', String(e)); return false; }
  },
  // iPhones only decode a video that has been played, and in Low Power Mode only after a tap: run each one for a moment
  add(v) { this.vids.push(v); this.prime(v); },
  prime(v) {
    if (v._primed || v._priming) return; v._priming = true;
    const p = v.play();
    if (!p) { v._priming = false; return; }
    p.then(() => { v._priming = false; v._primed = true; if (v._claimed) return; v.pause(); try { v.currentTime = 0; } catch (e) { /* not ready yet */ } }, () => { v._priming = false; });
  },
  primeAll() { this.vids.forEach(v => this.prime(v)); },
};
// the file's own URL, for a phone that refuses to play the in-memory copy
function packDirect(p) { const e = MANIFEST.find(x => x.p === p); return e ? e.p + '?v=' + e.v : ''; }
function retryDirect(v, p) { if (!PACKED || v._direct) return false; const u = packDirect(p); if (!u) return false; v._direct = true; trace('packDirect', p); v._primed = v._priming = false; v.src = u; v.load(); Unpack.prime(v); return true; }
function canPlayPacked() { return !!document.createElement('video').canPlayType('video/mp4; codecs="avc1.640028"') && Unpack.init(); }
function goStills() { if (STILLS) return; STILLS = true; PACKED = SPRITES = false; document.body.classList.remove('packed'); document.body.classList.add('stills'); trace('stills'); Hank.pose(Hank.name); Clips.stopAll(); }

// ---- 46-sprite-meta.js
// Written by tools/sprite-clips.js: frame layout of each sprite sheet clip. Do not edit by hand.
const SPRITE_META = {"b1-bag.win":{"fps":12,"n":34,"w":128,"h":128,"cols":6,"per":34,"sheets":1},"hank.bigorder":{"fps":12,"n":44,"w":300,"h":534,"cols":9,"per":44,"sheets":1},"hank.idle":{"fps":12,"n":45,"w":300,"h":534,"cols":9,"per":45,"sheets":1},"hank.lose":{"fps":12,"n":36,"w":300,"h":534,"cols":9,"per":36,"sheets":1},"hank.max":{"fps":12,"n":48,"w":300,"h":534,"cols":10,"per":48,"sheets":1},"hank.multi":{"fps":12,"n":45,"w":300,"h":534,"cols":9,"per":45,"sheets":1},"hank.tease":{"fps":12,"n":37,"w":300,"h":534,"cols":9,"per":37,"sheets":1},"hank.throw":{"fps":12,"n":30,"w":300,"h":534,"cols":8,"per":30,"sheets":1},"hank.win":{"fps":12,"n":29,"w":300,"h":534,"cols":8,"per":29,"sheets":1},"s1-loaded-fries.win":{"fps":12,"n":29,"w":128,"h":128,"cols":6,"per":29,"sheets":1},"s2-double-burger.win":{"fps":12,"n":32,"w":128,"h":128,"cols":6,"per":32,"sheets":1},"s3-chicken-bucket.win":{"fps":12,"n":34,"w":128,"h":128,"cols":6,"per":34,"sheets":1},"s4-milkshake.win":{"fps":12,"n":30,"w":128,"h":128,"cols":6,"per":30,"sheets":1},"s5-letter-a.win":{"fps":12,"n":47,"w":128,"h":128,"cols":7,"per":47,"sheets":1},"s6-letter-k.win":{"fps":12,"n":23,"w":128,"h":128,"cols":5,"per":23,"sheets":1},"s7-letter-q.win":{"fps":12,"n":27,"w":128,"h":128,"cols":6,"per":27,"sheets":1},"s8-letter-j.win":{"fps":12,"n":22,"w":128,"h":128,"cols":5,"per":22,"sheets":1},"w1-fry-basket.win":{"fps":12,"n":20,"w":128,"h":128,"cols":5,"per":20,"sheets":1},"w2-medium.win":{"fps":12,"n":41,"w":128,"h":128,"cols":7,"per":41,"sheets":1},"w3-large.win":{"fps":12,"n":39,"w":128,"h":128,"cols":7,"per":39,"sheets":1}};

// ---- 47-sprites.js
// Sprite sheet clips for iPhones and Safari: no video decoder, no WebGL. A SpriteClip acts like the slice of
// HTMLVideoElement that Hank and Clips use (play, pause, currentTime, playbackRate, loop, ended, readyState, events),
// so all the timing in 50-hank.js runs unchanged. Sheets are decoded only when a clip is about to play, and the
// least recently used ones are released when the decoded total passes the budget.
const SPRITE_KEEP = new Set(['hank.idle', 'hank.throw', 'hank.win']);
// decoded bytes kept at once (Olly: an iPhone tab blanks or dies well above this); idle, throw and win stay, the rest is decoded to play and released after.
// Olly 2026-11-11: at 60 MB a session released and re-decoded sheets 24 times mid-round, so the budget holds idle + throw + win + every symbol clip + the biggest other Hank clip.
// Olly 2026-11-13: worked out from the sheets now. The fixed 100 MB stopped holding that set when Hank went to 300x534 (it needs 128 MB): 29 sheet releases and re-decodes in 20 Order Up spins.
const sheetBytes = m => m.sheets * m.cols * m.w * Math.ceil(m.per / m.cols) * m.h * 4;
const SPRITE_BUDGET = (() => {
  const e = Object.entries(SPRITE_META), sum = l => l.reduce((a, [, m]) => a + sheetBytes(m), 0);
  const kept = sum(e.filter(([k]) => SPRITE_KEEP.has(k))), syms = sum(e.filter(([k]) => !k.startsWith('hank.')));
  const other = Math.max(0, ...e.filter(([k]) => k.startsWith('hank.') && !SPRITE_KEEP.has(k)).map(([, m]) => sheetBytes(m)));
  return Math.max(100 * 1048576, kept + syms + other + 1048576);
})();
class SpriteClip {
  constructor(key) {
    const m = SPRITE_META[key];
    Object.assign(this, { key, m, n: m.n, fps: m.fps, duration: m.n / m.fps, videoWidth: m.w, videoHeight: m.h, loop: false, paused: true, ended: false, seeking: false, error: null, readyState: 1, dataset: {}, bitmaps: null, used: 0 });
    this._t = 0; this._t0 = 0; this._r = 1; this._ev = {}; this._on = false;
    this.classList = { add: () => { this._on = true; }, remove: () => { this._on = false; }, contains: () => this._on, toggle: (c, f) => { this._on = f === undefined ? !this._on : !!f; } };
  }
  get bytes() { return sheetBytes(this.m); }
  // time stands still until the pictures are decoded, so a clip always opens on its first frame
  _now() { return this.paused || this.ended || !this.bitmaps ? this._t : Math.min(this.duration, this._t + (performance.now() - this._t0) / 1000 * this._r); }
  get currentTime() { return this._now(); }
  set currentTime(x) { this._t = Math.max(0, Math.min(+x || 0, this.duration)); this._t0 = performance.now(); this.ended = false; }
  get playbackRate() { return this._r; }
  set playbackRate(r) { this._t = this._now(); this._t0 = performance.now(); this._r = r; }
  // Hank swaps clips on this, like a video's first painted frame. Without it every swap waited out his 160 ms timer
  // while the new clip's clock ran, so the clip came in two or three frames late (Olly fix 2).
  requestVideoFrameCallback(cb) { this.load().then(() => requestAnimationFrame(t => cb(t, { mediaTime: this._now() }))); return 0; }
  play() {
    if (this.ended) { this._t = 0; this.ended = false; }
    if (this.paused) { this.paused = false; this._t0 = performance.now(); Sprites.playing.add(this); }
    this.used = performance.now(); this.load(); Sprites.kick(); this._emit('playing');
    return Promise.resolve();
  }
  pause() { if (this.paused) return; this._t = this._now(); this.paused = true; Sprites.playing.delete(this); }
  addEventListener(t, f, o) { (this._ev[t] = this._ev[t] || []).push({ f, once: !!(o && o.once) }); }
  removeEventListener(t, f) { if (this._ev[t]) this._ev[t] = this._ev[t].filter(x => x.f !== f); }
  _emit(t) { const l = this._ev[t]; if (!l || !l.length) return; this._ev[t] = l.filter(x => !x.once); l.forEach(x => { try { x.f(); } catch (e) { trace('spriteEventError', String(e)); } }); }
  // decodes every sheet of this clip; resolves when it can draw
  load() {
    if (this.bitmaps) return Promise.resolve(true);
    if (this._loading) return this._loading;
    const urls = Array.from({ length: this.m.sheets }, (_, i) => `assets/sprite/${this.key}.${i}.webp`);
    this._loading = Promise.all(urls.map(p => Sprites.decode(p))).then(bm => {
      this._loading = null;
      if (bm.some(b => !b)) { this.error = { code: 4 }; trace('spriteDecodeFailed', this.key); this._emit('error'); return false; }
      this.bitmaps = bm; this.readyState = 4; Sprites.bytes += this.bytes; this._t0 = performance.now();
      Sprites.trim(this); this._emit('loadeddata'); return true;
    });
    return this._loading;
  }
  release() { if (!this.bitmaps) return; this.bitmaps.forEach(b => { if (b.close) b.close(); }); this.bitmaps = null; this.readyState = 1; Sprites.bytes -= this.bytes; }
  // the frame for the current time into a 2D context; false while nothing is decoded, so the caller keeps its last picture
  drawTo(ctx, w, h) {
    if (!this.bitmaps) return false;
    const m = this.m, i = Math.min(m.n - 1, Math.floor(this._now() * m.fps)), s = Math.floor(i / m.per), j = i % m.per;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(this.bitmaps[s], (j % m.cols) * m.w, Math.floor(j / m.cols) * m.h, m.w, m.h, 0, 0, w, h);
    this.lastFrame = i;
    return true;
  }
}
const Sprites = {
  playing: new Set(), clips: new Set(), bytes: 0, raf: 0, blobs: {},
  make(key) { if (!SPRITE_META[key]) return null; const c = new SpriteClip(key); this.clips.add(c); return c; },
  have(key) { const m = SPRITE_META[key]; return !!m && Array.from({ length: m.sheets }, (_, i) => `assets/sprite/${key}.${i}.webp`).every(p => this.blobs[p]); },
  async decode(p) {
    const blob = this.blobs[p]; if (!blob) return null;
    try { if (window.createImageBitmap) return await createImageBitmap(blob); } catch (e) { trace('spriteBitmapFallback', p); }
    const im = new Image(); im.src = Assets.urls[p];
    try { await im.decode(); return im; } catch (e) { return null; }
  },
  // over budget: release the clips used longest ago, never the one asking, a playing one or Hank's resting pose
  trim(keep) {
    if (this.bytes <= SPRITE_BUDGET) return;
    const old = [...this.clips].filter(c => c.bitmaps && c !== keep && c.paused && !SPRITE_KEEP.has(c.key) && c !== Hank.cur).sort((a, b) => a.used - b.used);
    for (const c of old) { if (this.bytes <= SPRITE_BUDGET) break; c.release(); trace('spriteRelease', c.key); }
  },
  // decoding a big sheet takes a moment: done between rounds, never in the middle of one
  whenIdle(fn) { const go = () => { if (typeof busy !== 'undefined' && busy) setTimeout(go, 250); else fn(); }; go(); },
  // one clock for every playing clip: ends, loops and the ended event, like a video would
  kick() { if (!this.raf) this.raf = requestAnimationFrame(() => this._tick()); },
  _tick() {
    this.raf = 0;
    for (const c of [...this.playing]) {
      if (!c.bitmaps || c._now() < c.duration) continue;
      if (c.loop) { c._t = 0; c._t0 = performance.now(); continue; }
      c._t = c.duration; c.ended = true; c.paused = true; this.playing.delete(c); c._emit('ended');
    }
    if (this.playing.size) this.kick();
  },
};

// ---- 50-hank.js
const NOOP2D = { clearRect() {}, drawImage() {} };
// Chef Hank: one stacked <video> per clip so a swap never shows an empty frame.
const Hank = {
  vids: {}, cur: null, name: 'idle', tok: 0, poseTimer: 0, scratchTimer: 0, resting: false, failed: {}, live: false, cv: null, ctx: null, pv: null, pt: -1,
  async init() {
    if (PACKED || SPRITES) this._startPacked();
    if (!STILLS) await this.attach('idle');
    // packed: an iPhone may only start decoding after the first tap, so a slow idle clip is not a failure. Hank holds his pose until it comes in
    if (!STILLS && !this.vids.idle && (!(PACKED || SPRITES) || this.failed.idle)) { STILLS = true; PACKED = SPRITES = false; document.body.classList.remove('packed'); }
    if (STILLS) { this.pose('idle'); document.body.classList.add('stills'); return; }
    this.pose('idle');
    await this.idle();
  },
  // a clip joins only once it has a decoded frame, so play() can trust whatever is in vids
  attach(c) {
    if (SPRITES) return this._attachSprite(c);
    const url = Assets.hank(c); if (!url || STILLS || this.vids[c]) return Promise.resolve();
    const v = document.createElement('video');
    Object.assign(v, { muted: true, playsInline: true, preload: 'auto', loop: LOOPED.has(c), disablePictureInPicture: true });
    v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.className = 'hankv'; v.dataset.clip = c; v.src = url;
    v.addEventListener('ended', () => this._ended(v));
    $(PACKED ? 'clipHost' : 'hank').appendChild(v);   // packed: the picture comes from the canvas, the video only has to keep decoding
    const ready = Promise.race([new Promise(r => { v.addEventListener('loadeddata', () => { this.vids[c] = v; r(); }, { once: true }); v.addEventListener('error', () => { if (retryDirect(v, `assets/anim/hank.${c}.pack.mp4`)) return; this.failed[c] = true; r(); if (PACKED && c === 'idle' && !this.vids.idle) goStills(); }); }), sleep(6000)]);
    if (PACKED) Unpack.add(v);
    return ready;
  },
  // sprites: the clip counts as present at once; it decodes when it is about to play (idle and the common clips decode now)
  _attachSprite(c) {
    if (STILLS || this.vids[c] || !Sprites.have('hank.' + c)) return Promise.resolve();
    const v = Sprites.make('hank.' + c); v.loop = LOOPED.has(c); v.dataset.clip = c;
    v.addEventListener('ended', () => this._ended(v));
    v.addEventListener('error', () => { this.failed[c] = true; delete this.vids[c]; });
    this.vids[c] = v;
    if (c === 'idle') return Promise.race([v.load(), sleep(6000)]);   // a slow decode is not a failure: idle() already made this clip current, so it paints the moment it is ready; only a decode error drops it
    if (HANK_PREDECODE.has(c)) Sprites.whenIdle(() => v.load());
    return Promise.resolve();
  },
  _ended(v) {
    if (this.cur !== v || v.dataset.clip !== this.name) return;   // a newer clip is already on its way in: this one must not cancel it
    if (!v._loop) { this.idle(); return; }
    try { v.currentTime = v._loop.tail ? Math.max(0, v.duration - v._loop.tail) : 0; } catch (e) { /* not ready yet */ }
    const p = v.play(); if (p) p.catch(() => {});
  },
  pose(c) { const u = Assets.pose(c) || Assets.pose('idle'); if (u) $('hankStill').src = u; $('hank').className = STILLS || ((PACKED || SPRITES) && !this.live) ? 'pose pose-' + c : ''; },
  _startPacked() {
    document.body.classList.add('packed', 'packed-wait');
    const cv = this.cv = el('canvas', ''); cv.id = 'hankPack';   // packed draws through WebGL, sprites through plain 2D; both reuse the packed classes for showing the canvas
    if (SPRITES) { const m = SPRITE_META['hank.idle']; cv.width = m.w; cv.height = m.h; this.ctx = cv.getContext('2d'); }
    else { cv.width = 720; cv.height = 1280; this.unp = Object.assign(Object.create(Unpack), { gl: null, cv, tex: null, up: null, dead: false, direct: true, lastV: null, lastT: -1, vids: [], texW: 0, texH: 0 }); }
    $('hank').insertBefore(cv, $('bubble'));
    const tick = () => { if (STILLS) return; requestAnimationFrame(tick); this._paint(); }; tick();   // stops for good once the game falls back to stills
  },
  // the current clip into the canvas; if there is no new frame the last picture simply stays up, so a swap is never blank
  _paint() {
    const v = this.cur; if (!(PACKED || SPRITES) || !v || v.readyState < 2 || v.seeking) return;
    if (SPRITES) { const f = Math.min(v.n - 1, Math.floor(v.currentTime * v.fps)); if (v === this.pv && f === this.pt) return; if (!v.drawTo(this.ctx, this.cv.width, this.cv.height)) return; this.paints = (this.paints || 0) + 1; this.pv = v; this.pt = f; this.cv.dataset.clip = v.dataset.clip; if (!this.live) { this.live = true; document.body.classList.remove('packed-wait'); $('hank').className = ''; } return; }
    if (v === this.pv && v.currentTime === this.pt) return;
    if (!v._pkOk && !Unpack.draw(v, NOOP2D, 64, 64)) return;   // first frame of a clip is checked off screen, so an undecoded frame never wipes Hank off his own canvas
    if (!this.unp.draw(v, null, this.cv.width, this.cv.height)) return;
    this.paints = (this.paints || 0) + 1;
    this.pv = v; this.pt = v.currentTime; this.cv.dataset.clip = v.dataset.clip;
    if (!this.live) { this.live = true; document.body.classList.remove('packed-wait'); $('hank').className = ''; }
  },
  _rest(on) { this.resting = on; $('hankStage').classList.toggle('resting', on); },
  _planScratch() {
    clearTimeout(this.scratchTimer);
    this.scratchTimer = setTimeout(() => { if (this.resting && !document.hidden) this.play('idle', { rate: 0.8 }); else this._planScratch(); }, SCRATCH_MIN + Math.random() * SCRATCH_SPAN);
  },
  // the resting Hank: the idle clip held on its first frame. The scratch itself plays only when _planScratch says so
  async idle() {
    const v = this.vids.idle;
    if (this.cur === v && v && this.name === 'idle' && !v.paused && !v.ended) return;   // mid-scratch: let him finish
    trace('hank', 'rest');
    this.name = 'idle'; clearTimeout(this.scratchTimer);
    const tok = ++this.tok;
    Object.values(this.vids).forEach(x => { x._loop = null; });
    this._rest(true);
    if (STILLS || !v) { this.pose('idle'); return; }
    v.pause(); v.playbackRate = 1;
    if (PACKED) v._pkOk = false;   // a rewound clip can hand an iPhone an empty first frame again: re-check before it reaches the screen
    if (v.currentTime > 0) { try { v.currentTime = 0; } catch (e) { /* not ready yet */ } }
    if (v.seeking) await this._onFrame(v);
    if (tok !== this.tok) return;
    const old = this.cur; this.cur = v; v.classList.add('on');
    if (old && old !== v) { old.classList.remove('on'); old.pause(); try { old.currentTime = 0; } catch (e) { /* not ready yet */ } }
    this._planScratch();
  },
  // resolves once the new clip is on screen; hold keeps a pose up instead of timing back to idle
  async play(name, { rate: r = 1, hold = false } = {}) {
    trace('hank', name);
    clearTimeout(this.scratchTimer); this._rest(false);
    this.name = name;
    const tok = ++this.tok;
    const v = this.vids[name];
    Object.values(this.vids).forEach(x => { if (x !== v) x._loop = null; });
    if (STILLS || !v) {
      this.pose(name); clearTimeout(this.poseTimer);
      if (!LOOPED.has(name) && !hold) this.poseTimer = setTimeout(() => { if (this.tok === tok) this.idle(); }, 1500 / Math.max(rate(), 1));
      return;
    }
    if (this.cur === v && !v.paused && !v.ended) return;   // already on: let it run instead of restarting it
    v._claimed = true;
    v.playbackRate = Math.min(4, r * turboRate());
    if (PACKED) v._pkOk = false;   // a rewound clip can hand an iPhone an empty first frame again: re-check before it reaches the screen
    if (v.currentTime > 0) try { v.currentTime = 0; } catch (e) { /* not ready yet */ }
    const shown = this._onFrame(v);
    const p = v.play(); if (p) p.catch(() => { v._claimed = false; /* a blocked play: Hank keeps the current clip */ });
    await shown;
    if (tok !== this.tok) return;
    const old = this.cur; this.cur = v;
    v.classList.add('on');
    if (old && old !== v) { old.classList.remove('on'); old.pause(); try { old.currentTime = 0; } catch (e) { /* not ready yet */ } }   // rewound while hidden, so its next swap opens on frame 0
  },
  // the frame that counts is one after the rewind: a callback during the seek would be the stale last frame
  _onFrame(v) {
    const sought = v.seeking ? new Promise(res => v.addEventListener('seeked', res, { once: true })) : Promise.resolve();
    return Promise.race([
      sought.then(() => new Promise(res => { if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(() => res()); else v.addEventListener('playing', () => res(), { once: true }); })),
      sleep(160),
    ]);
  },
  // keeps the clip going until the promise settles, then lets it finish. tail: replay only the last seconds instead of the whole clip
  playUntil(name, until, { rate: r = 1, tail = 0 } = {}) {
    const v = this.vids[name], still = STILLS || !v;
    this.play(name, { rate: r, hold: still });
    const tok = this.tok;
    if (!still) v._loop = { tail };
    until.then(() => { if (!still) v._loop = null; else if (this.tok === tok) this.idle(); });
  },
};
function say(text) { const b = $('bubble'); if (!text) { b.classList.remove('on'); return; } b.textContent = text; b.classList.add('on'); }

// Symbol win clips: one decoder per symbol, painted into as many cell canvases as need it.
const CLIP_PX = 256;   // the size the win clips are encoded at
const HANK_PREDECODE = new Set(['throw', 'win']);   // win plays on every Rush intro, tier win, bag trigger and win over 20x (Olly fix 3)   // sprites: the clip most rounds use is decoded ahead (between rounds); the others decode as they start
const PACKED_CLIP_LIMIT = 9;   // an iPhone runs out of video decoders; past this a symbol wiggles instead
const wig = (t, on) => { t.host.classList.toggle('wiggle', on); if (t.hide && t.hide.classList.contains('sym')) t.hide.classList.toggle('s-wig', on); };   // no clip yet: the symbol itself squashes, nothing drawn around it
const Clips = {
  vids: {}, runs: new Set(), raf: 0,
  attach(k) {
    if (SPRITES) { if (STILLS || this.vids[k] || !Sprites.have(k + '.win')) return; const v = Sprites.make(k + '.win'); this.vids[k] = v; return; }   // decoded when its symbol wins, released when memory runs short
    const url = Assets.anim(k); if (!url || STILLS || this.vids[k]) return;
    const v = document.createElement('video'); Object.assign(v, { muted: true, playsInline: true, preload: 'auto' }); v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.src = url;
    v.addEventListener('loadeddata', () => { this.vids[k] = v; }, { once: true }); $('clipHost').appendChild(v);
    if (PACKED) { this.vids[k] = v; v.addEventListener('error', () => retryDirect(v, `assets/anim/${k}.win.pack.mp4`)); Unpack.add(v); }   // an iPhone may hold a clip at no decoded frame until it is played, so it counts as available from the start
  },
  play(key, targets, r) {
    const v = this.vids[key];
    if (STILLS || !v || (!PACKED && !SPRITES && v.readyState < 2) || (PACKED && [...this.runs].filter(x => x.v).length >= PACKED_CLIP_LIMIT)) { targets.forEach(t => wig(t, true)); const run = { fallback: true, targets }; this.runs.add(run); return wait(800).then(() => this._end(run)); }
    const run = { v, targets, key }; this.runs.add(run);
    if ((PACKED || SPRITES) && v.readyState < 2) targets.forEach(t => wig(t, true));   // still decoding: the symbol reacts right away and the clip takes over at its first frame
    trace('clip', { key, n: targets.length }); v._claimed = true;
    targets.forEach(t => { t.canvas.width = t.canvas.height = CLIP_PX; });
    v.playbackRate = Math.min(4, r * turboRate()); try { v.currentTime = 0; } catch (e) { /* ignore */ }
    const p = v.play(); if (p) p.catch(() => {});
    if (!this.raf) this.raf = requestAnimationFrame(() => this._tick());
    const dur = (v.duration || 2.5) * 1000 / r;   // measured at normal speed: wait() applies turbo itself
    return new Promise(res => { run.res = res; const stop = () => this._end(run); v.addEventListener('ended', stop, { once: true }); run.stop = stop; wait(dur + 200).then(stop); });
  },
  _tick() {
    this.raf = 0; if (!this.runs.size) return;
    for (const run of this.runs) {
      if (run.fallback || run.v.readyState < 2 || run.v.seeking) continue;
      // the still stays up until the clip has a real frame, so a cell is never blank
      if (SPRITES) { const c0 = run.targets[0].canvas; c0._x = c0._x || c0.getContext('2d');
      const f = Math.min(run.v.n - 1, Math.floor(run.v.currentTime * run.v.fps)); if (run.live && f === run.f) continue;   // same picture as last frame: nothing to draw (Olly fix 1)
      if (!run.v.drawTo(c0._x, CLIP_PX, CLIP_PX)) continue; run.f = f;
        if (!run.live) { run.live = true; run.targets.forEach(t => { wig(t, false); if (t.hide) { if (t.hide.classList.contains('prem')) t.hide.classList.add('clipping'); else t.hide.style.visibility = 'hidden'; } t.canvas.classList.add('on'); }); }
        for (const t of run.targets.slice(1)) { const c = t.canvas, x = c._x || (c._x = c.getContext('2d')); x.clearRect(0, 0, CLIP_PX, CLIP_PX); x.drawImage(c0, 0, 0); } continue; }
      if (!run.live) { if (run.v.currentTime <= 0) continue; if (PACKED) { const t0 = run.targets[0], c0 = t0.canvas; c0._x = c0._x || c0.getContext('2d'); if (!Unpack.draw(run.v, c0._x, CLIP_PX, CLIP_PX)) continue; } run.live = true; run.targets.forEach(t => wig(t, false)); run.targets.forEach(t => { if (t.hide) { if (t.hide.classList.contains('prem')) t.hide.classList.add('clipping'); else t.hide.style.visibility = 'hidden'; } t.canvas.classList.add('on'); }); }
      if (PACKED) { const c0 = run.targets[0].canvas; Unpack.draw(run.v, c0._x, CLIP_PX, CLIP_PX); for (const t of run.targets.slice(1)) { const c = t.canvas, x = c._x || (c._x = c.getContext('2d')); x.clearRect(0, 0, CLIP_PX, CLIP_PX); x.drawImage(c0, 0, 0); } continue; }
      for (const t of run.targets) { const c = t.canvas, x = c._x || (c._x = c.getContext('2d')); x.clearRect(0, 0, CLIP_PX, CLIP_PX); x.drawImage(run.v, 0, 0, CLIP_PX, CLIP_PX); } }
    this.raf = requestAnimationFrame(() => this._tick());
  },
  _end(run) {
    if (!this.runs.has(run)) return; this.runs.delete(run);
    if (run.fallback) { run.targets.forEach(t => wig(t, false)); return; }
    if (run.v) { run.v.removeEventListener('ended', run.stop); run.v.pause(); }
    run.targets.forEach(t => { wig(t, false); t.canvas.classList.remove('on'); if (t.hide) { t.hide.style.visibility = ''; t.hide.classList.remove('clipping'); } });
    if (run.res) run.res();
  },
  stopAll() { for (const run of Array.from(this.runs)) this._end(run); },
};

// ---- 60-board.js
// The 5x4 board. Reels, cell effects, sticky baskets and thrown baskets. Draws only what it is told.
// One strip per reel, 20 rows (5% of the strip each). Rows 0-3 are the board at rest. The spin loops through rows 8-19
// (rows 16-19 repeat rows 8-11, so the loop is seamless), so rows 0-7 are never in view while it spins: the result is
// written there out of sight, and the landing runs on from wherever the loop is, through rows 4-7 to rows 0-3.
// No picture ever changes in view and nothing is hidden and shown, which is what flashed and snapped on iPhones.
const STRIP_N = 20, ROW_PCT = 100 / STRIP_N, R = 5, H = 4;
const randSym = () => (Math.random() * 8) | 0;
const LOOP_FROM = -16 * ROW_PCT, LOOP_TO = -8 * ROW_PCT;

class Reel {
  constructor(i) {
    this.i = i; this.el = el('div', 'reel'); this.strip = el('div', 'strip'); this.el.appendChild(this.strip);
    this.items = []; for (let n = 0; n < STRIP_N; n++) { const im = el('img', 'sym'); im.alt = ''; im.draggable = false; this.strip.appendChild(im); this.items.push(im); }
    this.current = [randSym(), randSym(), randSym(), randSym()]; this.anim = null; this.paint(this.current);
  }
  set(n, s) { const im = this.items[n]; if (im._s === s) return; im._s = s; im._fresh = true; im.src = Assets.sym(s); im.classList.toggle('prem', s < PREMIUM); }   // an unchanged picture is not touched, so it needs no new decode
  // waits for pictures that just changed, briefly: a slow phone must not land on half-decoded symbols, and nothing waits forever
  ready() { const fresh = this.items.filter(i => i._fresh); fresh.forEach(i => { i._fresh = false; }); if (!fresh.length || !fresh[0].decode) return Promise.resolve(); return Promise.race([Promise.all(fresh.map(i => i.decode().catch(() => {}))), sleep(250)]); }
  // the loop rows for the next spin, written while the reel rests (all out of view): rows 8-11 and 16-19 show the board as it is now
  // rows 4-7 always repeat rows 12-15 (fixed filler, set once), so any loop position in rows 12-16 has an identical twin 8 rows up
  _prepLoop() { for (let n = 0; n < 4; n++) { this.set(8 + n, this.current[n]); this.set(16 + n, this.current[n]); } }
  paint(syms) {
    this.current = syms.slice(); for (let n = 0; n < 4; n++) this.set(n, syms[n]);
    if (this.items[4]._s === undefined) for (let n = 0; n < 4; n++) { const f = randSym(); this.set(4 + n, f); this.set(12 + n, f); }
    this._prepLoop(); this.strip.style.transform = 'translateY(0)';
  }
  // opens on rows 16-19, which already show the board, so the tap starts the motion with no change of picture
  start() {
    if (this.anim) this.anim.cancel();
    this.strip.style.transform = `translateY(${LOOP_FROM}%)`;
    this.anim = this.strip.animate([{ transform: `translateY(${LOOP_FROM}%)` }, { transform: `translateY(${LOOP_TO}%)` }], { duration: Time.turbo ? 240 : 380, iterations: Infinity, easing: 'linear' });
  }
  crawl() { if (this.anim) this.anim.playbackRate = .45; }
  // the loop's progress through one pass (0 to 1); the top row in view is 16 - 8 * progress
  _progress() { const a = this.anim; if (!a) return null; const p = a.effect.getComputedTiming().progress; return p == null ? 0 : p; }
  // onImpact fires when the strip visually hits the stop line, not when the settle ends
  async stop(final, onImpact) {
    this.current = final.slice();
    for (let n = 0; n < 4; n++) this.set(n, final[n]);   // rows 0-3: never in view while the loop runs
    await this.ready();   // the loop keeps running until the landing pictures are decoded
    const loop = this.anim, pr = loop ? Math.max(.1, loop.playbackRate) : 1;
    // land from the loop's first half (top row 12 to 16), jumping 8 rows up to its identical twin: same picture, and only
    // 4 to 8 rows left to travel, so the landing starts at the speed the reel was already spinning
    // a crawling (teased) reel lands from close by (4 to 5.6 rows left) and gets a longer landing, so it keeps its crawl speed:
    // the 900 ms cap made it leap to twice the crawl speed on the first landing frame, which read as a skip
    const crawling = !!loop && pr < 1, okP = p => crawling ? p >= .3 && p < .5 : p < .5;
    let top = 4.5;
    if (loop) {
      for (let i = 0; i < 90 && !okP(this._progress()); i++) await new Promise(r => requestAnimationFrame(r));
      top = 16 - 8 * this._progress() - 8;
    }
    const loopS = loop ? loop.effect.getTiming().duration / 1000 : .31, v = 8 / loopS * pr, over = 0.144, D = top + over;
    const dur = Math.min(crawling ? 1800 : 900, 1000 * 2 * D / (0.82 * v)) / rate();   // ease-out quad starts at twice its average speed: that start equals the spin speed
    this.strip.style.transform = 'translateY(0)';
    const fx = new KeyframeEffect(this.strip, [
      { transform: `translateY(${(-top * ROW_PCT).toFixed(3)}%)`, easing: 'cubic-bezier(.5,1,.89,1)' },
      { transform: `translateY(${(over * ROW_PCT).toFixed(3)}%)`, offset: .82, easing: 'ease-out' },
      { transform: 'translateY(0)' },
    ], { duration: dur });
    const a = new Animation(fx, document.timeline); a.play();
    if (onImpact) setTimeout(onImpact, dur * .82);
    if (loop) { await a.ready.catch(() => {}); loop.cancel(); }   // the loop stays on screen until the landing has really started: no frozen frame (Olly fix 6 tried and dropped 2026-11-11: measurably rougher crawl landings)
    if (this.anim === loop) this.anim = null;
    await a.finished.catch(() => {});
    this._prepLoop();
  }
  img(row) { return this.items[row]; }
}

const Board = {
  reels: [], cells: [], baskets: new Map(), els: {},
  init() {
    const rs = $('reels'), cs = $('cells');
    for (let r = 0; r < R; r++) { const reel = new Reel(r); rs.appendChild(reel.el); this.reels.push(reel); }
    for (let r = 0; r < R; r++) for (let h = 0; h < H; h++) {
      const c = el('div', 'cell'); c.style.left = (r * 20) + '%'; c.style.top = (h * 25) + '%';
      const cv = el('canvas', 'cv'); c.appendChild(cv); cs.appendChild(c); this.cells[r * H + h] = c; c._cv = cv;
    }
  },
  cell(r, h) { return this.cells[r * H + h]; },
  cellCenter(r, h) { const b = $('board').getBoundingClientRect(); return { x: b.left + (r + .5) * b.width / R, y: b.top + (h + .5) * b.height / H, w: b.width / R, h: b.height / H }; },
  startAll() { this.reels.forEach(x => x.start()); Sfx.spin(); },
  resetFx() { Clips.stopAll(); this.cells.forEach(c => c.classList.remove('hit', 'shade', 'wiggle')); this.reels.forEach(x => x.items.slice(0, 4).forEach(i => i.classList.remove('s-shade', 's-hit', 's-pop', 's-dead', 's-bag', 's-wig'))); this.baskets.forEach(b => b.el.classList.remove('winning', 'dimmed')); $('lines').innerHTML = ''; hideLineLabel(); },
  clearBaskets() { this.baskets.forEach(b => b.el.remove()); this.baskets.clear(); this.syncUnder(); },
  // a basket has no box of its own (the reels spin around it), so the symbol resting under it is hidden instead
  syncUnder() { this.reels.forEach((x, r) => { for (let h = 0; h < H; h++) x.items[h].classList.toggle('under-bk', this.baskets.has(this.key(r, h))); }); },
  key: (r, h) => r + ':' + h,
  makeBasket(r, h, tier, value) {
    const k = this.key(r, h), old = this.baskets.get(k); if (old) old.el.remove();
    const d = el('div', 'bk tier' + tier); d.style.left = (r * 20) + '%'; d.style.top = (h * 25) + '%';
    const im = el('img', 'bkimg'); im.alt = ''; im.draggable = false; im.src = basketSrc(tier); d.appendChild(im);
    const cv = el('canvas', 'cv'); d.appendChild(cv);
    const t = el('div', 'token', '<span></span>'); d.appendChild(t); t.firstChild.textContent = tokenText(value);
    d.dataset.reel = r; d.dataset.row = h; d.dataset.tier = tier; d.dataset.value = value;
    $('baskets').appendChild(d);
    const obj = { el: d, img: im, cv, token: t, tier, value, r, h }; this.baskets.set(k, obj); this.syncUnder(); return obj;
  },
  setToken(b, value) { b.value = value; b.el.dataset.value = value; b.token.firstChild.textContent = tokenText(value); },
  // the server's final word on the board after a spin
  reconcile(list) {
    const seen = new Set(); let mismatch = 0;
    for (const b of list) {
      const k = this.key(b.reel, b.row); seen.add(k); const cur = this.baskets.get(k);
      if (!cur || cur.tier !== b.tier) { mismatch++; this.makeBasket(b.reel, b.row, b.tier, b.value); }
      else if (cur.value !== b.value) { mismatch++; this.setToken(cur, b.value); }
    }
    for (const [k, b] of this.baskets) if (!seen.has(k)) { mismatch++; b.el.remove(); this.baskets.delete(k); }
    this.syncUnder();
    trace('reconcile', { mismatch, n: list.length });
  },
};
function basketSrc(tier) { return (tier === 'L' && Assets.key('w3-large')) || (tier === 'M' && Assets.key('w2-medium')) || Assets.key('w1-fry-basket'); }
function hideLineLabel() { $('lineLabel').classList.remove('on'); }
function lineLabel(html) { const l = $('lineLabel'); l.innerHTML = html; l.classList.add('on'); }

// Particles and thrown baskets live in a page-wide layer so they can cross from Hank to the board.
const FX = {
  ps: [], cv: null, ctx: null, raf: 0, art: {},
  // one canvas for every particle: up to 90 animated divs with glow shadows were the biggest style cost on the busiest frames (Olly fix 5)
  burst(x, y, kind, count) {
    if (RM || this.ps.length > 90) return;
    if (!this.cv) { this.cv = el('canvas', 'fxcv'); $('fly').appendChild(this.cv); this.ctx = this.cv.getContext('2d'); }
    const now = performance.now();
    for (let i = 0; i < count; i++) { const a = Math.random() * Math.PI * 2, d = 30 + Math.random() * 90;
      this.ps.push({ x, y, tx: Math.cos(a) * d, ty: Math.sin(a) * d - 20 + 70, rot: (Math.random() * 500) * Math.PI / 180, t0: now, dur: 420 + Math.random() * 300, kind }); }
    if (!this.raf) this.raf = requestAnimationFrame(() => this._tick());
  },
  _sprite(kind, dpr) {   // each particle drawn once, glow included, then stamped
    const k = kind + dpr; if (this.art[k]) return this.art[k];
    const s = 24 * dpr, c = document.createElement('canvas'); c.width = c.height = s; const x = c.getContext('2d'); x.translate(s / 2, s / 2); x.scale(dpr, dpr);
    if (kind === 'spark') { x.shadowColor = '#ff8a00'; x.shadowBlur = 6; x.rotate(Math.PI / 4); x.fillStyle = '#fff0a0'; x.fillRect(-3.5, -3.5, 7, 7); }
    else { x.beginPath(); x.arc(0, 0, 4.5, 0, Math.PI * 2); x.fillStyle = '#ffb21a'; x.fill(); x.lineWidth = 2; x.strokeStyle = '#180c04'; x.stroke(); }
    return (this.art[k] = c);
  },
  _tick() {
    this.raf = 0; const cv = this.cv, x = this.ctx, dpr = Math.min(3, devicePixelRatio || 1), W = innerWidth, H = innerHeight;
    if (cv.width !== W * dpr || cv.height !== H * dpr) { cv.width = W * dpr; cv.height = H * dpr; }
    x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height);
    const now = performance.now(); this.ps = this.ps.filter(p => now - p.t0 < p.dur);
    for (const p of this.ps) { const t = (now - p.t0) / p.dur, e = 1 - Math.pow(1 - t, 3), img = this._sprite(p.kind, dpr), sc = 1 - .5 * e;
      x.globalAlpha = 1 - t; x.setTransform(dpr * sc, 0, 0, dpr * sc, (p.x + p.tx * e) * dpr, (p.y + p.ty * e) * dpr); x.rotate(p.rot * e); x.drawImage(img, -12, -12, 24, 24); }
    x.globalAlpha = 1;
    if (this.ps.length) this.raf = requestAnimationFrame(() => this._tick()); else x.clearRect(0, 0, cv.width, cv.height);
  },
  shake(strength) { if (RM) return; const b = $('boardFrame'); const k = []; for (let i = 0; i < 10; i++) k.push({ transform: `translate(${(Math.random() - .5) * strength}px,${(Math.random() - .5) * strength}px)` }); k.push({ transform: 'none' }); b.animate(k, { duration: 380 }); },
};

function handPoint() { const r = $('hank').getBoundingClientRect(); return { x: r.left + r.width * .78, y: r.top + r.height * .42 }; }

// one basket through the air, from a point to a cell, resolving when it lands
// bow: 0 flies straight, 1 or -1 bends the flight to that side and sets the spin direction
function throwBasket(from, r, h, tier, bow = 0) {
  const to = Board.cellCenter(r, h);

  const f = el('img', 'flyer'); f.alt = ''; f.src = basketSrc(tier || 'S'); f.style.width = to.w * .95 + 'px';
  f.style.left = '0'; f.style.top = '0'; $('fly').appendChild(f);
  const dur = 380 / Math.max(rate(), .5), steps = 14, frames = [], arc = Math.max(60, Math.abs(to.x - from.x) * .25 + 50);
  for (let i = 0; i <= steps; i++) { const t = i / steps; const x = from.x + (to.x - from.x) * t + Math.sin(t * Math.PI) * bow * to.w * .7, y = from.y + (to.y - from.y) * t - Math.sin(t * Math.PI) * arc;
    frames.push({ transform: `translate(${x - to.w * .475}px,${y - to.w * .475}px) rotate(${t * (bow < 0 ? -720 : 720)}deg) scale(${.7 + .3 * t})` }); }
  const a = f.animate(frames, { duration: dur, easing: 'linear', fill: 'forwards' });
  return a.finished.catch(() => {}).then(() => { f.remove(); return to; });
}

// ---- 70-director.js
// Turns a resolved round from the server into a show, step by step, in order. All pay figures come from round.state.
let GAME = null;   // /game?game=fries5
let Show = null;   // the round on screen: { bet, finalX, tier }

// the server's x-bet figures, shown in dollars. Display only: the money that counts is always round.payout.
const dollars = x => fmtMoney(Math.round(x * Show.bet));
const showsCents = x => dollars(x) !== '$0.00';
// on a tier win the final figure belongs to the count-up: nothing may show it first
const spoils = spin => !!Show.tier && spin.total >= Show.finalX;

const Meter = {
  shown: 0, tok: 0,
  set(text) { this.tok++; fitText($('win'), text, 11); },
  // counts up to the server's running total. x is in multiples of the bet; the box shows dollars.
  to(x) { if (Show.tier && x >= Show.finalX) return;
    const from = this.shown; this.shown = x; const tok = ++this.tok, t0 = performance.now(), dur = 320 / rate();
    const step = () => { if (tok !== this.tok) return; const k = dur ? Math.min(1, (performance.now() - t0) / dur) : 1; fitText($('win'), dollars(k === 1 ? x : from + (x - from) * k), 11); if (k < 1) requestAnimationFrame(step); }; step(); },
  reset() { this.shown = 0; this.set('$0.00'); },
};

function setStage(tier) {
  document.body.className = document.body.className.replace(/theme-\w+/g, '').trim() + ' ' + THEME_OF_TIER[tier];
  const name = BG_OF_TIER[tier];
  document.querySelectorAll('.bg').forEach(b => b.classList.toggle('on', b.dataset.bg === name));
  $('heat').classList.toggle('on', tier > 0);
  trace('bg', name);
}
function rushbar(html) { const b = $('rushbar'); if (html) { b.innerHTML = html; b.classList.add('on'); } else { b.classList.remove('on'); b.innerHTML = ''; } }
function overlay(cls, html) { const o = $('boardOverlay'); o.className = 'on ' + cls; o.innerHTML = html; return o; }
function overlayOff() { const o = $('boardOverlay'); o.className = ''; o.innerHTML = ''; }
// a held moment the player can tap through
const BAG_WORD = ['', 'One', 'Two', 'Three', 'Four', 'Five'];
let tapResolve = null;
function holdOrTap(ms) { return Promise.race([wait(ms), new Promise(r => { tapResolve = r; })]).then(() => { tapResolve = null; }); }
function tapped() { if (tapResolve) tapResolve(); }

async function playReels(spin, isFree) {
  trace('reels', { kind: spin.kind, i: spin.i, bags: spin.bags });
  Board.resetFx();
  if (!isFree) Board.clearBaskets();
  Board.startAll();
  const stopBed = Sfx.spinBed();
  await wait(Time.turbo ? (isFree ? 200 : 330) : (isFree ? 480 : 900));   // normal speed lets the reels run before the first stop; turbo keeps the old pace
  const stagger = () => (Time.turbo ? 80 : isFree ? 220 : 340) * turboRate();   // real milliseconds between stops, whatever the speed setting
  const stops = []; let bagsSoFar = 0, landed = 0, teases = 0, takeover = null;
  for (let r = 0; r < R; r++) {
    const reel = Board.reels[r];
    if (r === R - 1 && isBigOrder(spin)) {
      await Promise.all(stops);
      takeover = await bigOrderTakeover();
    } else if (!isFree && bagsSoFar >= 2 && spin.i !== -1) {   // a bought Lunch or Dinner spin-in (i -1) already paid for its Rush: no tease
      // two Bags showing and reels still to come: Hank holds his breath and the next reel crawls
      await Promise.all(stops);   // the Bag that set this off has to be on the board first
      if (!teases) Hank.play('tease');
      trace('tease', { atReel: r, bags: bagsSoFar });
      say(`${BAG_WORD[bagsSoFar]} Bags. Come on...`); Sfx.tease(teases++);
      reel.el.classList.add('tease'); reel.crawl();
      await wait(600);   // the crawl-speed landing adds the rest of the suspense
      reel.el.classList.remove('tease');
    } else if (r > 0) await wait(stagger());
    const bagRows = []; for (let h = 0; h < H; h++) if (spin.grid[r][h] === 8) bagRows.push(h);
    bagsSoFar += bagRows.length;
    stops.push(reel.stop(spin.grid[r], () => {
      Sfx.reelStop();
      if (r === R - 1) stopBed();
      for (const h of bagRows) {
        landed++; const c = Board.cellCenter(r, h);
        Sfx.bag(landed); FX.burst(c.x, c.y, 'oil', 8); reel.img(h).classList.add('s-pop', 's-bag');
        trace('bagLand', { r, h, n: landed });
      }
    }));
  }
  await Promise.all(stops);
  stopBed();
  Board.reels.forEach(x => x.items.slice(0, 4).forEach(i => i.classList.remove('s-bag')));
  if (teases) { Hank.idle(); say(''); }
  return takeover;
}

const isBigOrder = spin => spin.event === 'BIG_ORDER' || spin.kind === 'max';
function tossClip(spin) { if (isBigOrder(spin)) return 'bigorder'; return spin.toss && spin.toss.thrown >= 2 ? 'multi' : 'throw'; }
const MULTI_LAST_SWING = 2.3;   // seconds into the multi clip where his last throw is finished
const RELEASE = { throw: 1.25, multi: 0.75, bigorder: 2.1 };   // seconds into each clip where the first basket leaves his hands

// Which steps fly together: the two halves of a bounce go at once, and a long throw goes in pairs.
function tossBatches(steps) {
  const batches = []; let air = 0;
  for (let i = 0; i < steps.length;) {
    const n = (air >= 2 || steps.length > 6) && i + 1 < steps.length ? 2 : 1, b = steps.slice(i, i + n);
    batches.push(b); i += n; air = Math.max(0, air - n) + 2 * b.filter(s => s.bounce).length;
  }
  return batches;
}

// takeover: the Big Order's running clip, when this toss belongs to one
async function runToss(spin, takeover) {
  const toss = spin.toss; if (!toss) return;
  const landing = toss.steps.filter(s => !s.bounce).length; if (!landing) return;
  const clip = tossClip(spin), clipRate = clip === 'bigorder' ? 1 : clip === 'multi' ? 0.9 : 1.5, t0 = performance.now();
  trace('toss', { thrown: toss.thrown, steps: toss.steps.length, landing, clip });
  Sfx.tossWarn();
  say(landing >= 2 ? `Hank's Toss! ${landing} baskets!` : "Hank's Toss!");
  if (!takeover) Hank.play(clip, { rate: clipRate });
  await wait(Math.max(0, RELEASE[clip] / clipRate * 1000 - (takeover ? (performance.now() - takeover.t0) * rate() : 0)));
  const air = [];   // baskets bounced back into the air, thrown from their cell instead of from Hank
  const gap = toss.steps.length > 6 ? 95 : 150;
  const batches = tossBatches(toss.steps);
  for (const batch of batches) {
    if (takeover && batch === batches[batches.length - 1]) takeover.release();
    Sfx.whoosh();
    const tos = await Promise.all(batch.map((st, i) => {
      const src = air.pop(), from = src ? Board.cellCenter(src.r, src.h) : handPoint();
      const cur = st.bounce && Board.baskets.get(Board.key(st.reel, st.row));
      return throwBasket(from, st.reel, st.row, st.bounce ? (cur ? cur.tier : 'S') : st.tier, batch.length === 2 ? (i ? -1 : 1) : 0);
    }));
    const landed = [];
    batch.forEach((st, i) => {
      const to = tos[i];
      if (st.bounce) {
        trace('bounce', { r: st.reel, h: st.row });
        const cur = Board.baskets.get(Board.key(st.reel, st.row));
        Sfx.clang(); FX.burst(to.x, to.y, 'spark', 16); FX.shake(5);
        if (cur) { cur.el.classList.remove('landed'); void cur.el.offsetWidth; cur.el.classList.add('landed'); }
        say('Basket Bounce!');
        air.push({ r: st.reel, h: st.row }, { r: st.reel, h: st.row });
        return;
      }
      trace('land', { r: st.reel, h: st.row, tier: st.tier, v: st.value });
      const b = Board.makeBasket(st.reel, st.row, st.tier, st.value);
      b.el.classList.add('landed', 'closed');
      Sfx.splat(); FX.burst(to.x, to.y, st.tier === 'L' ? 'spark' : 'oil', st.tier === 'L' ? 14 : 8);
      landed.push([st, b]);
    });
    await wait(gap);
    for (const [st, b] of landed) {
      b.el.classList.remove('closed'); b.el.classList.add('reveal'); Sfx.ping(st.value);
      trace('reveal', { r: st.reel, h: st.row, v: st.value, text: b.token.textContent });
    }
  }
  await wait(240);
  // the multi throw has a second swing at about 1.9 s: the round waits for it so the player sees the whole throw
  if (clip === 'multi' && !takeover) await wait(Math.max(0, MULTI_LAST_SWING / clipRate * 1000 - (performance.now() - t0) * rate()));
  say('');
}

async function rerollBaskets(spin) {
  if (!spin.rerolled || !spin.rerolled.length) return;
  trace('reroll', { n: spin.rerolled.length });
  Sfx.sizzle();
  const flipping = [];
  for (const rb of spin.rerolled) { const b = Board.baskets.get(Board.key(rb.reel, rb.row)); if (!b) { trace('rerollMiss', rb); continue; }
    b.el.classList.remove('reroll', 'reveal'); void b.el.offsetWidth; b.el.classList.add('reroll'); flipping.push([b, rb]); }
  await wait(160);   // the new value appears at the halfway turn of the coin
  for (const [b, rb] of flipping) { Board.setToken(b, rb.value); trace('rerollSet', { r: rb.reel, h: rb.row, v: rb.value }); }
  await wait(170);
}

function lineSymbolName(w) { if (SYMBOL_NAME[w.symbol]) return SYMBOL_NAME[w.symbol]; const s = GAME.symbols.find(x => x.id === w.symbol); return s ? s.name : 'Symbol'; }
const paysHtml = x => ` pays <em>${dollars(x)}</em>`;
function lineLabelHtml(w, hidePay) { return `<b>Line ${(+w.line) + 1}:</b> ${+w.count} ${esc(lineSymbolName(w))}${hidePay || !showsCents(w.pay) ? '' : paysHtml(w.pay)}`; }
function linesLabelHtml(spin, hidePay) { return `<b>${spin.lines.length} lines</b>${hidePay || !showsCents(spin.pay) ? '' : paysHtml(spin.pay)}`; }
// a line's payout rises off one of its symbols and bursts: small figures for small lines, bigger for big ones (Oz 2026-11-13)
// one number in the air at a time: the next line's number bursts the one still rising, so 25 lines never stack
let floatLive = null;
function burstFloat(f, early) {
  if (!f || f.done) return; f.done = true; if (floatLive === f) floatLive = null;
  const n = f.n, r = n.getBoundingClientRect(), tf = getComputedStyle(n).transform; f.a.cancel();
  if (early) { n.style.transform = tf === 'none' ? 'translate(-50%,-50%)' : tf; n.animate([{ opacity: 1 }, { opacity: 0, transform: n.style.transform + ' scale(1.4)' }], { duration: 110, fill: 'forwards' }).finished.then(() => n.remove(), () => n.remove()); }
  else n.remove();
  FX.burst(r.left + r.width / 2, r.top + r.height / 2, 'spark', f.sparks);
}
function floatPay(w, hidePay) {
  burstFloat(floatLive, true);
  if (hidePay || !showsCents(w.pay)) return;
  const [r, h] = w.cells[Math.floor((w.cells.length - 1) / 2)], p = Board.cellCenter(r, h);
  const k = Math.max(0, Math.min(5, Math.log10(Math.max(0.1, w.pay)) + 1));   // 0.1x .. 10,000x+
  const size = p.h * (0.30 + 0.075 * k), tier = w.pay >= 100 ? 'huge' : w.pay >= 20 ? 'big' : w.pay >= 2 ? 'mid' : 'small';
  const n = el('div', 'lpay lpay-' + tier); n.textContent = dollars(w.pay); n.style.fontSize = size + 'px';
  n.style.left = p.x + 'px'; n.style.top = p.y + 'px'; $('fly').appendChild(n);
  const rise = p.h * 0.6, dur = 950 / Math.max(rate(), .5);   // up for about 0.75 s before it bursts (Oz 2026-11-13)
  const f = { n, sparks: tier === 'huge' ? 18 : tier === 'big' ? 12 : 7 }; floatLive = f;
  f.a = n.animate([
    { transform: 'translate(-50%,-50%) scale(.55)', opacity: 0 },
    { transform: `translate(-50%,calc(-50% - ${rise * .2}px)) scale(1.06)`, opacity: 1, offset: .14 },
    { transform: `translate(-50%,calc(-50% - ${rise}px)) scale(1)`, opacity: 1, offset: .77 },
    { transform: `translate(-50%,calc(-50% - ${rise * 1.1}px)) scale(1.55)`, opacity: 0 },
  ], { duration: dur, easing: 'ease-out', fill: 'forwards' });
  wait(730).then(() => burstFloat(f, true));
}
// one line's symbols pop out a little while their clip plays
function popCells(w) {
  const dur = 560 / Math.max(rate(), .5);
  for (const [r, h] of w.cells) {
    const b = Board.baskets.get(Board.key(r, h)), host = b ? b.el : Board.cell(r, h);
    host.style.zIndex = 4;
    const a = host.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.2)', offset: .3 }, { transform: 'scale(1.1)', offset: .7 }, { transform: 'scale(1)' }], { duration: dur, easing: 'ease-out', composite: 'add' });
    a.finished.then(() => { host.style.zIndex = ''; }, () => { host.style.zIndex = ''; });
    if (!b) { const img = Board.reels[r].img(h); img.classList.remove('s-pop'); void img.offsetWidth; img.classList.add('s-pop'); }
  }
}

async function showWins(spin, isFree) {
  if (!spin.lines.length) return;
  trace('lines', { n: spin.lines.length, pay: spin.pay, total: spin.total });
  const hitCells = new Set();
  for (const w of spin.lines) for (const [r, h] of w.cells) hitCells.add(Board.key(r, h));
  for (let r = 0; r < R; r++) for (let h = 0; h < H; h++) Board.reels[r].img(h).classList.toggle('s-shade', !hitCells.has(Board.key(r, h)));   // dim the losing symbols only: shading whole cells left each winner on a brighter square (Oz)
  Board.baskets.forEach(b => b.el.classList.toggle('dimmed', !hitCells.has(Board.key(b.r, b.h))));
  for (const key of hitCells) { const [r, h] = key.split(':').map(Number), b = Board.baskets.get(key); Board.cell(r, h).classList.add('hit'); if (b) b.el.classList.add('winning'); }
  // lowest paying line first, the biggest last; no lines are drawn, each line's own symbols pop and its pay floats up (Oz 2026-11-13)
  const order = spin.lines.slice().sort((x, y) => x.pay - y.pay || x.base - y.base || x.line - y.line);
  const hidePay = spoils(spin), solo = hidePay && order.length === 1, base = spin.total - spin.pay;
  const big = spin.pay >= 2;
  if (spin.pay < 1) Sfx.winTiny(); else Sfx.winSmall();
  if (spin.pay >= 20) Hank.play('win', { rate: 1.3 });
  const step = Math.max(160, Math.min(spin.pay < 1 ? 300 : 440, 3600 / order.length));
  const clips = []; let run = 0;
  for (const [i, w] of order.entries()) {
    const groups = new Map(), add = (k, t) => { if (!groups.has(k)) groups.set(k, []); groups.get(k).push(t); };
    for (const [r, h] of w.cells) { const c = Board.cell(r, h), b = Board.baskets.get(Board.key(r, h));
      if (b) add(b.tier === 'L' ? 'w3-large' : b.tier === 'M' ? 'w2-medium' : 'w1-fry-basket', { host: b.el, canvas: b.cv, hide: b.img });
      else { Board.reels[r].img(h).classList.add('s-hit'); add(SYM[spin.grid[r][h]], { host: c, canvas: c._cv, hide: Board.reels[r].img(h) }); } }
    groups.forEach((targets, k) => clips.push(Clips.play(k, targets, 1.5)));
    popCells(w); floatPay(w, solo);
    run += w.pay; Meter.to(base + run);
    lineLabel(lineLabelHtml(w, hidePay)); if (i) Sfx.line(); trace('line', { line: w.line, pay: w.pay, mult: w.mult });
    await wait(step);
  }
  Meter.to(spin.total);
  if (order.length > 1) lineLabel(linesLabelHtml(spin, hidePay));
  if (!isFree && !big) { await wait(200); return; }   // pocket change in the base game: the last clips finish under the next press
  const all = Promise.all(clips);
  await (isFree && !big ? Promise.race([all, wait(500)]) : Time.turbo && !big ? Promise.race([all, wait(500)]) : Promise.race([all, wait(1400)]));
  await wait(isFree ? 120 : 200);
  if (isFree) Board.resetFx();
}

async function bagCelebration(spin) {
  const cells = []; for (let r = 0; r < R; r++) for (let h = 0; h < H; h++) if (spin.grid[r][h] === 8) cells.push({ r, h });
  trace('bags', { n: cells.length, tier: spin.tier });
  say(`${cells.length} Bags!`);
  Hank.play('win');
  const targets = cells.map(c => ({ host: Board.cell(c.r, c.h), canvas: Board.cell(c.r, c.h)._cv, hide: Board.reels[c.r].img(c.h) }));
  Sfx.bagTrigger(cells.length); FX.shake(8);
  cells.forEach(c => { const p = Board.cellCenter(c.r, c.h); FX.burst(p.x, p.y, 'spark', 18); });
  await Clips.play('b1-bag', targets, 1.5);
  say('');
}

async function rushIntro(rush) {
  trace('rushIntro', { tier: rush.tier, name: rush.name, spins: rush.spins });
  Board.resetFx(); Board.clearBaskets();
  Auto.stop();
  UI.setRushing(true);
  setStage(rush.tier);
  overlay('intro tier-' + rush.tier, `<div class="ov-kick">Now serving</div><div class="ov-big">${esc(rush.name)}</div><div class="ov-sub">${+rush.spins} spins, baskets stick</div>`);
  Sfx.rush(rush.tier); Hank.play('win', { rate: 1.3 });
  await holdOrTap(1900);
  overlayOff();
}

const paidSpan = () => Show && Show.paidX ? `<span class="paid">Paid <b>${fmtX(Show.paidX)}</b></span>` : '';
async function freeSpin(spin, rush, runningX) {
  rushbar(`<span class="rn">${esc(rush.name)}</span><span>Spin <b>${+spin.spin}</b> of ${+spin.of}</span><span>Total <b>${fmtX(runningX)}</b></span>${paidSpan()}`);
  trace('free', { spin: spin.spin, of: spin.of, tier: spin.tier });
  await playReels(spin, true);
  await rerollBaskets(spin);
  await runToss(spin);
  Board.reconcile(spin.baskets);
  await showWins(spin, true);
  rushbar(`<span class="rn">${esc(rush.name)}</span><span>Spin <b>${+spin.spin}</b> of ${+spin.of}</span><span>Total <b>${fmtX(spin.total)}</b></span>${paidSpan()}`);
  Meter.to(spin.total);
  await wait(spin.lines.length ? 80 : 230);
}

// Hank starts winding up here and keeps throwing until runToss releases him on the last basket
async function bigOrderTakeover() {
  trace('bigOrder');
  let release; const lastThrow = new Promise(r => { release = r; });
  const t0 = performance.now();
  Hank.playUntil('bigorder', lastThrow);
  overlay('takeover', `<div class="ov-big">Hank's Big Order</div><div class="ov-sub">The whole board is Loaded Fries</div>`);
  Sfx.bigOrder(); FX.shake(16);
  await wait(1400);
  overlayOff();
  return { t0, release };
}

async function paidSpin(spin) {
  const takeover = await playReels(spin, false);
  if (spin.kind === 'bait') trace('bait');
  if (spin.kind === 'order') { say('Order Up!'); await wait(350); }
  try { await runToss(spin, takeover); } finally { if (takeover) takeover.release(); }
  Board.reconcile(spin.baskets);
  await showWins(spin, false);
  if (spin.kind === 'bait') await baitMiss(spin);
  if (spin.kind === 'trigger') await bagCelebration(spin);
  if (!spin.lines.length && spin.kind !== 'trigger' && spin.kind !== 'bait') await wait(180);
}

async function baitMiss(spin) {
  for (let r = 0; r < R; r++) for (let h = 0; h < H; h++) if (spin.grid[r][h] === 8) { Board.reels[r].img(h).classList.remove('s-pop'); Board.reels[r].img(h).classList.add('s-dead'); }
  Hank.play('lose'); Sfx.lose(); say('Empty bag. Hank shrugs.');
  overlay('miss', `<div class="ov-big">Empty Bag</div><div class="ov-sub">Pays 0</div>`);
  await holdOrTap(1500);
  overlayOff(); say('');
}

async function lotteryIntro(mode) {
  const label = GAME.modes.find(m => m.name === mode).label;
  trace('lottery', mode);
  Board.resetFx(); Board.clearBaskets();
  say(mode === 'BON' ? 'All or nothing. Here it goes.' : 'Hank hands you a bag...');
  overlay('lotto', `<img class="ov-bag" src="${Assets.sym(8)}" alt=""><div class="ov-big">${esc(label)}</div><div class="ov-sub">What's in the bag?</div>`);
  Sfx.tease();
  await holdOrTap(1200);
  overlayOff(); say('');
}

// Lunch and Dinner buys come with no trigger spin from the server (the Rush is the whole round), so the game shows one:
// k Bags on k different reels and a board with no line win on it. It pays nothing and changes nothing; the Rush that follows is the server's.
const BUY_BAGS = { LUNCH: 3, DINNER: 4 };
function buyTriggerSpin(k) {
  const lines = GAME.lines || [];
  for (let t = 0; ; t++) {
    const grid = [...Array(R)].map(() => [...Array(H)].map(() => (Math.random() * 8) | 0));
    const reels = [0, 1, 2, 3, 4].sort(() => Math.random() - .5).slice(0, k);
    for (const r of reels) grid[r][(Math.random() * H) | 0] = 8;
    const pays = lines.some(L => { const s = grid[0][L[0]]; if (s === 8) return false; let n = 1; while (n < R && grid[n][L[n]] === s) n++; return n >= 3; });
    if (!pays || t > 500) return { kind: 'trigger', i: -1, grid, bags: k, tier: k - 2, lines: [], baskets: [], toss: null, pay: 0, total: 0, rawPay: 0 };
  }
}

async function animateRound(round) {
  const st = round.state, modeDef = GAME.modes.find(m => m.name === round.mode);
  trace('round', { betID: round.betID, mode: round.mode, branch: st.branch, spins: st.spins.length, total: st.total, capped: st.capped, active: round.active });
  Show = { bet: round.amount, finalX: st.total, tier: round.payout > 0 ? tierOf(st.total, st.capped) : null, paidX: modeDef && modeDef.cost >= 100 ? modeDef.cost : 0 };   // a bought Rush shows its ticket next to the running total (Degen Dave: 62% of bought Late Nights pay back less than the ticket)
  if (st.rush) { const u = Assets.bg(BG_OF_TIER[st.rush.tier]); if (u) { const im = new Image(); im.src = u; (animateRound.keep = im).decode().catch(() => {}); } }   // the Rush backdrop decodes while the trigger spin plays, not on the frame it fades in (Olly fix 7)
  // sprites: a rare Hank clip this round will play is decoded now, before anything moves; decoded mid-takeover it froze the screen for 267 ms (Olly fix 4)
  if (SPRITES) { const need = []; if (st.spins.some(isBigOrder)) need.push('bigorder'); if (st.capped) need.push('max');
    const vs = need.map(n => Hank.vids[n]).filter(Boolean); vs.forEach(v => { v.used = performance.now(); });   // marked as just used, or the budget trim releases one while the other decodes
    if (vs.length) await Promise.race([Promise.all(vs.map(v => v.load())), sleep(600)]); }
  setStage(0); rushbar(null); overlayOff(); Meter.reset();
  if (LOTTERY.has(round.mode)) await lotteryIntro(round.mode);
  // a bought Rush still lands its Bags first, like one won in play. Math v9: a Lunch or Order Up buy can be the max win instead
  // (state.branch 'max', one 'max' spin, no Rush); it skips the Bags and plays Hank's Big Order takeover like Bag Or Nothing's max
  if (BUY_BAGS[round.mode] && st.branch !== 'max') await paidSpin(buyTriggerSpin(BUY_BAGS[round.mode]));
  let needIntro = !!st.rush, runningX = 0;
  for (const spin of st.spins) {
    if (spin.kind === 'free') { if (needIntro) { needIntro = false; await rushIntro(st.rush); } await freeSpin(spin, st.rush, runningX); }
    else await paidSpin(spin);
    runningX = spin.total;
  }
  if (st.rush && !needIntro) Sfx.rushEnd();
  return modeDef;
}

function tierOf(x, capped) { if (capped || x >= GAME.maxWin) return { lv: 4, name: 'Bag Secured' }; let t = null; WIN_TIERS.forEach(([min, name], i) => { if (x >= min) t = { lv: i, name }; }); return t; }

// Big win count-up: it starts at the first tier and climbs, upgrading the title each time the count passes the next tier (Oz 2026-11-13).
// Each tier gets its own stretch of counting, so a Family Meal takes longer to land than a Nice Bag. A tap or a slam jumps to the end.
async function showTier(round, tier) {
  trace('tier', { name: tier.name, total: round.state.total, payout: round.payout });
  const total = round.state.total, lv = tier.lv;
  const steps = WIN_TIERS.map(([min, name], i) => ({ lv: i, name, min })).filter(t => t.min <= total && t.lv <= lv);
  if (lv === 4) steps.push({ lv: 4, name: tier.name, min: Math.min(total, GAME.maxWin) });
  if (!steps.length) steps.push({ lv, name: tier.name, min: 0 });
  const segMs = [1300, 1500, 1900, 2300, 3000];   // counting time spent inside each tier
  overlay('tierwin lv' + steps[0].lv, `<div class="ov-big" id="tierName">${esc(steps[0].name)}</div><div class="ov-num" id="tierNum">$0.00</div><div class="ov-sub" id="tierSub"></div>`);
  Sfx.fanfare(steps[0].lv); FX.shake(6 + steps[0].lv * 3);
  const stopBed = Sfx.sizzleBed();
  let closed; const whenClosed = new Promise(r => { closed = r; });
  Hank.playUntil(lv === 4 ? 'max' : 'win', whenClosed, { tail: lv === 4 ? 2 : 0 });
  const num = $('tierNum'), ov = $('boardOverlay');
  // the count runs in x-bet: from 0 to the first tier, then tier to tier, then to the round total
  const marks = steps.map(t => t.min).concat([total]).filter((x, i, a) => i === 0 || x > a[i - 1]);
  const legs = []; let from = 0;
  marks.forEach((to, i) => { if (to > from) legs.push({ from, to, ms: segMs[i === 0 ? 0 : Math.min(4, steps[Math.min(i, steps.length) - 1].lv)] }); from = to; });   // leg i counts inside the tier reached at its start
  let shown = 0, jumped = false;
  const upgrade = i => { const t = steps[i]; shown = i; ov.className = 'on tierwin lv' + t.lv; const n = $('tierName'); n.textContent = t.name; n.classList.remove('up'); void n.offsetWidth; n.classList.add('up'); Sfx.countHit(t.lv); FX.shake(6 + t.lv * 3); trace('tierUp', { name: t.name }); };
  const tap = new Promise(r => { tapResolve = () => { jumped = true; r(); }; });
  const countTo = x => { num.textContent = fmtMoney(Math.round(round.payout * Math.min(1, x / total))); while (shown + 1 < steps.length && x >= steps[shown + 1].min) upgrade(shown + 1); };
  await Promise.race([tap, (async () => {
    for (const L of legs) {
      if (jumped || !num.isConnected) return;
      await new Promise(res => { const t0 = performance.now(), d = L.ms / rate(); let nextTick = t0;
        const step = () => { if (jumped || !num.isConnected) return res(); const now = performance.now(), k = Math.min(1, (now - t0) / d);
          countTo(L.from + (L.to - L.from) * (k * (2 - k)));
          if (now >= nextTick && k < 1) { nextTick = now + 80; Sfx.tick(); }
          if (k < 1) requestAnimationFrame(step); else res(); }; step(); });
    }
  })()]);
  tapResolve = null;
  while (shown + 1 < steps.length) { shown++; }
  const last = steps[steps.length - 1]; ov.className = 'on tierwin lv' + last.lv; $('tierName').textContent = last.name;
  num.textContent = fmtMoney(round.payout); $('tierSub').innerHTML = `${fmtX(total)} your bet${round.state.capped ? ' &middot; Max win reached' : ''}`;
  trace('tierLanded', { text: num.textContent, name: last.name, jumped });
  Sfx.countHit(last.lv); FX.shake(8 + last.lv * 3);
  await holdOrTap(jumped ? 1200 : 1600 + last.lv * 500);
  stopBed(); overlayOff(); closed(); Hank.idle();
}

async function showReceipt(round, modeDef, ms) {
  const st = round.state, best = st.spins.reduce((m, s) => Math.max(m, s.pay), 0);
  const stake = round.amount * modeDef.cost;
  trace('receipt', { betID: round.betID, payout: round.payout, total: st.total, spins: st.spins.length });
  overlay('receipt', `<div class="tk">
    <div class="tk-h">Order #${esc(round.betID)}</div>
    <div class="tk-r"><span>${esc(modeDef.label)}</span><span>${fmtMoney(stake)}</span></div>
    ${st.rush ? `<div class="tk-r"><span>Spins served</span><span>${st.spins.filter(s => s.kind === 'free').length}</span></div>` : ''}
    <div class="tk-r"><span>Best spin</span><span>${fmtX(best)}</span></div>
    <div class="tk-r"><span>Round total</span><span>${fmtX(st.total)}</span></div>
    ${st.capped ? '<div class="tk-max">Max win reached</div>' : ''}
    <div class="tk-t"><span>You won</span><span id="rcpWin">${fmtMoney(round.payout)}</span></div>
    <div class="tk-f">Tap to close</div></div>`);
  await holdOrTap(ms);
  overlayOff();
}

// Round end: settle first, then celebrate, so a reload after this point has nothing left to replay.
// What the server just said stays off the screen until the reveal is over.
async function settleRound(round, modeDef) {
  let settled = null;
  if (round.active) { settled = await endRoundSafely(); trace('endRound', { betID: round.betID }); }
  const st = round.state, tier = Show.tier, isBuy = modeDef.cost >= 100, sawRush = !!st.rush;
  if (!round.preview) UI.noteRound(modeDef, round);
  rushbar(null);
  try { if (tier) await showTier(round, tier); }
  finally {
    Meter.set(round.payout > 0 ? fmtMoney(round.payout) : '$0.00');
    if (settled) UI.setBalance(settled.balance);
  }
  const dead = !tier && isBuy && st.branch !== 'bait' && st.total < modeDef.cost * 0.25;
  if (dead) { trace('deadBuy', { total: st.total }); Hank.play('lose'); Sfx.lose(); say('That one was a dud.'); }
  if (sawRush) await showReceipt(round, modeDef, tier ? 1500 : 3400);
  if (!(dead && !sawRush)) {   // an Order Up dud keeps its line instead of being replaced at once
    const paid = round.payout > 0 && !tier && fmtMoney(round.payout) !== '$0.00', under = paid && round.payout < round.amount * modeDef.cost;
    say(paid ? (under ? `Back ${fmtMoney(round.payout)}` : `Paid ${fmtMoney(round.payout)}`) : '');   // less than the stake is not sold as a win
  }
  setStage(0);
}

// ---- 80-ui.js
// Menus, bet control, rules page, the control bar's panels.
// Autoplay: counts the spins still to run. startRound asks it for the next one when a round ends.
const Auto = {
  left: 0,
  start(n) { this.left = n - 1; UI.setBusy(busy); startRound(); },
  stop() { if (!this.left) return; this.left = 0; UI.setBusy(busy); },
  next() {
    setTimeout(() => {
      if (!this.left || busy) return;
      if (UI.stakeOf(UI.armed || 'BASE') > UI.balance) { this.stop(); return; }
      this.left--; startRound();
    }, Time.turbo ? 150 : 350);
  },
};
const UI = {
  balance: 0, config: null, betI: 0, armed: null, rushing: false,
  setBalance(b) { this.balance = b.amount; const e = $('balance'); fitText(e, fmtMoney(b.amount), 9); e.dataset.amount = b.amount; this.refresh(); },
  bet() { return this.config.betLevels[this.betI]; },
  costOf(mode) { return GAME.modes.find(m => m.name === mode).cost; },
  stakeOf(mode) { return this.bet() * this.costOf(mode); },
  setRushing(on) { this.rushing = on; this.refresh(); },
  setBusy(b) { if (!b) this.rushing = false; const lock = b || Auto.left > 0; document.body.classList.toggle('busy', lock); ['betDown', 'betUp', 'btnBuy', 'btnAdd'].forEach(id => { $(id).disabled = lock; }); $('spin').classList.toggle('active', b); this.refresh(); },
  refresh() {
    if (!this.config || !GAME) return;
    $('bet').textContent = fmtMoney(this.bet());
    const mode = this.armed || 'BASE', def = GAME.modes.find(m => m.name === mode);
    const running = Auto.left > 0, word = this.rushing ? 'Speed Up' : running ? 'Stop' : this.armed ? def.label : 'Spin';
    $('spinT').textContent = word;
    $('spinS').textContent = this.rushing ? '' : running ? String(Auto.left) : fmtMoney(this.stakeOf(mode));
    $('spin').classList.toggle('plain', word === 'Spin');
    $('spin').setAttribute('aria-label', this.rushing ? 'Speed up' : running ? 'Stop autoplay' : 'Spin');
    const ab = $('btnAuto'); ab.classList.toggle('on', running); ab.classList.toggle('count', running); ab.setAttribute('aria-pressed', running); $('autoN').textContent = running ? Auto.left : ''; ab.disabled = busy && !running;
    $('btnBuy').classList.toggle('armed', !!this.armed);
    $('btnBuy').querySelector('span').textContent = this.armed && this.streak ? `Spent ${fmtMoney(this.streak)}` : 'Drive-Thru';   // Degen Dave: show the bill while a stay-on buy runs
    $('btnTurbo').classList.toggle('on', Time.turbo); $('btnTurbo').setAttribute('aria-pressed', Time.turbo);
    if ($('modalBuy').classList.contains('on')) this.renderCards();
  },
  stepBet(d) { const n = this.betI + d; if (n < 0 || n >= this.config.betLevels.length) return; this.betI = n; store.set(BET_KEY, this.bet()); Sfx.click(); this.refresh(); },
  open(id) { $(id).classList.add('on'); },
  closeAll() { document.querySelectorAll('.modal').forEach(m => m.classList.remove('on')); $('confirm').innerHTML = ''; },

  renderCards() {
    const art = { SALT: 's8-salt-shaker', CRISPY: 's1-loaded-fries', ORDER: 'w1-fry-basket', LUNCH: 's2-double-burger', DINNER: 's3-chicken-bucket', MYSTERY: 'b1-bag', BON: 'b1-bag' };
    const r1 = GAME.rush[0], r2 = GAME.rush[1], known = GAME.mathVersion >= 1 && GAME.mathVersion <= 15;   // the odds below hold for math v1 to v9 (v7 kept the v5 lottery odds; v8 moved Bag Or Nothing to 500x; v9 kept v8's card odds, checked against the v9 lookup tables); the API does not send them
    const copy = {
      SALT: 'Stays on until you switch it off. ' + (known ? (GAME.mathVersion >= 13 ? 'A Rush about 1 in 50 spins (Normal: 1 in 272).' : 'A Rush about 1 in 47 spins (Normal: 1 in 266).') : 'Bags land more often.'),
      CRISPY: 'Stays on until you switch it off. ' + (known ? (GAME.mathVersion >= 13 ? 'A Rush about 1 in 25 spins, and your best shot at 5 Bags: the big Late Night Rush.' : 'A Rush about 1 in 22 spins.') : 'Bags land far more often.'),
      ORDER: GAME.mathVersion >= 10 ? 'Stays on until you switch it off. Every spin Hank throws a Large basket, and 1 spin in 20 he throws all 10. They can still miss the lines.' : `Stays on until you switch it off. Every spin gets ${known ? (GAME.mathVersion >= 4 ? 'at least 3 ' : '5 ') : ''}Medium or Large baskets, guaranteed. They can still miss the lines.`,
      LUNCH: `Straight into ${+r1.spins} spins of ${r1.name}.${GAME.mathVersion >= 10 ? ' Most pay small; now and then Hank throws all 10 baskets at once.' : ''}`, DINNER: `Straight into ${r2.spins} spins of ${r2.name}.${GAME.mathVersion >= 10 ? ' Most pay small; now and then Hank throws all 10 baskets at once.' : ''}`,
      MYSTERY: known ? (GAME.mathVersion >= 15 ? '45% an empty bag, 40% Dinner Rush (a richer one: Hank throws more often), 15% Late Night Rush (the wildest in the game: usually modest, now and then huge), 1 in 1,000 the max win spin. One real spin decides.' : GAME.mathVersion >= 13 ? '83% an empty bag, 17% Late Night Rush (the tamer bought one), 1 in 1,000 the max win spin. One real spin decides.' : GAME.mathVersion >= 10 ? '52% an empty bag, 18% Dinner Rush, 30% Late Night Rush, 1 in 250 the max win spin (25,000x in all about 1 in 240). One real spin decides.' : GAME.mathVersion >= 4 ? '19% an empty bag, 48% Dinner Rush, 32% Late Night Rush. One real spin decides.' : GAME.mathVersion >= 3 ? '26% an empty bag, 44% Dinner Rush, 30% Late Night Rush. One real spin decides.' : '30% an empty bag, 42% Dinner Rush, 28% Late Night Rush. One real spin decides.') : 'An empty bag, a Dinner Rush or a Late Night Rush. One real spin decides.',
      BON: known ? (GAME.mathVersion >= 15 ? '70% an empty bag, 30% Late Night Rush (almost always pays more than the bag cost, but spin into one for the big one), 1 in 2,500 the max win spin.' : GAME.mathVersion >= 13 ? '65% an empty bag, 35% Late Night Rush (the tamer bought one: 9 in 10 pay more than the bag cost, but spin into one for the big one), 1 in 2,500 the max win spin.' : GAME.mathVersion >= 12 ? '57% an empty bag, 42% a Late Night Rush that pays often, 1 in 1,000 the max win spin.' : GAME.mathVersion >= 11 ? '57% an empty bag, 41% Late Night Rush, 2% the max win spin (25,000x in all about 1 in 49).' : GAME.mathVersion >= 9 ? '62% an empty bag, 38% Late Night Rush, 1 in 500 the max win spin (25,000x in all about 1 in 452).' : GAME.mathVersion >= 8 ? '62% an empty bag, 38% Late Night Rush, 1 in 500 the 25,000x max win.' : GAME.mathVersion >= 4 ? '57% an empty bag, 41% Late Night Rush, 2% the 25,000x max win.' : '85% an empty bag, 12% Late Night Rush, 3% the 25,000x max win.') : 'An empty bag, a Late Night Rush, or the max win spin.',
    };
    this._copy = copy; this._art = art;
    $('buyNote').textContent = `Prices at your ${fmtMoney(this.bet())} bet`;
    // the drive-thru menu board (Oz 2026-11-13): three sections like a real fast-food sign, one row per buy with its picture, a one-line pitch and a big price.
    // Sides stay on spin after spin (a switch); Combos go straight into a Rush; the Secret Menu is one spin that decides. The full copy shows in the confirm popup and on hover.
    const v15 = known && GAME.mathVersion >= 15, v13 = known && GAME.mathVersion >= 13;
    const pitch = { SALT: v13 ? 'More Bags every spin. A Rush about 1 in 50' : 'More Bags every spin', CRISPY: v13 ? 'Even more Bags. Best shot at Late Night' : 'Even more Bags every spin',
      ORDER: GAME.mathVersion >= 10 ? 'Hank throws a Large basket every spin' : 'Baskets on every spin', LUNCH: `${+r1.spins} spins of ${r1.name}`, DINNER: `${+r2.spins} spins of ${r2.name}`,
      MYSTERY: v15 ? '45% empty, 40% Dinner, 15% Late Night' : 'One spin picks your Rush', BON: v15 ? '70% empty, 30% Late Night, 1 in 2,500 max' : 'Late Night Rush or nothing' };
    const SECTIONS = [['sides', 'Sides', 'Stays on every spin', ['SALT', 'CRISPY', 'ORDER']], ['combos', 'Combos', 'Straight into the Rush', ['LUNCH', 'DINNER']], ['secret', 'Secret Menu', 'One spin decides', ['MYSTERY', 'BON']]];
    const row = m => { const def = GAME.modes.find(x => x.name === m); if (!def) return ''; const stake = this.stakeOf(m), broke = stake > this.balance, on = this.armed === m;
      return `<button class="card${on ? ' armed' : ''}${m === 'BON' ? ' hot' : ''}" data-mode="${m}"${broke && !on ? ' data-broke="1"' : ''} title="${esc(copy[m])}">
        <img src="${Assets.key(art[m])}" alt=""><span class="cm"><span class="ct">${esc(def.label)}</span><span class="cd">${esc(pitch[m])}</span>
        ${on ? '<span class="cf">On. Tap to switch off</span>' : broke ? '<span class="cf broke">Not enough play money</span>' : ''}</span>
        <span class="cp"><span class="cs">${fmtMoney(stake)}</span><b>${fmtPrice(def.cost)}</b>${ARMABLE.has(m) ? `<span class="tg${on ? ' on' : ''}" aria-hidden="true"><i></i></span>` : ''}</span>
      </button>`; };
    $('cards').innerHTML = SECTIONS.map(([k, name, sub, ms]) => `<section class="dts dts-${k}"><h3><span>${name}</span><small>${sub}</small></h3>${ms.filter(m => BUY_ORDER.includes(m)).map(row).join('')}</section>`).join('');
    document.querySelectorAll('.card').forEach(c => { c.onclick = () => this.pickCard(c.dataset.mode, c.dataset.broke); });
  },
  pickCard(mode, broke) {
    if (broke) { Sfx.broke(); this.closeAll(); this.showDeposit(); return; }
    // Salt and Crispy switch on with one tap; Order Up (200x) confirms first, then stays on too. Tapping an armed card switches it off.
    if (ARMABLE.has(mode) && (mode !== 'ORDER' || this.armed === mode)) { this.armed = this.armed === mode ? null : mode; this.streak = 0; if (this.armed) Sfx.buyConfirm(); else Sfx.buyCancel(); this.closeAll(); this.refresh(); return; }
    Sfx.click();
    document.querySelectorAll('.card').forEach(x => x.classList.toggle('picked', x.dataset.mode === mode));   // the card the confirm popup is about
    // a popup over the menu, like Mango Surf's: the buy, what it does, a bet changer and the price, one big button
    const def = GAME.modes.find(x => x.name === mode), c = $('confirm');
    c.innerHTML = `<div class="cfwin cf-${mode.toLowerCase()}" role="dialog" aria-modal="true" aria-label="Confirm ${esc(def.label)}">
      <img class="cfart" src="${Assets.key(this._art[mode])}" alt=""><div class="cft">${esc(def.label)}</div><div class="cfd">${esc(this._copy[mode])}</div>
      <div class="cfrow"><span class="k">Bet</span><span class="betrow"><button class="rnd" id="cfDown" aria-label="Lower bet">-</button><b id="cfBet"></b><button class="rnd" id="cfUp" aria-label="Raise bet">+</button></span></div>
      <div class="cfrow"><span class="k">Price</span><b class="cfp" id="cfPrice"></b></div>
      <button class="chunk go" id="confYes">Order It</button><button class="chunk" id="confNo">Never Mind</button></div>`;
    const paint = () => { const stake = this.stakeOf(mode), broke = stake > this.balance; $('cfBet').textContent = fmtMoney(this.bet()); $('cfPrice').textContent = fmtMoney(stake);
      $('cfDown').disabled = this.betI <= 0; $('cfUp').disabled = this.betI >= this.config.betLevels.length - 1; $('confYes').disabled = broke; $('confYes').textContent = broke ? 'Not enough play money' : 'Order It'; };
    paint();
    $('cfDown').onclick = () => { this.stepBet(-1); this.renderCards(); paint(); };
    $('cfUp').onclick = () => { this.stepBet(1); this.renderCards(); paint(); };
    const close = () => { Sfx.buyCancel(); c.innerHTML = ''; document.querySelectorAll('.card.picked').forEach(x => x.classList.remove('picked')); };
    $('confNo').onclick = close; c.onclick = e => { if (e.target === c) close(); };
    $('confYes').onclick = () => { if (this.stakeOf(mode) > this.balance) return; Sfx.buyConfirm(); if (ARMABLE.has(mode)) { this.armed = mode; this.streak = 0; } this.closeAll(); this.refresh(); startRound(mode); };
  },
  showDeposit() {
    const suggest = this.balance <= 0 ? 1000 * API : null;   // an empty wallet gets a pointer to the amount that plays best
    $('deposits').innerHTML = this.config.deposits.map(a => `<button class="chunk go dep${+a === suggest ? ' sug' : ''}" data-a="${+a}">${fmtMoney(+a)}${+a === suggest ? '<small>Suggested</small>' : ''}</button>`).join('');
    this.bindDeposits('#deposits .dep');
    this.showAddBalance();
    this.open('modalAdd');
  },
  showAddBalance() { $('addBal').textContent = 'Balance: ' + fmtMoney(this.balance); },
  bindDeposits(sel) {
    // Every tap is taken at once (a press flash, never a locked button) and queued; the queue sends one deposit at a time across
    // both panels, so a late reply can never put an old balance on screen. Oz: a slow reply used to freeze the box for seconds.
    document.querySelectorAll(sel).forEach(b => { b.onclick = () => {
      Sfx.click(); b.classList.remove('tapped'); void b.offsetWidth; b.classList.add('tapped');
      (this.depQ = this.depQ || []).push(+b.dataset.a);
      if (!this.depBusy) this.drainDeposits();
    }; });
  },
  async drainDeposits() {
    this.depBusy = true;
    while (this.depQ && this.depQ.length) {
      const a = this.depQ.shift();
      try { const r = await Server.deposit(a); this.setBalance(r.balance); Sfx.deposit(); this.showAddBalance(); trace('deposit', a); document.querySelectorAll('#deposits .dep.sug').forEach(x => { x.classList.remove('sug'); const s = x.querySelector('small'); if (s) s.remove(); }); }   // the panel stays open so money can be added again and again
      catch (e) { Sfx.broke(); toast(errText(e)); this.depQ.length = 0; }   // a refusal (limit reached, network) drops the taps still waiting
    }
    this.depBusy = false;
  },
  noteRound(modeDef, round) { this.last = `${modeDef.label}: ${fmtMoney(round.amount * modeDef.cost)} in, ${fmtMoney(round.payout)} back.`; },
  openMenu() {
    if (this.config) {
      const locked = document.body.classList.contains('busy');
      $('menuDeps').innerHTML = this.config.deposits.map(a => `<button class="chunk mdep" data-a="${+a}"${locked ? ' disabled' : ''}>+${fmtMoney(+a)}</button>`).join('');
      this.bindDeposits('#menuDeps .mdep');
    }
    $('menuSid').textContent = 'Session ' + Server.sid;
    $('menuLast').textContent = this.last || 'Pick a bet and spin.';
    this.open('modalMenu');
  },
  syncSettings() {
    const on = !Sfx.muted, t = $('setSfx');
    t.classList.toggle('on', on); t.setAttribute('aria-pressed', on); $('setSfxW').textContent = on ? 'ON' : 'OFF';
    $('setVol').value = Math.round(Sfx.vol * 100);
    if (!$('setMus')) {   // the Music switch sits right under Sound effects; made here so the page markup stays as it is
      const row = el('div', 'st-row st-mus', '<span class="st-l ic-music">Music</span><button id="setMus" class="st-tog" aria-label="Music" aria-pressed="false"><span id="setMusW">OFF</span></button>');
      $('setSfx').closest('.st-row').after(row);
      $('setMus').onclick = () => { Sfx.init(); Sfx.setMusic(!Sfx.musicOn); UI.syncSettings(); Sfx.click(); };
    }
    const mu = Sfx.musicOn, mt = $('setMus');
    mt.classList.toggle('on', mu); mt.setAttribute('aria-pressed', mu); $('setMusW').textContent = mu ? 'ON' : 'OFF';
    document.querySelectorAll('.st-seg button').forEach(b => b.classList.toggle('on', (b.dataset.turbo === '1') === Time.turbo));
  },
  async openHistory() {
    const box = $('hist'); box.innerHTML = '<p>Loading...</p>'; this.closeAll(); this.open('modalHist');
    let d; try { d = await Server.history(); } catch (e) { box.innerHTML = `<p>${esc(errText(e))}</p>`; return; }
    const t = d.totals || {}, rows = d.history || [], usd = v => { const n = +v || 0; return (n < 0 ? '-$' : '$') + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
    const rtp = t.wagered ? (t.won / t.wagered * 100).toFixed(2) + '%' : '-', count = v => (+v || 0).toLocaleString('en-US');
    const label = r => { if (r.type === 'deposit') return 'Loaded money'; const m = GAME.modes.find(x => x.name === r.mode); return esc(m ? m.label : r.mode); };
    const when = v => { const x = new Date(typeof v === 'number' && v < 1e11 ? v * 1000 : v); return isNaN(x) ? '' : x.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }); };
    const kv = [['Loaded', usd(t.deposited)], ['Wagered', usd(t.wagered)], ['Won', usd(t.won)], ['Net', usd(t.net)], ['Your RTP', rtp], ['Rounds', count(t.rounds)], ['Best win', count(t.best) + 'x']];
    box.innerHTML = `<p>Every round is decided on the game server and logged under this browser's session. Your own RTP swings a lot over a few hundred spins.</p>
      <table><tbody>${kv.map(([k, v]) => `<tr><td>${k}</td><td></td><td>${v}</td></tr>`).join('')}</tbody></table>
      <h3>Latest ${rows.length}</h3>
      ${rows.length ? `<div class="tw"><table><thead><tr><th>When</th><th>What</th><th>Cost</th><th>Win</th><th>x bet</th><th>Balance</th></tr></thead><tbody>${rows.map(r => { const dep = r.type === 'deposit'; return `<tr><td>${esc(when(r.t))}</td><td>${label(r)}</td><td>${dep ? '+' + usd(r.amount) : usd(r.cost)}</td><td>${dep ? '' : usd(r.win)}</td><td>${dep ? '' : count(r.mult) + 'x'}</td><td>${usd(r.bal)}</td></tr>`; }).join('')}</tbody></table></div>` : '<p>No rounds yet.</p>'}`;
  },

  renderRules() {
    const G = GAME;
    const sym = (id, n) => `<img src="${n}" alt="" loading="lazy">`;
    const payRows = G.pays.map((p, i) => `<tr><td class="s">${sym(i, Assets.sym(i))}<span>${esc(SYMBOL_NAME[i] || G.symbols[i].name)}</span></td><td>${fmtPlain(p[0])}x</td><td>${fmtPlain(p[1])}x</td><td>${fmtPlain(p[2])}x</td></tr>`).join('');
    const tierWord = { S: 'Small', M: 'Medium', L: 'Large' };
    const tierRows = Object.entries(G.tiers).map(([t, vals]) => `<tr><td class="s"><span>${tierWord[t]}</span></td><td class="vals">${vals.map(v => `<i class="mt t${esc(t)}">${+v === 1 ? 'Wild' : 'x' + (+v)}</i>`).join('')}</td></tr>`).join('');
    const rushRows = G.rush.map(x => `<tr><td class="s"><span>${esc(x.name)}</span></td><td>${+x.bags}</td><td>${+x.spins}</td></tr>`).join('');
    const modeRows = G.modes.map(m => `<tr><td class="s"><span>${esc(m.label)}</span></td><td>${fmtPrice(m.cost)}</td><td>${m.rtp == null ? 'not listed' : (m.rtp * 100).toFixed(2) + '%'}</td><td>${fmtPlain(m.maxWin)}x</td></tr>`).join('');
    const lineMaps = G.lines.map((l, i) => `<div class="lm"><b>${i + 1}</b><div class="lg">${Array.from({ length: G.reels * G.rows }, (_, n) => { const r = n % G.reels, h = (n / G.reels) | 0; return `<u${l[r] === h ? ' class="x"' : ''}></u>`; }).join('')}</div></div>`).join('');
    $('rules').innerHTML = `
      <div class="funbanner">Fun Mode. Everything here is play money. It costs nothing and can never be cashed out.</div>
      <h3>The short version</h3>
      <p>Line up 3 or more of the same food from the left reel on any of the ${G.lines.length} lines. All wins below are multiples of your bet. Biggest possible win: <b>${fmtPlain(G.maxWin)}x</b>, and the round stops the moment it hits.</p>
      <h3>Pay table</h3>
      <div class="tw"><table><thead><tr><th>Symbol</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody>${payRows}
      <tr><td class="s"><img src="${Assets.key('w1-fry-basket')}" alt=""><span>5 Fry Baskets on a line</span></td><td></td><td></td><td>${fmtPlain(G.wild5)}x</td></tr></tbody></table></div>
      <h3>Chef Hank's Toss</h3>
      <p>${G.mathVersion >= 14 ? 'Hank is in the action about 1 spin in 10. Now and then he throws Fry Baskets at the board, sometimes a whole armful; on other spins he just flicks one plain basket on.' : 'Now and then Hank throws Fry Baskets at the board.'} A basket stands in for any food. When a basket lands, its token shows what it is worth. A line win is multiplied by the <b>sum of the baskets inside that win</b>: the cells from the left reel up to the last one that matches. A basket after the line has stopped matching does not count. A plain Wild basket counts as 1, and a win with no basket is multiplied by 1.</p>
      <p>Baskets at the start of a line count as the food they lead into. 3 or 4 baskets that start a line and run into a Bag pay as Loaded Fries, and 5 baskets pay the 5 Fry Baskets win. A Bag ends a line. Each line pays one win, and the wins of all lines add up.</p>
      <div class="tw"><table><thead><tr><th>Basket</th><th>What the token can show</th></tr></thead><tbody>${tierRows}</tbody></table></div>
      <p><b>Basket Bounce:</b> if a basket lands on another basket, it splits in two and both land again, until every basket has its own cell.</p>
      <h3>The Bag and The Rush</h3>
      <p>Land 3 or more Bags in one spin, at most one per reel, and you go to The Rush. In a Rush, baskets stick where they land for every spin and show a new value each spin. No Bags land during a Rush, so a Rush is never retriggered: its number of spins is fixed when it starts.</p>
      <div class="tw"><table><thead><tr><th>Rush</th><th>Bags</th><th>Spins</th></tr></thead><tbody>${rushRows}</tbody></table></div>
      <h3>Hank's Big Order</h3>
      <p>${G.mathVersion >= 13 ? "Very rarely, the whole board turns to Loaded Fries, Hank throws everything he has and the round pays the max win. It can come on a normal spin (Extra Salt and Extra Crispy included), about 1 in 20,000,000, and on an Order Up buy or a Lunch Rush buy, about 1 in 10,000,000 each. On a Lunch Rush buy it comes instead of the Rush. Bag Or Nothing's max win spin is this same Big Order. A Late Night Rush you spin into (5 Bags on a spin) is the big one: it pays far more than the Late Night Rush in Bag Or Nothing or Mystery Bag, and it is the likeliest way to reach the max win, though it can still pay small." : G.mathVersion >= 9 ? "Very rarely, the whole board turns to Loaded Fries, Hank throws everything he has and the round pays the max win. It can come on a normal spin (Extra Salt and Extra Crispy included), about 1 in 10,000,000, and on an Order Up buy or a Lunch Rush buy, about 1 in 5,000,000 each. On a Lunch Rush buy it comes instead of the Rush. Bag Or Nothing's max win spin is this same Big Order." : 'Very rarely on a normal spin, the whole board turns to Loaded Fries, Hank throws everything he has and the round pays the max win.'}</p>
      <h3>The Drive-Thru</h3>
      <p>Prices are multiples of your bet. Extra Salt, Extra Crispy and Order Up stay on, and charge their price on every spin, until you switch them off. Bag Or Nothing and Mystery Bag each play one real spin: it might be an empty bag that pays nothing.${GAME.mathVersion >= 6 ? " Their Bags land in order from reel 1: Bag Or Nothing needs all 5 for Late Night Rush, and Mystery Bag needs 4 for Dinner Rush or 5 for Late Night Rush. An empty bag stops at 2 Bags, on reels 1 and 2." : ""}</p>
      <div class="tw"><table><thead><tr><th>Mode</th><th>Price</th><th>RTP</th><th>Max win</th></tr></thead><tbody>${modeRows}</tbody></table></div>
      <p class="small">RTP is the long-run share of bets the game returns, as stated by the server. Any single session can be far above or below it.</p>
      <h3>Win names</h3>
      <div class="tw"><table><tbody>${WIN_TIERS.map(([m, n]) => `<tr><td class="s"><span>${n}</span></td><td>${fmtPlain(m)}x or more</td></tr>`).join('')}<tr><td class="s"><span>Bag Secured</span></td><td>${fmtPlain(G.maxWin)}x, the max win</td></tr></tbody></table></div>
      <h3>The ${G.lines.length} lines</h3>
      <div class="lines">${lineMaps}</div>
      <h3>Good to know</h3>
      <p>Press Spin while a round is playing to speed it up. If you reload in the middle of a round, it picks up where it left off. Every result comes from the game server: this page only shows it.</p>
      <div class="credits"><img src="${Assets.url('assets/logo/hooligans.webp') || ''}" alt="Hooligans Studios"><div>A Hooligans Studios game.<br>Math version ${esc(G.mathVersion)}. Display type is Greasy Hank, drawn for this game by Hooligans Studios; small type is Fry Shack, our cut of Bagel Fat One under the SIL Open Font License (see assets/fonts).</div></div>`;
  },
};

$('betDown').onclick = () => UI.stepBet(-1);
$('betUp').onclick = () => UI.stepBet(1);
$('btnBuy').onclick = () => { if (document.body.classList.contains('busy')) return; Sfx.click(); UI.renderCards(); UI.open('modalBuy'); };
$('btnAdd').onclick = () => { Sfx.click(); UI.showDeposit(); };
$('btnRules').onclick = () => { Sfx.click(); UI.renderRules(); UI.open('modalRules'); };
$('btnTurbo').onclick = () => { Sfx.click(); Time.turbo = !Time.turbo; store.set(TURBO_KEY, Time.turbo ? '1' : '0'); UI.refresh(); };
$('btnMenu').onclick = () => { Sfx.init(); Sfx.click(); UI.openMenu(); };
$('btnHistory').onclick = () => { Sfx.click(); UI.openHistory(); };
$('btnSettings').onclick = () => { Sfx.init(); Sfx.click(); UI.syncSettings(); UI.open('modalSet'); };
$('setSfx').onclick = () => { Sfx.init(); Sfx.setMuted(!Sfx.muted); UI.syncSettings(); Sfx.click(); };
$('setVol').oninput = e => { Sfx.init(); Sfx.setVolume(+e.target.value); };
$('setVol').onchange = () => Sfx.click();
document.querySelectorAll('.st-seg button').forEach(b => { b.onclick = () => { Sfx.click(); Time.turbo = b.dataset.turbo === '1'; store.set(TURBO_KEY, Time.turbo ? '1' : '0'); UI.syncSettings(); UI.refresh(); }; });
$('btnAuto').onclick = () => {
  Sfx.init(); Sfx.click();
  if (Auto.left > 0) { Auto.stop(); return; }
  if (!UI.config || busy) return;
  $('autoCost').textContent = fmtMoney(UI.stakeOf(UI.armed || 'BASE')); UI.open('modalAuto');
};
document.querySelectorAll('#autoPick button').forEach(b => { b.onclick = () => { Sfx.buyConfirm(); UI.closeAll(); Auto.start(+b.dataset.n); }; });
document.querySelectorAll('[data-close]').forEach(b => { b.onclick = () => { Sfx.click(); UI.closeAll(); }; });
document.querySelectorAll('.modal').forEach(m => { m.addEventListener('click', e => { if (e.target === m) UI.closeAll(); }); });
$('boardOverlay').addEventListener('click', tapped);

// ---- 85-preview.js
// A real Bag Or Nothing max-win round, drawn by the game engine and stored here. Playing it asks the server for nothing and moves no money.
const PREVIEW_MAX = {"betID":"PREVIEW","mode":"BON","active":false,"preview":true,"state":{"game":"fries5","mode":"BON","branch":"max","rush":null,"event":null,"total":33333,"capped":true,"spins":[{"kind":"max","grid":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"bags":0,"toss":{"thrown":10,"steps":[{"reel":2,"row":1,"tier":"L","value":50},{"reel":1,"row":1,"tier":"L","value":100},{"reel":3,"row":2,"tier":"L","value":50},{"reel":1,"row":2,"tier":"L","value":75},{"reel":1,"row":2,"bounce":true},{"reel":2,"row":2,"tier":"L","value":75},{"reel":3,"row":1,"tier":"L","value":100},{"reel":4,"row":1,"tier":"L","value":25},{"reel":0,"row":2,"tier":"L","value":75},{"reel":1,"row":3,"tier":"L","value":25},{"reel":3,"row":2,"bounce":true},{"reel":2,"row":3,"tier":"L","value":75}]},"baskets":[{"reel":0,"row":2,"tier":"L","value":75},{"reel":1,"row":1,"tier":"L","value":100},{"reel":1,"row":2,"tier":"L","value":75},{"reel":1,"row":3,"tier":"L","value":25},{"reel":2,"row":1,"tier":"L","value":50},{"reel":2,"row":2,"tier":"L","value":75},{"reel":2,"row":3,"tier":"L","value":75},{"reel":3,"row":1,"tier":"L","value":100},{"reel":3,"row":2,"tier":"L","value":50},{"reel":4,"row":1,"tier":"L","value":25}],"lines":[{"line":0,"symbol":0,"count":5,"pay":1925,"base":7,"mult":275,"cells":[[0,1],[1,1],[2,1],[3,1],[4,1]]},{"line":1,"symbol":0,"count":5,"pay":1925,"base":7,"mult":275,"cells":[[0,2],[1,2],[2,2],[3,2],[4,2]]},{"line":2,"symbol":0,"count":5,"pay":7,"base":7,"mult":1,"cells":[[0,0],[1,0],[2,0],[3,0],[4,0]]},{"line":3,"symbol":0,"count":5,"pay":700,"base":7,"mult":100,"cells":[[0,3],[1,3],[2,3],[3,3],[4,3]]},{"line":4,"symbol":0,"count":5,"pay":1925,"base":7,"mult":275,"cells":[[0,0],[1,1],[2,2],[3,1],[4,0]]},{"line":5,"symbol":0,"count":5,"pay":1225,"base":7,"mult":175,"cells":[[0,3],[1,2],[2,1],[3,2],[4,3]]},{"line":6,"symbol":0,"count":5,"pay":175,"base":7,"mult":25,"cells":[[0,1],[1,0],[2,0],[3,0],[4,1]]},{"line":7,"symbol":0,"count":5,"pay":1225,"base":7,"mult":175,"cells":[[0,2],[1,3],[2,3],[3,3],[4,2]]},{"line":8,"symbol":0,"count":5,"pay":1575,"base":7,"mult":225,"cells":[[0,1],[1,2],[2,3],[3,2],[4,1]]},{"line":9,"symbol":0,"count":5,"pay":1925,"base":7,"mult":275,"cells":[[0,2],[1,1],[2,0],[3,1],[4,2]]},{"line":10,"symbol":0,"count":5,"pay":1750,"base":7,"mult":250,"cells":[[0,0],[1,1],[2,1],[3,1],[4,0]]},{"line":11,"symbol":0,"count":5,"pay":1400,"base":7,"mult":200,"cells":[[0,3],[1,2],[2,2],[3,2],[4,3]]},{"line":12,"symbol":0,"count":5,"pay":1575,"base":7,"mult":225,"cells":[[0,1],[1,1],[2,0],[3,1],[4,1]]},{"line":13,"symbol":0,"count":5,"pay":1925,"base":7,"mult":275,"cells":[[0,2],[1,2],[2,3],[3,2],[4,2]]},{"line":14,"symbol":0,"count":5,"pay":350,"base":7,"mult":50,"cells":[[0,0],[1,0],[2,1],[3,0],[4,0]]},{"line":15,"symbol":0,"count":5,"pay":700,"base":7,"mult":100,"cells":[[0,3],[1,3],[2,2],[3,3],[4,3]]},{"line":16,"symbol":0,"count":5,"pay":2100,"base":7,"mult":300,"cells":[[0,1],[1,1],[2,2],[3,1],[4,1]]},{"line":17,"symbol":0,"count":5,"pay":1750,"base":7,"mult":250,"cells":[[0,2],[1,2],[2,1],[3,2],[4,2]]},{"line":18,"symbol":0,"count":5,"pay":1400,"base":7,"mult":200,"cells":[[0,0],[1,1],[2,0],[3,1],[4,0]]},{"line":19,"symbol":0,"count":5,"pay":1400,"base":7,"mult":200,"cells":[[0,3],[1,2],[2,3],[3,2],[4,3]]},{"line":20,"symbol":0,"count":5,"pay":525,"base":7,"mult":75,"cells":[[0,1],[1,0],[2,1],[3,0],[4,1]]},{"line":21,"symbol":0,"count":5,"pay":1225,"base":7,"mult":175,"cells":[[0,2],[1,3],[2,2],[3,3],[4,2]]},{"line":22,"symbol":0,"count":5,"pay":1400,"base":7,"mult":200,"cells":[[0,1],[1,2],[2,1],[3,2],[4,1]]},{"line":23,"symbol":0,"count":5,"pay":2450,"base":7,"mult":350,"cells":[[0,2],[1,1],[2,2],[3,1],[4,2]]},{"line":24,"symbol":0,"count":5,"pay":1575,"base":7,"mult":225,"cells":[[0,1],[1,2],[2,2],[3,2],[4,1]]}],"rawPay":34132,"pay":33333,"total":33333,"i":0}]}};

// ---- 86-diag.js
// ?diag=1 prints what this device is actually doing, so a phone problem can be read off a screenshot. Reads only; shows no session or wallet data.
if (Q.has('diag')) window.addEventListener('load', () => {
  const box = document.createElement('pre');
  box.style.cssText = 'position:fixed;left:0;top:0;right:0;max-height:52vh;overflow:hidden;margin:0;padding:6px;z-index:99999;background:#000c;color:#7f7;font:10px/1.25 monospace;white-space:pre-wrap;pointer-events:none';
  document.body.appendChild(box);
  const W = ['noPacked', 'noAlpha', 'packDirect', 'unpackError', 'stills', 'lateClipFailed'];
  const vid = (n, v) => `${n}: rs${v.readyState} ${v.paused ? 'paused' : 'playing'} t${(+v.currentTime).toFixed(1)}${v.error ? ' ERR' + v.error.code : ''}${v._primed ? ' primed' : ''}${v._direct ? ' direct' : ''}`;
  let lastP = 0, lastT = performance.now(), fps = 0;
  const draw = () => {
    const nowT = performance.now(), p = Hank.paints || 0; if (nowT - lastT >= 1000) { fps = Math.round((p - lastP) * 1000 / (nowT - lastT)); lastP = p; lastT = nowT; }
    const urls = Object.keys(Assets.urls), packs = urls.filter(p => p.endsWith('.pack.mp4')).length, webms = urls.filter(p => p.endsWith('.webm')).length;
    box.textContent = [
      `reduceMotion ${RM}  apple ${APPLE_MOBILE}  safari ${SAFARI}`,
      `sprites ${SPRITES} (${Math.round(Sprites.bytes / 1048576)} MB decoded)  packed ${PACKED}  stills ${STILLS}  hankLive ${Hank.live}  webgl ${Unpack.gl ? 'ok' : Unpack.dead ? 'DEAD' : 'none'}`,
      `hank frames/sec ${fps}  loaded packs ${packs} webms ${webms}  hank now ${Hank.name}  animations ${document.getAnimations ? document.getAnimations().length : '?'}`,
      `reel: ${Board.reels.slice(0, 2).map(r => r.anim ? r.anim.playState : 'none').join(' ')}`,
      'warnings: ' + (TRACE.filter(e => W.includes(e.ev)).slice(-5).map(e => e.ev + ' ' + JSON.stringify(e.data || '')).join(' | ') || 'none'),
      'HANK ' + Object.entries(Hank.vids).map(([k, v]) => vid(k, v)).join('\n     '),
      'WIN  ' + Object.entries(Clips.vids).slice(0, 3).map(([k, v]) => vid(k.slice(0, 8), v)).join('\n     '),
      UA.slice(0, 110),
    ].join('\n');
  };
  setInterval(draw, 400); draw();
});

// ---- 88-intro.js
// After the loading screen (the Hooligans Studios ident in index.html, FriesLoader), the feature splash: three rules with the
// game's own art, the max win, and one big Tap To Play. The splash is drawn once the assets and the server are both ready,
// under the loading screen, and plays in as that fades; the tap that leaves it is the one that unlocks audio.
const INTRO_KEY = 'fries5.nointro';
const Intro = {
  shown: false,
  skipped: () => store.get(INTRO_KEY) === '1',
  // the baskets in the picture show two real token values from the math, so the art never promises a number the game cannot pay
  tokens() {
    const vals = [].concat(...Object.values((GAME && GAME.tiers) || {})).map(Number).filter(v => v > 1).sort((a, b) => a - b);
    const u = [...new Set(vals)];
    return u.length >= 2 ? [u[0], u[1]] : [2, 3];
  },
  render() {
    const G = GAME || {}, lines = (G.lines && G.lines.length) || 25;
    const img = (src, cls) => src ? `<img class="${cls || ''}" src="${src}" alt="">` : '';
    const rush = (G.rush && G.rush.length) ? G.rush : [{ name: 'Lunch Rush', bags: 3 }, { name: 'Dinner Rush', bags: 4 }, { name: 'Late Night Rush', bags: 5 }];
    const bagsMin = Math.min(...rush.map(r => +r.bags)), bagWords = rush.map(r => +r.bags).join(', ').replace(/, (\d+)$/, ' or $1');
    const rushWords = rush.map(r => esc(String(r.name).replace(/ Rush$/i, ''))).join(', ').replace(/, ([^,]+)$/, ' or $1') + ' Rush';
    const [a, b] = this.tokens(), food = Assets.sym(0), bag = Assets.key('b1-bag');
    const panels = [
      { art: `<div class="ia ia-food">${img(food)}${img(food)}${img(food)}</div>`,
        h: `Line up ${bagsMin}+`, s: `Same food from the left reel on any of ${lines} lines.`, c: `${bagsMin}+ same food from left` },
      { art: `<div class="ia ia-hank">${img(Assets.pose('idle'), 'hk')}<span class="ib ib1">${img(Assets.key('w1-fry-basket'))}<i>x${a}</i></span><span class="ib ib2">${img(Assets.key('w3-large'))}<i>x${b}</i></span></div>`,
        h: 'Baskets multiply', s: 'Hank throws Fry Basket wilds. A line win is multiplied by the sum of its baskets.', c: 'Baskets multiply wins' },
      { art: `<div class="ia ia-bag">${img(bag)}${img(bag)}${img(bag)}</div>`,
        h: `${bagsMin}+ Bags = Rush`, s: `${bagWords} Bags start the ${rushWords}. Baskets stick and re-roll every spin.`, c: `${bagsMin}+ Bags start a Rush` },
    ];
    $('introRules').innerHTML = panels.map((p, i) => `<div class="ir" style="--i:${i}">${p.art}<div class="it"><b>${p.h}</b><span class="full">${p.s}</span><span class="cmp">${p.c}</span></div></div>`).join('');
    $('introMax').textContent = fmtPlain(G.maxWin || 33333) + 'x';
  },
  // ready: open the splash under the loading screen (its pop-ins wait for the fade), or, if the player turned it off, hand the
  // button to the loading screen, where it waits under the bar
  async open(go) {
    go.textContent = 'Tap To Play';
    if (this.skipped()) return this.hold(go);
    try { this.render(); } catch (e) { trace('introError', String(e && e.message)); return this.hold(go); }
    $('introGoSlot').appendChild(go); go.hidden = false;
    const box = $('introSkipBox'); box.checked = false;
    box.onchange = () => { store.set(INTRO_KEY, box.checked ? '1' : '0'); Sfx.init(); Sfx.click(); };
    const ld = $('loader'), LD = window.FriesLoader;
    if (LD && LD.up()) { ld.classList.add('wait'); addEventListener('fries:shown', () => ld.classList.remove('wait'), { once: true }); }
    $('intro').hidden = false; ld.classList.add('intro'); this.shown = true;
    if (LD) LD.done();
    trace('intro');
  },
  // a button the player has to press before the game opens (Tap To Play, Try Again), with an optional line above it
  hold(go, text) {
    go.hidden = false;
    const LD = window.FriesLoader;
    if (LD && LD.up()) { LD.hold(go, text); return; }
    const ld = $('loader'); if (ld) ld.appendChild(go);   // the loading screen has already gone: the button stands on its own
  },
};
// Space or Enter anywhere on the splash continues, like the button; the checkbox keeps its own Space
document.addEventListener('keydown', e => {
  if (e.repeat || (e.code !== 'Space' && e.code !== 'Enter' && e.code !== 'NumpadEnter')) return;
  const go = $('loaderGo'), ld = $('loader'); if (!ld || !go || go.hidden || ld.classList.contains('gone')) return;
  const a = document.activeElement; if (a === go || (a && /^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName))) return;
  e.preventDefault(); go.click();
});

// ---- 90-main.js
// Game loop: authenticate, play, animate, settle. The balance on screen only ever comes from a server response.
let busy = false;

// Returns the settled { balance } for the caller to show when it is ready, or null if the server had nothing to give.
async function endRoundSafely() {
  for (let i = 0; ; i++) {
    try { const r = await Server.endRound(); if (i) toast('Back in the kitchen. Your win is in.'); else toastClear(); return r; }
    catch (e) {
      if (e.code === 'ERR_VAL' || e.code === 'ERR_IS') {   // already settled, from another tab or an earlier try
        trace('endRoundGone', e.code); let b = null; try { b = await Server.balance(); } catch (e2) { /* the next call will say */ } toastClear(); return b;
      }
      trace('endRoundRetry', { code: e.code, i });
      toast('Lost the kitchen for a moment. Your win is safe. Retrying...', 0, true);
      await sleep(Math.min(5000, 600 + i * 800));
    }
  }
}

async function runRound(round) {
  const modeDef = await animateRound(round);
  await settleRound(round, modeDef);
}

async function resumeFromServer(reason) {
  const a = await Server.auth();
  UI.setBalance(a.balance);
  if (a.round && a.round.active && a.round.state) { trace('resume', { reason, betID: a.round.betID }); toast('Picking up your open order...'); await runRound(a.round); return true; }
  return false;
}

async function startRound(mode) {
  if (busy) return;
  const m = mode || UI.armed || 'BASE', amount = UI.bet();
  if (UI.stakeOf(m) > UI.balance) { Auto.stop(); Sfx.init(); Sfx.broke(); toast(ERR_TEXT.ERR_IPB); UI.showDeposit(); return; }
  busy = true; Time.slam = false; UI.setBusy(true); Sfx.init(); say('');
  try {
    const res = await Server.play(m, amount, UI.costOf(m));
    UI.setBalance(res.balance);
    if (UI.armed && UI.armed === m) { UI.streak = (UI.streak || 0) + UI.stakeOf(m); UI.refresh(); }   // what the stay-on buy has cost since it was switched on
    trace('play', { mode: m, amount, balance: res.balance.amount });
    await runRound(res.round);
  } catch (e) {
    trace('playError', { code: e.code, msg: String(e.message) });
    Auto.stop();
    if (!(e instanceof ApiError)) { console.warn('round view error', e); toast('Something went wrong drawing that round. Your balance is safe.'); await refreshAfterFault(); }
    else if (e.code === 'ERR_IPB') { Sfx.broke(); toast(errText(e)); UI.showDeposit(); }
    else if (e.code === 'ERR_STALE') {   // the admin changed the math after this page loaded: nothing was debited
      try { GAME = await Server.game(); toast(errText(e)); } catch (e2) { toast(errText(e2)); }
    }
    else if (e.code === 'ERR_VAL' || e.code === 'ERR_NET' || e.code === 'ERR_HTTP' || e.code === 'ERR_IS') {
      // the server may be holding a round we never saw: ask it, and replay if so
      toast(errText(e));
      try { const had = await resumeFromServer(e.code); if (!had && e.code === 'ERR_VAL') toast('That order was refused. Check your bet.'); }
      catch (e2) { toast(errText(e2)); }
    } else toast(errText(e));
  } finally {
    Sfx.stopBeds(); busy = false; Time.slam = false; UI.setBusy(false);
    trace('roundDone', { balance: UI.balance });
    if (Auto.left > 0) Auto.next();
  }
}
async function refreshAfterFault() {
  try { const a = await Server.auth(); UI.setBalance(a.balance); if (a.round && a.round.active) { const r = await endRoundSafely(); if (r) UI.setBalance(r.balance); } } catch (e) { toast(errText(e)); }
  Board.resetFx(); overlayOff(); setStage(0); rushbar(null);
}

async function previewMaxWin() {
  if (busy || Auto.left > 0 || !UI.config) return;
  const amount = UI.bet();
  busy = true; Time.slam = false; UI.setBusy(true); UI.closeAll(); Sfx.init(); say('');
  toast('Preview only. No bet, no payout.', 3000);
  try { await runRound(Object.assign({}, PREVIEW_MAX, { amount, payout: amount * PREVIEW_MAX.state.total })); }
  catch (e) { console.warn('preview error', e); }
  finally { Sfx.stopBeds(); busy = false; Time.slam = false; UI.setBusy(false); Meter.set('$0.00'); say(''); setStage(0); toast('That was a preview. Your balance did not change.', 2600); }
}
$('btnPreview').onclick = () => { Sfx.click(); previewMaxWin(); };

function pressSpin() {
  if (!UI.config || $('loader')) return;
  Sfx.init();
  if (document.querySelector('.modal.on')) return;
  if (Auto.left > 0) { Auto.stop(); trace('autoStop'); return; }
  if (busy) { Time.slam = true; tapped(); trace('slam'); return; }
  startRound();
}
$('spin').onclick = pressSpin;
document.addEventListener('keydown', e => { if (e.code === 'Space' && !e.repeat && !/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(document.activeElement.tagName)) { e.preventDefault(); pressSpin(); } });
document.addEventListener('keydown', e => { if (e.code === 'Space' && document.activeElement && document.activeElement.id === 'spin') e.preventDefault(); }, true);
document.addEventListener('pointerdown', () => Sfx.init(), { once: true });
document.addEventListener('pointerdown', () => { if (PACKED) Unpack.primeAll(); }, true);   // Low Power Mode: a clip that arrived late still needs a tap to start decoding
document.addEventListener('visibilitychange', () => { if (document.hidden) { Sfx.suspend(); return; } if (Sfx.ctx) Sfx.init(); const c = Hank.cur; if (c && c.paused && !STILLS && !Hank.resting) c.play().catch(() => {}); });

// The diner floor sits under Hank's feet on every screen: the picture is sized and moved so the point FLOOR_Y down the
// picture (the open floor in front of the stools) lands where his feet are, and it still covers the whole screen.
const BG_ASPECT = 2752 / 1536, FEET_Y = .86;
function groundBg() {
  const h = $('hank'); if (!h) return;
  const W = innerWidth, H = innerHeight, r = h.getBoundingClientRect(); if (!r.height) return;
  const feet = Math.min(H, r.top + r.height * FEET_Y), FLOOR_Y = W > H ? .76 : .65;   // tall screens: just in front of the stools, so the counter shows behind him
  let ih = Math.max(H, W / BG_ASPECT, (H - feet) / (1 - FLOOR_Y), feet / FLOOR_Y);
  const iw = ih * BG_ASPECT, y = Math.min(0, Math.max(H - ih, feet - FLOOR_Y * ih)), x = (W - iw) / 2;
  document.querySelectorAll('.bg').forEach(b => { b.style.backgroundSize = `${iw.toFixed(1)}px ${ih.toFixed(1)}px`; b.style.backgroundPosition = `${x.toFixed(1)}px ${y.toFixed(1)}px`; });
}
addEventListener('resize', () => requestAnimationFrame(groundBg));
if (window.ResizeObserver) new ResizeObserver(() => requestAnimationFrame(groundBg)).observe($('hank'));
function applyArt() {
  groundBg();
  const bgFix = { base: 'base', lunch: 'lunch', dinner: 'dinner', late: 'late' };
  document.querySelectorAll('.bg').forEach(b => { const u = Assets.bg(bgFix[b.dataset.bg]); if (u) b.style.backgroundImage = `url("${u}")`; });
  $('buyArt').src = Assets.key('b1-bag');
  const tile = Assets.url('assets/tile/premium.webp'); if (tile) document.documentElement.style.setProperty('--tile', `url("${tile}")`);
}

async function boot() {
  Time.turbo = store.get(TURBO_KEY) === '1';
  const plateEntry = MANIFEST.find(e => e.p === 'assets/logo/title-plate.webp');
  if (plateEntry) {   // the title sits on the plate's ribbon, so it waits for the plate
    const lp = $('loaderPlate'), url = `${plateEntry.p}?v=${plateEntry.v}`, im = new Image();
    lp.style.backgroundImage = `url("${url}")`; lp.classList.add('plated');
    im.onload = () => lp.classList.add('ready'); im.onerror = () => lp.classList.remove('plated'); im.src = url;
  }
  const LD = window.FriesLoader;   // the loading screen (index.html): its paint bar follows the kit below
  // the server calls run beside the art, not after it
  const connect = () => { Server.sid = loadSid(); const p = Promise.all([Server.game(), Server.auth()]); p.catch(() => {}); return p; };
  let connecting = connect();
  // the kit counts in the loading screen's bar (FriesLoader.track): its bytes, then Hank (the last 10 percent)
  let tries = 0;
  const fail = (text, retry) => { const b = $('loaderGo'); b.textContent = 'Try Again'; b.onclick = () => { b.hidden = true; if (LD) LD.release(); retry(); }; Intro.hold(b, text); };

  const stepAssets = async () => {
    let bar = () => {}, fin = () => {};
    const kit = new Promise(r => { fin = r; });
    if (LD) LD.track('kit' + tries++, 1, set => { bar = set; return kit; });
    try { await loadAssets(p => bar(p * .9)); }
    catch (e) { fin(false); return fail('Could not load the kitchen. Check your connection.', stepAssets); }
    applyArt(); Board.init(); await Hank.init(); fin(true); stepServer();
  };
  const stepServer = async () => {
    try {
      const [game, a] = await connecting;
      GAME = game;
      UI.config = a.config;
      const saved = +store.get(BET_KEY), levels = a.config.betLevels;
      UI.betI = Math.max(0, levels.indexOf(levels.includes(saved) ? saved : a.config.defaultBetLevel));
      UI.setBalance(a.balance);
      trace('ready', { stills: STILLS, packed: PACKED, sprites: SPRITES, sid: Server.sid });
      const go = $('loaderGo');
      go.onclick = () => { if ($('loader').classList.contains('gone')) return; Sfx.init(); Sfx.click(); if (LD) LD.hide(); $('loader').classList.add('gone'); setTimeout(() => $('loader').remove(), 400); begin(a); };
      loadLateAssets().catch(e => trace('lateClipsError', String(e)));
      await Intro.open(go);   // the splash, drawn under the loading screen (or, if turned off, the button under its bar)
      window.__fries.ready = true;
    } catch (e) { fail(errText(e), () => { connecting = connect(); stepServer(); }); }
  };
  stepAssets();
}

async function begin(a) {
  if (a.round && a.round.active && a.round.state) {   // a reload mid-round: the server kept it
    busy = true; UI.setBusy(true); toast('Picking up your open order...'); trace('resume', { reason: 'reload', betID: a.round.betID });
    if (a.round.amount && UI.config.betLevels.includes(a.round.amount)) UI.betI = UI.config.betLevels.indexOf(a.round.amount);
    try { await runRound(a.round); } catch (e) { console.warn(e); toast(errText(e)); }
    Sfx.stopBeds(); busy = false; UI.setBusy(false);
  } else if (a.balance.amount <= 0) UI.showDeposit();
}

window.__fries = { trace: TRACE, get balance() { return UI.balance; }, get busy() { return busy; }, get stills() { return STILLS; }, get packed() { return PACKED; }, get sprites() { return SPRITES; }, get hankPaints() { return Hank.paints || 0; }, get hankResting() { return Hank.resting; }, get spriteMB() { return Math.round(Sprites.bytes / 1048576); }, get hankLive() { return Hank.live; }, get sid() { return Server.sid; }, get armed() { return UI.armed; }, get hank() { return Hank.name; }, get _hank() { return LOCAL_PAGE ? Hank : null; }, get baskets() { return Array.from(Board.baskets.values()).map(b => ({ r: b.r, h: b.h, tier: b.tier, value: b.value })); } };
boot();

if (LOCAL_PAGE || Q.has('admin')) $('btnBackend').hidden = false;   // the casino admin link is for Oz only: ?admin=1

})();
