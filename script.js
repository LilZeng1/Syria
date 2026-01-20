const translations = {
    en: {
        navHome: "Home",
        navGaming: "Gaming",
        navCulture: "Culture",
        navDiscord: "Join Discord",
        heroTitle: "Beyond <br> <span class='italic serif'>Borders.</span>",
        heroSub: "The ultimate digital hub for the Levantine youth. From Damascus nights to Among Us marathons. A space where tradition meets the gaming generation.",
        gamingTag: "Daily Events",
        gamingTitle: "Among Us <br> <span class='text-white/30 tracking-widest text-3xl'>Syrian Edition</span>",
        gamingDesc: "The most active Among Us community in the region. Join our voice channels, find your crewmates, and spot the impostor in our custom lobbies.",
        cultureTitle: "The <br> Heritage",
        cultureSub: "Coffee, Music & Soul",
        cultureDesc: "We celebrate the collective culture of Syria, Lebanon, Jordan, and Palestine. Our server is a digital Majlis where stories are shared and history is remembered."
    },
    ar: {
        navHome: "الرئيسية",
        navGaming: "الألعاب",
        navCulture: "الثقافة",
        navDiscord: "انضم لديسكورد",
        heroTitle: "ما وراء <br> <span class='italic serif'>الحدود.</span>",
        heroSub: "المركز الرقمi الأمثل لشباب بلاد الشام. من ليالي دمشق إلى ماراثونات أمونج أس. مساحة حيث يلتقي التراث بجيل الألعاب.",
        gamingTag: "فعاليات يومية",
        gamingTitle: "أمونج أس <br> <span class='text-white/30 tracking-widest text-3xl'>نسخة سوريا</span>",
        gamingDesc: "المجتمع الأكثر نشاطًا في المنطقة. انضم لقنواتنا الصوتية، وابحث عن زملائك في الفريق، واكتشف الخائن في غرفنا الخاصة.",
        cultureTitle: "التراث <br> العريق",
        cultureSub: "قهوة، موسيقى، وروح",
        cultureDesc: "نحتفل بالثقافة الجماعية لسوريا ولبنان والأردن وفلسطين. خادمنا هو مجلس رقمي حيث تُروى القصص ويُخلد التاريخ."
    }
};

let currentLang = 'en';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden-loader');
    }, 1000);
});

document.getElementById('lang-toggle').addEventListener('click', function () {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const t = translations[currentLang];
    
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        this.innerText = currentLang === 'en' ? 'AR' : 'EN';
        
        // Navbar
        document.querySelectorAll('nav a')[1].innerText = t.navHome;
        document.querySelectorAll('nav a')[2].innerText = t.navDiscord;
        document.querySelectorAll('nav a')[3].innerText = t.navGaming;
        document.querySelectorAll('nav a')[4].innerText = t.navCulture;

        // Hero
        document.querySelector('#hero h1').innerHTML = t.heroTitle;
        document.querySelector('#hero p').innerText = t.heroSub;

        // Gaming Card
        document.querySelector('#gaming span').innerText = t.gamingTag;
        document.querySelector('#gaming h2').innerHTML = t.gamingTitle;
        document.querySelector('#gaming p').innerText = t.gamingDesc;

        // Culture
        document.querySelector('#culture h2').innerHTML = t.cultureTitle;
        document.querySelector('#culture .text-levant-gold').innerText = t.cultureSub;
        document.querySelector('#culture p.text-gray-400').innerText = t.cultureDesc;
        
        document.body.style.opacity = '1';
    }, 400);
});

// Intersection Observer (Existing code)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});
