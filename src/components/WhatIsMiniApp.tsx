import React from 'react';
import {
  Smartphone,
  Zap,
  MessageCircle,
  Percent,
  Layers,
  CheckCircle,
  QrCode,
  ArrowRight,
} from 'lucide-react';
import { WHATSAPP_DEMO_LINK } from '../data/content';

export const WhatIsMiniApp: React.FC = () => {
  return (
    <section id="que-es" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Concepto & Tecnología
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display text-balance">
            ¿Qué es una Mini App y por qué es ideal para tu comercio?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Una Mini App es una aplicación web liviana y visual, diseñada especialmente para abrirse al instante desde un link o código QR, sin necesidad de que tus clientes descarguen nada de la tienda de aplicaciones.
          </p>
        </div>

        {/* 4 Key Pillars Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-300 transition-colors shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-5">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Cero descargas
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Tus clientes no tienen que ocupar espacio en su celular ni recordar contraseñas. Un toque en el enlace o un escaneo del QR y ya están navegando.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Abre en cualquier navegador</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-300 transition-colors shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Mucho mejor que un PDF
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Olvídate de enviar archivos PDF pesados o fotos de menús ilegibles. La Mini App es interactiva, veloz y se adapta al tamaño exacto de la pantalla.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Experiencia 100% moderna</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-300 transition-colors shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Pedidos claros a WhatsApp
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                El cliente suma sus productos al carrito y al presionar un botón recibes el detalle completo: productos, cantidades, aclaraciones y total exacto.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Menos idas y vueltas de texto</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-300 transition-colors shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-5">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Venta directa sin comisiones
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                El contacto es directo con tu cliente. No pagas comisiones por cada plato o producto vendido en aplicaciones de intermediación.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Tus clientes son tuyos</span>
            </div>
          </div>
        </div>

        {/* Practical Flow Box */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Paso a paso simple
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                Cómo interactúan tus clientes con tu Mini App
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-3">
                <div className="space-y-1.5">
                  <div className="text-emerald-400 font-bold font-mono-numbers text-sm">
                    01. Acceso
                  </div>
                  <div className="font-semibold text-sm">Escanean tu QR o tocan tu link</div>
                  <p className="text-xs text-slate-300">
                    En tu perfil de Instagram, estado de WhatsApp, o un sticker QR en tu mostrador.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="text-emerald-400 font-bold font-mono-numbers text-sm">
                    02. Elección
                  </div>
                  <div className="font-semibold text-sm">Exploran y eligen</div>
                  <p className="text-xs text-slate-300">
                    Ven fotos, precios, promociones y arman su selección con total comodidad.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="text-emerald-400 font-bold font-mono-numbers text-sm">
                    03. Contacto
                  </div>
                  <div className="font-semibold text-sm">Te llega a WhatsApp</div>
                  <p className="text-xs text-slate-300">
                    Recibes el mensaje preparado listo para confirmar método de pago y entrega.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href={WHATSAPP_DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <span>Quiero mi demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 mt-2">
                Consulta gratuita y personalizada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
