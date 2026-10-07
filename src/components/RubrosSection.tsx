import React, { useState } from 'react';
import {
  Store,
  Pizza,
  HeartPulse,
  Coffee,
  ShoppingBag,
  Shirt,
  Scissors,
  Sparkles,
  Rocket,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { RUBROS_LIST, WHATSAPP_DEMO_LINK } from '../data/content';

const rubroIcons: Record<string, React.ReactNode> = {
  pizzerias: <Pizza className="w-5 h-5" />,
  veterinarias: <HeartPulse className="w-5 h-5" />,
  cafeterias: <Coffee className="w-5 h-5" />,
  almacenes: <Store className="w-5 h-5" />,
  'tiendas-ropa': <Shirt className="w-5 h-5" />,
  barberias: <Scissors className="w-5 h-5" />,
  belleza: <Sparkles className="w-5 h-5" />,
  emprendedores: <Rocket className="w-5 h-5" />,
  otros: <ShoppingBag className="w-5 h-5" />,
};

export const RubrosSection: React.FC = () => {
  const [selectedRubroId, setSelectedRubroId] = useState(RUBROS_LIST[0].id);

  const selectedRubro = RUBROS_LIST.find((r) => r.id === selectedRubroId) || RUBROS_LIST[0];

  return (
    <section id="rubros" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Adaptabilidad
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display text-balance">
            Desarrollamos soluciones para diversos rubros
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Cada comercio tiene su propia dinámica. Personalizamos la estructura de la Mini App para que se ajuste exactamente a tu forma de atender y vender.
          </p>
        </div>

        {/* Rubro Tabs / Selector */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {RUBROS_LIST.map((rubro) => {
            const isSelected = rubro.id === selectedRubroId;
            return (
              <button
                key={rubro.id}
                type="button"
                onClick={() => setSelectedRubroId(rubro.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                <span className={isSelected ? 'text-emerald-400' : 'text-slate-500'}>
                  {rubroIcons[rubro.id]}
                </span>
                <span>{rubro.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for the Selected Rubro */}
        <div className="mt-8 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span>Rubro seleccionado</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-semibold">{selectedRubro.name}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                {selectedRubro.name}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed">
                {selectedRubro.tagline}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Funcionalidades clave recomendadas:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedRubro.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Aplica para: </span>
                <span>{selectedRubro.exampleType}</span>
              </div>

              <div className="pt-3">
                <a
                  href={WHATSAPP_DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quiero mi demo para {selectedRubro.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Rubro Visual Highlight */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      {rubroIcons[selectedRubro.id]}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Configuración sugerida</div>
                      <div className="text-[10px] text-slate-500">Diseñado para la atención ágil</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono-numbers px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold">
                    100% Adaptable
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70 h-44 relative flex items-center justify-center">
                  <img
                    src="/src/assets/images/demo_coffee_cafe_1791392229618.jpg"
                    alt="Ejemplo de presentación comercial"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-4">
                    <p className="text-xs text-white font-medium leading-snug">
                      Tus productos y servicios fotografiados y organizados de forma atractiva para tus clientes.
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/60 leading-relaxed">
                  💡 ¿Tu negocio tiene una carta o lista de precios extensa? La Mini App organiza todo por categorías simples con buscador para que nadie se pierda.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
