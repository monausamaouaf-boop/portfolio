/* ============================================
   Mona Osama Portfolio — Interactions & i18n
   ============================================ */

const FORMSPREE_FORM_ID = 'xykqqwoa';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

const i18n = {
    en: {
        nav: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', education: 'Education', contact: 'Contact' },
        hero: {
            greeting: "Hello, I'm",
            location: '27 El-Etemad St., Imbaba, Giza',
            bio: 'Bridging the gap between operational excellence, powerful communication, and community impact.',
            ctaWork: 'View My Work',
            ctaContact: 'Get In Touch',
            typing: [
                'Customer Service Specialist',
                'Certified Quran Educator',
                'Digital Journalist'
            ]
        },
        about: {
            title: 'About Me',
            text: `I am a Customer Service Specialist with over 3 years of experience in call center operations and online order management within the fast-food industry. I specialize in resolving complex customer complaints, optimizing delivery workflows, and maintaining strong satisfaction rates through clear and empathetic communication.

With a degree in Arabic Linguistics from Al-Azhar University, I bring excellent communication and writing skills to my professional roles, alongside experience as a digital news editor. Outside of my career, I am deeply committed to community service, volunteering as a Quran and Tajweed instructor. I am looking for a challenging customer operations role where I can deliver impactful service solutions and drive business growth.`
        },
        experience: { title: 'Professional Experience', volunteer: 'Volunteering' },
        skills: { title: 'Core Skills & Expertise' },
        education: { title: 'Education' },
        contact: {
            title: 'Get In Touch',
            subtitle: 'Feel free to reach out for professional opportunities, educational collaborations, or media projects.',
            emailTitle: 'Email',
            phoneTitle: 'Phone',
            socialTitle: 'Social Media',
            formTitle: 'Contact Form',
            phone: 'Phone',
            whatsapp: 'WhatsApp',
            whatsappCta: 'Chat on WhatsApp',
            email: 'Email',
            facebook: 'Facebook',
            instagram: 'Instagram',
            formName: 'Full Name',
            formEmail: 'Email Address',
            formMessage: 'Message',
            formSubmit: 'Send Message',
            errorName: 'Please enter your name (at least 2 characters)',
            errorEmail: 'Please enter a valid email address',
            errorMessage: 'Please enter your message (at least 10 characters)',
            success: 'Thank you! Your message has been sent successfully.',
            error: 'Something went wrong. Please try again or contact me directly.',
            errorConfig: 'Form is not configured. Replace YOUR_FORM_ID in script.js with your Formspree form ID.',
            sending: 'Sending…'
        },
        footer: { rights: 'All Rights Reserved.' }
    },
    ar: {
        nav: { home: 'الرئيسية', about: 'نبذة عني', experience: 'الخبرات', skills: 'المهارات', education: 'التعليم', contact: 'تواصل معي' },
        hero: {
            greeting: 'مرحباً، أنا',
            location: '27 شارع الاعتماد، إمبابة، الجيزة',
            bio: 'أجمع بين التميز التشغيلي، والتواصل الفعّال، والأثر المجتمعي الإيجابي.',
            ctaWork: 'استعرض أعمالي',
            ctaContact: 'تواصل معي',
            typing: [
                'أخصائية خدمة عملاء',
                'معلّمة قرآن معتمدة',
                'صحفية رقمية'
            ]
        },
        about: {
            title: 'نبذة عني',
            text: `أخصائية خدمة عملاء بخبرة تتجاوز 3 سنوات في عمليات مراكز الاتصال وإدارة الطلبات الإلكترونية بقطاع المطاعم. أتميز بالقدرة على حل الشكاوى المعقدة، وتحسين مسارات التوصيل، والحفاظ على مستويات رضا عالية من خلال تواصل واضح وفعّال.

أحمل بكالوريوس في اللغة العربية من جامعة الأزهر، مما يمنحني مهارات قوية في التواصل والكتابة والتدقيق اللغوي، إلى جانب خبرتي في الصحافة الرقمية. ألتزم كذلك بالأثر المجتمعي الإيجابي من خلال عملي التطوعي كمشرفة ومعلمة للقرآن الكريم والتجويد. أبحث عن فرصة مهنية جديدة لاستثمار خبراتي في تطوير خدمة العملاء والمساهمة في نجاح المؤسسة.`
        },
        experience: { title: 'الخبرة المهنية', volunteer: 'تطوع' },
        skills: { title: 'المهارات والخبرات الأساسية' },
        education: { title: 'التعليم' },
        contact: {
            title: 'تواصل معي',
            subtitle: 'يسعدني التواصل معكم للفرص المهنية، أو التعاون التعليمي، أو المشاريع الإعلامية.',
            emailTitle: 'البريد الإلكتروني',
            phoneTitle: 'الهاتف',
            socialTitle: 'وسائل التواصل',
            formTitle: 'نموذج التواصل',
            phone: 'الهاتف',
            whatsapp: 'واتساب',
            whatsappCta: 'تواصل عبر واتساب',
            email: 'البريد الإلكتروني',
            facebook: 'فيسبوك',
            instagram: 'إنستغرام',
            formName: 'الاسم الكامل',
            formEmail: 'البريد الإلكتروني',
            formMessage: 'الرسالة',
            formSubmit: 'إرسال الرسالة',
            errorName: 'يرجى إدخال اسمك (حرفان على الأقل)',
            errorEmail: 'يرجى إدخال بريد إلكتروني صحيح',
            errorMessage: 'يرجى إدخال رسالتك (10 أحرف على الأقل)',
            success: 'شكراً لك! تم إرسال رسالتك بنجاح.',
            error: 'حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل مباشرة.',
            errorConfig: 'النموذج غير مُعدّ. استبدل YOUR_FORM_ID في script.js بمعرّف Formspree الخاص بك.',
            sending: 'جارٍ الإرسال…'
        },
        footer: { rights: 'جميع الحقوق محفوظة.' }
    }
};

