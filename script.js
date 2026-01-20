/* Configuration */
const BACKEND_URL = 'https://syriabackend.onrender.com';
const SERVER_INVITE = 'https://discord.gg/T6CadMhUgK';

/* State Management */
let currentLang = 'en';

/* DOM Elements */
const loader = document.getElementById('loader');
const navbar = document.querySelector('.super-navbar');

const translations = {
    en: {
        heroTitleLine1: "THE HEART OF",
        heroTitleLine2: "THE LEVANT.",
        heroSubtitle: "More than a server. It's a digital Damascene house. Where Fairuz plays at 7 AM and Gaming starts at 7 PM.",
        onlineBadge: "Now Online & Yapping",
        cultureTitle: "Culture &",
        cultureHeritage: "Heritage",
        joinBtn: "Join the Vibe",
        morning: "Morning Rituals",
        morningSub: "Fairuz & Coffee. Need we say more?",
        food: "Gastronomy",
        foodSub: "Shawarma, Falafel, Tabouleh. Pure love.",
        matte: "The Matte Circle",
        matteSub: "Pass the straw, share the story.",
        ancient: "Ancient Roots",
        ancientSub: "From the oldest inhabited cities to the newest memes.",
        identityTitle: "Identity &",
        notifications: "Notifications",
        identitySub: "Connect your Discord, claim your spot.",
        placeholder: "Enter Discord User ID (Required)",
        pingRoles: "Ping Roles",
        originRoles: "Origin",
        syrian: "Syrian",
        native: "NATIVE",
        nonSyrian: "Non-Syrian",
        guest: "GUEST",
        messages: {
            success: "Mabrouk! Role assigned successfully.",
            errorId: "Bro, put your ID first!",
            errorNet: "Server is sleeping, try later.",
            errorGeneric: "Something went wrong habibi."
        }
    },
    ar: {
        heroTitleLine1: "قلب",
        heroTitleLine2: "بلاد الشام.",
        heroSubtitle: "أكتر من مجرد سيرفر.. هاد بيت شامي ديجيتال. فيروز الصبح، والجميغ والضحك طول الليل.",
        onlineBadge: "السيرفر شغال والشباب عم تدردش",
        cultureTitle: "ثقافة و",
        cultureHeritage: "أصالة",
        joinBtn: "فوت عالجوّ",
        morning: "روقان الصبح",
        morningSub: "فنجان قهوة وصوت فيروز.. بدك أكتر من هيك؟",
        food: "أكلنا غير",
        foodSub: "شاورما، فلافل، تبولة.. أصل الطعمة هون.",
        matte: "قعدة متة",
        matteSub: "مرق المصاصة وخلّينا نسمع قصتك.",
        ancient: "جذورنا بالجمجمة",
        ancientSub: "من أقدم مدن بالعالم لأجدد ميمز عالنت.",
        identityTitle: "هويتك و",
        notifications: "تنبيهاتك",
        identitySub: "اربط الديسكورد تبعك وخد مكانك بيناتنا.",
        placeholder: "حط الـ ID تبعك هون يا وحش",
        pingRoles: "رتب التنبيهات",
        originRoles: "من وين إنت؟",
        syrian: "سوري",
        native: "ابن بلد",
        nonSyrian: "مو سوري",
        guest: "ضيف غالي",
        messages: {
            success: "مبروك يا كبير! الرتبة صارت عندك.",
            errorId: "لك وين الـ ID؟ حطو أول شي!",
            errorNet: "السيرفر نايم حالياً، جرب شوي تانية.",
            errorGeneric: "صار في شي غلط يا حبيب."
        }
    }
};

/* Remove Loader */
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden-loader');
    }, 1500); // 1.5s delay for effect
});

/* Scroll Effect for Navbar */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* Language Toggle Logic */
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
});

function updateLanguage() {
    const t = translations[currentLang];
    const body = document.body;
    
    // Direction & Font Switch
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        body.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        body.style.fontFamily = "'Inter', sans-serif";
    }

    // Header & Buttons
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'عربي' : 'English';
    
    // Hero Section
    const line1 = document.querySelector('.mega-title .line-1') || document.querySelector('.mega-title span:first-child');
    const line2 = document.querySelector('.mega-title .line-2') || document.querySelector('.mega-title span:last-child');
    if (line1) line1.textContent = t.heroTitleLine1;
    if (line2) line2.textContent = t.heroTitleLine2;
    
    document.querySelector('.hero-desc').textContent = t.heroSubtitle;
    document.querySelector('.badge-pill span:last-child').textContent = t.onlineBadge;
    document.querySelector('.btn-primary').innerHTML = `${t.joinBtn} <i class='bx bx-right-arrow-alt'></i>`;

    // Culture Section
    document.querySelector('.section-title').innerHTML = `${t.cultureTitle} <span class="serif">${t.cultureHeritage}</span>`;
    
    // Identity Section
    document.querySelector('.panel-header h2').innerHTML = `${t.identityTitle} <span class="highlight-text">${t.notifications}</span>`;
    document.querySelector('.panel-header p').textContent = t.identitySub;
    document.getElementById('discord-id').placeholder = t.placeholder;

    // Footer
    document.querySelector('.footer-brand p').textContent = "من سنة ٢٠٢٠.";
    document.querySelector('.footer-brand h2').nextElementSibling.textContent = t.footerDesc || "Since 2020...";
}

/* Alert Bubble System */
function showAlert(message, type) {
    const container = document.getElementById('alert-container');
    const bubble = document.createElement('div');
    
    // Tailwind classes for the bubble
    const baseClasses = "alert-bubble flex items-center gap-3 px-6 py-4 rounded-2xl text-white font-medium shadow-2xl backdrop-blur-md border";
    const typeClasses = type === 'success' 
        ? "bg-green-900/80 border-green-500/50" 
        : "bg-red-900/80 border-red-500/50";
        
    bubble.className = `${baseClasses} ${typeClasses}`;
    
    const icon = type === 'success' ? "<i class='bx bx-check-circle text-xl'></i>" : "<i class='bx bx-error-circle text-xl'></i>";
    bubble.innerHTML = `${icon} <span>${message}</span>`;
    
    container.appendChild(bubble);

    // Remove After 3 Seconds
    setTimeout(() => {
        bubble.style.animation = 'bubbleFade 0.5s forwards';
        setTimeout(() => bubble.remove(), 500);
    }, 3000);
}

/* Role Assignment Logic */
async function assignRole(roleKey) {
    const userIdInput = document.getElementById('discord-id');
    const userId = userIdInput.value.trim();
    const t = translations[currentLang].messages;

    /* Validation */
    if (!userId) {
        showAlert(t.errorId, 'error');
        userIdInput.focus();
        userIdInput.parentElement.classList.add('animate-pulse');
        setTimeout(() => userIdInput.parentElement.classList.remove('animate-pulse'), 500);
        return;
    }

    const btn = event.currentTarget;
    const originalContent = btn.innerHTML;
    
    // Loading State on Button
    btn.innerHTML = `<i class='bx bx-loader-alt bx-spin text-2xl'></i>`;
    btn.disabled = true;

    /* Backend Call */
    try {
        const response = await fetch(`${BACKEND_URL}/api/assign-role`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, roleKey })
        });

        const data = await response.json();

        if (data.success) {
            showAlert(t.success, 'success');
        } else {
            showAlert(data.message || t.errorGeneric, 'error');
        }
    } catch (error) {
        console.error(error);
        showAlert(t.errorNet, 'error');
    } finally {
        // Restore Button
        btn.innerHTML = originalContent;
        btn.disabled = false;
    }
}
