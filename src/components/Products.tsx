import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";
import car4 from "../assets/car-4.jpg";
import car7 from "../assets/car-7.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import Toyota from '../assets/Toyota.jpg';
import Ford  from '../assets/Ford.jpg';
import BMW from '../assets/BMW.jpg';
import MercedesBenz from '../assets/Mercedes-Benz.jpg';
import Honda from '../assets/Honda.jpg';
import Nissan from '../assets/Nissan.jpg';
import Audi from '../assets/Audi.jpg';


const products = [
  {
    id: 1,
    name: "Luxury Sports Car",
    category: "Sports",
    image: car1,
    description: "تجربة الأدرينالين الخالص بأداء متطور وفائق.",
  },
  {
    id: 2,
    name: "Premium SUV",
    category: "SUV",
    image: car2,
    description: "الفخامة تلتقي بالتعددية والاستخدام العملي في تناغم مثالي.",
  },
  {
    id: 3,
    name: "Executive Sedan",
    category: "Sedan",
    image: car3,
    description: "رقي وراحة للسائق الباحث عن التميز والهدوء.",
  },
  {
    id: 4,
    name: "Electric Vehicle",
    category: "Electric",
    image: car4,
    description: "مستقبل القيادة الصديقة للبيئة يبدأ اليوم بتقنية متقدمة.",
  },
  {
    id: 5,
    name: "Classic Convertible",
    category: "Convertible",
    image: car7,
    description: "أناقة خالدة تلتقي بالهندسة الحديثة مع سقف قابل للطي.",
  },
  {
    id: 6,
    name: "Toyota",
    category: "Family/Hatchback",
    image: Toyota,
    description: "مرونة وكفاءة عالية، مثالية للمغامرات اليومية في المدينة.",
  },
  {
    id: 7,
    name: "Ford",
    category: "Truck/Off-Road",
    image: Ford,
    description: "قوة وتحمل لا مثيل لهما، لاجتياز جميع أنواع التضاريس بثقة.",
  },
  {
    id: 8,
    name: "BMW",
    category: "Luxury/Hybrid",
    image: BMW,
    description: "الأفضل من كلا العالمين: أداء رياضي وفخامة مع تقنية هجينة متطورة.",
  },
  {
    id: 9,
    name:'Mercedes-Benz',
    category: "Luxury/Performance",
    image: MercedesBenz,
    description: "قمة الفخامة والأداء، مصممة للتفوق على الطريق والمسار.",
  },
  {
    id: 10,
    name:'Honda',
    category: "Sedan/Reliability",
    image: Honda,
    description: "جودة واعتمادية فائقة، خيار مثالي للقيادة اليومية الطويلة.",
  },
  {
    id: 11,
    name:'Nissan',
    category: "Utility/Crossover",
    image: Nissan,
    description: "سيارة عائلية عملية بتقنيات مبتكرة وراحة في القيادة.",
  },
  {
    id: 12,
    name:'Audi',
    category: "Premium Sedan/Quattro",
    image: Audi,
    description: "هندسة ألمانية متطورة، تتميز بنظام الدفع الرباعي (Quattro) والتصميم الرياضي.",
  },
];

// **********************************************
// مكون فرعي لعرض صف واحد من الكاروسيل
// **********************************************

