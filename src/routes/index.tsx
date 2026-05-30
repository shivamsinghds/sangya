import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Cable,
  Cpu,
  Drill,
  FileCheck2,
  Gauge,
  HardHat,
  Layers,
  Map as MapIcon,
  Radio,
  Route as RouteIcon,
  ShieldCheck,
  Train,
  Waves,
  Zap,
} from "lucide-react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

import { 
  heroImg, sOfc, sPiling, sCivil, sMetro, sRoads, sWater, sElec, sTele, machinery, aboutImg, ctaImg, pMetro, pHighway, pOfc, dArvind,
  metrics, services, projects, clients, whyChoose, certifications, timeline
} from "@/data";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      {
        title:
          "Top Infrastructure & EPC Construction Company in India | Sangya Traders & Construction",
      },
      {
        name: "description",
        content:
          "India's premier infrastructure execution company and EPC contractor. Specializing in telecom OFC laying, heavy piling, metro viaducts, civil construction, roads, and water infrastructure across PAN India.",
      },
      {
        name: "keywords",
        content:
          "Top infrastructure company India, EPC contractors India, OFC laying contractor, heavy piling contractor India, Jal Jeevan Mission contractor, metro infrastructure company, civil construction company, telecom infrastructure services, Sangya Traders & Construction",
      },
      {
        property: "og:title",
        content: "Top Infrastructure & EPC Construction Company in India | Sangya Traders & Construction",
      },
      {
        property: "og:description",
        content:
          "India's premier infrastructure execution company. 16+ years of large-scale execution across 18 states. Trusted by L&T, AFCONS, HFCL, Reliance Jio and NHAI.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://sangyatraders.com" },
      { name: "twitter:title", content: "Top Infrastructure & EPC Construction Company in India | Sangya Traders & Construction" },
      { name: "twitter:description", content: "India's premier infrastructure execution company. 16+ years of large-scale execution across 18 states." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
}));

