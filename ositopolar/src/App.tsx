import { FormEvent, ReactNode, useEffect, useState } from "react";

const photos = {
  business:
    "https://images.unsplash.com/photo-1601599561213-832382fd07ba?auto=format&fit=crop&w=1200&q=85",
  providers:
    "https://images.unsplash.com/photo-1790156591172-ea5f8427bbbc?auto=format&fit=crop&w=1200&q=85",
};

type IconName =
  | "alert"
  | "chart"
  | "check"
  | "clock"
  | "close"
  | "equipment"
  | "file"
  | "menu"
  | "money"
  | "monitor"
  | "plus"
  | "service"
  | "spark"
  | "temperature"
  | "tools"
  | "users";

const iconPaths: Record<IconName, ReactNode> = {
  alert: (
    <>
      <path d="M10.3 3.4 2.7 16.5A2 2 0 0 0 4.4 19h15.2a2 2 0 0 0 1.7-2.5L13.7 3.4a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  equipment: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M5 9h14M9 6h.01M12 6h.01M9 16h6" /></>,
  file: <><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h5" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  money: <><circle cx="12" cy="12" r="9" /><path d="M15 8.5c-.7-.8-1.7-1.2-3-1.2-1.7 0-3 1-3 2.3 0 3.4 6 1.6 6 4.8 0 1.3-1.3 2.3-3 2.3-1.4 0-2.6-.5-3.3-1.4M12 5.5v13" /></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  service: <><path d="m14.5 6.5 3-3a4 4 0 0 1-5 5L5 16l3 3 7.5-7.5a4 4 0 0 1 5-5l-3 3Z" /><path d="m4 17 3 3" /></>,
  spark: <><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" /><path d="m18.5 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" /></>,
  temperature: <><path d="M14 14.8V5a4 4 0 0 0-8 0v9.8a6 6 0 1 0 8 0Z" /><path d="M10 8v9M7 11h3" /></>,
  tools: <><path d="m4 20 7-7M14 6l4 4M12 8l4-4 4 4-4 4M3 17l4 4" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
};

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

function PolarBear({ dark = false }: { dark?: boolean }) {
  return (
    <svg className="bear" viewBox="0 0 210 180" role="img" aria-label="Mascota oso polar de OsitoPolar">
      <circle cx="52" cy="54" r="25" fill={dark ? "#DFF5FF" : "#BCEBFF"} />
      <circle cx="158" cy="54" r="25" fill={dark ? "#DFF5FF" : "#BCEBFF"} />
      <path d="M105 19c51 0 82 38 82 86 0 40-33 63-82 63s-82-23-82-63c0-48 31-86 82-86Z" fill="white" />
      <path d="M51 91c13-17 34-25 54-25s41 8 54 25" fill="none" stroke="#C9E7F5" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="105" cy="119" rx="37" ry="29" fill="#E8F7FC" />
      <circle cx="74" cy="91" r="6" fill="#0A2944" />
      <circle cx="136" cy="91" r="6" fill="#0A2944" />
      <path d="M96 111c0-7 18-7 18 0 0 5-4 9-9 9s-9-4-9-9Z" fill="#0A2944" />
      <path d="M105 120v7m0 0c-6 0-10 2-13 6m13-6c6 0 10 2 13 6" fill="none" stroke="#0A2944" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M42 139c16-6 31-4 43 7M168 139c-16-6-31-4-43 7" fill="none" stroke="#D8EDF7" strokeWidth="9" strokeLinecap="round" />
      {dark && <path d="M55 153c30 15 70 17 101 0" fill="none" stroke="#74D8FF" strokeWidth="3" strokeLinecap="round" />}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "logo-light" : ""}`} href="#inicio" aria-label="OsitoPolar, ir al inicio">
      <span className="logo-mark">
        <span className="ear left" />
        <span className="ear right" />
        <span className="face"><span className="nose" /></span>
      </span>
      <span>Osito<span>Polar</span></span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-wrap" aria-label="Vista previa del panel de monitoreo">
      <div className="float-chip chip-live"><span /> Monitoreo en vivo</div>
      <div className="float-chip chip-safe"><Icon name="check" size={15} /> 12 equipos estables</div>
      <div className="dashboard">
        <div className="dash-sidebar">
          <div className="mini-logo"><span>O</span></div>
          {["monitor", "temperature", "chart", "equipment"].map((item, index) => (
            <span className={index === 0 ? "active" : ""} key={item}><Icon name={item as IconName} size={17} /></span>
          ))}
        </div>
        <div className="dash-main">
          <div className="dash-head">
            <div><small>Resumen general</small><strong>Buenos días, Andrea</strong></div>
            <span className="avatar">AM</span>
          </div>
          <div className="dash-stats">
            <div><span className="stat-icon blue"><Icon name="equipment" size={17} /></span><small>Equipos</small><strong>16</strong><em>+2 este mes</em></div>
            <div><span className="stat-icon cyan"><Icon name="temperature" size={17} /></span><small>Temperatura prom.</small><strong>3.6°</strong><em>Rango óptimo</em></div>
            <div><span className="stat-icon amber"><Icon name="alert" size={17} /></span><small>Alertas</small><strong>02</strong><em>Requieren atención</em></div>
          </div>
          <div className="dash-grid">
            <div className="chart-card">
              <div className="card-title"><span>Temperatura en vivo</span><small>Últimas 12 h</small></div>
              <div className="chart-area">
                <div className="chart-labels"><span>8°</span><span>4°</span><span>0°</span></div>
                <svg viewBox="0 0 420 120" preserveAspectRatio="none" aria-hidden="true">
                  <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#32B5F4" stopOpacity=".35" /><stop offset="1" stopColor="#32B5F4" stopOpacity="0" /></linearGradient></defs>
                  <path className="grid-line" d="M0 18H420M0 60H420M0 102H420" />
                  <path className="area" d="M0 85C40 70 50 78 85 61s51-10 75 5 52 8 75-20 55-6 80-1 55-18 105-13V120H0Z" />
                  <path className="line" d="M0 85C40 70 50 78 85 61s51-10 75 5 52 8 75-20 55-6 80-1 55-18 105-13" />
                  <circle cx="315" cy="45" r="5" />
                </svg>
              </div>
            </div>
            <div className="status-card">
              <div className="card-title"><span>Estado</span><small>Ver todos</small></div>
              <div className="donut"><span><strong>87%</strong><small>Óptimo</small></span></div>
              <ul><li><span className="dot green" /> Estables <b>12</b></li><li><span className="dot yellow" /> Atención <b>3</b></li><li><span className="dot red" /> Crítico <b>1</b></li></ul>
            </div>
          </div>
          <div className="alert-row"><span className="stat-icon amber"><Icon name="alert" size={16} /></span><div><strong>Variación detectada</strong><small>Cámara de lácteos · hace 4 min</small></div><b>5.8 °C</b></div>
        </div>
      </div>
    </div>
  );
}

const problems: { icon: IconName; title: string; text: string }[] = [
  { icon: "alert", title: "Fallas imprevistas", text: "Problemas que aparecen sin aviso y detienen tu operación." },
  { icon: "money", title: "Pérdidas económicas", text: "Productos dañados y ventas perdidas por temperaturas fuera de rango." },
  { icon: "tools", title: "Mantenimiento desorganizado", text: "Servicios reactivos, registros dispersos y poca trazabilidad." },
  { icon: "clock", title: "Sin monitoreo continuo", text: "Horas críticas sin visibilidad sobre el estado real de tus equipos." },
];

const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "temperature", title: "Monitoreo de temperatura", text: "Visualiza datos en tiempo real y mantén cada equipo en su rango ideal." },
  { icon: "alert", title: "Alertas automáticas", text: "Recibe avisos inmediatos y actúa antes de que una variación sea una falla." },
  { icon: "spark", title: "Mantenimiento predictivo con IA", text: "Detecta patrones inusuales y anticipa necesidades de intervención." },
  { icon: "equipment", title: "Gestión de equipos", text: "Centraliza ubicación, estado, fichas técnicas y responsables." },
  { icon: "service", title: "Solicitudes de servicio técnico", text: "Crea, asigna y sigue cada atención desde un solo lugar." },
  { icon: "file", title: "Historial y reportes", text: "Consulta intervenciones, temperaturas y métricas para decidir mejor." },
];

const plans = [
  { name: "Básico", price: "S/ 49", unit: "/mes", description: "Para pequeños negocios que quieren proteger su operación.", features: ["Hasta 2 equipos", "Monitoreo de temperatura", "Alertas automáticas", "Historial básico"], cta: "Elegir Básico" },
  { name: "Profesional", price: "S/ 129", unit: "/mes", description: "Control integral para negocios en crecimiento.", features: ["Hasta 10 equipos", "Alertas y reportes", "Solicitudes técnicas", "Gestión de mantenimiento"], cta: "Elegir Profesional", popular: true },
  { name: "Empresarial", price: "Personalizado", unit: "", description: "Para empresas con más de 10 equipos o múltiples locales.", features: ["Analítica avanzada", "Mantenimiento predictivo", "Gestión de técnicos", "Soporte prioritario"], cta: "Solicitar cotización" },
];

const faqs = [
  { q: "¿Qué es OsitoPolar?", a: "Es una plataforma SaaS para monitorear equipos de refrigeración, organizar su mantenimiento y conectar negocios con sus proveedores técnicos." },
  { q: "¿Necesito sensores?", a: "Puedes comenzar registrando y gestionando tus equipos sin sensores. Para monitoreo automático en tiempo real, conectamos sensores compatibles según tu operación." },
  { q: "¿Cómo funcionan las alertas?", a: "Configuras rangos seguros por equipo. Si una lectura sale de esos parámetros, OsitoPolar notifica a los responsables para que puedan actuar a tiempo." },
  { q: "¿Puedo gestionar varios equipos?", a: "Sí. Los planes Profesional y Empresarial están diseñados para administrar múltiples equipos, sedes y responsables desde un panel central." },
  { q: "¿Cómo solicito mantenimiento?", a: "Desde la ficha de cualquier equipo puedes crear una solicitud, adjuntar detalles y hacer seguimiento del servicio hasta su cierre." },
];

function DemoModal({ onClose, initialType = "negocio" }: { onClose: () => void; initialType?: string }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar formulario"><Icon name="close" /></button>
        {!sent ? (
          <>
            <span className="eyebrow">Demo personalizada</span>
            <h2 id="demo-title">Conversemos sobre tu operación</h2>
            <p>Cuéntanos lo esencial y nuestro equipo te contactará para mostrarte OsitoPolar.</p>
            <form onSubmit={submit}>
              <label>Nombre completo<input required name="name" placeholder="Ej. Andrea Morales" autoFocus /></label>
              <label>Correo de trabajo<input required type="email" name="email" placeholder="andrea@empresa.com" /></label>
              <div className="form-row">
                <label>Tipo de cuenta<select name="type" defaultValue={initialType}><option value="negocio">Negocio</option><option value="proveedor">Proveedor técnico</option></select></label>
                <label>Número de equipos<input required type="number" min="1" name="equipment" placeholder="Ej. 12" /></label>
              </div>
              <label>¿Qué deseas mejorar?<textarea name="message" rows={3} placeholder="Monitoreo, alertas, mantenimiento..." /></label>
              <button className="btn primary wide" type="submit">Solicitar mi demo <span>→</span></button>
              <small>Al enviar aceptas nuestra política de privacidad.</small>
            </form>
          </>
        ) : (
          <div className="success-state">
            <span className="success-icon"><Icon name="check" size={34} /></span>
            <h2>¡Solicitud recibida!</h2>
            <p>Gracias por confiar en OsitoPolar. Te contactaremos muy pronto para coordinar tu demo.</p>
            <button className="btn primary" onClick={onClose}>Volver al sitio</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoType, setDemoType] = useState("negocio");
  const [openFaq, setOpenFaq] = useState(0);

  const openDemo = (type = "negocio") => {
    setDemoType(type);
    setDemoOpen(true);
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="container nav-inner">
          <Logo />
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegación principal">
            {[
              ["Inicio", "inicio"], ["Problema", "problema"], ["Solución", "solucion"],
              ["Funcionalidades", "funcionalidades"], ["Precios", "precios"], ["Contacto", "contacto"],
            ].map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <div className="mobile-actions">
              <a className="btn ghost" href="#login">Iniciar sesión</a>
              <button className="btn primary" onClick={() => openDemo()}>Solicitar demo</button>
            </div>
          </nav>
          <div className="nav-actions">
            <a className="btn ghost" href="#login">Iniciar sesión</a>
            <button className="btn primary small" onClick={() => openDemo()}>Solicitar demo</button>
          </div>
          <button className="menu-btn" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow one" /><div className="hero-glow two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="announcement"><span><Icon name="spark" size={14} /></span> Refrigeración inteligente, tranquilidad real</span>
              <h1>El frío bajo control.<br /><em>Tu negocio siempre protegido.</em></h1>
              <p>Monitorea tus equipos de refrigeración, recibe alertas ante posibles fallas y gestiona su mantenimiento desde una plataforma inteligente.</p>
              <div className="hero-actions">
                <a className="btn primary large" href="#precios">Comenzar ahora <span>→</span></a>
                <button className="btn secondary large" onClick={() => openDemo()}>Solicitar demo</button>
              </div>
              <div className="trust-row">
                <div className="avatars"><span>JM</span><span>LC</span><span>AR</span></div>
                <div><strong>+250 equipos protegidos</strong><small>Operaciones más seguras cada día</small></div>
              </div>
            </div>
            <Dashboard />
          </div>
          <div className="container metrics">
            <div><strong>24/7</strong><span>Visibilidad continua</span></div>
            <div><strong>&lt; 1 min</strong><span>Alertas instantáneas</span></div>
            <div><strong>100%</strong><span>Historial centralizado</span></div>
            <div><strong>1 lugar</strong><span>Para toda tu operación</span></div>
          </div>
        </section>

        <section className="section problem-section" id="problema">
          <div className="container">
            <SectionIntro eyebrow="El problema" title="Una falla inesperada puede costarle mucho a tu negocio." copy="El monitoreo manual y la falta de mantenimiento oportuno convierten una pequeña variación en pérdidas de producto, interrupciones y gastos difíciles de prever." />
            <div className="problem-grid">
              {problems.map((item, index) => (
                <article className="problem-card" key={item.title}>
                  <span className="card-number">0{index + 1}</span>
                  <span className="icon-box coral"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3><p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section solution-section" id="solucion">
          <div className="container">
            <div className="solution-heading">
              <SectionIntro eyebrow="Nuestra solución" title="Conoce OsitoPolar: tecnología que cuida tu refrigeración." />
              <p>Una plataforma simple y potente que reúne todo lo que necesitas para prevenir, actuar y crecer con confianza.</p>
            </div>
            <div className="feature-grid" id="funcionalidades">
              {features.map((item, index) => (
                <article className={`feature-card ${index === 2 ? "featured" : ""}`} key={item.title}>
                  {index === 2 && <span className="ai-tag">Impulsado por IA</span>}
                  <span className="icon-box blue"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3><p>{item.text}</p>
                  <span className="feature-link">Conocer más <span>→</span></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section segments-section">
          <div className="container">
            <SectionIntro eyebrow="Para cada operación" title="Una plataforma. Dos formas de trabajar mejor." copy="Ya sea que protejas productos o brindes servicio técnico, OsitoPolar se adapta a tu día a día." />
            <div className="segments-grid">
              <article className="segment-card" id="registro-negocio">
                <div className="segment-image"><img src={photos.business} alt="Vitrinas refrigeradas abastecidas en un supermercado" /><span className="segment-badge"><Icon name="equipment" size={17} /> Para negocios</span></div>
                <div className="segment-content">
                  <span className="segment-label">Restaurantes · Supermercados · Minimarkets</span>
                  <h3>Protege tus productos y tu operación</h3>
                  <ul><li><Icon name="check" size={17} /> Supervisión centralizada de equipos</li><li><Icon name="check" size={17} /> Prevención de pérdidas</li><li><Icon name="check" size={17} /> Mantenimiento siempre organizado</li></ul>
                  <button className="btn primary" onClick={() => openDemo("negocio")}>Proteger mis equipos <span>→</span></button>
                </div>
              </article>
              <article className="segment-card" id="registro-proveedor">
                <div className="segment-image"><img src={photos.providers} alt="Técnico en una cocina profesional con equipos industriales" /><span className="segment-badge"><Icon name="tools" size={17} /> Para proveedores</span></div>
                <div className="segment-content">
                  <span className="segment-label">Empresas · Técnicos de refrigeración</span>
                  <h3>Convierte cada servicio en una gran experiencia</h3>
                  <ul><li><Icon name="check" size={17} /> Gestión de solicitudes y visitas</li><li><Icon name="check" size={17} /> Órdenes de trabajo trazables</li><li><Icon name="check" size={17} /> Control de técnicos y clientes</li></ul>
                  <button className="btn dark" onClick={() => openDemo("proveedor")}>Gestionar mis servicios <span>→</span></button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section how-section">
          <div className="container how-grid">
            <div className="how-copy">
              <SectionIntro eyebrow="Cómo funciona" title="Empieza en tres simples pasos." copy="No necesitas cambiar tu forma de trabajar. OsitoPolar ordena tu operación y te acompaña desde el primer equipo." />
              <a className="text-link" href="#precios">Crear mi cuenta gratis <span>→</span></a>
            </div>
            <div className="timeline">
              <div className="timeline-line" />
              {[
                ["equipment", "Registra tus equipos", "Añade su información, ubicación y rango de temperatura ideal."],
                ["temperature", "Supervisa y recibe alertas", "Visualiza temperaturas y entérate de cualquier anomalía."],
                ["service", "Gestiona el mantenimiento", "Solicita atención técnica y consulta cada historial."],
              ].map(([icon, title, text], index) => (
                <div className="timeline-item" key={title}>
                  <span className="step-number">{index + 1}</span>
                  <div className="step-illustration"><span><Icon name={icon as IconName} size={30} /></span><i className={`step-shape shape-${index}`} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="precios">
          <div className="container">
            <SectionIntro eyebrow="Planes y precios" title="Planes que protegen lo que más importa." copy="Elige la cobertura ideal para tus equipos y escala cuando tu operación lo necesite." />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className={`price-card ${plan.popular ? "popular" : ""}`} key={plan.name}>
                  {plan.popular && <span className="popular-label">Más popular</span>}
                  <span className="plan-name">{plan.name}</span>
                  <div className="price"><strong>{plan.price}</strong><span>{plan.unit}</span></div>
                  <p>{plan.description}</p>
                  <div className="price-divider" />
                  <ul>{plan.features.map((feature) => <li key={feature}><span><Icon name="check" size={15} /></span>{feature}</li>)}</ul>
                  <button className={`btn wide ${plan.popular ? "primary" : "secondary"}`} onClick={() => openDemo(plan.name === "Empresarial" ? "proveedor" : "negocio")}>{plan.cta} <span>→</span></button>
                </article>
              ))}
            </div>
            <p className="pricing-note">Sensores, instalación y servicios técnicos se cotizan por separado. Precios referenciales sujetos a confirmación.</p>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div className="faq-side">
              <SectionIntro eyebrow="Preguntas frecuentes" title="Todo claro antes de comenzar." copy="Si necesitas una respuesta más específica, nuestro equipo estará encantado de ayudarte." />
              <button className="btn secondary" onClick={() => openDemo()}>Hablar con un asesor</button>
            </div>
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.q}>
                  <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    <span>{faq.q}</span><span className="faq-plus"><Icon name={openFaq === index ? "close" : "plus"} size={18} /></span>
                  </button>
                  <div className="faq-answer"><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contacto">
          <div className="container cta-box">
            <div className="cta-snow one" /><div className="cta-snow two" />
            <div className="cta-bear"><PolarBear dark /></div>
            <div className="cta-content">
              <span className="eyebrow light">Tu operación merece tranquilidad</span>
              <h2>No esperes a que una falla detenga tu negocio.</h2>
              <p>Protege tus equipos y optimiza tu mantenimiento con OsitoPolar.</p>
              <div><a className="btn white large" href="#precios">Comenzar ahora <span>→</span></a><button className="btn outline-light large" onClick={() => openDemo()}>Hablar con un asesor</button></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand"><Logo light /><p>Tecnología que protege el frío, los productos y la tranquilidad de tu negocio.</p><div className="socials"><a href="#linkedin" aria-label="LinkedIn">in</a><a href="#instagram" aria-label="Instagram">ig</a><a href="#facebook" aria-label="Facebook">f</a></div></div>
          <div><strong>Producto</strong><a href="#problema">Problema</a><a href="#solucion">Solución</a><a href="#funcionalidades">Funcionalidades</a><a href="#precios">Precios</a></div>
          <div><strong>Compañía</strong><a href="#nosotros">Nosotros</a><a href="#recursos">Recursos</a><a href="#contacto">Contacto</a><a href="#ayuda">Centro de ayuda</a></div>
          <div><strong>Contacto</strong><a href="mailto:hola@ositopolar.pe">hola@ositopolar.pe</a><a href="tel:+51999999999">+51 999 999 999</a><span>Lima, Perú</span></div>
        </div>
        <div className="container footer-bottom"><span>© 2025 OsitoPolar. Todos los derechos reservados.</span><span className="artisanal">Una solución de <strong>Inteligencia Artesanal</strong></span><div><a href="#terminos">Términos</a><a href="#privacidad">Privacidad</a></div></div>
      </footer>

      {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} initialType={demoType} />}
    </div>
  );
}
