/* ==========================================================================
   Mona Usama — Portfolio interactions
   Sections: config → data → helpers → theme → i18n → typing → animations
             → navigation → contact form → init
   ========================================================================== */

/* ------------------------------ Config ---------------------------------- */

const CONFIG = {
    formspreeId: 'xykqqwoa',
    formspreeEndpoint: '',
    requestTimeout: 15000,
    storage: {
        theme: 'portfolio-theme',
        lang: 'portfolio-lang'
    },
    themeColor: {
        light: '#faf7f6',
        dark: '#131018'
    }
};

CONFIG.formspreeEndpoint = `https://formspree.io/f/${CONFIG.formspreeId}`;

const state = {
    lang: 'en',
    theme: 'light',
    feedback: null
};

/* ------------------------------- Data ----------------------------------- */

const i18n = {
    en: {
        meta: {
            title: 'Mona Usama Abdelrahman | Portfolio',
            description: 'Mona Usama Abdelrahman — Call Center Team Leader, Customer Service Specialist, and Digital Journalism Editor based in Giza, Egypt.'
        },
        a11y: {
            skip: 'Skip to content',
            menu: 'Toggle menu'
        },
        brand: {
            name: 'Mona Usama',
            fullName: 'Mona Usama Abdelrahman',
            homeLabel: 'Mona Usama — Home'
        },
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            education: 'Education',
            contact: 'Contact'
        },
        hero: {
            greeting: "Hello, I'm",
            name: 'Mona Usama <span class="accent">Abdelrahman</span>',
            location: 'Giza, Egypt',
            bio: 'Call center team leader with 3+ years in customer service, online orders, and delivery operations — combining people-first leadership with an editor\u2019s eye for clear communication.',
            ctaWork: 'View My Work',
            ctaContact: 'Get In Touch',
            status: 'Excited about new opportunities',
            scroll: 'Scroll to explore',
            portraitRole: 'Call Center<br>Team Leader',
            tagCare: 'Customer Care',
            tagJournalism: 'Digital Journalism',
            tagLeadership: 'Team Leadership',
            typing: [
                'Call Center Team Leader',
                'Customer Service Specialist',
                'Digital Journalism Editor',
                'Islamic Studies Teacher'
            ]
        },
        stats: {
            years: 'Years of experience',
            roles: 'Professional roles',
            skills: 'Core skills & tools',
            languages: 'Languages'
        },
        about: {
            eyebrow: '01 — About me',
            title: 'A people-first leader with a writer\u2019s eye',
            subtitle: 'Service operations, customer experience, and clear communication.',
            intro: 'Customer service leader with 3+ years in call center operations and online order management.',
            points: [
                'Lead a call center team at Al-Agha Restaurant: daily operations, shift schedules, and service quality.',
                'Coach agents and monitor call quality to raise service standards.',
                'Resolve complex complaints and coordinate branches and delivery teams for accurate, on-time orders.',
                'Editorial background in Arabic digital journalism; teach Islamic studies online.',
                'Licentiate degree in Arabic Linguistics, Al-Azhar University.'
            ],
            factsTitle: 'At a glance',
            factLocationLabel: 'Based in',
            factLocationValue: 'Giza, Egypt',
            factRoleLabel: 'Current role',
            factRoleValue: 'Call Center Team Leader',
            factEducationLabel: 'Education',
            factEducationValue: 'Al-Azhar University',
            factVolunteerLabel: 'Giving back',
            factVolunteerValue: 'Teaching Islamic studies online',
            languagesTitle: 'Languages',
            arabic: 'Arabic',
            arabicLevel: 'Excellent',
            english: 'English',
            englishLevel: 'Good',
            signature: 'Mona Usama'
        },
        experience: {
            eyebrow: '02 — Career',
            title: 'Professional experience',
            subtitle: 'Leadership, operations, and customer experience — role by role.',
            volunteer: 'Volunteering'
        },
        skills: {
            eyebrow: '03 — Capabilities',
            title: 'Skills & expertise',
            subtitle: 'Leadership, customer insight, data, and communication.'
        },
        education: {
            eyebrow: '04 — Education',
            title: 'Education & training',
            subtitle: 'Arabic language, education, and journalism.'
        },
        contact: {
            eyebrow: '05 — Contact',
            title: 'Let\u2019s work together',
            subtitle: 'Interested in professional opportunities, educational collaborations, and media projects.',
            emailTitle: 'Email',
            phoneTitle: 'Phone',
            socialTitle: 'Social media',
            formTitle: 'Send a message',
            email: 'Email',
            phone: 'Phone',
            whatsappCta: 'Chat on WhatsApp',
            facebook: 'Facebook',
            instagram: 'Instagram',
            responseNote: 'Usually replies within 24 hours.',
            formName: 'Full name',
            formEmail: 'Email address',
            formSubject: 'Subject',
            formMessage: 'Message',
            placeholderName: 'Your name',
            placeholderEmail: 'you@example.com',
            placeholderSubject: 'Opportunity, collaboration, or question',
            placeholderMessage: 'Tell me a little about what you have in mind…',
            formSubmit: 'Send message',
            formNote: 'Your details are only used to reply to your message.',
            errorName: 'Please enter your name (at least 2 characters)',
            errorEmail: 'Please enter a valid email address',
            errorSubject: 'Please add a short subject (at least 3 characters)',
            errorMessage: 'Please enter your message (at least 10 characters)',
            success: 'Thank you! Your message has been sent successfully.',
            error: 'Something went wrong. Please try again or contact me directly.',
            errorConfig: 'Form is not configured. Please add your Formspree form ID in script.js.',
            timeout: 'The request took too long. Please check your connection and try again.',
            sending: 'Sending…'
        },
        footer: {
            rights: 'All rights reserved.',
            top: 'Back to top'
        },
        theme: {
            toDark: 'Switch to dark mode',
            toLight: 'Switch to light mode'
        }
    },

    ar: {
        meta: {
            title: 'منى أسامة عبد الرحمن | الملف الشخصي',
            description: 'منى أسامة عبد الرحمن — قائدة فريق مركز اتصال، أخصائية خدمة عملاء، ومحررة صحافة رقمية مقيمة في الجيزة، مصر.'
        },
        a11y: {
            skip: 'تخطَّ إلى المحتوى',
            menu: 'فتح القائمة'
        },
        brand: {
            name: 'منى أسامة',
            fullName: 'منى أسامة عبد الرحمن',
            homeLabel: 'منى أسامة — الرئيسية'
        },
        nav: {
            home: 'الرئيسية',
            about: 'نبذة عني',
            experience: 'الخبرات',
            skills: 'المهارات',
            education: 'التعليم',
            contact: 'تواصل معي'
        },
        hero: {
            greeting: 'مرحباً، أنا',
            name: 'منى أسامة <span class="accent">عبد الرحمن</span>',
            location: 'الجيزة، مصر',
            bio: 'قائدة فريق مركز اتصال بخبرة تتجاوز ثلاث سنوات في خدمة العملاء والطلبات الإلكترونية وعمليات التوصيل — أجمع بين قيادة تُركّز على الإنسان وعين تحريرية تلتقط وضوح الرسالة.',
            ctaWork: 'استعرض خبراتي',
            ctaContact: 'تواصل معي',
            status: 'متحمسة لفرص جديدة',
            scroll: 'مرّر للاستكشاف',
            portraitRole: 'مركز اتصال<br>قائدة فريق',
            tagCare: 'رعاية العملاء',
            tagJournalism: 'صحافة رقمية',
            tagLeadership: 'قيادة الفريق',
            typing: [
                'قائدة فريق مركز اتصال',
                'أخصائية خدمة عملاء',
                'محررة صحافة رقمية',
                'معلّمة دراسات إسلامية'
            ]
        },
        stats: {
            years: 'سنوات من الخبرة',
            roles: 'أدوار مهنية',
            skills: 'مهارة وأداة',
            languages: 'لغتان'
        },
        about: {
            eyebrow: '01 — نبذة عني',
            title: 'قيادة تُركّز على الإنسان وعين تحريرية',
            subtitle: 'عمليات الخدمة، وتجربة العميل، والتواصل الواضح.',
            intro: 'قائدة فريق مركز اتصال بخبرة تتجاوز ثلاث سنوات في العمليات وإدارة الطلبات الإلكترونية.',
            points: [
                'أقود فريق مركز الاتصال في مطاعم الأغا: العمليات اليومية، وجداول المناوبات، وجودة الخدمة.',
                'أدرّب الموظفين وأتابع جودة المكالمات لرفع معايير الخدمة.',
                'أحلّ الشكاوى المعقدة وأنسّق مع الفروع وفرق التوصيل لضمان دقة الطلبات والتسليم في الموعد.',
                'خلفية في تحرير المحتوى الرقمي العربي، وأعلّم الدراسات الإسلامية عن بُعد.',
                'ليسانس اللغة العربية من جامعة الأزهر.'
            ],
            factsTitle: 'لمحة سريعة',
            factLocationLabel: 'المقر',
            factLocationValue: 'الجيزة، مصر',
            factRoleLabel: 'الدور الحالي',
            factRoleValue: 'قائدة فريق مركز اتصال',
            factEducationLabel: 'التعليم',
            factEducationValue: 'جامعة الأزهر',
            factVolunteerLabel: 'عطاء مجتمعي',
            factVolunteerValue: 'تعليم الدراسات الإسلامية عن بُعد',
            languagesTitle: 'اللغات',
            arabic: 'العربية',
            arabicLevel: 'ممتاز',
            english: 'الإنجليزية',
            englishLevel: 'جيد',
            signature: 'منى أسامة'
        },
        experience: {
            eyebrow: '02 — المسيرة',
            title: 'الخبرة المهنية',
            subtitle: 'قيادة وعمليات وتجربة عميل — دوراً بدور.',
            volunteer: 'تطوع'
        },
        skills: {
            eyebrow: '03 — القدرات',
            title: 'المهارات والخبرات',
            subtitle: 'قيادة، وفهم للعميل، وبيانات، وتواصل.',
        },
        education: {
            eyebrow: '04 — التعليم',
            title: 'التعليم والتدريب',
            subtitle: 'اللغة العربية والتربية والصحافة.',
        },
        contact: {
            eyebrow: '05 — تواصل',
            title: 'لنعمل معاً',
            subtitle: 'متحمسة للفرص المهنية والتعاون التعليمي والمشاريع الإعلامية.',
            emailTitle: 'البريد الإلكتروني',
            phoneTitle: 'الهاتف',
            socialTitle: 'وسائل التواصل',
            formTitle: 'أرسل رسالة',
            email: 'البريد الإلكتروني',
            phone: 'الهاتف',
            whatsappCta: 'تواصل عبر واتساب',
            facebook: 'فيسبوك',
            instagram: 'إنستغرام',
            responseNote: 'عادةً ما أرد خلال 24 ساعة.',
            formName: 'الاسم الكامل',
            formEmail: 'البريد الإلكتروني',
            formSubject: 'الموضوع',
            formMessage: 'الرسالة',
            placeholderName: 'اسمك',
            placeholderEmail: 'you@example.com',
            placeholderSubject: 'فرصة عمل، تعاون، أو سؤال',
            placeholderMessage: 'أخبرني قليلاً عمّا يدور في ذهنك…',
            formSubmit: 'إرسال الرسالة',
            formNote: 'تُستخدم بياناتك فقط للرد على رسالتك.',
            errorName: 'يرجى إدخال اسمك (حرفان على الأقل)',
            errorEmail: 'يرجى إدخال بريد إلكتروني صحيح',
            errorSubject: 'يرجى إضافة موضوع قصير (3 أحرف على الأقل)',
            errorMessage: 'يرجى إدخال رسالتك (10 أحرف على الأقل)',
            success: 'شكراً لك! تم إرسال رسالتك بنجاح.',
            error: 'حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل مباشرة.',
            errorConfig: 'النموذج غير مُعدّ. يرجى إضافة معرّف Formspree في ملف script.js.',
            timeout: 'استغرق الطلب وقتاً طويلاً. يرجى التحقق من الاتصال والمحاولة مجدداً.',
            sending: 'جارٍ الإرسال…'
        },
        footer: {
            rights: 'جميع الحقوق محفوظة.',
            top: 'العودة إلى الأعلى'
        },
        theme: {
            toDark: 'التبديل إلى الوضع الليلي',
            toLight: 'التبديل إلى الوضع النهاري'
        }
    }
};

