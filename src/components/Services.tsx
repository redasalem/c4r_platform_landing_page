import React, { useRef } from "react";
import { Car, Clock, Home, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import serv5 from '../assets/serv5.webp';
import serv4 from '../assets/serv4.webp';
import serv1 from '../assets/serv1.webp';
import serv2 from '../assets/serv2.webp';
import serv3 from '../assets/serv3.webp';
import serv6 from '../assets/Transport_cars/Transport Cars .jpg';

type Feature = { icon: React.ElementType; textKey: string; };
type Service = { id: string; image: string; titleKey: string; subtitleKey: string; features: Feature[]; };

const SERVICES: Service[] = [
  {
    id: "flex-plans", image: serv1,
    titleKey: "DAILY OR MONTHLY CAR RENTALS",
    subtitleKey: "Flexible plans to suit your lifestyle and various needs",
    features: [
      { icon: Car, textKey: "Rental options suitable for every occasion" },
      { icon: Clock, textKey: "The freedom to choose the duration that suits your needs" },
      { icon: Home, textKey: "We bring the service to you wherever you are" },
    ],
  },
  {
    id: "quick-commutes", image: serv2,
    titleKey: "HOURLY CAR RENTALS WITH A DRIVER",
    subtitleKey: "Ideal for quick commutes, meetings and private trips",
    features: [
      { icon: Clock, textKey: "Fast and punctual service" },
      { icon: Users, textKey: "Ideal for meetings and events" },
      { icon: Car, textKey: "Comfortable and well-maintained vehicles" },
    ],
  },
  {
    id: "premium-fleet", image: serv4,
    titleKey: "CAR AVAILABILITY IN BULK",
    subtitleKey: "Customized solutions for companies and entities that need a highly efficient fleet of vehicles",
    features: [
      { icon: Car, textKey: "Diverse and luxurious fleet" },
      { icon: Users, textKey: "Vehicles equipped with the latest features" },
      { icon: Clock, textKey: "Ready to serve you anytime" },
    ],
  },
  {
    id: "concierge-service", image: serv5,
    titleKey: "RECEPTION AND DELIVERY",
    subtitleKey: "A comfortable start to your trip, with punctual service",
    features: [
      { icon: Home, textKey: "Car delivered to your location" },
      { icon: Car, textKey: "Receive and start your journey with ease" },
      { icon: Clock, textKey: "Flexible schedules for your convenience" },
    ],
  },
  {
    id: "transport-service",
    image: serv6,
    titleKey: "TRANSPORT SERVICE",
    subtitleKey: "Enjoy a smooth and reliable group transport experience",
    features: [
      { icon: Home, textKey: "Pick-up from your chosen location" },
      { icon: Car, textKey: "Spacious and comfortable vehicles for every group size" },
      { icon: Clock, textKey: "On-time service with flexible scheduling" },
    ],
  },
];

export default function Services() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({ startX: 0, scrollLeft: 0, isDragging: false });

  function handlePointerDown(e: React.PointerEvent) {
    const el = containerRef.current;
    if (!el) return;
    dragState.current.isDragging = false;
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = el.scrollLeft;
    (e.target as Element).setPointerCapture(e.pointerId);
    el.style.scrollBehavior = 'auto';
  }

  function handlePointerMove(e: React.PointerEvent) {
    const el = containerRef.current;
    if (!el || !el.hasPointerCapture(e.pointerId)) return;
    const dx = dragState.current.startX - e.clientX;
    if (Math.abs(dx) > 5) dragState.current.isDragging = true;
    el.scrollLeft = dragState.current.scrollLeft + dx;
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    if (containerRef.current) containerRef.current.style.scrollBehavior = 'smooth';
    setTimeout(() => { dragState.current.isDragging = false; }, 100);
  }

  const handleCardClick = (e: React.MouseEvent) => {
    if (dragState.current.isDragging) e.preventDefault();
  };

  const scrollLeft = () => {
    if (!containerRef.current) return;
    const firstChild = containerRef.current.querySelector<HTMLElement>("[data-carousel-item]");
    if (!firstChild) return;
    const cardWidth = firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight || "0");
    containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;
    const firstChild = containerRef.current.querySelector<HTMLElement>("[data-carousel-item]");
    if (!firstChild) return;
    const cardWidth = firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight || "0");
    containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section id='services' className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#800020]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#800020]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container  px-6 sm:px-10 mx-auto  relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#800020] dark:text-[#a82e3e] bg-[#800020]/10 dark:bg-[#800020]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              {t("Our Services")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 text-red-700 dark:text-red-600">
            {t("Services")}
          </h2>
          <p className="text-[16px] sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
            {t("Your comfort is our priority")}
          </p>
        </div>

        <div className="relative md:w-full sm:w-[95%] xs:w-[90%] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute -left-3 sm:-left-4 md:-left-4 lg:-left-7 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-3 md:p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-[#800020]/30 dark:border-[#800020]/50 -translate-x-2 sm:-translate-x-4 md:-translate-x-6"
            aria-label="Previous"
          >
            <ChevronLeft className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#800020]" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute -right-3 sm:-right-4 md:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-3 md:p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-[#800020]/30 dark:border-[#800020]/50 translate-x-2 sm:translate-x-4 md:translate-x-6"
            aria-label="Next"
          >
            <ChevronRight className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#800020]" />
          </button>

          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4 flex snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', paddingInline: '1rem' }}
            aria-roledescription="carousel"
          >
            <div className="flex gap-4 sm:gap-6 md:gap-8 items-stretch">
              {SERVICES.map((s, idx) => (
                <article
                  data-carousel-item
                  key={`${s.id}-${idx}`}
                  onClick={handleCardClick}
                  className="flex-shrink-0 w-[85%] xs:w-[75%] sm:w-[60%] md:w-[45%] lg:w-[38%] xl:w-[32%] rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl bg-white dark:bg-slate-800/90 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-slate-200/50 dark:border-slate-700/50 group snap-start"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                    <img
                      src={s.image}
                      alt={t(s.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                      <span className="text-xs font-bold text-[#800020]">
                        {t("Premium")}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-[#800020] transition-colors">
                      {t(s.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 sm:mb-5 line-clamp-2">
                      {t(s.subtitleKey)}
                    </p>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {s.features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                          <div key={i} className="flex items-start gap-2 sm:gap-3 group/item">
                            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-[#800020] flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform">
                              <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5 sm:pt-1">
                              {t(f.textKey)}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <a
                      href="#contact"
                      className="flex items-center justify-center mx-auto px-5 py-3 sm:px-6 sm:py-3 md:px-7 md:py-3 rounded-xl text-sm sm:text-base md:text-base bg-[#800020] text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-fit sm:w-auto"
                      onClick={(e) => {
                        if (dragState.current.isDragging) e.preventDefault();
                      }}
                    >
                      {t("book Now")}
                    </a>


                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          <div className="flex items-center gap-1 sm:gap-1.5 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#800020] animate-pulse"></div>
            <span>{t("Scroll or drag to explore")}</span>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}