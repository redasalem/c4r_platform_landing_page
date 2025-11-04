import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import client1 from '@/assets/client-1.jpg';
import client2 from '@/assets/client-2.jpg';
import client3 from '@/assets/client-3.jpg';
import client4 from '@/assets/client-4.jpg';
import client5 from '@/assets/client-5.jpg';
import client6 from '@/assets/client-6.jpg';

const testimonials = [
  {
    id: 1,
    name: 'أحمد المنصوري',
    role: 'رجل أعمال',
    image: client1,
    rating: 5,
    text: 'الخدمة ممتازة! السيارة كانت في حالة رائعة وعملية الحجز كانت سلسة جدًا. أنصح بها بشدة للمسافرين للأعمال.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'سارة محمد',
    role: 'أخصائية سياحة',
    image: client2,
    rating: 4,
    text: 'جعلت رحلتي السياحية خالية من التوتر. السيارة كانت فاخرة والدعم كان ممتازًا. سأستخدمها بالتأكيد مرة أخرى!',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'عمر حسن',
    role: 'رائد أعمال',
    image: client3,
    rating: 5,
    text: 'مجموعة رائعة من السيارات وأسعار منافسة. الفريق بذل جهده لتلبية احتياجاتي. خمس نجوم!',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'محمد علي',
    role: 'مدير مشروع',
    image: client4,
    rating: 5,
    text: 'تجربة رائعة من البداية للنهاية. السيارة نظيفة ومريحة، والخدمة ممتازة للغاية.',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    name: 'محمد سامي',
    role: 'مستشار سياحي',
    image: client5,
    rating: 4,
    text: 'أعجبني مستوى الاحترافية في التعامل مع العملاء، وسأوصي بهم لكل أصدقائي وعائلتي.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    name: 'محمد احمد',
    role: 'صانع محتوى',
    image: client6,
    rating: 5,
    text: 'خدمة ممتازة وسيارات فاخرة. كل شيء كان منظم وسهل، تجربة لا تُنسى!',
    color: 'from-rose-500 to-pink-500',
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-2xl border-2 border-border/50 backdrop-blur-sm bg-card/95 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Animated gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[current].color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            <CardContent className="p-8 md:p-12 relative">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 md:w-32 md:h-32" />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Enhanced Image with gradient ring */}
                <div className="relative group/img flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[current].color} rounded-full blur-xl opacity-50 group-hover/img:opacity-75 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-r ${testimonials[current].color} p-1 rounded-full`}>
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-background shadow-card"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  {/* Text */}
                  <p className="text-lg text-foreground mb-6 italic">
                    "{testimonials[current].text}"
                  </p>

                  {/* User Info with Stars */}
                  <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-3">
                    <div>
                      <p className="font-bold text-lg">{testimonials[current].name}</p>
                      <p className="text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-accent text-accent animate-[pulse_2s_ease-in-out_infinite]"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-primary-foreground p-3 rounded-full hover:shadow-hover hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-primary-foreground p-3 rounded-full hover:shadow-hover hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === current ? 'w-8 bg-primary shadow-lg' : 'w-3 bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};