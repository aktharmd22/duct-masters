// ============================================================
// Duct Masters — i18n Translations (English / Emirati Arabic)
// Arabic translations follow UAE business and industrial lexicon
// ============================================================

export type Lang = 'en' | 'ar';

export interface Translations {
  // Navigation
  nav: {
    services: string;
    serviceAreas: string;
    industries: string;
    about: string;
    contact: string;
    blog: string;
    call: string;
    whatsapp: string;
    email: string;
    location: string;
    getQuote: string;
  };
  // Homepage
  home: {
    heroBadge: string;
    heroH1Line1: string;
    heroH1Line2: string;
    heroSubtitle: string;
    heroCta1: string;
    heroCta2: string;
    scroll: string;
    statsExperience: string;
    statsServices: string;
    statsFacility: string;
    statsLicensed: string;
    servicesBadge: string;
    servicesTitle: string;
    servicesSubtitle: string;
    learnMore: string;
    aboutBadge: string;
    aboutTitle: string;
    aboutP1: string;
    aboutP2: string;
    aboutCta: string;
    processBadge: string;
    processTitle: string;
    processSubtitle: string;
    processStep1Title: string;
    processStep1Desc: string;
    processStep2Title: string;
    processStep2Desc: string;
    processStep3Title: string;
    processStep3Desc: string;
    processStep4Title: string;
    processStep4Desc: string;
    galleryBadge: string;
    galleryTitle: string;
    gallerySubtitle: string;
    areasBadge: string;
    areasTitle: string;
    areasSubtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPhone: string;
    ctaEmail: string;
    ctaVisit: string;
  };
  // Footer
  footer: {
    description: string;
    callToday: string;
    fabricationServices: string;
    industrialZones: string;
    company: string;
    companyAbout: string;
    companyServices: string;
    companyAreas: string;
    companyIndustries: string;
    companyBlog: string;
    companyContact: string;
    contactTitle: string;
    visitFacility: string;
    getDirections: string;
    chatWhatsapp: string;
    license: string;
    tagline: string;
  };
  // Common
  common: {
    requestQuote: string;
    learnMore: string;
    contactUs: string;
    callUs: string;
  };
}

