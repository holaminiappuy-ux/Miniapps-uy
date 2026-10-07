import React, { useState } from 'react';
import {
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  X,
  ExternalLink,
} from 'lucide-react';
import { WHATSAPP_DEMO_LINK, WHATSAPP_NUMBER } from '../data/content';

interface PizzaProduct {
  id: string;
  name: string;
  category: 'pizzas' | 'empanadas' | 'bebidas';
  description: string;
  price: number;
  image?: string;
  isPopular?: boolean;
}

const PIZZERIA_PRODUCTS: PizzaProduct[] = [
  {
    id: "p1",
    name: "Margherita Especial",
    category: "pizzas",
    description: "Salsa de tomates naturales, abundante mozzarella, rodajas de tomate fresco, albahaca y aceite de oliva virgen extra.",
    price: 490,
    image: "/src/assets/images/demo_pizza_artisan_1791392203332.jpg",
    isPopular: true,
  },
  {
    id: "p2",
    name: "Cuatro Quesos Gourmet",
    category: "pizzas",
    description: "Base de masa madre, mozzarella, queso azul, provolone estacionado y sardo rallado con toque de orégano fresco.",
    price: 540,
  },
  {
    id: "p3",
    name: "Fugazzeta Rellena",
    category: "pizzas",
    description: "Doble masa rellena con jamón cocido y mozzarella, cubierta de cebollas caramelizadas al horno y queso gratinado.",
    price: 560,
  },
  {
    id: "e1",
    name: "Empanada de Carne Criolla",
    category: "empanadas",
    description: "Carne picada a cuchillo, cebolla de verdeo, huevo duro y especias autóctonas horneadas al punto justo.",
    price: 90,
  },
  {
    id: "e2",
    name: "Empanada Jamón y Mozzarella",
    category: "empanadas",
    description: "Clásica masa hojaldrada rellena con abundante mozzarella fundida y jamón seleccionado.",
    price: 90,
  },
  {
    id: "b1",
    name: "Refresco Línea Cola 1.5L",
    category: "bebidas",
    description: "Bien fría para acompañar tu cena en familia.",
    price: 160,
  },
];

