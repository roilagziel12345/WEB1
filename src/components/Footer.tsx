import { MapPin, Phone, Clock, Facebook, Instagram, Wrench, Navigation } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-6">
              אריה <span className="text-primary">נגררים</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-sm">
              המומחים שלכם לייצור נגררים בהתאמה אישית, התקנת ווי גרירה ושירותי מוסך באור יהודה. מקצועיות ואמינות ללא פשרות.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm border border-orange-100">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm border border-orange-100">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm border border-orange-100">
                <Wrench size={20} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">בטיפול אישי - בואו נדבר</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <MapPin className="text-primary mt-1" size={24} />
                <div>
                  <p className="text-slate-900 font-bold">המוסך שלנו</p>
                  <p className="text-slate-600">רח' היוזמים 3, אור יהודה (מיקוד 6037310)</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Phone className="text-primary mt-1" size={24} />
                <div>
                  <p className="text-slate-900 font-bold">ייעוץ וקביעת תור</p>
                  <a href="tel:0542170090" className="text-slate-600 hover:text-primary transition-colors font-bold text-lg">054-2170090</a>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Clock className="text-primary mt-1" size={24} />
                <div>
                  <p className="text-slate-900 font-bold">שעות פעילות</p>
                  <p className="text-slate-600">ימים א' - ה': 07:00 - 17:00</p>
                  <p className="text-red-500 font-medium">ימי שישי ושבת: סגור</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location Map & Waze */}
          <div className="h-full min-h-[300px] flex flex-col gap-4">
            <div className="flex-grow bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.7226671045233!2d34.8636737!3d32.0232537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4d9c72750e3%3A0xa64b4c7ca0ce3f03!2zSGEtWW96bWltIFN0IDMsIE9yIFllaHVkYQ!5e0!3m2!1sen!2sil!4v1710500000000!5m2!1sen!2sil" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '260px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת הגעה לאריה נגררים"
              ></iframe>
            </div>
            
            <a 
              href="https://waze.com/ul?q=היוזמים 3 אור יהודה" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#33ccff] hover:bg-[#2bb4e0] text-white font-bold rounded-xl transition-colors shadow-sm active:scale-95"
            >
              <Navigation size={20} className="fill-white" />
              נווט אלינו ישירות עם Waze
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-slate-500 font-medium text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} אריה - א.א נגררים. כל הזכויות שמורות.</p>
          <p>נבנה עבור עסקים מובילים</p>
        </div>

      </div>
    </footer>
  );
}
