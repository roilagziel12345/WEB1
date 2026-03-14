import { Facebook, MapPin, Phone, Star } from 'lucide-react';

export default function Gallery() {
  const catalogItems = [
    { id: 1, title: "הרכבת שלדות", desc: "חיזוק וריתוך שלדות לנגררים למקסימום כוח ועמידות.", image: "/gallery/1.jpg" },
    { id: 2, title: "התקנות בשטח", desc: "סיוע והתקנות של נגררים מקצועיים לשטח.", image: "/gallery/2.jpg" },
    { id: 3, title: "מובילי רכבים", desc: "נגררים מיועדים לחילוצים קלים וגרירת ציוד.", image: "/gallery/3.jpg" },
    { id: 4, title: "נגרר מסחרי", desc: "תכנון נגררים המותאמים אישית לצרכי העסק.", image: "/gallery/4.jpg" },
    { id: 5, title: "נגרר שטוח", desc: "יציבות מקסימלית על הכביש.", image: "/gallery/5.jpg" },
    { id: 6, title: "מוכנים למסירה", desc: "צי הנגררים שלנו מחכה לכם.", image: "/gallery/6.jpg" },
    { id: 7, title: "נגרר סגור לציוד", desc: "נגררים סגורים לאחסון מרבי ולציוד רגיש.", image: "/gallery/7.jpg" },
    { id: 10, title: "פרויקט מיוחד", desc: "התאמה מלאה של כפות ריתום וצמיגים.", image: "/gallery/10.jpg" },
    { id: 11, title: "ווי גרירה - מסחרי", desc: "התקנת ווי גרירה בהתאמה לתקנים מחמירים.", image: "/gallery/11.jpg" },
    { id: 12, title: "עבודות חילוץ", desc: "מבנה מאסיבי שמותאם לעבודות כבדות יומיומיות.", image: "/gallery/12.jpg" },
    { id: 16, title: "התקנת ווי גרירה - שברולט", desc: "הקפדה על איכות הפלסטיקה והחשמל ברכב.", image: "/gallery/16.jpg" },
    { id: 19, title: "נגררי אלומיניום", desc: "קלים וסופר-חזקים למשימות לא שגרתיות.", image: "/gallery/19.jpg" },
    { id: 20, title: "טסטים ורישוי", desc: "השבחת נגרר ישן עד למעבר בטיחותי של רישוי שנתי.", image: "/gallery/20.jpg" },
    { id: 22, title: "מסירה מרוכזת", desc: "אספקת ציי נגררים למפעלים וחברות ענק.", image: "/gallery/22.jpg" },
    { id: 23, title: "תוצרת מקומית", desc: "כלל הייצור שלנו מתבצע בישראל תחת בקרת איכות קפדנית.", image: "/gallery/23.jpg" },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== "https://images.unsplash.com/photo-1542385317-06eb183d2315?q=80&w=800&auto=format&fit=crop") {
      target.src = "https://images.unsplash.com/photo-1542385317-06eb183d2315?q=80&w=800&auto=format&fit=crop";
    }
  };

  return (
    <section id="gallery" className="py-24 bg-orange-50 relative border-b border-orange-200">
      
      {/* Catalog Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F97316 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 bg-white p-8 rounded-3xl shadow-sm border border-orange-100">
          <div>
            <h2 className="text-4xl text-slate-900 font-black mb-4 inline-block relative">
              קטלוג העבודות שלנו
              <span className="absolute -bottom-2 right-0 w-24 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-slate-600 text-lg mt-6 font-medium max-w-2xl">
              תיק עבודות נבחר המציג את איכות הגימור, המקצועיות בהתקנות והדיוק בתכנון הנגררים שלנו. דפדפו בין שלל הפרויקטים שהשלמנו לאחרונה.
            </p>
          </div>
          
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-50 text-[#1877F2] border border-blue-200 hover:bg-[#1877F2] hover:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap">
            <Facebook size={24} fill="currentColor" stroke="none" />
            צפו בעוד עבודות בפייסבוק
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all overflow-hidden group flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={item.image}
                  onError={handleImageError}
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Badge - only on few popular ones for visual variety */}
                {(item.id % 3 === 0) && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-orange-100 shadow text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Star size={14} className="fill-gold text-gold" />
                    נמסר ללקוח!
                  </div>
                )}
              </div>

              {/* Content Panel */}
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-stone-50/50">
                <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 mb-6 flex-grow leading-relaxed">{item.desc}</p>
                
                <div className="pt-4 border-t border-stone-200 flex justify-between items-center mt-auto">
                   <a href="tel:0542170090" className="flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
                     <Phone size={16} />
                     הזמן עכשיו
                   </a>
                   <span className="text-stone-400 text-sm flex items-center gap-1 font-medium bg-white px-2 py-1 rounded shadow-sm border border-stone-100">
                     <MapPin size={14} className="text-stone-400" />
                     אור יהודה
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