export const DemoPizzeria: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'pizzas' | 'empanadas' | 'bebidas'>('pizzas');
  const [cart, setCart] = useState<Record<string, number>>({
    p1: 1, // Pre-populated with Margherita so user sees cart value immediately
  });
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (!next[productId]) return prev;
      if (next[productId] <= 1) {
        delete next[productId];
      } else {
        next[productId] -= 1;
      }
      return next;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = PIZZERIA_PRODUCTS.find((p) => p.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const filteredProducts = PIZZERIA_PRODUCTS.filter((p) => p.category === activeCategory);

  // Build the WhatsApp message preview
  const generateWhatsAppOrderText = () => {
    const itemsList = Object.entries(cart)
      .map(([id, qty]) => {
        const item = PIZZERIA_PRODUCTS.find((p) => p.id === id);
        return item ? `• ${qty}x ${item.name} ($${item.price * qty})` : '';
      })
      .filter(Boolean)
      .join('%0A');

    return `https://wa.me/59895952505?text=Hola!%20(Demo%20de%20muestra%20Pizzería)%0AQuisiera%20hacer%20este%20pedido:%0A${itemsList}%0A%0ATotal:%20$${totalPrice}%0A%0A¿Cuánto%20tiempo%20de%20demora%20tienen?`;
  };

  return (
    <section id="demos" className="py-20 bg-slate-100/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <span>Demo interactiva de muestra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display text-balance">
            Demo para Pizzería
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Prueba cómo tus clientes explorarían el menú, armarían su carrito con opciones y te enviarían el pedido ordenado directo a WhatsApp.
          </p>
          <div className="text-xs text-slate-500 italic">
            * Modelo de muestra ilustrativo para gastronomía. No corresponde a un cliente real.
          </div>
        </div>

        {/* Demo Container */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Explanatory sidebar for the Demo */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                ¿Qué incluye esta Mini App gastronómica?
              </h3>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Menú interactivo:</strong> Clasificación rápida por pizzas, empanadas, postres o bebidas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fotos atractivas:</strong> Tus productos lucen irresistibles en la pantalla del celular.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Carrito con cálculo automático:</strong> El cliente ve el subtotal en tiempo real sin equivocarse de cuenta.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Botón de pedido por WhatsApp:</strong> Genera el mensaje formateado con todo el detalle de una sola vez.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Promociones del día:</strong> Destaca tus ofertas para incentivar combos de mayor valor.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Información del local:</strong> Horarios de cocina, demora estimada y métodos de pago aceptados.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href={WHATSAPP_DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quiero mi demo de gastronomía</span>
                </a>
              </div>
            </div>

            {/* Quick Helper Banner */}
            <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Prueba interactiva:</strong> Puedes agregar productos al carrito en el teléfono de la derecha y ver cómo se actualiza el total en vivo.
              </span>
            </div>
          </div>

          {/* Right: The Interactive Phone Mockup */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
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
                <div className="bg-slate-900 text-white p-3.5 pb-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                        Demo de muestra
                      </div>
                      <h4 className="text-sm font-bold tracking-tight">
                        La Pizzería del Barrio
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCartDrawer(true)}
                      className="relative p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                      title="Ver carrito"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                          {totalItems}
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Business info row */}
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>19:30 a 00:00 hs</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>Delivery & Take away</span>
                    </span>
                  </div>
                </div>

                {/* Promo Banner */}
                <div className="bg-amber-500 text-slate-950 px-3 py-1.5 flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1 text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Promo: 2 Pizzas Grandes + Bebida 1.5L</span>
                  </span>
                  <span className="font-mono-numbers text-[11px] font-bold">$ 990</span>
                </div>

                {/* Category navigation inside Phone */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border-b border-slate-200/80 overflow-x-auto text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('pizzas')}
                    className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap ${
                      activeCategory === 'pizzas'
                        ? 'bg-slate-900 text-white font-semibold shadow-xs'
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    🍕 Pizzas artesanas
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('empanadas')}
                    className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap ${
                      activeCategory === 'empanadas'
                        ? 'bg-slate-900 text-white font-semibold shadow-xs'
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    🥟 Empanadas
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('bebidas')}
                    className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap ${
                      activeCategory === 'bebidas'
                        ? 'bg-slate-900 text-white font-semibold shadow-xs'
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    🥤 Bebidas
                  </button>
                </div>

                {/* Product List */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2.5 demo-scrollbar bg-slate-50/40">
                  {filteredProducts.map((prod) => {
                    const quantity = cart[prod.id] || 0;
                    return (
                      <div
                        key={prod.id}
                        className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs space-y-2"
                      >
                        {prod.image && (
                          <div className="w-full h-32 rounded-lg overflow-hidden bg-slate-100 relative mb-1">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                            {prod.isPopular && (
                              <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                                Más elegida
                              </span>
                            )}
                          </div>
                        )}

                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-xs font-bold text-slate-900">{prod.name}</div>
                            <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                              {prod.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-sm font-bold text-slate-900 font-mono-numbers">
                            $ {prod.price}
                          </span>

                          {quantity === 0 ? (
                            <button
                              type="button"
                              onClick={() => addToCart(prod.id)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Agregar</span>
                            </button>
                          ) : (
                            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-lg p-0.5">
                              <button
                                type="button"
                                onClick={() => removeFromCart(prod.id)}
                                className="w-6 h-6 rounded-md bg-white text-slate-800 flex items-center justify-center hover:bg-slate-200 shadow-2xs"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold font-mono-numbers min-w-4 text-center">
                                {quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => addToCart(prod.id)}
                                className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 shadow-2xs"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Cart Action Bar */}
                <div className="p-3 bg-white border-t border-slate-200 shadow-lg space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}):
                    </span>
                    <span className="font-bold text-slate-900 font-mono-numbers text-sm">
                      $ {totalPrice}
                    </span>
                  </div>

                  <a
                    href={generateWhatsAppOrderText()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir por WhatsApp ($ {totalPrice})</span>
                  </a>
                </div>

                {/* Cart Drawer Modal */}
                {showCartDrawer && (
                  <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs z-30 flex flex-col justify-end">
                    <div className="bg-white rounded-t-3xl p-4 max-h-[85%] flex flex-col space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div className="font-bold text-sm text-slate-900">
                          Tu pedido ({totalItems})
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowCartDrawer(false)}
                          className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex-1 overflow-y-auto space-y-2 demo-scrollbar py-1">
                        {Object.entries(cart).map(([id, qty]) => {
                          const item = PIZZERIA_PRODUCTS.find((p) => p.id === id);
                          if (!item) return null;
                          return (
                            <div key={id} className="flex items-center justify-between text-xs py-1">
                              <div>
                                <div className="font-semibold text-slate-800">{item.name}</div>
                                <div className="text-[10px] text-slate-500">
                                  ${item.price} c/u
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono-numbers font-bold">x{qty}</span>
                                <span className="font-mono-numbers text-slate-900 font-semibold">
                                  ${item.price * qty}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-2 border-t border-slate-100 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span>Total:</span>
                          <span className="font-mono-numbers text-base text-slate-900">
                            $ {totalPrice}
                          </span>
                        </div>
                        <a
                          href={generateWhatsAppOrderText()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-sm hover:bg-emerald-700"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Enviar pedido a WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
