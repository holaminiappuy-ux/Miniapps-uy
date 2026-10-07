import React from 'react';
import {
  UtensilsCrossed,
  ShoppingBag,
  MessageCircle,
  QrCode,
  Sparkles,
  Award,
  MapPin,
  Share2,
  PhoneCall,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_LIST, WHATSAPP_DEMO_LINK } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  QrCode: <QrCode className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  PhoneCall: <PhoneCall className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export const ServicesGrid: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Funcionalidades & Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display text-balance">
            Todo lo que tu comercio necesita en un solo lugar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Diseñamos cada Mini App con las herramientas justas para potenciar la experiencia de tus clientes y agilizar tu operación diaria.
          </p>
        </div>

        {/* 10 Services in clean responsive grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => {
            const isFeatured = index === 2 || index === 0; // Highlight WhatsApp & Menús
            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md ${
                  isFeatured
                    ? 'border-emerald-300 ring-1 ring-emerald-200/50'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isFeatured
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {iconMap[service.iconName]}
                    </div>
                    {/* Clean unboxed metadata separator */}
                    <div className="text-xs text-slate-500 font-mono-numbers">
                      <span>0{index + 1}</span>
                      <span className="mx-1.5 text-slate-300">·</span>
                      <span className="font-sans font-medium text-slate-600">{service.badge}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-medium">
                  <span>Disponible para tu negocio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_DEMO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
          >
            <span>¿Tienes un requerimiento especial? Escríbenos por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
