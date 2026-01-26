const translations = {
    en: {
        statText: "1,800+ Members — Collective Pulse",
        heroTitle: "THE HEART <br> <span>OF THE LEVANT.</span>",
        heroSub: "A digital sanctuary where millenia-old Syrian heritage synchronizes with future-state innovation. Join the elite network of the modern Levant.",
        enterBtn: "Secure Entry",
        activityTitle: "Dynamic <br> <span class='text-levant-gold italic'>Frequencies.</span>",
        unityTitle: "The Sovereignty of Unity",
        protocolTitle: "Core Laws",
        unityEn: "We carry the dream of a Syria that ascends beyond borders—a land of intellectual giants and cultural titans. This vision belongs to the new generation. Together, we are no longer isolated; we are a force of civilizational rebirth. Long live the Levant.",
        unityAr: "نحمل حلم سوريا التي تتجاوز الحدود - أرض العمالقة الفكريين وجبابرة الثقافة. هذا الطموح ملك للجيل الجديد. معاً، لم نعد معزولين؛ نحن قوة ولادة حضارية جديدة. عاشت سوريا، مهد الحضارات."
    },
    ar: {
        statText: "أكثر من 1800 عضو — النبض الجماعي",
        heroTitle: "قلب <br> <span>بلاد الشام</span>",
        heroSub: "ملاذ رقمي حيث يتزامن التراث السوري الممتد لآلاف السنين مع ابتكارات المستقبل. انضم إلى الشبكة النخبوية للشام الحديث.",
        enterBtn: "دخول آمن",
        activityTitle: "ترددات <br> <span class='text-levant-gold italic'>ديناميكية.</span>",
        unityTitle: "سيادة الوحدة",
        protocolTitle: "القوانين الجوهرية",
        unityEn: "We carry the dream of a Syria that ascends beyond borders...",
        unityAr: "نحمل حلم سوريا التي تتجاوز الحدود - أرض العمالقة الفكريين وجبابرة الثقافة. هذا الطموح ملك للجيل الجديد. معاً، لم نعد معزولين؛ نحن قوة ولادة حضارية جديدة. عاشت سوريا، مهد الحضارات."
    }
};

const serverRules = [
    { icon: 'bx-heart', title: 'Intellect', desc: 'Focus on ideas, not personalities. We prioritize intellectual growth.' },
    { icon: 'bx-lock-alt', title: 'Encryption', desc: 'Privacy is absolute. What happens in the Levant, stays in the Levant.' },
    { icon: 'bx-shield-x', title: 'Sovereignty', desc: 'Zero tolerance for toxicity. We maintain a high-vibration environment.' },
    { icon: 'bx-block', title: 'Safety', desc: 'Strict prohibition of gore or harmful content. A safe haven for all.' },
    { icon: 'bx-link-external', title: 'Integrity', desc: 'Verify before you share. No misinformation or suspicious links.' },
    { icon: 'bx-bell-off', title: 'Focus', desc: 'Respect the flow. No spamming or unnecessary interruptions.' }
];

let currentLang = 'en';
const progressBar = document.querySelector('.progress-bar');
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    if (winScroll > 50) {
        nav.classList.add('py-2', 'shadow-2xl');
        nav.classList.remove('h-24');
    } else {
        nav.classList.remove('py-2', 'shadow-2xl');
        nav.classList.add('h-24');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

function createParticles() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    const count = window.innerWidth < 768 ? 40 : 120;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `${Math.random() * 100}vh`;
        p.style.opacity = Math.random() * 0.4;
        container.appendChild(p);
        
        p.animate([
            { transform: 'translate(0, 0)', opacity: p.style.opacity },
            { transform: `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px)`, opacity: 0.1 }
        ], { duration: Math.random() * 8000 + 4000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' });
    }
}

function setTheme(theme) {
    const body = document.getElementById('body-main');
    body.classList.remove('theme-dark', 'theme-light', 'theme-gold');
    body.classList.add(`theme-${theme}`);
    localStorage.setItem('selectedTheme', theme);
    const accent = theme === 'gold' ? '#ffcc00' : (theme === 'light' ? '#947a25' : '#d4af37');
    document.documentElement.style.setProperty('--accent-color', accent);
}

function injectRules() {
    const grid = document.getElementById('rules-grid');
    grid.innerHTML = serverRules.map((rule, index) => `
        <div class="bg-main-soft p-8 md:p-12 rounded-[40px] border border-main hover:border-levant-gold transition-all duration-700 reveal group relative overflow-hidden">
            <div class="absolute inset-0 bg-levant-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div class="w-16 h-16 bg-levant-gold/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <i class='bx ${rule.icon} text-3xl text-levant-gold'></i>
            </div>
            <h4 class="text-xl font-black uppercase mb-3 relative z-10">${rule.title}</h4>
            <p class="text-xs opacity-50 font-bold uppercase tracking-widest relative z-10 group-hover:opacity-100 transition-opacity">${rule.desc}</p>
        </div>
    `).join('');
    document.querySelectorAll('#rules-grid .reveal').forEach(el => observer.observe(el));
}

function updateContent() {
    const t = translations[currentLang];
    const elements = {
        'stat-text': 'innerText',
        'hero-title': 'innerHTML',
        'hero-sub': 'innerText',
        'enter-btn': 'innerText',
        'activity-title': 'innerHTML',
        'unity-title': 'innerText',
        'protocol-title': 'innerText',
        'unity-en': 'innerText',
        'unity-ar': 'innerText'
    };
    
    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('active');
            setTimeout(() => {
                el[elements[id]] = t[id.replace(/-([a-z])/g, g => g[1].toUpperCase())];
                el.classList.add('active');
            }, 300);
        }
    });
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        const tip = document.getElementById('quick-focus');
        tip.style.opacity = '1';
        tip.style.transform = 'translateY(0)';
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
        setTimeout(() => {
            tip.style.opacity = '0';
            tip.style.transform = 'translateY(10px)';
        }, 2000);
    }
});

document.getElementById('easter-egg').addEventListener('click', () => {
    document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    setTimeout(() => document.body.style.filter = 'none', 1000);
});

window.onload = () => {
    setTheme(localStorage.getItem('selectedTheme') || 'dark');
    createParticles();
    injectRules();
    updateContent();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

window.addEventListener('resize', createParticles);
