const translations = {
    en: {
        statText: "1,800+ Members — Missing You!",
        heroTitle: "THE HEART <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>OF THE LEVANT.</span>",
        heroSub: "Forget regular servers. This is where the real ones hang out.",
        enterBtn: "Jump In Discord",
        schedTitle: "The Schedule",
        revTitle: "The Family",
        unityTitle: "The Dream of Unity",
        protocolTitle: "Core Rules",
        unityEn: "We all have this dream that one day Syria will rise, grow great, and be a place where we feel we belong, no one can make this fantasy true except Syrians, Syrian people and no one else. The new generation have the potentials to do that. It would be awesome when you open Syrian chat and contact with people from your own land , your culture , people who understands the jokes and cultural references you make , for one second we might feel united again , less lonely , and we might have faith in our selves again . Long live Syria, land of civilisations.",
        unityAr: "كلنا عنا هادا الحلم بأنو بيوم من الأيام سوريا رح تكبر وتضوي وتصير مكان نحس فيه بالانتماء. ماحدا فيه يعمل هالخيال حقيقة غير السوريين، الشعب السوري؛ ولا أيا حدا تاني. الجيل الجديد عندو القدرة ليعمل هيك شي، رح يكون شعور حلو لما تفتح الشات السوري وتتواصل مع عالم من أرضك، من ثقافتك، عالم بيفهمو النكت يلي رح تحكيها، المراجع الثقافية يلي رح تذكرا. للحظة ممكن نحس حالنا متحدين من جديد، شعورنا بالانعزال رح يخف، وبجوز يرجع أيماننا بأنفسنا وببلدنا من جديد. عاشت سوريا، مهد الحضارات."
    },
    ar: {
        statText: "أكثر من 1800 عضو — نفتقدك!",
        heroTitle: "قلب <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>بلاد الشام</span>",
        heroSub: "انسى السيرفرات العادية. هذا هو المكان الذي يتواجد فيه المبدعون.",
        enterBtn: "انضم إلينا في ديسكورد",
        schedTitle: "الجدول",
        revTitle: "العائلة",
        unityTitle: "حلم الوحدة",
        protocolTitle: "القواعد الأساسية",
        unityEn: "We all have this dream that one day Syria will rise, grow great...",
        unityAr: "كلنا عنا هادا الحلم بأنو بيوم من الأيام سوريا رح تكبر وتضوي وتصير مكان نحس فيه بالانتماء..."
    }
};

let currentLang = 'en';

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

const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function updateContent() {
    const t = translations[currentLang];
    document.getElementById('stat-text').innerText = t.statText;
    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('hero-sub').innerText = t.heroSub;
    document.getElementById('enter-btn').innerText = t.enterBtn;
    document.getElementById('sched-title').innerText = t.schedTitle;
    document.getElementById('rev-title').innerText = t.revTitle;
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

updateContent();
