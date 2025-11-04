import { Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from "@/contexts/LanguageContext";

export const EmailButton = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const email = 'Saleh@C4Rplatform.com';
  const subject = encodeURIComponent('Car Rental Inquiry');
  const body = encodeURIComponent('Hello! I would like to inquire about car rental services.');

  return (
     <a
      href={`mailto:${email}?subject=${subject}&body=${body}`}
      className="group fixed bottom-8 left-8 z-50"
      aria-label="Contact us via Email"
    >
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 animate-pulse transition-all duration-300" />
      
      {/* Main Button */}
      <div className={`relative p-5 rounded-full shadow-2xl group-hover:scale-110 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 group-hover:shadow-[0_0_40px_rgba(147,51,234,0.8)]'
          : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]'
      }`}>
        
        {/* Animated Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
        
        {/* Email Icon */}
        <Mail className="w-9 h-9 text-white relative z-10 group-hover:-rotate-12 transition-transform duration-300" strokeWidth={2} />

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce shadow-lg">
          !
        </div>
      </div>

      {/* Tooltip */}
      <div 
        className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl backdrop-blur-md border opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none ${
          theme === 'dark'
            ? 'bg-slate-800/90 text-white border-slate-700 shadow-xl'
            : 'bg-white/90 text-slate-900 border-gray-200 shadow-xl'
        }`}
      >
        <span className="font-semibold text-sm">📧{t('Email us!')}</span>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-inherit border-l border-b" />
      </div>
    </a>
  );
};