import React, { useState } from 'react';
import {
  HeartPulse,
  ShoppingBag,
  MessageCircle,
  Clock,
  MapPin,
  Sparkles,
  Phone,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { WHATSAPP_DEMO_LINK, WHATSAPP_NUMBER } from '../data/content';

interface VetService {
  id: string;
  name: string;
  duration: string;
  description: string;
  badge?: string;
}

interface VetProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

const VET_SERVICES: VetService[] = [
  {
    id: "s1",
    name: "Consulta Clínica General",
    duration: "30 min",
    description: "Evaluación completa de salud, peso, temperatura, ojos, oídos y ritmo cardíaco de tu mascota.",
    badge: "Esencial",
  },
  {
    id: "s2",
    name: "Plan Vacunación & Desparasitación",
    duration: "20 min",
    description: "Aplicación de vacunas sextuple, antirrábica y control parasitario interno y externo con libreta sanitaria.",
    badge: "Preventivo",
  },
  {
    id: "s3",
    name: "Peluquería Canina & Baño Medicado",
    duration: "60-90 min",
    description: "Baño con shampoo hipoalergénico, secado profesional, corte higiénico, corte de uñas y limpieza de oídos.",
    badge: "Estética y Salud",
  },
  {
    id: "s4",
    name: "Control de Urgencias Diurnas",
    duration: "Atención prioritaria",
    description: "Atención médica inmediata ante golpes, intoxicaciones, vómitos o malestares agudos.",
  },
];

const VET_PRODUCTS: VetProduct[] = [
  {
    id: "vp1",
    name: "Alimento Super Premium Perro Adulto 15kg",
    price: 2450,
    category: "Nutrición",
    description: "Proteínas seleccionadas para pelaje brillante y digestión óptima.",
  },
  {
    id: "vp2",
    name: "Pipeta Antipulgas y Garrapatas",
    price: 420,
    category: "Farmacia",
    description: "Protección efectiva por 30 días contra parásitos externos.",
  },
  {
    id: "vp3",
    name: "Snack Dental Cuidado de Encías",
    price: 260,
    category: "Snacks",
    description: "Reduce el sarro y mantiene el aliento fresco.",
  },
];

export const DemoVeterinaria: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'servicios' | 'productos' | 'contacto'>('servicios');
  const [selectedService, setSelectedService] = useState<string>('s1');

  const getWhatsAppMessageForVet = () => {
    const service = VET_SERVICES.find((s) => s.id === selectedService) || VET_SERVICES[0];
    return `https://wa.me/59895952505?text=Hola!%20(Demo%20de%20muestra%20Veterinaria)%0AQuisiera%20consultar%20por%20un%20turno%20para:%20${encodeURIComponent(
      service.name
    )}.%0A¿Qué%20horarios%20tienen%20disponibles?`;
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <span>Demo interactiva de muestra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display text-balance">
            Demo para Veterinaria y Pet Shop
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Mira cómo una clínica veterinaria o tienda para mascotas puede exhibir sus servicios, productos de farmacia y recibir consultas de turnos directamente en WhatsApp.
          </p>
          <div className="text-xs text-slate-500 italic">
            * Modelo de muestra ilustrativo para veterinarias y pet shops. No corresponde a un cliente real.
          </div>
        </div>

        {/* Demo Content */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Phone Mockup */}
          <div className="lg:col-span-7 flex justify-center order-1">
            <div className="w-full max-w-[390px] bg-slate-900 rounded-[44px] p-3 shadow-2xl ring-1 ring-slate-800">
              {/* Notch */}
              <div className="relative pt-2 pb-1">
                <div className="mx-auto w-24 h-4 bg-slate-950 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800 mr-2" />
                  <div className="w-8 h-1 rounded-full bg-slate-800" />
                </div>
              </div>

              {/* Mobile Screen */}
              <div className="rounded-[34px] overflow-hidden bg-white text-slate-900 flex flex-col h-[650px] relative">
                {/* Header inside Mini App */}
                <div className="bg-teal-800 text-white p-3.5 pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center font-bold text-sm shadow-xs">
                        🐾
                      </div>
                      <div>
                        <div className="text-[10px] text-teal-200 font-semibold uppercase tracking-wider">
                          Demo de muestra
                        </div>
                        <h4 className="text-sm font-bold tracking-tight">
                          Clínica Veterinaria & Pet Care
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2 text-[11px] text-teal-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Abierto hoy de 9:00 a 19:30 hs</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>Zona Central</span>
                    </span>
                  </div>
                </div>

                {/* Promo Banner */}
                <div className="bg-teal-50 border-b border-teal-200/80 px-3 py-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-teal-900">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span className="font-semibold text-[11px]">
                      Plan Cachorro: Vacunación inicial con 15% de beneficio
                    </span>
                  </div>
                </div>

                {/* Hero Photo inside Mini App */}
                <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/src/assets/images/demo_vet_dog_care_1791392217804.jpg"
                    alt="Atención veterinaria profesional"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] text-white font-medium">
                      Atención con calidez y dedicación para tu mascota
                    </span>
                  </div>
                </div>

                {/* Subnav Tabs inside Phone */}
                <div className="grid grid-cols-3 border-b border-slate-200 text-xs font-semibold bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setActiveTab('servicios')}
                    className={`py-2 text-center transition-colors border-b-2 ${
                      activeTab === 'servicios'
                        ? 'border-teal-700 text-teal-900 bg-white'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Servicios
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('productos')}
                    className={`py-2 text-center transition-colors border-b-2 ${
                      activeTab === 'productos'
                        ? 'border-teal-700 text-teal-900 bg-white'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Pet Shop
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('contacto')}
                    className={`py-2 text-center transition-colors border-b-2 ${
                      activeTab === 'contacto'
                        ? 'border-teal-700 text-teal-900 bg-white'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Ubicación
                  </button>
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2.5 demo-scrollbar bg-slate-50/50">
                  {activeTab === 'servicios' && (
                    <>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                        Servicios profesionales disponibles
                      </div>

                      {VET_SERVICES.map((srv) => {
                        const isSelected = selectedService === srv.id;
                        return (
                          <div
                            key={srv.id}
                            onClick={() => setSelectedService(srv.id)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-white border-teal-600 ring-1 ring-teal-600/30 shadow-xs'
                                : 'bg-white border-slate-200/80 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                                  <span>{srv.name}</span>
                                </div>
                                <div className="text-[10px] text-teal-700 font-medium mt-0.5 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{srv.duration}</span>
                                </div>
                              </div>
                              {srv.badge && (
                                <span className="text-[10px] text-teal-800 font-medium">
                                  {srv.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-600 leading-snug mt-1.5">
                              {srv.description}
                            </p>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {activeTab === 'productos' && (
                    <>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
                        Productos destacados en tienda
                      </div>

                      {VET_PRODUCTS.map((prod) => (
                        <div
                          key={prod.id}
                          className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs space-y-1.5"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="text-xs font-bold text-slate-900">{prod.name}</div>
                              <span className="text-[10px] text-slate-400 font-medium">
                                {prod.category}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-slate-900 font-mono-numbers">
                              $ {prod.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">{prod.description}</p>
                        </div>
                      ))}
                    </>
                  )}

                  {activeTab === 'contacto' && (
                    <div className="space-y-3">
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2.5">
                        <div className="text-xs font-bold text-slate-900">
                          Horarios de atención
                        </div>
                        <div className="text-xs text-slate-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Lunes a Viernes:</span>
                            <span className="font-semibold text-slate-800">09:00 - 19:30 hs</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sábados:</span>
                            <span className="font-semibold text-slate-800">09:00 - 15:00 hs</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                            <span>Domingos:</span>
                            <span>Cerrado (urgencias de guardia)</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
                        <div className="text-xs font-bold text-slate-900">Ubicación y cómo llegar</div>
                        <p className="text-xs text-slate-600">
                          Av. Principal 1420 esq. Las Palmeras. Estacionamiento disponible frente al local.
                        </p>
                        <div className="h-24 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-500 gap-1.5">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <span>Mapa con enlace directo a Google Maps</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom WhatsApp Action Bar */}
                <div className="p-3 bg-white border-t border-slate-200 shadow-md">
                  <a
                    href={getWhatsAppMessageForVet()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Explanatory features */}
          <div className="lg:col-span-5 space-y-6 order-2">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                ¿Qué resuelve esta Mini App para tu veterinaria?
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Servicios claros:</strong> Los dueños de mascotas entienden qué incluye cada consulta o baño sin tener que preguntar diez veces.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Catálogo de pet shop:</strong> Muestra tus alimentos por kilo, antiparasitarios y accesorios con precios actualizados.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Consultas de turnos ordenadas:</strong> Llegan a tu WhatsApp especificando el servicio que necesitan y el motivo.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Horarios y mapa accesibles:</strong> Evita llamadas repetitivas preguntando si el local está abierto o dónde queda.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Promociones preventivas:</strong> Comunica campañas de vacunación, castración o planes cachorros fácilmente.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href={WHATSAPP_DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm shadow-sm transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quiero mi demo para Veterinaria</span>
                </a>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-950 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Adaptable a tu estética:</strong> Ajustamos la paleta de colores, logotipo y secciones a la identidad propia de tu clínica o pet shop.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
