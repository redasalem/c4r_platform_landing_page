import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import car1 from '@/assets/car-1.jpg';
import car2 from '@/assets/car-2.jpg';
import car3 from '@/assets/car-3.jpg';
import car4 from '@/assets/car-4.jpg';

const services = [
  { id: 1, name: 'Daily Rental', description: 'Flexible daily car rental services', image: car1 },
  { id: 2, name: 'Monthly Rental', description: 'Long-term rental solutions', image: car2 },
  { id: 3, name: 'Corporate Fleet', description: 'Business fleet management', image: car3 },
  { id: 4, name: 'Airport Transfer', description: 'Seamless airport pickup & drop', image: car4 },
  { id: 5, name: 'Chauffeur Service', description: 'Professional driver services', image: car1 },
  { id: 6, name: 'Event Rental', description: 'Special occasion vehicles', image: car2 },
];

export const Services = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const itemWidth = 320; // card width + gap
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled past the first set
      if (scrollPosition >= itemWidth * services.length) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  // Duplicate services for infinite effect
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 bg-gradient-hero opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive car rental solutions tailored to your needs
          </p>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedServices.map((service, index) => (
          <motion.div
            key={`${service.id}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (index % services.length) * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="flex-shrink-0 w-[300px]"
          >
            <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth border-border h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-smooth hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{service.name}</h3>
                  <p className="text-sm text-white/90">{service.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};