const ar: Translations = {
  nav: {
    services: 'الخدمات',
    serviceAreas: 'مناطق الخدمة',
    industries: 'القطاعات',
    about: 'عن الشركة',
    contact: 'اتصل بنا',
    blog: 'المدونة',
    call: 'اتصل',
    whatsapp: 'واتساب',
    email: 'البريد الإلكتروني',
    location: 'الموقع',
    getQuote: 'طلب عرض سعر',
  },
  home: {
    heroBadge: 'مصفح، أبوظبي — منذ 2005',
    heroH1Line1: 'تصنيع مجاري الهواء',
    heroH1Line2: 'وتشكيل الصفائح المعدنية',
    heroSubtitle: 'تصنيع مجاري الهواء وتشكيل الصفائح المعدنية في أبوظبي. حلول مخصصة لمجاري التكييف وتشكيل المعادن الدقيق للمشاريع التجارية والصناعية والبنية التحتية — بخبرة تتجاوز 20 عاماً في الإمارات.',
    heroCta1: 'اتصل بنا',
    heroCta2: 'طلب عرض سعر',
    scroll: 'تصفح',
    statsExperience: 'سنوات الخبرة',
    statsServices: 'خدمات التشكيل',
    statsFacility: 'منشأة مصفح',
    statsLicensed: 'مرخص في الإمارات',
    servicesBadge: 'قدراتنا',
    servicesTitle: 'خدمات التشكيل المتكاملة',
    servicesSubtitle: 'من تصنيع مجاري التكييف إلى القطع بالليزر عالي الدقة والتشكيل الصناعي المخصص — كل ما تحتاجه من منشأة واحدة في مصفح.',
    learnMore: 'اعرف المزيد',
    aboutBadge: 'عن دكت ماسترز',
    aboutTitle: 'الشركة الرائدة في تصنيع مجاري التكييف في أبوظبي',
    aboutP1: 'دكت ماسترز هي شركة متخصصة في تصنيع مجاري الهواء وتشكيل الصفائح المعدنية مقرها أبوظبي، وتعمل من منطقة M-40 في مصفح. منذ عام 2005، نقوم بتوريد منتجات مجاري التكييف وحلول تشكيل المعادن المخصصة للمشاريع التجارية والصناعية والإنشائية والبنية التحتية في جميع أنحاء الإمارات.',
    aboutP2: 'مع التركيز على جودة التصنيع والإنتاج الدقيق والدعم الموثوق للمشاريع، نخدم المقاولين وشركات التكييف وشركات الإنشاءات ومشغلي المرافق والعملاء الصناعيين.',
    aboutCta: 'اعرف المزيد عنا',
    processBadge: 'منهجية العمل',
    processTitle: 'كيف ننجز مشروعك',
    processSubtitle: 'من الاستفسار إلى التسليم — كل مشروع يتبع عملية منظمة تضمن الجودة والدقة والتسليم في الوقت المحدد.',
    processStep1Title: 'تقديم الاستفسار',
    processStep1Desc: 'شارك رسومات مشروعك ومواصفاته وكمياته. نقوم بالمراجعة وتأكيد الجدوى خلال يوم عمل واحد.',
    processStep2Title: 'عرض السعر والموافقة',
    processStep2Desc: 'استلم عرض سعر مفصل يتضمن تفصيل الأسعار والجدول الزمني للإنتاج وجدول التسليم للمراجعة.',
    processStep3Title: 'التصنيع',
    processStep3Desc: 'يدخل طلبك مرحلة الإنتاج. القطع والتشكيل واللحام والتجميع والتشطيب باستخدام معدات CNC وفنيين مهرة.',
    processStep4Title: 'فحص الجودة والتسليم',
    processStep4Desc: 'فحص الجودة والتغليف الواقي والتسليم في الوقت المحدد لموقع مشروعك في أبوظبي أو أي مكان في الإمارات.',
    galleryBadge: 'الورشة',
    galleryTitle: 'داخل منشأتنا',
    gallerySubtitle: 'شاهد ورشة التصنيع لدينا في مصفح — مجهزة بقواطع ليزر CNC ومكابس ضغط ومحطات لحام وأدوات تشكيل احترافية.',
    areasBadge: 'مناطق الخدمة',
    areasTitle: 'المناطق الصناعية التي نخدمها',
    areasSubtitle: 'التصنيع والتسليم في جميع أنحاء أبوظبي والإمارات مع موقع منشأتنا المركزي في مصفح.',
    ctaTitle: 'هل أنت مستعد لبدء مشروعك؟',
    ctaSubtitle: 'أرسل لنا رسوماتك ومواصفاتك. نقدم عروض أسعار تنافسية لتصنيع مجاري التكييف وتشكيل الصفائح المعدنية والأعمال المعدنية المخصصة في جميع أنحاء أبوظبي والإمارات.',
    ctaPhone: 'اتصل',
    ctaEmail: 'بريد إلكتروني',
    ctaVisit: 'زرنا في مصفح',
  },
  footer: {
    description: 'تصنيع مجاري الهواء وتشكيل الصفائح المعدنية في أبوظبي. تأسست عام 2005، نخدم المقاولين والمشاريع في جميع أنحاء الإمارات من منشأتنا في مصفح، أبوظبي.',
    callToday: 'اتصل بنا اليوم',
    fabricationServices: 'خدمات التشكيل',
    industrialZones: 'المناطق الصناعية',
    company: 'الشركة',
    companyAbout: 'عن الشركة',
    companyServices: 'الخدمات',
    companyAreas: 'المناطق',
    companyIndustries: 'القطاعات',
    companyBlog: 'المدونة',
    companyContact: 'اتصل بنا',
    contactTitle: 'معلومات الاتصال',
    visitFacility: 'زر منشأتنا',
    getDirections: 'الاتجاهات',
    chatWhatsapp: 'محادثة واتساب',
    license: 'رخصة تجارية إماراتية',
    tagline: 'تصنيع مجاري الهواء في أبوظبي',
  },
  common: {
    requestQuote: 'طلب عرض سعر',
    learnMore: 'اعرف المزيد',
    contactUs: 'اتصل بنا',
    callUs: 'اتصل بنا',
  },
};

export const t = ar;
