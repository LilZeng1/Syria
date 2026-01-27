const translations = {
    en: {
        statText: "1,800+ Members — Collective Pulse",
        heroTitle: "THE HEART <span>OF THE LEVANT.</span>",
        heroSub: "A sovereign digital sanctuary where millenia-old Syrian heritage synchronizes with future-state innovation. Join the elite network.",
        enterBtn: "Establish Connection",
        activityTitle: "Dynamic <span>Frequencies.</span>",
        unityTitle: "Sovereignty of Unity",
        protocolTitle: "Core Laws",
        unityEn: "We carry the dream of a Syria that ascends beyond borders—a land of intellectual giants. Together, we are a force of civilizational rebirth.",
        unityAr: "نحمل حلم سوريا التي تتجاوز الحدود. معاً، نحن قوة ولادة حضارية جديدة."
    },
    ar: {
        statText: "أكثر من 1800 عضو — النبض الجماعي",
        heroTitle: "قلب <span>بلاد الشام</span>",
        heroSub: "ملاذ رقمي سيادي حيث يتزامن التراث السوري الممتد لآلاف السنين مع ابتكارات المستقبل. انضم إلى النخبة.",
        enterBtn: "إنشاء اتصال",
        activityTitle: "ترددات <span>ديناميكية.</span>",
        unityTitle: "سيادة الوحدة",
        protocolTitle: "القوانين الجوهرية",
        unityEn: "We carry the dream of a Syria that ascends beyond borders—a land of intellectual giants.",
        unityAr: "نحمل حلم سوريا التي تتجاوز الحدود. معاً، نحن قوة ولادة حضارية جديدة."
    }
};

const serverRules = [
    { icon: 'bx-brain', title: 'Intellect', desc: 'Prioritize abstract ideas over hollow personalities.' },
    { icon: 'bx-fingerprint', title: 'Identity', desc: 'Your bloodline is your digital signature.' },
    { icon: 'bx-shield-quarter', title: 'Security', desc: 'Zero tolerance for low-vibration subversion.' },
    { icon: 'bx-command', title: 'Protocol', desc: 'Uphold the hierarchy and flow of information.' },
    { icon: 'bx-cube-alt', title: 'Metaverse', desc: 'Constructing the digital Levant architecture.' },
    { icon: 'bx-pulse', title: 'Vitality', desc: 'Constant presence. Eternal contribution.' }
];

let currentLang = 'en';

const cursor = document.getElementById('custom-cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(cursorBlur, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3 });
});

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + "%";
    
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black/80', 'backdrop-blur-2xl', 'py-2');
    } else {
        nav.classList.remove('bg-black/80', 'backdrop-blur-2xl', 'py-2');
    }
});

function setTheme(theme) {
    const body = document.getElementById('body-main');
    body.className = `bg-main text-main selection:bg-levant-gold selection:text-black theme-${theme} overflow-x-hidden`;
    localStorage.setItem('selectedTheme', theme);
    
    gsap.fromTo("body", { opacity: 0.8 }, { opacity: 1, duration: 1 });
}

function injectRules() {
    const grid = document.getElementById('rules-grid');
    grid.innerHTML = serverRules.map((rule, index) => `
        <div class="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-levant-gold/50 transition-all duration-700 reveal group hover:bg-white/[0.08]" data-index="${index}">
            <div class="w-16 h-16 rounded-2xl bg-levant-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-levant-gold transition-all duration-500">
                <i class='bx ${rule.icon} text-4xl text-levant-gold group-hover:text-black'></i>
            </div>
            <h4 class="text-xl font-black uppercase mb-3 tracking-tighter">${rule.title}</h4>
            <p class="text-xs opacity-40 uppercase tracking-[0.1em] font-bold leading-relaxed">${rule.desc}</p>
        </div>
    `).join('');
    
    initScrollAnimations();
}

function updateContent() {
    const t = translations[currentLang];
    const elements = [
        ['stat-text', t.statText],
        ['hero-sub', t.heroSub],
        ['enter-btn', t.enterBtn],
        ['unity-title', t.unityTitle],
        ['protocol-title', t.protocolTitle],
        ['unity-en', t.unityEn],
        ['unity-ar', t.unityAr]
    ];
    
    elements.forEach(([id, text]) => {
        const el = document.getElementById(id);
        gsap.to(el, { opacity: 0, y: 10, duration: 0.3, onComplete: () => {
            el.innerText = text;
            gsap.to(el, { opacity: 1, y: 0, duration: 0.5 });
        }});
    });
    
    const htmlTitles = [
        ['hero-title', t.heroTitle],
        ['activity-title', t.activityTitle]
    ];
    
    htmlTitles.forEach(([id, html]) => {
        const el = document.getElementById(id);
        gsap.to(el, { opacity: 0, duration: 0.3, onComplete: () => {
            el.innerHTML = html;
            gsap.to(el, { opacity: 1, duration: 0.5 });
        }});
    });
}

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    document.querySelectorAll('.reveal').forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out"
        });
    });
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        const tip = document.getElementById('quick-focus');
        gsap.to(tip, { opacity: 1, y: 0, duration: 0.5 });
        gsap.to(".reveal", { opacity: 1, y: 0, duration: 1, stagger: 0.1 });
        setTimeout(() => gsap.to(tip, { opacity: 0, y: 20, duration: 0.5 }), 3000);
    }
});

document.getElementById('easter-egg').addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.to("body", { filter: "hue-rotate(180deg) invert(1)", duration: 0.5 })
      .to("body", { filter: "hue-rotate(0deg) invert(0)", duration: 1, delay: 1 });
});

window.onload = () => {
    setTheme(localStorage.getItem('selectedTheme') || 'dark');
    injectRules();
    updateContent();
    
    gsap.from(".hero-content > *", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out"
    });
};
