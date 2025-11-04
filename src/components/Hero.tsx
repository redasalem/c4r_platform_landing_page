import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import heroCar1 from '@/assets/hero-car-1.jpg';
import heroCar2 from '@/assets/hero-car-2.jpg';
import heroCar3 from '@/assets/hero-car-3.jpg';
import MercedesBenz from '../assets/Mercedes-Benz.jpg';

const slides = [
  { image: heroCar1, title: 'Luxury Sports Cars' },
  { image: heroCar2, title: 'Premium SUVs' },
  { image: heroCar3, title: 'Elegant Sedans' },
  { image: MercedesBenz, title: 'MercedesBenz' },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();
  const { theme } = useTheme();

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="About" className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div 
            className={`absolute inset-0 z-10 ${
              theme === 'dark'
                ? 'bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent'
                : 'bg-gradient-to-t from-slate-900/80 via-slate-900/35 to-transparent'
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-full sm:max-w-2xl w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl text-white text-center sm:text-left">
            {t('hero.title')}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 drop-shadow-lg text-white/90 text-center sm:text-left">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center sm:items-start">
            <Button
              size="lg"
              className={`w-fit text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-lg shadow-blue-500/50'
              }`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className={`w-fit text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg'
                  : 'bg-white/20 text-white border-white/40 hover:bg-white/30 hover:border-white/60 shadow-lg'
              }`}
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.testimonials')}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className={`hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg shadow-purple-500/20'
            : 'bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg'
        }`}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next"
        className={`hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg shadow-purple-500/20'
            : 'bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg'
        }`}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Mobile Navigation - Below content */}
      <div className="sm:hidden absolute bottom-24 left-0 right-0 z-30 flex items-center justify-center gap-4 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous"
          className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
            theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg'
              : 'bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next"
          className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
            theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg'
              : 'bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-6 sm:w-8'
                  : 'bg-gradient-to-r from-blue-400 to-purple-500 w-6 sm:w-8'
                : theme === 'dark'
                ? 'bg-white/30 hover:bg-white/50 w-1.5 sm:w-2'
                : 'bg-white/40 hover:bg-white/60 w-1.5 sm:w-2'
            }`}
          />
        ))}
      </div>
    </section>
  );
};