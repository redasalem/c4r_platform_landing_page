import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'عربى';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {

    'about': 'About',
    'services': 'Services',
    'contact': 'Contact',
    'Testimonials':'Testimonials',
    'Our Collection':'Our Collection',
    
    // Hero
    'hero.title': 'Welcome to C4R Platform',
    'hero.subtitle': ' The  platform  is  your  ideal  intermediary  for  car  rentals,  offering  flexible and diverse services  to  meet  various  needs, We  are  committed  to  providing a professional rental experience  that  combines  ease, reliability, and  efficiency, to  meet all requirements at competitive prices',
    'hero.cta': 'Book Now',
    'hero.testimonials': 'Client Reviews',
    'Customized solutions for companies and entities that need a highly efficient fleet of vehicles':'Customized solutions for companies and entities that need a highly efficient fleet of vehicles',
    
    // Products
    'products.title': 'Our Fleet',
    'products.subtitle': 'Choose from our wide selection of premium vehicles',
    'products.viewDetails': 'View Details',
    'Reception and delivery':'Reception and delivery',
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by thousands of satisfied customers',
    'Chat with us!': 'Chat with us!',
    
    // Payment
    'payment.title': 'Quick Contact',
    'payment.name': 'Full Name',
    'payment.email': 'Email Address',
    'payment.phone': 'Phone Number',
    'payment.message': 'Message',
    'payment.submit': 'Send Message',
    'payment.success': 'Message sent successfully!',
    'A comfortable start to your trip, with punctual service':'A comfortable start to your trip, with punctual service',
    
    // Footer
    'footer.tagline': 'Your trusted car rental partner',
    'footer.partners': 'Our Partners',
    'footer.rights': 'All rights reserved',
    'Daily or monthly car rentals':'Daily or monthly car rentals',
'Daily or monthly car rental options tailored to your preferences': 'Daily or monthly car rental options tailored to your preferences',
'Flexible rental plans': 'Flexible rental plans',
'Hourly car rental with driver': 'Hourly car rental with driver',
'Your comfort is our priority… no branch visits needed': 'Your comfort is our priority… no branch visits needed',

'Ideal for quick commutes, meetings and private trips': 'Ideal for quick commutes, meetings and private trips',
'Reliable cars for time-sensitive rides and business trips': 'Reliable cars for time-sensitive rides and business trips',
'Quick and punctual service': 'Quick and punctual service',
'Perfect for meetings and events': 'Perfect for meetings and events',
'Comfortable and well-maintained vehicles': 'Comfortable and well-maintained vehicles',

'Your comfort is our priority': 'Your comfort is our priority',
'Book, unlock and drive — no branch visits required': 'Book, unlock and drive — no branch visits required',
'Full-service from your location': 'Full-service from your location',
'Seamless pickup & drop-off': 'Seamless pickup & drop-off',
'Save time with quick procedures': 'Save time with quick procedures',

'Premium fleet selection': 'Premium fleet selection',
'Top-tier brands kept in pristine condition': 'Top-tier brands kept in pristine condition',
'Luxury vehicles for all occasions': 'Luxury vehicles for all occasions',
'Comfortable seating for passengers': 'Comfortable seating for passengers',
'Available whenever you need': 'Available whenever you need',

'Concierge & Delivery': 'Concierge & Delivery',
'We deliver the car to your doorstep — white-glove service': 'We deliver the car to your doorstep — white-glove service',
'Car delivered to your location': 'Car delivered to your location',
'No need to visit a branch': 'No need to visit a branch',
'Flexible schedules for your convenience': 'Flexible schedules for your convenience',

'Sanitized & Inspected': 'Sanitized & Inspected',
'Daily inspections and premium sanitization for peace of mind': 'Daily inspections and premium sanitization for peace of mind',
'Regular safety checks': 'Regular safety checks',
'Thorough cleaning after each ride': 'Thorough cleaning after each ride',
'Safe and reliable for passengers': 'Safe and reliable for passengers',
'Empower your car rental business and take self-drive travel experience to the next level with the Caren Car Rental Platform. Check out our offering for independent car rentals, RV and campervan rentals and online resellers and OTAs.':'Empower your car rental business and take self-drive travel experience to the next level with the Caren Car Rental Platform. Check out our offering for independent car rentals, RV and campervan rentals and online resellers and OTAs.',

'Book Now': 'Book Now',
'Services':'Services',
'Email us!':'Email us!',
'Our Partners':'Our Partners',
'Discover Your Dream Ride':'Discover Your Dream Ride',
"Explore our curated selection of premium vehicles, each crafted to deliver an unparalleled driving experience":'Explore our curated selection of premium vehicles, each crafted to deliver an unparalleled driving experience',
'View Details':'View Details',
'Premium Cars':'Premium Cars',
'Brands':'Brands',
'Support':'Support',
'Satisfaction':'Satisfaction',
  "Contact us for inquiries or reservations": "Contact us for inquiries or reservations",
  "Name": "Name",
  "Email": "Email",
  "Subject": "Subject",
  "Project inquiry": "Project inquiry",
  "Message": "Message",
  "Sending...": "Sending...",
  "Send Message": "Send Message",
  "Message sent successfully! I will get back to you soon.": "Message sent successfully! I will get back to you soon.",
  "Error sending message. Please try again.": "Error sending message. Please try again.",
  'Your name':'Your name',
  'your@email.com':'your@email.com',
  "Your message here...":"Your message here...",
  'Location':'Location',
  'Riyadh City, Saudi Arabia':'Riyadh City, Saudi Arabia',
  'Role':'Role',
  'Rating':'Rating',
  'Your Review':'Your Review',
  'We would love to hear about your experience':'We would love to hear about your experience',
  'Share Your Experience':'Share Your Experience',
  'Thank you for your review!':'Thank you for your review!',
  'Submit Review':'Submit Review',
  'Terms & Conditions':'Terms & Conditions',
  'Privacy Policy':'Privacy Policy',
  'Car availability in bulk':'Car availability in bulk',
  'Experience the luxury car experience':'Experience the luxury car experience',
  'Enjoy superior performance and absolute luxury with every journey you drive':'Enjoy superior performance and absolute luxury with every journey you drive',
  },
  عربى: {
    // Navbar
    'about': 'من نحن',
    'services': 'الخدمات',
    'contact': 'اتصل بنا',
    'Testimonials': 'آراء العملاء',
    'hero.cta': 'احجز الان',
    'Our Collection':'مجموعتنا',
    'View Details':'معرفة التفاصيل',
    'Premium Cars':'سيارات فاخرة',
    'Brands':'العلامات التجارية',
    'Support':'دعم',
    'Satisfaction':'الرضا عنا',
    'Your name':'اكتب اسمك هنا',
    'your@email.com':'اكتب بريدك الالكتروني هنا',
    "Your message here...":"اكتب رسالتك هنا",
    'Car availability in bulk':'توافر السيارات بكميات كبيرة',
    'Location':'الموقع',
    'Role':' وظيفتك او دورك',
    'Enjoy superior performance and absolute luxury with every journey you drive':'استمتع بالأداء المتفوق والفخامة المطلقة مع كل رحلة تقودها',
    'Rating':'تقيمك',
    'Your Review':'شاركنا رايك',
    'We would love to hear about your experience':'نود ان نسمع تجربتك عنا',
    'Share Your Experience':'شارك تجربتك',
    'Thank you for your review!':'شكرا لمشاركة رايك',
    'Submit Review':'ارسال تعليقك',
    'Terms & Conditions':'الشروط والاحكام',
    "Privacy Policy":'سياسة الخصوصية',
    'Daily or monthly car rentals':'تأجير السيارات يوميًا أو شهريًا',
    'Flexible plans to suit your lifestyle and various needs':'خطط مرنة لتناسب نمط حياتك واحتياجاتك المختلفة',
    'Experience the luxury car experience':'تجربة السيارات الفاخرة',
    'Customized solutions for companies and entities that need a highly efficient fleet of vehicles':'حلول مخصصة للشركات والكيانات التي تحتاج إلى أسطول عالي الكفاءة من المركبات',
    
    // Hero
    'hero.title': 'مرحباً بكم في منصة C4R',
    'hero.subtitle': 'تعد المنصة وسيطك المثالي لتأجير السيارات بخدمات مرنة ومتنوعة تلبي مختلف الاحتياجات. ونحرص على تقديم تجربة تأجير احترافية تجمع بين السهولة، والموثوقية، والكفاءة، لتلبية جميع المتطلبات وبأسعار تنافسية',
    'hero.testimonials': 'آراء العملاء',
    "Reception and delivery":'الاستقبال والتسليم',
    'A comfortable start to your trip, with punctual service':'بداية مريحة لرحلتك مع خدمة دقيقة',
    
    // Products
    'products.title': 'أسطولنا',
    'products.subtitle': 'اختر من مجموعتنا الواسعة من المركبات الفاخرة',
    'products.viewDetails': 'عرض التفاصيل',
    'Chat with us!': 'تواصل معنا واتساب ',
    
    // Testimonials
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'موثوق به من قبل آلاف العملاء الراضين',
    
    // Payment
    'payment.title': 'تواصل سريع',
    'payment.name': 'الاسم الكامل',
    'payment.email': 'البريد الإلكتروني',
    'payment.phone': 'رقم الهاتف',
    'payment.message': 'الرسالة',
    'payment.submit': 'إرسال الرسالة',
    'payment.success': 'تم إرسال الرسالة بنجاح!',
    
    // Footer
    'footer.tagline': 'شريكك الموثوق لتأجير السيارات',
    'footer.partners': 'شركاؤنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    'Services':'الخدمات',
    'Email us!':'راسلنا على الايميل',
    'services.flexPlans.title': 'خطط مرنة تناسب أسلوب حياتك واحتياجاتك المختلفة',
'services.flexPlans.subtitle': 'خيارات تأجير السيارات اليومية أو الشهرية حسب تفضيلاتك',
'services.flexPlans.feature1': 'خطط تأجير مرنة',
'services.flexPlans.feature2': 'تأجير السيارات بالساعة مع سائق',
'services.flexPlans.feature3': 'راحتك أولويتنا… لا حاجة لزيارة الفرع',

'services.quickCommutes.title': 'خدمة مثالية للتنقل السريع والاجتماعات والمشاوير الخاصة',
'services.quickCommutes.subtitle': 'سيارات موثوقة للرحلات العاجلة والمشاوير العملية',
'services.quickCommutes.feature1': 'خدمة سريعة ودقيقة',
'services.quickCommutes.feature2': 'مثالية للاجتماعات والفعاليات',
'services.quickCommutes.feature3': 'مركبات مريحة ومُعتنى بها جيداً',

'services.noBranch.title': 'راحتك أولويتنا',
'services.noBranch.subtitle': 'احجز وافتح السيارة وقُدها — لا حاجة لزيارة الفرع',
'services.noBranch.feature1': 'خدمة كاملة من موقعك',
'services.noBranch.feature2': 'استلام وتسليم سلس',
'services.noBranch.feature3': 'وفر وقتك بإجراءات سريعة',

'services.premiumFleet.title': 'اختيار أسطول فاخر',
'services.premiumFleet.subtitle': 'ماركات متميزة في حالة ممتازة',
'services.premiumFleet.feature1': 'مركبات فاخرة لكل المناسبات',
'services.premiumFleet.feature2': 'مقاعد مريحة للركاب',
'services.premiumFleet.feature3': 'متوفرة كلما احتجت',

'services.concierge.title': 'خدمة الكونسيرج والتوصيل',
'services.concierge.subtitle': 'نوصل السيارة لباب منزلك — خدمة راقية',
'services.concierge.feature1': 'توصيل السيارة لموقعك',
'services.concierge.feature2': 'لا حاجة لزيارة الفرع',
'services.concierge.feature3': 'جداول مرنة لتسهيل راحتك',

'services.safety.title': 'معقمة ومفحوصة',
'services.safety.subtitle': 'فحوصات يومية وتعقيم ممتاز لراحة البال',
'services.safety.feature1': 'فحوصات سلامة منتظمة',
'services.safety.feature2': 'تنظيف شامل بعد كل رحلة',
'services.safety.feature3': 'آمنة وموثوقة للركاب',
'Daily or monthly car rental options tailored to your preferences': 'خيارات تأجير السيارات اليومية أو الشهرية حسب تفضيلاتك',
'Flexible rental plans': 'خطط تأجير مرنة',
'Hourly car rental with driver': 'تأجير السيارات بالساعة مع سائق',
'Your comfort is our priority… no branch visits needed': 'راحتك أولويتنا… لا حاجة لزيارة الفرع',

'Ideal for quick commutes, meetings and private trips': 'خدمة مثالية للتنقل السريع والاجتماعات والمشاوير الخاصة',
'Reliable cars for time-sensitive rides and business trips': 'سيارات موثوقة للرحلات العاجلة والمشاوير العملية',
'Quick and punctual service': 'خدمة سريعة ودقيقة',
'Perfect for meetings and events': 'مثالية للاجتماعات والفعاليات',
'Comfortable and well-maintained vehicles': 'مركبات مريحة ومُعتنى بها جيداً',

'Your comfort is our priority': 'راحتك أولويتنا',
'Book, unlock and drive — no branch visits required': 'احجز وافتح السيارة وقُدها — لا حاجة لزيارة الفرع',
'Full-service from your location': 'خدمة كاملة من موقعك',
'Seamless pickup & drop-off': 'استلام وتسليم سلس',
'Save time with quick procedures': 'وفر وقتك بإجراءات سريعة',

'Premium fleet selection': 'اختيار أسطول فاخر',
'Top-tier brands kept in pristine condition': 'ماركات متميزة في حالة ممتازة',
'Luxury vehicles for all occasions': 'مركبات فاخرة لكل المناسبات',
'Comfortable seating for passengers': 'مقاعد مريحة للركاب',
'Available whenever you need': 'متوفرة كلما احتجت',

'Concierge & Delivery': 'خدمة الكونسيرج والتوصيل',
'We deliver the car to your doorstep — white-glove service': 'نوصل السيارة لباب منزلك — خدمة راقية',
'Car delivered to your location': 'توصيل السيارة لموقعك',
'No need to visit a branch': 'لا حاجة لزيارة الفرع',
'Flexible schedules for your convenience': 'جداول مرنة لتسهيل راحتك',

'Sanitized & Inspected': 'معقمة ومفحوصة',
'Daily inspections and premium sanitization for peace of mind': 'فحوصات يومية وتعقيم ممتاز لراحة البال',
'Regular safety checks': 'فحوصات سلامة منتظمة',
'Thorough cleaning after each ride': 'تنظيف شامل بعد كل رحلة',
'Safe and reliable for passengers': 'آمنة وموثوقة للركاب',
'Empower your car rental business and take self-drive travel experience to the next level with the Caren Car Rental Platform. Check out our offering for independent car rentals, RV and campervan rentals and online resellers and OTAs.':'عزز تجربة تأجير السيارات لديك، وارتقِ بتجربة السفر بنفسك مع منصة كارين لتأجير السيارات. اطلع على عروضنا لتأجير السيارات المستقلة، وتأجير المركبات الترفيهية والعربات المتنقلة، ووكلاء البيع عبر الإنترنت، ووكالات السفر عبر الإنترنت.',
'book Now': 'احجز الآن',
'Our Partners':'شركاؤنا',
'Discover Your Dream Ride':'اكتشف رحلة أحلامك',
"Explore our curated selection of premium vehicles, each crafted to deliver an unparalleled driving experience":'استكشف مجموعتنا المختارة بعناية من المركبات الفاخرة، كل منها مصممة لتقديم تجربة قيادة لا مثيل لها',
  "Contact us for inquiries or reservations": "تواصل معنا للاستفسار اوالحجز",
  "Name": "الاسم",
  "Email": "البريد الإلكتروني",
  "Subject": "الموضوع",
  "Project inquiry": "استفسار عن مشروع",
  "Message": "الرسالة",
  "Sending...": "جاري الإرسال...",
  "Send Message": "أرسل الرسالة",
  "Message sent successfully! I will get back to you soon.": "تم إرسال الرسالة بنجاح! سأرد عليك قريبًا.",
  "Error sending message. Please try again.": "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.",
  'Riyadh City, Saudi Arabia':'الرياض - السعودية',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

 const toggleLanguage = () => {
  setLanguage(prev => {
    const newLang = prev === 'en' ? 'عربى' : 'en';
    document.documentElement.dir = newLang === 'عربى' ? 'rtl' : 'ltr';
    return newLang;
  });
};


  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
