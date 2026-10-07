import React, { useState } from 'react';
import {
  MessageCircle,
  QrCode,
  Smartphone,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { WHATSAPP_DEMO_LINK, WHATSAPP_NUMBER } from '../data/content';

export const Hero: React.FC = () => {
  const [activePreviewTab, setActivePreviewTab] = useState<'gastronomia' | 'veterinaria'>('gastronomia');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/60">
      {/* Subtle background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-100/40 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Soluciones digitales para pequeños comercios y emprendimientos</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-display text-balance leading-[1.12]">
              Tu negocio, en una <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">Mini App</span>.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl text-balance">
              Una solución digital simple para mostrar tus productos o servicios, recibir pedidos y conectar con tus clientes desde un solo lugar.
            </p>

            {/* Benefit highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cero descargas en tiendas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pedidos directos a WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Código QR para tu local</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={WHATSAPP_DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Quiero mi demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#demos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl shadow-xs transition-colors"
              >
                <Smartphone className="w-4 h-4 text-slate-500" />
                <span>Ver demos de muestra</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Atención rápida por WhatsApp al {WHATSAPP_NUMBER}</span>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup Preview */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              {/* Outer Phone Shell */}
              <div className="relative rounded-[40px] p-3 bg-slate-900 shadow-2xl ring-1 ring-slate-800">
                {/* Speaker pill notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800 mr-2" />
                  <div className="w-8 h-1 rounded-full bg-slate-800" />
                </div>

                {/* Inner Screen */}
                <div className="relative rounded-[32px] overflow-hidden bg-white text-slate-900 border border-slate-100 flex flex-col h-[560px]">
                  {/* Phone Status Bar */}
                  <div className="pt-4 pb-2 px-5 flex items-center justify-between text-[11px] font-semibold text-slate-500 bg-white border-b border-slate-100">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span>5G</span>
                      <div className="w-4 h-2 border border-slate-400 rounded-xs flex items-center p-0.5">
                        <div className="w-2 h-1 bg-slate-700 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* App Header in Phone */}
                  <div className="p-3 bg-slate-50 border-b border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          M
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 leading-tight">
                            {activePreviewTab === 'gastronomia' ? 'Pizzería Artesanal' : 'Veterinaria & Pet Shop'}
                          </div>
                          <div className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>Abierto · Pedidos activos</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-1.5 rounded-md bg-white border border-slate-200 shadow-2xs text-slate-600">
                        <QrCode className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Quick Rubro Switcher */}
                    <div className="mt-2.5 grid grid-cols-2 gap-1 p-0.5 bg-slate-200/70 rounded-lg text-[11px] font-medium">
                      <button
                        type="button"
                        onClick={() => setActivePreviewTab('gastronomia')}
                        className={`py-1 rounded-md transition-all ${
                          activePreviewTab === 'gastronomia'
                            ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Gastronomía
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePreviewTab('veterinaria')}
                        className={`py-1 rounded-md transition-all ${
                          activePreviewTab === 'veterinaria'
                            ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Veterinaria
                      </button>
                    </div>
                  </div>

                  {/* Phone Scroll Content */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 demo-scrollbar bg-slate-50/50">
                    {/* Promo Banner inside Mini App */}
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xs">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">
                        Promoción del día
                      </div>
                      <div className="text-xs font-bold mt-0.5">
                        {activePreviewTab === 'gastronomia'
                          ? 'Combo 2 Pizzas + Bebida Familiar'
                          : 'Plan Vacunación Anual con 15% OFF'}
                      </div>
                      <div className="text-[10px] text-emerald-100 mt-0.5">
                        {activePreviewTab === 'gastronomia'
                          ? 'Válido para pedidos por WhatsApp'
                          : 'Consulta disponibilidad en el día'}
                      </div>
                    </div>

                    {/* Product / Service Sample Card */}
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex gap-2.5">
                        <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 font-medium text-xs">
                          {activePreviewTab === 'gastronomia' ? '🍕' : '🩺'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">
                            {activePreviewTab === 'gastronomia' ? 'Margherita Especial' : 'Consulta Veterinaria'}
                          </div>
                          <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                            {activePreviewTab === 'gastronomia'
                              ? 'Mozzarella fresca, albahaca y oliva'
                              : 'Revisión general y control de peso'}
                          </div>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 font-mono-numbers">
                              {activePreviewTab === 'gastronomia' ? '$ 490' : '$ 650'}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                              + Agregar
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Sample Card */}
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex gap-2.5">
                        <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 font-medium text-xs">
                          {activePreviewTab === 'gastronomia' ? '🥟' : '✂️'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">
                            {activePreviewTab === 'gastronomia' ? 'Empanada Criolla' : 'Peluquería y Baño'}
                          </div>
                          <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                            {activePreviewTab === 'gastronomia'
                              ? 'Carne cortada a cuchillo y especias'
                              : 'Corte higiénico, baño y uñas'}
                          </div>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 font-mono-numbers">
                              {activePreviewTab === 'gastronomia' ? '$ 90' : '$ 750'}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                              + Agregar
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Action Preview inside Mockup */}
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/90 text-emerald-950">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>Pedido directo a WhatsApp</span>
                      </div>
                      <p className="text-[10px] text-emerald-700 mt-1 leading-snug">
                        El cliente envía su pedido completo y tú recibes los detalles listos para confirmar.
                      </p>
                    </div>
                  </div>

                  {/* Fixed Bottom Bar in Mockup */}
                  <div className="p-3 bg-white border-t border-slate-200">
                    <a
                      href={WHATSAPP_DEMO_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Pedir por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating floating label sticker */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 shadow-lg rounded-xl p-2.5 flex items-center gap-2 text-xs font-medium text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Vista previa interactiva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
