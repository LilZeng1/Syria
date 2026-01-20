/* Configuration */
const BACKEND_URL = 'https://YOUR-RENDER-APP-NAME.onrender.com'; // Change This To Your Render URL

/* State Management */
let currentLang = 'en';

/* Language Dictionary */
const translations = {
    en: {
        heroTitle: "Ahla w Sahla in Syria",
        heroSubtitle: "The vibes are immaculate. Grab your Matte and choose your identity.",
        sus: "When things get sus.",
        news: "Stay updated habibi.",
        voice: "Join the yapping session.",
        play: "Habibi come play.",
        son: "Son of the Levant.",
        guest: "Guest of Honor.",
        placeholder: "Enter Discord User ID",
        successMsg: "Mabrouk! Role assigned successfully.",
        errorId: "Bro, put your ID first!",
        errorNet: "Server is sleeping, try later."
    },
    ar: {
        heroTitle: "Ya Ahla w Sahla!",
        heroSubtitle: "El jaw nar. Shrab matte w na22i min inta.",
        sus: "Lamma l wade3 ysir sus.",
        news: "Khallik bil jaw ya kbir.",
        voice: "Ta3a 3al voice nsolli.",
        play: "Yalla gaming ya man.",
        son: "Ibn el Balad.",
        guest: "Dayfna el ghali.",
        placeholder: "Hott el Discord ID hon",
        successMsg: "Mabrouk ya kbir! El role sar 3andak.",
        errorId: "Lak wayn el ID? Hotto bl awal!",
        errorNet: "El server ta3ban shway, rja3 jarrib."
    }
};

/* Language Toggle Logic */
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
});

function updateLanguage() {
    const t = translations[currentLang];
    const body = document.body;
    
    /* Font Switching */
    body.style.fontFamily = currentLang === 'ar' ? 'var(--font-ar)' : 'var(--font-en)';
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'عربي' : 'English';
    
    /* Text Updates */
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
    document.getElementById('discord-id').placeholder = t.placeholder;

    /* Update Cards */
    document.querySelector('[data-key="sus"]').textContent = t.sus;
    document.querySelector('[data-key="news"]').textContent = t.news;
    document.querySelector('[data-key="voice"]').textContent = t.voice;
    document.querySelector('[data-key="play"]').textContent = t.play;
    document.querySelector('[data-key="son"]').textContent = t.son;
    document.querySelector('[data-key="guest"]').textContent = t.guest;
}

/* Alert Bubble Function */
function showAlert(message, type) {
    const container = document.getElementById('alert-container');
    const bubble = document.createElement('div');
    
    bubble.className = `alert-bubble ${type}`;
    const icon = type === 'success' ? '✅' : '⚠️';
    bubble.innerHTML = `<span>${icon}</span> ${message}`;
    
    container.appendChild(bubble);

    /* Remove After 3 Seconds */
    setTimeout(() => {
        bubble.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => bubble.remove(), 500);
    }, 3000);
}

/* Role Assignment Logic */
async function assignRole(roleKey) {
    const userIdInput = document.getElementById('discord-id');
    const userId = userIdInput.value.trim();
    const t = translations[currentLang];

    /* Validation */
    if (!userId) {
        showAlert(t.errorId, 'error');
        userIdInput.style.borderColor = '#ff3b30';
        setTimeout(() => userIdInput.style.borderColor = 'rgba(255,255,255,0.1)', 500);
        return;
    }

    /* Backend Call */
    try {
        const response = await fetch(`${BACKEND_URL}/api/assign-role`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, roleKey })
        });

        const data = await response.json();

        if (data.success) {
            showAlert(t.successMsg, 'success');
        } else {
            showAlert(data.message || 'Fi shi ghalat!', 'error');
        }
    } catch (error) {
        console.error(error);
        showAlert(t.errorNet, 'error');
    }
}
