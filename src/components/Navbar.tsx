import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DEMO_LINK } from '../data/content';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-slate-900 font-display flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-emerald-700 transition-colors">
              M
            </span>
            <span>Mini Apps UY</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#que-es" className="hover:text-emerald-700 transition-colors">
              ¿Qué es?
            </a>
            <a href="#servicios" className="hover:text-emerald-700 transition-colors">
              Servicios
            </a>
            <a href="#rubros" className="hover:text-emerald-700 transition-colors">
              Rubros
            </a>
            <a href="#demos" className="hover:text-emerald-700 transition-colors">
              Demos de muestra
            </a>
            <a href="#bonificacion" className="hover:text-emerald-700 transition-colors">
              Lanzamiento
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-[0.98]"
            >
              <span>Quiero mi demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <a
            href="#que-es"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md"
          >
            ¿Qué es una Mini App?
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md"
          >
            Servicios y funciones
          </a>
          <a
            href="#rubros"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md"
          >
            Rubros
          </a>
          <a
            href="#demos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md"
          >
            Demos de muestra
          </a>
          <a
            href="#bonificacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 rounded-md"
          >
            Bonificación de lanzamiento
          </a>
          <div className="pt-2">
            <a
              href={WHATSAPP_DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
            >
              <span>Quiero mi demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
