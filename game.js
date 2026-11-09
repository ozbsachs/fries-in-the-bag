(function(){'use strict';
const MANIFEST=[{"p":"assets/anim/b1-bag.win.webm","s":240158,"v":"e0e45516"},{"p":"assets/anim/hank.bigorder.webm","s":918987,"v":"4d038dd3"},{"p":"assets/anim/hank.idle.webm","s":668435,"v":"80fc20e6"},{"p":"assets/anim/hank.lose.webm","s":785858,"v":"aac99d84"},{"p":"assets/anim/hank.max.webm","s":1615802,"v":"57de7f04"},{"p":"assets/anim/hank.multi.webm","s":1128576,"v":"04400bdd"},{"p":"assets/anim/hank.tease.webm","s":688871,"v":"c2f98d9b"},{"p":"assets/anim/hank.throw.webm","s":936445,"v":"6433db60"},{"p":"assets/anim/hank.win.webm","s":806562,"v":"82436e15"},{"p":"assets/anim/s1-loaded-fries.win.webm","s":181208,"v":"bccbe0d1"},{"p":"assets/anim/s2-double-burger.win.webm","s":155654,"v":"23133c98"},{"p":"assets/anim/s3-chicken-bucket.win.webm","s":178971,"v":"96ae8364"},{"p":"assets/anim/s4-milkshake.win.webm","s":170549,"v":"7877ebbe"},{"p":"assets/anim/s5-letter-a.win.webm","s":162759,"v":"b15a923b"},{"p":"assets/anim/s6-letter-k.win.webm","s":124017,"v":"9bc08667"},{"p":"assets/anim/s7-letter-q.win.webm","s":139816,"v":"137a46b9"},{"p":"assets/anim/s8-letter-j.win.webm","s":82676,"v":"3b0327dd"},{"p":"assets/anim/w1-fry-basket.win.webm","s":246092,"v":"497e8f96"},{"p":"assets/anim/w2-medium.win.webm","s":256054,"v":"c7d7ef3c"},{"p":"assets/anim/w3-large.win.webm","s":380540,"v":"303343f2"},{"p":"assets/bg/base.webp","s":184300,"v":"4ebd6655"},{"p":"assets/bg/dinner.webp","s":171680,"v":"d69e6a8e"},{"p":"assets/bg/late.webp","s":158634,"v":"df6563a2"},{"p":"assets/bg/lunch.webp","s":179546,"v":"6beae626"},{"p":"assets/hank/pose-bigorder.webp","s":32090,"v":"0f0e11f0"},{"p":"assets/hank/pose-idle.webp","s":29930,"v":"0e7b0383"},{"p":"assets/hank/pose-lose.webp","s":27266,"v":"0f293e4a"},{"p":"assets/hank/pose-max.webp","s":53522,"v":"7f7fda82"},{"p":"assets/hank/pose-multi.webp","s":21084,"v":"acf65f36"},{"p":"assets/hank/pose-tease.webp","s":30504,"v":"88f07470"},{"p":"assets/hank/pose-throw.webp","s":27372,"v":"becb5414"},{"p":"assets/hank/pose-win.webp","s":31926,"v":"f46b1646"},{"p":"assets/logo/hooligans.webp","s":14124,"v":"b2414e0b"},{"p":"assets/logo/title-plate.webp","s":108568,"v":"b7111c34"},{"p":"assets/sym/b1-bag.webp","s":16718,"v":"9afde126"},{"p":"assets/sym/s1-loaded-fries.webp","s":20110,"v":"a894369c"},{"p":"assets/sym/s2-double-burger.webp","s":19796,"v":"6fce468c"},{"p":"assets/sym/s3-chicken-bucket.webp","s":18562,"v":"7effd482"},{"p":"assets/sym/s4-milkshake.webp","s":17664,"v":"bf530276"},{"p":"assets/sym/s5-letter-a.webp","s":10946,"v":"cf17e858"},{"p":"assets/sym/s6-letter-k.webp","s":11990,"v":"6df6d616"},{"p":"assets/sym/s7-letter-q.webp","s":10506,"v":"704c71d9"},{"p":"assets/sym/s8-letter-j.webp","s":11178,"v":"d756a28f"},{"p":"assets/sym/s8-salt-shaker.webp","s":19018,"v":"ed2ced68"},{"p":"assets/sym/w1-fry-basket.webp","s":23512,"v":"636e4217"},{"p":"assets/sym/w2-medium.webp","s":25934,"v":"7d303a01"},{"p":"assets/sym/w3-large.webp","s":31416,"v":"d00db639"},{"p":"assets/tile/premium.webp","s":12848,"v":"5e8ab4a6"}];
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
let STILLS = RM || APPLE_MOBILE || SAFARI || Q.has('stills');   // no VP9 alpha: held poses and CSS squash instead of clips

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
const ARMABLE = new Set(['SALT', 'CRISPY']);

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
const fmtX = x => (+x).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'x';
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
// Every sound is synthesised here. No audio files, nothing to license.
const MASTER_VOL = 0.55;
const Sfx = {
  ctx: null, master: null, noise: null, muted: store.get(MUTE_KEY) === '1', vol: (v => (v === null || v === undefined || v === '' || isNaN(+v)) ? 1 : Math.max(0, Math.min(1, +v / 100)))(store.get(VOL_KEY)), beds: new Set(),
  _level() { return this.muted ? 0 : MASTER_VOL * this.vol; },
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume().catch(() => {}); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    try {
      const c = this.ctx = new AC();
      const comp = c.createDynamicsCompressor(); comp.connect(c.destination);
      this.master = c.createGain(); this.master.gain.value = this._level(); this.master.connect(comp);
      const len = c.sampleRate * 1.2 | 0, buf = this.noise = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      if (c.state !== 'running') c.resume().catch(() => {});
    } catch (e) { this.ctx = null; }
  },
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {}); },
  setMuted(m) {
    this.muted = m; store.set(MUTE_KEY, m ? '1' : '0'); this._apply();
  },
  setVolume(pct) { this.vol = Math.max(0, Math.min(1, pct / 100)); store.set(VOL_KEY, Math.round(pct)); this._apply(); },
  _apply() {
    if (!this.master) return;
    const t = this.ctx.currentTime, g = this.master.gain;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(this._level(), t + 0.03);
  },
  _ok() { return this.ctx && this.ctx.state === 'running' && !this.muted; },
  _pitch() { return 1 + (Math.random() - .5) * .08; },   // about 4 percent either way, so repeats do not sound stamped
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
  // a held noise that fades in and out; returns its stop. Runs muted too, so unmuting mid-bed just works.
  bed({ filter = 'bandpass', f = 900, q = 1, vol = 0.05 } = {}) {
    if (!this.ctx || this.ctx.state !== 'running') return () => {};
    const c = this.ctx, s = c.createBufferSource(), g = c.createGain(), fl = c.createBiquadFilter(), t = c.currentTime;
    s.buffer = this.noise; s.loop = true; fl.type = filter; fl.frequency.value = f; fl.Q.value = q;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.05);
    s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t, Math.random());
    const stop = () => { if (!this.beds.delete(stop)) return; const e = c.currentTime; g.gain.cancelScheduledValues(e); g.gain.setValueAtTime(g.gain.value, e); g.gain.linearRampToValueAtTime(0, e + 0.06); s.stop(e + 0.08); };
    this.beds.add(stop); return stop;
  },
  stopBeds() { Array.from(this.beds).forEach(s => s()); },
  click() { this.tone(520, 0.05, { vol: 0.12 }); },
  spin() { this.burst(0.35, { vol: 0.3, f: 500, to: 2400 }); },
  spinBed() { return this.bed({ f: 900, vol: 0.05 }); },
  reelStop() { this.tone(150, 0.09, { type: 'triangle', vol: 0.32, to: 70 }); this.tone(420, 0.06, { type: 'triangle', vol: 0.16, to: 180 }); this.burst(0.05, { vol: 0.1, f: 3000 }); },
  bag(n) { this.tone(95, 0.22, { type: 'sine', vol: 0.5, to: 45 }); this.tone(330 * Math.pow(1.26, n), 0.3, { type: 'triangle', vol: 0.22, at: 0.04 }); },
  // n: how many reels have teased already this spin; each one sits a little higher
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

