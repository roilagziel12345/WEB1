import { MessageCircle, PhoneCall, Facebook, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const whatsappNumber = "972542170090";
  const wpMessage = encodeURIComponent("שלום אריה, מצאתי אותך דרך האתר. אשמח לקבל הצעת מחיר.");
  const wpLink = `https://wa.me/${whatsappNumber}?text=${wpMessage}`;

  const images = [
    "/gallery/14.jpg",
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/4.jpg",
    "/gallery/7.jpg",
    "/gallery/11.jpg",
    "/gallery/19.jpg",
    "/gallery/22.jpg",
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
  const prevImage = () => setCurrentIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);

  const checkIsOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();
    if (day >= 0 && day <= 4) return hour >= 8 && hour < 17;
    if (day === 5) return hour >= 8 && hour < 13;
    return false;
  };
  const isOpen = checkIsOpen();

  return (
    <section id="hero" className="relative bg-orange-50 overflow-hidden border-b border-orange-200">
      
      {/* Decorative background shape */}
      <div className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-3xl z-0 pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-sm text-sm font-bold w-fit mt-8 lg:mt-0 mb-8 transition-colors ${isOpen ? 'text-primary' : 'text-slate-500'}`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`}></span>
              {isOpen ? 'המוסך שלנו פתוח עכשיו לשירותכם מאור יהודה' : 'המוסך סגור כעת. נשמח לשרתכם מחר בשעות הפעילות'}
            </div>

            <h1 className="text-4xl tracking-tight font-black text-slate-900 sm:text-5xl md:text-6xl leading-[1.1] mb-6">
               המומחים מספר אחת שלכם לנגררים <br className="hidden md:block"/>
              <span className="text-primary relative inline-block mt-2">
                ומוסך מורשה
                <svg className="absolute -bottom-2 w-full h-3 text-gold/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-700 mb-10 max-w-xl font-medium leading-relaxed">
              הבית שלכם לייצור נגררים Custom Made, התקנת ווי גרירה לכל סוגי הרכבים ושירות מוסך מלא והעברת טסטים. הכל תחת קורת גג אחת עם מקצועיות של מעל 20 שנה.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:0542170090"
                className="flex flex-1 items-center justify-center px-8 py-4 rounded-xl text-white bg-primary hover:bg-primary-hover font-bold text-lg transition-all shadow-md hover:shadow-lg gap-2 active:scale-95"
              >
                <PhoneCall size={24} />
                חייגו אלינו עכשיו
              </a>
              <a
                href={wpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center px-8 py-4 rounded-xl text-slate-700 bg-white border-2 border-orange-200 hover:border-green-500 hover:text-green-600 font-bold text-lg transition-all shadow-sm gap-2 active:scale-95"
              >
                <MessageCircle size={24} />
                שלחו לנו הודעה בוואטסאפ
              </a>
            </div>

            <div className="flex items-center gap-4 text-slate-500 font-medium bg-white/50 p-4 rounded-xl border border-orange-100">
              <span className="text-slate-800 font-bold">עקבו אחרינו:</span>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#1877F2] hover:text-[#1877f2]/80 hover:underline bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow">
                <Facebook size={20} fill="currentColor" stroke="none" />
                א.א נגררים בפייסבוק
              </a>
            </div>

          </div>

          <div className="order-1 lg:order-2 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square max-w-2xl mx-auto">
            {/* Catalog floating image effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-white rounded-3xl transform rotate-2 lg:rotate-3 scale-[1.02] lg:scale-105 z-0 border border-orange-200 shadow-sm"></div>
            
            {/* Image Slider Container */}
            <div className="relative z-10 w-full h-full rounded-3xl shadow-xl border-4 border-white overflow-hidden bg-slate-100 group">
              {images.map((src, index) => (
                <img
                  key={src}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIdx ? 'opacity-100' : 'opacity-0'}`}
                  src={src}
                  alt={`אריה נגררים עבודה ${index + 1}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542385317-06eb183d2315?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              ))}
              
              {/* Slider Controls */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20 backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all z-20 backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slider Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentIdx ? 'w-8 bg-primary' : 'w-2 bg-white/70 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Review Badge */}
            <div className="absolute -bottom-6 -left-6 lg:-left-10 z-30 bg-white p-4 lg:p-5 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-4 animate-bounce hover:animate-none">
               <div className="bg-orange-50 p-2 lg:p-3 rounded-full">
                 <Star className="text-gold fill-gold" size={24} />
               </div>
               <div>
                 <p className="font-bold text-slate-900 text-sm lg:text-base">5.0 דירוג לקוחות</p>
                 <p className="text-xs lg:text-sm text-slate-500">שירות, אמינות ומחיר</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
