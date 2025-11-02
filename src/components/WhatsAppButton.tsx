import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hello! I would like to inquire about car rental.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-hover hover:scale-110 transition-smooth animate-pulse-scale hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-9 h-9" />
    </a>
  );
};