const experienceData = [
    {
        date: { en: '2026 — Present', ar: '2026 — حتى الآن' },
        title: { en: 'Call Center Team Leader', ar: 'قائدة فريق مركز اتصال' },
        company: { en: 'Al-Agha Restaurant — Call Center', ar: 'مطاعم الأغا — مركز الاتصال' },
        points: {
            en: [
                'Lead and supervise a team of call center agents.',
                'Manage daily operations, shift schedules, and service quality across calls and online orders.',
                'Monitor performance and coach agents with regular feedback.',
                'Resolve complaints quickly to protect customer satisfaction and brand reputation.',
                'Coordinate with branches and delivery teams for accurate, on-time orders.',
                'Train and onboard new agents on procedures, menu, and communication.'
            ],
            ar: [
                'قيادة فريق موظفي مركز الاتصال والإشراف عليه.',
                'إدارة العمليات اليومية وجداول المناوبات وجودة الخدمة عبر المكالمات والطلبات الإلكترونية.',
                'متابعة الأداء وتدريب الموظفين بتغذية راجعة منتظمة.',
                'حل الشكاوى بسرعة حمايةً لرضا العملاء وسمعة العلامة.',
                'التنسيق مع الفروع وفرق التوصيل لضمان دقة الطلبات والتسليم في الموعد.',
                'تدريب وتأهيل الموظفين الجدد على الإجراءات وقائمة الطعام والتواصل.'
            ]
        }
    },
    {
        date: { en: '2023 — 2026', ar: '2023 — 2026' },
        title: { en: 'Customer Service Specialist', ar: 'أخصائية خدمة عملاء' },
        company: { en: 'Al-Agha Restaurant — Call Center & Online Orders', ar: 'مطاعم الأغا — مركز الاتصال والطلبات الإلكترونية' },
        points: {
            en: [
                'Handled inbound calls and online orders with accuracy and speed.',
                'Resolved complex complaints and followed up until resolution.',
                'Streamlined delivery workflows between customers, branches, and drivers to cut delays.'
            ],
            ar: [
                'التعامل مع المكالمات والطلبات الإلكترونية بدقة وسرعة.',
                'حل الشكاوى المعقدة ومتابعتها حتى الإغلاق.',
                'تحسين تدفق التوصيل بين العملاء والفروع والسائقين لتقليل التأخير.'
            ]
        }
    },
    {
        date: { en: '2022 — 2023', ar: '2022 — 2023' },
        title: { en: 'Digital Journalism Editor', ar: 'محررة صحافة رقمية' },
        company: { en: 'Tawassul 24 Newspaper', ar: 'جريدة تواصل 24' },
        points: {
            en: [
                'Edited and produced Arabic digital content for online publication.',
                'Ensured linguistic accuracy, clarity, and consistency under tight deadlines.'
            ],
            ar: [
                'تحرير وإنتاج محتوى رقمي عربي للنشر الإلكتروني.',
                'ضمان الدقة اللغوية والوضوح والاتساق ضمن مواعيد نهائية ضيقة.'
            ]
        }
    },
    {
        date: { en: '2023 — Present', ar: '2023 — حتى الآن' },
        title: { en: 'Islamic Studies Teacher', ar: 'معلّمة دراسات إسلامية' },
        company: { en: 'Al-Furqan Academy (Remote) — Pro bono', ar: 'أكاديمية الفرقان (عن بُعد) — تطوع' },
        points: {
            en: [
                'Teach Islamic studies online to students of different ages and levels.',
                'Adapt lessons and track progress remotely.'
            ],
            ar: [
                'تعليم الدراسات الإسلامية عن بُعد لطلاب من أعمار ومستويات مختلفة.',
                'تكييف الدروس ومتابعة التقدم عن بُعد.'
            ]
        },
        volunteer: true
    }
];

