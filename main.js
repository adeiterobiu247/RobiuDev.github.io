const WA='2348021102182'; // your WhatsApp number (country code, no +)

const SOCIALS={
  TikTok:'https://www.tiktok.com/search?q=Robiu%20DEV',
  LinkedIn:'https://www.linkedin.com/search/results/people/?keywords=Adeite%20Robiu',
  WhatsApp:'https://wa.me/'+WA,
  GitHub:'https://github.com/adeiterobiu247'
};

// Skill ratings (change the numbers to match your real level)
const SKILLS=[
  ['HTML5',95],['CSS3',96],['JavaScript',87],['PHP',85],
  ['MySQL',88],['React',80],['Graphic Design',98],['Git & GitHub',90]
];
// ======================

const ICONS={
  TikTok:'<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  LinkedIn:'<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  WhatsApp:'<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  GitHub:'<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
};

const pages=[['index.html','Home'],['about.html','About'],['works.html','Works'],['pricing.html','Pricing'],['contact.html','Contact']];
const cur=location.pathname.split('/').pop()||'index.html';

document.body.insertAdjacentHTML('afterbegin',`
<div id="prog"></div>
<div class="blob b1"></div><div class="blob b2"></div><div id="glow"></div>
<header><div class="bar">
<a href="index.html" class="logo">Robiu<span class="grad">Dev</span></a>
<nav class="links" id="links">
${pages.map(p=>`<a href="${p[0]}" class="${p[0]===cur?'on':''}">${p[1]}</a>`).join('')}
<a href="contact.html" class="btn">Hire me</a></nav>
<button class="burger" id="burger" aria-label="Menu"><span></span><span></span></button>
</div></header>`);

const soc=Object.entries(SOCIALS).filter(([,u])=>u)
  .map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener" aria-label="${n}" title="${n}">${ICONS[n]||n}</a>`).join('');

document.body.insertAdjacentHTML('beforeend',`
<footer class="mf"><div class="mf-in">

  <div class="mf-big">
    <small>Have a project in mind?</small>
    <a href="mailto:adeiterobiu247@gmail.com" class="grad">Let's work together →</a>
  </div>

  <div class="mf-grid">
    <div class="mf-brand">
      <a href="index.html" class="logo">Robiu<span class="grad">Dev</span></a>
      <p>A web developer & graphic designer building modern websites and designs that help businesses look serious.</p>
      <div class="mf-soc">${soc}</div>
    </div>

    <div>
      <h4>Explore</h4>
      <ul>${pages.map(p=>`<li><a href="${p[0]}">${p[1]}</a></li>`).join('')}</ul>
    </div>

    <div>
      <h4>Services</h4>
      <ul>
        <li><a href="works.html">Business Websites</a></li>
        <li><a href="works.html">E-commerce Stores</a></li>
        <li><a href="works.html">Web Apps</a></li>
        <li><a href="contact.html">Graphic Design</a></li>
        <li><a href="contact.html">Paystack Integration</a></li>
      </ul>
    </div>

    <div class="mf-ct">
      <h4>Contact</h4>
      <a href="mailto:adeiterobiu247@gmail.com"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><span>adeiterobiu247@gmail.com</span></a>
      <a href="tel:+${WA}"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg><span>08021102182</span></a>
      <div><svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Lagos State, Nigeria</span></div>
    </div>
  </div>

  <div class="mf-bot">
    <span>© ${new Date().getFullYear()} Adeite Robiu. All rights reserved.</span>
    <span>Designed & built by Robiu in Lagos 🇳🇬</span>
    <button class="mf-top" id="toTop" aria-label="Back to top"><svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>
  </div>

</div></footer>
<a class="wa-fab" href="https://wa.me/${WA}?text=${encodeURIComponent('Hi Robiu, I saw your portfolio.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICONS.WhatsApp}</a>`);

