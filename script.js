const translations = {
    en: {
        statText: "1,800+ Members — Collective Pulse",
        heroTitle: "THE HEART <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-100 to-levant-gold animate-gradient-x'>OF THE LEVANT.</span>",
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
        heroTitle: "قلب <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-100 to-levant-gold animate-gradient-x'>بلاد الشام</span>",
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
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');
const progressBar = document.querySelector('.progress-bar');
const nav = document.getElementById('navbar');

window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 1024) {
        dot.style.opacity = "1";
        outline.style.opacity = "0.5";
        
        const target = e.target;
        const isInteractable = target.closest('a, button, .magnetic, .group');
        
        if (isInteractable) {
            document.body.classList.add('cursor-active');
        } else {
            document.body.classList.remove('cursor-active');
        }

        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        outline.animate({
            transform: `translate(${e.clientX - 22}px, ${e.clientY - 22}px)`
        }, { duration: 400, fill: "forwards", easing: "cubic-bezier(0.23, 1, 0.32, 1)" });
    }
});

const magneticElements = document.querySelectorAll('.magnetic');
magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const strength = el.getAttribute('data-strength') || 20;
        const x = (e.clientX - rect.left - rect.width / 2) / strength;
        const y = (e.clientY - rect.top - rect.height / 2) / strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = `translate(0, 0)`;
    });
});

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    if (winScroll > 100) {
        nav.classList.add('py-2');
        nav.classList.remove('h-24');
    } else {
        nav.classList.remove('py-2');
        nav.classList.add('h-24');
    }
});

const observerOptions = { threshold: 0.1, rootMargin: "0px" };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if(entry.target.classList.contains('hero-title')) {
                entry.target.style.letterSpacing = "normal";
            }
        }
    });
}, observerOptions);

function createParticles() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    const count = window.innerWidth < 768 ? 30 : 100;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 1;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `${Math.random() * 100}vh`;
        p.style.opacity = Math.random() * 0.3;
        container.appendChild(p);
        
        p.animate([
            { transform: 'translate(0, 0)', opacity: p.style.opacity },
            { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0.1 }
        ], { duration: Math.random() * 5000 + 5000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' });
    }
}

function setTheme(theme) {
    const body = document.getElementById('body-main');
    body.classList.remove('theme-dark', 'theme-light', 'theme-gold');
    body.classList.add(`theme-${theme}`);
    localStorage.setItem('selectedTheme', theme);
    
    const colors = {
        dark: '#d4af37',
        light: '#af8f2c',
        gold: '#ffd700'
    };
    document.documentElement.style.setProperty('--accent-color', colors[theme]);
}

function injectRules() {
    const grid = document.getElementById('rules-grid');
    grid.innerHTML = serverRules.map((rule, index) => `
        <div class="bg-main-soft p-12 rounded-[48px] border border-main hover:border-levant-gold transition-all duration-700 reveal group cursor-none relative overflow-hidden" style="transition-delay: ${index * 100}ms">
            <div class="absolute inset-0 bg-levant-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div class="w-20 h-20 bg-levant-gold/10 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                <i class='bx ${rule.icon} text-4xl text-levant-gold'></i>
            </div>
            <h4 class="text-2xl font-black uppercase mb-4 tracking-tight relative z-10">${rule.title}</h4>
            <p class="text-sm opacity-50 font-semibold leading-relaxed uppercase tracking-[0.2em] relative z-10 group-hover:opacity-100 transition-opacity">${rule.desc}</p>
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
            el.style.opacity = 0;
            setTimeout(() => {
                el[elements[id]] = t[id.replace(/-([a-z])/g, g => g[1].toUpperCase())];
                el.style.opacity = 1;
            }, 300);
        }
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        const focusTip = document.getElementById('quick-focus');
        focusTip.classList.remove('opacity-0', 'translate-y-10');
        setTimeout(() => focusTip.classList.add('opacity-0', 'translate-y-10'), 3000);
        
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => el.classList.add('active'));
    }
});

window.onload = () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
    setTheme(savedTheme);
    createParticles();
    injectRules();
    updateContent();
    
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1.5s ease';
        document.body.style.opacity = '1';
    }, 100);
};

window.addEventListener('resize', () => {
    createParticles();
});
