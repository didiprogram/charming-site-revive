import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

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

const areas = [
  {
    n: "01",
    title: "Derecho",
    desc: "Jurisprudencia, derecho comparado, marco jurídico-institucional y bioética.",
  },
  {
    n: "02",
    title: "Economía",
    desc: "Finanzas, contabilidad, econometría y gestión empresarial.",
  },
  {
    n: "03",
    title: "Salud",
    desc: "Enfermería, medicina, bioética y bioestadística avanzada.",
  },
  {
    n: "04",
    title: "MBA y Educación",
    desc: "Liderazgo, innovación, ciencias sociales y proyectos educativos.",
  },
];

const servicios = [
  {
    title: "Redacción y estructura",
    desc: "Planteamiento, matriz de objetivos, marco teórico y coherencia argumentativa de principio a fin.",
  },
  {
    title: "Análisis SPSS y ATLAS.ti",
    desc: "Tratamiento cuantitativo y cualitativo con interpretación técnica de resultados lista para el tribunal.",
  },
  {
    title: "Normas APA, Vancouver e ICONTEC",
    desc: "Citación, referencias y formato ajustados con precisión a la normativa que exige tu universidad.",
  },
  {
    title: "Auditoría antiplagio Compilatio",
    desc: "Paráfrasis científica y revisión de originalidad para entregar sin riesgo de penalización.",
  },
  {
    title: "Preparación de defensa",
    desc: "Presentación, simulacro de preguntas del jurado y entrenamiento de oratoria académica.",
  },
  {
    title: "Confidencialidad por contrato",
    desc: "Identidad protegida, trato directo con la dirección académica y trazabilidad de cada entrega.",
  },
];

const articulos = [
  {
    tag: "Investigación jurídica",
    title: "Temas de tesis en Derecho: ideas y líneas de investigación",
    desc: "Cómo elegir un tema viable en derecho penal, civil, IA y ciberdelincuencia.",
  },
  {
    tag: "Normas APA 7.ª",
    title: "Cita, referencia y bibliografía: ¿en qué se diferencian?",
    desc: "Por qué mezclar estos conceptos es uno de los motivos más comunes de penalización.",
  },
  {
    tag: "Análisis SPSS",
    title: "Cómo elegir entre prueba T y ANOVA para tu hipótesis",
    desc: "Guía clara para seleccionar el tratamiento estadístico según el número de grupos.",
  },
];

const casos = [
  {
    ref: "Cliente Posgrado #1042",
    meta: "Trabajo Fin de Máster aprobado",
    quote:
      "Le informo que el trabajo ha sido aprobado por el tribunal como apto. Su trabajo ha sido excepcional y clave para garantizar el éxito del mismo.",
    badge: "Apto por tribunal",
  },
  {
    ref: "Cliente Grado #0988",
    meta: "Sustentación de grado",
    quote:
      "Defendí hace poco con nota máxima. Muchas gracias por su ayuda y apoyo en este proceso que me tuvo tan estresado.",
    badge: "Calificación máxima",
  },
];

const nav = [
  { label: "Áreas", href: "#areas" },
  { label: "Dirección", href: "#direccion" },
  { label: "Servicios", href: "#servicios" },
  { label: "Recursos", href: "#recursos" },
  { label: "Cotizar", href: "#cotizar" },
];

