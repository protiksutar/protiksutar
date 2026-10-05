'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =====================  YOUR DATA (edit here)  ===================== */
const ME = { mail: '', phone: '01828443129', tel: '+8801828443129' };

/* Logos load from the internet (jsDelivr devicon + Simple Icons). If one can't load, a text badge shows instead. */
const DEV = (f, v = 'original') => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${f}/${f}-${v}.svg`;
const SI = s => `https://cdn.simpleicons.org/${s}`;
const CODE_ICON = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#e8431f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="54" height="46" rx="8"/><path d="M5 22h54"/><circle cx="14" cy="15.5" r="1" fill="#e8431f"/><circle cx="21" cy="15.5" r="1" fill="#e8431f"/><path d="M25 32l-7 7 7 7M39 32l7 7-7 7M35 30l-6 18"/></svg>');
const TECH = [
  { n: 'Java', s: DEV('java'), t: 'Jv' }, { n: 'Python', s: DEV('python'), t: 'Py' }, { n: 'C', s: DEV('c'), t: 'C' },
  { n: 'C++', s: DEV('cplusplus'), t: 'C++' }, { n: 'VS Code', s: DEV('vscode'), t: 'VS' }, { n: 'GitHub', s: DEV('github'), t: 'GH' },
  { n: 'HTML', s: DEV('html5'), t: 'H5' }, { n: 'CSS', s: DEV('css3'), t: 'C3' }, { n: 'JavaScript', s: DEV('javascript'), t: 'JS' },
  { n: 'Git', s: DEV('git'), t: 'Git' }, { n: 'Code', s: CODE_ICON, t: '</>' }
];
const AI = [
  { n: 'ChatGPT', s: SI('openai'), t: 'GPT' }, { n: 'Claude', s: SI('claude'), t: 'Cl' }, { n: 'Gemini', s: SI('googlegemini'), t: 'Gem' },
  { n: 'Copilot', s: SI('githubcopilot'), t: 'Cop' }, { n: 'Perplexity', s: SI('perplexity'), t: 'Px' }, { n: 'Hugging Face', s: SI('huggingface'), t: 'HF' }
];
const OFFICE = [
  { n: 'Word', s: SI('microsoftword'), t: 'W', bg: '#185abd', fg: '#fff' }, { n: 'Excel', s: SI('microsoftexcel'), t: 'X', bg: '#107c41', fg: '#fff' },
  { n: 'PowerPoint', s: SI('microsoftpowerpoint'), t: 'P', bg: '#c43e1c', fg: '#fff' }, { n: 'Photoshop', s: DEV('photoshop'), t: 'Ps', bg: '#001e36', fg: '#31a8ff' }
];
const T = n => TECH.find(x => x.n === n);

const SOCIALS = [
  { n: 'LinkedIn', h: '/in/protiksutar', u: 'https://www.linkedin.com/in/protiksutar/', s: DEV('linkedin'), t: 'in' },
  { n: 'GitHub', h: '/protiksutar', u: 'https://github.com/protiksutar', s: DEV('github'), t: 'GH' },
  { n: 'Facebook', h: 'Protik Sutar', u: 'https://www.facebook.com/share/1HuUJhQmEQ/', s: SI('facebook'), t: 'f' },
  { n: 'Instagram', h: '@protik_sutar', u: 'https://www.instagram.com/protik_sutar?igsh=NXZ0aDFxZHZvMGRi', s: SI('instagram'), t: 'ig' },
  { n: 'TikTok', h: 'TikTok profile', u: 'https://www.tiktok.com/@pro..10?_r=1&_t=ZS-94DAAQqDSR3', s: SI('tiktok'), t: 'tt' },
  { n: 'WhatsApp', h: '01828443129', u: 'https://wa.me/8801828443129', s: SI('whatsapp'), t: 'wa' },
  { n: 'Email', h: ME.mail, u: 'mailto:' + ME.mail, t: '@' }
];

const GAMES = [
  { n: 'Free Fire', f: 'freefire', t: 'FF', c: ['#ff8a00', '#e53000'] }, { n: 'Fortnite', f: 'fortnite', t: 'FN', c: ['#7b5cff', '#27c4f4'] },
  { n: 'eFootball', f: 'efootball', t: 'eF', c: ['#00b35a', '#0a6cff'] }, { n: 'PUBG', f: 'pubg', t: 'PUBG', c: ['#f5b301', '#6b4e00'] },
  { n: 'Clash of Clans', f: 'clashofclans', t: 'CoC', c: ['#ffb300', '#c2410c'] }, { n: 'Mobile Legends', f: 'mobilelegends', t: 'ML', c: ['#3b82f6', '#6d28d9'] },
  { n: 'Subway Surfers', f: 'subwaysurfers', t: 'SS', c: ['#22d3ee', '#facc15'] }, { n: 'Roblox', f: 'roblox', t: 'RB', c: ['#ef4444', '#7f1d1d'] }
];

/* Fill in your game details here. Leave '' to show "Add in script.js". */
const GAME_INFO = {
  freefire: { uid: '', ign: '', rank: '', note: '' }, fortnite: { uid: '', ign: '', rank: '', note: '' },
  efootball: { uid: '', ign: '', rank: '', note: '' }, pubg: { uid: '', ign: '', rank: '', note: '' },
  clashofclans: { uid: '', ign: '', rank: '', note: '' }, mobilelegends: { uid: '', ign: '', rank: '', note: '' },
  subwaysurfers: { uid: '', ign: '', rank: '', note: '' }, roblox: { uid: '', ign: '', rank: '', note: '' }
};

