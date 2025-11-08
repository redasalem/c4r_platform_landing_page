import { MapPin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Form } from './Form'; // استدعاء الفورم المنفصل

export default function ContactForm() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-primary/5 pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in relative z-20">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#800020] dark:text-[#a82e3e] bg-[#800020]/10 dark:bg-[#800020]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              {t('Get in Touch')}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-[#800020] dark:text-[#a82e3e]">
            {t('Contact us for inquiries or reservations')}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#800020] to-[#a82e3e] rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form - استدعاء الكومبوننت المنفصل */}
          <div
            className="animate-fade-in order-2 lg:order-1"
            style={{ animationDelay: "0.2s" }}
          >
            <Form />
          </div>

          {/* Map & Info Section */}
          <div
            className="space-y-4 sm:space-y-6 animate-fade-in order-1 lg:order-2"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Map */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 group hover:shadow-3xl transition-all duration-500">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1762216687776!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Riyadh Location"
                />
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-3 sm:gap-4">
              {/* Location Card */}
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-[#800020]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-[#800020] to-[#a82e3e] group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 sm:mb-2">{t('Location')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t('Riyadh City, Saudi Arabia')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-[#800020]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-[#800020] to-[#a82e3e] group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 sm:mb-2">{t('Email')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground break-all">Saleh@C4Rplatform.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}