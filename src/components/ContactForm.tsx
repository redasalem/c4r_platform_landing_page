import type React from "react"
import { useState } from "react"
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (name === 'email') {
      setIsValidEmail(emailRegex.test(value));
    }
  }

  const [result, setResult] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(true);
    const formDataObj = new FormData(event.currentTarget);
    formDataObj.append("access_key",`${import.meta.env.VITE_API_KEY_WEB3FORMS}`);
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    });

    const data = await response.json();
    if (data.success) {
      setResult(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } else {
      setResult(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-primary/5 pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in relative z-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              {t('Get in Touch')}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            {t('Contact us for inquiries or reservations')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div
            className="animate-fade-in order-2 lg:order-1"
            style={{ animationDelay: "0.2s" }}
          >
            <form
              onSubmit={onSubmit}
              className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-foreground mb-3 transition-colors group-focus-within:text-primary">
                    {t('Name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                    placeholder={t("Your name")}
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-foreground mb-3 transition-colors group-focus-within:text-primary">
                    {t('Email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    className={`w-full px-5 py-3 rounded-xl bg-input border-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50 ${
                      formData.email ? (isValidEmail ? 'border-green-500 focus:border-green-500' : 'border-red-500 focus:border-red-500') : 'border-border'
                    }`}
                    placeholder={t("your@email.com")}
                  />
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-foreground mb-3 transition-colors group-focus-within:text-primary">
                    {t('Subject')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                    placeholder={t("Project inquiry")}
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-foreground mb-3 transition-colors group-focus-within:text-primary">
                    {t('Message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3 rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 resize-none hover:border-primary/50"
                    placeholder={t("Your message here...")}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.name || !isValidEmail || !formData.subject || !formData.message}
                  className="cursor-pointer w-full px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-primary text-accent-foreground font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] group/btn"
                >
                  {result ? (
                    <>
                      <div className="w-5 h-5 border-3 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                      {t('Sending...')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      {t('Send Message')}
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-xl bg-green-500/20 border-2 border-green-500/50 text-green-400 text-center animate-fade-in font-medium">
                    {t('Message sent successfully! I will get back to you soon.')}
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/20 border-2 border-red-500/50 text-red-400 text-center animate-fade-in font-medium">
                    {t('Error sending message. Please try again.')}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Map & Info Section */}
          <div
            className="space-y-6 animate-fade-in order-1 lg:order-2"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 group hover:shadow-3xl transition-all duration-500">
              <div className="relative h-[400px]">
               
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1762216687776!5m2!1sar!2seg"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Makkah Location"
                />
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {/* Location Card */}
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-2">{t('Location')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('Riyadh City, Saudi Arabia')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-2">{t('Email')}</h3>
                    <p className="text-muted-foreground">Saleh@C4Rplatform.com</p>
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