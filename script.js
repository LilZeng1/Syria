const translations = {
    en: {
        statText: "1,800+ Members — Just Vibes",
        heroTitle: "THE HEART <span>OF THE LEVANT.</span>",
        heroSub: "Where ancient Syrian soul meets future chaos. No suits, no stiffness. Just us, the heritage, and the digital grind. Come hang out.",
        enterBtn: "HOP IN DISCORD",
        activityTitle: "Dynamic <span>Frequencies.</span>",
        unityTitle: "Sovereignty of Unity",
        protocolTitle: "House Rules",
        unityEn: "We are the digital extension of a land that never dies. Dreamers, creators, and rebels building a new legacy.",
        unityAr: "نحمل حلم سوريا اللي ما بتوقف عند حدود. نحنا جيل بيصنع مستقبل جديد، بروح قديمة وأصيلة."
    },
    ar: {
        statText: "أكثر من 1800 عضو — النبض شغال",
        heroTitle: "قلب <span>بلاد الشام</span>",
        heroSub: "المكان اللي بتلتقي فيه روح الشام القديمة مع جنون التكنولوجيا. بلا رسميات وبلا تعقيد.. مكانك محجوز بيناتنا.",
        enterBtn: "يلا ع الديسكورد",
        activityTitle: "ترددات <span>حية.</span>",
        unityTitle: "وحدة الحال",
        protocolTitle: "قوانين البيت",
        unityEn: "We are the digital extension of a land that never dies. Dreamers, creators, and rebels building a new legacy.",
        unityAr: "نحمل حلم سوريا اللي ما بتوقف عند حدود. نحنا جيل بيصنع مستقبل جديد، بروح قديمة وأصيلة."
    }
};

const serverRules = [
    { icon: 'bx-brain', title: 'Intellect', desc: 'Ideas over ego. Keep it sharp.' },
    { icon: 'bx-fingerprint', title: 'Identity', desc: 'Be real. Fake vibes get checked.' },
    { icon: 'bx-shield-quarter', title: 'Security', desc: 'We protect our own. Zero drama.' },
    { icon: 'bx-command', title: 'Protocol', desc: 'Respect the flow. Don\'t break the loop.' },
    { icon: 'bx-cube-alt', title: 'Metaverse', desc: 'Building the virtual Levant block by block.' },
    { icon: 'bx-pulse', title: 'Vitality', desc: 'Stay active. Lurkers don\'t make history.' }
];

let currentLang = 'en';
let konamiCode = [];
const secretCode = "matrix";

const cursor = document.getElementById('custom-cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    gsap.to(cursorBlur, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.5,
        ease: "power2.out"
    });
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

    if (theme === 'matrix') {
        document.getElementById('matrix-overlay').classList.remove('hidden');
    } else {
        document.getElementById('matrix-overlay').classList.add('hidden');
    }
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

function updateContent(animate = true) {
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
        if(animate) {
            gsap.to(el, {
                opacity: 0, y: 10, duration: 0.2, onComplete: () => {
                    el.innerText = text;
                    gsap.to(el, { opacity: 1, y: 0, duration: 0.3 });
                }
            });
        } else {
            el.innerText = text;
        }
    });

    const htmlTitles = [
        ['hero-title', t.heroTitle],
        ['activity-title', t.activityTitle]
    ];

    htmlTitles.forEach(([id, html]) => {
        const el = document.getElementById(id);
        if(animate) {
            gsap.to(el, {
                opacity: 0, duration: 0.2, onComplete: () => {
                    el.innerHTML = html;
                    gsap.to(el, { opacity: 1, duration: 0.3 });
                }
            });
        } else {
            el.innerHTML = html;
        }
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
    updateContent(true);
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        const tip = document.getElementById('quick-focus');
        gsap.to(tip, { opacity: 1, y: 0, duration: 0.5 });
        gsap.to(".reveal", { opacity: 1, y: 0, duration: 1, stagger: 0.1 });
        setTimeout(() => gsap.to(tip, { opacity: 0, y: 20, duration: 0.5 }), 3000);
    }

    konamiCode.push(e.key.toLowerCase());
    if (konamiCode.length > secretCode.length) konamiCode.shift();
    if (konamiCode.join('') === secretCode) {
        setTheme('matrix');
        const tip = document.getElementById('quick-focus');
        tip.innerHTML = '<span class="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> MATRIX LOADED';
        gsap.to(tip, { opacity: 1, y: 0, duration: 0.5 });
    }
});

document.getElementById('authenticity-card').addEventListener('click', (event) => {
    gsap.to('#authenticity-card', {
        rotation: 360,
        duration: 0.8,
        ease: "back.out(1.7)",
        onComplete: () => { gsap.set('#authenticity-card', { rotation: 0 }); }
    });

    for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.className = 'fixed w-2 h-2 bg-levant-gold rounded-full z-[9999] pointer-events-none';
        p.style.left = event.clientX + 'px';
        p.style.top = event.clientY + 'px';
        document.body.appendChild(p);
        gsap.to(p, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            opacity: 0,
            duration: 1,
            onComplete: () => p.remove()
        });
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
    updateContent(false);
    
    gsap.to(".hero-content > *", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.1
    });
};