function Index() {
  const [area, setArea] = useState("Derecho y ciencias jurídicas");
  const [nivel, setNivel] = useState("Doctorado (Ph.D.)");
  const [pais, setPais] = useState("España y UE (€ EUR)");
  const [avance, setAvance] = useState("Sin iniciar");

  const whatsappUrl = useMemo(() => {
    const texto = `Hola, necesito asesoría metodológica.\nÁrea: ${area}\nNivel: ${nivel}\nUbicación/moneda: ${pais}\nEstado de avance: ${avance}`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  }, [area, nivel, pais, avance]);

  return (
    <div className="min-h-screen bg-background font-sans text-navy-dark">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-navy-dark/5 bg-card/80 px-6 py-4 backdrop-blur-md">
        <span className="font-serif text-xl font-bold tracking-tight text-navy-dark underline decoration-navy-light underline-offset-4">
          CASALINS
        </span>
        <div className="hidden gap-8 text-xs font-semibold tracking-widest text-navy-mid uppercase md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-navy-light"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <header className="relative mx-auto max-w-7xl overflow-hidden px-6 pt-20 pb-32">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="animate-fade-up md:col-span-8">
            <div className="mb-6 flex flex-wrap gap-4">
              <span className="rounded-sm bg-paper px-3 py-1 text-[10px] font-bold tracking-tighter text-navy-mid uppercase ring-1 ring-navy-mid/10">
                +32 años de trayectoria
              </span>
              <span className="rounded-sm bg-paper px-3 py-1 text-[10px] font-bold tracking-tighter text-navy-mid uppercase ring-1 ring-navy-mid/10">
                Confidencialidad absoluta
              </span>
            </div>
            <h1 className="mb-8 text-balance font-serif text-5xl leading-[1.1] md:text-7xl">
              La excelencia académica no es casualidad, es{" "}
              <span className="italic">rigor científico.</span>
            </h1>
            <p className="mb-10 max-w-[55ch] text-lg leading-relaxed font-light text-navy-mid">
              Acompañamiento metodológico de alto nivel para TFG, TFM y tesis doctorales en
              España, Colombia, México, Chile y toda Latinoamérica. Transformamos la
              complejidad en claridad académica verificable.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#cotizar"
                className="bg-navy-dark px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-xl shadow-navy-dark/10 transition-all hover:bg-navy-mid"
              >
                Iniciar consultoría
              </a>
              <span className="text-xs tracking-wide text-navy-light">
                Auditoría antiplagio Compilatio incluida
              </span>
            </div>
          </div>
          <div className="animate-fade-up md:col-span-4 [animation-delay:200ms]">
            <img
              src={portada}
              alt="Tesis doctorales encuadernadas sobre un escritorio de madera"
              width={800}
              height={1000}
              className="mb-4 aspect-4/5 w-full rounded-sm object-cover outline-1 -outline-offset-1 outline-navy-dark/10"
            />
          </div>
        </div>
      </header>

      <section id="areas" className="bg-navy-dark px-6 py-24 text-paper">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center font-serif text-3xl">
            Áreas disciplinares específicas
          </h2>
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {areas.map((a) => (
              <div
                key={a.n}
                className="bg-navy-dark p-8 transition-colors hover:bg-navy-mid"
              >
                <span className="mb-4 block text-[10px] tracking-widest opacity-50">
                  {a.n}
                </span>
                <h3 className="mb-2 font-serif text-xl">{a.title}</h3>
                <p className="text-xs leading-relaxed font-light opacity-70">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="direccion" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-20 md:grid-cols-2">
          <div className="relative">
            <img
              src={direccion}
              alt="Anabella Casalins Cabarcas, dirección académica de Casalins"
              width={1000}
              height={1200}
              loading="lazy"
              className="aspect-5/6 w-full rounded-sm object-cover outline-1 -outline-offset-1 outline-navy-dark/10"
            />
            <div className="mt-6 border border-navy-dark/5 bg-card p-8 shadow-2xl md:absolute md:-right-6 md:-bottom-6 md:mt-0 md:max-w-sm">
              <p className="font-serif text-lg italic text-navy-dark">
                “Garantizamos que tu voz académica sea escuchada con el rigor que la
                ciencia exige.”
              </p>
            </div>
          </div>
          <div>
            <span className="eyebrow mb-4 block text-navy-light">Dirección académica</span>
            <h2 className="mb-6 font-serif text-4xl text-navy-dark">
              Anabella Casalins Cabarcas
            </h2>
            <p className="mb-8 leading-relaxed font-light text-navy-mid">
              Fundadora y dirección académica multidisciplinar de @Casalins y Guía Directa.
              Más de 32 años liderando investigaciones universitarias, tutorías
              metodológicas y jurados evaluadores en España y Latinoamérica.
            </p>
            <ul className="space-y-4">
              {[
                "Docencia universitaria y desarrollo metodológico cuantitativo y cualitativo",
                "Dominio avanzado de SPSS y ATLAS.ti",
                "Auditoría de originalidad y normativa APA, Vancouver e ICONTEC",
                "Acompañamiento integral en pregrado, posgrado y doctorado",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-navy-dark/5 pb-4 text-sm text-navy-mid"
                >
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-navy-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-2 block text-navy-light">Servicios</span>
            <h2 className="font-serif text-4xl">Instrumentos de acompañamiento</h2>
          </div>
          <p className="max-w-[40ch] text-sm text-navy-mid">
            Cada etapa de tu investigación cubierta con criterio técnico, desde la matriz
            de objetivos hasta el día de la defensa.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="group border border-navy-dark/5 bg-card p-10 transition-all hover:shadow-xl"
            >
              <div className="mb-8 size-10 rounded-full bg-navy-dark transition-colors group-hover:bg-navy-light" />
              <h3 className="mb-4 font-serif text-xl">{s.title}</h3>
              <p className="text-sm leading-relaxed font-light text-navy-mid">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cotizar" className="bg-paper px-6 py-24">
        <div className="mx-auto max-w-4xl border border-navy-dark/10 bg-card p-8 shadow-sm md:p-12">
          <h2 className="mb-8 text-center font-serif text-3xl">Panel de cotización</h2>
          <div className="mb-8 grid gap-8 md:grid-cols-2">
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
            className="flex w-full items-center justify-center gap-4 bg-navy-dark py-5 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-navy-mid"
          >
            Solicitar presupuesto por WhatsApp
          </a>
          <p className="mt-6 text-center text-[10px] tracking-wide text-navy-mid/60 uppercase">
            Atención inmediata: +34 644 293 791
          </p>
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <span className="eyebrow mb-2 block text-navy-light">Recursos gratuitos</span>
          <h2 className="font-serif text-4xl">Blog de orientación metodológica</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {articulos.map((a) => (
            <article
              key={a.title}
              className="flex flex-col border-t border-navy-dark/10 pt-6"
            >
              <span className="eyebrow mb-4 text-navy-light">{a.tag}</span>
              <h3 className="mb-3 font-serif text-xl leading-snug">{a.title}</h3>
              <p className="mb-6 text-sm leading-relaxed font-light text-navy-mid">
                {a.desc}
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola, me interesa la guía: ${a.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-xs font-bold tracking-widest text-navy-dark uppercase underline decoration-navy-light underline-offset-4 transition-colors hover:text-navy-light"
              >
                Leer guía completa
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl">Casos reales de aprobación</h2>
            <p className="max-w-[42ch] text-sm text-navy-mid">
              Protegemos la identidad de cada alumno por estricto código de ética
              profesional. Más de 1.000 trabajos aprobados.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {casos.map((c) => (
              <figure key={c.ref} className="border border-navy-dark/10 bg-card p-10">
                <blockquote className="font-serif text-lg leading-relaxed italic text-navy-dark">
                  “{c.quote}”
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-navy-dark/5 pt-6">
                  <div>
                    <div className="text-sm font-semibold">{c.ref}</div>
                    <div className="text-xs text-navy-mid">{c.meta}</div>
                  </div>
                  <span className="bg-navy-dark px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                    {c.badge}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-navy-dark px-6 pt-24 pb-12 text-paper">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid gap-20 md:grid-cols-2">
            <div>
              <h2 className="mb-8 font-serif text-5xl">Tu grado académico empieza hoy.</h2>
              <p className="mb-8 max-w-[45ch] font-light text-paper/60">
                No pongas en riesgo años de estudio. Cupos limitados este mes para entregas
                urgentes y auditoría exprés.
              </p>
              <div className="space-y-4">
                <p className="eyebrow text-navy-light">Atención</p>
                <div className="flex flex-wrap gap-8 text-sm opacity-80">
                  <span>España +34</span>
                  <span>Colombia +57</span>
                  <span>Venezuela +58</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, tengo una entrega urgente y necesito cotización")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 font-serif text-2xl"
              >
                Contáctanos vía WhatsApp
                <span className="flex size-12 items-center justify-center rounded-full border border-paper/30 transition-all group-hover:bg-paper group-hover:text-navy-dark">
                  →
                </span>
              </a>
              <p className="mt-8 text-sm tracking-widest opacity-40 uppercase">
                Sin plagio · Confidencialidad absoluta
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-12 text-[10px] tracking-widest uppercase opacity-40 md:flex-row">
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
        className="w-full border-b border-navy-mid bg-paper/50 px-0 py-3 text-sm focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
}
