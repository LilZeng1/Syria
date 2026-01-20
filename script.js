// Backend & State
const BACKEND_URL = 'https://syriabackend.onrender.com';
let currentLang = 'en';

const translations = {
    en: {
        heroSub: "Premium Digital Experience",
        heroTitle: "LEVANT Heritage.",
        identityTitle: "Identity Passport",
        success: "Identity Synced Successfully",
        errorId: "Enter a valid ID"
    },
    ar: {
        heroSub: "تجربة رقمية فاخرة",
        heroTitle: "تراث بلاد الشام",
        identityTitle: "جواز الهوية",
        success: "تم مزامنة الهوية بنجاح",
        errorId: "يرجى إدخال المعرف"
    }
};

// Pürüzsüz Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden-loader');
    }, 1200);
});

// Dil Değiştirici (Daha Akıcı)
document.getElementById('lang-toggle').addEventListener('click', function () {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const t = translations[currentLang];

    // Smooth opacity transition for text
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.querySelector('#hero h1').innerHTML = currentLang === 'ar' ? "تراث <br> الشام" : "LEVANT <br> <span class='italic serif'>Heritage.</span>";
        document.body.style.opacity = '1';
    }, 300);
});

// Gelişmiş Alert (Apple Style Toast)
function showAlert(message, type) {
    const container = document.getElementById('alert-container');
    const toast = document.createElement('div');
    toast.className = `px-6 py-4 glass-card rounded-2xl border border-white/10 text-[10px] font-bold uppercase tracking-widest shadow-2xl flex items-center gap-4 translate-x-10 opacity-0 transition-all duration-500`;

    const icon = type === 'success' ? 'bx-check-circle text-green-500' : 'bx-error-circle text-red-500';
    toast.innerHTML = `<i class='bx ${icon} text-xl'></i> ${message}`;

    container.appendChild(toast);

    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-x-10', 'opacity-0');
    }, 100);

    // Auto remove
    setTimeout(() => {
        toast.classList.add('translate-x-10', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Role Assign Logic
async function assignRole(roleKey) {
    const userId = document.getElementById('discord-id').value.trim();
    if (!userId) {
        showAlert(translations[currentLang].errorId, 'error');
        return;
    }

    // Button feedback
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = 'WAIT...';
    btn.style.opacity = '0.5';

    try {
        const response = await fetch(`${BACKEND_URL}/api/assign-role`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, roleKey })
        });
        const data = await response.json();

        if (data.success) showAlert(translations[currentLang].success, 'success');
        else showAlert(data.message || 'System Error', 'error');
    } catch (e) {
        showAlert('Network error, try again.', 'error');
    } finally {
        btn.innerText = originalText;
        btn.style.opacity = '1';
    }
}
