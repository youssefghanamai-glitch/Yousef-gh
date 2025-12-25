document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATIONS & LANGUAGE SWITCHER ---
    const translations = {
        en: {
            brand: "YG",
            nav_about: "About",
            nav_offers: "Offers",
            nav_portfolio: "Portfolio",
            nav_skills: "Skills",
            nav_testimonials: "Testimonials",
            nav_contact: "Contact",
            hero_name: "Youssef Ghannam",
            hero_tagline: "Graphic Designer & Video Editor",
            hero_button: "Discover More",
            about_title: "About Me",
            about_p1: "Every successful project begins with one simple question: how can we deliver the right idea?<br><br>I'm Yousef Ghannam — a graphic designer and video editor with over 3 years of hands-on experience. Throughout my journey, I’ve collaborated with more than 40 clients across various industries, including education and food & beverage, helping brands communicate visually and connect meaningfully with their audiences. My work includes redesigning the visual identity for two restaurant brands, which resulted in a 120% increase in engagement in just one month. I've also created over 150 pieces of visual content — from book covers and YouTube thumbnails to Reels — that have helped educators increase their reach and demand. Although I didn’t formally study design, my passion for the field led me to learn through real-world experience, continuous practice, and a deep understanding of what works in today’s market. My focus remains on crafting compelling brand identities, editing engaging videos, and designing visuals that not only look good but serve a purpose.",
            offers_title: "Special Offers",

            // Weekly Package
            offer1_title: "Weekly Follow-up",
            offer1_f1: "4 Pro Montage Videos (1/Week)",
            offer1_f2: "4 Attractive Thumbnails",
            offer1_f3: "Audio & Video Quality Improvement",
            offer1_f4: "Fast Delivery (48h)",
            offer1_f5: "Suggested Posting Plan (Bonus)",

            // Intensive Package
            offer2_title: "Intensive Curriculum",
            offer2_f1: "8 Explainer Videos (2/Week)",
            offer2_f2: "8 Professional Thumbnails",
            offer2_f3: "4 Ad Poster Designs",
            offer2_f4: "Free Ad Campaign Management",
            offer2_f5: "Camera Presence Tips",
            offer2_f6: "4 Strong Reels",

            // Viral Package (Best Value)
            offer3_title: "Viral & Trending",
            offer3_f1: "6 Long Explainer Videos",
            offer3_f2: "3 Viral Style Reels",
            offer3_f3: "6 High-Quality Thumbnails",
            offer3_f4: "6 Strong Ad Posters",
            offer3_f5: "Interactive Content Plan",
            offer3_f6: "Top Priority for Execution & Edits",
            offer3_extra: "2 Review/Rules Posters",
            offer1_extra: "Review Poster",
            offer2_extra: "Book Cover Design",
            offer2_new1: "Rules Poster or Summary",
            offer2_new2: "Certificate",
            offer2_new3: "Ad Campaign Scheduling File (free)",
            offer2_f3: "8 Social Media Ad Posters",

            best_value: "Best Value",
            contact_for_price: "Contact for Price",
            portfolio_title: "Some of My Work",
            portfolio_button: "View Project",
            portfolio1_title: "Restaurant Brand Redesign",
            portfolio1_p: "Led a complete brand identity overhaul for two local restaurants, significantly boosting their online presence and customer interaction.",
            portfolio2_title: "Educational Content Series",
            portfolio2_p: "Designed and produced over 150 engaging visual materials for educational services, including presentations, infographics, and video overlays.",
            portfolio3_title: "Reels Video Editing",
            portfolio3_p: "Specialized in fast-paced and engaging video editing for social media Reels and advertisements, optimizing content for maximum retention.",
            portfolio4_title: "Thumbnail Design",
            portfolio4_p: "Created captivating and click-worthy thumbnails for YouTube videos. Focused on visual hierarchy and compelling imagery to increase click-through rates.",
            portfolio5_title: "BUNZ – Restaurant Brand Identity Design",
            portfolio5_p: "Created a full visual identity for BUNZ, a modern burger restaurant. The project included logo design, color palette, typography, and branded packaging, helping establish a bold and cohesive brand presence.",
            skills_title: "Skills",
            skill1_title: "Graphic Design",
            skill1_p: "Mastering Adobe tools like Photoshop, Illustrator, and InDesign.",
            skill2_title: "Video Editing & Production",
            skill2_p: "Proficient in Adobe Premiere Pro & CapCut for producing professional videos.",
            skill5_title: "Creativity & Innovation",
            skill5_p: "Generating fresh and original ideas and delivering unique design solutions.",
            skill7_title: "Communication & Collaboration",
            skill7_p: "Building strong client relationships and working effectively within teams.",
            testimonials_title: "Testimonials",
            contact_title: "Ready to Bring Your Vision to Life?",
            contact_p: "Let's connect and discuss how I can help your brand shine.",
            contact_whatsapp: "WhatsApp",
            footer_text: "&copy; 2025 Youssef Ghannam. All rights reserved.",
            custom_pkg_title: "Design Your Own Package",
            custom_pkg_desc: "These are standard individual rates. (Save more by choosing our monthly packages above 👆)",
            srv_filming: "Lecture Filming",
            srv_filming_note: "Select Lectures & Duration per Lecture",
            lbl_lectures: "Lectures",
            lbl_hours_per_lec: "Hours/Lecture",
            srv_thumbnail: "Thumbnail",
            srv_thumbnail_note: "High Quality",
            srv_reels: "Reels Video (1 Minute)",
            srv_reels_note: "Pro Editing",
            srv_ad: "Ad Design",
            srv_ad_note: "Social Media Poster",
            srv_book_cover: "Book Cover",
            srv_book_cover_note: "Professional Print Design",
            srv_certificate: "Certificate",
            srv_certificate_note: "Honorary Design for Students",
            srv_rules_poster: "Rules Poster",
            srv_rules_poster_note: "Classroom Guidelines Design",
            custom_total_label: "Estimated Total:",
            custom_send_btn: "Send Request Now",
            custom_calc_btn: "Calculate Price",
            custom_edit_btn: "Edit",
            custom_hint: "For better rates, check our monthly packages above!"
        },
        ar: {
            brand: "YG",
            nav_about: "من أنا",
            nav_offers: "العروض",
            nav_portfolio: "أعمالي",
            nav_skills: "المهارات",
            nav_testimonials: "آراء العملاء",
            nav_contact: "تواصل معي",
            hero_name: "يوسف غنام",
            hero_tagline: "مصمم جرافيك ومحرر فيديو",
            hero_button: "اكتشف المزيد",
            about_title: "من أنا",
            about_p1: "كل مشروع ناجح يبدأ بسؤال بسيط واحد: كيف نقدّم الفكرة الصحيحة؟ أنا يوسف غنام — مصمم جرافيك ومحرر فيديو بخبرة عملية تزيد عن 3 سنوات. خلال رحلتي، تعاونت مع أكثر من 40 عميل في مختلف المجالات، بما في ذلك التعليم والأغذية والمشروبات، وساعدت العلامات التجارية على التواصل بصريًا والتواصل بشكل هادف مع جماهيرها. يتضمن عملي إعادة تصميم الهوية البصرية لعلامتين تجاريتين لمطاعم، مما أدى إلى زيادة بنسبة 120٪ في التفاعل خلال شهر واحد فقط. كما قمت بإنشاء أكثر من 150 قطعة من المحتوى المرئي — من أغلفة الكتب والصور المصغرة على يوتيوب إلى مقاطع Reels — والتي ساعدت المعلمين على زيادة انتشارهم والطلب على خدماتهم. على الرغم من أنني لم أدرس التصميم بشكل رسمي، إلا أن شغفي بالمجال دفعني للتعلم من خلال الخبرة الواقعية، والممارسة المستمرة، والفهم العميق لما ينجح في سوق اليوم. يبقى تركيزي على صياغة هويات تجارية مقنعة، وتحرير فيديوهات جذابة، وتصميم مرئيات لا تبدو جيدة فحسب، بل تخدم هدفاً محدداً.",
            offers_title: "باقات العروض الخاصة",

            // Weekly Package (Arabic)
            offer1_title: "باقة المتابعة الأسبوعية",
            offer1_f1: "4 فيديوهات مونتاج احترافي (فيديو كل أسبوع)",
            offer1_f2: "4 صور مصغرة (Thumbnails) جذابة",
            offer1_f3: "تحسين جودة الصوت والصورة الحالية",
            offer1_f4: "تسليم سريع خلال 48 ساعة من التصوير",
            offer1_f5: "خطة نشر مقترحة (Bonus)",

            offer1_extra: "بوستر مراجعة",

            // Intensive Package (Arabic)
            offer2_title: "باقة المنهج المكثف",
            offer2_f1: "8 فيديوهات شرح/محتوى (2 أسبوعياً)",
            offer2_f2: "8 صور مصغرة احترافية",
            offer2_f3: "8 تصميمات بوسترز للسوشيال ميديا للإعلانات",
            offer2_f4: "ملف إدارة جدولة الحملات الإعلانية مجاناً (Setup & Monitoring)",
            offer2_f5: "نصائح لتحسين الظهور أمام الكاميرا",
            offer2_f6: "4 فيديوهات ريلز قوية",
            offer2_extra: "تصميم غلاف مذكرة",
            offer2_new1: "تصميم بوستر قوانين أو ملخص",
            offer2_new2: "شهادة تقدير",

            // Viral Package (Arabic) - FEATURED
            offer3_title: "باقة الانتشار والتريند",
            offer3_f1: "6 فيديوهات شرح طويلة (يوتيوب/فيسبوك)",
            offer3_f2: "3 فيديوهات ريلز سريعة الانتشار (Viral Style)",
            offer3_f3: "6 صور مصغرة عالية الجودة",
            offer3_f4: "6 بوسترات إعلانية قوية",
            offer3_f5: "خطة محتوى تفاعلية لزيادة المتابعين",
            offer3_f6: "أولوية قصوى في التنفيذ والتعديلات",
            offer3_extra: "2 بوستر القوانين مراجعة",

            best_value: "الأكثر طلباً (Best Value)",
            contact_for_price: "تواصل للسعر",
            portfolio_title: "بعض من أعمالي",
            portfolio_button: "عرض المشروع",
            portfolio1_title: "إعادة تصميم علامة تجارية لمطعم",
            portfolio1_p: "قمت بإعادة تصميم الهوية التجارية الكاملة لمطعمين محليين، مما أدى إلى تعزيز وجودهم على الإنترنت وتفاعل العملاء بشكل كبير.",
            portfolio2_title: "سلسلة محتوى تعليمي",
            portfolio2_p: "صممت وأنتجت أكثر من 150 مادة مرئية جذابة للخدمات التعليمية، بما في ذلك العروض التقديمية والرسوم البيانية وتراكبات الفيديو.",
            portfolio3_title: "مونتاج فيديوهات Reels",
            portfolio3_p: "متخصص في تحرير الفيديو سريع الخطى والجذاب لمقاطع Reels والإعلانات على وسائل التواصل الاجتماعي، مع تحسين المحتوى لتحقيق أقصى قدر من الاحتفاظ.",
            portfolio4_title: "تصميم الصور المصغرة",
            portfolio4_p: "قمت بإنشاء صور مصغرة جذابة ومغرية للنقر لمقاطع فيديو يوتيوب. ركزت على التسلسل الهرمي البصري والصور المقنعة لزيادة معدلات النقر.",
            portfolio5_title: "BUNZ – تصميم هوية بصرية لمطعم",
            portfolio5_p: "تم إنشاء هوية بصرية كاملة لـ BUNZ، وهو مطعم برجر عصري. شمل المشروع تصميم الشعار، ولوحة الألوان، والخطوط، والتغليف، مما ساعد على تأسيس حضور قوي ومتماسك للعلامة التجارية.",
            skills_title: "المهارات",
            skill1_title: "التصميم الجرافيكي",
            skill1_p: "إتقان أدوات Adobe مثل فوتوشوب، إليستريتور، وإن ديزاين.",
            skill2_title: "تحرير ومونتاج الفيديو",
            skill2_p: "خبرة في استخدام Adobe Premiere Pro و CapCut لإنتاج فيديوهات احترافية.",
            skill5_title: "الإبداع والابتكار",
            skill5_p: "توليد أفكار جديدة وتقديم حلول تصميم فريدة.",
            skill7_title: "التواصل والتعاون",
            skill7_p: "بناء علاقات قوية مع العملاء والعمل بفعالية ضمن فرق.",
            testimonials_title: "آراء العملاء",
            contact_title: "هل أنت مستعد لتحويل رؤيتك إلى حقيقة؟",
            contact_p: "لنتواصل ونناقش كيف يمكنني مساعدة علامتك التجارية على التألق.",
            contact_whatsapp: "واتساب",
            contact_instagram: "انستغرام",
            contact_email: "البريد الإلكتروني",
            footer_text: "© 2025 يوسف غنام. جميع الحقوق محفوظة.",
            custom_pkg_title: "صمم باقتك بنفسك",
            custom_pkg_desc: "الأسعار هنا هي أسعار الخدمات الفردية. (وفر أكثر باختيار الباقات الشهرية بالأعلى 👆)",
            srv_filming: "تصوير محاضرات (فيديو)",
            srv_filming_note: "حدد عدد المحاضرات ومدة المحاضرة الواحدة",
            lbl_lectures: "المحاضرات",
            lbl_hours_per_lec: "ساعات لكل محاضرة",
            srv_thumbnail: "صورة مصغرة (Thumbnail)",
            srv_thumbnail_note: "جودة عالية جذابة",
            srv_reels: "فيديو ريلز (1 دقيقة)",
            srv_reels_note: "مونتاج احترافي سريع",
            srv_ad: "تصميم إعلان (Poster)",
            srv_ad_note: "سوشيال ميديا",
            srv_book_cover: "غلاف مذكرة (Book Cover)",
            srv_book_cover_note: "تصميم احترافي جاهز للطباعة",
            srv_certificate: "شهادة تقدير (Certificate)",
            srv_certificate_note: "تصميم مميز لتكريم الطلاب",
            srv_rules_poster: "بوستر القوانين (Rules)",
            srv_rules_poster_note: "تصميم إرشادي للقاعة/السنتر",
            custom_total_label: "السعر الإجمالي (Individual Pricing):",
            custom_send_btn: "أرسل الطلب الآن",
            custom_calc_btn: "احسب السعر",
            custom_edit_btn: "تعديل",
            custom_hint: "للحصول على أسعار أوفر، راجع الباقات الشهرية بالأعلى!"
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                if (element.children.length > 0 && element.tagName === 'LI') {
                    // Preserve icon for list items
                    const icon = element.querySelector('i');
                    element.innerHTML = '';
                    if (icon) element.appendChild(icon);
                    element.appendChild(document.createTextNode(' ' + translations[lang][key]));
                } else if (element.children.length > 0 && element.tagName === 'A') {
                    // Button with icon
                    const icon = element.querySelector('i');
                    const span = element.querySelector('span');
                    if (span) span.innerText = translations[lang][key];
                    else element.innerText = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        if (typeof SplitType !== 'undefined' && document.querySelector('#about-content p')) {
            try {
                const aboutP = document.querySelector('#about-content p');
                aboutP.style.opacity = '1';
                new SplitType(aboutP, { types: 'words' });
            } catch (e) { }
        }
    }

    // Add event listener for Lang Switcher
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            langSwitcher.textContent = newLang === 'ar' ? 'English' : 'عربي';
            updateLanguage(newLang);
        });
    }

    // Set Initial Content
    const initialLang = document.documentElement.lang || 'ar';
    if (document.querySelector('#about-content p') && document.querySelector('#about-content p').innerText.trim() === '') {
        document.querySelector('#about-content p').innerText = translations[initialLang].about_p1;
    }

    // --- GENERIC UTILS (Theme, Nav, Cursor) ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const themeIcon = themeSwitcher ? themeSwitcher.querySelector('i') : null;
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const current = localStorage.getItem('theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', next);
            body.classList.toggle('light-mode', next === 'light');
            if (themeIcon) {
                themeIcon.classList.toggle('fa-sun', next === 'dark');
                themeIcon.classList.toggle('fa-moon', next === 'light');
            }
        });
        const savedTheme = localStorage.getItem('theme') || 'dark';
        body.classList.toggle('light-mode', savedTheme === 'light');
        if (themeIcon) {
            themeIcon.classList.toggle('fa-sun', savedTheme === 'dark');
            themeIcon.classList.toggle('fa-moon', savedTheme === 'light');
        }
    }

    // Mobile Nav
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            navToggle.classList.toggle('nav-open');
            document.body.classList.toggle('no-scroll');
        });
        navLinks.querySelectorAll('a, button').forEach(l => {
            l.addEventListener('click', () => {
                navLinks.classList.remove('nav-open');
                navToggle.classList.remove('nav-open');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        if (cursorDot) { cursorDot.style.left = `${posX}px`; cursorDot.style.top = `${posY}px`; }
        if (cursorOutline) cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
    });
    document.querySelectorAll('a, button, .card, input, label').forEach((el) => {
        el.addEventListener('mouseover', () => cursorOutline?.classList.add('cursor-interact'));
        el.addEventListener('mouseleave', () => cursorOutline?.classList.remove('cursor-interact'));
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetPosition = targetElement.offsetTop - navbarHeight - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Particle BG
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const numParticles = 50;
        const initParticles = () => {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                const r = Math.random() * 2 + 1;
                const x = Math.random() * (canvas.width - r * 2) + r;
                const y = Math.random() * (canvas.height - r * 2) + r;
                const c = body.classList.contains('light-mode') ? 'rgba(4, 54, 74, 0.4)' : `rgba(100, 204, 197, ${Math.random() * 0.3 + 0.1})`;
                const v = { x: (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 0.5 };
                particles.push({ x, y, r, c, v });
            }
        };
        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                if (p.x + p.r > canvas.width || p.x - p.r < 0) p.v.x = -p.v.x;
                if (p.y + p.r > canvas.height || p.y - p.r < 0) p.v.y = -p.v.y;
                p.x += p.v.x; p.y += p.v.y;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.c;
                ctx.fill();
            });
        };
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initParticles(); };
        window.addEventListener('resize', resize);
        resize();
        animate();
    }

    // Tilt
    if (window.innerWidth > 768 && typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".card"), { max: 10, speed: 400, glare: true, "max-glare": 0.2 });
    }

    // --- 🚀 NEW FEATURE: PACKAGE DETAILS OVERLAY & DATA (UPDATED) ---
    const packagesData = {
        'basic': {
            title: 'باقة المتابعة الأسبوعية',
            image: '../images/BAC1.png',
            audience: 'مثالية للمدرسين الجدد أو صناع المحتوى الذين يرغبون في الاستمرارية بمحتوى ثابت ومتميز شهرياً.',
            features: [
                '4 فيديوهات مونتاج احترافي (فيديو كل أسبوع)',
                '4 صور مصغرة (Thumbnails) جذابة لزيادة النقرات',
                'تسليم سريع خلال 48 ساعة من التصوير',
                'خطة نشر مقترحة (Bonus)',
                'بوستر مراجعة'
            ],
            price: '1500 EGP <span style="font-size:0.5em; text-decoration:line-through; color:#aaa">2000</span>'
        },
        'pro': {
            title: 'باقة المنهج المكثف',
            image: '../images/BAC2.png',
            audience: 'صممت خصيصاً للمدرسين الذين يصورون منهجاً كاملاً ويحتاجون إلى إنتاج غزير بجودة عالية.',
            features: [
                '8 فيديوهات شرح/محتوى (2 أسبوعياً)',
                '8 صور مصغرة احترافية',
                '8 تصميمات بوسترز للسوشيال ميديا للإعلانات',
                '4 فيديوهات ريلز قوية',
                'تصميم غلاف مذكرة',
                'تصميم بوستر قوانين أو ملخص',
                'شهادة تقدير',
                'ملف إدارة جدولة الحملات الإعلانية مجاناً (Setup & Monitoring)',
                'نصائح لتحسين الظهور أمام الكاميرا'
            ],
            price: '6000 EGP <span style="font-size:0.5em; text-decoration:line-through; color:#aaa">6500</span>'
        },
        'vip': {
            title: 'باقة الانتشار والتريند',
            image: '../images/BAC3.png',
            audience: 'للأكاديميات والمدرسين الكبار الباحثين عن التوسع السريع والسيطرة على المنصات.',
            features: [
                '6 فيديوهات شرح طويلة (يوتيوب/فيسبوك)',
                '3 فيديوهات ريلز سريعة الانتشار (Viral Style)',
                '6 صور مصغرة عالية الجودة',
                '6 بوسترات إعلانية قوية',
                'خطة محتوى تفاعلية لزيادة المتابعين',
                'أولوية قصوى في التنفيذ والتعديلات',
                '2 بوستر القوانين مراجعة'
            ],
            price: '4250 EGP <span style="font-size:0.5em; text-decoration:line-through; color:#aaa">5000</span>'
        }
    };

    const packageOverlay = document.getElementById('package-overlay');
    const closeOverlayBtn = document.querySelector('.close-overlay');
    const viewDetailBtns = document.querySelectorAll('.view-package-detail');
    const pkgBookBtn = document.getElementById('pkg-book-btn');
    const pkgTitle = document.getElementById('pkg-title');
    const pkgImg = document.getElementById('pkg-img');
    const pkgAudience = document.getElementById('pkg-audience');
    const pkgFeatures = document.getElementById('pkg-features');
    const pkgPrice = document.getElementById('pkg-price');

    let currentSelectedPackageId = '';

    viewDetailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pkgId = btn.getAttribute('data-package-id');
            const data = packagesData[pkgId];

            if (data) {
                currentSelectedPackageId = pkgId;
                pkgTitle.innerText = data.title;
                pkgImg.src = data.image;
                pkgImg.onerror = function () { this.src = 'https://placehold.co/800x400/04364A/64CCC5?text=Package+Image'; };
                pkgAudience.innerText = data.audience;
                pkgPrice.innerHTML = data.price;

                pkgFeatures.innerHTML = '';
                data.features.forEach(feat => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-check-circle"></i> ${feat}`;
                    pkgFeatures.appendChild(li);
                });

                packageOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeOverlayBtn) {
        closeOverlayBtn.addEventListener('click', () => {
            packageOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (pkgBookBtn) {
        pkgBookBtn.addEventListener('click', () => {
            openWizard(currentSelectedPackageId);
        });
    }

    // --- WIZARD FORM LOGIC ---
    const wizardModal = document.getElementById('wizard-modal');
    const closeWizardBtn = document.querySelector('.close-modal');
    const wizardForm = document.getElementById('wizard-form');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const steps = document.querySelectorAll('.step');
    const progressFill = document.getElementById('progress-fill');
    let currentStep = 1;
    let selectedPackageName = "";

    function openWizard(pkgId) {
        const map = { 'basic': 'باقة المتابعة الأسبوعية', 'pro': 'باقة المنهج المكثف', 'vip': 'باقة الانتشار والتريند' };
        selectedPackageName = map[pkgId] || "باقة غير محددة";
        wizardModal.classList.add('active');
    }

    if (closeWizardBtn) {
        closeWizardBtn.addEventListener('click', () => {
            wizardModal.classList.remove('active');
            if (!packageOverlay.classList.contains('active')) {
                document.body.style.overflow = 'auto';
            }
        });
    }

    function updateWizard() {
        steps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) === currentStep) {
                step.classList.add('active');
            }
        });
        const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
        if (progressFill) progressFill.style.width = `${progress}%`;

        if (currentStep === 1) {
            prevBtn.style.display = 'none';
            nextBtn.textContent = 'التالي';
        } else if (currentStep === steps.length) {
            prevBtn.style.display = 'inline-block';
            nextBtn.textContent = 'إرسال الطلب (WhatsApp)';
        } else {
            prevBtn.style.display = 'inline-block';
            nextBtn.textContent = 'التالي';
        }
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentStepEl = document.querySelector(`.step[data-step="${currentStep}"]`);
            const inputs = currentStepEl.querySelectorAll('input[required], select[required]');
            let valid = true;
            inputs.forEach(i => { if (!i.checkValidity()) { i.reportValidity(); valid = false; } });

            if (valid) {
                if (currentStep < steps.length) {
                    currentStep++;
                    updateWizard();
                } else {
                    sendToWhatsApp();
                }
            }
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentStep > 1) { currentStep--; updateWizard(); }
        });
    }

    function sendToWhatsApp() {
        const formData = new FormData(wizardForm);
        const data = Object.fromEntries(formData.entries());

        const goals = [];
        document.querySelectorAll('input[name="goal"]:checked').forEach(cb => goals.push(cb.value));
        const platforms = [];
        document.querySelectorAll('input[name="platform"]:checked').forEach(cb => platforms.push(cb.value));

        let message = `*طلب جديد من الموقع 🚀*\n\n`;
        message += `*الباقة المختارة:* ${selectedPackageName}\n`;
        message += `*الاسم:* ${data.name || ''}\n`;
        message += `*رقم الهاتف:* ${data.phone || ''}\n`;
        message += `*الصفة:* ${data.role || ''}\n\n`;

        message += `--- تفاصيل المشروع ---\n`;
        message += `*الهدف:* ${goals.join('، ')}\n`;
        message += `*الخدمة:* ${data.service}\n`;
        message += `*الوضع الحالي:* ${data.status}\n\n`;

        message += `--- الجمهور والستايل والهوية ---\n`;
        message += `*الجمهور:* ${data.audience || 'غير محدد'}\n`;
        message += `*الستايل:* ${data.style || 'غير محدد'}\n`;
        message += `*المنصات:* ${platforms.join('، ')}\n\n`;

        message += `--- الموعد ---\n`;
        message += `*الموعد:* ${data.timeline || 'غير محدد'}\n`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/201062680608?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');

        setTimeout(() => {
            wizardModal.classList.remove('active');
            packageOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            currentStep = 1;
        }, 1000);
    }

    // --- CUSTOM PACKAGE LOGIC (UPDATED) ---
    const customInputs = document.querySelectorAll('.custom-pkg-wrapper .qty-input');
    const calcCustomBtn = document.getElementById('calc-custom-btn');
    const customSummary = document.getElementById('custom-summary');
    const newTotalDisplay = document.getElementById('new-total-display');
    const oldTotalDisplay = document.getElementById('old-total-display');
    const savingsDisplay = document.getElementById('savings-display');
    const sendCustomOrderBtn = document.getElementById('send-custom-order');
    const reCalcBtn = document.getElementById('re-calc-btn');

    // Helper to calculate totals
    function calculateTotals() {
        let totalNew = 0;

        // 1. Calculate Filming (Special Logic: Lectures * HoursPerLec * rate)
        const filmLecInput = document.querySelector('.film-lectures-input');
        const filmHourInput = document.querySelector('.film-hours-input');

        if (filmLecInput && filmHourInput) {
            const lectures = parseInt(filmLecInput.value) || 0;
            const hoursPerLec = parseInt(filmHourInput.value) || 0;
            const rate = 150; // Rate per hour

            if (lectures > 0 && hoursPerLec > 0) {
                totalNew += (lectures * hoursPerLec * rate);
            }
        }

        // 2. Calculate Other Inputs
        customInputs.forEach(input => {
            // Skip filming inputs as they are handled above
            if (input.classList.contains('film-lectures-input') || input.classList.contains('film-hours-input')) return;

            const price = parseFloat(input.dataset.price);
            const qty = parseInt(input.value) || 0;
            if (qty > 0) {
                totalNew += price * qty;
            }
        });

        return { totalNew };
    }

    // Input Step Buttons
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const input = btn.parentElement.querySelector('input');
            let val = parseInt(input.value) || 0;
            if (btn.classList.contains('plus')) {
                val++;
            } else {
                if (val > 0) val--;
            }
            input.value = val;
            // Hide summary if user changes quantity, forcing them to re-calculate
            if (customSummary) customSummary.style.display = 'none';
            if (calcCustomBtn) calcCustomBtn.style.display = 'inline-block';
        });
    });

    // Reset view if input changes manually
    if (customInputs) {
        customInputs.forEach(inp => {
            inp.addEventListener('input', () => {
                if (customSummary) customSummary.style.display = 'none';
                if (calcCustomBtn) calcCustomBtn.style.display = 'inline-block';
            });
        });
    }

    // Calculate Button Click
    if (calcCustomBtn) {
        calcCustomBtn.addEventListener('click', () => {
            const { totalNew } = calculateTotals();

            if (totalNew === 0) {
                // Determine current lang for alert
                const lang = document.documentElement.lang || 'ar';
                const msg = lang === 'ar' ? 'يرجى اختيار خدمة واحدة على الأقل.' : 'Please select at least one service.';
                alert(msg);
                return;
            }

            // Update displays
            if (newTotalDisplay) newTotalDisplay.innerText = totalNew;

            // Show summary, hide calc button
            if (customSummary) customSummary.style.display = 'block';
            if (calcCustomBtn) calcCustomBtn.style.display = 'none';
        });
    }

    // Edit Button Click
    if (reCalcBtn) {
        reCalcBtn.addEventListener('click', () => {
            if (customSummary) customSummary.style.display = 'none';
            if (calcCustomBtn) calcCustomBtn.style.display = 'inline-block';
        });
    }

    // Send WhatsApp
    if (sendCustomOrderBtn) {
        sendCustomOrderBtn.addEventListener('click', () => {
            let items = [];
            const { totalNew } = calculateTotals();

            // 1. Add Filming Item
            const filmLecInput = document.querySelector('.film-lectures-input');
            const filmHourInput = document.querySelector('.film-hours-input');
            if (filmLecInput && filmHourInput) {
                const lectures = parseInt(filmLecInput.value) || 0;
                const hours = parseInt(filmHourInput.value) || 0;
                if (lectures > 0 && hours > 0) {
                    const cost = lectures * hours * 150;
                    items.push(`- تصوير محاضرات: ${lectures} محاضرات × ${hours} ساعات (الإجمالي: ${cost} EGP)`);
                }
            }

            // 2. Add Other Items
            customInputs.forEach(input => {
                if (input.classList.contains('film-lectures-input') || input.classList.contains('film-hours-input')) return;

                const qty = parseInt(input.value) || 0;
                if (qty > 0) {
                    const name = input.dataset.name;
                    const price = parseFloat(input.dataset.price);
                    items.push(`- ${name}: ${qty} (سعر: ${price * qty} EGP)`);
                }
            });

            if (items.length === 0) return;

            let msg = `*طلب باقة مخصصة (Custom Package)* 🛠️\n\n`;
            msg += items.join('\n');
            msg += `\n\n*الإجمالي (Individual Price):* ${totalNew} EGP`;
            msg += `\n\nأرغب في تنفيذ هذه الخدمات.`;

            const url = `https://wa.me/201062680608?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
        });
    }

});
