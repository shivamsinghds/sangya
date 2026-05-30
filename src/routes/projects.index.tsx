import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
});

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-numeric mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.55em] text-gold">
      <span className="h-px w-8" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
      {children}
    </div>
  );
}

function ProjectCard({ slug, name, client, type, location, img }: { slug: string; name: string; client: string; type: string; location: string; img: string }) {
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
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
          style={{ background: "linear-gradient(to top, oklch(0.07 0.005 240 / 0.95) 0%, oklch(0.07 0.005 240 / 0.4) 50%, transparent 100%)" }} />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <p className="font-numeric text-[10px] font-semibold uppercase tracking-[0.28em] text-gold mb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {type}
            </p>
            <h3 className="font-display text-2xl uppercase leading-tight text-white md:text-3xl">
              {name}
            </h3>
            <div className="mt-5 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
              <span className="flex items-center gap-1.5"><Building2 size={13} className="text-gold" /> {client}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5"><MapPin size={13} className="text-gold" /> {location}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
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

function ProjectsPage() {
  return (
    <>
      <SiteNav />
      <CustomCursor />
      <main className="pt-24 pb-36 min-h-screen" style={{ background: "oklch(0.07 0.005 240)" }}>
        <div className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px] opacity-10"
          style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(80px)" }} />
        
        <div className="container-x relative z-10 mb-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionEyebrow>Featured Projects</SectionEyebrow>
              <h1 className="font-display mt-4 max-w-2xl text-4xl uppercase md:text-6xl text-foreground">
                Built for the <span className="text-gradient-gold">nation's spine</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Explore our portfolio of multi-crore infrastructure deliveries across highways, metro rail, and telecom backbones.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
