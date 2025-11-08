import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PrivacyPolicy } from "./pages/privacy";
import { LanguageProvider } from "@/contexts/LanguageContext"; // لازم تضيف ده
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LuxuryPage } from "./pages/Luxury";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { EmailButton } from "./components/EmailButton";
import { SedanPage } from "./pages/Sedan";
import { EconmeyPage } from "./pages/Econmey";
import { JeepsPage } from "./pages/Jeeps";
import { TransportCarsPage } from "./pages/TransportCars";
import { BackupPage } from "./pages/Backup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <ThemeProvider>
    <LanguageProvider> {/* هنا حطينا الـ Provider */}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Navbar/>
         <WhatsAppButton />
          <EmailButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Luxury" element={<LuxuryPage />} />
            <Route path="/Sedan" element={<SedanPage />} />
             <Route path="/Econmey" element={<EconmeyPage />} />
               <Route path="/TransportCars" element={<TransportCarsPage />} />
                 <Route path="/Backup" element={<BackupPage />} />
                   <Route path="/Jeeps" element={<JeepsPage />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
