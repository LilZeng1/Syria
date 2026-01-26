const translations = {
    en: {
        statText: "1,800+ Members — Missing You!",
        heroTitle: "THE HEART <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>OF THE LEVANT.</span>",
        heroSub: "Where Syrian culture meets digital innovation. A sanctuary for debates, gaming, and the bonds of a true family.",
        enterBtn: "Jump In Discord",
        activityTitle: "Non-Stop <br> <span class='text-levant-gold italic'>Vibrations.</span>",
        unityTitle: "The Dream of Unity",
        protocolTitle: "Server Laws",
        unityEn: "We all have this dream that one day Syria will rise, grow great, and be a place where we feel we belong, no one can make this fantasy true except Syrians, Syrian people and no one else. The new generation have the potentials to do that. It would be awesome when you open Syrian chat and contact with people from your own land, your culture, people who understands the jokes and cultural references you make, for one second we might feel united again, less lonely, and we might have faith in our selves again. Long live Syria, land of civilisations.",
        unityAr: "كلنا عنا هادا الحلم بأنو بيوم من الأيام سوريا رح تكبر وتضوي وتصير مكان نحس فيه بالانتماء. ماحدا فيه يعمل هالخيال حقيقة غير السوريين، الشعب السوري؛ ولا أيا حدا تاني. الجيل الجديد عندو القدرة ليعمل هيك شي، رح يكون شعور حلو لما تفتح الشات السوري وتتواصل مع عالم من أرضك، من ثقافتك، عالم بيفهمو النكت يلي رح تحكيها، المراجع الثقافية يلي رح تذكرا. للحظة ممكن نحس حالنا متحدين من جديد، شعورنا بالانعزال رح يخف، وبجوز يرجع أيماننا بأنفسنا وببلدنا من جديد. عاشت سوريا، مهد الحضارات."
    },
    ar: {
        statText: "أكثر من 1800 عضو — بانتظارك!",
        heroTitle: "قلب <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>بلاد الشام</span>",
        heroSub: "حيث تلتقي الثقافة السورية بالابتكار الرقمي. ملاذ للنقاشات، الألعاب، وروابط العائلة الحقيقية.",
        enterBtn: "انضم إلى ديـسكورد",
        activityTitle: "فعاليات <br> <span class='text-levant-gold italic'>لا تتوقف.</span>",
        unityTitle: "حلم الوحدة",
        protocolTitle: "دستور السيرفر",
        unityEn: "We all have this dream that one day Syria will rise, grow great...",
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

// Custom Cursor Logic
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.animate({
        left: e.clientX + 'px',
        top: e.clientY + 'px'
    }, { duration: 500, fill: "forwards" });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Theme Engine
function setTheme(theme) {
    const body = document.getElementById('body-main');
    body.className = `bg-[#030303] text-white selection:bg-levant-gold/30 transition-colors duration-500 theme-${theme}`;
    if(theme === 'royal') {
        document.documentElement.style.setProperty('--accent-color', '#a855f7');
    } else {
        document.documentElement.style.setProperty('--accent-color', '#d4af37');
    }
}

// Movie Countdown Logic
function updateCountdown() {
    const now = new Date();
    const target = new Date();
    target.setHours(24, 0, 0, 0); 

    const diff = target - now;
    if (diff <= 0) {
        document.getElementById('countdown').innerText = "LIVE NOW";
        return;
    }

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById('countdown').innerText = 
        `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}
setInterval(updateCountdown, 1000);

// Content Injection
function injectRules() {
    const grid = document.getElementById('rules-grid');
    grid.innerHTML = serverRules.map(rule => `
        <div class="bg-white/5 p-8 rounded-[32px] border border-white/5 hover:bg-white/10 hover:border-levant-gold/30 transition-all reveal group">
            <div class="w-12 h-12 bg-levant-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i class='bx ${rule.icon} text-2xl text-levant-gold'></i>
            </div>
            <h4 class="text-xl font-black uppercase mb-2 tracking-tight">${rule.title}</h4>
            <p class="text-xs text-gray-500 font-medium leading-relaxed uppercase tracking-wider">${rule.desc}</p>
        </div>
    `).join('');
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
    
    // Refresh reveals
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
});

// Init
injectRules();
updateContent();
updateCountdown();
