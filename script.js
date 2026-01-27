const translations = {
    en: {
        statText: "1,800+ Members — Collective Pulse",
        heroTitle: "THE HEART <span>OF THE LEVANT.</span>",
        heroSub: "A digital sanctuary where millenia-old Syrian heritage synchronizes with future-state innovation. Join the elite network.",
        enterBtn: "Secure Entry",
        activityTitle: "Dynamic <span>Frequencies.</span>",
        unityTitle: "Sovereignty of Unity",
        protocolTitle: "Core Laws",
        unityEn: "We carry the dream of a Syria that ascends beyond borders—a land of intellectual giants. Together, we are a force of civilizational rebirth.",
        unityAr: "نحمل حلم سوريا التي تتجاوز الحدود. معاً، نحن قوة ولادة حضارية جديدة."
    },
    ar: {
        statText: "أكثر من 1800 عضو — النبض الجماعي",
        heroTitle: "قلب <span>بلاد الشام</span>",
        heroSub: "ملاذ رقمي حيث يتزامن التراث السوري الممتد لآلاف السنين مع ابتكارات المستقبل.",
        enterBtn: "دخول آمن",
        activityTitle: "ترددات <span>ديناميكية.</span>",
        unityTitle: "سيادة الوحدة",
        protocolTitle: "القوانين الجوهرية",
        unityEn: "We carry the dream of a Syria that ascends beyond borders...",
        unityAr: "نحمل حلم سوريا التي تتجاوز الحدود. معاً، نحن قوة ولادة حضارية جديدة."
    }
};

const serverRules = [
    { icon: 'bx-brain', title: 'Intellect', desc: 'Focus on ideas, not personalities.' },
    { icon: 'bx-fingerprint', title: 'Identity', desc: 'Your heritage is your credential.' },
    { icon: 'bx-shield-quarter', title: 'Elite', desc: 'Zero tolerance for low-vibration toxicity.' },
    { icon: 'bx-command', title: 'Order', desc: 'Respect the chain of command and flow.' },
    { icon: 'bx-cube-alt', title: 'Vision', desc: 'Building the digital future of Levant.' },
    { icon: 'bx-pulse', title: 'Vitality', desc: 'Stay active, stay relevant, stay Syrian.' }
];

let currentLang = 'en';

const cursor = document.getElementById('custom-cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        cursorBlur.style.left = e.clientX - 16 + 'px';
        cursorBlur.style.top = e.clientY - 16 + 'px';
    }, 50);
});

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + "%";
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0,0,0,0.8)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

function setTheme(theme) {
    const body = document.getElementById('body-main');
    body.className = `bg-main text-main selection:bg-levant-gold selection:text-black theme-${theme} overflow-x-hidden`;
    localStorage.setItem('selectedTheme', theme);
}

function injectRules() {
    const grid = document.getElementById('rules-grid');
    grid.innerHTML = serverRules.map(rule => `
        <div class="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-levant-gold transition-all duration-500 reveal group">
            <i class='bx ${rule.icon} text-4xl text-levant-gold mb-6 block group-hover:scale-110 transition-transform'></i>
            <h4 class="text-lg font-black uppercase mb-2">${rule.title}</h4>
            <p class="text-xs opacity-40 uppercase tracking-wider">${rule.desc}</p>
        </div>
    `).join('');
    document.querySelectorAll('#rules-grid .reveal').forEach(el => observer.observe(el));
}

function updateContent() {
    const t = translations[currentLang];
    document.getElementById('stat-text').innerText = t.statText;
    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('hero-sub').innerText = t.heroSub;
    document.getElementById('enter-btn').innerText = t.enterBtn;
    document.getElementById('activity-title').innerHTML = t.activityTitle;
    document.getElementById('unity-title').innerText = t.unityTitle;
    document.getElementById('protocol-title').innerText = t.protocolTitle;
    document.getElementById('unity-en').innerText = t.unityEn;
    document.getElementById('unity-ar').innerText = t.unityAr;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        const tip = document.getElementById('quick-focus');
        tip.style.opacity = '1';
        tip.style.transform = 'translateY(0)';
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
        setTimeout(() => { tip.style.opacity = '0'; }, 2000);
    }
});

document.getElementById('easter-egg').addEventListener('click', () => {
    document.body.style.filter = 'hue-rotate(90deg) contrast(1.5)';
    setTimeout(() => document.body.style.filter = 'none', 2000);
});

window.onload = () => {
    setTheme(localStorage.getItem('selectedTheme') || 'dark');
    injectRules();
    updateContent();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};
