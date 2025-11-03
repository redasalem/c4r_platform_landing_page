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
    
    // Hero
    'hero.title': 'Welcome to C4R Platform',
    'hero.subtitle': ' The  platform  is  your  ideal  intermediary  for  car  rentals,  offering  flexible and diverse services  to  meet  various  needs, We  are  committed  to  providing a professional rental experience  that  combines  ease, reliability, and  efficiency, to  meet all requirements at competitive prices',
    'hero.cta': 'Book Now',
    'hero.testimonials': 'Client Reviews',
    
    // Products
    'products.title': 'Our Fleet',
    'products.subtitle': 'Choose from our wide selection of premium vehicles',
    'products.viewDetails': 'View Details',
    
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
    
    // Footer
    'footer.tagline': 'Your trusted car rental partner',
    'footer.partners': 'Our Partners',
    'footer.rights': 'All rights reserved',
   'Flexible plans to suit your lifestyle and various needs': 'Flexible plans to suit your lifestyle and various needs',
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

'Book Now': 'Book Now',
'Services':'Services'
  },
  عربى: {
    // Navbar
    'about': 'من نحن',
    'services': 'الخدمات',
    'contact': 'اتصل بنا',
    'Testimonials': 'آراء العملاء',
    'hero.cta': 'احجز الان',
    
    // Hero
    'hero.title': 'مرحباً بكم في منصة C4R',
    'hero.subtitle': 'تعد المنصة وسيطك المثالي لتأجير السيارات بخدمات مرنة ومتنوعة تلبي مختلف الاحتياجات. ونحرص على تقديم تجربة تأجير احترافية تجمع بين السهولة، والموثوقية، والكفاءة، لتلبية جميع المتطلبات وبأسعار تنافسية',
    'hero.testimonials': 'آراء العملاء',
    
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
'Flexible plans to suit your lifestyle and various needs': 'خطط مرنة تناسب أسلوب حياتك واحتياجاتك المختلفة',
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

'Book Now': 'احجز الآن',
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
