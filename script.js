const translations = {
    en: {
        navHome: "Home",
        navCommunity: "Community",
        navHeritage: "Heritage",
        navDiscord: "Join Discord",
        heroTitle: "The Heart <br> <span class='italic serif text-levant-gold'>Of The Levant.</span>",
        heroSub: "More than a server—it's a digital home. From intense political debates to late-night cinema and gaming marathons. Join the most active Syrian & Levantine community.",
        enterBtn: "<i class='bx bxl-discord text-xl'></i> Enter Discord",
        exploreBtn: "Explore Hub",
        
        communityTitle: "Among Us <br> <span class='text-white/30 tracking-widest text-2xl md:text-3xl'>Syrian Edition</span>",
        communityTag: "Daily Main Event",
        communityDesc: "The ritual. Every single day. Voice chats open, lobbies fill up, and the chaos begins. No mercy for impostors.",
        gmodTitle: "Garry's Mod",
        gmodDesc: "Sandbox chaos. Roleplay, TTT, and custom server events. A major pillar of our gaming community.",
        cinemaTitle: "Cinema Club",
        cinemaDesc: "Movies, Anime, Ramadan Series. We watch together in high quality voice channels.",
        debateTitle: "The Arena",
        debateDesc: "Dedicated spaces for Politics, Religion, and Ideology. We don't shy away from heavy topics. Debate respectfully, but passionately.",

        cultureTitle: "The <br> Heritage",
        cultureSub: "Fairuz in the Morning, Wassouf at Night",
        cultureDesc: "Syria, Lebanon, Jordan, Palestine. Different dialects, one soul. Our server focuses on the people—your stories, your jokes, your history."
    },
    ar: {
        navHome: "الرئيسية",
        navCommunity: "المجتمع",
        navHeritage: "التراث",
        navDiscord: "انضم لديسكورد",
        heroTitle: "قلب <br> <span class='italic serif text-levant-gold'>بلاد الشام.</span>",
        heroSub: "أكثر من مجرد سيرفر—إنه وطن رقمي. من النقاشات السياسية الساخنة إلى سهرات السينما وماراثونات الألعاب. انضم لأكبر مجتمع سوري وشامي.",
        enterBtn: "<i class='bx bxl-discord text-xl'></i> ادخل السيرفر",
        exploreBtn: "اكتشف المزيد",

        communityTitle: "أمونج أس <br> <span class='text-white/30 tracking-widest text-2xl md:text-3xl'>نسخة سوريا</span>",
        communityTag: "الحدث اليومي",
        communityDesc: "الطقس اليومي المعتاد. كل يوم، تفتح المحادثات الصوتية، تمتلئ الغرف، وتبدأ الفوضى. لا رحمة للمحتالين.",
        gmodTitle: "غاري مود",
        gmodDesc: "فوضى الساندبوكس. لعب أدوار، TTT، وفعاليات خاصة. ركن أساسي في مجتمع الألعاب لدينا.",
        cinemaTitle: "نادي السينما",
        cinemaDesc: "أفلام، أنمي، ومسلسلات رمضان. نشاهد معاً بجودة صوتية عالية.",
        debateTitle: "الساحة",
        debateDesc: "مساحات مخصصة للسياسة، الدين، والأيديولوجيا. لا نتهرب من المواضيع الثقيلة. ناقش باحترام، ولكن بشغف.",

        cultureTitle: "التراث <br> العريق",
        cultureSub: "فيروز في الصباح، وسوف في المساء",
        cultureDesc: "سوريا، لبنان، الأردن، فلسطين. لهجات مختلفة، وروح واحدة. سيرفرنا يركز على الناس—قصصكم، نكاتكم، وتاريخكم."
    }
};

let currentLang = 'en';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden-loader');
    }, 1000);
});

// Mobile Menu Logic
const mobileMenu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('translate-x-full');
}

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Language Toggle
document.getElementById('lang-toggle').addEventListener('click', function () {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const t = translations[currentLang];
    
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        this.innerText = currentLang === 'en' ? 'AR' : 'EN';
        
        // Navbar
        const navLinks = document.querySelectorAll('nav a');
        navLinks[1].innerText = t.navHome;
        navLinks[2].innerText = t.navDiscord;
        navLinks[3].innerText = t.navCommunity;
        navLinks[4].innerText = t.navHeritage;

        // Mobile Nav
        const mobLinks = document.querySelectorAll('#mobile-menu a');
        mobLinks[0].innerText = t.navHome;
        mobLinks[1].innerText = t.navCommunity;
        mobLinks[2].innerText = t.navHeritage;
        mobLinks[3].innerText = t.navDiscord;

        // Hero
        document.querySelector('#hero h1').innerHTML = t.heroTitle;
        document.querySelector('#hero p').innerText = t.heroSub;
        document.querySelector('#hero a.bg-\\[\\#5865F2\\]').innerHTML = t.enterBtn;
        document.querySelector('#hero a.apple-btn-secondary').innerText = t.exploreBtn;

        // Community / Gaming
        const commSection = document.getElementById('community');
        commSection.querySelector('h2').innerHTML = t.communityTitle;
        commSection.querySelector('.text-among-red').innerText = t.communityTag;
        commSection.querySelector('p').innerText = t.communityDesc;
        
        // GMod & Cinema & Debate
        const cards = commSection.querySelectorAll('.glass-card');
        
        // Gmod
        cards[1].querySelector('h3').innerText = t.gmodTitle;
        cards[1].querySelector('p').innerText = t.gmodDesc;
        
        // Cinema
        cards[2].querySelector('h3').innerText = t.cinemaTitle;
        cards[2].querySelector('p').innerText = t.cinemaDesc;

        // Debate
        cards[3].querySelector('h3').innerText = t.debateTitle;
        cards[3].querySelector('p').innerText = t.debateDesc;

        // Culture
        const cultSection = document.getElementById('culture');
        cultSection.querySelector('h2').innerHTML = t.cultureTitle;
        cultSection.querySelector('.text-levant-gold').innerText = t.cultureSub;
        cultSection.querySelector('p.text-gray-400').innerText = t.cultureDesc;
        
        document.body.style.opacity = '1';
    }, 400);
});

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