/* Certificates: put files in the certificates/ folder (image or PDF) and list them here, e.g.
   { title: 'Python Programming', issuer: 'Coursera', date: '2025', file: 'certificates/python.pdf' } */
const CERTS = [
  {
    title: 'Programming Contest',
    issuer: 'Coursera',
    date: '2024',
    file: 'certificates/programing.jpg'
  },
  {
    title: 'Ideation and Innovation',
    issuer: 'FreeCodeCamp',
    date: '2025',
    file: 'certificates/idea1.jpg'
  },
  {
    title: 'Ideation and Innovation',
    issuer: ' Champion',
    date: '2026',
    file: 'certificates/idea.jpg'
  }
];

const LANGUAGES = [
  { n: 'Bangla', lvl: 'Native', w: 100 }, { n: 'English', lvl: 'Fluent', w: 85 },
  { n: 'Hindi', lvl: 'Fluent', w: 85 }, { n: 'Urdu', lvl: 'Intermediate', w: 60 }
];

const PROJECTS = [
  { id: 'jarvis', t: 'software', ico: '>_', c: ['#ff5a36', '#7c3aed'], name: 'Jarvis AI', tags: [['Python', 'c-py'], ['HTML', 'c-html'], ['CSS', 'c-css'], ['JavaScript', 'c-js']],
    desc: 'Intelligent personal virtual assistant that understands voice commands, opens apps and websites, sets alarms and gives AI-powered responses.',
    points: ['Understands voice commands', 'Opens applications and websites', 'Sets alarms', 'Gives AI-powered responses'] },
  { id: 'smart-stick', t: 'hardware', ico: '((o))', c: ['#0ea5e9', '#6366f1'], name: 'Smart Stick for Blind People', tags: [['Sensors'], ['Microcontroller']],
    desc: 'Uses sensors and a microcontroller for real-time obstacle detection and alerts, making navigation safer for visually impaired people.',
    points: ['Real-time obstacle detection', 'Alerts the user about obstacles', 'Built with sensors and a microcontroller', 'Makes navigation safer and easier'] },
  { id: 'mini-fridge', t: 'hardware', ico: 'H2O', c: ['#06b6d4', '#2563eb'], name: 'Mini Refrigerator with Vending Machine', tags: [['Embedded'], ['Automation']],
    desc: 'Provides chilled drinking water through a vending system, so people can buy water anytime without human help, ideal for hot summers and public places.',
    points: ['Chilled drinking water on demand', 'Works without human help', 'Made for hot summers and public places'] },
  { id: 'billing', t: 'software', ico: '$', c: ['#10b981', '#0f766e'], name: 'Billing System', tags: [['Business'], ['Automation']],
    desc: 'The Billing System Project is a practical and useful application that helps businesses manage billing operations efficiently. By automating calculations and record-keeping, it saves time, reduces errors, and improves overall business performance.',
    points: ['Automates billing calculations', 'Keeps records organized', 'Saves time and reduces errors', 'Improves overall business performance'] },
  { id: 'portfolio', t: 'software', ico: '</>', c: ['#f59e0b', '#ef4444'], name: 'This Portfolio', tags: [['HTML', 'c-html'], ['CSS', 'c-css'], ['JavaScript', 'c-js']],
    desc: 'Hand-coded in three files with glassmorphism styling, a neural-network background, orbiting tech logos and page-by-page navigation.',
    points: ['Three files: HTML, CSS and JavaScript', 'Glassmorphism design with dark and light themes', 'Animated background and page-by-page navigation'] }
];
/* Project details. Edit any text below. Add links like: links: [{ label: 'GitHub', url: 'https://github.com/protiksutar/...' }] */
const DETAILS = {
  jarvis: {
    summary: 'Jarvis AI is a personal virtual assistant built with Python, HTML, CSS and JavaScript. It listens to voice commands, runs them as actions and replies with AI-powered responses.',
    objectives: ['Let users control common tasks hands-free with voice', 'Open applications and websites on command', 'Set alarms by voice', 'Give helpful AI-powered answers'],
    problem: 'Everyday tasks such as opening an app, visiting a website or setting an alarm need repeated typing and clicking, which is slow and not always convenient.',
    solution: 'A voice-driven assistant that turns speech into text, understands the request, runs the matching command and answers back by voice.',
    tech: [['Python', 'c-py'], ['HTML', 'c-html'], ['CSS', 'c-css'], ['JavaScript', 'c-js']],
    arch: ['Voice input', 'Speech recognition', 'NLP', 'Command system', 'Text-to-speech output'],
    future: ['More commands and app integrations', 'Multi-language voice support', 'Better conversation memory', 'Mobile version'],
    links: []
  },
  'smart-stick': {
    summary: 'The Smart Stick is a walking stick with sensors and a microcontroller that detects obstacles in real time and alerts the user.',
    objectives: ['Detect obstacles in real time', 'Alert the user quickly', 'Make walking safer and easier for visually impaired people', 'Keep the design simple and practical'],
    problem: 'Visually impaired people often cannot notice obstacles in their path, which makes walking outdoors risky.',
    solution: 'Sensors measure the distance to nearby objects, and the microcontroller processes the readings and triggers an alert when an obstacle is close.',
    tech: [['Sensors'], ['Microcontroller'], ['Embedded programming']],
    arch: ['Sensors', 'Microcontroller', 'Obstacle check', 'Alert to user'],
    future: ['GPS location sharing', 'Water and pothole detection', 'Voice guidance', 'Battery level indicator'],
    links: []
  },
  'mini-fridge': {
    summary: 'A mini refrigerator combined with a vending system that gives chilled drinking water on demand, without anyone operating it.',
    objectives: ['Provide chilled drinking water at any time', 'Work without human help', 'Suit hot summers and public places', 'Stay simple to use'],
    problem: 'In hot weather and in public places, cold drinking water is not always available, and selling it normally needs a person.',
    solution: 'A refrigerated unit with a vending mechanism: the user buys water and the system dispenses it chilled, automatically.',
    tech: [['Embedded'], ['Automation'], ['Refrigeration']],
    arch: ['User selection and payment', 'Control unit', 'Vending mechanism', 'Chilled water output'],
    future: ['Digital payment support', 'Temperature and water level display', 'Remote monitoring', 'Solar power option'],
    links: []
  },
  billing: {
    summary: 'The Billing System is a practical application that helps businesses manage billing operations efficiently by automating calculations and record-keeping.',
    objectives: ['Automate billing calculations', 'Keep records organized', 'Save time', 'Reduce errors', 'Improve overall business performance'],
    problem: 'Manual billing is slow, easy to get wrong and hard to keep track of, which costs businesses time and money.',
    solution: 'An application that calculates bills automatically and stores every billing record in one place.',
    tech: [['Billing application'], ['Automation']],
    arch: ['User input', 'Billing calculation', 'Record storage', 'Bill and report output'],
    future: ['Sales reports and analytics', 'Barcode scanning', 'Cloud backup', 'Multi-user login'],
    links: []
  },
  portfolio: {
    summary: 'A hand-coded personal portfolio in three files (HTML, CSS and JavaScript) with a glassmorphism design, animated background and a separate page for each section.',
    objectives: ['Present my skills, projects and certificates in one place', 'Show a coding and CSE style through design and animation', 'Work well on desktop and mobile'],
    problem: 'A paper or PDF CV cannot show projects, photos and interaction in a way that is easy to share online.',
    solution: 'A responsive, animated website with a page for every section, a resume download and ways to contact me.',
    tech: [['HTML', 'c-html'], ['CSS', 'c-css'], ['JavaScript', 'c-js']],
    arch: ['Visitor browser', 'index.html', 'style.css', 'script.js (pages and animation)'],
    future: ['Blog section', 'Contact form with a backend', 'Custom domain hosting'],
    links: []
  }
};
PROJECTS.forEach(p => Object.assign(p, DETAILS[p.id]));

