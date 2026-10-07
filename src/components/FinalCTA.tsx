import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_DEMO_LINK, WHATSAPP_NUMBER } from '../data/content';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <span>Da el primer paso hoy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance leading-tight">
            ¿Listo para ver cómo luciría la Mini App de tu comercio?
          </h2>

          <p className="text-lg text-slate-300 font-normal leading-relaxed text-balance">
            Escríbenos, cuéntanos qué vendes o qué servicios ofreces, y preparamos una demostración pensada especialmente para tu negocio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sin compromiso de compra</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Atención personalizada por WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Acceso a la bonificación de lanzamiento</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg transition-all active:scale-[0.98] group"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950/20" />
              <span>Quiero mi demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="pt-2 text-xs text-slate-400">
            WhatsApp directo: <span className="text-emerald-400 font-semibold">{WHATSAPP_NUMBER}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
