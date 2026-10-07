import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/content';

export const WhatsAppFloat: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 pointer-events-none">
      {/* Subtle notification prompt for desktop/mobile */}
      {!tooltipDismissed && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200/90 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-semibold text-slate-800">
            ¿Consultas? Escríbenos por WhatsApp
          </span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-xl transition-all duration-200 group ring-4 ring-emerald-500/20"
        title={`Chatear por WhatsApp al ${WHATSAPP_NUMBER}`}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white/20" />
        <span className="hidden sm:inline-block font-bold">Quiero mi demo</span>
      </a>
    </div>
  );
};
