import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import heroCar1 from "@/assets/hero-car-1.jpg";
import heroCar2 from "@/assets/Land Rover.png";
import heroCar3 from "@/assets/hero-car-3.jpg";
import MercedesBenz from "../assets/Mercedes-Benz.jpg";

const slides = [
  { image: heroCar3, title: "Luxury Sports Cars" },
  { image: heroCar1, title: "Premium SUVs" },
  { image: MercedesBenz, title: "Elegant Sedans" },
  { image: heroCar2, title: "MercedesBenz" },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();
  const { theme } = useTheme();

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="About"
      className="relative md:h-screen h-[500px]  w-full bg-black"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <div className="w-full h-full">
            <img
  src={slides[currentSlide].image}
  alt={slides[currentSlide].title}
  className="
    w-full h-full
       
  "
  loading="lazy"
  decoding="async"
/>

          </div>

          <div
            className={`absolute inset-0 z-10 ${
              theme === "dark"
                ? "bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent"
                : "bg-gradient-to-t from-slate-900/80 via-slate-900/35 to-transparent"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-3 xs:px-4 sm:px-16 h-full flex items-end sm:items-center pb-32 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full max-w-full sm:max-w-xl md:max-w-2xl"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 drop-shadow-2xl  text-white text-center sm:text-left leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-[17px] xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-5 xs:mb-6 sm:mb-8 drop-shadow-lg text-white/90 text-center sm:text-left leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-row flex-wrap gap-6 xs:gap-5 sm:gap-5 items-start justify-center sm:justify-start">
            <Button
              size="lg"
              className={`w-fit text-sm xs:text-base sm:text-lg md:text-xl px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 md:py-5 rounded-lg xs:rounded-xl sm:rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-r from-[#800020] via-[#a82e3e] to-[#800020] hover:from-[#660019] hover:via-[#8a2635] hover:to-[#660019] text-white shadow-lg shadow-[#800020]/50"
                  : "bg-gradient-to-r from-[#800020] via-[#a82e3e] to-[#800020] hover:from-[#660019] hover:via-[#8a2635] hover:to-[#660019] text-white shadow-lg shadow-[#800020]/50"
              }`}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero.cta")}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className={`w-fit text-sm xs:text-base sm:text-lg md:text-xl px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 md:py-5 rounded-lg xs:rounded-xl sm:rounded-2xl font-bold backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg"
                  : "bg-white/20 text-white border-white/40 hover:bg-white/30 hover:border-white/60 shadow-lg"
              }`}
              onClick={() =>
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero.testimonials")}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons - Hidden on mobile and tablet */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className={`hidden lg:block absolute left-2 lg:left-2 top-1/2 -translate-y-1/2 z-30 p-2 lg:p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
          theme === "dark"
            ? "bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg"
            : "bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg"
        }`}
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next"
        className={`hidden lg:block absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30 p-2 lg:p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
          theme === "dark"
            ? "bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg"
            : "bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg"
        }`}
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Mobile & Tablet Navigation - Below content */}
      <div className="lg:hidden absolute bottom-16  xs:bottom-20 left-0 right-0 z-30 flex items-center justify-around gap-5 xs:gap-5 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous"
          className={`p-2.5 xs:p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-95 ${
            theme === "dark"
              ? "bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg"
              : "bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg"
          }`}
        >
          <ChevronLeft className="w-5 h-5 xs:w-6 xs:h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next"
          className={`p-2.5 xs:p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-95 ${
            theme === "dark"
              ? "bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg"
              : "bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg"
          }`}
        >
          <ChevronRight className="w-5 h-5 xs:w-6 xs:h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 xs:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 xs:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? theme === "dark"
                  ? "bg-gradient-to-r from-[#800020] to-[#a82e3e] w-6 xs:w-8 shadow-lg"
                  : "bg-gradient-to-r from-[#800020] to-[#a82e3e] w-6 xs:w-8 shadow-lg"
                : theme === "dark"
                ? "bg-white/30 hover:bg-white/50 w-1.5 xs:w-2"
                : "bg-white/40 hover:bg-white/60 w-1.5 xs:w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};