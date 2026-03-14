import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'ראשי', href: '#hero' },
    { name: 'שירותים', href: '#services' },
    { name: 'עבודות בשטח', href: '#gallery' },
    { name: 'המלצות', href: '#reviews' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-black text-slate-800 tracking-tight">
              אריה <span className="text-primary">נגררים</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 flex-row-reverse">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-primary transition-colors font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Top Phone Desktop */}
          <div className="hidden md:flex items-center">
            <a href="tel:0542170090" className="text-xl font-bold text-primary flex items-center gap-2 hover:text-primary-hover transition-colors bg-orange-50 px-4 py-2 rounded-full">
              <Phone size={20} />
              054-2170090
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a 
               href="tel:0542170090" 
               className="block mt-4 px-3 py-3 text-base font-bold text-white bg-primary rounded-md text-center"
            >
              חייגו עכשיו: 054-2170090
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