const experienceData = [
    {
        date: { en: '2025 – 2026', ar: '2025 – 2026' },
        title: { en: 'Customer Service & Complaints Specialist', ar: 'أخصائية خدمة عملاء وشكاوى' },
        company: { en: 'Al-Agha Restaurants Chain', ar: 'سلسلة مطاعم الأغا' },
        desc: {
            en: 'Resolved escalated customer complaints and inquiries across phone and digital channels, keeping satisfaction rates above 90%. Analyzed customer feedback to help fill service gaps, and collaborated directly with branch managers to resolve operational issues and delivery delays.',
            ar: 'حل شكاوى واستفسارات العملاء عبر الهاتف والقنوات الرقمية مع الحفاظ على رضا العملاء فوق 90%. تحليل الملاحظات لتحديد فجوات الخدمة، والتنسيق المباشر مع مديري الفروع لمعالجة المشكلات التشغيلية وتأخيرات التوصيل.'
        }
    },
    {
        date: { en: '2024', ar: '2024' },
        title: { en: 'Online Department Specialist', ar: 'أخصائية قسم الطلبات الإلكترونية' },
        company: { en: 'Al-Agha Restaurants Chain', ar: 'سلسلة مطاعم الأغا' },
        desc: {
            en: 'Managed end-to-end online orders from corporate applications and delivery networks like Talabat and Elmenus. Monitored delivery fulfillment and courier performance to maintain service quality and ensure fast turnaround times.',
            ar: 'إدارة الطلبات الإلكترونية عبر التطبيقات الخاصة والمنصات الخارجية مثل طلبات والمنيوز. متابعة أداء المناديب لضمان سرعة التوصيل والحفاظ على جودة الخدمة.'
        }
    },
    {
        date: { en: '2023', ar: '2023' },
        title: { en: 'Hotline Call Center Agent', ar: 'موظفة مركز اتصال — خط ساخن' },
        company: { en: 'Al-Agha Restaurants Chain', ar: 'سلسلة مطاعم الأغا' },
        desc: {
            en: 'Handled high-volume inbound calls and processed orders efficiently during peak business hours. Maintained quality standards under pressure while minimizing customer wait times.',
            ar: 'استقبال مكالمات الخط الساخن وتسجيل طلبات العملاء بكفاءة عالية خلال ساعات الذروة. الحفاظ على معايير الجودة وتقليل أوقات الانتظار تحت ضغط العمل.'
        }
    },
    {
        date: { en: '2023', ar: '2023' },
        title: { en: 'Online Journalist & Editor', ar: 'صحفية ومحررة إلكترونية' },
        company: { en: 'Tawassul 24 Newspaper', ar: 'جريدة تواصل 24' },
        desc: {
            en: 'Wrote, proofread, and edited digital news pieces under tight deadlines. Maintained strict grammar and styling guidelines before publishing content to the CMS.',
            ar: 'كتابة وتحرير وتدقيق الأخبار الرقمية والمقالات تحت ضغط المواعيد النهائية. ضمان الدقة النحوية والملائمة اللغوية قبل النشر عبر نظام إدارة المحتوى.'
        }
    },
    {
        date: { en: '2023 – Present', ar: '2023 – حتى الآن' },
        title: { en: 'Quran & Islamic Studies Teacher', ar: 'معلّمة قرآن ودراسات إسلامية' },
        company: { en: 'Al-Furqan Al-Manzil Academy | Pro-Bono', ar: 'أكاديمية الفرقان المنزل | تطوع' },
        desc: {
            en: 'Teach remote classes on Quran recitation and Tajweed basics. Built a simplified tracking system to monitor student progress and encourage consistent practice.',
            ar: 'تعليم التلاوة وأحكام التجويد الأساسية في بيئة تعليمية عن بعد. تطوير نظام بسيط لمتابعة تقدم الطلاب وتحفيزهم على الحفظ المستمر.'
        },
        volunteer: true
    }
];

