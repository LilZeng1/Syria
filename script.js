// Translation()
const translations = {
    en: {
        statText: "1,800+ Members — You're the missing one!",
        navHome: "Home",
        navCommunity: "Our Vibe",
        navReviews: "Family",
        navHeritage: "Heritage",
        navDiscord: "Join Discord",
        heroTitle: "The Heart <br> <span class='italic serif text-levant-gold'>Of The Levant.</span>",
        heroSub: "Forget regular servers. This is where the real ones hang out. From deep talks to gaming chaos, it's just home.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> Jump In Discord",
        exploreBtn: "Take a Tour",
        commTag: "Our Daily Ritual",
        commTitle: "Among Us <br> <span class='text-white/30 text-xl md:text-2xl'>Syrian Edition</span>",
        commDesc: "Every single night. Voice channels explode and friendships are tested. No mercy for the impostors, just chaos.",
        gmodTitle: "Garry's Mod",
        gmodDesc: "Sandbox madness. From serious roleplay to absolute TTT mayhem. The true gaming spirit.",
        cinemaTitle: "Late Night Cinema",
        cinemaDesc: "Popcorn ready? We're streaming movies, anime, and those classic Ramadan vibes in HD.",
        debateTitle: "The Arena",
        debateDesc: "Politics, religion, or why pineapple on pizza is a crime. Debate hard, keep it family.",
        revTitle: "The Family",
        revSupernova: "Started from 3 AM calls, now we're a whole tribe. It's more than just a server, it's a sanctuary.",
        revAlex: "Witnessed every single glow-up. If you want a place with zero fake vibes, this is it. Welcome home.",
        revGeorge: "I just keep the lights on with some code, but the people here are the real magic. 10/10 vibes only.",
        revMohammad: "Moderating this chaos is a full-time job but I wouldn't trade these legends for anything else.",
        revYosef: "Designed the pixels to match the soul. Sharp, modern, but always keeping it Levantine.",
        cultTitle: "The <br> Heritage",
        cultSub: "Fairuz in the morning, Wassouf for the soul.",
        cultDesc: "Syria, Lebanon, Jordan, Palestine. Different dialects, same heart. Sharing our stories.",
        toggleBtn: "AR",
        toggleMob: "ARABIC"
    },
    ar: {
        statText: "١٨٠٠+ عضو — ناقصنا واحد، وينك؟",
        navHome: "الرئيسية",
        navCommunity: "جوّنا",
        navReviews: "العيلة",
        navHeritage: "تراثنا",
        navDiscord: "ديسكورد",
        heroTitle: "قلب <br> <span class='italic serif text-levant-gold'>بلاد الشام.</span>",
        heroSub: "مو مجرد سيرفر، هاد بيتك التاني. من النقاشات الحامية لسهر والضحك لوش الصبح. فوت كأنك ببيتك.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> انضم لديسكورد",
        exploreBtn: "خدلك جولة",
        commTag: "طقوسنا اليومية",
        commTitle: "أمونج أس <br> <span class='text-white/30 text-xl md:text-2xl'>بالنسخة السورية</span>",
        commDesc: "كل يوم سهرة. الغرف بتنتلي، والأصوات بتعلى. ما في رحمة للمحتالين، فوضى وضحك وبس.",
        gmodTitle: "غاري مود",
        gmodDesc: "عالم من الفوضى. من الرول بلاي لجنون الـ TTT. هي روح الجيمنج عنا.",
        cinemaTitle: "سهرات سينما",
        cinemaDesc: "البشار جاهز؟ عم نعرض أفلام، أنمي، ومسلسلات رمضان القديمة والجديدة بوضوح عالي.",
        debateTitle: "الساحة",
        debateDesc: "سياسة، دين، أو ليش البيتزا بالأناناس جريمة. تناقشوا قد ما بدكن، بس خلونا عيلة وحدة.",
        revTitle: "العيلة",
        revSupernova: "بلشنا بمكالمات لوش الصبح، وهلق صرنا قبيلة كاملة. السيرفر مو مجرد مكان، هو ملجأ للكل.",
        revAlex: "شفت السيرفر وهو عم يكبر خطوة بخطوة. إذا بدك مكان حقيقي بدون نفاق، فوت لهون. أهلاً فيك ببيتك.",
        revGeorge: "أنا بس عم اهتم بالأكواد، بس الناس هون هنن السحر الحقيقي. جو رايق ١٠/١٠.",
        revMohammad: "إدارة الفوضى هون بدها طولة بال، بس ما ببدل هالمجانين بالدنيا كلها.",
        revYosef: "صممنا كل بكسل ليناسب روح المكان. عصري، فخم، وبنفس الوقت بحافظ على هويتنا الشامية.",
        cultTitle: "التراث <br> الأصيل",
        cultSub: "فيروز الصبح، والوسوف للروح.",
        cultDesc: "سوريا، لبنان، الأردن، فلسطين. لهجات مختلفة، بس القلب واحد. هون بنحكي قصصنا.",
        toggleBtn: "EN",
        toggleMob: "ENGLISH"
    }
};

let currentLang = 'en';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden-loader');
        reveal();
    }, 1000);
    fetchAvatars();
});

async function fetchAvatars() {
    const users = [
        { id: "1335340293838602281", name: "SuperNova" },
        { id: "680408469064515829", name: "Alex" },
        { id: "1447924209677373480", name: "George" },
        { id: "832647378724192297", name: "Mohammad" },
        { id: "551385778949849103", name: "Yosef" }
    ];

    users.forEach(async (user) => {
        try {
            const response = await fetch(`https://discord-lookup-api-alpha.vercel.app/api/user/${user.id}`);
            const data = await response.json();
            if (data.avatar_url) {
                const imgElements = document.querySelectorAll(`img[alt="${user.name}"]`);
                imgElements.forEach(img => img.src = data.avatar_url);
            }
        } catch (error) {
            console.error("Avatar fetch failed for", user.name);
        }
    });
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

document.getElementById('open-menu').addEventListener('click', toggleMenu);
document.getElementById('close-menu').addEventListener('click', toggleMenu);

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(toggleMenu, 300);
    });
});

function updateLanguage() {
    const t = translations[currentLang];
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.opacity = '0';

    setTimeout(() => {
        document.getElementById('stat-text').innerText = t.statText;
        document.getElementById('hero-title').innerHTML = t.heroTitle;
        document.getElementById('hero-sub').innerText = t.heroSub;
        document.getElementById('enter-btn').innerHTML = t.enterBtn;
        document.getElementById('explore-btn').innerText = t.exploreBtn;
        document.getElementById('lang-toggle').innerText = t.toggleBtn;
        document.getElementById('lang-toggle-mob').innerText = t.toggleMob;

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
