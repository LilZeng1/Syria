const translations = {
    en: {
        statText: "1,800+ Members — You're the missing one!",
        navHome: "Home",
        navCommunity: "Our Vibe",
        navHeritage: "Heritage",
        navDiscord: "Join Discord",
        heroTitle: "The Heart <br> <span class='italic serif text-levant-gold'>Of The Levant.</span>",
        heroSub: "Not just another server—it's home. From heated debates to 3 AM gaming sessions and late-night talks. Come as you are, stay for the family.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> Jump In Discord",
        exploreBtn: "Take a Tour",
        commTag: "Our Daily Ritual",
        commTitle: "Among Us <br> <span class='text-white/30 tracking-widest text-2xl md:text-3xl'>Syrian Edition</span>",
        commDesc: "Every single night. Lobbies fill up, voice channels explode, and friendships are tested. No mercy for the impostors, just pure chaos.",
        gmodTitle: "Garry's Mod",
        gmodDesc: "Sandbox madness. From serious roleplay to absolute TTT mayhem. It's the heart of our gaming crew.",
        cinemaTitle: "Late Night Cinema",
        cinemaDesc: "Popcorn ready? We stream movies, anime, and the classic Ramadan series in high-def voice channels.",
        debateTitle: "The Arena",
        debateDesc: "We don't dodge the big questions. Politics, religion, ideology—it's all on the table. Debate hard, but keep it family.",
        cultTitle: "The <br> Heritage",
        cultSub: "Fairuz in the morning, Wassouf for the soul.",
        cultDesc: "Syria, Lebanon, Jordan, Palestine. Many dialects, one spirit. We’re here to share the stories that make us who we are.",
        toggleBtn: "AR",
        toggleMob: "ARABIC"
    },
    ar: {
        statText: "١٨٠٠+ عضو — ناقصنا واحد، وينك؟",
        navHome: "الرئيسية",
        navCommunity: "جوّنا",
        navHeritage: "تراثنا",
        navDiscord: "ديسكورد",
        heroTitle: "قلب <br> <span class='italic serif text-levant-gold'>بلاد الشام.</span>",
        heroSub: "مو مجرد سيرفر، هاد بيتك التاني. من النقاشات الحامية للسهر والضحك لوش الصبح. فوت كأنك ببيتك، والعيلة بتستناك.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> انضم لديسكورد",
        exploreBtn: "خدلك جولة",
        commTag: "طقوسنا اليومية",
        commTitle: "أمونج أس <br> <span class='text-white/30 tracking-widest text-2xl md:text-3xl'>بالنسخة السورية</span>",
        commDesc: "كل يوم سهرة. الغرف بتنتلي، والأصوات بتعلى، والصداقات بتختبر. ما في رحمة للمحتالين، فوضى وبس.",
        gmodTitle: "غاري مود",
        gmodDesc: "عالم من الفوضى. من الرول بلاي الجدي لجنون الـ TTT. هي روح الجيمنج عنا.",
        cinemaTitle: "سهرات سينما",
        cinemaDesc: "البشار جاهز؟ عم نعرض أفلام، أنمي، ومسلسلات رمضان الكلاسيكية بأعلى جودة.",
        debateTitle: "الساحة",
        debateDesc: "ما بنهرب من المواضيع التقيلة. سياسة، دين، وأفكار—كلو ع الطاولة. ناقش بقوة، بس ضل محترم.",
        cultTitle: "التراث <br> العريق",
        cultSub: "فيروز بالصبح، والـ 'أبو وديع' بالليل.",
        cultDesc: "سوريا، لبنان، الأردن، فلسطين. لهجاتنا غير بس الروح واحدة. هون عم نحكي قصصنا اللي بتعرف عنا.",
        toggleBtn: "EN",
        toggleMob: "ENGLISH"
    }
};

let currentLang = 'en';

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden-loader');
        setTimeout(() => {
            loader.style.display = 'none';
            reveal();
        }, 700);
    }, 1000);
});

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

function updateLanguage() {
    const t = translations[currentLang];
    document.body.style.opacity = '0';

    setTimeout(() => {
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.getElementById('lang-toggle').innerText = t.toggleBtn;
        document.getElementById('lang-toggle-mob').innerText = t.toggleMob;
        document.getElementById('stat-text').innerText = t.statText;

        const navLinks = document.querySelectorAll('.nav-item');
        navLinks[0].innerText = t.navHome;
        navLinks[1].innerText = t.navDiscord;
        navLinks[2].innerText = t.navCommunity;
        navLinks[3].innerText = t.navHeritage;

        const mobLinks = document.querySelectorAll('#mobile-menu a');
        mobLinks[0].innerText = t.navHome;
        mobLinks[1].innerText = t.navCommunity;
        mobLinks[2].innerText = t.navHeritage;
        mobLinks[3].innerText = t.navDiscord;

        document.getElementById('hero-title').innerHTML = t.heroTitle;
        document.getElementById('hero-sub').innerText = t.heroSub;
        document.getElementById('enter-btn').innerHTML = t.enterBtn;
        document.getElementById('explore-btn').innerText = t.exploreBtn;
        document.getElementById('comm-tag').innerText = t.commTag;
        document.getElementById('comm-title').innerHTML = t.commTitle;
        document.getElementById('comm-desc').innerText = t.commDesc;
        document.getElementById('gmod-title').innerText = t.gmodTitle;
        document.getElementById('gmod-desc').innerText = t.gmodDesc;
        document.getElementById('cinema-title').innerText = t.cinemaTitle;
        document.getElementById('cinema-desc').innerText = t.cinemaDesc;
        document.getElementById('debate-title').innerText = t.debateTitle;
        document.getElementById('debate-desc').innerText = t.debateDesc;
        document.getElementById('cult-title').innerHTML = t.cultTitle;
        document.getElementById('cult-sub').innerText = t.cultSub;
        document.getElementById('cult-desc').innerText = t.cultDesc;

        document.body.style.opacity = '1';
    }, 400);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
});

document.getElementById('lang-toggle-mob').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
    setTimeout(toggleMenu, 600);
});

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
