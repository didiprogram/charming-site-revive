import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";

import portada from "../assets/tesis-encuadernadas.jpg";
import direccion from "../assets/direccion-academica.jpg";

const TITLE = "Casalins | Guía Directa — Asesoría metodológica para TFG, TFM y tesis";
const DESCRIPTION =
  "Acompañamiento metodológico con +32 años de trayectoria para TFG, TFM y tesis doctorales en España y Latinoamérica. Análisis SPSS y ATLAS.ti, normas APA, auditoría antiplagio y preparación de defensa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const WHATSAPP = "34644293791";

const CONTACT_NUMBERS = [
  { country: "España", number: "+34 644 293 791", raw: "34644293791", flag: "🇪🇸" },
  { country: "Colombia", number: "+57 321 431 0644", raw: "573214310644", flag: "🇨🇴" },
  { country: "Venezuela", number: "+58 414 600 7451", raw: "584146007451", flag: "🇻🇪" },
];

const areas = [
  {
    n: "01",
    title: "Derecho",
    desc: "Jurisprudencia, derecho comparado, marco jurídico-institucional y bioética.",
    color: "from-[oklch(0.213_0.062_267/50%)] to-[oklch(0.213_0.062_267/15%)]",
    border: "border-[oklch(0.213_0.062_267/20%)]",
  },
  {
    n: "02",
    title: "Economía",
    desc: "Finanzas, contabilidad, econometría y gestión empresarial.",
    color: "from-[oklch(0.336_0.063_254/45%)] to-[oklch(0.336_0.063_254/15%)]",
    border: "border-[oklch(0.336_0.063_254/20%)]",
  },
  {
    n: "03",
    title: "Salud",
    desc: "Enfermería, medicina, bioética y bioestadística avanzada.",
    color: "from-[oklch(0.531_0.086_249/35%)] to-[oklch(0.531_0.086_249/10%)]",
    border: "border-[oklch(0.531_0.086_249/20%)]",
  },
  {
    n: "04",
    title: "MBA y Educación",
    desc: "Liderazgo, innovación, ciencias sociales y proyectos educativos.",
    color: "from-[oklch(0.213_0.062_267/30%)] to-[oklch(0.531_0.086_249/15%)]",
    border: "border-[oklch(0.336_0.063_254/20%)]",
  },
];

const servicios = [
  {
    title: "Redacción y estructura",
    desc: "Planteamiento, matriz de objetivos, marco teórico y coherencia argumentativa de principio a fin.",
    n: "01",
  },
  {
    title: "Análisis SPSS y ATLAS.ti",
    desc: "Tratamiento cuantitativo y cualitativo con interpretación técnica lista para el tribunal.",
    n: "02",
  },
  {
    title: "Normas APA, Vancouver e ICONTEC",
    desc: "Citación, referencias y formato ajustados con precisión a la normativa de tu universidad.",
    n: "03",
  },
  {
    title: "Auditoría antiplagio Compilatio",
    desc: "Paráfrasis científica y revisión de originalidad para entregar sin riesgo de penalización.",
    n: "04",
  },
  {
    title: "Preparación de defensa",
    desc: "Presentación, simulacro de preguntas del jurado y entrenamiento de oratoria académica.",
    n: "05",
  },
  {
    title: "Confidencialidad por contrato",
    desc: "Identidad protegida, trato directo con la dirección académica y trazabilidad de cada entrega.",
    n: "06",
  },
];

const articulos = [
  {
    tag: "Investigación jurídica",
    title: "Temas de tesis en Derecho: ideas y líneas de investigación",
    desc: "Cómo elegir un tema viable en derecho penal, civil, IA y ciberdelincuencia.",
    label: "01",
  },
  {
    tag: "Normas APA 7.ª",
    title: "Cita, referencia y bibliografía: ¿en qué se diferencian?",
    desc: "Por qué mezclar estos conceptos es uno de los motivos más comunes de penalización.",
    label: "02",
  },
  {
    tag: "Análisis SPSS",
    title: "Cómo elegir entre prueba T y ANOVA para tu hipótesis",
    desc: "Guía clara para seleccionar el tratamiento estadístico según el número de grupos.",
    label: "03",
  },
];