const skillsData = [
    {
        icon: 'fa-headset',
        title: { en: 'Customer Operations', ar: 'عمليات خدمة العملاء' },
        items: {
            en: ['Complaint Management', 'Escalation Resolution', 'Inbound Hotline Management', 'Customer Retention', 'Customer Follow-up', 'Customer Satisfaction Surveys (CSAT)', 'Customer Experience Enhancement', 'Order Management & Follow-up'],
            ar: ['إدارة الشكاوى', 'حل التصعيدات', 'إدارة الخط الساخن', 'الاحتفاظ بالعملاء', 'متابعة العملاء', 'استبيانات رضا العملاء (CSAT)', 'تحسين تجربة العملاء', 'إدارة ومتابعة الطلبات']
        }
    },
    {
        icon: 'fa-users',
        title: { en: 'Soft Skills', ar: 'المهارات الشخصية' },
        items: {
            en: ['Effective Communication', 'Problem Solving', 'Time Management', 'Organization & Prioritization', 'Attention to Detail', 'Adaptability', 'Teamwork & Collaboration', 'Continuous Learning & Professional Development'],
            ar: ['التواصل الفعّال', 'حل المشكلات', 'إدارة الوقت', 'التنظيم وتحديد الأولويات', 'الاهتمام بالتفاصيل', 'المرونة', 'العمل الجماعي', 'التعلم المستمر والتطوير المهني']
        }
    },
    {
        icon: 'fa-laptop-code',
        title: { en: 'Technical Tools', ar: 'الأدوات التقنية' },
        items: {
            en: ['CRM & Call Center Platforms', 'Aggregator Platforms (Talabat, Elmenus)', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Data Entry & Documentation', 'Customer Satisfaction Reporting'],
            ar: ['أنظمة CRM ومراكز الاتصال', 'منصات التوصيل (طلبات، المنيوز)', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'إدخال البيانات والتوثيق', 'تقارير رضا العملاء']
        }
    },
    {
        icon: 'fa-book-open',
        title: { en: 'Additional Skills', ar: 'مهارات إضافية' },
        items: {
            en: ['Quran Recitation & Tajweed Instruction', 'Arabic Proofreading', 'Digital Copywriting', 'Content Structuring', 'Professional Verbal & Written Communication'],
            ar: ['تلاوة القرآن وتعليم التجويد', 'التدقيق اللغوي العربي', 'كتابة المحتوى الرقمي', 'هيكلة المحتوى', 'التواصل الشفهي والكتابي الاحترافي']
        }
    }
];

const educationData = [
    {
        title: { en: 'Postgraduate Diploma in Educational Qualification', ar: 'دبلوم دراسات عليا في التأهيل التربوي' },
        school: { en: 'Al-Azhar University', ar: 'جامعة الأزهر' },
        status: { en: 'In Progress', ar: 'قيد الدراسة' }
    },
    {
        title: { en: 'Bachelor of Arabic Language', ar: 'بكالوريوس اللغة العربية' },
        school: { en: 'Al-Azhar University', ar: 'جامعة الأزهر' },
        status: { en: 'Graduation: 2024', ar: 'التخرج: 2024' }
    },
    {
        title: { en: 'Diploma in Journalism', ar: 'دبلوم الصحافة' },
        school: { en: 'El-Dowla Newspaper', ar: 'جريدة الدولة' },
        status: { en: 'Graduation: 2024 (Grade: Excellent)', ar: 'التخرج: 2024 (التقدير: ممتاز)' }
    }
];

let currentLang = localStorage.getItem('portfolio-lang') || 'en';
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

const BIRTHDAY_SURPRISE_CUTOFF = new Date(2026, 6, 20, 23, 59, 59);

function shouldShowBirthdaySurprise() {
    const now = new Date();
    return now <= BIRTHDAY_SURPRISE_CUTOFF;
}

function initBirthdaySurprise() {
    if (!shouldShowBirthdaySurprise()) return;

    const overlay = document.getElementById('birthdaySurprise');
    const countdown = document.getElementById('birthdayCountdown');
    const card = document.getElementById('birthdayCard');
    const canvas = document.getElementById('birthdayCanvas');

    if (!overlay || !countdown || !card) return;

    document.body.classList.add('birthday-active');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');

    countdown.textContent = '3';
    countdown.classList.remove('show');
    card.classList.remove('active');
    overlay.classList.remove('closing');
    if (canvas) {
        canvas.classList.remove('active');
    }

    const values = ['3', '2', '1', '0'];
    let step = 0;

    const runCountdown = () => {
        if (step >= values.length) {
            launchBirthdayEffects();
            return;
        }

        countdown.textContent = values[step];
        countdown.classList.remove('show');
        void countdown.offsetWidth;
        countdown.classList.add('show');
        step += 1;

        setTimeout(runCountdown, 700);
    };

    const launchBirthdayEffects = () => {
        countdown.textContent = '0';
        countdown.classList.remove('show');
        void countdown.offsetWidth;
        countdown.classList.add('show');

        if (canvas) {
            canvas.classList.add('active');
        }

        if (window.confetti) {
            const confettiInstance = typeof window.confetti.create === 'function' && canvas
                ? window.confetti.create(canvas, {
                    resize: true,
                    useWorker: true,
                    disableForReducedMotion: true
                })
                : null;

            const burst = (originY) => {
                const options = {
                    particleCount: 42,
                    spread: 70,
                    startVelocity: 28,
                    origin: { y: originY },
                    colors: ['#f7c8cf', '#e7c9ff', '#f7e1bd', '#ffffff', '#d9c7f2'],
                    scalar: 0.9,
                    gravity: 0.8,
                    decay: 0.94,
                    ticks: 220,
                    zIndex: 5,
                    disableForReducedMotion: true
                };

                if (confettiInstance) {
                    confettiInstance(options);
                } else {
                    window.confetti(options);
                }
            };

            burst(0.18);
            setTimeout(() => burst(0.15), 220);
            setTimeout(() => burst(0.2), 440);
        }

        const confettiDuration = 2400;

        setTimeout(() => {
            card.classList.add('active');
        }, confettiDuration);

        setTimeout(() => {
            overlay.classList.add('closing');
            document.body.classList.remove('birthday-active');

            setTimeout(() => {
                overlay.classList.remove('active');
                overlay.classList.remove('closing');
                overlay.setAttribute('aria-hidden', 'true');
                if (canvas) {
                    canvas.classList.remove('active');
                }
            }, 650);
        }, confettiDuration + 1200);
    };

    runCountdown();
}

function getNested(obj, path) {
    return path.split('.').reduce((o, k) => o?.[k], obj);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.body.classList.add('lang-transition');
    document.body.classList.toggle('lang-ar', lang === 'ar');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = getNested(i18n[lang], key);
        if (val) el.textContent = val;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active);
    });

    renderTimeline();
    renderSkills();
    renderEducation();
    resetTyping();

    setTimeout(() => document.body.classList.remove('lang-transition'), 300);
}

function renderTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;

    container.innerHTML = experienceData.map((item, i) => {
        const badge = item.volunteer
            ? `<span class="timeline-badge"><i class="fas fa-heart"></i> ${i18n[currentLang].experience.volunteer}</span>`
            : '';
        return `
            <div class="timeline-item" style="transition-delay: ${i * 0.08}s">
                <div class="timeline-card">
                    <span class="timeline-date">${item.date[currentLang]}</span>
                    <h4>${item.title[currentLang]}${badge}</h4>
                    <h5>${item.company[currentLang]}</h5>
                    <p>${item.desc[currentLang]}</p>
                </div>
            </div>`;
    }).join('');

    observeElements(container.querySelectorAll('.timeline-item'), 'visible');
}

function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;

    container.innerHTML = skillsData.map((cat, i) => `
        <div class="skill-card" style="transition-delay: ${i * 0.06}s">
            <div class="skill-card-header">
                <span class="skill-icon"><i class="fas ${cat.icon}"></i></span>
                <h4>${cat.title[currentLang]}</h4>
            </div>
            <ul>${cat.items[currentLang].map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
    `).join('');

    observeElements(container.querySelectorAll('.skill-card'), 'visible');
}

function renderEducation() {
    const container = document.getElementById('eduGrid');
    if (!container) return;

    container.innerHTML = educationData.map((item, i) => `
        <div class="edu-item" style="transition-delay: ${i * 0.08}s">
            <h4>${item.title[currentLang]}</h4>
            <p>${item.school[currentLang]} | <span>${item.status[currentLang]}</span></p>
        </div>
    `).join('');

    observeElements(container.querySelectorAll('.edu-item'), 'visible');
}