/* Project pictures: images/projects/<id>-1.jpg, -2.jpg, -3.jpg (first one is the thumbnail) */
PROJECTS.forEach(p => p.imgs = [1, 2, 3].map(n => `images/projects/${p.id}-${n}`));

/* Gallery: personal photos listed here; project photos come from the projects above. */
const GALLERY = [ { base: 'images/protik', cat: 'personal', cap: 'My Profile' }, 
  //{ base: 'images/gallery/photo1', cat: 'personal', cap: 'Protik' }, 
  { base: 'images/gallery/photo2', cat: 'projects', cap: 'Champion in Iedathon' }, 
  { base: 'images/gallery/photo3', cat: 'projects', cap: 'Drone project' }, 
  { base: 'images/gallery/photo4', cat: 'projects', cap: 'Automatic door unlock System' }, 
  { base: 'images/gallery/photo5', cat: 'projects', cap: 'Mini Airplane Project' }, 
  { base: 'images/gallery/photo6', cat: 'projects', cap: 'Our Project on Newspaper' }, 
  { base: 'images/gallery/photo7', cat: 'projects', cap: 'Smart Stick Project on Newspaper' }, 
  { base: 'images/gallery/photo8', cat: 'projects', cap: 'Helpline app Project' }, 
  { base: 'images/gallery/photo9', cat: 'projects', cap: 'Vacuum cleaner project' },
  { base: 'images/gallery/photo10', cat: 'projects', cap: 'Automatic Street Light Project' },
  { base: 'images/gallery/photo11', cat: 'projects', cap: 'Automatic Street Light' },
  { base: 'images/gallery/photo12', cat: 'projects', cap: 'Automatic Pet food dispenser Project' },
  { base: 'images/gallery/photo14', cat: 'projects', cap: 'Nesh server project' },
  { base: 'images/gallery/photo15', cat: 'projects', cap: 'Nesh Network project' },
  { base: 'images/gallery/photo16', cat: 'projects', cap: 'Automatic Drowing Project' },
  { base: 'images/gallery/photo17', cat: 'projects', cap: 'Ai Assistant' },
  { base: 'images/gallery/photo18', cat: 'projects', cap: 'A self-balancing robot' },
  { base: 'images/gallery/photo19', cat: 'projects', cap: 'Self-balancing robot Project' },
  { base: 'images/gallery/photo20', cat: 'projects', cap: 'Ideathon Champion and runner-up team' },
  { base: 'images/gallery/photo21', cat: 'personal', cap: 'Ideathon Champion team' },
  { base: 'images/gallery/photo22', cat: 'projects', cap: 'Myself in Ideathon Contest' },
  { base: 'images/gallery/photo23', cat: 'projects', cap: 'Red Alert Car Project' },
  { base: 'images/gallery/photo24', cat: 'projects', cap: 'An automatic drip-watering project' },
  { base: 'images/gallery/photo26', cat: 'projects', cap: 'Mini Refrigerator project' },
  { base: 'images/gallery/photo29', cat: 'projects', cap: 'Ball Control Robot' },
  { base: 'images/gallery/photo30', cat: 'projects', cap: 'Smart Stick Project' },
  { base: 'images/gallery/photo32', cat: 'projects', cap: 'Poster of Smart Stick Project' },
  { base: 'images/gallery/photo34', cat: 'projects', cap: 'Automatic pressure project' },
  { base: 'images/gallery/photo35', cat: 'projects', cap: 'An automatic pressure project' },
  { base: 'images/gallery/photo36', cat: 'projects', cap: 'low-cost ventilator project' },
  { base: 'images/gallery/photo37', cat: 'projects', cap: 'An egg incubator project ' },
  { base: 'images/gallery/photo38', cat: 'projects', cap: 'Smart stick project Component' },
  { base: 'images/gallery/photo39', cat: 'personal', cap: 'University Our Semester Boys Group' },
  { base: 'images/gallery/photo43', cat: 'personal', cap: 'Free Fire eSport Invitation' },
  { base: 'images/gallery/photo44', cat: 'personal', cap: 'Play free fire esport' },
  { base: 'images/gallery/photo45', cat: 'personal', cap: 'free fire esport team' },
  { base: 'images/gallery/photo46', cat: 'personal', cap: 'eSport on free fire' },
  { base: 'images/gallery/photo47', cat: 'personal', cap: 'TANDOB-14 free fire team' },
  { base: 'images/gallery/photo52', cat: 'projects', cap: 'Ideathon Champion trophy' },
  ...PROJECTS.flatMap(p => p.imgs.map((base, i) => ({ base, cat: 'projects', cap: `${p.name} ${i + 1}` })) ) ];

