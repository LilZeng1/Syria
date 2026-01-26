const translations = {
    en: {
        statText: "1,800+ Members — Online Now",
        heroTitle: "THE HEART <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>OF THE LEVANT.</span>",
        heroSub: "Where Syrian culture meets digital innovation. A sanctuary for debates, gaming, and the bonds of a true family.",
        enterBtn: "Jump In Discord",
        activityTitle: "Non-Stop <br> <span class='text-levant-gold italic'>Vibrations.</span>",
        unityTitle: "The Dream of Unity",
        protocolTitle: "Server Laws",
        unityEn: "We all have this dream that one day Syria will rise, grow great, and be a place where we feel we belong. No one can make this fantasy true except Syrians. The new generation has the potential to do that. It feels united again, less lonely, and we might have faith in ourselves again. Long live Syria, land of civilizations.",
        unityAr: "كلنا عنا هادا الحلم بأنو بيوم من الأيام سوريا رح تكبر وتضوي وتصير مكان نحس فيه بالانتماء. ماحدا فيه يعمل هالخيال حقيقة غير السوريين، الشعب السوري. الجيل الجديد عندو القدرة ليعمل هيك شي. للحظة ممكن نحس حالنا متحدين من جديد، شعورنا بالانعزال رح يخف، وبجوز يرجع أيماننا بأنفسنا وببلدنا من جديد. عاشت سوريا، مهد الحضارات."
    },
    ar: {
        statText: "أكثر من 1800 عضو — متصلون الآن",
        heroTitle: "قلب <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>بلاد الشام</span>",
        heroSub: "حيث تلتقي الثقافة السورية بالابتكار الرقمي. ملاذ للنقاشات، الألعاب، وروابط العائلة الحقيقية.",
        enterBtn: "انضم إلى ديـسكورد",
        activityTitle: "فعاليات <br> <span class='text-levant-gold italic'>لا تتوقف.</span>",
        unityTitle: "حلم الوحدة",
        protocolTitle: "دستور السيرفر",
        unityEn: "We all have this dream that one day Syria will rise, grow great, and be a place where we feel we belong...",
        unityAr: "كلنا عنا هادا الحلم بأنو بيوم من الأيام سوريا رح تكبر وتضوي وتصير مكان نحس فيه بالانتماء..."
    }
};

const serverRules = [
    { icon: 'bx-heart', title: 'Respect', desc: 'Treat others as you want to be treated. Debate ideas, not people.' },
    { icon: 'bx-lock-alt', title: 'Privacy', desc: 'Member privacy is a red line. No sharing of personal info.' },
    { icon: 'bx-shield-x', title: 'No Hate', desc: 'Zero tolerance for racism, discrimination, or hate speech.' },
    { icon: 'bx-block', title: 'NSFW', desc: 'Sexual, gory, or inflammatory content is strictly prohibited.' },
    { icon: 'bx-link-external', title: 'Links', desc: 'Don\'t post suspicious links. Explain before you share.' },
    { icon: 'bx-bell-off', title: 'No Spam', desc: 'Don\'t use @everyone or ping staff without a valid reason.' }
];

let currentLang = 'en';
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 1024) {
        dot.style.opacity = "1";
        outline.style.opacity = "0.5";
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        outline.animate({
            transform: `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`
        }, { duration: 500, fill: "forwards" });
    }
});

const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

function createParticles() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    const count = window.innerWidth < 768 ? 20 : 60;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `${Math.random() * 100}vh`;
        p.style.opacity = Math.random() * 0.5;
        container.appendChild(p);
        p.animate([
            { transform: 'translate(0, 0)', opacity: p.style.opacity },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0.2 }
        ], { duration: Math.random() * 3000 + 3000, iterations: Infinity, direction: 'alternate', ease: 'ease-in-out' });
    }
}

function setTheme(theme) {
    const body = document.getElementById('body-main');
    body.classList.remove('theme-dark', 'theme-light', 'theme-gold');
    body.classList.add(`theme-${theme}`);
    localStorage.setItem('selectedTheme', theme);
}

function injectRules() {
    const grid = document.getElementById('rules-grid');
    grid.innerHTML = serverRules.map(rule => `
        <div class="bg-main-soft p-10 rounded-[32px] border border-main hover:border-levant-gold/40 transition-all duration-500 reveal group cursor-default">
            <div class="w-14 h-14 bg-levant-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <i class='bx ${rule.icon} text-3xl text-levant-gold'></i>
            </div>
            <h4 class="text-xl font-black uppercase mb-3 tracking-tight">${rule.title}</h4>
            <p class="text-xs opacity-50 font-semibold leading-relaxed uppercase tracking-widest">${rule.desc}</p>
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
        if (el) el[elements[id]] = t[id.replace(/-([a-z])/g, g => g[1].toUpperCase())];
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
});

window.onload = () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
    setTheme(savedTheme);
    createParticles();
    injectRules();
    updateContent();
};

window.addEventListener('resize', createParticles);
