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
    'HOURLY CAR RENTALS WITH A DRIVER':'HOURLY CAR RENTALS WITH A DRIVER',
    'RECEPTION AND DELIVERY':'RECEPTION AND DELIVERY',

    
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
    'DAILY OR MONTHLY CAR RENTALS':'DAILY OR MONTHLY CAR RENTALS',
'Daily or monthly car rental options tailored to your preferences': 'Daily or monthly car rental options tailored to your preferences',
'Flexible rental plans': 'Flexible rental plans',
'Hourly car rental with driver': 'Hourly car rental with driver',
'Your comfort is our priority… no branch visits needed': 'Your comfort is our priority… no branch visits needed',

'Reliable cars for time-sensitive rides and business trips': 'Reliable cars for time-sensitive rides and business trips',
'Quick and punctual service': 'Quick and punctual service',
'Perfect for meetings and events': 'Perfect for meetings and events',
'Comfortable and well-maintained vehicles': 'Comfortable and well-maintained vehicles',

'Your comfort is our priority': 'Your comfort is our priority',
'Book, unlock and drive — no branch visits required': 'Book, unlock and drive — no branch visits required',
'Full-service from your location': 'Full-service from your location',
'Seamless pickup & drop-off': 'Seamless pickup & drop-off',
'Save time with quick procedures': 'Save time with quick procedures',
'Rental options suitable for every occasion':'Rental options suitable for every occasion',
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
  'CAR DELIVERY AND PICKUP':'CAR DELIVERY AND PICKUP',
  'Hourly rental with the option to provide a driver':'Hourly rental with the option to provide a driver',
  'Ideal for quick commutes, meetings and private trips':'Ideal for quick commutes, meetings and private trips',
  'CAR AVAILABILITY IN BULK':'CAR AVAILABILITY IN BULK',
  'Fast and punctual service':'Fast and punctual service',
  'Scroll or drag to explore':'Scroll or drag to explore',
   "Diverse and luxurious fleet": "Diverse and luxurious fleet",
    "Comfort and elegance for every passenger":'Comfort and elegance for every passenger',
    "Ready to serve you anytime":"Ready to serve you anytime",
    'Vehicles equipped with the latest features':'Vehicles equipped with the latest features',
  'Ideal for meetings and events':'Ideal for meetings and events',
    'sitePolicies': "Site Policies",
    'privacyPolicyHeader': "Privacy Policy & Terms",
    'privacyPolicyDescription': "We respect your privacy and are committed to protecting your personal data",
    'lastUpdated': "Last Updated: {{date}}",

    'privacyPolicy': "Privacy Policy",
    'informationWeCollect': "Information We Collect",
    'informationCollectionDescription': "When you use our website, we may collect the following information",
    'fullName': "Full name",
    'emailAddress': "Email address",
    'jobTitle': "Job title (when submitting a review)",
    'messageOrReview': "Message or review content",
    'howWeUseInfo': "How We Use Your Information",
    'howWeUseInfoDescription': "We use the collected information for the following purposes",
    'usePurpose1': "Responding to your inquiries and messages",
    'usePurpose2': "Displaying reviews on the website (with approval)",
    'usePurpose3': "Improving our services",
    'usePurpose4': "Communicating with you about our services",
    'dataProtection': "Data Protection",
    'dataProtectionDescription': "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, modification, or destruction. We do not share your information with third parties without your explicit consent or legal requirement",
    'yourRights': "Your Rights",
    'yourRightsDescription': "You have the right to:",
    'rightAccess': "Access your personal data",
    'rightCorrect': "Correct any inaccurate information",
    'rightDelete': "Request deletion of your data",
    'rightObject': "Object to processing of your data",

    'termsConditions': "Terms & Conditions",
    'acceptanceOfTerms': "1. Acceptance of Terms",
    'acceptanceOfTermsDescription': "By using our website, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please do not use the website.",
    'useOfWebsite': "2. Use of Website",
    'useOfWebsiteDescription': "You agree to:",
    'websiteRule1': "Use the website for lawful purposes only",
    'websiteRule2': "Not submit offensive or inappropriate content",
    'websiteRule3': "Not attempt to hack or damage the website",
    'websiteRule4': "Respect intellectual property rights",
    'reviewsComments': "3. Reviews & Comments",
    'reviewsCommentsDescription': "By submitting a review or comment, you grant us the right to display it on the website. We reserve the right to remove or edit any content we deem inappropriate. Published comments express the views of their authors and do not necessarily reflect the company's opinions.",
    'limitationOfLiability': "4. Limitation of Liability",
    'limitationOfLiabilityDescription': "We strive to ensure the accuracy of information on our website, but we are not liable for any errors or omissions. Your use of the website is at your own risk.",
    'changesToTerms': "5. Changes to Terms",
    'changesToTermsDescription': "We reserve the right to modify these terms at any time. Any changes will be posted on this page. Your continued use of the website after changes constitutes acceptance of the modified terms.",

    'haveQuestions': "Have Questions?",
    'lastUpdated November 2025':'lastUpdated November 2025',
    'contactUsDescription': "If you have any questions about our Privacy Policy or Terms & Conditions, please contact us",
    'contactUs': "Contact Us",
  'The freedom to choose the duration that suits your needs':'The freedom to choose the duration that suits your needs',
  'Receive and start your journey with ease':'Receive and start your journey with ease',
  'We bring the service to you wherever you are':'…We bring the service to you wherever you are',
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
    'lastUpdated November 2025':'آخر تحديث نوفمبر 2025',
    'Brands':'العلامات التجارية',
    'Vehicles equipped with the latest features':'مركبات مجهزة بأحدث المواصفات',
    'Scroll or drag to explore':'مرّر أو اسحب للاستكشاف',
    'Support':'دعم',
    'Satisfaction':'الرضا عنا',
    'Your name':'اكتب اسمك هنا',
    'your@email.com':'اكتب بريدك الالكتروني هنا',
    "Your message here...":"اكتب رسالتك هنا",
    'CAR AVAILABILITY IN BULK':'توافر السيارات بكميات كبيرة',
    'Location':'الموقع',
    'Role':' وظيفتك او دورك',
    'Enjoy superior performance and absolute luxury with every journey you drive':'استمتع بالأداء المتفوق والفخامة المطلقة مع كل رحلة تقودها',
    'Rating':'تقيمك',
    'Your Review':'شاركنا رايك',
    'We would love to hear about your experience':'نود ان نسمع تجربتك عنا',
    'Share Your Experience':'شارك تجربتك',
    'Thank you for your review!':'شكرا لمشاركة رايك',
    'Hourly rental with the option to provide a driver':'تأجير بالساعة مع إمكانية توفير سائق',
    'Submit Review':'ارسال تعليقك',
    'Terms & Conditions':'الشروط والاحكام',
    "Diverse and luxurious fleet": 'سطول متنوع يغطي جميع الفئات والمقاسات',
  "Comfort and elegance for every passenger": "راحة وأناقة لكل راكب",
  "Ready to serve you anytime":'جاهزية فورية للحجز في أي وقت',
    'We bring the service to you wherever you are':'نوصل الخدمة إلى موقعك أينما كنت',
    "Privacy Policy":'سياسة الخصوصية',
    'CAR DELIVERY AND PICKUP':' توصيل السيارة واستلامها من باب منزلك',
    'DAILY OR MONTHLY CAR RENTALS':'تأجير السيارات يوميًا أو شهريًا',
    'Flexible plans to suit your lifestyle and various needs':'خطط مرنة لتناسب نمط حياتك واحتياجاتك المختلفة',
    'Experience the luxury car experience':'تجربة السيارات الفاخرة',
    'Comfortable and well-maintained vehicles':'مركبات مريحة ومجهزة بعناية لتجربة فاخرة',
    'Rental options suitable for every occasion':'خيارات تأجير مناسبة لكل الأوقات',
    'Customized solutions for companies and entities that need a highly efficient fleet of vehicles':'حلول مخصصة للشركات والكيانات التي تحتاج إلى أسطول عالي الكفاءة من المركبات',
    
    // Hero
    'hero.title': 'مرحباً بكم في منصة C4R',
    'hero.subtitle': 'تعد المنصة وسيطك المثالي لتأجير السيارات بخدمات مرنة ومتنوعة تلبي مختلف الاحتياجات. ونحرص على تقديم تجربة تأجير احترافية تجمع بين السهولة، والموثوقية، والكفاءة، لتلبية جميع المتطلبات وبأسعار تنافسية',
    'hero.testimonials': 'آراء العملاء',
    "RECEPTION AND DELIVERY":' الاستقبال والتوصيل من وإلى المطار',
    'HOURLY CAR RENTALS WITH A DRIVER':'تأجير السيارات بالساعة مع سائق',
    'A comfortable start to your trip, with punctual service':'بداية مريحة لرحلتك، وخدمة دقيقة في المواعيد',
    
    // Products
    'products.title': 'أسطولنا',
     'sitePolicies': "سياسات الموقع",
    'privacyPolicyHeader': "سياسة الخصوصية والأحكام",
    'privacyPolicyDescription': "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية",
    'lastUpdated': "آخر تحديث: {{date}}",

    'privacyPolicy': "سياسة الخصوصية",
    'informationWeCollect': "المعلومات التي نجمعها",
    'informationCollectionDescription': "عند استخدامك لموقعنا، قد نجمع المعلومات التالية",
    'fullName': "الاسم الكامل",
    'emailAddress': "البريد الإلكتروني",
    'jobTitle': "المسمى الوظيفي (عند إرسال مراجعة)",
    'messageOrReview': "محتوى الرسالة أو المراجعة",
    'howWeUseInfo': "كيفية استخدام معلوماتك",
    'howWeUseInfoDescription': "نستخدم المعلومات التي تم جمعها للأغراض التالية",
    'usePurpose1': "الرد على استفساراتك ورسائلك",
    'usePurpose2': "عرض المراجعات على الموقع (بعد الموافقة)",
    'usePurpose3': "تحسين خدماتنا",
    'usePurpose4': "التواصل معك بخصوص خدماتنا",
    'dataProtection': "حماية البيانات",
    'dataProtectionDescription': "نقوم بتطبيق تدابير أمان مناسبة لحماية معلوماتك الشخصية من الوصول أو الكشف أو التعديل أو الإتلاف غير المصرح به. لا نشارك معلوماتك مع أطراف ثالثة بدون موافقتك الصريحة أو متطلبات قانونية.",
    'yourRights': "حقوقك",
    'yourRightsDescription': "لديك الحق في:",
    'rightAccess': "الوصول إلى بياناتك الشخصية",
    'rightCorrect': "تصحيح أي معلومات غير دقيقة",
    'rightDelete': "طلب حذف بياناتك",
    'rightObject': "الاعتراض على معالجة بياناتك",

    'termsConditions': "الأحكام والشروط",
    'acceptanceOfTerms': "1. قبول الشروط",
    'acceptanceOfTermsDescription': "باستخدامك لموقعنا، فإنك توافق على الالتزام بهذه الأحكام والشروط. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.",
    'useOfWebsite': "2. استخدام الموقع",
    'useOfWebsiteDescription': "تتعهد بما يلي:",
    'websiteRule1': "استخدام الموقع للأغراض القانونية فقط",
    'websiteRule2': "عدم إرسال محتوى مسيء أو غير لائق",
    'websiteRule3': "عدم محاولة اختراق أو الإضرار بالموقع",
    'websiteRule4': "احترام حقوق الملكية الفكرية",
    'reviewsComments': "3. التعليقات والمراجعات",
    'reviewsCommentsDescription': "عند إرسال تعليق أو مراجعة، فإنك تمنحنا الحق في عرضها على الموقع. نحتفظ بالحق في حذف أو تعديل أي محتوى نراه غير مناسب. التعليقات المنشورة تعبر عن آراء أصحابها ولا تعكس بالضرورة آراء الشركة.",
    'limitationOfLiability': "4. تحديد المسؤولية",
    'limitationOfLiabilityDescription': "نبذل قصارى جهدنا لضمان دقة المعلومات على موقعنا، ولكننا لا نتحمل المسؤولية عن أي أخطاء أو سهو. استخدامك للموقع على مسؤوليتك الخاصة.",
    'changesToTerms': "5. التغييرات على الشروط",
    'changesToTermsDescription': "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة. استمرارك في استخدام الموقع بعد التغييرات يعني قبولك للشروط المعدلة.",

    'haveQuestions': "لديك أسئلة؟",
    'contactUsDescription': "إذا كان لديك أي استفسارات حول سياسة الخصوصية أو الأحكام والشروط، يرجى الاتصال بنا",
    'contactUs': "اتصل بنا",
    'products.subtitle': 'اختر من مجموعتنا الواسعة من المركبات الفاخرة',
    'The freedom to choose the duration that suits your needs':'حرية اختيار المدة التي تناسب احتياجك',
    'products.viewDetails': 'عرض التفاصيل',
    'Chat with us!': 'تواصل معنا واتساب ',
    'Receive and start your journey with ease':'استلم وابدأ رحلتك بسهولة',
    
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
'Ideal for meetings and events':'مثالية للاجتماعات والفعاليات',
'Fast and punctual service':'خدمة سريعة ودقيقة',
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
