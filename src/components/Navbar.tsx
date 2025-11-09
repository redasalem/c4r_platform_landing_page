import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X, Car } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'About', key: 'about' },
    { id: 'services', key: 'services' },
     { id: 'Available cars', key: 'Available cars' },
    { id: 'testimonials', key: 'Testimonials' },
    { id: 'contact', key: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: 'https://x.com/C4R_Platform'
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      url: 'https://www.tiktok.com/@C4R.Platform'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: 'https://www.instagram.com/C4R_Platform/#'
    }
  ];

  return (
   <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-xl shadow-2xl shadow-purple-200/50 border-b border-purple-200 transition-all duration-500">
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <img src="/apple-touch-icon.png" alt="logo" className="w-44 h-16 rounded-xl" />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 text-gray-700 hover:text-gray-900"
          >
            <span className="relative z-10">{t(link.key)}</span>
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </a>
        ))}
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-white text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200 shadow-sm"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-white text-gray-700 hover:text-purple-600 hover:bg-purple-50 border border-gray-200 shadow-sm"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs sm:text-sm">{language.toUpperCase()}</span>
        </button>

        {/* Theme Toggle (only button logic) */}
        <button
          onClick={toggleTheme}
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-105 hover:rotate-180 ${
            theme === 'dark'
              ? 'text-yellow-400 hover:bg-yellow-500/20 border border-gray-200 shadow-sm'
              : 'bg-white text-purple-600 hover:bg-purple-50 border border-gray-200 shadow-sm'
          }`}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-white text-gray-700 hover:text-purple-600 border border-gray-200 shadow-sm"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
    <div className="px-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-purple-200">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setIsMobileMenuOpen(false)}
          className="block px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-gray-700 hover:text-gray-900 hover:bg-purple-50"
        >
          {t(link.key)}
        </a>
      ))}

      <div className="flex items-center justify-center gap-3 pt-4 border-t border-purple-200">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-purple-50 text-gray-600 hover:text-purple-600 hover:bg-purple-100"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
</nav>
  );
};
