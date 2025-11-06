import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import toast, { Toaster } from 'react-hot-toast';
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

import client1 from '@/assets/client-1.jpg';
import client2 from '@/assets/client-2.jpg';
import client3 from '@/assets/client-3.jpg';
import client4 from '@/assets/client-4.jpg';
import client5 from '@/assets/client-5.jpg';
import client6 from '@/assets/client-6.jpg';

const initialTestimonials = [
  { id: 1, name: 'أحمد المنصوري', role: 'رجل أعمال', image: client1, rating: 5, text: 'الخدمة ممتازة! السيارة كانت في حالة رائعة وعملية الحجز كانت سلسة جدًا. أنصح بها بشدة للمسافرين للأعمال.', color: 'from-red-600 to-red-500' },
  { id: 2, name: 'سارة محمد', role: 'أخصائية سياحة', image: client2, rating: 4, text: 'جعلت رحلتي السياحية خالية من التوتر. السيارة كانت فاخرة والدعم كان ممتازًا. سأستخدمها بالتأكيد مرة أخرى!', color: 'from-red-700 to-red-500' },
  { id: 3, name: 'عمر حسن', role: 'رائد أعمال', image: client3, rating: 5, text: 'مجموعة رائعة من السيارات وأسعار منافسة. الفريق بذل جهده لتلبية احتياجاتي. خمس نجوم!', color: 'from-red-500 to-red-400' },
  { id: 4, name: 'محمد علي', role: 'مدير مشروع', image: client4, rating: 5, text: 'تجربة رائعة من البداية للنهاية. السيارة نظيفة ومريحة، والخدمة ممتازة للغاية.', color: 'from-red-600 to-red-400' },
  { id: 5, name: 'محمد سامي', role: 'مستشار سياحي', image: client5, rating: 4, text: 'أعجبني مستوى الاحترافية في التعامل مع العملاء، وسأوصي بهم لكل أصدقائي وعائلتي.', color: 'from-red-700 to-red-500' },
  { id: 6, name: 'محمد احمد', role: 'صانع محتوى', image: client6, rating: 5, text: 'خدمة ممتازة وسيارات فاخرة. كل شيء كان منظم وسهل، تجربة لا تُنسى!', color: 'from-red-500 to-red-400' },
];

const colors = ['from-red-600 to-red-500', 'from-red-700 to-red-500', 'from-red-500 to-red-400', 'from-red-600 to-red-400', 'from-red-700 to-red-500', 'from-red-500 to-red-400'];





export const Testimonials = () => {
  const { t } = useLanguage();
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({ name: '', role: '', text: '', rating: 5 });
  const [showSuccess, setShowSuccess] = useState(false);

  // جلب التعليقات من Firebase
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonials'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
       if (data.length > 0) setTestimonials(prev => [...prev, ...data]);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => setCurrent(prev => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // التنقل بين التعليقات
  const next = () => { setIsAutoPlaying(false); setCurrent(prev => (prev + 1) % testimonials.length); };
  const prev = () => { setIsAutoPlaying(false); setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length); };
  const goToSlide = (index: number) => { setIsAutoPlaying(false); setCurrent(index); };

  // إرسال تعليق جديد إلى Firebase
  const submitReview = async () => {
    const newTestimonial = {
      id: Date.now(),
      ...formData,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random&size=200`,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    try {
      await addDoc(collection(db, 'testimonials'), newTestimonial);
      setTestimonials(prev => [...prev, newTestimonial]);
      setCurrent(testimonials.length);
      setFormData({ name: '', role: '', text: '', rating: 5 });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding testimonial:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast((tost) => (
      <div className="text-right rtl:text-right">
        هل أنت متأكد أنك تريد إرسال هذا التعليق؟
        <div className="mt-2 flex gap-2 justify-end">
          <button
            onClick={() => { toast.dismiss(tost.id); submitReview(); }}
            className="px-3 py-1 rounded bg-green-500 text-white"
          >
            نعم
          </button>
          <button
            onClick={() => toast.dismiss(tost.id)}
            className="px-3 py-1 rounded bg-gray-300"
          >
            لا
          </button>
        </div>
      </div>
    ));
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-7 text-red-700 dark:text-red-600">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative mb-8 sm:mb-12 md:mb-16">
          <Card className="shadow-xl sm:shadow-2xl border-2 border-border/50 backdrop-blur-sm bg-card/95 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative">
              <div className="absolute top-4 sm:top-8 right-4 sm:right-8 opacity-10">
                <Quote className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 relative z-10">
                <div className={`relative bg-gradient-to-r ${testimonials[current].color} p-1 rounded-full flex-shrink-0`}>
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-background shadow-card"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6 italic">
                    "{testimonials[current].text}"
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-3 justify-center md:justify-start">
                    <div>
                      <p className="font-bold text-base sm:text-lg">{testimonials[current].name}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-3 h-3 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 bg-red-600 text-white p-2 sm:p-3 rounded-full hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-3 h-3 sm:w-6 sm:h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                  index === current
                    ? 'w-6 sm:w-8 bg-red-600 shadow-lg'
                    : 'w-2 sm:w-3 bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl sm:shadow-2xl border-2 border-border/50 backdrop-blur-sm bg-card/95 overflow-hidden">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4 text-red-700 dark:text-red-600">
                  {t('Share Your Experience') || 'شارك تجربتك'}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('We would love to hear about your experience') || 'نود أن نسمع عن تجربتك معنا'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">{t('Name')}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/20 transition-all duration-300"
                    placeholder={t('Your name') || 'اسمك'}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">{t('Role')}</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/20 transition-all duration-300"
                    placeholder={t('Role')}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3">{t('Rating')}</label>
                  <div className="flex gap-1.5 sm:gap-2 justify-center sm:justify-start">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="transition-transform hover:scale-125"
                      >
                        <Star
                          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-colors ${
                            star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">{t('Your Review') || 'رأيك'}</label>
                  <textarea
                    value={formData.text}
                    onChange={e => setFormData({ ...formData, text: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/20 transition-all duration-300 resize-none"
                    placeholder={t('Your message here...')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" /> {t('Submit Review')}
                </button>

                {showSuccess && (
                  <div className="p-3 sm:p-4 text-sm sm:text-base rounded-lg sm:rounded-xl bg-green-500/20 border-2 border-green-500/50 text-green-600 text-center font-semibold animate-fade-in">
                    {t('Thank you for your review!')}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