// ---- 40-assets.js
// The kit the first spin needs is fetched before play, with a byte-accurate bar; everything else follows in the background.
const Assets = {
  urls: {}, have: p => !!Assets.urls[p], url: p => Assets.urls[p],
  sym: id => Assets.urls[`assets/sym/${SYM[id]}.webp`],
  key: k => Assets.urls[`assets/sym/${k}.webp`],
  anim: k => Assets.urls[`assets/anim/${k}.win.webm`],
  hank: k => Assets.urls[`assets/anim/hank.${k}.webm`],
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
        blob = new Blob(parts, { type: res.headers.get('content-type') || '' });
      } else { blob = await res.blob(); got = blob.size; onBytes(got); }
      Assets.urls[entry.p] = URL.createObjectURL(blob);
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
const BLOCKING = /^assets\/(sym\/|tile\/|bg\/base\.|anim\/hank\.idle\.|hank\/pose-idle\.|logo\/(title-plate|hooligans)\.)/;
const isVideo = e => e.p.endsWith('.webm');
const usable = e => !(STILLS && isVideo(e));

async function loadAssets(onProgress) {
  const list = MANIFEST.filter(e => BLOCKING.test(e.p) && usable(e));
  const total = list.reduce((n, e) => n + e.s, 0) || 1; let got = 0;
  const failed = [];
  const queue = list.slice().sort((a, b) => a.s - b.s);
  const worker = async () => { while (queue.length) { const e = queue.shift(); const ok = await fetchOne(e, n => { got += n; onProgress(Math.min(1, got / total)); }); if (!ok) failed.push(e.p); } };
  await Promise.all(Array.from({ length: 6 }, worker));
  trace('assets', { files: list.length, bytes: total, failed: failed.length });
  if (!STILLS) {
    const idle = Assets.hank('idle');
    if (!idle || !(await videoHasAlpha(idle))) { STILLS = true; trace('noAlpha'); }
  }
  // the board cannot run without its symbols; the clips and art all have fallbacks
  const needed = SYM.map(s => `assets/sym/${s}.webp`).filter(p => failed.includes(p));
  if (needed.length) throw new Error('symbols failed to load');
  return failed;
}

// After the Go button is up: the rest, stills first, each put to use the moment it is in memory. Until then everything has a fallback.
async function loadLateAssets() {
  const late = MANIFEST.filter(e => !BLOCKING.test(e.p) && usable(e));
  const queue = late.slice().sort((a, b) => isVideo(a) - isVideo(b) || a.s - b.s);
  const worker = async () => { while (queue.length) { const e = queue.shift(); if (!(await fetchOne(e, () => {}))) { trace('lateClipFailed', e.p); continue; }
    if (e.p.startsWith('assets/bg/')) applyArt();
    const hank = /hank\.(\w+)\.webm$/.exec(e.p), sym = /([\w-]+)\.win\.webm$/.exec(e.p);
    if (hank) Hank.attach(hank[1]); else if (sym) Clips.attach(sym[1]); } };
  await Promise.all(Array.from({ length: 3 }, worker));
  trace('lateClips', { files: late.length });
}

