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
          {/* FIXED RATIO & IMAGE QUALITY */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Gradient Overlay */}
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
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl text-white">
            {t('hero.title')}
          </h1>

          <p className="md:text-xl text-base mt-36 md:mt-6  mb-8 drop-shadow-lg text-white/90">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className={`text-lg px-8 py-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
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
              className={`text-lg px-8 py-6 rounded-2xl font-bold backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
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

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg shadow-purple-500/20'
            : 'bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg'
        }`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg shadow-purple-500/20'
            : 'bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg'
        }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-8'
                  : 'bg-gradient-to-r from-blue-400 to-purple-500 w-8'
                : theme === 'dark'
                ? 'bg-white/30 hover:bg-white/50 w-2'
                : 'bg-white/40 hover:bg-white/60 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
