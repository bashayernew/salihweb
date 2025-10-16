// Language switching functionality
class LanguageSwitcher {
  constructor() {
    // Don't set currentLang here - let init() handle it
    this.translations = {
      en: {
        // Navigation
        'nav-home': 'Home',
        'nav-gallery': 'Gallery',
        'nav-services': 'Services',
        'nav-workshops': 'Workshops',
        'nav-process': 'Process',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Home Page
        'hero-title': 'Crafted Wood, <span class="accent">Timeless</span> Form.',
        'hero-subtitle': 'Crafting beautiful, functional spaces',
        'hero-description': 'Custom doors, kitchens, wardrobes & bespoke pieces — built to last.',
        'home-about-title': 'Craftsmanship That <span class="accent">Lasts</span>',
        'home-about-desc': 'We\'re a Kuwait-based workshop specializing in bespoke interiors and fine wood craftsmanship. From concept to installation, we handle every detail with precision and care.',
        'home-cta-title': 'Ready to Start Your <span class="accent">Project</span>?',
        'home-cta-desc': 'Get in touch today for a free consultation. We\'ll discuss your vision and provide expert recommendations.',
        
        // Gallery Page
        'gallery-title': 'Our <span class="accent">Gallery</span>',
        'gallery-subtitle': 'Discover our collection of handcrafted masterpieces, from elegant furniture to intricate decorative pieces.',
        
        // Services Page
        'services-title': 'What We <span class="accent">Do</span>',
        'services-subtitle': 'Expert craftsmanship across every type of woodwork project.',
        'services-intro-title': 'Craftsmanship Across Every <span class="accent">Project</span>',
        'services-intro-desc': 'From custom doors to complete kitchen installations, we bring expertise, precision, and passion to every piece we create. Each project is handled with care from initial consultation through final installation.',
        'services-what-we-offer': 'What We Offer:',
        'services-cta-title': 'Ready to Start Your <span class="accent">Project</span>?',
        'services-cta-desc': 'Get in touch for a free consultation and quote.',
        'services-cta-btn': 'Request a Quote',
        
        // Service Details - Doors
        'service-doors-full-title': 'Custom <span class="accent">Doors</span>',
        'service-doors-item1': 'Solid wood interior & exterior doors',
        'service-doors-item2': 'Veneer doors with premium finishes',
        'service-doors-item3': 'Custom frames and architraves',
        'service-doors-item4': 'Modern and traditional styles',
        'service-doors-item5': 'Complete installation service',
        'service-doors-full-desc': 'Expertly crafted doors that make a lasting impression. Choose from our designs or create your own.',
        
        // Service Details - Kitchen
        'service-kitchen-full-title': 'Kitchen <span class="accent">Cabinets</span>',
        'service-kitchen-item1': 'Custom cabinet layouts',
        'service-kitchen-item2': 'Premium hardware and fixtures',
        'service-kitchen-item3': 'Soft-close mechanisms',
        'service-kitchen-item4': 'Multiple finish options',
        'service-kitchen-item5': 'Built-in appliances integration',
        'service-kitchen-full-desc': 'Tailored kitchens designed for your space and lifestyle. Functional, beautiful, and built to last.',
        
        // Service Details - Wardrobes
        'service-wardrobes-full-title': 'Wardrobes & <span class="accent">Storage</span>',
        'service-wardrobes-item1': 'Built-in wardrobe systems',
        'service-wardrobes-item2': 'Walk-in closet designs',
        'service-wardrobes-item3': 'Smart storage solutions',
        'service-wardrobes-item4': 'Sliding and hinged doors',
        'service-wardrobes-item5': 'Custom shelving and drawers',
        'service-wardrobes-full-desc': 'Maximize your space with smart storage that\'s both practical and elegant.',
        
        // Service Details - Panels
        'service-panels-full-title': 'Wall <span class="accent">Panels</span>',
        'service-panels-item1': 'Decorative wall paneling',
        'service-panels-item2': 'Acoustic panels',
        'service-panels-item3': 'Feature walls and accents',
        'service-panels-item4': 'TV wall units',
        'service-panels-item5': 'Custom patterns and finishes',
        'service-panels-full-desc': 'Transform any room with stunning wood panels that add warmth and character.',
        
        // Service Details - Majlis
        'service-majlis-full-title': 'Majlis & <span class="accent">Furniture</span>',
        'service-majlis-item1': 'Custom majlis seating',
        'service-majlis-item2': 'Dining tables and chairs',
        'service-majlis-item3': 'Coffee and side tables',
        'service-majlis-item4': 'Display cabinets',
        'service-majlis-item5': 'Bespoke furniture pieces',
        'service-majlis-full-desc': 'Unique furniture pieces designed specifically for your space and aesthetic preferences.',
        
        // Service Details - Workshops
        'service-workshops-full-title': 'Girls <span class="accent">Workshops</span>',
        'service-workshops-item1': 'Beginner to advanced courses',
        'service-workshops-item2': 'Hands-on woodworking training',
        'service-workshops-item3': 'Safe, supportive environment',
        'service-workshops-item4': 'All tools and materials included',
        'service-workshops-item5': 'Weekend and holiday schedules',
        'service-workshops-full-desc': 'Empowering young women through woodworking education and skill development.',
        
        // Service Types
        'service-doors-title': 'Custom Doors',
        'service-doors-desc': 'Solid wood & veneer doors, frames, and trims.',
        'service-kitchen-title': 'Kitchen Cabinets',
        'service-kitchen-desc': 'Tailored layouts, premium hardware, refined finishes.',
        'service-wardrobes-title': 'Wardrobes',
        'service-wardrobes-desc': 'Built-ins with smart storage and clean lines.',
        'service-panels-title': 'Wall Panels',
        'service-panels-desc': 'Feature walls and acoustic paneling.',
        'service-majlis-title': 'Majlis & Furniture',
        'service-majlis-desc': 'Bespoke seating, tables, and display units.',
        'service-workshops-title': 'Girls Workshops',
        'service-workshops-desc': 'Educational woodworking workshops teaching skills to young women.',
        
        // Process Page
        'process-title': 'Our <span class="accent">Process</span>',
        'process-subtitle': 'A proven approach that ensures quality and satisfaction.',
        'process-cta-title': 'Let\'s Start Your <span class="accent">Project</span>',
        'process-cta-desc': 'Contact us today for a free consultation.',
        'process-step1-title': 'Consult',
        'process-step1-desc': 'We discuss scope, materials, budget & timeline. Share your vision, measurements, and inspiration - we\'ll guide you through options and provide expert recommendations.',
        'process-step2-title': 'Design',
        'process-step2-desc': 'Drawings & finishes aligned with your space. Our team creates detailed plans and 3D visualizations so you can see exactly what you\'re getting before we start.',
        'process-step3-title': 'Craft',
        'process-step3-desc': 'Precision joinery, premium finishes, careful QC. Every piece is handcrafted in our workshop using traditional techniques and modern tools for perfect results.',
        'process-step4-title': 'Install',
        'process-step4-desc': 'On-time delivery and clean installation. Our experienced team handles everything from delivery to final installation, leaving your space immaculate.',
        
        // About Page
        'about-title': 'About <span class="accent">Us</span>',
        'about-subtitle': 'Crafting quality since day one.',
        'about-story-title': 'Our <span class="accent">Story</span>',
        'about-story-p1': 'We\'re a Kuwait-based workshop specializing in bespoke interiors and fine wood craftsmanship. From concept to installation, we handle every detail with precision and care.',
        'about-story-p2': 'Our passion for woodworking drives us to create pieces that are not only beautiful but built to last generations. We believe in honest craftsmanship, quality materials, and treating every project with the attention it deserves.',
        'about-features-title': 'What Sets Us <span class="accent">Apart</span>',
        'about-feature1': 'Solid wood & premium veneer materials',
        'about-feature2': 'Custom doors, kitchens, wardrobes & furniture',
        'about-feature3': 'Traditional joinery meets modern precision',
        'about-feature4': 'On-time installations with clean finish',
        'about-feature5': 'Dedicated project management from start to finish',
        'about-feature6': 'Competitive pricing without compromising quality',
        'about-cta-title': 'Work With <span class="accent">Us</span>',
        'about-cta-desc': 'Let\'s discuss your next project.',
        
        // Contact Page
        'contact-title': 'Get in <span class="accent">Touch</span>',
        'contact-subtitle': 'Let\'s discuss your project. Fast response guaranteed.',
        'contact-quote-title': 'Request a <span class="accent">Quote</span>',
        'contact-quote-desc': 'Send us your measurements or inspiration and we\'ll respond quickly with options and pricing.',
        'contact-whatsapp-btn': 'WhatsApp Us',
        'contact-quick-desc': 'Quickest way to reach us - we\'re usually online during business hours.',
        'contact-phone-title': 'Phone',
        'contact-email-title': 'Email',
        'contact-location-title': 'Location',
        'contact-location-desc': 'Serving all areas across Kuwait',
        'contact-hours-title': 'Business Hours',
        'contact-hours-desc': 'Saturday - Thursday: 9:00 AM - 9:00 PM<br>Friday: Closed',
        'contact-form-title': 'Send a Message',
        'contact-name': 'Name',
        'contact-phone': 'Phone',
        'contact-email': 'Email (optional)',
        'contact-project-type': 'Project Type',
        'contact-project-select': 'Select one',
        'contact-project-doors': 'Custom Doors',
        'contact-project-kitchen': 'Kitchen Cabinets',
        'contact-project-wardrobes': 'Wardrobes',
        'contact-project-panels': 'Wall Panels',
        'contact-project-furniture': 'Majlis & Furniture',
        'contact-project-workshop': 'Girls Workshop',
        'contact-project-other': 'Other',
        'contact-message': 'Message',
        'contact-message-placeholder': 'Tell us about your project...',
        
        // Workshops Page
        'workshops-title': 'Girls <span class="accent">Workshops</span>',
        'workshops-subtitle': 'Empowering young women through woodworking education and skill development.',
        'workshops-intro-title': 'Building Skills, Building <span class="accent">Confidence</span>',
        'workshops-intro-desc': 'We believe in empowering young women through hands-on woodworking education. Our workshops provide a supportive, encouraging environment where girls can learn valuable skills, build confidence, and discover the joy of creating with their hands.',
        'workshops-beginner-title': 'Beginner <span class="accent">Workshop</span>',
        'workshops-beginner-duration': 'Duration: 4 weeks',
        'workshops-beginner-age': 'Age Group: 14-18 years',
        'workshops-beginner-skills': 'Skills Covered:',
        'workshops-beginner-skill1': 'Basic tool safety and handling',
        'workshops-beginner-skill2': 'Wood selection and preparation',
        'workshops-beginner-skill3': 'Simple joinery techniques',
        'workshops-beginner-skill4': 'Finishing and sanding',
        'workshops-beginner-skill5': 'Creating a small project',
        'workshops-beginner-desc': 'Perfect for those new to woodworking. Learn fundamentals in a supportive environment.',
        'workshops-intermediate-title': 'Intermediate <span class="accent">Workshop</span>',
        'workshops-intermediate-duration': 'Duration: 6 weeks',
        'workshops-intermediate-age': 'Age Group: 16-22 years',
        'workshops-intermediate-skills': 'Skills Covered:',
        'workshops-intermediate-skill1': 'Advanced joinery techniques',
        'workshops-intermediate-skill2': 'Power tool operation',
        'workshops-intermediate-skill3': 'Design and planning',
        'workshops-intermediate-skill4': 'Furniture construction',
        'workshops-intermediate-skill5': 'Professional finishing',
        'workshops-intermediate-desc': 'Build on your skills with more complex projects and advanced techniques.',
        'workshops-advanced-title': 'Special <span class="accent">Projects</span>',
        'workshops-advanced-duration': 'Duration: 2-3 weeks',
        'workshops-advanced-age': 'Age Group: All ages',
        'workshops-advanced-examples': 'Project Examples:',
        'workshops-advanced-example1': 'Custom jewelry boxes',
        'workshops-advanced-example2': 'Decorative wall art',
        'workshops-advanced-example3': 'Small furniture pieces',
        'workshops-advanced-example4': 'Wooden accessories',
        'workshops-advanced-example5': 'Gift items',
        'workshops-advanced-desc': 'Short-term workshops focused on specific projects and techniques.',
        'workshops-benefits-title': 'Why Woodworking <span class="accent">Workshops?</span>',
        'workshops-benefit1-title': 'Skill Development',
        'workshops-benefit1-desc': 'Learn practical skills that build confidence and creativity.',
        'workshops-benefit2-title': 'Supportive Environment',
        'workshops-benefit2-desc': 'Safe, encouraging space designed specifically for young women.',
        'workshops-benefit3-title': 'Hands-On Learning',
        'workshops-benefit3-desc': 'Real tools, real projects, real results you can be proud of.',
        'workshops-benefit4-title': 'Building Confidence',
        'workshops-benefit4-desc': 'Master new skills and discover what you\'re capable of creating.',
        'workshops-info-title': 'Workshop <span class="accent">Details</span>',
        'workshops-schedule-title': 'Schedule',
        'workshops-schedule-line1': 'Workshops run on weekends and during school holidays',
        'workshops-schedule-line2': 'Saturday: 10:00 AM - 2:00 PM',
        'workshops-schedule-line3': 'Sunday: 2:00 PM - 6:00 PM',
        'workshops-location-title': 'Location',
        'workshops-location-line1': 'Our fully equipped workshop serving all areas across Kuwait',
        'workshops-location-line2': 'All tools and materials provided',
        'workshops-location-line3': 'Safe, clean, and professional environment',
        'workshops-pricing-title': 'Pricing',
        'workshops-pricing-line1': 'Affordable rates for quality education',
        'workshops-pricing-line2': 'Scholarship opportunities available',
        'workshops-pricing-line3': 'Group discounts for schools',
        'workshops-cta-title': 'Ready to Start Your <span class="accent">Journey?</span>',
        'workshops-cta-desc': 'Join our next workshop and discover the joy of woodworking!',
        'workshops-cta-btn': 'Register Now',
        
        // Home Page Preview Cards
        'preview-work-title': 'Our <span class="accent">Work</span>',
        'preview-work-desc': 'Browse our portfolio of custom woodwork projects and see the quality we deliver.',
        'preview-services-title': 'What We <span class="accent">Do</span>',
        'preview-services-desc': 'From custom doors to full kitchen installations, we handle every detail with precision.',
        'preview-process-title': 'How We <span class="accent">Work</span>',
        'preview-process-desc': 'Our proven 4-step process ensures quality results and satisfied clients every time.',
        'preview-decorative-title': 'Decorative <span class="accent">Collection</span>',
        'preview-decorative-desc': 'Beautiful handcrafted bowls, trays, and decorative pieces for your home.',
        'preview-furniture-title': 'Modern <span class="accent">Furniture</span>',
        'preview-furniture-desc': 'Contemporary live-edge tables and furniture pieces for modern homes.',
        'preview-utensils-title': 'Artisan <span class="accent">Utensils</span>',
        'preview-utensils-desc': 'Beautiful hand-carved wooden spoons, bowls, and kitchen accessories.',
        'preview-river-title': 'River <span class="accent">Tables</span>',
        'preview-river-desc': 'Stunning live-edge tables with colorful resin rivers flowing through natural wood.',
        
        // Common
        'btn-get-started': 'Get Started',
        'btn-learn-more': 'Learn More',
        'btn-view-gallery': 'View Gallery',
        'btn-our-services': 'Our Services',
        'btn-our-process': 'Our Process',
        'btn-view-collection': 'View Collection',
        'btn-view-furniture': 'View Furniture',
        'btn-view-tables': 'View Tables',
        'btn-get-in-touch': 'Get in Touch',
        'btn-whatsapp': 'WhatsApp Us',
        'btn-submit': 'Send Message',
        
        // Footer
        'footer-copyright': '© Loud',
        
        // Lightbox
        'lightbox-close': '×'
      },
      ar: {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-gallery': 'المعرض',
        'nav-services': 'الخدمات',
        'nav-workshops': 'ورش العمل',
        'nav-process': 'العملية',
        'nav-about': 'من نحن',
        'nav-contact': 'اتصل بنا',
        
        // Home Page
        'hero-title': 'خشب مصنوع يدوياً، شكل <span class="accent">خالد</span>.',
        'hero-subtitle': 'صنع مساحات جميلة وعملية',
        'hero-description': 'أبواب مخصصة، مطابخ، خزائن وقطع مصممة — مصنوعة لتدوم.',
        'home-about-title': 'حرفية تدوم <span class="accent">مدى الحياة</span>',
        'home-about-desc': 'نحن ورشة عمل مقرها الكويت متخصصة في الديكورات الداخلية المصممة والحرفية الخشبية المتميزة. من المفهوم إلى التثبيت، نتعامل مع كل التفاصيل بدقة وعناية.',
        'home-cta-title': 'مستعد لبدء <span class="accent">مشروعك</span>؟',
        'home-cta-desc': 'تواصل معنا اليوم للحصول على استشارة مجانية. سنناقش رؤيتك ونقدم توصيات الخبراء.',
        
        // Gallery Page
        'gallery-title': 'معرضنا <span class="accent">الفني</span>',
        'gallery-subtitle': 'اكتشف مجموعتنا من التحف المصنوعة يدوياً، من الأثاث الأنيق إلى القطع الزخرفية المعقدة.',
        
        // Services Page
        'services-title': 'ما نقدمه <span class="accent">لخدمتكم</span>',
        'services-subtitle': 'حرفية خبيرة في كل نوع من مشاريع النجارة.',
        'services-intro-title': 'حرفية عبر كل <span class="accent">مشروع</span>',
        'services-intro-desc': 'من الأبواب المخصصة إلى تركيب المطابخ الكاملة، نقدم الخبرة والدقة والشغف لكل قطعة نصنعها. كل مشروع يتم التعامل معه بعناية من الاستشارة الأولية حتى التركيب النهائي.',
        'services-what-we-offer': 'ما نقدمه:',
        'services-cta-title': 'مستعد لبدء <span class="accent">مشروعك</span>؟',
        'services-cta-desc': 'تواصل معنا للحصول على استشارة مجانية وعرض سعر.',
        'services-cta-btn': 'اطلب عرض سعر',
        
        // Service Details - Doors (Arabic)
        'service-doors-full-title': 'أبواب <span class="accent">مخصصة</span>',
        'service-doors-item1': 'أبواب خشبية صلبة داخلية وخارجية',
        'service-doors-item2': 'أبواب رقائقية بتشطيبات عالية الجودة',
        'service-doors-item3': 'إطارات وزخارف مخصصة',
        'service-doors-item4': 'أنماط حديثة وتقليدية',
        'service-doors-item5': 'خدمة تركيب كاملة',
        'service-doors-full-desc': 'أبواب مصنوعة بخبرة تترك انطباعاً دائماً. اختر من تصاميمنا أو أنشئ تصميمك الخاص.',
        
        // Service Details - Kitchen (Arabic)
        'service-kitchen-full-title': 'خزائن <span class="accent">المطبخ</span>',
        'service-kitchen-item1': 'تصاميم خزائن مخصصة',
        'service-kitchen-item2': 'أجهزة وتركيبات عالية الجودة',
        'service-kitchen-item3': 'آليات إغلاق هادئة',
        'service-kitchen-item4': 'خيارات تشطيب متعددة',
        'service-kitchen-item5': 'دمج الأجهزة المدمجة',
        'service-kitchen-full-desc': 'مطابخ مصممة خصيصاً لمساحتك وأسلوب حياتك. عملية وجميلة ومصممة لتدوم.',
        
        // Service Details - Wardrobes (Arabic)
        'service-wardrobes-full-title': 'خزائن الملابس و<span class="accent">التخزين</span>',
        'service-wardrobes-item1': 'أنظمة خزائن مدمجة',
        'service-wardrobes-item2': 'تصاميم غرف الملابس',
        'service-wardrobes-item3': 'حلول تخزين ذكية',
        'service-wardrobes-item4': 'أبواب منزلقة ومفصلية',
        'service-wardrobes-item5': 'رفوف وأدراج مخصصة',
        'service-wardrobes-full-desc': 'زد من استفادتك من المساحة مع تخزين ذكي عملي وأنيق في نفس الوقت.',
        
        // Service Details - Panels (Arabic)
        'service-panels-full-title': 'ألواح <span class="accent">الحائط</span>',
        'service-panels-item1': 'ألواح حائط زخرفية',
        'service-panels-item2': 'ألواح صوتية',
        'service-panels-item3': 'جدران مميزة ولمسات',
        'service-panels-item4': 'وحدات حائط التلفزيون',
        'service-panels-item5': 'أنماط وتشطيبات مخصصة',
        'service-panels-full-desc': 'حول أي غرفة بألواح خشبية مذهلة تضيف الدفء والطابع.',
        
        // Service Details - Majlis (Arabic)
        'service-majlis-full-title': 'المجلس و<span class="accent">الأثاث</span>',
        'service-majlis-item1': 'مقاعد مجلس مخصصة',
        'service-majlis-item2': 'طاولات طعام وكراسي',
        'service-majlis-item3': 'طاولات قهوة وجانبية',
        'service-majlis-item4': 'خزائن عرض',
        'service-majlis-item5': 'قطع أثاث مصممة خصيصاً',
        'service-majlis-full-desc': 'قطع أثاث فريدة مصممة خصيصاً لمساحتك وتفضيلاتك الجمالية.',
        
        // Service Details - Workshops (Arabic)
        'service-workshops-full-title': 'ورش <span class="accent">الفتيات</span>',
        'service-workshops-item1': 'دورات من المستوى المبتدئ إلى المتقدم',
        'service-workshops-item2': 'تدريب عملي على النجارة',
        'service-workshops-item3': 'بيئة آمنة وداعمة',
        'service-workshops-item4': 'جميع الأدوات والمواد متضمنة',
        'service-workshops-item5': 'جداول عطلة نهاية الأسبوع والعطل',
        'service-workshops-full-desc': 'تمكين الشابات من خلال التعليم وتطوير مهارات النجارة.',
        
        // Service Types
        'service-doors-title': 'أبواب مخصصة',
        'service-doors-desc': 'أبواب من الخشب الصلب والخشب الرقائقي، الإطارات والحواف.',
        'service-kitchen-title': 'خزائن المطبخ',
        'service-kitchen-desc': 'تصاميم مخصصة، أجهزة عالية الجودة، تشطيبات راقية.',
        'service-wardrobes-title': 'خزائن الملابس',
        'service-wardrobes-desc': 'خزائن مدمجة مع تخزين ذكي وخطوط نظيفة.',
        'service-panels-title': 'ألواح الحائط',
        'service-panels-desc': 'جدران مميزة وألواح صوتية.',
        'service-majlis-title': 'المجلس والأثاث',
        'service-majlis-desc': 'مقاعد مخصصة، طاولات ووحدات عرض.',
        'service-workshops-title': 'ورش الفتيات',
        'service-workshops-desc': 'ورش تعليمية في النجارة لتعليم المهارات للشابات.',
        
        // Process Page
        'process-title': 'عملية <span class="accent">العمل</span>',
        'process-subtitle': 'نهج مثبت يضمن الجودة والرضا.',
        'process-cta-title': 'لنبدأ <span class="accent">مشروعك</span>',
        'process-cta-desc': 'تواصل معنا اليوم للحصول على استشارة مجانية.',
        'process-step1-title': 'استشارة',
        'process-step1-desc': 'نناقش النطاق والمواد والميزانية والجدول الزمني. شارك رؤيتك وقياساتك وإلهامك - سنرشدك عبر الخيارات ونقدم توصيات الخبراء.',
        'process-step2-title': 'تصميم',
        'process-step2-desc': 'رسومات وتشطيبات متناسقة مع مساحتك. فريقنا ينشئ خطط مفصلة وتصورات ثلاثية الأبعاد حتى ترى بالضبط ما ستحصل عليه قبل أن نبدأ.',
        'process-step3-title': 'صنع',
        'process-step3-desc': 'ربط دقيق وتشطيبات عالية الجودة ومراقبة جودة دقيقة. كل قطعة مصنوعة يدوياً في ورشتنا باستخدام تقنيات تقليدية وأدوات حديثة لنتائج مثالية.',
        'process-step4-title': 'تركيب',
        'process-step4-desc': 'تسليم في الوقت المحدد وتركيب نظيف. فريقنا ذو الخبرة يتولى كل شيء من التسليم إلى التركيب النهائي، تاركاً مساحتك نظيفة تماماً.',
        
        // About Page
        'about-title': 'من <span class="accent">نحن</span>',
        'about-subtitle': 'صنع الجودة منذ اليوم الأول.',
        'about-story-title': 'قصتنا <span class="accent">المميزة</span>',
        'about-story-p1': 'نحن ورشة عمل مقرها الكويت متخصصة في الديكورات الداخلية المصممة والحرفية الخشبية المتميزة. من المفهوم إلى التثبيت، نتعامل مع كل التفاصيل بدقة وعناية.',
        'about-story-p2': 'شغفنا بالنجارة يدفعنا لإنشاء قطع ليست جميلة فحسب، بل مصممة لتدوم لأجيال. نؤمن بالحرفية الصادقة والمواد عالية الجودة ومعاملة كل مشروع بالاهتمام الذي يستحقه.',
        'about-features-title': 'ما يميزنا <span class="accent">عن الآخرين</span>',
        'about-feature1': 'خشب صلب ومواد رقائقية عالية الجودة',
        'about-feature2': 'أبواب ومطابخ وخزائن وأثاث مخصص',
        'about-feature3': 'الربط التقليدي يلتقي بالدقة الحديثة',
        'about-feature4': 'تركيب في الوقت المحدد مع تشطيب نظيف',
        'about-feature5': 'إدارة مشروع مخصصة من البداية للنهاية',
        'about-feature6': 'أسعار تنافسية دون المساومة على الجودة',
        'about-cta-title': 'اعمل <span class="accent">معنا</span>',
        'about-cta-desc': 'دعنا نناقش مشروعك القادم.',
        
        // Contact Page
        'contact-title': 'تواصل <span class="accent">معنا</span>',
        'contact-subtitle': 'دعنا نناقش مشروعك. استجابة سريعة مضمونة.',
        'contact-quote-title': 'اطلب <span class="accent">عرض سعر</span>',
        'contact-quote-desc': 'أرسل لنا قياساتك أو إلهامك وسنرد بسرعة بخيارات وأسعار.',
        'contact-whatsapp-btn': 'واتساب',
        'contact-quick-desc': 'أسرع طريقة للوصول إلينا - عادة ما نكون متصلين خلال ساعات العمل.',
        'contact-phone-title': 'الهاتف',
        'contact-email-title': 'البريد الإلكتروني',
        'contact-location-title': 'الموقع',
        'contact-location-desc': 'نخدم جميع مناطق الكويت',
        'contact-hours-title': 'ساعات العمل',
        'contact-hours-desc': 'السبت - الخميس: 9:00 ص - 9:00 م<br>الجمعة: مغلق',
        'contact-form-title': 'أرسل رسالة',
        'contact-name': 'الاسم',
        'contact-phone': 'الهاتف',
        'contact-email': 'البريد الإلكتروني (اختياري)',
        'contact-project-type': 'نوع المشروع',
        'contact-project-select': 'اختر واحداً',
        'contact-project-doors': 'أبواب مخصصة',
        'contact-project-kitchen': 'خزائن المطبخ',
        'contact-project-wardrobes': 'خزائن الملابس',
        'contact-project-panels': 'ألواح الحائط',
        'contact-project-furniture': 'المجلس والأثاث',
        'contact-project-workshop': 'ورشة الفتيات',
        'contact-project-other': 'أخرى',
        'contact-message': 'الرسالة',
        'contact-message-placeholder': 'أخبرنا عن مشروعك...',
        
        // Workshops Page
        'workshops-title': 'ورش <span class="accent">الفتيات</span>',
        'workshops-subtitle': 'تمكين الشابات من خلال تعليم وتطوير مهارات النجارة.',
        'workshops-intro-title': 'بناء المهارات، بناء <span class="accent">الثقة</span>',
        'workshops-intro-desc': 'نؤمن بتمكين الشابات من خلال التعليم العملي في النجارة. ورشنا توفر بيئة داعمة ومشجعة حيث يمكن للفتيات تعلم مهارات قيمة وبناء الثقة واكتشاف متعة الإبداع بأيديهن.',
        'workshops-beginner-title': 'ورشة <span class="accent">المبتدئات</span>',
        'workshops-beginner-duration': 'المدة: 4 أسابيع',
        'workshops-beginner-age': 'الفئة العمرية: 14-18 سنة',
        'workshops-beginner-skills': 'المهارات المغطاة:',
        'workshops-beginner-skill1': 'السلامة الأساسية للأدوات والتعامل معها',
        'workshops-beginner-skill2': 'اختيار وإعداد الخشب',
        'workshops-beginner-skill3': 'تقنيات الربط البسيطة',
        'workshops-beginner-skill4': 'التشطيب والصنفرة',
        'workshops-beginner-skill5': 'إنشاء مشروع صغير',
        'workshops-beginner-desc': 'مثالية للمبتدئات في النجارة. تعلم الأساسيات في بيئة داعمة.',
        'workshops-intermediate-title': 'ورشة <span class="accent">المتوسطات</span>',
        'workshops-intermediate-duration': 'المدة: 6 أسابيع',
        'workshops-intermediate-age': 'الفئة العمرية: 16-22 سنة',
        'workshops-intermediate-skills': 'المهارات المغطاة:',
        'workshops-intermediate-skill1': 'تقنيات الربط المتقدمة',
        'workshops-intermediate-skill2': 'تشغيل الأدوات الكهربائية',
        'workshops-intermediate-skill3': 'التصميم والتخطيط',
        'workshops-intermediate-skill4': 'بناء الأثاث',
        'workshops-intermediate-skill5': 'التشطيب الاحترافي',
        'workshops-intermediate-desc': 'تطوير مهاراتك بمشاريع أكثر تعقيداً وتقنيات متقدمة.',
        'workshops-advanced-title': 'مشاريع <span class="accent">خاصة</span>',
        'workshops-advanced-duration': 'المدة: 2-3 أسابيع',
        'workshops-advanced-age': 'الفئة العمرية: جميع الأعمار',
        'workshops-advanced-examples': 'أمثلة على المشاريع:',
        'workshops-advanced-example1': 'صناديق مجوهرات مخصصة',
        'workshops-advanced-example2': 'فن حائطي زخرفي',
        'workshops-advanced-example3': 'قطع أثاث صغيرة',
        'workshops-advanced-example4': 'إكسسوارات خشبية',
        'workshops-advanced-example5': 'قطع هدايا',
        'workshops-advanced-desc': 'ورش قصيرة الأجل التركيز على مشاريع وتقنيات محددة.',
        'workshops-benefits-title': 'لماذا ورش <span class="accent">النجارة؟</span>',
        'workshops-benefit1-title': 'تطوير المهارات',
        'workshops-benefit1-desc': 'تعلم مهارات عملية تبني الثقة والإبداع.',
        'workshops-benefit2-title': 'بيئة داعمة',
        'workshops-benefit2-desc': 'مساحة آمنة ومشجعة مصممة خصيصاً للشابات.',
        'workshops-benefit3-title': 'تعلم عملي',
        'workshops-benefit3-desc': 'أدوات حقيقية ومشاريع حقيقية ونتائج حقيقية يمكنك الفخر بها.',
        'workshops-benefit4-title': 'بناء الثقة',
        'workshops-benefit4-desc': 'إتقان مهارات جديدة واكتشاف ما أنت قادرة على إبداعه.',
        'workshops-info-title': 'تفاصيل <span class="accent">الورش</span>',
        'workshops-schedule-title': 'الجدول',
        'workshops-schedule-line1': 'الورش تعقد في عطلات نهاية الأسبوع وأثناء العطل المدرسية',
        'workshops-schedule-line2': 'السبت: 10:00 ص - 2:00 م',
        'workshops-schedule-line3': 'الأحد: 2:00 م - 6:00 م',
        'workshops-location-title': 'الموقع',
        'workshops-location-line1': 'ورشتنا مجهزة بالكامل وتخدم جميع مناطق الكويت',
        'workshops-location-line2': 'جميع الأدوات والمواد متوفرة',
        'workshops-location-line3': 'بيئة آمنة ونظيفة ومهنية',
        'workshops-pricing-title': 'الأسعار',
        'workshops-pricing-line1': 'أسعار معقولة لتعليم عالي الجودة',
        'workshops-pricing-line2': 'فرص منح دراسية متاحة',
        'workshops-pricing-line3': 'خصومات جماعية للمدارس',
        'workshops-cta-title': 'مستعدة لبدء <span class="accent">رحلتك؟</span>',
        'workshops-cta-desc': 'انضمي إلى ورشتنا القادمة واكتشفي متعة النجارة!',
        'workshops-cta-btn': 'سجلي الآن',
        
        // Home Page Preview Cards
        'preview-work-title': 'أعمالنا <span class="accent">الفنية</span>',
        'preview-work-desc': 'تصفح مجموعة أعمال النجارة المخصصة وشاهد الجودة التي نقدمها.',
        'preview-services-title': 'ما نقدمه <span class="accent">لخدمتكم</span>',
        'preview-services-desc': 'من الأبواب المخصصة إلى تركيب المطابخ الكاملة، نتعامل مع كل التفاصيل بدقة.',
        'preview-process-title': 'كيف نعمل <span class="accent">معكم</span>',
        'preview-process-desc': 'عملية مثبتة من 4 خطوات تضمن نتائج عالية الجودة وعملاء راضين في كل مرة.',
        'preview-decorative-title': 'مجموعة <span class="accent">الزخرفية</span>',
        'preview-decorative-desc': 'أطباق وصواني وزخارف جميلة مصنوعة يدوياً لمنزلك.',
        'preview-furniture-title': 'أثاث <span class="accent">عصري</span>',
        'preview-furniture-desc': 'طاولات وأثاث عصري بحواف طبيعية للمنازل العصرية.',
        'preview-utensils-title': 'أدوات <span class="accent">يدوية</span>',
        'preview-utensils-desc': 'ملاعق وأطباق خشبية منحوتة يدوياً وإكسسوارات مطبخ جميلة.',
        'preview-river-title': 'طاولات <span class="accent">النهر</span>',
        'preview-river-desc': 'طاولات حواف طبيعية مذهلة مع أنهار راتنجية ملونة تتدفق عبر الخشب الطبيعي.',
        
        // Common
        'btn-get-started': 'ابدأ الآن',
        'btn-learn-more': 'اعرف المزيد',
        'btn-view-gallery': 'عرض المعرض',
        'btn-our-services': 'خدماتنا',
        'btn-our-process': 'عملية العمل',
        'btn-view-collection': 'عرض المجموعة',
        'btn-view-furniture': 'عرض الأثاث',
        'btn-view-tables': 'عرض الطاولات',
        'btn-get-in-touch': 'تواصل معنا',
        'btn-whatsapp': 'واتساب',
        'btn-submit': 'إرسال الرسالة',
        
        // Footer
        'footer-copyright': '© لود',
        
        // Lightbox
        'lightbox-close': '×'
      }
    };
    
    this.init();
  }
  
