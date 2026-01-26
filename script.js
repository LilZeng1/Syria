const translations = {
    en: {
        statText: "1,800+ Members — Missing You!",
        heroTitle: "The Heart <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>Of The Levant.</span>",
        heroSub: "Forget regular servers. This is where the real ones hang out.",
        enterBtn: "<i class='bx bxl-discord-alt text-2xl'></i> Jump In Discord",
        exploreBtn: "Check Events",
        schedTitle: "The Schedule",
        revTitle: "The Family",
        cultTitle: "The <br> Heritage",
        galleryTitle: "Moments",
        gallerySub: "The history we build together",
        faqTitle: "Quick Q<span class='text-levant-gold'>&</span>A",
        faqQ1: "How do I verify?",
        faqA1: "You need to send an application to our staff...",
        faqQ2: "Are non-Syrians welcome?",
        faqA2: "100%. If you vibe with the culture, you're family."
    },
    ar: {
        statText: "أكثر من ١٨٠٠ عضو — مكانك فاضي!",
        heroTitle: "قلب <br> <span class='italic serif text-transparent bg-clip-text bg-gradient-to-r from-levant-gold via-yellow-200 to-levant-gold animate-gradient-x'>بلاد الشام.</span>",
        heroSub: "انسَ السيرفرات العادية. هنا العائلة الحقيقية.",
        enterBtn: "<i class='bx bxl-discord-alt text-2xl'></i> ادخل السيرفر",
        exploreBtn: "الفعاليات",
        schedTitle: "جدولنا",
        revTitle: "العائلة",
        cultTitle: "التراث <br> العريق",
        galleryTitle: "لحظات",
        gallerySub: "تاريخنا سوا",
        faqTitle: "سؤال <span class='text-levant-gold'>و</span> جواب",
        faqQ1: "كيف بوثق حسابي؟",
        faqA1: "لازم تقدم طلب للادارة، رح تنسأل اسئلة بسيطة...",
        faqQ2: "هل مسموح لغير السوريين؟",
        faqA2: "أكيد ١٠٠٪. طالما بتحترم القوانين، أنت من العيلة."
    }
};

let currentLang = 'en';

// Interactive Elements Hover
const interactables = document.querySelectorAll('.interactable');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering-interactable');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering-interactable');
    });
});

// Typing Effect
const phrases = [
    "Not just another server—it's home.", 
    "From heated debates to 3 AM gaming.", 
    "Come as you are, stay for the family."
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeTarget = document.getElementById('hero-sub');

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if(isDeleting) {
        typeTarget.innerText = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeTarget.innerText = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if(!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 30 : 50;
    setTimeout(typeEffect, speed);
}

// Core Loader & Initilaziton
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden-loader');
        reveal();
        initStarfield();
        initTilt();
        initPortal();
        typeEffect();
    }, 1500);
});

// Menu Logic
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const isOpen = menu.style.transform === 'translateX(0%)';
    menu.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0%)';
}
document.getElementById('open-menu').addEventListener('click', toggleMenu);
document.getElementById('close-menu').addEventListener('click', toggleMenu);

// Scroll Reveal
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);

// Strict Upload Logic
const modal = document.getElementById('upload-modal');
const btn = document.getElementById('upload-btn');
const close = document.getElementById('close-upload');
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('preview-container');
const imagePreview = document.getElementById('image-preview');
const submitBtn = document.getElementById('submit-upload');
const errorOverlay = document.getElementById('error-overlay');
const dropVisuals = document.getElementById('drop-visuals');

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
    errorOverlay.classList.add('hidden');
    dropVisuals.classList.remove('border-red-500', 'bg-red-500/10');
}

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Drag & Drop Visuals
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropVisuals.classList.add('border-levant-gold', 'bg-levant-gold/20');
    });
});
['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropVisuals.classList.remove('border-levant-gold', 'bg-levant-gold/20');
    });
});

function handleFile(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/x-icon'];
    
    if (!validTypes.includes(file.type)) {
        errorOverlay.classList.remove('hidden');
        dropVisuals.classList.add('border-red-500', 'bg-red-500/10');
        setTimeout(() => {
            errorOverlay.classList.add('hidden');
            dropVisuals.classList.remove('border-red-500', 'bg-red-500/10');
        }, 2000);
        fileInput.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        imagePreview.src = e.target.result;
        previewContainer.classList.remove('hidden');
    }
    reader.readAsDataURL(file);
}

dropZone.addEventListener('drop', (e) => {
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
});

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) handleFile(file);
});