const skillsData = [
    {
        icon: 'fa-people-group',
        title: { en: 'Leadership & Operations', ar: 'القيادة والعمليات' },
        items: {
            en: ['Team Leadership', 'Daily Operations & Shift Scheduling', 'KPI Development', 'Employee Performance Monitoring', 'Coaching & Feedback', 'Training & Onboarding', 'Service Quality Assurance'],
            ar: ['قيادة الفرق', 'العمليات اليومية وجداول المناوبات', 'تطوير مؤشرات الأداء (KPIs)', 'متابعة أداء الموظفين', 'التدريب والتغذية الراجعة', 'تأهيل الموظفين الجدد', 'ضمان جودة الخدمة']
        }
    },
    {
        icon: 'fa-headset',
        title: { en: 'Customer Experience', ar: 'تجربة العميل' },
        items: {
            en: ['Customer Service', 'Complaint Resolution', 'Customer Satisfaction (CSAT)', 'Online Order Management', 'Delivery Workflow Coordination', 'Cross-functional Coordination'],
            ar: ['خدمة العملاء', 'حل الشكاوى', 'رضا العملاء (CSAT)', 'إدارة الطلبات الإلكترونية', 'تنسيق عمليات التوصيل', 'التنسيق بين الفرق']
        }
    },
    {
        icon: 'fa-chart-line',
        title: { en: 'Data & Tools', ar: 'البيانات والأدوات' },
        items: {
            en: ['Reporting & Data Analysis', 'Google Apps Script', 'CRM & Call Center Platforms', 'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Talabat & Elmenus Platforms'],
            ar: ['التقارير وتحليل البيانات', 'Google Apps Script', 'أنظمة CRM ومراكز الاتصال', 'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'منصتا طلبات والمنيوز']
        }
    },
    {
        icon: 'fa-pen-nib',
        title: { en: 'Communication & Content', ar: 'التواصل والمحتوى' },
        items: {
            en: ['Written & Verbal Communication', 'Digital Journalism', 'Content Editing', 'Arabic Language & Proofreading', 'Teaching & Instruction', 'Problem Solving', 'Time Management', 'Adaptability', 'Attention to Detail'],
            ar: ['التواصل الشفهي والكتابي', 'الصحافة الرقمية', 'تحرير المحتوى', 'اللغة العربية والتدقيق اللغوي', 'التعليم والتدريس', 'حل المشكلات', 'إدارة الوقت', 'المرونة', 'الاهتمام بالتفاصيل']
        }
    }
];

const educationData = [
    {
        icon: 'fa-graduation-cap',
        title: { en: 'Postgraduate Diploma in Educational Qualification', ar: 'دبلوم دراسات عليا في التأهيل التربوي' },
        school: { en: 'Al-Azhar University', ar: 'جامعة الأزهر' },
        status: { en: '2026', ar: '2026' }
    },
    {
        icon: 'fa-book-open',
        title: { en: 'Licentiate Degree in Arabic Linguistics', ar: 'ليسانس اللغة العربية' },
        school: { en: 'Al-Azhar University', ar: 'جامعة الأزهر' },
        status: { en: '2024', ar: '2024' }
    },
    {
        icon: 'fa-newspaper',
        title: { en: 'Diploma in Journalism', ar: 'دبلوم الصحافة' },
        school: { en: 'Al-Dowla Newspaper', ar: 'جريدة الدولة' },
        status: { en: '2024 — Excellent', ar: '2024 — ممتاز' }
    }
];

/* ------------------------------ Helpers --------------------------------- */

function getStored(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
}

function setStored(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) { /* storage may be unavailable */ }
}

