import { useLanguage } from "@/contexts/LanguageContext";
import partner1 from "@/assets/p-1.jpeg";
import partner2 from "@/assets/p-2.jpeg";
import partner3 from "@/assets/p-3.jpeg";
import partner4 from "@/assets/p-4.jpeg";
import { Car, Instagram, Twitter } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const partners = [partner1, partner2, partner3, partner4];

export const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-black dark:text-white py-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-12">
          {/* Logo & Name */}
          <div className="flex items-center gap-3 group cursor-pointer">
             <img src="/apple-touch-icon.png" alt="logo" className="w-24 h-20 rounded-xl" />
           
          </div>

          {/* Description */}
          <div
            className="flex flex-col items-center gap-4 text-center max-w-3xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t(
                "Empower your car rental business and take self-drive travel experience to the next level with the Caren Car Rental Platform. Check out our offering for independent car rentals, RV and campervan rentals and online resellers and OTAs."
              )}
            </p>
          </div>

         {/* Partners Carousel - Static Version */}
<div
  className="w-full max-w-full overflow-hidden"
  style={{ animationDelay: "0.2s" }}
>
  <h2 className="font-bold text-center text-3xl mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    {t("Our Partners")}
  </h2>
  <div className="relative">
    <div className="flex gap-8 justify-center flex-wrap">
      {partners.map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0"
        >
          <div className="relative">
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="relative h-32 w-24 md:h-40 md:w-32 object-contain rounded-2xl border-2 border-border/50 bg-card/50 backdrop-blur-sm p-3 shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



          {/* Quick Links */}
          <div
            className="w-full max-w-4xl animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col gap-6 items-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 shadow-xl">
              <h3 className="font-bold text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("Quick Links")}
              </h3>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <a
                  href="#About"
                  className="relative text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 group"
                >
                  {t("about")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href="#services"
                  className="relative text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 group"
                >
                  {t("Services")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href="#testimonials"
                  className="relative text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 group"
                >
                  {t("Testimonials")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href="#contact"
                  className="relative text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 group"
                >
                  {t("contact")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div
            className="flex gap-6 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://x.com/C4R_Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://www.instagram.com/C4R_Platform/#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://www.tiktok.com/@C4R.Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-gradient-to-br from-gray-900 to-black text-white hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Policies Links */}
          <div
            className="flex items-center justify-center gap-6 mt-4 animate-fade-in"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300"
            >
              {t("Terms & Conditions") || "الشروط والأحكام"}
            </a>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-red-500 hover:text-red-600 transition-all duration-300"
            >
              {t("Privacy Policy") || "سياسة الخصوصية"}
            </a>
          </div>

          {/* reCAPTCHA Notice */}
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center mt-2 animate-fade-in">
            This site is protected by reCAPTCHA and the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary dark:hover:text-accent transition-colors duration-300"
            >
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary dark:hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>

          {/* Copyright */}
          <p
            className="text-gray-500 dark:text-gray-400 text-lg font-semibold text-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            © {new Date().getFullYear()} C4R Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