/* =====================  TEMPLATES  ===================== */
/* Pictures: use the file name without extension. The site tries .jpg, .jpeg, .png and .webp. */
const pic = (base, alt, fail, extra = '') => `<img src="${base}.jpg" data-base="${base}" data-fail="${fail}" alt="${alt}" loading="lazy" ${extra} onerror="ext(this)">`;
window.ext = img => {
  const E = ['jpg', 'jpeg', 'png', 'webp'], k = (+img.dataset.k || 0) + 1;
  if (k < E.length) { img.dataset.k = k; img.src = img.dataset.base + '.' + E[k]; return; }
  const f = img.dataset.fail;
  if (f === 'fig') img.closest('figure').remove(); else if (f === 'rm') img.remove(); else noimg(img);
};
const chip = ([t, c]) => `<span class="${c || ''}">${t}</span>`;
const sec = (title, inner) => `<section class="sec"><h3 class="title mono">${title}</h3>${inner}</section>`;
const go = (r, label, cls = 'btn') => `<a href="#/${r}" class="${cls}">${label}</a>`;
const lg = (o, cls = '') => `<span class="lg ${cls}${o.s ? '' : ' fail'}" title="${o.n}" style="--fb:${o.bg || '#fff'};--fc:${o.fg || '#14161a'}">${o.s ? `<img src="${o.s}" alt="${o.n}" loading="lazy" onerror="this.parentNode.classList.add('fail');this.remove()">` : ''}<b>${o.t}</b></span>`;

