import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";
import car4 from "../assets/car-4.jpg";
import car7 from "../assets/car-7.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import Toyota from "../assets/Toyota.jpg";
import Ford from "../assets/Ford.jpg";
import BMW from "../assets/BMW.jpg";
import MercedesBenz from "../assets/Mercedes-Benz.jpg";
import Honda from "../assets/Honda.jpg";
import Nissan from "../assets/Nissan.jpg";
import Audi from "../assets/Audi.jpg";

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
    name: "Mercedes-Benz",
    category: "Luxury/Performance",
    image: MercedesBenz,
    description: "قمة الفخامة والأداء، مصممة للتفوق على الطريق والمسار.",
  },
  {
    id: 10,
    name: "Honda",
    category: "Sedan/Reliability",
    image: Honda,
    description: "جودة واعتمادية فائقة، خيار مثالي للقيادة اليومية الطويلة.",
  },
  {
    id: 11,
    name: "Nissan",
    category: "Utility/Crossover",
    image: Nissan,
    description: "سيارة عائلية عملية بتقنيات مبتكرة وراحة في القيادة.",
  },
  {
    id: 12,
    name: "Audi",
    category: "Premium Sedan/Quattro",
    image: Audi,
    description: "هندسة ألمانية متطورة، تتميز بنظام الدفع الرباعي (Quattro) والتصميم الرياضي.",
  },
];

export default function Products() {
  const { t } = useLanguage();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container)
      container.scrollBy({ left: -container.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container)
      container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 text-violet-600 dark:text-yellow-600">
            {t("Experience the luxury car experience")}
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl md:max-w-2xl mx-auto px-4">
            {t("Enjoy superior performance and absolute luxury with every journey you drive")}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            aria-label="Previous"
            className="absolute top-1/2 left-0 sm:left-0 -translate-y-1/2 z-30 p-1 md:p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-lg hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-red-700 font-bold" />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next"
            className="absolute top-1/2 right-0 sm:right-0 -translate-y-1/2 z-30 p-1 md:p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-lg hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-red-700 font-bold" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[85%] xs:w-[75%] sm:w-[45%] md:w-[32%] lg:w-[30%] xl:w-[23%] snap-center"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                  <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end">
                    <span className="w-fit px-2 sm:px-3 py-1 bg-red-600/90 rounded-full md:text-[13px] text-xs font-bold text-white mb-2 inline-block">
                      {product.category}
                    </span>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-lg mb-1 sm:mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 line-clamp-2 mb-3">
                      {t(product.description)}
                    </p>
                    <a
                      href="#contact"
                      className="px-3 sm:px-4 py-2 text-center bg-white text-slate-900 rounded-full font-bold text-xs sm:text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {t("View Details")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Hint */}
          <div className="sm:hidden text-center mt-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              ← {t("Swipe to explore")} →
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}