function getNested(object, path) {
    return path.split('.').reduce((value, key) => (value == null ? undefined : value[key]), object);
}

function t(path) {
    const value = getNested(i18n[state.lang], path);
    return typeof value === 'string' ? value : path;
}

function renderContactFeedback() {
    const feedback = document.getElementById('formFeedback');
    if (!feedback) return;

    if (!state.feedback) {
        feedback.className = 'form-feedback';
        feedback.innerHTML = '';
        return;
    }

    const { type, message, key } = state.feedback;
    const text = message || (key ? t(key) : '');
    const icon = type === 'success'
        ? '<i class="fas fa-circle-check" aria-hidden="true"></i>'
        : '<i class="fas fa-circle-exclamation" aria-hidden="true"></i>';

    feedback.innerHTML = `${icon}<span>${text}</span>`;
    feedback.className = `form-feedback ${type} show`;
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function hasFinePointer() {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function debounce(callback, wait) {
    let timeout;
    return function debounced(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(this, args), wait);
    };
}

/* ------------------------------- Theme ---------------------------------- */

const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');

function syncThemeUI() {
    const button = document.getElementById('themeToggle');
    if (!button) return;

    const isDark = state.theme === 'dark';
    const label = isDark ? t('theme.toLight') : t('theme.toDark');

    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);

    const icon = button.querySelector('i');
    if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', CONFIG.themeColor[state.theme]);
}