const ORBIT = ['Python', 'Java', 'C++', 'VS Code', 'GitHub', 'C', 'Code', 'JavaScript'].map(T);
const orbit = () => ORBIT.map((o, i) => {
  const a = (i / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
  return `<span class="o-it" style="left:${50 + 50 * Math.cos(a)}%;top:${50 + 50 * Math.sin(a)}%">${lg(o, 'md')}</span>`;
}).join('');

const hero = () => `
<section class="hero">
  <div class="hero-text">
    <h1 class="big"><span class="ln"><i>Hi, I'm</i></span><span class="ln"><i>PROTIK  SUTAR.</i></span><span class="ln"><i>CSE student</i></span></h1>
    <p class="tagline">CODING <em class="star">&#10039;</em> AI <em class="star">&#10039;</em> GAMING</p>
    <p class="mono typed-line"><span id="typed"></span><span class="caret"></span></p>
    <p class="lead">Loves Technology.
      Computer Science & Engineering student passionate about code and loves turning creative ideas into real solutions.
      You'll find me playing video games, which sharpen my strategy, teamwork and quick decision-making.</p>
    <div class="cta">${go('contact', 'Got a project?', 'btn solid')}${go('contact', "Let's talk.", 'btn line')}${go('projects', 'See my work')}</div>
  </div>
  <div class="stage">
    <svg class="asterisk" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round">
      <rect x="6" y="78" width="188" height="44"/><rect x="6" y="78" width="188" height="44" transform="rotate(60 100 100)"/><rect x="6" y="78" width="188" height="44" transform="rotate(120 100 100)"/></g></svg>
    <div class="photo-wrap">
      <img class="photo" src="images/protik.jpg" alt="Photo of Protik Sutar" onerror="noimg(this)">
      <div class="orbit" aria-hidden="true">${orbit()}</div>
    </div>
  </div>
</section>`;

const aboutBody = () => `
<div class="about-top">
  <div class="about-photo reveal"><img src="images/protik.jpg" alt="Photo of Protik Sutar" onerror="noimg(this)"></div>
  <div class="glass card reveal"><h4>Hello, I'm Protik</h4>
    <p>I'm a passionate and creative technology enthusiast from Barishal, Bangladesh, studying CSE at University of Global Village. I like problem solving, innovative ideas and picking up new tools. Outside of code, I love playing video games.</p>
    <div class="stats"><div><b data-count="4">0</b><small>Core languages</small></div><div><b data-count="5">0</b><small>Projects</small></div><div><b data-count="2024">0</b><small>Started BSc</small></div></div>
  </div>
</div>
<pre class="code glass reveal" id="aboutCode"><code></code></pre>`;
const aboutShort = () => `<div class="glass card reveal"><p>Passionate, creative technology enthusiast from Barishal, Bangladesh. I'm studying CSE at University of Global Village and enjoy learning new technologies, solving problems and playing video games.</p><div class="cta">${go('about', 'Read more about me')}</div></div>`;

const tile = o => `<div class="tool">${lg(o, 'md')}${o.n}</div>`;
const marq = () => [...TECH, ...AI].map(o => lg(o, 'md')).join('');
const skillsFull = () => `
<div class="grid three">
  <div class="glass card reveal tilt"><h4>Programming</h4><div class="tools">${['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript'].map(n => tile(T(n))).join('')}</div></div>
  <div class="glass card reveal tilt"><h4>Artificial Intelligence</h4><div class="tools">${AI.slice(0, 4).map(tile).join('')}</div><p class="note">Popular AI tools I follow</p></div>
  <div class="glass card reveal tilt"><h4>Office &amp; Design</h4><div class="tools">${OFFICE.map(tile).join('')}</div><p class="note">Microsoft Office: Expert &middot; Graphic Design</p></div>
  <div class="glass card reveal tilt"><h4>Interests</h4><div class="chips">${['Problem solving', 'Innovation', 'Video games', 'Learning new tech'].map(t => chip([t])).join('')}</div></div>
</div>
<div class="glass marquee reveal" aria-hidden="true"><div class="track">${marq()}${marq()}</div></div>`;
const skillsShort = () => `<div class="glass card reveal"><div class="tools">${['C', 'C++', 'Python', 'HTML'].map(n => tile(T(n))).join('')}</div><div class="chips big">${['Artificial Intelligence', 'Microsoft Office', 'Graphic Design'].map(t => chip([t])).join('')}</div><div class="cta">${go('skills', 'See all skills')}</div></div>`;

const projCard = p => `<a class="glass card proj reveal tilt" href="#/project/${p.id}"><div class="thumb" style="--c1:${p.c[0]};--c2:${p.c[1]}">${pic(p.imgs[0], p.name, 'rm', `onload="this.parentNode.classList.add('ok')"`)}<span class="mono">${p.ico}</span></div><div class="pbody"><h4>${p.name}</h4><p>${p.desc}</p><div class="chips">${p.tags.map(chip).join('')}</div><span class="more mono">View details</span></div></a>`;
const projGrid = (f = 'all') => `<div class="grid three">${PROJECTS.filter(p => f === 'all' || p.t === f).map(projCard).join('')}</div>`;
const projFull = () => `<div class="filters" id="filters"><button class="on" data-f="all">All</button><button data-f="software">Software</button><button data-f="hardware">Hardware</button></div><div id="projWrap">${projGrid()}</div>`;

const eduFull = () => `<div class="timeline">
  <div class="glass card reveal"><span class="mono when">2024 - ongoing</span><h4>BSc in Computer Science &amp; Engineering</h4><p>University of Global Village, Bangladesh</p></div>
  <div class="glass card reveal"><span class="mono when">2021 - 2022</span><h4>Higher Secondary Certificate (Science)</h4><p>Ghoshkathi Mohabiddaloy</p></div></div>`;

const CERT_COLORS = [['#ff5a36', '#7c3aed'], ['#0ea5e9', '#6366f1'], ['#10b981', '#0f766e'], ['#f59e0b', '#ef4444']];
const certCard = (c, i) => {
  const pdf = /\.pdf$/i.test(c.file), [c1, c2] = CERT_COLORS[i % CERT_COLORS.length];
  return `<a class="glass card proj cert reveal tilt" href="${c.file}" data-i="${i}"><div class="thumb" style="--c1:${c1};--c2:${c2}">${pdf ? '' : `<img src="${c.file}" alt="${c.title}" loading="lazy" onload="this.parentNode.classList.add('ok')" onerror="this.remove()">`}<span class="mono">${pdf ? 'PDF' : 'CERT'}</span></div><div class="pbody"><h4>${c.title}</h4><p>${[c.issuer, c.date].filter(Boolean).join(' - ')}</p><span class="more mono">View certificate</span></div></a>`;
};
const certsFull = () => CERTS.length
  ? `<div class="grid three">${CERTS.map(certCard).join('')}</div>`
  : `<div class="glass card reveal"><p>Certificates will appear here. Add them to the CERTS list in script.js and put the files in the certificates/ folder.</p></div>`;
const langsFull = () => `<div class="grid four">${LANGUAGES.map(l => `<div class="glass card lang reveal"><h4>${l.n}</h4><span class="mono lvl">${l.lvl}</span><div class="bar"><i style="--w:${l.w}%"></i></div></div>`).join('')}</div>`;

const gameLogo = g => `<div class="gl" style="--c1:${g.c[0]};--c2:${g.c[1]}">${pic('images/games/' + g.f, g.n, 'rm', `onload="this.parentNode.classList.add('ok')"`)}<span>${g.t}</span></div>`;
const gamesFull = () => `<div class="games">${GAMES.map(g => `<a class="game glass reveal" href="#/game/${g.f}">${gameLogo(g)}<span class="gname">${g.n}</span></a>`).join('')}</div>`;
const gamePage = id => {
  const k = GAMES.findIndex(x => x.f === id), g = GAMES[k];
  if (!g) return sec('games/', gamesFull());
  const info = GAME_INFO[g.f] || {}, nx = GAMES[(k + 1) % GAMES.length];
  const row = (l, v) => `<li><span>${l}</span>${v ? `<b>${v}</b>` : '<em>Add in script.js</em>'}</li>`;
  const shotsHtml = [['-id', 'Game ID screenshot'], ['-2', 'Screenshot']].map(([suf, cap]) => `<figure class="shot glass reveal" tabindex="0">${pic('images/games/' + g.f + suf, g.n + ' ' + cap, 'ph')}<figcaption class="mono">${g.n} - ${cap}</figcaption></figure>`).join('');
  return `<section class="sec"><a href="#/games" class="back mono">&larr; All games</a>
  <div class="gd-head">${gameLogo(g)}<div><h2 class="pd-title">${g.n}</h2><p class="pd-desc">${info.note || 'My game ID and profile details.'}</p></div></div>
  <ul class="gd-info glass reveal">${row('Game ID', info.uid)}${row('In-game name', info.ign)}${row('Rank / level', info.rank)}</ul>
  <h3 class="title mono">screenshots/</h3><div class="shots pshots gshots">${shotsHtml}</div>
  <div class="cta">${go('games', 'All games', 'btn line')}${go('game/' + nx.f, 'Next: ' + nx.n, 'btn solid')}</div></section>`;
};

const contactFull = (compact = false) => `
<div class="grid two">
  <div class="glass card reveal"><h4>Let's build something</h4>
    <ul class="info">
      <li><span>Email</span><a href="mailto:${ME.mail}">${ME.mail}</a></li>
      <li><span>Phone / WhatsApp</span><a href="tel:${ME.tel}">${ME.phone}</a></li>
      <li><span>Location</span>Barishal 8200, Bangladesh</li>
    </ul><button class="btn" id="copy">Copy email</button></div>
  <div class="glass card reveal"><h4>Send a message</h4>
    <div class="form"><input id="fName" placeholder="Your name" autocomplete="name"><input id="fMail" type="email" placeholder="Your email" autocomplete="email">
    <textarea id="fMsg" rows="4" placeholder="Your message"></textarea><button class="btn primary" id="send">Send message</button><p class="status" id="status" role="status"></p></div></div>
</div>
${compact
  ? `<div class="socs reveal">${SOCIALS.map(s => `<a href="${s.u}" ${s.u.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} aria-label="${s.n}" title="${s.n}">${lg(s)}</a>`).join('')}</div>`
  : `<div class="socgrid">${SOCIALS.map(s => `<a class="socbtn glass reveal" href="${s.u}" ${s.u.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${lg(s, 'sm')}<span>${s.n}<small>${s.h}</small></span></a>`).join('')}</div>`}`;

const shots = (f = 'all') => `<div class="shots">${GALLERY.filter(g => f === 'all' || g.cat === f).map(g => `<figure class="shot glass reveal" tabindex="0">${pic(g.base, g.cap, g.cat === 'projects' ? 'fig' : 'ph')}<figcaption class="mono">${g.cap}</figcaption></figure>`).join('')}</div>`;
const galleryFull = () => `<div class="filters" id="gFilters"><button class="on" data-f="all">All</button><button data-f="personal">Personal</button><button data-f="projects">Projects</button></div><div id="gWrap">${shots()}</div><p class="note mono">Project photos appear here after you add them to images/projects/.</p>`;

const dsec = (t, inner, cls = '') => `<div class="glass card dsec reveal ${cls}"><h4>${t}</h4>${inner}</div>`;
const dlist = (arr, cls = '') => `<ul class="dlist ${cls}">${(arr || []).map(x => `<li>${x}</li>`).join('')}</ul>`;
const projectPage = id => {
  const k = PROJECTS.findIndex(x => x.id === id), p = PROJECTS[k];
  if (!p) return sec('projects/', projFull());
  const nx = PROJECTS[(k + 1) % PROJECTS.length];
  return `<section class="sec"><a href="#/projects" class="back mono">&larr; All projects</a>
  <h2 class="pd-title">${p.name}</h2><div class="chips">${p.tags.map(chip).join('')}</div>
  <p class="pd-desc">${p.desc}</p>
  <ul class="points">${p.points.map(x => `<li class="glass reveal">${x}</li>`).join('')}</ul>
  <h3 class="title mono">images/</h3>
  <div class="shots pshots">${p.imgs.map((src, i) => `<figure class="shot glass reveal${i === 0 ? ' wide' : ''}" tabindex="0">${pic(src, p.name + ' ' + (i + 1), 'ph')}<figcaption class="mono">${p.name} ${i + 1}</figcaption></figure>`).join('')}</div>
  <h3 class="title mono">details/</h3>
  <div class="pd-more">
    ${dsec('Short summary', `<p>${p.summary}</p>`)}
    ${dsec('Objectives', dlist(p.objectives))}
    ${dsec('Problem statement', `<p>${p.problem}</p>`)}
    ${dsec('Proposed solution', `<p>${p.solution}</p>`)}
    ${dsec('Technologies used', `<div class="chips big">${p.tech.map(chip).join('')}</div>`)}
    ${dsec('Future enhancements', dlist(p.future, 'ideas'))}
    ${dsec('System architecture', `<div class="flow">${p.arch.map((a, i) => `<span class="step"><small class="mono">${i + 1}</small>${a}</span>`).join('')}</div>`, 'wide')}
    ${dsec('Project links', p.links && p.links.length ? `<div class="cta">${p.links.map(l => `<a class="btn solid" href="${l.url}" target="_blank" rel="noopener">${l.label} &#8599;</a>`).join('')}</div>` : '<p class="muted-note">Project link coming soon.</p>', 'wide')}
  </div>
  <div class="cta">${go('projects', 'All projects', 'btn line')}${go('project/' + nx.id, 'Next: ' + nx.name, 'btn solid')}</div></section>`;
};

const RESUME = 'resume/Protik_Sutar_Resume.pdf';
const resumeFull = () => `
<div class="resume-bar reveal">
  <a class="btn primary" href="${RESUME}" download="Protik_Sutar_Resume.pdf">Download resume</a>
  <a class="btn line" href="${RESUME}" target="_blank" rel="noopener">Open in new tab</a>
</div>
<div class="glass pdf-wrap reveal">
  <object data="${RESUME}#view=FitH" type="application/pdf" class="pdf-frame" aria-label="Resume PDF">
    <div class="pdf-fallback"><p>Your browser can't show the PDF here.</p><a class="btn primary" href="${RESUME}" target="_blank" rel="noopener">Open resume</a></div>
  </object>
</div>`;

const PAGES = {
  home: () => hero() + sec('about.py', aboutShort()) + sec('skills.json', skillsShort()) + sec('projects/', projGrid()) + sec('contact.sh', contactFull(true)),
  about: () => sec('about.py', aboutBody()),
  skills: () => sec('skills.json', skillsFull()) + sec('languages.json', langsFull()),
  projects: () => sec('projects/', projFull()),
  project: projectPage,
  education: () => sec('education.log', eduFull()) + sec('certifications/', certsFull()),
  games: () => sec('games/', gamesFull()),
  game: gamePage,
  gallery: () => sec('gallery/', galleryFull()),
  resume: () => sec('resume.pdf', resumeFull()),
  contact: () => sec('contact.sh', contactFull())
};

window.noimg = img => {
  const d = document.createElement('div'); d.className = 'ph mono';
  d.innerHTML = img.classList.contains('photo') ? 'Add images/protik.jpg' : `Add<br>${img.dataset.base ? img.dataset.base + '.jpg' : img.getAttribute('src')}`;
  img.replaceWith(d);
};

/* =====================  ROUTER  ===================== */
const app = $('#app');
let typeToken = 0;
function route() {
  const [r, arg] = (location.hash.replace('#/', '') || 'home').split('/'), page = PAGES[r] ? r : 'home';
  app.innerHTML = PAGES[page](arg);
  app.classList.remove('enter'); void app.offsetWidth; app.classList.add('enter');
  $$('nav a').forEach(a => a.classList.toggle('on', a.dataset.r === (page === 'project' ? 'projects' : page === 'game' ? 'games' : page)));
  $('#menu').classList.remove('open');
  document.title = (page === 'home' ? 'Protik Sutar' : page[0].toUpperCase() + page.slice(1) + ' | Protik Sutar');
  
  scrollTo(0, 0);
  initPage();
}
addEventListener('hashchange', route);
function initPage() {
  $$('.reveal', app).forEach((el, i) => { el.style.transitionDelay = (i % 3) * 90 + 'ms'; io.observe(el); });
  $$('.tilt', app).forEach(tilt);
  if ($('#typed')) typing();
  if ($('#aboutCode')) aboutCode();
}

/* =====================  EFFECTS  ===================== */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in'); io.unobserve(e.target);
  $$('[data-count]', e.target).forEach(countUp);
}), { threshold: .12 });
function countUp(el) {
  const to = +el.dataset.count, t0 = performance.now();
  const f = t => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f);
}
function tilt(card) {
  card.addEventListener('pointermove', e => {
    if (reduce || e.pointerType === 'touch') return;
    const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  });
  card.addEventListener('pointerleave', () => card.style.transform = '');
}
function typing() {
  const roles = ['Computer Science & Engineering Student', 'Problem Solver', 'AI Enthusiast', 'Creative Technologist', 'Gamer'];
  const el = $('#typed'), tok = ++typeToken; let r = 0, c = 0, del = false;
  if (reduce) { el.textContent = roles[0]; return; }
  const tick = () => {
    if (tok !== typeToken || !el.isConnected) return;
    const w = roles[r]; el.textContent = w.slice(0, c);
    if (!del && c === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
    c += del ? -1 : 1; setTimeout(tick, del ? 28 : 65);
  };
  tick();
}
function aboutCode() {
  const src =
`<span class="k">class</span> <span class="f">Developer</span>:
    name = <span class="s">"Protik Sutar"</span>
    degree = <span class="s">"BSc in CSE"</span>
    university = <span class="s">"University of Global Village"</span>
    location = <span class="s">"Barishal, Bangladesh"</span>
    languages = [<span class="s">"C"</span>, <span class="s">"C++"</span>, <span class="s">"Python"</span>, <span class="s">"HTML"</span>]
    loves = [<span class="s">"AI"</span>, <span class="s">"Problem solving"</span>, <span class="s">"Video games"</span>]

    <span class="k">def</span> <span class="f">learn</span>(self):
        <span class="k">while</span> <span class="k">True</span>:
            self.build(<span class="s">"something new"</span>)`;
  const code = $('code', $('#aboutCode'));
  if (reduce) { code.innerHTML = src; return; }
  let i = 0;
  const step = () => {
    if (!code.isConnected) return;
    if (src[i] === '<') i = src.indexOf('>', i) + 1; else i++;
    code.innerHTML = src.slice(0, i) + (i < src.length ? '<span class="caret"></span>' : '');
    if (i < src.length) setTimeout(step, 14);
  };
  step();
}

/* neural-network background: drifting nodes that link up and react to the mouse */
(function network() {
  const cv = $('#net'), ctx = cv.getContext('2d'); let w, h, pts = [], mx = -999, my = -999;
  const setup = () => {
    w = cv.width = innerWidth; h = cv.height = innerHeight;
    pts = Array.from({ length: Math.min(80, Math.floor(w * h / 18000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5 }));
  };
  setup(); addEventListener('resize', setup);
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; });
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const light = document.documentElement.dataset.theme === 'light', rgb = light ? '232,67,31' : '255,138,90';
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
      const dm = Math.hypot(p.x - mx, p.y - my);
      if (dm < 140) { p.x += (p.x - mx) * .01; p.y += (p.y - my) * .01; }
      ctx.fillStyle = `rgba(${rgb},.7)`; ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 7); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) { ctx.strokeStyle = `rgba(${rgb},${(1 - d / 130) * .28})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
      if (dm < 160) { ctx.strokeStyle = `rgba(${rgb},${(1 - dm / 160) * .5})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my); ctx.stroke(); }
    });
    requestAnimationFrame(draw);
  };
  if (!reduce) draw();
})();

