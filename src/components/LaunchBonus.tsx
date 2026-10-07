import React from 'react';
import { Gift, ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { WHATSAPP_DEMO_LINK, WHATSAPP_NUMBER } from '../data/content';

export const LaunchBonus: React.FC = () => {
  return (
    <section id="bonificacion" className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/50 to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl overflow-hidden border border-slate-800">
            {/* Ambient lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Gift className="w-4 h-4 text-emerald-400" />
                <span>Oportunidad para primeros comercios</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance leading-tight">
                Bonificación especial de lanzamiento 🎁
              </h2>

              {/* Supporting exact text */}
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed text-balance">
                Estamos comenzando este nuevo proyecto y los primeros comercios que se sumen podrán acceder a una bonificación especial por tiempo limitado.
              </p>

              {/* Benefits list (without prices/percentages) */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-sm text-slate-200">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 space-y-1">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Prioridad de entrega</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Tu demo lista rápidamente para que comiences a probarla.
                  </p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 space-y-1">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Acompañamiento directo</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Te asistimos personalmente en la carga de tus productos iniciales.
                  </p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 space-y-1">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Beneficio exclusivo</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Condiciones preferenciales de inicio para los primeros comercios.
                  </p>
                </div>
              </div>

              {/* Single primary action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all active:scale-[0.98] group"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950/20" />
                  <span>Quiero mi demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Escríbenos por WhatsApp al {WHATSAPP_NUMBER}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
