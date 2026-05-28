import { createFileRoute } from "@tanstack/react-router";
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

const heroImg = "/assets/hero-infrastructure.jpg";
const sOfc = "/assets/service-ofc.jpg";
const sPiling = "/assets/service-piling.jpg";
const sCivil = "/assets/service-civil.jpg";
const sMetro = "/assets/service-metro.jpg";
const sRoads = "/assets/service-roads.jpg";
const sWater = "/assets/service-water.jpg";
const sElec = "/assets/service-electrical.jpg";
const sTele = "/assets/service-telecom.jpg";
const machinery = "/assets/machinery-fleet.jpg";
const aboutImg = "/assets/about-team.jpg";
const ctaImg = "/assets/cta-bg.jpg";
const pMetro = "/assets/project-metro.jpg";
const pHighway = "/assets/project-highway.jpg";
const pOfc = "/assets/project-ofc.jpg";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      {
        title:
          "Top Infrastructure & EPC Construction Company in India | Sangya Traders",
      },
      {
        name: "description",
        content:
          "India's premier infrastructure execution company and EPC contractor. Specializing in telecom OFC laying, heavy piling, metro viaducts, civil construction, roads, and water infrastructure across PAN India.",
      },
      {
        name: "keywords",
        content:
          "Top infrastructure company India, EPC contractors India, OFC laying contractor, heavy piling contractor India, Jal Jeevan Mission contractor, metro infrastructure company, civil construction company, telecom infrastructure services, Sangya Traders",
      },
      {
        property: "og:title",
        content: "Top Infrastructure & EPC Construction Company in India | Sangya Traders",
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
      { name: "twitter:title", content: "Top Infrastructure & EPC Construction Company in India | Sangya Traders" },
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

/* ──────────────── DATA ──────────────── */

const metrics = [
  { label: "Years of Execution", value: 16, suffix: "+" },
  { label: "Turnover Capability", value: 200, prefix: "₹", suffix: " Cr" },
  { label: "Machinery Strength", value: 30, prefix: "₹", suffix: " Cr" },
  { label: "Major Projects", value: 100, suffix: "+" },
  { label: "KM Fiber Deployed", value: 3000, suffix: "+" },
  { label: "States Covered", value: 18, suffix: "+" },
];

const services = [
  { icon: Cable, title: "OFC / Fiber Laying", desc: "Trenching, HDD, blowing and splicing across national backbone networks.", img: sOfc },
  { icon: Drill, title: "Piling & Foundations", desc: "Bored cast-in-situ, secant and contiguous piling for heavy infrastructure.", img: sPiling },
  { icon: Building2, title: "Civil Construction", desc: "RCC structures, industrial buildings and large-scale civil works.", img: sCivil },
  { icon: Train, title: "Metro Infrastructure", desc: "Elevated viaducts, station works and depot civil for urban metro corridors.", img: sMetro },
  { icon: RouteIcon, title: "Roads & Highways", desc: "National highways, expressways, flexible and rigid pavement execution.", img: sRoads },
  { icon: Waves, title: "Water Infrastructure", desc: "Pipelines, OHTs and Jal Jeevan Mission rural water supply networks.", img: sWater },
  { icon: Zap, title: "Electrical Infrastructure", desc: "HT/LT lines, transmission towers, substations and grid utility work.", img: sElec },
  { icon: Radio, title: "Telecom Infrastructure", desc: "Tower erection, in-building solutions and 4G/5G rollout support.", img: sTele },
];

const projects = [
  { name: "HFCL OFC — UP East", client: "HFCL", type: "Telecom · OFC Backbone", location: "Uttar Pradesh", img: pOfc },
  { name: "Kanpur Metro Viaduct", client: "AFCONS / UPMRC", type: "Metro · Civil", location: "Kanpur", img: pMetro },
  { name: "NH Six-Lane Package", client: "NHAI / L&T", type: "Highway · Pavement", location: "Madhya Pradesh", img: pHighway },
  { name: "Jal Jeevan Mission", client: "GoI / State PHED", type: "Water · Pipeline", location: "Bihar & UP", img: sWater },
  { name: "Reliance Jio FTTH", client: "Reliance Jio", type: "Telecom · FTTH", location: "PAN India", img: sOfc },
  { name: "AFCONS Piling Package", client: "AFCONS", type: "Piling · Foundation", location: "Multiple Sites", img: sPiling },
];

const clients = [
  "L&T", "AFCONS", "Reliance Jio", "HFCL", "Monte Carlo", "NCC",
  "KEI", "Vodafone Idea", "NHAI", "Sterlite", "Dilip Buildcon", "UPMRC",
];

const whyChoose = [
  { icon: ShieldCheck, title: "Proven Large-Scale Execution", desc: "16+ years of multi-crore project delivery across telecom, metro and highways." },
  { icon: HardHat, title: "Trusted by Industry Leaders", desc: "Repeat partnerships with L&T, AFCONS, HFCL, Reliance Jio and NHAI." },
  { icon: MapIcon, title: "Pan-India Operations", desc: "Active project sites across 18+ Indian states with localized execution teams." },
  { icon: Gauge, title: "Strong Financial Capability", desc: "₹200 Cr turnover capability with ₹30 Cr owned machinery balance sheet." },
  { icon: Cpu, title: "Experienced Engineering Team", desc: "In-house planning, QA/QC, billing and project management cadre." },
  { icon: CheckCircle2, title: "Timely Project Delivery", desc: "Milestone-driven delivery with rigorous safety and compliance discipline." },
];

const certifications = [
  { label: "ISO 9001:2015", note: "Quality Management" },
  { label: "ISO 14001:2015", note: "Environment" },
  { label: "ISO 45001:2018", note: "Safety & Health" },
  { label: "MSME Udyam", note: "Registered Enterprise" },
  { label: "GST · PAN · TIN", note: "Statutory Compliant" },
  { label: "Work Orders", note: "L&T · AFCONS · HFCL" },
];

const timeline = [
  { year: "2007", t: "Founded", d: "Established in Lucknow as an infrastructure execution firm." },
  { year: "2012", t: "Telecom Scale", d: "Entered OFC backbone laying for national telecom operators." },
  { year: "2017", t: "Metro & Civil", d: "Expanded into metro viaduct works and heavy piling foundations." },
  { year: "2021", t: "Jal Jeevan Mission", d: "Began rural water infrastructure execution across UP and Bihar." },
  { year: "2025", t: "PAN India", d: "Active across 18+ states with ₹200 Cr turnover capability." },
];

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
        className="font-display text-[11px] uppercase tracking-[0.6em] text-muted-foreground mb-8"
      >
        Est. 2007 · PAN India
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="font-display text-4xl uppercase tracking-wider text-foreground mb-10"
      >
        Sangya Traders
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
        <MachinerySection />
        <WhyChooseUs />
        <Certifications />
        <About />
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
    <section className="border-y border-border py-28" style={{ background: "oklch(0.07 0.005 240)" }}>
      <div className="container-x">
        <Reveal>
          <SectionEyebrow>By the Numbers</SectionEyebrow>
          <h2 className="font-display mt-4 max-w-3xl text-4xl uppercase md:text-5xl">
            Scale that defines <span className="text-gradient-gold">credibility</span>
          </h2>
        </Reveal>

        <div
          className="mt-16 grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-6"
          style={{ background: "var(--border)" }}
        >
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06} className="group relative overflow-hidden p-8 cursor-default" style={{ background: "oklch(0.07 0.005 240)" }}>
              <div
                className="absolute inset-x-0 top-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--gold)", boxShadow: "0 0 12px 0 oklch(0.72 0.16 78 / 0.6)" }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse 80% 80% at 50% 0%, oklch(0.72 0.16 78 / 0.05) 0%, transparent 70%)" }}
              />
              <p className="font-numeric text-5xl text-foreground transition-colors group-hover:text-gold md:text-6xl">
                {m.prefix}<Counter to={m.value} />{m.suffix}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
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
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  img,
}: {
  icon: typeof Cable;
  title: string;
  desc: string;
  img: string;
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
            <a href="#contact" className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              View all engagements <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 overflow-x-auto pb-8 [scrollbar-width:thin] [scrollbar-color:var(--gold-dim)_transparent]">
        <div className="container-x flex gap-6 [scroll-snap-type:x_mandatory]">
          {projects.map((p, i) => (
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
  name, client, type, location, img,
}: { name: string; client: string; type: string; location: string; img: string }) {
  return (
    <div className="relative h-[540px]" style={{ background: "var(--gold)" }}>
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
    </div>
  );
}

function ClientsWall() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-border py-24" style={{ background: "var(--background)" }}>
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

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

        <div className="flex w-max animate-marquee gap-4">
          {row.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="group flex h-20 min-w-[200px] items-center justify-center px-10 transition-all duration-300 hover:border-gold/60 cursor-default"
              style={{
                border: "1px solid oklch(0.94 0.006 60 / 0.08)",
                background: "oklch(0.09 0.006 240)",
              }}
            >
              <span className="font-display text-xl uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:text-gold">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MachinerySection() {
  return (
    <section id="capability" className="relative overflow-hidden py-36"
      style={{ background: "oklch(0.07 0.005 240)" }}>
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-8"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="container-x relative z-10 grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <SectionEyebrow>Execution Power</SectionEyebrow>
          <h2 className="font-display mt-4 text-4xl uppercase md:text-6xl">
            Powered by <span className="text-gradient-gold">advanced machinery</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            ₹30 Cr of owned heavy machinery — piling rigs, excavators, cranes,
            HDD machines, batching plants, pavers and rollers — deployed across
            simultaneous project sites for accelerated delivery.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {[
              { i: Drill, label: "Piling Rigs" },
              { i: Layers, label: "Excavators" },
              { i: HardHat, label: "Tower Cranes" },
              { i: Cable, label: "HDD Machines" },
              { i: Building2, label: "Batching Plants" },
              { i: RouteIcon, label: "Pavers & Rollers" },
            ].map(({ i: I, label }) => (
              <div
                key={label}
                className="group flex items-center gap-3 p-5 transition-colors duration-200 hover:bg-surface cursor-default"
                style={{ background: "oklch(0.07 0.005 240)" }}
              >
                <I size={17} className="text-gold" strokeWidth={1.5} />
                <span className="text-sm text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div
            className="relative aspect-[4/5] overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <img
              src={machinery}
              alt="Sangya Traders heavy construction machinery fleet at dusk"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, oklch(0.07 0.005 240 / 0.8) 0%, transparent 60%)" }} />
            {/* Gold border glow on hover */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
              style={{ boxShadow: "inset 0 0 0 1px oklch(0.72 0.16 78 / 0.4)" }} />

            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
              <div>
                <p className="font-numeric text-[9px] uppercase tracking-[0.35em] text-gold">Owned Fleet</p>
                <p className="font-display mt-1 text-4xl text-foreground">₹30 Cr</p>
              </div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground">Heavy Machinery</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative border-y border-border py-36" style={{ background: "var(--background)" }}>
      <div className="container-x">
        <Reveal>
          <SectionEyebrow>Why Sangya</SectionEyebrow>
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
              className="group relative overflow-hidden p-9 cursor-default"
              style={{ background: "oklch(0.09 0.006 240)" }}
            >
              {/* Corner glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse 60% 60% at 0% 0%, oklch(0.72 0.16 78 / 0.07) 0%, transparent 70%)" }} />

              <span
                className="grid h-12 w-12 place-items-center text-gold transition-all duration-400 group-hover:shadow-[0_0_20px_-4px_oklch(0.72_0.16_78/0.5)]"
                style={{
                  background: "oklch(0.72 0.16 78 / 0.08)",
                  border: "1px solid oklch(0.72 0.16 78 / 0.3)",
                  transition: "background 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.16 78 / 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.16 78 / 0.08)";
                }}
              >
                <w.icon size={20} strokeWidth={1.5} />
              </span>
              <h3 className="font-display mt-7 text-xl uppercase">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-36" style={{ background: "oklch(0.07 0.005 240)" }}>
      <div className="container-x">
        <Reveal>
          <SectionEyebrow>Certifications & Credentials</SectionEyebrow>
          <h2 className="font-display mt-4 max-w-2xl text-4xl uppercase md:text-5xl">
            Compliant. Audited. Accredited.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-6"
          style={{ background: "var(--border)" }}>
          {certifications.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 0.05}
              className="group flex flex-col items-center gap-3 p-9 text-center cursor-default hover:-translate-y-1 transition-transform duration-300"
              style={{ background: "oklch(0.07 0.005 240)" }}
            >
              <div
                className="grid h-12 w-12 place-items-center"
                style={{
                  border: "1px solid oklch(0.72 0.16 78 / 0.3)",
                  background: "oklch(0.72 0.16 78 / 0.06)",
                }}
              >
                <Award size={20} className="text-gold transition-transform group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <p className="font-display mt-1 text-sm uppercase leading-tight">{c.label}</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            <FileCheck2 size={13} className="text-gold" />
            <span>Documents · Appreciation Letters · Work Orders available on request</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border py-36"
      style={{ background: "var(--background)" }}>
      <div className="container-x grid items-start gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <img
              src={aboutImg}
              alt="Sangya Traders engineering team on site"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, oklch(0.06 0.005 240 / 0.6) 0%, transparent 60%)" }} />
            {/* Gold frame accent */}
            <div className="absolute top-0 left-0 w-16 h-16"
              style={{ background: "linear-gradient(135deg, oklch(0.72 0.16 78 / 0.25) 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 right-0 w-16 h-16"
              style={{ background: "linear-gradient(315deg, oklch(0.72 0.16 78 / 0.25) 0%, transparent 60%)" }} />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionEyebrow>The Company</SectionEyebrow>
            <h2 className="font-display mt-4 text-4xl uppercase md:text-5xl">
              Sixteen years of <span className="text-gradient-gold">execution discipline</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Founded in 2007, Sangya Traders & Company has grown from a regional
              contractor into a pan-India infrastructure execution firm. We have
              partnered with India's largest EPC majors and government bodies to
              deliver telecom, metro, civil, water, road and electrical
              infrastructure — anchored by owned heavy machinery, an experienced
              engineering cadre, and an uncompromising delivery culture.
            </p>
          </Reveal>

          <div className="mt-16 relative">
            {/* The continuous vertical line */}
            <div className="absolute left-[60px] md:left-[100px] top-6 bottom-6 w-[1px]" style={{ background: "linear-gradient(to bottom, transparent, var(--border-gold) 15%, var(--border-gold) 85%, transparent)" }} />

            <div className="flex flex-col">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.1}>
                  <div
                    className="group relative flex items-start gap-8 md:gap-12 py-8 cursor-default"
                  >
                    {/* Background glow sweep */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[oklch(0.72_0.16_78/0.05)] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-0" />

                    {/* Glowing Node on Spine */}
                    <div className="absolute left-[60px] md:left-[100px] top-11 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-gold transition-all duration-500 group-hover:bg-gold group-hover:scale-[1.8]" style={{ background: "var(--background)" }} />
                    <div className="absolute left-[60px] md:left-[100px] top-11 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: "0 0 20px 4px oklch(0.72 0.16 78 / 0.5)" }} />
                    
                    {/* Year */}
                    <div className="w-[40px] md:w-[70px] shrink-0 text-right relative z-10 pt-1">
                      <p className="font-numeric text-3xl md:text-4xl text-muted-foreground transition-colors duration-500 group-hover:text-gold">{t.year}</p>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 relative z-10 transition-transform duration-500 group-hover:translate-x-6">
                      <h4 className="font-display text-xl uppercase tracking-wide text-foreground transition-colors duration-500 group-hover:text-gold">{t.t}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-lg transition-colors duration-500 group-hover:text-foreground/90">{t.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
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
              href="mailto:info@sangyatraders.com"
              className="btn-gold group inline-flex items-center gap-3 px-9 py-4.5 text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ borderRadius: "2px" }}
            >
              Start a Project
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:info@sangyatraders.com"
              className="group inline-flex items-center gap-3 border px-9 py-4.5 text-[11px] font-bold uppercase tracking-[0.28em] text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
              style={{ border: "1px solid oklch(0.94 0.006 60 / 0.25)", borderRadius: "2px" }}
            >
              Contact Team
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
