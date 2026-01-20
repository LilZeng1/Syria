const translations = {
    en: {
        navHome: "Home",
        heroTitle: "Beyond <br> <span class='italic serif'>Borders.</span>",
        heroSub: "The ultimate digital hub for the Levantine youth. From Damascus nights to Among Us marathons. A space where tradition meets the gaming generation."
    },
    ar: {
        navHome: "الرئيسية",
        heroTitle: "ما وراء <br> <span class='italic serif'>الحدود.</span>",
        heroSub: "المركز الرقمي الأمثل لشباب بلاد الشام. من ليالي دمشق إلى ماراثونات أمونج أس. مساحة حيث يلتقي التراث بجيل الألعاب."
    }
};

let currentLang = 'en';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden-loader');
    }, 1000);
});

document.getElementById('lang-toggle').addEventListener('click', function () {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const t = translations[currentLang];
    
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        this.innerText = currentLang === 'en' ? 'AR' : 'EN';
        
        document.querySelector('#hero h1').innerHTML = t.heroTitle;
        document.querySelector('#hero p').innerText = t.heroSub;
        
        document.body.style.opacity = '1';
    }, 400);
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});
