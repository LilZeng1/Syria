const translations = {
    en: {
        statText: "1,800+ Members — Missing You!",
        heroTitle: "The Heart <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>Of The Levant.</span>",
        heroSub: "Forget regular servers. This is where the real ones hang out.",
        enterBtn: "<i class='bx bxl-discord-alt text-2xl'></i> Jump In Discord",
        exploreBtn: "Explore Heritage",
        schedTitle: "The Schedule",
        revTitle: "The Family",
        galleryTitle: "Moments",
        gallerySub: "The history we build together",
        faqTitle: "Quick Q<span class='text-levant-gold'>&</span>A",
        faqQ1: "How do I verify?",
        faqA1: "You need to send an application to our staff. You will be asked:<ol class='list-decimal list-inside space-y-2 ml-2 marker:text-levant-gold'><li>What is your country of origin and how old are you?</li><li>Why do you want to join this server? What do you expect from it?</li><li>On a scale from 1 to 10, how tolerant are you of opinions that differ from your beliefs?</li></ol>",
        faqQ2: "Are non-Syrians welcome?",
        faqA2: "100%. If you vibe with the culture and respect the rules, you're family.",
        protocolTitle: "System <span class='text-levant-gold'>Protocols</span>",
        protocolSub: "/// READ_BEFORE_ENTRY",
        rule1Title: "Respect",
        rule1Desc: "Treat everyone as you wish to be treated. We are a family.",
        rule2Title: "Privacy",
        rule2Desc: "No leaking. Personal info stays private. Red line.",
        rule3Title: "No Hate",
        rule3Desc: "Racism and hate speech = Immediate ban. Zero tolerance.",
        rule4Title: "Clean Content",
        rule4Desc: "No NSFW, gore, or disturbing content. Keep it classy.",
        rule5Title: "Safe Links",
        rule5Desc: "Clarify before posting files or links to avoid auto-ban.",
        rule6Title: "No Spam",
        rule6Desc: "Don't abuse @everyone or ping staff without reason.",
        aboutTitle: "The Dream of <span class='text-levant-gold'>Unity</span>"
    },
    ar: {
        statText: "أكثر من ١٨٠٠ عضو — مكانك فاضي!",
        heroTitle: "قلب <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>بلاد الشام.</span>",
        heroSub: "انسَ السيرفرات العادية. هنا العائلة الحقيقية.",
        enterBtn: "<i class='bx bxl-discord-alt text-2xl'></i> ادخل السيرفر",
        exploreBtn: "اكتشف التراث",
        schedTitle: "جدولنا",
        revTitle: "العائلة",
        galleryTitle: "لحظات",
        gallerySub: "تاريخنا سوا",
        faqTitle: "سؤال <span class='text-levant-gold'>و</span> جواب",
        faqQ1: "كيف بوثق حسابي؟",
        faqA1: "لازم تقدم طلب للادارة، رح تنسأل اسئلة بسيطة:<ol class='list-decimal list-inside space-y-2 ml-2 marker:text-levant-gold'><li>من أي بلد أنت وكم عمرك؟</li><li>ليش حابب تنضم للسيرفر؟ وشو متوقع منو؟</li><li>من ١ لـ ١٠، قديش بتتقبل الآراء اللي بتخالفك؟</li></ol>",
        faqQ2: "هل مسموح لغير السوريين؟",
        faqA2: "أكيد ١٠٠٪. طالما بتحترم القوانين، أنت من العيلة.",
        protocolTitle: "قوانين <span class='text-levant-gold'>النظام</span>",
        protocolSub: "/// اقرأ_قبل_الدخول",
        rule1Title: "الاحترام",
        rule1Desc: "عامل الناس كما تحب أن تُعامل. نحترم بعض، نناقش بأدب.",
        rule2Title: "الخصوصية",
        rule2Desc: "ممنوع مشاركة صور، أصوات، أو أي معلومة شخصية بدون إذن.",
        rule3Title: "لا للكراهية",
        rule3Desc: "خطاب الكراهية، العنصرية، التمييز بكل أنواعه = طرد مباشر.",
        rule4Title: "محتوى نظيف",
        rule4Desc: "المحتوى الجنسي، الدموي، أو التحريضي ممنوع كلياً.",
        rule5Title: "روابط آمنة",
        rule5Desc: "ما تنشر أي روابط أو ملفات مش واضحة. وضّح قبل ما تنشر.",
        rule6Title: "بدون إزعاج",
        rule6Desc: "لا تستخدم @ للجميع أو للإدارة بدون سبب ضروري.",
        aboutTitle: "حلم <span class='text-levant-gold'>الوحدة</span>"
    }
};
let currentLang = 'en';
const playlist = [
    { name: "Fairuz - Amara ya Amara", src: "./Audios/AmaraYaAmara.mp3" },
    { name: "Fairuz - Wahdon", src: "./Audios/Wahdon.mp3" },
    { name: "Fairuz - Ana La Habibi", src: "./Audios/AnaLaHabibi.mp3" },
    { name: "LoFi Track - Levant Chill", src: "./Audios/LoFiTrack.mp3" }
];
let currentTrackIndex = 0;
const audio = document.getElementById('bg-music');
const trackName = document.getElementById('track-name');
const momentsGrid = document.getElementById('moments-grid');
function initAudioPlayer() {
    audio.src = playlist[currentTrackIndex].src;
    trackName.innerText = playlist[currentTrackIndex].name;
    document.getElementById('toggle-music').addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            document.getElementById('toggle-music').innerHTML = "<i class='bx bx-pause text-xl'></i>";
        } else {
            audio.pause();
            document.getElementById('toggle-music').innerHTML = "<i class='bx bx-play text-xl'></i>";
        }
    });
    document.getElementById('next-track').addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        updateTrack();
    });
    document.getElementById('prev-track').addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        updateTrack();
    });
}
function updateTrack() {
    audio.src = playlist[currentTrackIndex].src;
    trackName.innerText = playlist[currentTrackIndex].name;
    audio.play();
    document.getElementById('toggle-music').innerHTML = "<i class='bx bx-pause text-xl'></i>";
}
function initGallery() {
    const fileInput = document.getElementById('file-input');
    const submitBtn = document.getElementById('submit-upload');
    const imagePreview = document.getElementById('image-preview');
    const previewContainer = document.getElementById('preview-container');
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imagePreview.src = event.target.result;
                previewContainer.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }
    });
    submitBtn.addEventListener('click', () => {
        if (imagePreview.src) {
            if (momentsGrid.innerText.includes("No memories yet")) momentsGrid.innerHTML = "";
            const div = document.createElement('div');
            div.className = "group relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 reveal active";
            div.innerHTML = `<img src="${imagePreview.src}" class="w-full h-full object-cover"><div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><i class='bx bx-expand text-3xl text-white'></i></div>`;
            momentsGrid.prepend(div);
            closeModal();
        }
    });
}
function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Damascus', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('clock-display').innerText = now.toLocaleTimeString('en-GB', options);
}
const phrases = ["Not just another server—it's home.", "From heated debates to 3 AM gaming.", "Come as you are, stay for the family."];
let pIdx = 0, cIdx = 0, isDel = false;
function typeEffect() {
    const curr = phrases[pIdx];
    const target = document.getElementById('hero-sub');
    target.innerText = isDel ? curr.substring(0, cIdx - 1) : curr.substring(0, cIdx + 1);
    cIdx = isDel ? cIdx - 1 : cIdx + 1;
    if (!isDel && cIdx === curr.length) {
        setTimeout(() => isDel = true, 2000);
    } else if (isDel && cIdx === 0) {
        isDel = false;
        pIdx = (pIdx + 1) % phrases.length;
    }
    setTimeout(typeEffect, isDel ? 40 : 80);
}
function initSettingsPanel() {
    const trigger = document.getElementById('portal-trigger');
    const panel = document.getElementById('settings-panel');
    const close = document.getElementById('close-settings');
    const overlay = document.getElementById('settings-overlay');
    trigger.addEventListener('click', () => {
        panel.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
    });
    close.addEventListener('click', () => {
        panel.classList.add('translate-x-full');
        overlay.classList.remove('opacity-100');
        setTimeout(() => overlay.classList.add('hidden'), 500);
    });
}
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
    });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('opacity-0');
        setTimeout(() => document.getElementById('loader').classList.add('hidden'), 700);
        typeEffect();
        initAudioPlayer();
        initGallery();
        initSettingsPanel();
        updateTime();
        setInterval(updateTime, 1000);
        reveal();
    }, 1500);
});
const dot = document.getElementById('cursor-dot');
const out = document.getElementById('cursor-outline');
window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    out.style.left = e.clientX + 'px';
    out.style.top = e.clientY + 'px';
});
function openModal() {
    const m = document.getElementById('upload-modal');
    m.classList.remove('hidden');
    setTimeout(() => { m.classList.add('opacity-100'); document.getElementById('upload-content').classList.remove('scale-95'); }, 10);
}
function closeModal() {
    const m = document.getElementById('upload-modal');
    m.classList.remove('opacity-100');
    document.getElementById('upload-content').classList.add('scale-95');
    setTimeout(() => { m.classList.add('hidden'); document.getElementById('preview-container').classList.add('hidden'); }, 300);
}
document.getElementById('upload-btn').addEventListener('click', openModal);
document.getElementById('close-upload').addEventListener('click', closeModal);
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    const t = translations[currentLang];
    document.getElementById('stat-text').innerText = t.statText;
    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('enter-btn').innerHTML = t.enterBtn;
    document.getElementById('explore-btn').innerText = t.exploreBtn;
    document.getElementById('sched-title').innerHTML = t.schedTitle + " <i class='bx bxs-zap text-4xl text-yellow-400 absolute -top-4 -right-8 animate-pulse'></i>";
    document.getElementById('rev-title').innerText = t.revTitle;
    document.getElementById('about-title').innerHTML = t.aboutTitle;
    document.getElementById('gallery-title').innerText = t.galleryTitle;
    document.getElementById('gallery-sub').innerText = t.gallerySub;
    document.getElementById('faq-title').innerHTML = t.faqTitle;
    document.getElementById('faq-q1').innerText = t.faqQ1;
    document.getElementById('faq-a1').innerHTML = t.faqA1;
    document.getElementById('faq-q2').innerText = t.faqQ2;
    document.getElementById('faq-a2').innerText = t.faqA2;
    document.getElementById('protocol-title').innerHTML = t.protocolTitle;
    document.getElementById('protocol-sub').innerText = t.protocolSub;
    document.getElementById('lang-toggle').innerText = currentLang === 'en' ? 'AR' : 'EN';
});
