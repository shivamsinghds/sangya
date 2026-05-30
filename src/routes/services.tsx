import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data";
import { Cable, Drill, Building2, Train, Route as RouteIcon, Waves, Zap, Radio, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-numeric mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.55em] text-gold">
      <span className="h-px w-8" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
      {children}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc, img }: { icon: any; title: string; desc: string; img: string }) {
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
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, oklch(0.09 0.006 240 / 0.85) 0%, oklch(0.09 0.006 240 / 0.30) 60%, transparent 100%)",
        }} />
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
        <h3 className="font-display text-xl uppercase text-foreground transition-colors duration-300 group-hover:text-gold">
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
    const move = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    const over = (e: MouseEvent) => { if ((e.target as Element).closest("a,button")) setHovered(true); };
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
      <motion.div className="cursor-dot" style={{ x: cursorXSpring, y: cursorYSpring }} />
      <motion.div className={`cursor-ring ${hovered ? "hover" : ""}`} style={{ x: ringX, y: ringY }} />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <SiteNav />
      <CustomCursor />
      <main className="pt-24 pb-36 min-h-screen" style={{ background: "var(--background)" }}>
        <div className="pointer-events-none absolute left-0 top-0 w-[400px] h-[600px] opacity-10"
          style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="container-x relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16">
            <Reveal>
              <SectionEyebrow>Our Services</SectionEyebrow>
              <h1 className="font-display max-w-2xl text-4xl uppercase md:text-6xl text-foreground">
                Integrated Infrastructure <span className="text-gradient-gold">Execution</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                From fiber backbones to elevated metro viaducts — we self-execute
                with owned machinery, in-house engineering and statewide site teams.
              </p>
            </Reveal>
          </div>
          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4"
            style={{ background: "var(--border)" }}
          >
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
