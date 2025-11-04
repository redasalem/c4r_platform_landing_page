import React, { useEffect, useRef, useState } from "react";
import { Car, Clock, Home, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import car6 from "@/assets/car-6.jpg";
import car5 from '@/assets/car-5.jpg';
import carpr from '@/assets/pr1.jpg'




type Feature = {
  icon: React.ElementType;
  textKey: string;
};

type Service = {
  id: string;
  image: string;
  titleKey: string;
  subtitleKey: string;
  features: Feature[];
};

const SERVICES: Service[] = [
  {
    id: "flex-plans",
    image:car6,
    titleKey: "Flexible plans to suit your lifestyle and various needs",
    subtitleKey: "Daily or monthly car rental options tailored to your preferences",
    features: [
      { icon: Car, textKey: "Flexible rental plans" },
      { icon: Clock, textKey: "Hourly car rental with driver" },
      { icon: Home, textKey: "Your comfort is our priority… no branch visits needed" },
    ],
  },
  {
    id: "quick-commutes",
    image: car5,
    titleKey: "Ideal for quick commutes, meetings and private trips",
    subtitleKey: "Reliable cars for time-sensitive rides and business trips",
    features: [
      { icon: Clock, textKey: "Quick and punctual service" },
      { icon: Users, textKey: "Perfect for meetings and events" },
      { icon: Car, textKey: "Comfortable and well-maintained vehicles" },
    ],
  },
  {
    id: "no-branch-needed",
    image: carpr,
    titleKey: "Your comfort is our priority",
    subtitleKey: "Book, unlock and drive — no branch visits required",
    features: [
      { icon: Home, textKey: "Full-service from your location" },
      { icon: Car, textKey: "Seamless pickup & drop-off" },
      { icon: Clock, textKey: "Save time with quick procedures" },
    ],
  },
  {
    id: "premium-fleet",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    titleKey: "Premium fleet selection",
    subtitleKey: "Top-tier brands kept in pristine condition",
    features: [
      { icon: Car, textKey: "Luxury vehicles for all occasions" },
      { icon: Users, textKey: "Comfortable seating for passengers" },
      { icon: Clock, textKey: "Available whenever you need" },
    ],
  },
  {
    id: "concierge-service",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    titleKey: "Concierge & Delivery",
    subtitleKey: "We deliver the car to your doorstep — white-glove service",
    features: [
      { icon: Home, textKey: "Car delivered to your location" },
      { icon: Car, textKey: "No need to visit a branch" },
      { icon: Clock, textKey: "Flexible schedules for your convenience" },
    ],
  },
  {
    id: "safety-cleaning",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    titleKey: "Sanitized & Inspected",
    subtitleKey: "Daily inspections and premium sanitization for peace of mind",
    features: [
      { icon: Clock, textKey: "Regular safety checks" },
      { icon: Home, textKey: "Thorough cleaning after each ride" },
      { icon: Users, textKey: "Safe and reliable for passengers" },
    ],
  },
];

export default function Services() {
  const { t } = useLanguage();
  const items = [...SERVICES, ...SERVICES, ...SERVICES];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);
  const pointerDownRef = useRef(false);
  const autoScrollInterval = 3000;
  const [isReady, setIsReady] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, isDragging: false });

  useEffect(() => setIsReady(true), []);

  useEffect(() => {
    if (!containerRef.current || !isReady) return;
    const el = containerRef.current;
    let intervalId: ReturnType<typeof setInterval>;

    const smoothScroll = () => {
      if (!el || isHoveredRef.current || pointerDownRef.current) return;
      const firstChild = el.querySelector<HTMLElement>("[data-carousel-item]");
      if (!firstChild) return;
      const cardWidth = firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight || "0");
      el.scrollBy({ left: cardWidth, behavior: "smooth" });

      setTimeout(() => {
        const midPoint = el.scrollWidth / 3;
        if (el.scrollLeft >= midPoint) el.scrollLeft = 0;
      }, 500);
    };

    intervalId = setInterval(smoothScroll, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [isReady]);

  const handleMouseEnter = () => (isHoveredRef.current = true);
  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    dragState.current.isDragging = false;
  };

  function handlePointerDown(e: React.PointerEvent) {
    const el = containerRef.current;
    if (!el) return;
    pointerDownRef.current = true;
    dragState.current.isDragging = false;
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = el.scrollLeft;
    (e.target as Element).setPointerCapture(e.pointerId);
    el.style.scrollBehavior = 'auto';
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!pointerDownRef.current) return;
    const el = containerRef.current;
    if (!el) return;
    const dx = dragState.current.startX - e.clientX;
    if (Math.abs(dx) > 5) dragState.current.isDragging = true;
    el.scrollLeft = dragState.current.scrollLeft + dx;
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    pointerDownRef.current = false;
    const el = e.currentTarget;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    if (containerRef.current) containerRef.current.style.scrollBehavior = 'smooth';
    setTimeout(() => { dragState.current.isDragging = false; }, 100);
  }

  const handleCardClick = (e: React.MouseEvent) => {
    if (dragState.current.isDragging) e.preventDefault();
  };

  return (
    <section id='services' className="relative py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/50 px-4 py-2 rounded-full">
              {t("Our Services")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-100 dark:via-purple-100 dark:to-slate-100 bg-clip-text text-transparent">
            {t("Services")}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t("Your comfort is our priority")}
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="relative overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          aria-roledescription="carousel"
        >
          <div className="flex gap-6 md:gap-8 items-stretch px-2">
            {items.map((s, idx) => (
              <article
                data-carousel-item
                key={`${s.id}-${idx}`}
                onClick={handleCardClick}
                className="w-[340px] md:w-[380px] lg:w-[420px] flex-shrink-0 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl bg-white dark:bg-slate-800/90 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-slate-200/50 dark:border-slate-700/50 group"
              >
                <div className="relative h-[240px] md:h-[280px] lg:h-[320px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={t(s.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      {t("Premium")}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7 lg:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {t(s.titleKey)}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-5 line-clamp-2">
                    {t(s.subtitleKey)}
                  </p>

                  <div className="space-y-3 mb-6">
                    {s.features.map((f, i) => {
                      const Icon = f.icon;
                      return (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                            {t(f.textKey)}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href="#contact"
                    className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    onClick={(e) => { if (dragState.current.isDragging) e.preventDefault(); }}
                  >
                    {t("book Now")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-sm">
            <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse"></div>
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