submitBtn.addEventListener('click', () => {
    if (!fileInput.files[0] && !imagePreview.src) return;
    
    submitBtn.innerHTML = '<i class="bx bx-loader-alt animate-spin text-xl"></i> UPLOADING...';
    
    setTimeout(() => {
        const newCard = document.createElement('div');
        newCard.className = 'break-inside-avoid glass-card rounded-[2rem] p-2 group hover:rotate-2 transition-transform duration-300 reveal active interactable';
        newCard.innerHTML = `
            <div class="bg-gray-800 rounded-[1.8rem] overflow-hidden aspect-square relative">
                <img src="${imagePreview.src}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <span class="text-[10px] font-black uppercase tracking-widest text-white">Just Now</span>
                </div>
            </div>
        `;
        
        const grid = document.getElementById('gallery-grid');
        grid.prepend(newCard);
        
        closeModal();
        submitBtn.innerHTML = '<span class="relative z-10">Initialize Upload</span><div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>';
    }, 1500);
});

// STARFIELD
function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let width, height, stars = [];
    const maxStars = 150;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function Star() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 2;
        this.alpha = Math.random();
    }

    Star.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
        this.alpha += (Math.random() - 0.5) * 0.05;
        if (this.alpha < 0) this.alpha = 0;
        if (this.alpha > 1) this.alpha = 1;
    }

    Star.prototype.draw = function () {
        ctx.fillStyle = "white";
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    for (let i = 0; i < maxStars; i++) stars.push(new Star());

    function animate() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', resize);
    resize();
    animate();
}

// PORTAL & THEME LOGIC
function initPortal() {
    const trigger = document.getElementById('portal-trigger');
    const overlay = document.getElementById('portal-overlay');
    const closeBtn = document.getElementById('close-portal');
    const closeBg = document.getElementById('close-portal-bg');
    const themeBtns = document.querySelectorAll('.theme-btn');
    const matrixToggle = document.getElementById('toggle-matrix');
    const focusToggle = document.getElementById('toggle-focus');

    function togglePortal() {
        const isHidden = overlay.classList.contains('hidden');
        if (isHidden) {
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.remove('opacity-0');
                document.getElementById('portal-content').classList.remove('scale-95');
            }, 10);
        } else {
            overlay.classList.add('opacity-0');
            document.getElementById('portal-content').classList.add('scale-95');
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
        }
    }

    trigger.addEventListener('click', togglePortal);
    closeBtn.addEventListener('click', togglePortal);
    closeBg.addEventListener('click', togglePortal);

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.getAttribute('data-color');
            document.documentElement.style.setProperty('--accent-color', color);
            
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(window.innerWidth/2, window.innerHeight/2));
            }
        });
    });

    let matrixInterval;
    let isMatrixOn = false;
    matrixToggle.addEventListener('click', () => {
        isMatrixOn = !isMatrixOn;
        document.getElementById('matrix-status').style.backgroundColor = isMatrixOn ? '#4ade80' : '#4b5563';
        document.getElementById('matrix-status').style.boxShadow = isMatrixOn ? '0 0 10px #4ade80' : 'none';
        document.getElementById('matrix-canvas').style.opacity = isMatrixOn ? '0.1' : '0';

        if (isMatrixOn) startMatrix();
        else clearInterval(matrixInterval);
    });

    function startMatrix() {
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) drops[x] = 1;

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
            ctx.fillStyle = accent;
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        clearInterval(matrixInterval);
        matrixInterval = setInterval(draw, 30);
    }

    let isFocusOn = false;
    focusToggle.addEventListener('click', () => {
        isFocusOn = !isFocusOn;
        document.getElementById('focus-status').style.backgroundColor = isFocusOn ? '#60a5fa' : '#4b5563';
        document.getElementById('focus-status').style.boxShadow = isFocusOn ? '0 0 10px #60a5fa' : 'none';
        if (isFocusOn) document.body.classList.add('focus-mode');
        else document.body.classList.remove('focus-mode');
    });
}

// TILT 3D EFFECT
function initTilt() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// --- LANGUAGE SWITCH ---
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
});
document.getElementById('lang-toggle-mob').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
    setTimeout(toggleMenu, 600);
});

function updateLanguage() {
    const t = translations[currentLang];
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.getElementById('stat-text').innerText = t.statText;
        document.getElementById('hero-title').innerHTML = t.heroTitle;
        // Reset typewriter
        phraseIndex = 0; charIndex = 0; isDeleting = false;
        
        document.getElementById('enter-btn').innerHTML = t.enterBtn;
        document.getElementById('explore-btn').innerText = t.exploreBtn;
        document.getElementById('sched-title').innerText = t.schedTitle;
        document.getElementById('rev-title').innerText = t.revTitle;
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