function applyTheme(theme, options = {}) {
    const { persist = true, animate = false } = options;
    state.theme = theme === 'dark' ? 'dark' : 'light';

    if (animate) {
        document.documentElement.classList.add('theme-transition');
        window.setTimeout(() => document.documentElement.classList.remove('theme-transition'), 380);
    }

    document.documentElement.setAttribute('data-theme', state.theme);
    document.documentElement.style.colorScheme = state.theme;

    if (persist) setStored(CONFIG.storage.theme, state.theme);
    syncThemeUI();
}

function initTheme() {
    const stored = getStored(CONFIG.storage.theme);
    const initial = stored === 'dark' || stored === 'light'
        ? stored
        : (themeMedia.matches ? 'dark' : 'light');

    applyTheme(initial, { persist: false });

    const button = document.getElementById('themeToggle');
    if (button) {
        button.addEventListener('click', () => {
            applyTheme(state.theme === 'dark' ? 'light' : 'dark', { persist: true, animate: true });
        });
    }

    // Follow the operating system only while the visitor has no saved preference.
    themeMedia.addEventListener('change', event => {
        if (!getStored(CONFIG.storage.theme)) {
            applyTheme(event.matches ? 'dark' : 'light', { persist: false, animate: true });
        }
    });
}

/* -------------------------------- i18n ---------------------------------- */

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const value = getNested(i18n[state.lang], element.getAttribute('data-i18n'));
        if (typeof value === 'string') element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const value = getNested(i18n[state.lang], element.getAttribute('data-i18n-html'));
        if (typeof value === 'string') element.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const value = getNested(i18n[state.lang], element.getAttribute('data-i18n-placeholder'));
        if (typeof value === 'string') element.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
        const value = getNested(i18n[state.lang], element.getAttribute('data-i18n-aria-label'));
        if (typeof value === 'string') element.setAttribute('aria-label', value);
    });

    document.title = t('meta.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', t('meta.description'));

    const navToggle = document.getElementById('navToggle');
    if (navToggle) navToggle.setAttribute('aria-label', t('a11y.menu'));

    const formLanguage = document.getElementById('formLanguage');
    if (formLanguage) formLanguage.value = state.lang;
}