/* floating text background (names only, no logos) with mouse parallax */
(function floaters() {
  const box = $('#floaters'), words = ['Java', 'Python', 'C', 'C++', 'VS Code', 'GitHub', '</>', 'AI', 'HTML', 'CSS', 'JavaScript', 'Git', '{ }', 'ChatGPT', 'Claude', 'Gemini', '#include', 'print()'];
  words.forEach((w, i) => {
    const d = document.createElement('div'); d.className = 'bgl';
    d.style.left = (3 + (i * 61) % 88) + '%'; d.style.top = (6 + (i * 29) % 84) + '%';
    d.style.setProperty('--p', (i % 4) + 1); d.style.setProperty('--d', (4 + (i % 5)) + 's');
    d.innerHTML = `<span class="bt" style="--fs:${1 + (i % 3) * .35}rem;animation-delay:${-i * .7}s">${w}</span>`; box.appendChild(d);
  });
  addEventListener('pointermove', e => { box.style.setProperty('--mx', e.clientX / innerWidth - .5); box.style.setProperty('--my', e.clientY / innerHeight - .5); });
})();

/* =====================  INTERACTIONS  ===================== */
addEventListener('scroll', () => {
  const h = document.documentElement;
  $('#progress').style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + '%';
  $('#top').classList.toggle('show', h.scrollTop > 600);
}, { passive: true });
$('#top').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
addEventListener('pointermove', e => { const g = $('#glow'); g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; });