// ---- 50-hank.js
// Chef Hank: one stacked <video> per clip so a swap never shows an empty frame.
const Hank = {
  vids: {}, cur: null, name: 'idle', tok: 0, poseTimer: 0, scratchTimer: 0, resting: false,
  async init() {
    if (!STILLS) await this.attach('idle');
    if (!STILLS && !this.vids.idle) STILLS = true;   // not even idle would decode: held poses from here on
    if (STILLS) { this.pose('idle'); document.body.classList.add('stills'); return; }
    this.pose('idle');
    await this.idle();
  },
  // a clip joins only once it has a decoded frame, so play() can trust whatever is in vids
  attach(c) {
    const url = Assets.hank(c); if (!url || STILLS || this.vids[c]) return Promise.resolve();
    const v = document.createElement('video');
    Object.assign(v, { muted: true, playsInline: true, preload: 'auto', loop: LOOPED.has(c), disablePictureInPicture: true });
    v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.className = 'hankv'; v.dataset.clip = c; v.src = url;
    v.addEventListener('ended', () => this._ended(v));
    $('hank').appendChild(v);
    return Promise.race([new Promise(r => { v.addEventListener('loadeddata', () => { this.vids[c] = v; r(); }, { once: true }); v.addEventListener('error', r, { once: true }); }), sleep(6000)]);
  },
  _ended(v) {
    if (this.cur !== v || v.dataset.clip !== this.name) return;   // a newer clip is already on its way in: this one must not cancel it
    if (!v._loop) { this.idle(); return; }
    try { v.currentTime = v._loop.tail ? Math.max(0, v.duration - v._loop.tail) : 0; } catch (e) { /* not ready yet */ }
    const p = v.play(); if (p) p.catch(() => {});
  },
  pose(c) { const u = Assets.pose(c) || Assets.pose('idle'); if (u) $('hankStill').src = u; $('hank').className = STILLS ? 'pose pose-' + c : ''; },
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
    v.playbackRate = Math.min(4, r * turboRate());
    if (v.currentTime > 0) try { v.currentTime = 0; } catch (e) { /* not ready yet */ }
    const shown = this._onFrame(v);
    const p = v.play(); if (p) p.catch(() => { /* a blocked play: Hank keeps the current clip */ });
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
const Clips = {
  vids: {}, runs: new Set(), raf: 0,
  attach(k) {
    const url = Assets.anim(k); if (!url || STILLS || this.vids[k]) return;
    const v = document.createElement('video'); Object.assign(v, { muted: true, playsInline: true, preload: 'auto' }); v.setAttribute('playsinline', ''); v.src = url;
    v.addEventListener('loadeddata', () => { this.vids[k] = v; }, { once: true }); $('clipHost').appendChild(v);
  },
  play(key, targets, r) {
    const v = this.vids[key];
    if (STILLS || !v || v.readyState < 2) { targets.forEach(t => t.host.classList.add('wiggle')); const run = { fallback: true, targets }; this.runs.add(run); return wait(800).then(() => this._end(run)); }
    const run = { v, targets, key }; this.runs.add(run);
    trace('clip', { key, n: targets.length });
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
      if (!run.live) { if (run.v.currentTime <= 0) continue; run.live = true; run.targets.forEach(t => { if (t.hide) { if (t.hide.classList.contains('prem')) t.hide.classList.add('clipping'); else t.hide.style.visibility = 'hidden'; } t.canvas.classList.add('on'); }); }
      for (const t of run.targets) { const c = t.canvas, x = c._x || (c._x = c.getContext('2d')); x.clearRect(0, 0, CLIP_PX, CLIP_PX); x.drawImage(run.v, 0, 0, CLIP_PX, CLIP_PX); } }
    this.raf = requestAnimationFrame(() => this._tick());
  },
  _end(run) {
    if (!this.runs.has(run)) return; this.runs.delete(run);
    if (run.fallback) { run.targets.forEach(t => t.host.classList.remove('wiggle')); return; }
    if (run.v) { run.v.removeEventListener('ended', run.stop); run.v.pause(); }
    run.targets.forEach(t => { t.canvas.classList.remove('on'); if (t.hide) { t.hide.style.visibility = ''; t.hide.classList.remove('clipping'); } });
    if (run.res) run.res();
  },
  stopAll() { for (const run of Array.from(this.runs)) this._end(run); },
};

// ---- 60-board.js
// The 5x4 board. Reels, cell effects, sticky baskets and thrown baskets. Draws only what it is told.
const STRIP_N = 16, R = 5, H = 4;
const randSym = () => (Math.random() * 8) | 0;