function setLanguage(lang, options = {}) {
    const { persist = true, animate = true } = options;
    if (!i18n[lang]) return;

    state.lang = lang;
    if (persist) setStored(CONFIG.storage.lang, lang);

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', lang === 'ar');

    if (animate && !prefersReducedMotion()) {
        document.body.classList.add('lang-transition');
        window.setTimeout(() => document.body.classList.remove('lang-transition'), 320);
    }

    document.querySelectorAll('.lang-btn').forEach(button => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    applyTranslations();
    renderAbout();
    renderTimeline();
    renderSkills();
    renderEducation();
    restartTyping();
    syncThemeUI();
    renderContactFeedback();
}

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.lang !== state.lang) {
                setLanguage(button.dataset.lang);
            }
        });
    });
}

/* ----------------------------- Rendering -------------------------------- */

function renderAbout() {
    const list = document.getElementById('aboutPoints');
    if (!list) return;

    list.innerHTML = i18n[state.lang].about.points
        .map(point => `<li>${point}</li>`)
        .join('');
}

function renderTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;

    container.innerHTML = experienceData.map((item, index) => {
        const badge = item.volunteer
            ? `<span class="timeline-badge"><i class="fas fa-heart" aria-hidden="true"></i>${i18n[state.lang].experience.volunteer}</span>`
            : '';

        return `
            <article class="timeline-item${item.volunteer ? ' is-volunteer' : ''} reveal" style="--reveal-delay:${index * 80}ms">
                <span class="timeline-dot" aria-hidden="true"></span>
                <div class="timeline-card">
                    <div class="timeline-top">
                        <span class="timeline-date">${item.date[state.lang]}</span>
                        ${badge}
                    </div>
                    <h3 class="timeline-title">${item.title[state.lang]}</h3>
                    <p class="timeline-company"><i class="fas fa-building" aria-hidden="true"></i>${item.company[state.lang]}</p>
                    <ul class="timeline-points">
                        ${item.points[state.lang].map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </article>`;
    }).join('');

    observeReveals(container.querySelectorAll('.reveal'));
}

function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;

    container.innerHTML = skillsData.map((category, index) => `
        <article class="skill-card reveal" style="--reveal-delay:${index * 70}ms">
            <div class="skill-head">
                <span class="skill-icon"><i class="fas ${category.icon}" aria-hidden="true"></i></span>
                <h3>${category.title[state.lang]}</h3>
            </div>
            <ul class="skill-tags">
                ${category.items[state.lang].map(item => `<li>${item}</li>`).join('')}
            </ul>
        </article>
    `).join('');

    observeReveals(container.querySelectorAll('.reveal'));
}

function renderEducation() {
    const container = document.getElementById('eduGrid');
    if (!container) return;

    container.innerHTML = educationData.map((item, index) => `
        <article class="edu-card reveal" style="--reveal-delay:${index * 90}ms">
            <span class="edu-icon"><i class="fas ${item.icon}" aria-hidden="true"></i></span>
            <div class="edu-content">
                <h3>${item.title[state.lang]}</h3>
                <p class="edu-school">${item.school[state.lang]}</p>
                <span class="edu-status">${item.status[state.lang]}</span>
            </div>
        </article>
    `).join('');

    observeReveals(container.querySelectorAll('.reveal'));
}

/* ------------------------------- Typing --------------------------------- */

const typing = {
    phrase: 0,
    char: 0,
    deleting: false,
    timeoutId: null
};

function restartTyping() {
    window.clearTimeout(typing.timeoutId);
    typing.phrase = 0;
    typing.char = 0;
    typing.deleting = false;

    const element = document.getElementById('typingText');
    if (!element) return;

    const phrases = i18n[state.lang].hero.typing;
    if (prefersReducedMotion()) {
        element.textContent = phrases[0];
        return;
    }

    element.textContent = '';
    typing.timeoutId = window.setTimeout(typeStep, 500);
}

