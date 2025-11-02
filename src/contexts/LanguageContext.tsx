import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Premium Car Rental',
    'hero.subtitle': 'Experience luxury and comfort with C4R - Your trusted partner for quality vehicles',
    'hero.cta': 'Book Now',
    
    // Products
    'products.title': 'Our Fleet',
    'products.subtitle': 'Choose from our wide selection of premium vehicles',
    'products.viewDetails': 'View Details',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by thousands of satisfied customers',
    
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
  },
  ar: {
    // Navbar
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'تأجير سيارات فاخرة',
    'hero.subtitle': 'استمتع بالفخامة والراحة مع C4R - شريكك الموثوق للمركبات عالية الجودة',
    'hero.cta': 'احجز الآن',
    
    // Products
    'products.title': 'أسطولنا',
    'products.subtitle': 'اختر من مجموعتنا الواسعة من المركبات الفاخرة',
    'products.viewDetails': 'عرض التفاصيل',
    
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
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
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