const casos = [
  {
    ref: "Cliente Posgrado #1042",
    meta: "Trabajo Fin de Máster aprobado",
    quote:
      "Le informo que el trabajo ha sido aprobado por el tribunal como apto. Su trabajo ha sido excepcional y clave para garantizar el éxito del mismo.",
    badge: "Apto por tribunal",
    stars: 5,
  },
  {
    ref: "Cliente Grado #0988",
    meta: "Sustentación de grado",
    quote:
      "Defendí hace poco con nota máxima. Muchas gracias por su ayuda y apoyo en este proceso que me tuvo tan estresado.",
    badge: "Calificación máxima",
    stars: 5,
  },
];

const stats = [
  { value: 32, suffix: "+", label: "Años de trayectoria" },
  { value: 1000, suffix: "+", label: "Trabajos aprobados" },
  { value: 98, suffix: "%", label: "Tasa de aprobación" },
  { value: 15, suffix: "+", label: "Países atendidos" },
];

const nav = [
  { label: "Áreas", href: "#areas" },
  { label: "Dirección", href: "#direccion" },
  { label: "Servicios", href: "#servicios" },
  { label: "Recursos", href: "#recursos" },
  { label: "Cotizar", href: "#cotizar" },
];

// Animated counter hook
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1800, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-value">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Index() {
  const [area, setArea] = useState("Derecho y ciencias jurídicas");
  const [nivel, setNivel] = useState("Doctorado (Ph.D.)");
  const [pais, setPais] = useState("España y UE (€ EUR)");
  const [avance, setAvance] = useState("Sin iniciar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = useMemo(() => {
    let targetWa = WHATSAPP;
    if (pais.includes("Colombia")) targetWa = "573214310644";
    else if (pais.includes("Venezuela")) targetWa = "584146007451";
    const texto = `Hola, necesito asesoría metodológica.\nÁrea: ${area}\nNivel: ${nivel}\nUbicación/moneda: ${pais}\nEstado de avance: ${avance}`;
    return `https://wa.me/${targetWa}?text=${encodeURIComponent(texto)}`;
  }, [area, nivel, pais, avance]);

  return (
    <div className="min-h-screen bg-background font-sans text-navy-dark overflow-x-hidden">

      {/* ─── NAV ─── */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-lg shadow-navy-dark/8 backdrop-blur-xl" : "bg-white/80 backdrop-blur-md"} border-b border-navy-dark/5`}>
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif text-xl font-bold tracking-tight text-navy-dark">GuiaDirecta</span>
          </a>
          <div className="hidden gap-8 text-xs font-semibold tracking-widest text-navy-mid uppercase md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-navy-dark after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-navy-light after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-navy-dark text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm hover:bg-navy-mid transition-colors shadow-md"
          >
            WhatsApp
          </a>
          <button
            className="md:hidden p-2 text-navy-dark"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-navy-dark/5 px-6 py-4 flex flex-col gap-4">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-navy-mid hover:text-navy-dark tracking-wide uppercase">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy-mid to-navy-dark min-h-[92vh] flex items-center">
        {/* decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-navy-light/20 blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-navy-light/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/3 blur-3xl" />
          {/* subtle grid */}
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 w-full">
          <div className="grid items-center gap-16 md:grid-cols-12">
            <div className="md:col-span-7 animate-fade-up">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold tracking-widest text-white/90 uppercase backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  +32 años de trayectoria
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold tracking-widest text-white/90 uppercase backdrop-blur-sm">
                  Confidencialidad absoluta
                </span>
              </div>

              <h1 className="mb-6 font-serif text-5xl leading-[1.1] text-white md:text-7xl">
                La excelencia académica no es casualidad,{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
                  es rigor científico.
                </span>
              </h1>

              <p className="mb-10 max-w-[55ch] text-lg leading-relaxed font-light text-white/70">
                Acompañamiento metodológico de alto nivel para TFG, TFM y tesis doctorales en
                España, Colombia, México, Chile y toda Latinoamérica.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cotizar"
                  className="group flex items-center gap-3 bg-white text-navy-dark px-8 py-4 text-sm font-bold tracking-widest uppercase shadow-2xl hover:bg-paper transition-all hover:gap-4 rounded-sm"
                >
                  Iniciar consultoría
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all rounded-sm"
                >
                  WhatsApp directo
                </a>
              </div>

              <p className="mt-6 text-xs tracking-wide text-white/40">
                Auditoría antiplagio Compilatio incluida · Respuesta en menos de 2 horas
              </p>
            </div>

            <div className="md:col-span-5 animate-fade-up [animation-delay:250ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-light/40 to-transparent rounded-2xl blur-2xl scale-105" />
                <img
                  src={portada}
                  alt="Tesis doctorales encuadernadas"
                  className="relative w-full aspect-4/5 object-cover rounded-xl shadow-2xl ring-1 ring-white/10"
                />
                {/* floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-lg">✓</div>
                  <div>
                    <div className="text-xs font-bold text-navy-dark">+1.000 trabajos</div>
                    <div className="text-[10px] text-navy-mid">aprobados con éxito</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-navy-dark text-white rounded-xl shadow-2xl p-4 text-center">
                  <div className="font-serif text-2xl font-bold">98%</div>
                  <div className="text-[10px] text-white/60 tracking-wide">tasa aprobación</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="var(--color-background)" />
          </svg>
        </div>
      </header>

      {/* ─── STATS ─── */}
      <section className="relative bg-background py-16 -mt-2">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÁREAS ─── */}
      <section id="areas" className="py-24 bg-gradient-to-b from-background to-paper">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-navy-light mb-3 block">Especialización</span>
            <h2 className="font-serif text-4xl text-navy-dark">Áreas disciplinares específicas</h2>
            <p className="mt-4 text-navy-mid font-light max-w-[50ch] mx-auto">Expertise profundo en las disciplinas que más demandan acompañamiento metodológico.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {areas.map((a) => (
              <div
                key={a.n}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${a.color} ${a.border} border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy-dark/15 cursor-default`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-navy-dark/5 -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />
                <span className="text-[10px] tracking-widest text-navy-light uppercase font-bold">{a.n}</span>
                <h3 className="mt-3 mb-2 font-serif text-xl text-navy-dark">{a.title}</h3>
                <p className="text-sm leading-relaxed font-light text-navy-mid">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIRECCIÓN ─── */}
      <section id="direccion" className="py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light/20 to-navy-dark/10 rounded-2xl blur-3xl scale-95" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-navy-dark/10">
                <img
                  src={direccion}
                  alt="Anabella Casalins Cabarcas, dirección académica"
                  className="w-full aspect-4/5 object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="font-serif text-base italic text-white leading-relaxed">
                      "Garantizamos que tu voz académica sea escuchada con el rigor que la ciencia exige."
                    </p>
                  </div>
                </div>
              </div>
              {/* credential badge */}
              <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-xl p-4 border border-navy-dark/5">
                <div className="text-xs font-bold text-navy-dark">Experta certificada</div>
                <div className="text-[10px] text-navy-mid">SPSS · ATLAS.ti</div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="eyebrow mb-4 block text-navy-light">Dirección académica</span>
              <h2 className="mb-4 font-serif text-4xl text-navy-dark leading-tight">
                Anabella Casalins Cabarcas
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-navy-light to-navy-dark rounded-full mb-6" />
              <p className="mb-8 leading-relaxed font-light text-navy-mid">
                Fundadora y dirección académica multidisciplinar de @Casalins y Guía Directa.
                Más de 32 años liderando investigaciones universitarias, tutorías
                metodológicas y jurados evaluadores en España y Latinoamérica.
              </p>
              <ul className="space-y-3">
                {[
                  "Docencia universitaria y desarrollo metodológico cuantitativo y cualitativo",
                  "Dominio avanzado de SPSS y ATLAS.ti",
                  "Auditoría de originalidad y normativa APA, Vancouver e ICONTEC",
                  "Acompañamiento integral en pregrado, posgrado y doctorado",
                ].map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-navy-dark/5 hover:shadow-md transition-shadow"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-navy-light shrink-0" />
                    <span className="text-sm text-navy-mid leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section id="servicios" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow mb-3 block text-navy-light">Servicios</span>
            <h2 className="font-serif text-4xl text-navy-dark">Instrumentos de acompañamiento</h2>
            <p className="mt-4 text-navy-mid font-light max-w-[50ch] mx-auto">
              Cada etapa de tu investigación cubierta con criterio técnico, desde la matriz de objetivos hasta el día de la defensa.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {servicios.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl p-8 border border-navy-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-navy-dark/5 to-navy-light/5 -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-dark to-navy-mid flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                    <span className="font-serif text-white font-bold text-lg">{s.n}</span>
                  </div>
                  <h3 className="mb-3 font-serif text-xl text-navy-dark">{s.title}</h3>
                  <p className="text-sm leading-relaxed font-light text-navy-mid">{s.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy-dark/5">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola, necesito información sobre: ${s.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-widest text-navy-light uppercase hover:text-navy-dark transition-colors"
                  >
                    Consultar →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section className="py-24 bg-gradient-to-br from-navy-dark via-navy-mid to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow mb-3 block text-navy-light/70">Testimonios</span>
            <h2 className="font-serif text-4xl text-white">Casos reales de aprobación</h2>
            <p className="mt-4 font-light text-white/50 max-w-[45ch] mx-auto">
              Protegemos la identidad de cada alumno por estricto código de ética profesional.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {casos.map((c) => (
              <figure key={c.ref} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: c.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <blockquote className="font-serif text-lg leading-relaxed italic text-white/90 mb-6">
                  "{c.quote}"
                </blockquote>
                <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <div>
                    <div className="text-sm font-semibold text-white">{c.ref}</div>
                    <div className="text-xs text-white/50">{c.meta}</div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full">
                    {c.badge}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section id="recursos" className="py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-16">
            <div>
              <span className="eyebrow mb-2 block text-navy-light">Recursos gratuitos</span>
              <h2 className="font-serif text-4xl text-navy-dark">Blog de orientación metodológica</h2>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold tracking-widest text-navy-light uppercase hover:text-navy-dark transition-colors shrink-0"
            >
              Ver todos →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {articulos.map((a) => (
              <article
                key={a.title}
                className="group bg-white rounded-2xl overflow-hidden border border-navy-dark/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="bg-gradient-to-br from-navy-dark to-navy-mid p-8 flex items-center justify-center">
                  <span className="font-serif text-white/30 text-6xl font-bold">{a.label}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="eyebrow mb-3 text-navy-light text-[10px]">{a.tag}</span>
                  <h3 className="mb-3 font-serif text-lg leading-snug text-navy-dark flex-1">{a.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed font-light text-navy-mid">{a.desc}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola, me interesa la guía: ${a.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-navy-dark uppercase hover:text-navy-light transition-colors"
                  >
                    Leer guía completa <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COTIZAR ─── */}
      <section id="cotizar" className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-2xl border border-navy-dark/8 shadow-2xl shadow-navy-dark/5 overflow-hidden">
            <div className="bg-gradient-to-r from-navy-dark to-navy-mid p-8 text-center">
              <h2 className="font-serif text-3xl text-white">Panel de cotización</h2>
              <p className="mt-2 text-white/60 text-sm font-light">Cuéntanos tu caso y recibe una cotización personalizada vía WhatsApp</p>
            </div>
            <div className="p-8 md:p-12">
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <Field label="Área de estudio" value={area} onChange={setArea}>
                  <option>Derecho y ciencias jurídicas</option>
                  <option>Economía, contabilidad y finanzas</option>
                  <option>Ciencias de la salud y bioética</option>
                  <option>MBA y administración</option>
                  <option>Educación y ciencias sociales</option>
                  <option>Otra área / multidisciplinar</option>
                </Field>
                <Field label="Nivel académico" value={nivel} onChange={setNivel}>
                  <option>Doctorado (Ph.D.)</option>
                  <option>Máster (TFM)</option>
                  <option>Grado (TFG)</option>
                </Field>
                <Field label="Ubicación y moneda" value={pais} onChange={setPais}>
                  <option>España y UE (€ EUR)</option>
                  <option>Colombia (COP)</option>
                  <option>México (MXN)</option>
                  <option>Chile (CLP)</option>
                  <option>Venezuela / Latinoamérica (USD)</option>
                </Field>
                <Field label="Estado de avance" value={avance} onChange={setAvance}>
                  <option>Sin iniciar</option>
                  <option>Metodología pendiente</option>
                  <option>Análisis de datos pendiente</option>
                  <option>Solo revisión final</option>
                  <option>Preparación de defensa</option>
                </Field>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 bg-gradient-to-r from-navy-dark to-navy-mid py-5 text-sm font-bold tracking-widest text-white uppercase transition-all hover:shadow-xl hover:shadow-navy-dark/20 rounded-xl hover:scale-[1.01]"
              >
                Solicitar presupuesto por WhatsApp
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] tracking-wide text-navy-mid/70">
                <span className="font-semibold uppercase text-navy-dark">Atención directa:</span>
                <span className="inline-flex items-center gap-1 font-medium"><span>🇪🇸</span> +34 644 293 791</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 font-medium"><span>🇨🇴</span> +57 321 431 0644</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 font-medium"><span>🇻🇪</span> +58 414 600 7451</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-navy-dark px-6 pt-20 pb-10 text-paper">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-16 md:grid-cols-2">
            <div>
              <div className="mb-6">
                <span className="font-serif text-2xl font-bold text-white">GuiaDirecta</span>
              </div>
              <h2 className="mb-6 font-serif text-4xl text-white leading-tight">Tu grado académico <span className="italic text-navy-light">empieza hoy.</span></h2>
              <p className="mb-8 max-w-[45ch] font-light text-paper/50 text-sm leading-relaxed">
                No pongas en riesgo años de estudio. Cupos limitados este mes para entregas urgentes y auditoría exprés.
              </p>
              <div className="space-y-3">
                <p className="eyebrow text-navy-light text-[10px]">Líneas de Atención WhatsApp</p>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  {CONTACT_NUMBERS.map((c) => (
                    <a
                      key={c.country}
                      href={`https://wa.me/${c.raw}?text=${encodeURIComponent("Hola, necesito asesoría académica")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3.5 py-2 text-xs text-paper/90 border border-white/10 hover:bg-white/15 hover:text-white transition-all group"
                    >
                      <span className="text-base leading-none">{c.flag}</span>
                      <span className="font-semibold text-white">{c.country}:</span>
                      <span className="font-mono text-paper/80 group-hover:text-white transition-colors">{c.number}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, tengo una entrega urgente y necesito cotización")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 font-serif text-2xl text-white hover:text-navy-light transition-colors"
              >
                Contáctanos vía WhatsApp
                <span className="flex size-12 items-center justify-center rounded-full border border-paper/30 transition-all group-hover:bg-white group-hover:text-navy-dark">
                  →
                </span>
              </a>
              <p className="mt-8 text-sm tracking-widest opacity-40 uppercase">
                Sin plagio · Confidencialidad absoluta
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-10 text-[10px] tracking-widest uppercase opacity-40 md:flex-row">
            <p>© {new Date().getFullYear()} Casalins · Guía Directa</p>
            <div className="flex gap-6">
              <span>Privacidad</span>
              <span>Términos</span>
              <span>Auditoría Compilatio</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] font-bold tracking-widest text-navy-mid/60 uppercase">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-navy-dark/15 rounded-lg bg-paper/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-light/30 focus:border-navy-light transition-all"
      >
        {children}
      </select>
    </div>
  );
}