  init() {
    // Get saved language or default to English
    this.currentLang = localStorage.getItem('language') || 'en';
    
    // Set the language immediately on page load
    this.setLanguage(this.currentLang);
    
    // Create language switcher and bind events when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.createLanguageSwitcher();
        this.bindEvents();
      });
    } else {
      this.createLanguageSwitcher();
      this.bindEvents();
    }
  }
  
  createLanguageSwitcher() {
    const header = document.querySelector('.header-inner');
    if (header && !document.querySelector('.language-switcher')) {
      const switcher = document.createElement('div');
      switcher.className = 'language-switcher';
      switcher.innerHTML = `
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="ar">عربي</button>
      `;
      header.appendChild(switcher);
    }
  }
  
  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-btn')) {
        const lang = e.target.dataset.lang;
        this.setLanguage(lang);
      }
    });
  }
  
  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Set document attributes immediately
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Translate all elements with data-translate attribute
    this.translateElements();
  }
  
  translateElements() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.dataset.translate;
      const translation = this.translations[this.currentLang][key];
      if (translation) {
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = translation;
        } else {
          element.innerHTML = translation;
        }
      }
    });
    
    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.dataset.translatePlaceholder;
      const translation = this.translations[this.currentLang][key];
      if (translation) {
        element.placeholder = translation;
      }
    });
  }
}

// Initialize as early as possible
window.languageSwitcher = new LanguageSwitcher();

// Also initialize when DOM is loaded as backup
document.addEventListener('DOMContentLoaded', () => {
  if (!window.languageSwitcher) {
    window.languageSwitcher = new LanguageSwitcher();
  }
});