/* ──────────────── CUSTOM CURSOR ──────────────── */

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const ringX = useSpring(cursorX, { damping: 35, stiffness: 250 });
  const ringY = useSpring(cursorY, { damping: 35, stiffness: 250 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      if ((e.target as Element).closest("a,button")) setHovered(true);
    };
    const out = () => setHovered(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        className={`cursor-ring ${hovered ? "hover" : ""}`}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}

/* ──────────────── PRELOADER ──────────────── */

function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      onAnimationComplete={onDone}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
      style={{ background: "oklch(0.04 0.004 240)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-muted-foreground mb-8 text-center px-4 leading-relaxed"
      >
        Est. 2007 · PAN India
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="font-display text-2xl md:text-4xl uppercase tracking-wider text-foreground mb-10 text-center px-6 leading-tight max-w-[90vw]"
      >
        <span className="block md:inline">Sangya Traders</span>
        <span className="block my-2 md:inline md:mx-3 md:my-0 text-gold">&</span>
        <span className="block md:inline">Construction</span>
      </motion.h1>
      <div className="w-48 h-[1px] bg-border overflow-hidden">
        <motion.div
          className="h-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: "linear-gradient(90deg, oklch(0.76 0.17 80), oklch(0.58 0.14 62))" }}
        />
      </div>
    </motion.div>
  );
}

/* ──────────────── PAGE ──────────────── */

function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <CustomCursor />
      <SmoothScroll />
      <SiteNav />
      <main>
        <Hero />
        <TrustMetrics />
        <Services />
        <FeaturedProjects />
        <ClientsWall />
        <WhyChooseUs />
        <DirectorVision />
        <CtaBlock />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ──────────────── SECTIONS ──────────────── */

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Large-scale Indian infrastructure construction site with metro viaduct and cranes at dusk"
          className="h-full w-full object-cover animate-kenburns"
          width={1920}
          height={1280}
        />
        {/* Dark overlay — stronger for dark theme */}
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        {/* Additional dramatic vignette */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, oklch(0.06 0.005 240 / 0.8) 100%)",
        }} />
        <div className="absolute inset-0 industrial-grid opacity-20" />
      </div>

      {/* Ambient side glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container-x relative z-10 pb-28 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-numeric mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.55em] text-gold"
        >
          <span className="h-px w-12" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
          Est. 2007 · PAN India · Execution-Led
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-tight text-white"
        >
          Building India's<br />
          <span className="text-gradient-gold">Next-Generation</span> Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg"
        >
          Integrated infrastructure & engineering execution across telecom, metro,
          roads, water, civil and electrical projects — trusted by India's largest
          EPC contractors and government bodies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="btn-gold group inline-flex items-center gap-3 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ borderRadius: "2px" }}
          >
            Explore Projects
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
            style={{ border: "1px solid oklch(0.94 0.006 60 / 0.25)", borderRadius: "2px" }}
          >
            Contact Us
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 gap-px md:grid-cols-4"
          style={{ background: "oklch(0.94 0.006 60 / 0.06)" }}
        >
          {[
            { k: "16+", v: "Years" },
            { k: "100+", v: "Projects" },
            { k: "3000+ KM", v: "Fiber Deployed" },
            { k: "₹200 Cr", v: "Turnover Capacity" },
          ].map((s) => (
            <div
              key={s.v}
              className="stat-chip group flex flex-col gap-1.5 px-7 py-6 cursor-default"
            >
              <span className="font-display text-2xl text-foreground transition-colors group-hover:text-gold md:text-3xl">
                {s.k}
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {s.v}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 right-8 flex flex-col items-center gap-3"
        >
          <span className="font-numeric text-[9px] uppercase tracking-[0.4em] text-muted-foreground rotate-90 origin-center">Scroll</span>
          <div className="w-[1px] h-16 overflow-hidden" style={{ background: "var(--border)" }}>
            <motion.div
              className="w-full h-1/2"
              animate={{ y: ["0%", "200%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "var(--gold)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustMetrics() {
  return (
    <section className="border-y border-border py-20" style={{ background: "oklch(0.07 0.005 240)" }}>
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionEyebrow>By the Numbers</SectionEyebrow>
            <h2 className="font-display mt-3 max-w-3xl text-4xl uppercase md:text-5xl">
              Scale that defines <span className="text-gradient-gold">credibility</span>
            </h2>
          </div>
        </Reveal>

        <div
          className="mt-10 grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-6"
          style={{ background: "var(--border)" }}
        >
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06} className="group relative flex flex-col items-center text-center overflow-hidden p-6 xl:p-8 cursor-default" style={{ background: "oklch(0.07 0.005 240)" }}>
              <div
                className="absolute inset-x-0 top-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--gold)", boxShadow: "0 0 12px 0 oklch(0.72 0.16 78 / 0.6)" }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse 80% 80% at 50% 0%, oklch(0.72 0.16 78 / 0.05) 0%, transparent 70%)" }}
              />
              <p className="font-numeric flex items-baseline justify-center whitespace-nowrap text-4xl text-foreground transition-colors group-hover:text-gold xl:text-5xl">
                {m.prefix && <span>{m.prefix}</span>}
                <Counter to={m.value} />
                {m.suffix && <span className="ml-1 text-2xl xl:text-3xl">{m.suffix.trim()}</span>}
              </p>
              <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-muted-foreground xl:text-[10px] xl:tracking-[0.28em]">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-36" style={{ background: "var(--background)" }}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="container-x relative z-10">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionEyebrow>Capabilities</SectionEyebrow>
            <h2 className="font-display mt-4 max-w-2xl text-4xl uppercase md:text-6xl">
              Integrated infrastructure execution
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              From fiber backbones to elevated metro viaducts — we self-execute
              with owned machinery, in-house engineering and statewide site teams.
            </p>
          </Reveal>
        </div>

        <div
          className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4"
          style={{ background: "var(--border)" }}
        >
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <ServiceCard {...s} index={i + 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <Link
            to="/services"
            className="btn-gold group inline-flex items-center gap-3 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ borderRadius: "2px" }}
          >
            View All Services
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  img,
  index = 1,
}: {
  icon: typeof Cable;
  title: string;
  desc: string;
  img: string;
  index?: number;
}) {
  return (
    <div className="relative h-full" style={{ background: "var(--gold)" }}>
      <article
        className="beveled-bl group relative flex h-full flex-col overflow-hidden cursor-pointer"
        style={{ background: "oklch(0.09 0.006 240)", transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(4px, -4px)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)"; }}
      >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Dark scrim */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, oklch(0.09 0.006 240 / 0.85) 0%, oklch(0.09 0.006 240 / 0.30) 60%, transparent 100%)",
        }} />
        {/* Gold top shimmer on hover */}
        <div className="absolute inset-x-0 top-0 h-[1px] scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />

        {/* Service index number */}
        <span
          className="absolute right-5 top-5 font-numeric text-5xl font-bold leading-none opacity-20 transition-opacity duration-500 group-hover:opacity-40"
          style={{ color: "var(--gold)" }}
        >
          {String(index).padStart(2, "0")}
        </span>
        <span
          className="absolute left-5 top-5 grid h-11 w-11 place-items-center text-gold transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg]"
          style={{
            background: "oklch(0.06 0.005 240 / 0.85)",
            border: "1px solid oklch(0.72 0.16 78 / 0.5)",
            boxShadow: "0 0 16px -4px oklch(0.72 0.16 78 / 0.3)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Icon size={18} strokeWidth={1.5} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3
          className="font-display text-xl uppercase text-foreground transition-colors duration-300 group-hover:text-gold"
        >
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold opacity-50 transition-all duration-500 group-hover:gap-3 group-hover:opacity-100">
          Explore <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </article>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="relative overflow-hidden border-y border-border py-36"
      style={{ background: "oklch(0.07 0.005 240)" }}>
      {/* bg glow */}
      <div className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px] opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="container-x relative z-10">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
          <Reveal>
            <SectionEyebrow>Featured Projects</SectionEyebrow>
            <h2 className="font-display mt-4 max-w-2xl text-4xl uppercase md:text-6xl">
              Built for the <span className="text-gradient-gold">nation's spine</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/projects" className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              View all engagements <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 overflow-x-auto pb-8 [scrollbar-width:thin] [scrollbar-color:var(--gold-dim)_transparent]">
        <div className="container-x flex gap-6 [scroll-snap-type:x_mandatory]">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.06}
              className="min-w-[320px] max-w-[440px] flex-1 [scroll-snap-align:start] md:min-w-[440px]"
            >
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  slug, name, client, type, location, img,
}: { slug: string; name: string; client: string; type: string; location: string; img: string }) {
  return (
    <Link to={`/projects/${slug}`} className="block relative h-[540px]" style={{ background: "var(--gold)" }}>
      <article
        className="beveled-tr card-premium group relative h-full overflow-hidden cursor-pointer"
        style={{ transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-4px, -4px)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)"; }}
      >
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
      />
      {/* Strong dark scrim for readability */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to top, oklch(0.06 0.005 240 / 0.98) 0%, oklch(0.06 0.005 240 / 0.60) 40%, oklch(0.06 0.005 240 / 0.20) 100%)",
      }} />

      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(225deg, oklch(0.72 0.16 78 / 0.3) 0%, transparent 60%)",
        }} />

      <div className="relative flex h-full flex-col justify-between p-8">
        <div className="flex items-center justify-between">
          <span
            className="font-numeric px-3 py-1.5 text-[9px] uppercase tracking-[0.35em] text-gold"
            style={{
              background: "oklch(0.72 0.16 78 / 0.10)",
              border: "1px solid oklch(0.72 0.16 78 / 0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            {type}
          </span>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{client} · {location}</p>
          <h3 className="font-display mt-3 text-3xl uppercase leading-tight text-foreground">
            {name}
          </h3>
          {/* Hover reveal bar */}
          <div className="mt-5 overflow-hidden">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              View Case Study <ArrowUpRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
}

function ClientsWall() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-border py-20" style={{ background: "var(--background)" }}>
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionEyebrow>Trusted Partnerships</SectionEyebrow>
            <h2 className="font-display mt-4 max-w-2xl text-3xl uppercase md:text-4xl">
              Delivering for India's largest contractors
            </h2>
          </div>
        </Reveal>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />
        <div className="flex w-max animate-marquee gap-4 py-2">
          {row.map((c, i) => (
            <div
              key={`r1-${c}-${i}`}
              className="group flex h-20 min-w-[220px] items-center justify-center px-10 cursor-default transition-all duration-300"
              style={{
                border: "1px solid oklch(0.94 0.006 60 / 0.08)",
                background: "oklch(0.09 0.006 240)",
              }}
            >
              <span className="font-display text-2xl font-bold uppercase tracking-[0.12em] text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:scale-105">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left (reverse) */}
      <div className="relative mt-3 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />
        <div className="flex w-max animate-marquee-reverse gap-4 py-2">
          {[...row].reverse().map((c, i) => (
            <div
              key={`r2-${c}-${i}`}
              className="group flex h-20 min-w-[220px] items-center justify-center px-10 cursor-default transition-all duration-300"
              style={{
                border: "1px solid oklch(0.94 0.006 60 / 0.05)",
                background: "oklch(0.08 0.005 240)",
              }}
            >
              <span className="font-display text-2xl font-bold uppercase tracking-[0.12em] transition-all duration-300 group-hover:scale-105" style={{ color: "oklch(0.45 0.008 240)" }}>
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function WhyChooseUs() {
  return (
    <section className="relative border-y border-border py-36" style={{ background: "var(--background)" }}>
      <div className="container-x">
        <Reveal>
          <SectionEyebrow>Why Sangya Traders & Construction</SectionEyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl uppercase md:text-6xl">
            Engineered for trust.<br />Built for scale.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3"
          style={{ background: "var(--border)" }}>
          {whyChoose.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 0.06}
              className="card-gold-border group relative overflow-hidden p-9 cursor-default"
              style={{ background: "oklch(0.09 0.006 240)" }}
            >
              {/* Corner glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse 60% 60% at 0% 0%, oklch(0.72 0.16 78 / 0.07) 0%, transparent 70%)" }} />

              <span
                className="grid h-12 w-12 place-items-center text-gold"
                style={{
                  background: "oklch(0.72 0.16 78 / 0.08)",
                  border: "1px solid oklch(0.72 0.16 78 / 0.3)",
                  transition: "background 0.3s, box-shadow 0.3s",
                }}
              >
                <w.icon size={20} strokeWidth={1.5} />
              </span>
              <h3 className="font-display mt-7 text-xl uppercase transition-colors duration-300 group-hover:text-gold">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              {/* Bottom gold line reveal */}
              <div className="absolute bottom-0 left-0 right-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"
                style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}





function DirectorVision() {
  return (
    <section className="relative overflow-hidden py-32" style={{ background: "oklch(0.07 0.005 240)" }}>
      {/* Background glow behind photo */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 items-center">
          
          {/* Photo Side - Premium Treatment */}
          <div className="lg:col-span-5 relative">
            <Reveal variant="fade-right">
              <div className="relative aspect-[4/5] w-full overflow-hidden" 
                   style={{ 
                     border: "1px solid oklch(0.94 0.006 60 / 0.1)",
                     boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                   }}>
                <img 
                  src={dArvind} 
                  alt="Arvind Kumar, Managing Director"
                  className="w-full h-full object-cover"
                  style={{ 
                    filter: "grayscale(100%) contrast(1.15) brightness(0.9)",
                    transition: "filter 0.5s ease"
                  }}
                />
                {/* Dark overlay gradient to blend bottom */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to top, oklch(0.07 0.005 240 / 0.9) 0%, transparent 40%)"
                }} />
                
                {/* Gold corner accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/50" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/50" />
              </div>
            </Reveal>
          </div>

          {/* Quote Side */}
          <div className="lg:col-span-7 relative">
            <Reveal variant="fade-left">
              {/* Massive background quote mark */}
              <div className="absolute -top-16 -left-8 text-[15rem] leading-none font-display opacity-5 select-none" style={{ color: "var(--gold)" }}>
                "
              </div>
              
              <div className="relative z-10">
                <SectionEyebrow>Director's Message</SectionEyebrow>
                
                <h2 className="font-display mt-8 text-3xl md:text-5xl lg:text-6xl uppercase leading-[1.1] text-white">
                  "We don't just execute contracts; we engineer the <span className="text-gradient-gold">foundations of tomorrow</span>."
                </h2>
                
                <p className="mt-8 text-base leading-relaxed text-muted-foreground max-w-2xl">
                  Since 2007, our commitment has been to deliver scale without compromising on precision. Whether we are laying national optic fiber backbones or driving heavy viaduct piling, we view every project as a critical asset for India's growth. Our engineering teams operate with a singular focus: safe, timeline-driven execution that stands the test of time.
                </p>

                <div className="mt-12 flex flex-col gap-2 border-l-2 pl-6" style={{ borderColor: "var(--gold)" }}>
                  <p className="font-display text-2xl uppercase text-white tracking-widest">Arvind Kumar</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Managing Director</p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

function CtaBlock() {
  return (
    <section id="contact" className="relative isolate overflow-hidden noise">
      <img
        src={ctaImg}
        alt="Illuminated elevated metro at night"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Very dark overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to top, oklch(0.04 0.004 240 / 0.98) 0%, oklch(0.04 0.004 240 / 0.75) 50%, oklch(0.04 0.004 240 / 0.55) 100%)",
      }} />
      <div className="absolute inset-0 industrial-grid opacity-15" />

      {/* Ambient gold glow at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-15"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)" }} />

      <div className="container-x relative z-10 py-40 md:py-56">
        <Reveal>
          <SectionEyebrow>Partner With Us</SectionEyebrow>
          <h2 className="font-display mt-6 max-w-5xl text-5xl uppercase leading-[0.92] md:text-7xl lg:text-8xl">
            Let's build infrastructure<br />
            <span className="text-gradient-gold">that lasts.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Brief us on your next package. Our pre-bid, planning and execution
            teams typically respond within 24 hours.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:sangyaarvind1979@gmail.com"
              className="btn-gold group inline-flex items-center gap-3 px-9 py-4.5 text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ borderRadius: "2px" }}
            >
              Start a Project
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+917081886666"
              className="btn-outline inline-flex items-center gap-3 px-9 py-4.5 text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ borderRadius: "2px" }}
            >
              <span>Call Us Now</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────── HELPERS ──────────────── */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-numeric flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold">
      <span
        className="h-px w-10 gold-pulse"
        style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
      />
      {children}
    </p>
  );
}
