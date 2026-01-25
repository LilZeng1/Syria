const translations = {
    en: {
        statText: "1,800+ Members — You're the missing one!",
        navHome: "Home",
        navSchedule: "Schedule",
        navReviews: "Family",
        navHeritage: "Heritage",
        navDiscord: "Join Discord",
        heroTitle: "The Heart <br> <span class='italic serif text-levant-gold'>Of The Levant.</span>",
        heroSub: "Forget regular servers. This is where the real ones hang out. From deep talks to gaming chaos, it's just home.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> Jump In Discord",
        exploreBtn: "Check Events",
        schedTitle: "The Schedule",
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
        faqA1: `<p class="mb-2">You need to send an application to our staff. You will be asked:</p>
                <ol class="list-decimal list-inside space-y-1 ml-2">
                    <li>What is your country of origin and how old are you?</li>
                    <li>Why do you want to join this server? What do you expect from it?</li>
                    <li>On a scale from 1 to 10, How tolerant are you of opinions that differ from your beliefs?</li>
                </ol>
                <p class="mt-2">If accepted by staff, you're in.</p>`,
        faqQ2: "Are non-Syrians welcome?",
        faqA2: "100%. If you vibe with the culture and respect the rules, you're family."
    },
    ar: {
        statText: "أكثر من ١٨٠٠ عضو — أنت الشخص الناقص!",
        navHome: "الرئيسية",
        navSchedule: "الجدول",
        navReviews: "العائلة",
        navHeritage: "التراث",
        navDiscord: "انضم إلينا",
        heroTitle: "قلب <br> <span class='italic serif text-levant-gold'>بلاد الشام.</span>",
        heroSub: "انسَ السيرفرات العادية. هنا المكان اللي بيجمعنا من جد. من النقاشات العميقة لجنون الألعاب، هنا بيتك.",
        enterBtn: "<i class='bx bxl-discord-alt text-xl'></i> ادخل السيرفر",
        exploreBtn: "جدول الفعاليات",
        schedTitle: "جدولنا",
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
        faqA1: `<p class="mb-2">لازم تقدم طلب للادارة، رح تنسأل:</p>
                <ol class="list-decimal list-inside space-y-1 ml-2">
                    <li>ما هو بلدك الأصلي وكم عمرك؟</li>
                    <li>لماذا تريد الانضمام إلى هذا سيرفر؟ وماذا تتوقع منه؟</li>
                    <li>على مقياس من 1 إلى 10، ما مدى تسامحك مع الآراء التي تختلف عن معتقداتك؟</li>
                </ol>
                <p class="mt-2">اذا وافقوا عليك، مبروك صرت منا.</p>`,
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

        document.getElementById('sched-title').innerText = t.schedTitle;

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
        document.getElementById('faq-a1').innerHTML = t.faqA1;
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

const modal = document.getElementById('upload-modal');
const btn = document.getElementById('upload-btn');
const close = document.getElementById('close-upload');
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('preview-container');
const imagePreview = document.getElementById('image-preview');
const submitBtn = document.getElementById('submit-upload');

function openModal() {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        document.getElementById('upload-content').classList.remove('scale-95');
    }, 10);
}

function closeModal() {
    modal.classList.add('opacity-0');
    document.getElementById('upload-content').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        resetForm();
    }, 300);
}

function resetForm() {
    fileInput.value = '';
    previewContainer.classList.add('hidden');
    imagePreview.src = '';
}

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            previewContainer.classList.remove('hidden');
        }
        reader.readAsDataURL(file);
    }
});

submitBtn.addEventListener('click', () => {
    if (!fileInput.files[0]) return;
    
    const newCard = document.createElement('div');
    newCard.className = 'break-inside-avoid glass-card rounded-2xl p-2 group hover:rotate-2 transition-transform duration-300 reveal active';
    newCard.innerHTML = `
        <div class="bg-gray-800 rounded-xl overflow-hidden aspect-video relative">
            <img src="${imagePreview.src}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <span class="text-[10px] font-black uppercase tracking-widest text-white">Just Now</span>
            </div>
        </div>
    `;
    
    document.getElementById('gallery-grid').prepend(newCard);
    closeModal();
});
