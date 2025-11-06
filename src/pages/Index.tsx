import { Hero } from '@/components/Hero';
import { Testimonials } from '@/components/Testimonials';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { LanguageProvider } from '@/contexts/LanguageContext';
// import { Navbar } from '@/components/Navbar';
import Services  from '@/components/Services';
import { EmailButton } from '@/components/EmailButton';
import { Footer } from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Products from '@/components/Products';





const Index = () => {
  return (
      <LanguageProvider>
        <div className="min-h-screen">
          {/* <Navbar /> */}
          <Hero />
          <Services />
          <Products />
          <Testimonials />
          <ContactForm />
          <Footer />
          <WhatsAppButton />
          <EmailButton />
        </div>
      </LanguageProvider>
  );
};

export default Index;