class Reel {
  constructor(i) {
    this.i = i; this.el = el('div', 'reel'); this.strip = el('div', 'strip'); this.el.appendChild(this.strip);
    this.items = []; for (let n = 0; n < STRIP_N; n++) { const im = el('img', 'sym'); im.alt = ''; im.draggable = false; this.strip.appendChild(im); this.items.push(im); }
    this.current = [randSym(), randSym(), randSym(), randSym()]; this.anim = null; this.paint(this.current);
  }
  set(n, s) { this.items[n].src = Assets.sym(s); this.items[n].classList.toggle('prem', s < PREMIUM); }
  paint(syms) { for (let n = 0; n < STRIP_N; n++) this.set(n, n < 4 ? syms[n] : randSym()); this.strip.style.transform = 'translateY(0)'; }
  // items 8..15 mirror 0..7 so a half-strip loop is seamless; the loop opens on what is already showing
  start() {
    if (RM) return;
    for (let n = 0; n < 8; n++) { const s = n < 4 ? this.current[n] : randSym(); this.set(n, s); this.set(n + 8, s); }
    if (this.anim) this.anim.cancel();
    this.strip.style.transform = 'translateY(-50%)';
    this.anim = this.strip.animate([{ transform: 'translateY(-50%)' }, { transform: 'translateY(0)' }], { duration: 240, iterations: Infinity, easing: 'linear' });
  }
  crawl() { if (this.anim) this.anim.playbackRate = .45; }
  // onImpact fires when the strip visually hits the stop line, not when the settle ends
  async stop(final, onImpact) {
    this.current = final.slice(); if (this.anim) { this.anim.cancel(); this.anim = null; }
    for (let n = 0; n < STRIP_N; n++) this.set(n, n < 4 ? final[n] : randSym());
    this.strip.style.transform = 'translateY(0)';
    if (RM) { if (onImpact) onImpact(); return; }
    const dur = 300 / rate();
    if (onImpact) setTimeout(onImpact, dur * .82);
    const a = this.strip.animate([
      { transform: 'translateY(-75%)', easing: 'cubic-bezier(.25,.6,.5,1)' },
      { transform: 'translateY(.9%)', offset: .82, easing: 'ease-out' },
      { transform: 'translateY(0)' },
    ], { duration: dur });
    await a.finished.catch(() => {});
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
  resetFx() { Clips.stopAll(); this.cells.forEach(c => c.classList.remove('hit', 'shade', 'wiggle')); this.reels.forEach(x => x.items.slice(0, 4).forEach(i => i.classList.remove('s-hit', 's-pop', 's-dead', 's-bag'))); this.baskets.forEach(b => b.el.classList.remove('winning', 'dimmed')); $('lines').innerHTML = ''; hideLineLabel(); },
  clearBaskets() { this.baskets.forEach(b => b.el.remove()); this.baskets.clear(); },
  key: (r, h) => r + ':' + h,
  makeBasket(r, h, tier, value) {
    const k = this.key(r, h), old = this.baskets.get(k); if (old) old.el.remove();
    const d = el('div', 'bk tier' + tier); d.style.left = (r * 20) + '%'; d.style.top = (h * 25) + '%';
    const im = el('img', 'bkimg'); im.alt = ''; im.draggable = false; im.src = basketSrc(tier); d.appendChild(im);
    const cv = el('canvas', 'cv'); d.appendChild(cv);
    const t = el('div', 'token', '<span></span>'); d.appendChild(t); t.firstChild.textContent = tokenText(value);
    d.dataset.reel = r; d.dataset.row = h; d.dataset.tier = tier; d.dataset.value = value;
    $('baskets').appendChild(d);
    const obj = { el: d, img: im, cv, token: t, tier, value, r, h }; this.baskets.set(k, obj); return obj;
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
    trace('reconcile', { mismatch, n: list.length });
  },
};
function basketSrc(tier) { return (tier === 'L' && Assets.key('w3-large')) || (tier === 'M' && Assets.key('w2-medium')) || Assets.key('w1-fry-basket'); }
function hideLineLabel() { $('lineLabel').classList.remove('on'); }
function lineLabel(html) { const l = $('lineLabel'); l.innerHTML = html; l.classList.add('on'); }

// Particles and thrown baskets live in a page-wide layer so they can cross from Hank to the board.
const FX = {
  n: 0,
  burst(x, y, kind, count) {
    if (RM || this.n > 90) return; const fly = $('fly');
    for (let i = 0; i < count; i++) {
      const p = el('div', 'p p-' + kind), a = Math.random() * Math.PI * 2, d = 30 + Math.random() * 90, tx = Math.cos(a) * d, ty = Math.sin(a) * d - 20;
      p.style.left = x + 'px'; p.style.top = y + 'px'; fly.appendChild(p); this.n++;
      const an = p.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 }, { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty + 70}px)) rotate(${(Math.random() * 500) | 0}deg) scale(.5)`, opacity: 0 }], { duration: 420 + Math.random() * 300, easing: 'cubic-bezier(.2,.7,.5,1)' });
      an.onfinish = an.oncancel = () => { p.remove(); this.n--; };
    }
  },
  shake(strength) { if (RM) return; const b = $('boardFrame'); const k = []; for (let i = 0; i < 10; i++) k.push({ transform: `translate(${(Math.random() - .5) * strength}px,${(Math.random() - .5) * strength}px)` }); k.push({ transform: 'none' }); b.animate(k, { duration: 380 }); },
};

function handPoint() { const r = $('hank').getBoundingClientRect(); return { x: r.left + r.width * .78, y: r.top + r.height * .42 }; }

// one basket through the air, from a point to a cell, resolving when it lands
// bow: 0 flies straight, 1 or -1 bends the flight to that side and sets the spin direction
function throwBasket(from, r, h, tier, bow = 0) {
  const to = Board.cellCenter(r, h);
  if (RM) return Promise.resolve(to);
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
    const from = this.shown; this.shown = x; const tok = ++this.tok, t0 = performance.now(), dur = RM ? 0 : 320 / rate();
    const step = () => { if (tok !== this.tok) return; const k = dur ? Math.min(1, (performance.now() - t0) / dur) : 1; fitText($('win'), dollars(k === 1 ? x : from + (x - from) * k), 11); if (k < 1) requestAnimationFrame(step); }; step(); },
  reset() { this.shown = 0; this.set('0.00'); },
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
  await wait(isFree ? 200 : 330);
  const stagger = () => (isFree || Time.turbo ? 80 : 140) * turboRate();   // real milliseconds between stops, whatever the speed setting
  const stops = []; let bagsSoFar = 0, landed = 0, teases = 0, takeover = null;
  for (let r = 0; r < R; r++) {
    const reel = Board.reels[r];
    if (r === R - 1 && isBigOrder(spin)) {
      await Promise.all(stops);
      takeover = await bigOrderTakeover();
    } else if (!isFree && bagsSoFar >= 2) {
      // two Bags showing and reels still to come: Hank holds his breath and the next reel crawls
      await Promise.all(stops);   // the Bag that set this off has to be on the board first
      if (!teases) Hank.play('tease');
      trace('tease', { atReel: r, bags: bagsSoFar });
      say(`${BAG_WORD[bagsSoFar]} Bags. Come on...`); Sfx.tease(teases++);
      reel.el.classList.add('tease'); reel.crawl();
      await wait(1100);
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

function lineSymbolName(w) { const s = GAME.symbols.find(x => x.id === w.symbol); return s ? s.name : 'Symbol'; }
const paysHtml = x => ` pays <em>${dollars(x)}</em>`;
function lineLabelHtml(w, hidePay) { return `<b>Line ${w.line + 1}:</b> ${w.count} ${esc(lineSymbolName(w))}${hidePay || !showsCents(w.pay) ? '' : paysHtml(w.pay)}`; }
function linesLabelHtml(spin, hidePay) { return `<b>${spin.lines.length} lines</b>${hidePay || !showsCents(spin.pay) ? '' : paysHtml(spin.pay)}`; }
function linePoints(cells) { return cells.map(([r, h]) => `${(r + .5) * 100},${(h + .5) * 100}`).join(' '); }

function drawLine(w, extra) {
  const svg = $('lines'), pts = linePoints(w.cells);
  const mk = (cls) => { const p = document.createElementNS('http://www.w3.org/2000/svg', 'polyline'); p.setAttribute('points', pts); p.setAttribute('class', cls); svg.appendChild(p); return p; };
  mk('ln ln-back ' + (extra || '')); mk('ln ln-front ' + (extra || ''));
}

async function showWins(spin, isFree) {
  if (!spin.lines.length) return;
  trace('lines', { n: spin.lines.length, pay: spin.pay, total: spin.total });
  const hitCells = new Set(), groups = new Map();
  for (const w of spin.lines) for (const [r, h] of w.cells) hitCells.add(Board.key(r, h));
  for (let r = 0; r < R; r++) for (let h = 0; h < H; h++) Board.cell(r, h).classList.toggle('shade', !hitCells.has(Board.key(r, h)));
  Board.baskets.forEach(b => b.el.classList.toggle('dimmed', !hitCells.has(Board.key(b.r, b.h))));
  const add = (k, t) => { if (!groups.has(k)) groups.set(k, []); groups.get(k).push(t); };
  for (const key of hitCells) {
    const [r, h] = key.split(':').map(Number), c = Board.cell(r, h), b = Board.baskets.get(key);
    c.classList.add('hit');
    if (b) { b.el.classList.add('winning'); add(b.tier === 'L' ? 'w3-large' : b.tier === 'M' ? 'w2-medium' : 'w1-fry-basket', { host: b.el, canvas: b.cv, hide: b.img }); }
    else { Board.reels[r].img(h).classList.add('s-hit'); add(SYM[spin.grid[r][h]], { host: c, canvas: c._cv, hide: Board.reels[r].img(h) }); }
  }
  spin.lines.forEach(w => drawLine(w));
  Meter.to(spin.total);
  const hidePay = spoils(spin);
  lineLabel(spin.lines.length === 1 ? lineLabelHtml(spin.lines[0], hidePay) : linesLabelHtml(spin, hidePay));
  if (spin.pay < 1) {   // pocket change: the highlight and the line, one quiet tone, move on
    Sfx.winTiny();
    await wait(400);
    if (isFree) Board.resetFx();
    return;
  }
  const big = spin.pay >= 2;
  Sfx.winSmall();
  if (spin.pay >= 20) Hank.play('win', { rate: 1.3 });
  const clips = Time.turbo && !big ? null : Promise.all(Array.from(groups, ([k, targets]) => Clips.play(k, targets, 1.5)));
  // walk the individual lines while the clips run
  const walk = (async () => {
    if (spin.lines.length < 2 || spin.lines.length > 5 || !big) return;
    await wait(300);
    for (const w of spin.lines) {
      $('lines').innerHTML = ''; drawLine(w, 'solo');
      lineLabel(lineLabelHtml(w, hidePay)); Sfx.line(); trace('line', { line: w.line, pay: w.pay, mult: w.mult });
      await wait(isFree ? 300 : 430);
    }
    $('lines').innerHTML = ''; spin.lines.forEach(w => drawLine(w));
    lineLabel(linesLabelHtml(spin, hidePay));
  })();
  await Promise.all([walk, clips || wait(280)]);
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
  const info = GAME.rush.find(x => x.tier === rush.tier);
  overlay('intro tier-' + rush.tier, `<div class="ov-kick">Now serving</div><div class="ov-big">${esc(rush.name)}</div><div class="ov-sub">${+rush.spins} spins, baskets stick${info ? `, up to ${+info.maxBaskets} on the board` : ''}</div>`);
  Sfx.rush(rush.tier); Hank.play('win', { rate: 1.3 });
  await holdOrTap(1900);
  overlayOff();
}

async function freeSpin(spin, rush, runningX) {
  rushbar(`<span class="rn">${esc(rush.name)}</span><span>Spin <b>${+spin.spin}</b> of ${+spin.of}</span><span>Total <b>${fmtX(runningX)}</b></span>`);
  trace('free', { spin: spin.spin, of: spin.of, tier: spin.tier });
  await playReels(spin, true);
  await rerollBaskets(spin);
  await runToss(spin);
  Board.reconcile(spin.baskets);
  await showWins(spin, true);
  rushbar(`<span class="rn">${esc(rush.name)}</span><span>Spin <b>${+spin.spin}</b> of ${+spin.of}</span><span>Total <b>${fmtX(spin.total)}</b></span>`);
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

async function animateRound(round) {
  const st = round.state, modeDef = GAME.modes.find(m => m.name === round.mode);
  trace('round', { betID: round.betID, mode: round.mode, branch: st.branch, spins: st.spins.length, total: st.total, capped: st.capped, active: round.active });
  Show = { bet: round.amount, finalX: st.total, tier: round.payout > 0 ? tierOf(st.total, st.capped) : null };
  setStage(0); rushbar(null); overlayOff(); Meter.reset();
  if (LOTTERY.has(round.mode)) await lotteryIntro(round.mode);
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

async function showTier(round, tier) {
  trace('tier', { name: tier.name, total: round.state.total, payout: round.payout });
  const durs = [1500, 2100, 3000, 3800, 12000], lv = tier.lv;
  overlay('tierwin lv' + lv, `<div class="ov-big">${esc(tier.name)}</div><div class="ov-num" id="tierNum">$0.00</div><div class="ov-sub">${fmtX(round.state.total)} your bet${round.state.capped ? ' &middot; Max win reached' : ''}</div>`);
  Sfx.fanfare(lv); FX.shake(6 + lv * 3);
  const stopBed = Sfx.sizzleBed();
  let closed; const whenClosed = new Promise(r => { closed = r; });
  Hank.playUntil(lv === 4 ? 'max' : 'win', whenClosed, { tail: lv === 4 ? 2 : 0 });
  // purely a count-up: it lands on the server's payout. A tap or a slam jumps straight there.
  const num = $('tierNum'), t0 = performance.now(), countDur = durs[lv] * .55 / rate();
  let jumped = false;
  const tap = new Promise(r => { tapResolve = () => { jumped = true; r(); }; });
  if (!RM) await Promise.race([tap, new Promise(res => {
    let nextTick = t0;
    const step = () => {
      if (jumped || !num.isConnected) return res();
      const now = performance.now(), k = Math.min(1, (now - t0) / countDur);
      num.textContent = fmtMoney(Math.round(round.payout * (k * k * (3 - 2 * k))));
      if (now >= nextTick && k < 1) { nextTick = now + 90; Sfx.tick(); }
      if (k < 1) requestAnimationFrame(step); else res();
    }; step();
  })]);
  tapResolve = null;
  num.textContent = fmtMoney(round.payout); trace('tierLanded', { text: num.textContent, jumped });
  Sfx.countHit(lv);
  await holdOrTap(jumped ? Math.min(durs[lv] * .45, 1200) : durs[lv] * .45);
  stopBed(); overlayOff(); closed(); Hank.idle();
}

async function showReceipt(round, modeDef, ms) {
  const st = round.state, best = st.spins.reduce((m, s) => Math.max(m, s.pay), 0);
  const stake = round.amount * modeDef.cost;
  trace('receipt', { betID: round.betID, payout: round.payout, total: st.total, spins: st.spins.length });
  overlay('receipt', `<div class="tk">
    <div class="tk-h">Order #${round.betID}</div>
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
    Meter.set(round.payout > 0 ? fmtMoney(round.payout) : '0.00');
    if (settled) UI.setBalance(settled.balance);
  }
  const dead = !tier && isBuy && st.branch !== 'bait' && st.total < modeDef.cost * 0.25;
  if (dead) { trace('deadBuy', { total: st.total }); Hank.play('lose'); Sfx.lose(); say('That one was a dud.'); }
  if (sawRush) await showReceipt(round, modeDef, tier ? 1500 : 3400);
  say(round.payout > 0 && !tier && fmtMoney(round.payout) !== '$0.00' ? `Paid ${fmtMoney(round.payout)}` : '');
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
    $('btnTurbo').classList.toggle('on', Time.turbo); $('btnTurbo').setAttribute('aria-pressed', Time.turbo);
    if ($('modalBuy').classList.contains('on')) this.renderCards();
  },
  stepBet(d) { const n = this.betI + d; if (n < 0 || n >= this.config.betLevels.length) return; this.betI = n; store.set(BET_KEY, this.bet()); Sfx.click(); this.refresh(); },
  open(id) { $(id).classList.add('on'); },
  closeAll() { document.querySelectorAll('.modal').forEach(m => m.classList.remove('on')); $('confirm').innerHTML = ''; },

  renderCards() {
    const art = { SALT: 's8-salt-shaker', CRISPY: 's1-loaded-fries', ORDER: 'w1-fry-basket', LUNCH: 's2-double-burger', DINNER: 's3-chicken-bucket', MYSTERY: 'b1-bag', BON: 'b1-bag' };
    const r1 = GAME.rush[0], r2 = GAME.rush[1], known = GAME.mathVersion >= 1 && GAME.mathVersion <= 3;   // the odds below hold for math v1 to v3; the API does not send them
    const copy = {
      SALT: 'Stays on until you switch it off. ' + (known ? 'A Rush about 1 in 47 spins (Normal: 1 in 266).' : 'Bags land more often.'),
      CRISPY: 'Stays on until you switch it off. ' + (known ? 'A Rush about 1 in 22 spins.' : 'Bags land far more often.'),
      ORDER: `One spin. ${GAME.maxBaseBaskets} Medium or Large baskets guaranteed. They can still miss the lines.`,
      LUNCH: `Straight into ${+r1.spins} spins of ${r1.name}.`, DINNER: `Straight into ${r2.spins} spins of ${r2.name}.`,
      MYSTERY: known ? (GAME.mathVersion >= 3 ? '26% an empty bag, 44% Dinner Rush, 30% Late Night Rush. One real spin decides.' : '30% an empty bag, 42% Dinner Rush, 28% Late Night Rush. One real spin decides.') : 'An empty bag, a Dinner Rush or a Late Night Rush. One real spin decides.',
      BON: known ? '85% an empty bag, 12% Late Night Rush, 3% the 25,000x max win.' : 'An empty bag, a Late Night Rush, or the max win spin.',
    };
    $('buyNote').textContent = `Prices at your ${fmtMoney(this.bet())} bet`;
    $('cards').innerHTML = BUY_ORDER.map(m => { const def = GAME.modes.find(x => x.name === m); const stake = this.stakeOf(m), broke = stake > this.balance, on = this.armed === m;
      return `<button class="card${on ? ' armed' : ''}${m === 'BON' ? ' hot' : ''}" data-mode="${m}"${broke && !on ? ' data-broke="1"' : ''}>
        <img src="${Assets.key(art[m])}" alt=""><span class="ct">${esc(def.label)}</span><span class="cd">${esc(copy[m])}</span>
        <span class="cp"><b>${fmtPrice(def.cost)}</b> ${fmtMoney(stake)}</span>
        ${on ? '<span class="cf">On. Tap to switch off</span>' : broke ? '<span class="cf broke">Not enough play money</span>' : ARMABLE.has(m) ? '<span class="cf">Tap to switch on</span>' : ''}
      </button>`; }).join('');
    document.querySelectorAll('.card').forEach(c => { c.onclick = () => this.pickCard(c.dataset.mode, c.dataset.broke); });
  },
  pickCard(mode, broke) {
    if (broke) { Sfx.broke(); this.closeAll(); this.showDeposit(); return; }
    if (ARMABLE.has(mode)) { this.armed = this.armed === mode ? null : mode; if (this.armed) Sfx.buyConfirm(); else Sfx.buyCancel(); this.closeAll(); this.refresh(); return; }
    Sfx.click();
    const def = GAME.modes.find(x => x.name === mode), c = $('confirm');
    c.innerHTML = `<div class="confbox"><span>Order <b>${esc(def.label)}</b> for <b>${fmtMoney(this.stakeOf(mode))}</b>?</span><div><button class="chunk go" id="confYes">Order It</button><button class="chunk" id="confNo">Never Mind</button></div></div>`;
    $('confNo').onclick = () => { Sfx.buyCancel(); c.innerHTML = ''; };
    $('confYes').onclick = () => { Sfx.buyConfirm(); this.closeAll(); startRound(mode); };
    c.scrollIntoView({ block: 'nearest' });
  },
  showDeposit() {
    const suggest = this.balance <= 0 ? 1000 * API : null;   // an empty wallet gets a pointer to the amount that plays best
    $('deposits').innerHTML = this.config.deposits.map(a => `<button class="chunk go dep${+a === suggest ? ' sug' : ''}" data-a="${+a}">${fmtMoney(+a)}${+a === suggest ? '<small>Suggested</small>' : ''}</button>`).join('');
    this.bindDeposits('#deposits .dep');
    this.open('modalAdd');
  },
  bindDeposits(sel) {
    document.querySelectorAll(sel).forEach(b => { b.onclick = async () => {
      Sfx.click(); b.disabled = true;
      try { const r = await Server.deposit(+b.dataset.a); this.setBalance(r.balance); Sfx.deposit(); this.closeAll(); trace('deposit', +b.dataset.a); }
      catch (e) { Sfx.broke(); toast(errText(e)); b.disabled = false; }
    }; });
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
    const tierRows = Object.entries(G.tiers).map(([t, vals]) => `<tr><td class="s"><span>${tierWord[t]}</span></td><td class="vals">${vals.map(v => `<i class="mt t${t}">${v === 1 ? 'Wild' : 'x' + v}</i>`).join('')}</td></tr>`).join('');
    const rushRows = G.rush.map(x => `<tr><td class="s"><span>${esc(x.name)}</span></td><td>${+x.bags}</td><td>${+x.spins}</td><td>${+x.maxBaskets}</td></tr>`).join('');
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
      <p>Now and then Hank throws Fry Baskets at the board. A basket stands in for any food. When a basket lands, its token shows what it is worth. A line win is multiplied by the <b>sum of every basket on that line</b>, even a basket past the last paying symbol. A plain Wild basket counts as 1. A base spin can hold up to ${G.maxBaseBaskets} baskets.</p>
      <div class="tw"><table><thead><tr><th>Basket</th><th>What the token can show</th></tr></thead><tbody>${tierRows}</tbody></table></div>
      <p><b>Basket Bounce:</b> if a basket lands on another basket, it splits in two and both land again, until every basket has its own cell.</p>
      <h3>The Bag and The Rush</h3>
      <p>Land 3 or more Bags in one spin, at most one per reel, and you go to The Rush. In a Rush, baskets stick where they land for every spin and show a new value each spin. No Bags land during a Rush.</p>
      <div class="tw"><table><thead><tr><th>Rush</th><th>Bags</th><th>Spins</th><th>Max baskets</th></tr></thead><tbody>${rushRows}</tbody></table></div>
      <h3>Hank's Big Order</h3>
      <p>Very rarely on a normal spin, the whole board turns to Loaded Fries, Hank throws everything he has and the round pays the max win.</p>
      <h3>The Drive-Thru</h3>
      <p>Prices are multiples of your bet. Extra Salt and Extra Crispy are charged on every spin while they are on. Bag Or Nothing and Mystery Bag each play one real spin: it might be an empty bag that pays nothing.</p>
      <div class="tw"><table><thead><tr><th>Mode</th><th>Price</th><th>RTP</th><th>Max win</th></tr></thead><tbody>${modeRows}</tbody></table></div>
      <p class="small">RTP is the long-run share of bets the game returns, as stated by the server. Any single session can be far above or below it.</p>
      <h3>Win names</h3>
      <div class="tw"><table><tbody>${WIN_TIERS.map(([m, n]) => `<tr><td class="s"><span>${n}</span></td><td>${fmtPlain(m)}x or more</td></tr>`).join('')}<tr><td class="s"><span>Bag Secured</span></td><td>${fmtPlain(G.maxWin)}x, the max win</td></tr></tbody></table></div>
      <h3>The ${G.lines.length} lines</h3>
      <div class="lines">${lineMaps}</div>
      <h3>Good to know</h3>
      <p>Press Spin while a round is playing to speed it up. If you reload in the middle of a round, it picks up where it left off. Every result comes from the game server: this page only shows it.</p>
      <div class="credits"><img src="${Assets.url('assets/logo/hooligans.webp') || ''}" alt="Hooligans Studios"><div>A Hooligans Studios game.<br>Math version ${esc(G.mathVersion)}. Lilita One and Montserrat are used under the SIL Open Font License (see assets/fonts).</div></div>`;
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
const PREVIEW_MAX = {"betID":"PREVIEW","mode":"BON","active":false,"preview":true,"state":{"game":"fries5","mode":"BON","branch":"max","rush":null,"event":null,"total":25000,"capped":true,"spins":[{"kind":"max","grid":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"bags":0,"toss":{"thrown":10,"steps":[{"reel":0,"row":1,"tier":"L","value":75},{"reel":0,"row":1,"bounce":true},{"reel":3,"row":1,"tier":"L","value":75},{"reel":4,"row":2,"tier":"L","value":25},{"reel":2,"row":2,"tier":"L","value":100},{"reel":3,"row":1,"bounce":true},{"reel":4,"row":1,"tier":"L","value":25},{"reel":2,"row":3,"tier":"L","value":75},{"reel":1,"row":2,"tier":"L","value":25},{"reel":4,"row":0,"tier":"L","value":75},{"reel":1,"row":2,"bounce":true},{"reel":0,"row":1,"bounce":true},{"reel":1,"row":0,"tier":"L","value":50},{"reel":4,"row":1,"bounce":true},{"reel":3,"row":3,"tier":"L","value":100}]},"baskets":[{"reel":0,"row":1,"tier":"L","value":75},{"reel":1,"row":0,"tier":"L","value":50},{"reel":1,"row":2,"tier":"L","value":25},{"reel":2,"row":2,"tier":"L","value":100},{"reel":2,"row":3,"tier":"L","value":75},{"reel":3,"row":1,"tier":"L","value":75},{"reel":3,"row":3,"tier":"L","value":100},{"reel":4,"row":0,"tier":"L","value":75},{"reel":4,"row":1,"tier":"L","value":25},{"reel":4,"row":2,"tier":"L","value":25}],"lines":[{"line":0,"symbol":0,"count":5,"pay":2100,"base":12,"mult":175,"cells":[[0,1],[1,1],[2,1],[3,1],[4,1]]},{"line":1,"symbol":0,"count":5,"pay":1800,"base":12,"mult":150,"cells":[[0,2],[1,2],[2,2],[3,2],[4,2]]},{"line":2,"symbol":0,"count":5,"pay":1500,"base":12,"mult":125,"cells":[[0,0],[1,0],[2,0],[3,0],[4,0]]},{"line":3,"symbol":0,"count":5,"pay":2100,"base":12,"mult":175,"cells":[[0,3],[1,3],[2,3],[3,3],[4,3]]},{"line":4,"symbol":0,"count":5,"pay":3000,"base":12,"mult":250,"cells":[[0,0],[1,1],[2,2],[3,1],[4,0]]},{"line":5,"symbol":0,"count":5,"pay":300,"base":12,"mult":25,"cells":[[0,3],[1,2],[2,1],[3,2],[4,3]]},{"line":6,"symbol":0,"count":5,"pay":1800,"base":12,"mult":150,"cells":[[0,1],[1,0],[2,0],[3,0],[4,1]]},{"line":7,"symbol":0,"count":5,"pay":2400,"base":12,"mult":200,"cells":[[0,2],[1,3],[2,3],[3,3],[4,2]]},{"line":8,"symbol":0,"count":5,"pay":2400,"base":12,"mult":200,"cells":[[0,1],[1,2],[2,3],[3,2],[4,1]]},{"line":9,"symbol":0,"count":5,"pay":1200,"base":12,"mult":100,"cells":[[0,2],[1,1],[2,0],[3,1],[4,2]]},{"line":10,"symbol":0,"count":5,"pay":1800,"base":12,"mult":150,"cells":[[0,0],[1,1],[2,1],[3,1],[4,0]]},{"line":11,"symbol":0,"count":5,"pay":1500,"base":12,"mult":125,"cells":[[0,3],[1,2],[2,2],[3,2],[4,3]]},{"line":12,"symbol":0,"count":5,"pay":2100,"base":12,"mult":175,"cells":[[0,1],[1,1],[2,0],[3,1],[4,1]]},{"line":13,"symbol":0,"count":5,"pay":1500,"base":12,"mult":125,"cells":[[0,2],[1,2],[2,3],[3,2],[4,2]]}],"rawPay":25500,"pay":25000,"total":25000,"i":0}]}};

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
  finally { Sfx.stopBeds(); busy = false; Time.slam = false; UI.setBusy(false); Meter.set('0.00'); say(''); setStage(0); toast('That was a preview. Your balance did not change.', 2600); }
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
document.addEventListener('visibilitychange', () => { if (document.hidden) { Sfx.suspend(); return; } if (Sfx.ctx) Sfx.init(); const c = Hank.cur; if (c && c.paused && !STILLS && !Hank.resting) c.play().catch(() => {}); });

function applyArt() {
  const bgFix = { base: 'base', lunch: 'lunch', dinner: 'dinner', late: 'late' };
  document.querySelectorAll('.bg').forEach(b => { const u = Assets.bg(bgFix[b.dataset.bg]); if (u) b.style.backgroundImage = `url("${u}")`; });
  $('buyArt').src = Assets.key('b1-bag');
  const tile = Assets.url('assets/tile/premium.webp'); if (tile) document.documentElement.style.setProperty('--tile', `url("${tile}")`);
}

async function boot() {
  Time.turbo = store.get(TURBO_KEY) === '1';
  // the logo comes first, on its own, so the loading screen is not blank
  const logoEntry = MANIFEST.find(e => e.p === 'assets/logo/hooligans.webp');
  if (logoEntry) $('loaderLogo').src = logoEntry.p + '?v=' + logoEntry.v;
  const plateEntry = MANIFEST.find(e => e.p === 'assets/logo/title-plate.webp');
  if (plateEntry) {   // the title sits on the plate's ribbon, so it waits for the plate
    const lp = $('loaderPlate'), url = `${plateEntry.p}?v=${plateEntry.v}`, im = new Image();
    lp.style.backgroundImage = `url("${url}")`; lp.classList.add('plated');
    im.onload = () => lp.classList.add('ready'); im.onerror = () => lp.classList.remove('plated'); im.src = url;
  }
  const msg = $('loaderMsg'), fill = $('loaderFill');
  // the server calls run beside the art, not after it
  const connect = () => { Server.sid = loadSid(); const p = Promise.all([Server.game(), Server.auth()]); p.catch(() => {}); return p; };
  let connecting = connect();
  const lines = ['Heating the oil...', 'Salting the fries...', 'Stapling the bags...'];
  const fillTo = pct => { fill.style.width = pct.toFixed(1) + '%'; };
  const update = p => { fillTo(p * 90); msg.textContent = lines[Math.min(2, (p * 3) | 0)]; };   // the last 10 percent is Hank
  document.body.classList.toggle('rm', RM);

  const fail = (text, retry) => { msg.textContent = text; const b = $('loaderGo'); b.hidden = false; b.textContent = 'Try Again'; b.onclick = () => { b.hidden = true; retry(); }; };

  const stepAssets = async () => {
    try { await loadAssets(update); }
    catch (e) { return fail('Could not load the kitchen. Check your connection.', stepAssets); }
    fillTo(90); msg.textContent = 'Waking up Hank...';
    applyArt(); Board.init(); await Hank.init(); fillTo(100); stepServer();
  };
  const stepServer = async () => {
    msg.textContent = 'Calling the kitchen...';
    try {
      const [game, a] = await connecting;
      GAME = game;
      UI.config = a.config;
      const saved = +store.get(BET_KEY), levels = a.config.betLevels;
      UI.betI = Math.max(0, levels.indexOf(levels.includes(saved) ? saved : a.config.defaultBetLevel));
      UI.setBalance(a.balance);
      trace('ready', { stills: STILLS, sid: Server.sid });
      msg.textContent = 'Order up.';
      const go = $('loaderGo'); go.hidden = false; go.textContent = 'Open The Kitchen';
      go.onclick = () => { Sfx.init(); Sfx.click(); $('loader').classList.add('gone'); setTimeout(() => $('loader').remove(), 400); begin(a); };
      window.__fries.ready = true;
      loadLateAssets().catch(e => trace('lateClipsError', String(e)));
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

window.__fries = { trace: TRACE, get balance() { return UI.balance; }, get busy() { return busy; }, get stills() { return STILLS; }, get sid() { return Server.sid; }, get armed() { return UI.armed; }, get hank() { return Hank.name; }, get baskets() { return Array.from(Board.baskets.values()).map(b => ({ r: b.r, h: b.h, tier: b.tier, value: b.value })); } };
boot();

})();
