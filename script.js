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
        revSupernova: "\"Started from 3 AM calls, now we're a whole tribe. It's more than just a server, it's a sanctuary.\"",
        revAlex: "\"Witnessed every single glow-up. If you want a place with zero fake vibes, this is it. Welcome home.\"",
        revGeorge: "\"I just keep the lights on with some code, but the people here are the real magic. 10/10 vibes only.\"",
        cultTitle: "The <br> Heritage",
        cultSub: "Fairuz in the morning, Wassouf for the soul.",
        cultDesc: "Syria, Lebanon, Jordan, Palestine. Many dialects, one spirit. A bridge between tradition and the digital age.",
        boosterTitle: "Hall of <span class='text-transparent bg-clip-text bg-gradient-to-r from-nitro-pink to-neon-purple'>Legends</span>",
        boosterDesc: "The real MVPs keeping our audio crisp and our streams HD. Respect the badge.",
        galleryTitle: "Moments",
        gallerySub: "Screenshots don't lie",
        faqTitle: "Quick Q<span class='text-levant-gold'>&</span>A",
        faqQ1: "How do I verify?",
        faqA1: "Join voice, say hi, or react to the rules bot. We keep it simple.",
        faqQ2: "Are non-Syrians welcome?",
        faqA2: "100%. If you vibe with the culture and respect the rules, you're family."
    },
    ar: {
        statText: "أكثر من ١٨٠٠ عضو — أنت الشخص الناقص!",
        navHome: "الرئيسية",
        navCommunity: "أجوائنا",
        navReviews: "العائلة",
        navHeritage: "التراث",
        navDiscord: "انضم إلينا",
        heroTitle: "قلب <br> <span class='italic serif text-levant-gold'>بلاد الشام.</span>",
        heroSub: "انسَ السيرفرات العادية. هنا المكان اللي بيجمعنا من جد. من النقاشات العميقة لجنون الألعاب، هنا بيتك.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> ادخل السيرفر",
        exploreBtn: "خذ جولة",
        commTag: "طقوسنا اليومية",
        commTitle: "أمونغ أس <br> <span class='text-white/30 text-xl md:text-2xl'>بالنسخة السورية</span>",
        commDesc: "كل ليلة. الغرف بتتملى وأصواتنا بتعلى. ما في رحمة للخونة، بس ضحك وجنون.",
        gmodTitle: "غاريز مود",
        gmodDesc: "عالم من الخيال. من تقمص الأدوار الجاد للفوضى المطلقة. متعة اللعب الحقيقية.",
        cinemaTitle: "سينما آخر الليل",
        cinemaDesc: "البوشار جاهز؟ عم نعرض أفلام، أنمي، وأجواء رمضان الكلاسيكية بدقة عالية.",
        debateTitle: "الحلبة",
        debateDesc: "سياسة، دين، أو ليش البيتزا بالأناناس جريمة. تناقش بقوة، بس خلي الاحترام أساس.",
        revTitle: "العائلة",
        revSupernova: "\"بدأنا من اتصالات الساعة ٣ الصبح، وهلا صرنا قبيلة كاملة. مو مجرد سيرفر، هاد ملجأنا.\"",
        revAlex: "\"شفت السيرفر وهو بيكبر خطوة بخطوة. إذا بدك مكان حقيقي بدون تزييف، هاد هو المكان. أهلاً فيك.\"",
        revGeorge: "\"أنا بس بهتم بالكود والإضاءة، بس الناس هون هنن السحر الحقيقي. أجواء خيالية ١٠/١٠.\"",
        cultTitle: "التراث <br> العريق",
        cultSub: "فيروز بالصبح، والوسوف للروح.",
        cultDesc: "سوريا، لبنان، الأردن، فلسطين. لهجات كتيرة، بس الروح وحدة. جسر بين الأصالة والعصر الرقمي.",
        boosterTitle: "قاعة <span class='text-transparent bg-clip-text bg-gradient-to-r from-nitro-pink to-neon-purple'>الأساطير</span>",
        boosterDesc: "الأعضاء الذهبيين اللي مخليين الصوت واضح والبث عالي الدقة. كل الاحترام.",
        galleryTitle: "لحظات",
        gallerySub: "صور للذكرى",
        faqTitle: "سؤال <span class='text-levant-gold'>و</span> جواب",
        faqQ1: "كيف بوثق حسابي؟",
        faqA1: "ادخل صوت، سلم علينا، أو تفاعل مع بوت القوانين. الموضوع بسيط.",
        faqQ2: "هل مسموح لغير السوريين؟",
        faqA2: "أكيد ١٠٠٪. طالما بتحترم القوانين والجو العام، أنت من العيلة."
    }
};

let currentLang = 'en';

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const isOpen = menu.style.transform === 'translateX(0%)';
    menu.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0%)';
}

document.getElementById('open-menu').addEventListener('click', toggleMenu);
document.getElementById('close-menu').addEventListener('click', toggleMenu);

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden-loader');
        reveal();
    }, 1000);
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

        document.getElementById('cult-title').innerHTML = t.cultTitle;
        document.getElementById('cult-sub').innerText = t.cultSub;
        document.getElementById('cult-desc').innerText = t.cultDesc;
        
        document.getElementById('booster-title').innerHTML = t.boosterTitle;
        document.getElementById('booster-desc').innerText = t.boosterDesc;
        
        document.getElementById('gallery-title').innerText = t.galleryTitle;
        document.getElementById('gallery-sub').innerText = t.gallerySub;
        
        document.getElementById('faq-title').innerHTML = t.faqTitle;
        document.getElementById('faq-q1').innerText = t.faqQ1;
        document.getElementById('faq-a1').innerText = t.faqA1;
        document.getElementById('faq-q2').innerText = t.faqQ2;
        document.getElementById('faq-a2').innerText = t.faqA2;

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
