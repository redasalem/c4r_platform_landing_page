import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import client1 from '@/assets/client-1.jpg';
import client2 from '@/assets/client-2.jpg';
import client3 from '@/assets/client-3.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al-Mansouri',
    role: 'Business Executive',
    image: client1,
    rating: 5,
    text: 'Exceptional service! The car was in perfect condition and the booking process was seamless. Highly recommended for business travelers.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Tourism Professional',
    image: client2,
    rating: 5,
    text: 'C4R made my vacation stress-free. The vehicle was luxurious and the customer support was outstanding. Will definitely use again!',
  },
  {
    id: 3,
    name: 'Omar Hassan',
    role: 'Entrepreneur',
    image: client3,
    rating: 5,
    text: 'Great selection of vehicles and competitive prices. The team went above and beyond to accommodate my needs. Five stars!',
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-card border-border">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-24 h-24 rounded-full object-cover shadow-card"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex gap-1 mb-4 justify-center md:justify-start">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg text-foreground mb-6 italic">
                      "{testimonials[current].text}"
                    </p>
                    <div>
                      <p className="font-bold text-lg">{testimonials[current].name}</p>
                      <p className="text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-primary-foreground p-3 rounded-full hover:shadow-hover transition-smooth"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-primary-foreground p-3 rounded-full hover:shadow-hover transition-smooth"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === current ? 'bg-primary w-8' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