function typeStep() {
    const element = document.getElementById('typingText');
    if (!element) return;

    const phrases = i18n[state.lang].hero.typing;
    const phrase = phrases[typing.phrase % phrases.length];
    let delay = typing.deleting ? 32 : 58;

    if (!typing.deleting) {
        typing.char += 1;
        element.textContent = phrase.slice(0, typing.char);

        if (typing.char >= phrase.length) {
            typing.deleting = true;
            delay = 1900;
        }
    } else {
        typing.char -= 1;
        element.textContent = phrase.slice(0, Math.max(typing.char, 0));

        if (typing.char <= 0) {
            typing.deleting = false;
            typing.phrase = (typing.phrase + 1) % phrases.length;
            delay = 320;
        }
    }

    typing.timeoutId = window.setTimeout(typeStep, delay);
}

/* --------------------------- Scroll animations -------------------------- */

const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
    : null;

function observeReveals(elements) {
    if (!elements || elements.length === 0) return;

    if (!revealObserver || prefersReducedMotion()) {
        elements.forEach(element => element.classList.add('is-visible'));
        return;
    }

    elements.forEach(element => revealObserver.observe(element));
}

function initScrollReveal() {
    observeReveals(document.querySelectorAll('.reveal'));
}

function initCounters() {
    const values = document.querySelectorAll('.stat-value[data-count]');
    if (values.length === 0) return;

    const start = element => {
        const target = Number(element.dataset.count) || 0;
        const suffix = element.dataset.suffix || '';

        if (prefersReducedMotion() || !('requestAnimationFrame' in window)) {
            element.textContent = `${target}${suffix}`;
            return;
        }

        const duration = 1400;
        const startedAt = performance.now();

        const frame = now => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            element.textContent = `${Math.round(target * eased)}${suffix}`;
            if (progress < 1) window.requestAnimationFrame(frame);
        };

        window.requestAnimationFrame(frame);
    };

    if (!('IntersectionObserver' in window)) {
        values.forEach(start);
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                start(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    values.forEach(element => observer.observe(element));
}

function initTilt() {
    if (!hasFinePointer() || prefersReducedMotion()) return;

    document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('pointermove', event => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
        });

        card.addEventListener('pointerleave', () => {
            card.style.transform = '';
        });
    });
}

function initHeroParallax() {
    const hero = document.getElementById('home');
    if (!hero || !hasFinePointer() || prefersReducedMotion()) return;

    const orbs = Array.from(hero.querySelectorAll('.hero-orb'));
    let frame = null;

    hero.addEventListener('pointermove', event => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        if (frame) return;
        frame = window.requestAnimationFrame(() => {
            orbs.forEach((orb, index) => {
                const depth = 18 + index * 14;
                orb.style.transform = `translate3d(${(x * depth).toFixed(1)}px, ${(y * depth).toFixed(1)}px, 0)`;
            });
            frame = null;
        });
    });

    hero.addEventListener('pointerleave', () => {
        orbs.forEach(orb => { orb.style.transform = ''; });
    });
}

/* ------------------------------ Navigation ------------------------------ */

function initHeader() {
    const header = document.getElementById('header');
    const progress = document.getElementById('scrollProgress');
    const toTop = document.getElementById('toTop');
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link[data-section]'));
    const footer = document.querySelector('.footer');
    let ticking = false;

    const update = () => {
        const scrollY = window.scrollY;
        const headerHeight = header ? header.offsetHeight : 72;

        if (header) header.classList.toggle('scrolled', scrollY > 20);

        if (toTop) {
            // Hide the floating button while the footer (which has its own
            // back-to-top control) is on screen to avoid overlapping it.
            const footerVisible = footer
                ? footer.getBoundingClientRect().top < window.innerHeight - 24
                : false;
            toTop.classList.toggle('is-visible', scrollY > 600 && !footerVisible);
        }

        if (progress) {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const percent = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
            progress.style.width = `${Math.min(percent, 100)}%`;
        }

        let current = sections[0] ? sections[0].id : '';
        sections.forEach(section => {
            if (scrollY + headerHeight + 120 >= section.offsetTop) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === current);
        });
    };

    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            update();
            ticking = false;
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', debounce(onScroll, 150));
    update();
}

function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    const setOpen = open => {
        nav.classList.toggle('open', open);
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('nav-open', open);
    };

    toggle.addEventListener('click', () => {
        setOpen(!nav.classList.contains('open'));
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('click', event => {
        if (!nav.classList.contains('open')) return;
        if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            setOpen(false);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && nav.classList.contains('open')) {
            setOpen(false);
            toggle.focus();
        }
    });

    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 900) setOpen(false);
    }, 150));
}

function initBackToTop() {
    const button = document.getElementById('toTop');
    if (!button) return;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion() ? 'auto' : 'smooth'
        });
    });
}

function initYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
}