const root = document.documentElement;
try { const s = localStorage.getItem('theme'); if (s) root.dataset.theme = s; } catch (_) {}
$('#theme').onclick = () => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {} };
$('#burger').onclick = () => $('#menu').classList.toggle('open');

let tt;
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2200); }

let lbList = [], lbIdx = 0;
function lbShow() {
  const g = lbList[lbIdx];
  $('#lbImg').innerHTML = /\.pdf($|[?#])/i.test(g.src)
    ? `<object data="${g.src}#view=FitH" type="application/pdf" class="lb-pdf"><a class="btn primary" href="${g.src}" target="_blank" rel="noopener">Open PDF</a></object>`
    : `<img src="${g.src}" alt="${g.cap}" onerror="noimg(this)">`;
  $('#lbCap').innerHTML = g.cap + (/\.pdf($|[?#])/i.test(g.src) ? ` &middot; <a href="${g.src}" target="_blank" rel="noopener">open in new tab</a>` : '');
}
const lbOpen = (list, i) => { lbList = list; lbIdx = i; lbShow(); $('#lb').hidden = false; document.body.style.overflow = 'hidden'; };
function openShot(shot) {
  const imgs = $$('.shot img', shot.closest('.shots')), i = imgs.indexOf($('img', shot));
  if (i > -1) lbOpen(imgs.map(m => ({ src: m.getAttribute('src'), cap: m.alt })), i);
}
const lbClose = () => { $('#lb').hidden = true; document.body.style.overflow = ''; };
const lbMove = d => { lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbShow(); };
$('#lbX').onclick = lbClose; $('#lbP').onclick = () => lbMove(-1); $('#lbN').onclick = () => lbMove(1);
$('#lb').addEventListener('click', e => { if (e.target.id === 'lb') lbClose(); });
addEventListener('keydown', e => { if ($('#lb').hidden) return; if (e.key === 'Escape') lbClose(); if (e.key === 'ArrowLeft') lbMove(-1); if (e.key === 'ArrowRight') lbMove(1); });

app.addEventListener('click', async e => {
  const fb = e.target.closest('#filters button, #gFilters button');
  if (fb) {
    const bar = fb.parentElement; $$('button', bar).forEach(x => x.classList.toggle('on', x === fb));
    if (bar.id === 'filters') $('#projWrap').innerHTML = projGrid(fb.dataset.f); else $('#gWrap').innerHTML = shots(fb.dataset.f);
    $$('#projWrap .tilt').forEach(tilt); $$('#projWrap .reveal, #gWrap .reveal').forEach(el => io.observe(el));
    return;
  }
  const ct = e.target.closest('.cert'); if (ct) { e.preventDefault(); return lbOpen(CERTS.map(c => ({ src: c.file, cap: c.title })), +ct.dataset.i); }
  const shot = e.target.closest('.shot'); if (shot) return openShot(shot);
  if (e.target.id === 'copy') { try { await navigator.clipboard.writeText(ME.mail); toast('Email copied'); } catch (_) { toast('Copy failed. Select the email and copy it.'); } }
  if (e.target.id === 'send') {
    const n = $('#fName').value.trim(), m = $('#fMail').value.trim(), msg = $('#fMsg').value.trim(), st = $('#status');
    st.classList.remove('err');
    if (!n || !/^\S+@\S+\.\S+$/.test(m) || msg.length < 5) { st.classList.add('err'); st.textContent = 'Enter your name, a valid email and a message.'; return; }
    location.href = `mailto:${ME.mail}?subject=${encodeURIComponent('Portfolio message from ' + n)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + n + ' (' + m + ')')}`;
    st.textContent = 'Opening your email app...'; toast('Message ready to send');
  }
});
app.addEventListener('keydown', e => { const s = e.target.closest('.shot'); if (s && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openShot(s); } });

$('#year').textContent = new Date().getFullYear();
route();
