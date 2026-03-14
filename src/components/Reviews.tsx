import { Star, StarHalf } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "אלון ר.",
      source: "מתוך איזי",
      rating: 5,
      text: "הזמנתי נגרר סגור מותאם אישית. עבודה פשוט מדהימה, מדויקת ועמידה. רואים את המקצועיות בכל ריתוך. ממליץ בחום!"
    },
    {
      id: 5,
      name: "דניאל מ.",
      source: "לקוח ממליץ",
      rating: 5,
      text: "הזמנתי מאריה נגרר סגור לציוד הגברה. הבן אדם פשוט אומן! העבודה יצאה מדויקת, רמת הגימור גבוהה, החומרים הכי טובים שיש. שווה כל שקל."
    },
    {
      id: 2,
      name: "משה כ.",
      source: "מתוך דפי זהב",
      rating: 4.5,
      text: "הגעתי להתקנת וו גרירה. שירות מהיר, מקצועי ומחיר הוגן. טיפלו בהכל כולל האישורים אבל חיכיתי קצת בתור. בסך הכל פשוט תענוג לעבוד איתם."
    },
    {
      id: 6,
      name: "גיא ס.",
      source: "התקנת וו גרירה",
      rating: 5,
      text: "הגעתי לא.א נגררים באור יהודה להתקין וו גרירה לרכב פרטי. קיבלו אותי בחיוך, העבודה נעשתה בצורה נקייה בלי לפגוע בפלסטיקה של הרכב, ודאגו לי לניירת והרישוי."
    },
    {
      id: 3,
      name: "עידן פ.",
      source: "לקוח חוזר",
      rating: 4,
      text: "תיקנו לי נגרר ישן שעשה בעיות חשמל. מצאו את התקלה מהר מאוד ותיקנו אותה כמו שצריך. מחיר הוגן מאוד. קצת רחוק לי אבל שווה."
    },
    {
      id: 7,
      name: "אבי כ.",
      source: "שירות טסטים",
      rating: 5,
      text: "כל שנה אני מגיע לאריה להעביר את העגלה טסט. עושים בדיקה מקיפה, מסדרים מה שצריך על המקום, ומעבירים רישוי. חוסכים לי המון זמן וכאב ראש. אמין וישר."
    },
    {
      id: 4,
      name: "אביב ג.",
      source: "מתוך איזי",
      rating: 5,
      text: "אין עליהם! שירות אדיב, מקצועיים בטירוף, והנגרר שקניתי מהם סוס עבודה."
    },
    {
      id: 8,
      name: "יצחק ד.",
      source: "תיקונים וחיזוקים",
      rating: 4.5,
      text: "אריה הוא איש מקצוע מהדור הישן, טופ. הגעתי עם עגלה ישנה שהייתה צריכה השחזה וריתוך לשלדה עבודה יסודית, לא מעגלים פינות ומחיר הוגן."
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={20} className="fill-gold text-gold" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalf key={i} size={20} className="fill-gold text-gold" />);
      } else {
        stars.push(<Star key={i} size={20} className="text-slate-300 fill-slate-100" />);
      }
    }
    return stars;
  };

  return (
    <section id="reviews" className="py-24 bg-surface relative border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white border border-stone-200 rounded-full mb-8 font-bold text-stone-600 shadow-sm transition-all hover:shadow-md">
            דירוג ממוצע אצלנו: 4.8 <Star className="fill-gold text-gold" size={18} /> מתוך המון ביקורות שלנו  ברחבי הרשת 
          </div>
          
          <h2 className="text-4xl text-stone-900 font-black mb-4 inline-block relative px-4">
            מה הלקוחות שלנו אומרים?
            <span className="absolute -bottom-3 right-1/2 translate-x-1/2 w-24 h-1.5 bg-primary rounded-full"></span>
          </h2>
          
          <p className="text-stone-500 text-lg mt-8 font-medium max-w-2xl mx-auto">
            אנחנו גאים לעבוד בשקיפות מלאה מול הלקוחות שלנו באור יהודה והסביבה.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-2xl border border-stone-200 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-xl flex flex-col shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1">
                  {renderStars(review.rating)}
                </div>
                <div className="text-primary font-black text-2xl opacity-20 group-hover:opacity-10 transition-opacity">
                  "{ " " }
                </div>
              </div>
              
              <p className="text-stone-700 mb-8 leading-relaxed text-lg flex-grow font-medium relative z-10">
                {review.text}
              </p>
              
              <div className="mt-auto border-t border-stone-100 pt-5 flex justify-between items-end">
                <div>
                  <p className="text-stone-900 font-bold text-lg">{review.name}</p>
                  <p className="text-primary text-sm font-medium bg-orange-50 px-2 py-1 rounded inline-block mt-1">{review.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
