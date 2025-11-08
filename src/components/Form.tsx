import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Form = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [result, setResult] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (name === 'email') {
      setIsValidEmail(emailRegex.test(value));
    }
  }

  const onSubmit = async () => {
    if (!formData.name || !isValidEmail || !formData.subject || !formData.message) return;
    
    setResult(true);
    const formDataObj = new FormData();
    formDataObj.append("access_key", `${import.meta.env.VITE_API_KEY_WEB3FORMS}`);
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("message", formData.message);
    
    try {
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
    } catch (error) {
      setResult(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div
      className="p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500"
    >
      <div className="space-y-4 sm:space-y-6">
        {/* Name Field */}
        <div className="group">
          <label className="block text-sm font-semibold text-foreground mb-2 sm:mb-3 transition-colors group-focus-within:text-primary">
            {t('Name')}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
            placeholder={t("Your name")}
          />
        </div>

        {/* Email Field */}
        <div className="group">
          <label className="block text-sm font-semibold text-foreground mb-2 sm:mb-3 transition-colors group-focus-within:text-primary">
            {t('Email')}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            className={`w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-input border-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50 ${
              formData.email ? (isValidEmail ? 'border-green-500 focus:border-green-500' : 'border-red-500 focus:border-red-500') : 'border-border'
            }`}
            placeholder={t("your@email.com")}
          />
        </div>

        {/* Subject Field */}
        <div className="group">
          <label className="block text-sm font-semibold text-foreground mb-2 sm:mb-3 transition-colors group-focus-within:text-primary">
            {t('Subject')}
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
            placeholder={t("Project inquiry")}
          />
        </div>

        {/* Message Field */}
        <div className="group">
          <label className="block text-sm font-semibold text-foreground mb-2 sm:mb-3 transition-colors group-focus-within:text-primary">
            {t('Message')}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-input border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 resize-none hover:border-primary/50"
            placeholder={t("Your message here...")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={onSubmit}
          disabled={!formData.name || !isValidEmail || !formData.subject || !formData.message}
          className="cursor-pointer w-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg sm:rounded-xl bg-gradient-to-r from-[#800020] to-[#a82e3e] hover:from-[#660019] hover:to-[#8a2635] text-white font-bold hover:shadow-2xl hover:shadow-[#800020]/50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] group/btn"
        >
          {result ? (
            <>
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 sm:border-3 border-white border-t-transparent rounded-full animate-spin" />
              {t('Sending...')}
            </>
          ) : (
            <>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/btn:translate-x-1 transition-transform" />
              {t('Send Message')}
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="p-3 sm:p-4 text-sm sm:text-base rounded-lg sm:rounded-xl bg-green-500/20 border-2 border-green-500/50 text-green-400 text-center animate-fade-in font-medium">
            {t('Message sent successfully! I will get back to you soon.')}
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-3 sm:p-4 text-sm sm:text-base rounded-lg sm:rounded-xl bg-red-500/20 border-2 border-red-500/50 text-red-400 text-center animate-fade-in font-medium">
            {t('Error sending message. Please try again.')}
          </div>
        )}
      </div>
    </div>
  );
};