const CarouselRow = ({ products, animationDuration, isReversed = false, t }) => { 
  // تكرار المصفوفة مرتين فقط
  const repeatedProducts = [...products, ...products];

  // تحديد اسم الأنميشن
  const animationName = isReversed ? 'scroll-reverse' : 'scroll';
  
  return (
    <div 
      className="flex gap-4 mb-4" 
      dir="ltr"
      style={{
        animation: `${animationName} ${animationDuration}s linear infinite`,
      }}
      onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
      onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
    >
      {repeatedProducts.map((product, index) => (
        <div
          key={`${product.id}-${index}`} 
          // التعديل: زيادة العرض للشاشات الكبيرة (lg)
          className="flex-shrink-0 w-[175px] md:w-[200px] lg:w-[250px]" 
        >
          <div 
            // التعديل: زيادة الارتفاع للشاشات الكبيرة (lg)
            className="relative h-[250px] lg:h-[350px] rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500"
          > 
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-end"> {/* زيادة الـ padding للشاشات الكبيرة */}
              <div className="inline-block mb-2 self-start">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm rounded-full text-xs lg:text-sm font-bold text-white shadow-md"> {/* زيادة حجم نص الـ category */}
                  {product.category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 text-white drop-shadow-lg"> {/* زيادة حجم العنوان */}
                {product.name}
              </h3>
              <p className="text-xs lg:text-sm text-slate-200 mb-2 drop-shadow-sm line-clamp-2"> {/* زيادة حجم الوصف */}
                {t(product.description)} 
              </p>
              <a
                href="#contact"
                className="text-center inline-block px-4 py-2 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform" 
              >
                {t("View Details")}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// **********************************************
// المكون الرئيسي
// **********************************************

export default function Products() {
  const { t } = useLanguage();
  
  // تصفية المنتجات مع إضافة بعض الفئات لزيادة التنوع بين الكاروسيلين
  const allDisplayedProducts = products.filter(p => 
    p.category === "Sports" || 
    p.category === "SUV" || 
    p.category === "Electric" || 
    p.category === "Luxury/Performance" ||
    p.category === "Luxury/Hybrid" ||
    p.category === "Sedan" ||
    p.category === "Family/Hatchback" ||
    p.category === "Convertible" ||
    p.category === "Truck/Off-Road" ||
    p.category === "Utility/Crossover"
  );

  // تقسيم المنتجات المعروضة إلى مجموعتين متساوية تقريبًا
  const middleIndex = Math.ceil(allDisplayedProducts.length / 2);
  const displayedProducts1 = allDisplayedProducts.slice(0, middleIndex);
  const displayedProducts2 = allDisplayedProducts.slice(middleIndex);

  // منطق لضمان عدم ظهور أي من الكاروسيلين فارغاً
  if (displayedProducts1.length === 0 && allDisplayedProducts.length > 0) {
    displayedProducts1.push(allDisplayedProducts[0]);
  }
  if (displayedProducts2.length === 0 && allDisplayedProducts.length > 1) {
    displayedProducts2.push(allDisplayedProducts[1]);
  }
  if (displayedProducts1.length === 0 && displayedProducts2.length === 0 && products.length > 0) {
      displayedProducts1.push(products[0]);
      if (products.length > 1) displayedProducts2.push(products[1]);
  }


  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/50 px-6 py-3 rounded-full shadow-lg">
              {t("Our Collection")}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
            {t("Discover Your Dream Ride")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Explore our curated selection of premium vehicles, each crafted to deliver an unparalleled driving experience"
            )}
          </p>
        </div>


        {/* Infinite Scrolling Carousels */}
        <div className="relative overflow-hidden mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}> 
          
          {/* الكاروسيل الأول - منتجات النصف الأول */}
          <CarouselRow 
            products={displayedProducts1} 
            animationDuration={15} 
            isReversed={false}
            t={t}
          />
          
          {/* الكاروسيل الثاني - منتجات النصف الثاني (عكس الاتجاه) */}
          <CarouselRow 
            products={displayedProducts2} 
            animationDuration={15} 
            isReversed={true}
            t={t}
          />

        </div>
        

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200/50 dark:border-slate-700/50">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              500+
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
              {t("Premium Cars")}
            </div>
          </div>
          <div className="text-center p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200/50 dark:border-slate-700/50">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              50+
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
              {t("Brands")}
            </div>
          </div>
          <div className="text-center p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200/50 dark:border-slate-700/50">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              24/7
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
              {t("Support")}
            </div>
          </div>
          <div className="text-center p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200/50 dark:border-slate-700/50">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              100%
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
              {t("Satisfaction")}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* حركة التمرير العادية (من اليمين لليسار) */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* حركة التمرير المعكوسة (من اليسار لليمين) */
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%); 
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}