document.getElementById('toTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.getElementById('burger').onclick=()=>document.getElementById('links').classList.toggle('open');

// scroll progress line
const prog=document.getElementById('prog');
addEventListener('scroll',()=>{
  const h=document.documentElement;
  prog.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+'%';
},{passive:true});

// cursor glow
const glow=document.getElementById('glow');
addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

// build skill bars with JavaScript
const sk=document.getElementById('skills');
if(sk){
  sk.innerHTML=SKILLS.map(([n,v])=>`
    <div class="skill rv">
      <div class="sk-top"><span>${n}</span><b>0%</b></div>
      <div class="sk-bar"><i data-w="${v}"></i></div>
    </div>`).join('');
  document.querySelectorAll('.skill').forEach(s=>{
    const bar=s.querySelector('i'),num=s.querySelector('b'),to=+bar.dataset.w;
    const so=new IntersectionObserver(([e])=>{
      if(!e.isIntersecting)return;
      bar.style.width=to+'%';
      let n=0;
      const id=setInterval(()=>{n++;num.textContent=n+'%';if(n>=to)clearInterval(id)},1200/to);
      so.disconnect();
    },{threshold:.4});
    so.observe(s);
  });
}

// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});

// typing effect
const t=document.getElementById('typed');
if(t){
  const words=['Web Developer','Graphic Designer','PHP & MySQL Builder','Freelancer'];
  let w=0,c=0,del=false;
  (function tick(){
    const word=words[w];
    t.textContent=word.slice(0,c);
    if(!del&&c===word.length){del=true;return setTimeout(tick,1400)}
    if(del&&c===0){del=false;w=(w+1)%words.length}
    c+=del?-1:1;
    setTimeout(tick,del?40:85);
  })();
}

// counters
document.querySelectorAll('[data-count]').forEach(el=>{
  const co=new IntersectionObserver(([e])=>{
    if(!e.isIntersecting)return;
    const end=+el.dataset.count;let n=0;
    const step=setInterval(()=>{n++;el.textContent=n+(el.dataset.suffix||'');if(n>=end)clearInterval(step)},900/end);
    co.disconnect();
  });co.observe(el);
});

// card tilt
document.querySelectorAll('.card').forEach(c=>{
  c.addEventListener('mousemove',e=>{
    const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    c.style.transform=`perspective(700px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
  });
  c.addEventListener('mouseleave',()=>c.style.transform='');
});

// contact form: send to email, then open WhatsApp with the message
const f=document.getElementById('cform');
if(f){
  f.addEventListener('submit',async e=>{
    e.preventDefault();
    const b=f.querySelector('button'),s=document.getElementById('status');
    const data=Object.fromEntries(new FormData(f));
    b.disabled=true;b.textContent='Sending...';s.className='';s.textContent='';

    let sent=false;
    try{
      const r=await fetch('https://formsubmit.co/ajax/adeiterobiu247@gmail.com',{
        method:'POST',
        headers:{'Content-Type':'application/json',Accept:'application/json'},
        body:JSON.stringify(data)
      });
      const d=await r.json();
      sent=d.success===true||d.success==='true';
    }catch{}

    const msg=`Hi Robiu, my name is ${data.name}.\n\n${data.message}\n\nMy email: ${data.email}`;
    const link=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

    s.className=sent?'ok':'err';
    s.textContent=sent
      ?'Message sent to my email! Opening WhatsApp so we can chat directly... 🙌'
      :'Opening WhatsApp so we can chat directly...';
    f.reset();
    setTimeout(()=>{
      b.disabled=false;b.textContent='Send Message';
      location.href=link;
    },1500);
  });
}
const ROB_AI_URL = "https://robai.site.je";

// Estimator prices in naira. Change them so they match your Pricing page.
const BASE_PRICE = 150000;      // covers up to 3 pages
const FREE_PAGES = 3;
const PRICE_PER_EXTRA_PAGE = 25000;
const RANGE_UPPER_FACTOR = 1.3; // upper end of the range = total x 1.3
/* ======================== */

const naira = (n) => "₦" + Math.round(n).toLocaleString("en-NG");
const roundTo5k = (n) => Math.round(n / 5000) * 5000;

/* ---- Price estimator (pricing.html) ---- */
(function () {
  const root = document.getElementById("estimator");
  if (!root) return;

  const pages = root.querySelector("#x-pages");
  const pagesOut = root.querySelector("#x-pages-out");
  const opts = root.querySelectorAll("input[data-price]");
  const priceOut = root.querySelector("#x-price");

  function calc() {
    const n = parseInt(pages.value, 10);
    pagesOut.textContent = n;

    let total = BASE_PRICE + Math.max(0, n - FREE_PAGES) * PRICE_PER_EXTRA_PAGE;
    opts.forEach((o) => {
      if (o.checked) total += parseInt(o.dataset.price, 10);
    });

    const low = roundTo5k(total);
    const high = roundTo5k(total * RANGE_UPPER_FACTOR);
    priceOut.textContent = `${naira(low)} – ${naira(high)}`;
  }

  pages.addEventListener("input", calc);
  opts.forEach((o) => o.addEventListener("change", calc));
  calc();
})();

/* ---- ROB AI live demo (index.html) ---- */
(function () {
  const frame = document.getElementById("x-demo-frame");
  const launch = document.getElementById("x-demo-launch");
  const openLink = document.getElementById("x-demo-open");
  if (!frame || !launch) return;

  if (openLink) openLink.href = ROB_AI_URL;

  // The iframe only loads when clicked, so your page stays fast.
  launch.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = ROB_AI_URL;
    iframe.title = "ROB AI live demo";
    iframe.allow = "microphone; clipboard-write";
    iframe.loading = "lazy";
    frame.innerHTML = "";
    frame.appendChild(iframe);
  });
})();
/* Light / dark mode toggle for all pages.
   Add this in the <head> of EVERY page:  <script src="theme.js"></script>
   It remembers the visitor's choice and adds a round button at the bottom-left. */
(function () {
  var KEY = "robiu-theme";
  var root = document.documentElement;

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var theme = read() || "dark"; // your site is dark by default
  root.setAttribute("data-theme", theme);

  var css =
    "html{transition:filter .3s ease}" +
    /* Light mode: flip the whole page, then flip pictures back so they look normal */
    'html[data-theme="light"]{filter:invert(1) hue-rotate(180deg)}' +
    'html[data-theme="light"] img,html[data-theme="light"] video,html[data-theme="light"] iframe,html[data-theme="light"] .x-keep{filter:invert(1) hue-rotate(180deg)}' +
    "#theme-toggle{position:fixed;left:16px;bottom:16px;z-index:9999;width:46px;height:46px;border-radius:50%;" +
    "border:1px solid rgba(255,255,255,.25);background:#1b1b2f;color:#fff;font-size:20px;cursor:pointer;" +
    "box-shadow:0 4px 16px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;padding:0}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function addButton() {
    var btn = document.createElement("button");
    btn.id = "theme-toggle";
    btn.type = "button";
    btn.className = "x-keep";

    function paint() {
      var t = root.getAttribute("data-theme");
      btn.textContent = t === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      save(next);
      paint();
    });

    paint();
    document.body.appendChild(btn);
  }

  if (document.body) addButton();
  else document.addEventListener("DOMContentLoaded", addButton);
})();