import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Car, Clock, Home, Users } from "lucide-react";
import car1 from '../assets/car-1.jpg';
import car2 from '../assets/car-2.jpg';
import car3 from '../assets/car-3.jpg';
import car5 from '../assets/car-5.jpg';
import car6 from '../assets/car-6.jpg';
import car7 from '../assets/car-7.jpg';


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
    image:car5,
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
    image: car6,
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
    image:car7,
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
  const items = [...SERVICES, ...SERVICES];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);
  const pointerDownRef = useRef(false);
  const autoScrollInterval = 10000; // 10 ثواني
  const [isReady, setIsReady] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  useEffect(() => setIsReady(true), []);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    let rafId: number | null = null;

    const step = () => {
      if (!el || isHoveredRef.current || pointerDownRef.current) {
        rafId = requestAnimationFrame(step);
        return;
      }
      const firstChild = el.querySelector<HTMLElement>("[data-carousel-item]");
      if (!firstChild) {
        rafId = requestAnimationFrame(step);
        return;
      }
      const cardWidth =
        firstChild.offsetWidth +
        parseInt(getComputedStyle(firstChild).marginRight || "0");
      el.scrollBy({ left: cardWidth, behavior: "smooth" });

      setTimeout(() => {
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }, 300);
    };

    let timer = 0 as unknown as number;
    const loop = () => {
      timer = window.setTimeout(() => {
        step();
        loop();
      }, autoScrollInterval);
    };
    loop();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [isReady]);

  const handleMouseEnter = () => (isHoveredRef.current = true);
  const handleMouseLeave = () => (isHoveredRef.current = false);

  function handlePointerDown(e: React.PointerEvent) {
    const el = containerRef.current!;
    pointerDownRef.current = true;
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = el.scrollLeft;
    (e.target as Element).setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!pointerDownRef.current) return;
    const el = containerRef.current!;
    const dx = dragState.current.startX - e.clientX;
    el.scrollLeft = dragState.current.scrollLeft + dx;
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    pointerDownRef.current = false;
    const el = e.currentTarget;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  }

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            {t("Services")}
          </motion.h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
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
          className="relative overflow-hidden"
          aria-roledescription="carousel"
        >
          <div className="flex gap-6 items-stretch" style={{ willChange: "transform" }}>
            {items.map((s, idx) => (
              <article
                data-carousel-item
                key={`${s.id}-${idx}`}
                className="w-[380px] flex-shrink-0 rounded-3xl shadow-2xl bg-white dark:bg-slate-800 overflow-hidden transform-gpu hover:-translate-y-2 transition-transform"
                style={{ perspective: 1200 }}
              >
                <div className="relative h-[280px] md:h-[320px] lg:h-[360px] 3xl:h-[400px]">
                  <img
                    src={s.image}
                    alt={t(s.titleKey)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{t(s.titleKey)}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {t(s.subtitleKey)}
                  </p>

                  <div className="mt-4 space-y-2">
                    {s.features.map((f, i) => {
                      const Icon = f.icon;
                      return (
                        <div key={i} className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-purple-600" />
                          <p className="text-sm md:text-base text-muted-foreground">
                            {t(f.textKey)}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <a
                      href="#contact"
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg transform-gpu hover:scale-105 transition"
                    >
                      {t("book Now")}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
