export const WHATSAPP_NUMBER = "+598 95 952 505";
export const WHATSAPP_LINK = "https://wa.me/59895952505";
export const WHATSAPP_DEMO_LINK = "https://wa.me/59895952505?text=Hola!%20Me%20interesa%20solicitar%20un%20demo%20de%20Mini%20Apps%20UY%20para%20mi%20comercio.";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "menu-digital",
    title: "Menús digitales",
    description: "Cartas gastronómicas claras con fotos apetitosas, opciones personalizables y precios siempre actualizados.",
    badge: "Gastronomía",
    iconName: "UtensilsCrossed",
  },
  {
    id: "catalogo-productos",
    title: "Catálogos de productos",
    description: "Organiza todo tu inventario en categorías limpias, con filtros rápidos y búsqueda directa para tus clientes.",
    badge: "Comercio",
    iconName: "ShoppingBag",
  },
  {
    id: "pedidos-whatsapp",
    title: "Pedidos directos por WhatsApp",
    description: "Tus clientes arman su carrito y te envían el pedido ordenado con detalle, dirección y total en un solo mensaje.",
    badge: "Conversión",
    iconName: "MessageCircle",
  },
  {
    id: "qr-personalizado",
    title: "QR personalizado",
    description: "Códigos QR listos para imprimir en mesas, vidrieras, folletos o tarjetas, que abren la Mini App al instante.",
    badge: "Acceso instantáneo",
    iconName: "QrCode",
  },
  {
    id: "promociones",
    title: "Promociones",
    description: "Banners y secciones destacadas para comunicar combos, ofertas del día o promociones de temporada.",
    badge: "Ventas",
    iconName: "Sparkles",
  },
  {
    id: "fidelidad",
    title: "Tarjetas de fidelidad",
    description: "Sistemas digitales sencillos para premiar la recurrencia de tus clientes habituales y generar lealtad.",
    badge: "Retención",
    iconName: "Award",
  },
  {
    id: "contacto-ubicacion",
    title: "Información de contacto y ubicación",
    description: "Horarios comerciales, días de apertura, dirección exacta y mapa con enlace directo a Google Maps.",
    badge: "Ubicación",
    iconName: "MapPin",
  },
  {
    id: "redes-sociales",
    title: "Redes sociales",
    description: "Accesos directos a tu perfil de Instagram, TikTok o Facebook para que tus clientes te sigan fácilmente.",
    badge: "Comunidad",
    iconName: "Share2",
  },
  {
    id: "botones-contacto",
    title: "Botones de contacto",
    description: "Accesos directos para llamar, enviar WhatsApp o escribir por correo con solo presionar un botón.",
    badge: "Comunicación",
    iconName: "PhoneCall",
  },
  {
    id: "soluciones-personalizadas",
    title: "Soluciones digitales personalizadas",
    description: "Desarrollo a la medida de tu identidad gráfica, colores de marca y necesidades específicas de tu rubro.",
    badge: "A medida",
    iconName: "Wrench",
  },
];

export interface RubroItem {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  exampleType: string;
}

export const RUBROS_LIST: RubroItem[] = [
  {
    id: "pizzerias",
    name: "Pizzerías y gastronomía",
    tagline: "Menú interactivo con ingredientes, combos de pizzas, bebidas y pedido ordenado para delivery o mesa.",
    features: ["Menú por secciones", "Opciones de gustos y adicionales", "Pedido ordenado a WhatsApp", "Horarios de cocina"],
    exampleType: "Restaurantes, pizzerías, rotiserías, food trucks",
  },
  {
    id: "veterinarias",
    name: "Veterinarias y pet shops",
    tagline: "Catálogo de alimentos balanceados, antiparasitarios y botón directo para agendar turnos de consulta o baño.",
    features: ["Catálogo de productos", "Reserva de turnos de consulta", "Servicios de peluquería canina", "Urgencias"],
    exampleType: "Clínicas veterinarias, pet shops, peluquerías caninas",
  },
  {
    id: "cafeterias",
    name: "Cafeterías",
    tagline: "Carta visual de cafés de especialidad, opciones de pastelería, opciones sin gluten y promos de meriendas.",
    features: ["Carta visual de bebidas", "Opciones vegetarianas/sin TACC", "Promos de desayuno y merienda", "Take away"],
    exampleType: "Cafés de especialidad, panaderías, casas de té",
  },
  {
    id: "almacenes",
    name: "Almacenes y comercios",
    tagline: "Lista ágil de productos cotidianos, ofertas semanales y pedidos para retiro en mostrador o entrega a domicilio.",
    features: ["Búsqueda rápida de productos", "Ofertas semanales", "Retiro programado en local", "Delivery de cercanía"],
    exampleType: "Minimercados, fiambrerías, dietéticas, verdulerías",
  },
  {
    id: "tiendas-ropa",
    name: "Tiendas de ropa",
    tagline: "Catálogo de prendas con talles disponibles, fotos de colección y consultas de stock en tiempo real.",
    features: ["Guía de talles y colores", "Nuevos ingresos de temporada", "Consulta de disponibilidad", "Enlace a Instagram"],
    exampleType: "Boutiques, indumentaria urbana, calzado, accesorios",
  },
  {
    id: "barberias",
    name: "Barberías y peluquerías",
    tagline: "Lista de servicios de corte y barba con tiempos estimados, fotos de trabajos y botón para solicitar turno.",
    features: ["Lista de cortes y tratamientos", "Tiempos de cada servicio", "Galería de cortes", "Turnos por WhatsApp"],
    exampleType: "Barber shops, peluquerías unisex, salones de estilo",
  },
  {
    id: "belleza",
    name: "Belleza y servicios personales",
    tagline: "Carta de tratamientos, manicuría, pestañas, estética y reservas directas organizadas.",
    features: ["Tratamientos faciales y corporales", "Promos mensuales", "Cuidados previos y posteriores", "Contacto rápido"],
    exampleType: "Estudios de uñas, spa, cejas y pestañas, centros de estética",
  },
  {
    id: "emprendedores",
    name: "Emprendedores",
    tagline: "Una presencia digital profesional y moderna sin los costos elevados de una tienda tradicional pesada.",
    features: ["Presentación de tu marca", "Catálogo sin límites técnicos", "Fácil de compartir en Bio", "Cero comisiones por venta"],
    exampleType: "Artesanías, regalos, velas aromáticas, pastelería casera",
  },
  {
    id: "otros",
    name: "Otros comercios",
    tagline: "Adaptamos cada Mini App a la dinámica específica de venta o atención al público de tu rubro.",
    features: ["Diseño a medida", "Integración con tus canales actuales", "Soporte cercano y directo", "Sin complicaciones"],
    exampleType: "Librerías, ferreterías, cotillones, ópticas y más",
  },
];
