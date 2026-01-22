// Translation()
const translations = {
    en: {
        statText: "1,800+ Members — You're the missing one!",
        navHome: "Home",
        navCommunity: "Our Vibe",
        navReviews: "Reviews",
        navHeritage: "Heritage",
        navDiscord: "Join Discord",
        heroTitle: "The Heart <br> <span class='italic serif text-levant-gold'>Of The Levant.</span>",
        heroSub: "Not just another server—it's home. From heated debates to 3 AM gaming sessions. Come as you are, stay for the family.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> Jump In Discord",
        exploreBtn: "Take a Tour",
        commTag: "Our Daily Ritual",
        commTitle: "Among Us <br> <span class='text-white/30 text-xl md:text-2xl'>Syrian Edition</span>",
        commDesc: "Every single night. Lobbies fill up, voice channels explode, and friendships are tested. No mercy for the impostors.",
        gmodTitle: "Garry's Mod",
        gmodDesc: "Sandbox madness. From serious roleplay to absolute TTT mayhem.",
        cinemaTitle: "Late Night Cinema",
        cinemaDesc: "We stream movies, anime, and classic Ramadan series in HD.",
        debateTitle: "The Arena",
        debateDesc: "Politics, religion, ideology—it's all on the table. Debate hard, keep it family.",
        revTitle: "The Family",
        revSupernova: "\"We built this from nothing but late night jokes and dreams. It's not just a server anymore, it's a sanctuary for everyone in the Levant.\"",
        revAlex: "\"Been here since day one. The evolution has been insane. If you want real connections and zero drama (mostly), this is the spot.\"",
        revGeorge: "\"Crafting this digital home was a labor of love. The code is clean, but the community is what makes it run. 10/10 would code again.\"",
        revMohammad: "\"Keeping order in the chaos isn't easy, but with this crew, it's always fun. The events we host are legendary. Don't miss out.\"",
        revYosef: "\"Designed the visuals to match the vibe: sharp, modern, yet deeply rooted in our culture. Proud to put my art on this project.\"",
        cultTitle: "The <br> Heritage",
        cultSub: "Fairuz in the morning, Wassouf for the soul.",
        cultDesc: "Syria, Lebanon, Jordan, Palestine. Many dialects, one spirit. We’re here to share stories.",
        toggleBtn: "AR",
        toggleMob: "ARABIC"
    },
    ar: {
        statText: "١٨٠٠+ عضو — ناقصنا واحد، وينك؟",
        navHome: "الرئيسية",
        navCommunity: "جوّنا",
        navReviews: "آراء العائلة",
        navHeritage: "تراثنا",
        navDiscord: "ديسكورد",
        heroTitle: "قلب <br> <span class='italic serif text-levant-gold'>بلاد الشام.</span>",
        heroSub: "مو مجرد سيرفر، هاد بيتك التاني. من النقاشات الحامية لسهر والضحك لوش الصبح. فوت كأنك ببيتك.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> انضم لديسكورد",
        exploreBtn: "خدلك جولة",
        commTag: "طقوسنا اليومية",
        commTitle: "أمونج أس <br> <span class='text-white/30 text-xl md:text-2xl'>بالنسخة السورية</span>",
        commDesc: "كل يوم سهرة. الغرف بتنتلي، والأصوات بتعلى، والصداقات بتختبر. ما في رحمة للمحتالين، فوضى وبس.",
        gmodTitle: "غاري مود",
        gmodDesc: "عالم من الفوضى. من الرول بلاي الجدي لجنون الـ TTT. هي روح الجيمنج عنا.",
        cinemaTitle: "سهرات سينما",
        cinemaDesc: "البشار جاهز؟ عم نعرض أفلام، أنمي، ومسلسلات رمضان الكلاسيكية بأعلى جودة.",
        debateTitle: "الساحة",
        debateDesc: "ما بنهرب من المواضيع التقيلة. سياسة، دين، وأفكار—كلو ع الطاولة. ناقش بقوة، بس ضل محترم.",
        revTitle: "العائلة",
        revSupernova: "\"بنينا هالمكان من ولا شي غير الضحك والأحلام. هاد مو بس سيرفر، هاد ملجأ لكل حدا من بلاد الشام.\"",
        revAlex: "\"أنا هون من أول يوم. التطور اللي صار مو طبيعي. إذا بدك ناس حقيقية وبلا وجع راس (غالباً)، هاد مكانك.\"",
        revGeorge: "\"تصميم هالبيت الرقمي كان شغل من القلب. الكود نضيف، بس المجتمع هو اللي بيشغله. ١٠/١٠ بعيد التجربة.\"",
        revMohammad: "\"النظام بالفوضى مو سهل، بس مع هالشباب دايماً في متعة. الفعاليات اللي منعملها أسطورية. لا تروح عليك.\"",
        revYosef: "\"صممت الهوية البصرية لتعكس الجو: حاد، عصري، بس متجذر بتراثنا. فخور إني حطيت لمستي بهالمشروع.\"",
        cultTitle: "التراث <br> العريق",
        cultSub: "فيروز بالصبح، والـ 'أبو وديع' بالليل.",
        cultDesc: "سوريا، لبنان، الأردن، فلسطين. لهجاتنا غير بس الروح واحدة. هون عم نحكي قصصنا اللي بتعرف عنا.",
        toggleBtn: "EN",
        toggleMob: "ENGLISH"
    }
};

let currentLang = 'en';

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden-loader');
        setTimeout(() => {
            loader.style.display = 'none';
            reveal();
        }, 700);
    }, 800);
});

const mobileMenu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isClosed = mobileMenu.classList.contains('translate-x-full');
    mobileMenu.classList.toggle('translate-x-full');
    document.body.style.overflow = isClosed ? 'hidden' : '';
}

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

function updateLanguage() {
    const t = translations[currentLang];
    document.body.style.opacity = '0';

    setTimeout(() => {
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;

        document.getElementById('lang-toggle').innerText = t.toggleBtn;
        document.getElementById('lang-toggle-mob').innerText = t.toggleMob;
        document.getElementById('stat-text').innerText = t.statText;

        const navLinks = document.querySelectorAll('.nav-item');
        navLinks[0].innerText = t.navHome;
        navLinks[1].innerText = t.navDiscord;
        navLinks[2].innerText = t.navCommunity;
        navLinks[3].innerText = t.navReviews;
        navLinks[4].innerText = t.navHeritage;

        const mobLinks = document.querySelectorAll('.mobile-link');
        mobLinks[0].innerText = t.navHome;
        mobLinks[1].innerText = t.navCommunity;
        mobLinks[2].innerText = t.navReviews;
        mobLinks[3].innerText = t.navHeritage;
        mobLinks[4].innerText = t.navDiscord;

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
        
        document.getElementById('rev-title').innerText = t.revTitle;
        document.getElementById('rev-supernova').innerText = t.revSupernova;
        document.getElementById('rev-alex').innerText = t.revAlex;
        document.getElementById('rev-george').innerText = t.revGeorge;
        document.getElementById('rev-mohammad').innerText = t.revMohammad;
        document.getElementById('rev-yosef').innerText = t.revYosef;

        document.getElementById('cult-title').innerHTML = t.cultTitle;
        document.getElementById('cult-sub').innerText = t.cultSub;
        document.getElementById('cult-desc').innerText = t.cultDesc;

        document.body.style.opacity = '1';
        reveal();
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
        const revealPoint = 80;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
