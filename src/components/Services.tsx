import { Settings, Link2, Key, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "ייצור נגררים Custom Made",
      copy: "מנגררים פתוחים ועד סגורים, לציוד כבד או לגנרטורים – אנחנו מתכננים ובונים את הנגרר המושלם בדיוק למידות ולצרכים שלכם.",
      icon: <Settings size={40} className="text-primary" />
    },
    {
      title: "התקנת ווי גרירה מורשית",
      copy: "מתקינים מורשים של ווי גרירה לכל סוגי הרכבים – החל מרכבים פרטיים ועד מסחריות ומשאיות. עבודה מדויקת, אסתטית ומהירה שכוללת את כל אישורי הרישוי הנדרשים כחוק.",
      icon: <Link2 size={40} className="text-primary" />
    },
    {
      title: "השכרת נגררים",
      copy: "צריכים נגרר למשימה נקודתית? אצלנו תמצאו צי נגררים חזקים, מתוחזקים ומוכנים לעבודה להשכרה קצרת טווח או ארוכת טווח.",
      icon: <Key size={40} className="text-primary" />
    },
    {
      title: "תיקונים, חלפים והעברת טסט",
      copy: "המעטפת המלאה לנגרר שלכם תחת קורת גג אחת: תיקוני חשמל, בלמים, החלפת סרנים וכפות ריתום, הכנה מקצועית והעברת טסט (רישוי שנתי).",
      icon: <Wrench size={40} className="text-primary" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl text-slate-900 font-black mb-4 inline-block relative">
            שירותי המוסך והייצור שלנו
            <span className="absolute -bottom-2 right-0 w-24 h-1 bg-gold rounded-full"></span>
          </h2>
          <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto font-medium">
            אנחנו מציעים מעטפת פתרונות מלאה לכל צרכי הגרירה והשינוע שלכם, עם דגש על בטיחות, איכות ועמידה בלוחות זמנים.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary/40 transition-all hover:-translate-y-2 group shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-bl-[100px] border-l border-b border-orange-100 transition-all group-hover:bg-orange-100/50 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-8 border border-orange-100 shadow-sm group-hover:border-primary/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {service.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