function resetTyping() {
    clearTimeout(typingTimeout);
    typingIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeEffect();
}

function typeEffect() {
    const el = document.getElementById('typingText');
    if (!el) return;

    const phrases = i18n[currentLang].hero.typing;
    const current = phrases[typingIndex];

    if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 70;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % phrases.length;
        speed = 400;
    }

    typingTimeout = setTimeout(typeEffect, speed);
}

function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function observeElements(elements, className) {
    const list = Array.from(elements || []);
    if (!list.length) return;

    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
        list.forEach(el => el.classList.add(className));
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    list.forEach(el => observer.observe(el));
}

function initScrollReveal() {
    observeElements(document.querySelectorAll('.reveal'), 'visible');
    observeElements(document.querySelectorAll('.section'), 'visible');
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
        const activeSection = sections[0];
        if (activeSection) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.section === activeSection.id);
            });
        }
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.dataset.section === id);
                    });
                }
            });
        },
        { threshold: 0.35, rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72}px 0px -45% 0px` }
    );

    sections.forEach(s => observer.observe(s));
}

function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let ticking = false;

    const updateHeader = () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateHeader);
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeader();
}

function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    if (!toggle || !nav) return;

    const setNavState = open => {
        nav.classList.toggle('open', open);
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
    };

    toggle.addEventListener('click', () => {
        setNavState(!nav.classList.contains('open'));
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => setNavState(false));
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            setNavState(false);
        }
    });

    document.addEventListener('click', event => {
        if (!nav.classList.contains('open')) return;
        const clickedInside = nav.contains(event.target) || toggle.contains(event.target);
        if (!clickedInside) {
            setNavState(false);
        }
    });
}

function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

function initTiltEffect() {
    if (prefersReducedMotion() || window.matchMedia('(hover: none)').matches) return;

    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            const angleX = (yc - y) / 15;
            const angleY = (x - xc) / 15;
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.01)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    const submitBtn = document.getElementById('submitBtn');
    if (!form) return;

    form.action = FORMSPREE_ENDPOINT;
    form.method = 'POST';

    function showFeedback(type, message) {
        feedback.innerHTML = '';
        feedback.className = `form-feedback ${type} show`;

        const icon = document.createElement('i');
        icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
        const text = document.createElement('span');
        text.textContent = message;

        feedback.append(icon, text);
    }

    function clearFeedback() {
        feedback.innerHTML = '';
        feedback.className = 'form-feedback';
    }

    function validateField(input) {
        const group = input.closest('.form-group');
        const isValid = input.checkValidity();
        group.classList.toggle('invalid', !isValid);
        return isValid;
    }

    function validateForm() {
        let valid = true;
        form.querySelectorAll('input[name="name"], input[name="email"], textarea[name="message"]').forEach(input => {
            if (!validateField(input)) valid = false;
        });
        return valid;
    }

    form.addEventListener('submit', async e => {
        e.preventDefault();
        clearFeedback();

        if (FORMSPREE_FORM_ID === 'YOUR_FORM_ID') {
            showFeedback('error', i18n[currentLang].contact.errorConfig);
            return;
        }

        if (!validateForm()) return;

        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok) {
                showFeedback('success', i18n[currentLang].contact.success);
                form.reset();
                form.querySelectorAll('.form-group').forEach(g => g.classList.remove('invalid'));
            } else {
                const serverMsg = data.errors?.map(err => err.message).join(' ');
                showFeedback('error', serverMsg || i18n[currentLang].contact.error);
            }
        } catch {
            showFeedback('error', i18n[currentLang].contact.error);
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });

    form.querySelectorAll('input[name="name"], input[name="email"], textarea[name="message"]').forEach(input => {
        input.addEventListener('input', () => {
            if (input.closest('.form-group').classList.contains('invalid')) {
                validateField(input);
            }
        });
        input.addEventListener('blur', () => validateField(input));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initBirthdaySurprise();
    setLanguage(currentLang);
    initScrollReveal();
    initScrollSpy();
    initHeader();
    initMobileNav();
    initLangSwitcher();
    initTiltEffect();
    initContactForm();
});