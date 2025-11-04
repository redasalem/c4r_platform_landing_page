import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import toast, { Toaster } from 'react-hot-toast';
import client1 from '@/assets/client-1.jpg';
import client2 from '@/assets/client-2.jpg';
import client3 from '@/assets/client-3.jpg';
import client4 from '@/assets/client-4.jpg';
import client5 from '@/assets/client-5.jpg';
import client6 from '@/assets/client-6.jpg';

const initialTestimonials = [
  { id: 1, name: 'أحمد المنصوري', role: 'رجل أعمال', image: client1, rating: 5, text: 'الخدمة ممتازة! السيارة كانت في حالة رائعة وعملية الحجز كانت سلسة جدًا. أنصح بها بشدة للمسافرين للأعمال.', color: 'from-blue-500 to-cyan-500' },
  { id: 2, name: 'سارة محمد', role: 'أخصائية سياحة', image: client2, rating: 4, text: 'جعلت رحلتي السياحية خالية من التوتر. السيارة كانت فاخرة والدعم كان ممتازًا. سأستخدمها بالتأكيد مرة أخرى!', color: 'from-purple-500 to-pink-500' },
  { id: 3, name: 'عمر حسن', role: 'رائد أعمال', image: client3, rating: 5, text: 'مجموعة رائعة من السيارات وأسعار منافسة. الفريق بذل جهده لتلبية احتياجاتي. خمس نجوم!', color: 'from-green-500 to-emerald-500' },
  { id: 4, name: 'محمد علي', role: 'مدير مشروع', image: client4, rating: 5, text: 'تجربة رائعة من البداية للنهاية. السيارة نظيفة ومريحة، والخدمة ممتازة للغاية.', color: 'from-orange-500 to-red-500' },
  { id: 5, name: 'محمد سامي', role: 'مستشار سياحي', image: client5, rating: 4, text: 'أعجبني مستوى الاحترافية في التعامل مع العملاء، وسأوصي بهم لكل أصدقائي وعائلتي.', color: 'from-indigo-500 to-purple-500' },
  { id: 6, name: 'محمد احمد', role: 'صانع محتوى', image: client6, rating: 5, text: 'خدمة ممتازة وسيارات فاخرة. كل شيء كان منظم وسهل، تجربة لا تُنسى!', color: 'from-rose-500 to-pink-500' },
];

const colors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500', 'from-indigo-500 to-purple-500', 'from-rose-500 to-pink-500'];

export const Testimonials = () => {
  const { t } = useLanguage();

  const [testimonials, setTestimonials] = useState(() => {
    const stored = localStorage.getItem('testimonials');
    return stored ? JSON.parse(stored) : initialTestimonials;
  });

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [formData, setFormData] = useState({ name: '', role: '', text: '', rating: 5 });
  const [showSuccess, setShowSuccess] = useState(false);

  // Carousel auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => setCurrent(prev => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Save testimonials to localStorage
  useEffect(() => localStorage.setItem('testimonials', JSON.stringify(testimonials)), [testimonials]);

  const next = () => { setIsAutoPlaying(false); setCurrent(prev => (prev + 1) % testimonials.length); };
  const prev = () => { setIsAutoPlaying(false); setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length); };
  const goToSlide = index => { setIsAutoPlaying(false); setCurrent(index); };

  const handleRatingClick = rating => setFormData({ ...formData, rating });

  // Submit review after confirmation
  const submitReview = () => {
    const newTestimonial = {
      id: Date.now(),
      ...formData,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random&size=200`,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setTestimonials(prev => [...prev, newTestimonial]);
    setCurrent(testimonials.length);
    setFormData({ name: '', role: '', text: '', rating: 5 });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast((t) => (
      <div>
        هل أنت متأكد أنك تريد إرسال هذا التعليق؟
        <div className="mt-2 flex gap-2 justify-end">
          <button onClick={() => { toast.dismiss(t.id); submitReview(); }} className="px-3 py-1 rounded bg-green-500 text-white">نعم</button>
          <button onClick={() => toast.dismiss(t.id)} className="px-3 py-1 rounded bg-gray-300">لا</button>
        </div>
      </div>
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">{t('testimonials.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('testimonials.subtitle')}</p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative mb-16">
          <Card className="shadow-2xl border-2 border-border/50 backdrop-blur-sm bg-card/95 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8 md:p-12 relative">
              <div className="absolute top-8 right-8 opacity-10"><Quote className="w-24 h-24 md:w-32 md:h-32" /></div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className={`relative bg-gradient-to-r ${testimonials[current].color} p-1 rounded-full`}>
                  <img src={testimonials[current].image} alt={testimonials[current].name} className="w-24 h-24 rounded-full object-cover ring-4 ring-background shadow-card" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-foreground mb-6 italic">"{testimonials[current].text}"</p>
                  <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                    <div>
                      <p className="font-bold text-lg">{testimonials[current].name}</p>
                      <p className="text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                    <div className="flex gap-1">{[...Array(testimonials[current].rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${i*0.1}s` }} />)}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-primary-foreground p-3 rounded-full hover:shadow-hover hover:scale-110 transition-all duration-300"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-primary-foreground p-3 rounded-full hover:shadow-hover hover:scale-110 transition-all duration-300"><ChevronRight className="w-6 h-6" /></button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">{testimonials.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`h-3 rounded-full transition-all duration-500 ${index===current?'w-8 bg-primary shadow-lg':'w-3 bg-muted hover:bg-muted-foreground/50'}`}/>
          ))}</div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-2 border-border/50 backdrop-blur-sm bg-card/95 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">{t('Share Your Experience') || 'شارك تجربتك'}</h3>
                <p className="text-muted-foreground">{t('We would love to hear about your experience') || 'نود أن نسمع عن تجربتك معنا'}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t('Name')}</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300" placeholder={t('Your name') || 'اسمك'} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t('Role')}</label>
                  <input type="text" value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} required className="w-full px-4 py-3 rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300" placeholder={t('Your role') || 'وظيفتك'} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">{t('Rating')}</label>
                  <div className="flex gap-2">{[1,2,3,4,5].map(star => (
                    <button key={star} type="button" onClick={()=>handleRatingClick(star)} className="transition-transform hover:scale-125">
                      <Star className={`w-8 h-8 transition-colors ${star<=formData.rating?'fill-accent text-accent':'text-muted-foreground'}`} />
                    </button>
                  ))}</div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t('Your Review') || 'رأيك'}</label>
                  <textarea value={formData.text} onChange={e=>setFormData({...formData,text:e.target.value})} required rows={4} className="w-full px-4 py-3 rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 resize-none" placeholder={t('Tell us about your experience') || 'أخبرنا عن تجربتك'} />
                </div>
                <button type="submit" className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98]">
                  <Send className="w-5 h-5" /> {t('Submit Review')}
                </button>
                {showSuccess && (
                  <div className="p-4 rounded-xl bg-green-500/20 border-2 border-green-500/50 text-green-400 text-center font-semibold animate-fade-in">
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