/* ----------------------------- Contact form ----------------------------- */

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitButton = document.getElementById('submitBtn');
    const message = document.getElementById('message');
    const counter = document.getElementById('messageCounter');

    const fields = {
        name: form.querySelector('#name'),
        email: form.querySelector('#email'),
        subject: form.querySelector('#subject'),
        message
    };
    const fieldOrder = [fields.name, fields.email, fields.subject, fields.message];

    const maxLength = Number(message.getAttribute('maxlength')) || 800;

    const updateCounter = () => {
        if (!counter) return;
        const length = message.value.length;
        counter.textContent = `${length} / ${maxLength}`;
        counter.classList.toggle('is-near-limit', length > maxLength * 0.9);
    };

    const resetForm = () => {
        form.reset();
        // form.reset() restores the hidden input's HTML default, so re-apply the active language.
        const languageInput = document.getElementById('formLanguage');
        if (languageInput) languageInput.value = state.lang;
        updateCounter();
    };

    const isValid = input => {
        const value = input.value.trim();

        if (input === fields.name) return value.length >= 2;
        if (input === fields.subject) return value.length >= 3;
        if (input === fields.message) return value.length >= 10;
        if (input === fields.email) return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
        return input.checkValidity();
    };

    const validateField = input => {
        const group = input.closest('.form-group');
        const valid = isValid(input);

        group.classList.toggle('invalid', !valid);
        input.setAttribute('aria-invalid', String(!valid));

        return valid;
    };

    const clearFeedback = () => {
        state.feedback = null;
        renderContactFeedback();
    };

    const showFeedback = (type, key, customMessage) => {
        state.feedback = { type, key, message: customMessage || null };
        renderContactFeedback();
    };

    const setLoading = loading => {
        submitButton.classList.toggle('loading', loading);
        submitButton.disabled = loading;
        submitButton.setAttribute('aria-busy', String(loading));

        const text = submitButton.querySelector('.btn-text');
        if (text) {
            text.textContent = loading ? t('contact.sending') : t('contact.formSubmit');
        }
    };

    const celebrate = () => {
        if (typeof window.confetti !== 'function' || prefersReducedMotion()) return;

        window.confetti({
            particleCount: 90,
            spread: 70,
            startVelocity: 34,
            origin: { y: 0.72 },
            colors: ['#c98a9a', '#8f7aa8', '#e8c9b8', '#f4e6ea'],
            disableForReducedMotion: true
        });
    };

    updateCounter();

    fieldOrder.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() !== '') validateField(input);
        });

        input.addEventListener('input', () => {
            if (input === message) updateCounter();
            if (input.closest('.form-group').classList.contains('invalid')) {
                validateField(input);
            }
        });
    });

    form.addEventListener('submit', async event => {
        event.preventDefault();
        clearFeedback();

        if (!CONFIG.formspreeId || CONFIG.formspreeId === 'YOUR_FORM_ID') {
            showFeedback('error', 'contact.errorConfig');
            return;
        }

        const allValid = fieldOrder.map(validateField).every(Boolean);
        if (!allValid) {
            const firstInvalid = fieldOrder.find(input => !isValid(input));
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // Honeypot: pretend success for bots without sending anything.
        const honeypot = form.querySelector('[name="_gotcha"]');
        if (honeypot && honeypot.value) {
            showFeedback('success', 'contact.success');
            resetForm();
            return;
        }

        setLoading(true);

        const controller = new AbortController();
        const timer = window.setTimeout(() => controller.abort(), CONFIG.requestTimeout);

        try {
            const response = await fetch(CONFIG.formspreeEndpoint, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
                signal: controller.signal
            });

            const data = await response.json().catch(() => ({}));
            window.clearTimeout(timer);

            if (response.ok) {
                showFeedback('success', 'contact.success');
                resetForm();
                fieldOrder.forEach(input => {
                    input.closest('.form-group').classList.remove('invalid');
                    input.removeAttribute('aria-invalid');
                });
                celebrate();
            } else {
                const serverMessage = Array.isArray(data.errors)
                    ? data.errors.map(error => error.message).filter(Boolean).join(' ')
                    : '';
                showFeedback('error', 'contact.error', serverMessage || null);
            }
        } catch (error) {
            window.clearTimeout(timer);
            showFeedback('error', error.name === 'AbortError' ? 'contact.timeout' : 'contact.error');
        } finally {
            setLoading(false);
        }
    });
}

/* -------------------------------- Init ---------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const storedLang = getStored(CONFIG.storage.lang);
    state.lang = storedLang === 'ar' ? 'ar' : 'en';

    initTheme();
    initScrollReveal();
    setLanguage(state.lang, { persist: false, animate: false });
    initHeader();
    initMobileNav();
    initLanguageSwitcher();
    initTilt();
    initHeroParallax();
    initCounters();
    initContactForm();
    initBackToTop();
    initYear();
});
