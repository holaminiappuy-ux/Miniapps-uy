import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DEMO_LINK, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                M
              </span>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Mini Apps UY
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium max-w-sm">
              Tu negocio, en una Mini App.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Una solución digital simple para mostrar tus productos o servicios, recibir pedidos y conectar con tus clientes desde un solo lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navegación
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#que-es" className="hover:text-emerald-400 transition-colors">
                  ¿Qué es una Mini App?
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-emerald-400 transition-colors">
                  Servicios & Funcionalidades
                </a>
              </li>
              <li>
                <a href="#rubros" className="hover:text-emerald-400 transition-colors">
                  Rubros que desarrollamos
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-emerald-400 transition-colors">
                  Demo de Pizzería
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-emerald-400 transition-colors">
                  Demo de Veterinaria
                </a>
              </li>
              <li>
                <a href="#bonificacion" className="hover:text-emerald-400 transition-colors">
                  Bonificación de lanzamiento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contacto directo
            </div>
            <div className="space-y-1 text-xs">
              <div className="text-slate-400">Canal oficial de atención:</div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{WHATSAPP_NUMBER}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Quiero mi demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Mini Apps UY. Todos los derechos reservados.
          </p>
          <p className="max-w-xl text-slate-500 text-[11px] leading-relaxed">
            Aviso de transparencia: Las demostraciones presentadas en esta página corresponden a prototipos de muestra desarrollados por Mini Apps UY para fines ilustrativos.
          </p>
        </div>
      </div>
    </footer>
  );
};
