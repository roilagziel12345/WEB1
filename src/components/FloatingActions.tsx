import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const whatsappNumber = "972542170090"; // Using standard wa.me format
  const wpMessage = encodeURIComponent("שלום אריה, אשמח לקבל הצעת מחיר.");
  const wpLink = `https://wa.me/${whatsappNumber}?text=${wpMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Action */}
      <a 
        href={wpLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      
      {/* Phone Action */}
      <a 
        href="tel:0542170090"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
