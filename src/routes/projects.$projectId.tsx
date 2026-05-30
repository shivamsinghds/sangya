import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, MapPin, Building2, Wallet } from "lucide-react";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.projectId);
    if (!project) throw new Error("Project not found");
    return { project };
  },
});

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-numeric mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.55em] text-gold">
      <span className="h-px w-8" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
      {children}
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

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const router = useRouter();

  return (
    <div className="bg-background min-h-screen text-foreground">
      <SiteNav />
      <CustomCursor />
      
      <main>
        {/* Project Hero */}
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 border-b border-border overflow-hidden noise">
          <div className="absolute inset-0 z-0">
            <img 
              src={project.img} 
              alt={project.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, oklch(0.06 0.005 240 / 1) 0%, oklch(0.06 0.005 240 / 0.85) 40%, oklch(0.06 0.005 240 / 0.6) 100%)",
            }} />
          </div>

          <div className="container-x relative z-10">
            <Reveal variant="fade-up">
              <Link to="/projects" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors mb-10">
                <ArrowLeft size={12} /> Back to Projects
              </Link>
              
              <SectionEyebrow>{project.type}</SectionEyebrow>
              <h1 className="font-display text-4xl lg:text-7xl uppercase leading-[0.9] tracking-tight text-white mb-8">
                {project.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                <span className="flex items-center gap-2"><Building2 size={14} className="text-gold" /> {project.client}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> {project.location}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="flex items-center gap-2"><Clock size={14} className="text-gold" /> {project.duration}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="flex items-center gap-2"><Wallet size={14} className="text-gold" /> {project.value}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-24 lg:py-36 relative">
          <div className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px] opacity-10"
            style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(80px)" }} />
            
          <div className="container-x relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              <div className="lg:col-span-7">
                <Reveal variant="fade-up">
                  <h2 className="font-display text-3xl uppercase mb-8">Project Overview</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.overview}
                  </p>
                </Reveal>

                <Reveal variant="fade-up" delay={0.1}>
                  <div className="mt-16">
                    <h3 className="font-display text-2xl uppercase mb-8">Scope of Work</h3>
                    <ul className="flex flex-col gap-5">
                      {project.scope.map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {/* Packages Breakdown */}
                {("packages" in project) && project.packages && (
                  <Reveal variant="fade-up" delay={0.2}>
                    <div className="mt-16 border-t border-border pt-12">
                      <h3 className="font-display text-xl uppercase mb-8 text-gold">Package Breakdown</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.packages.map((pkg: any, i: number) => (
                          <div key={i} className="p-6 border border-border" style={{ background: "oklch(0.09 0.006 240 / 0.5)" }}>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">{pkg.name}</div>
                            <div className="text-lg font-medium text-foreground">{pkg.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>

              <div className="lg:col-span-5">
                <Reveal variant="fade-left" delay={0.2}>
                  <div className="card-premium p-10 flex flex-col gap-8">
                    <h3 className="font-display text-xl uppercase tracking-wider text-gold">Key Details</h3>
                    
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-1 border-b border-border pb-6">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Client</span>
                        <span className="text-lg font-medium">{project.client}</span>
                      </div>
                      <div className="flex flex-col gap-1 border-b border-border pb-6">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Location</span>
                        <span className="text-lg font-medium">{project.location}</span>
                      </div>
                      {("scale" in project) && project.scale && (
                        <div className="flex flex-col gap-1 border-b border-border pb-6">
                          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Project Scale</span>
                          <span className="text-lg font-medium">{project.scale}</span>
                        </div>
                      )}
                      <div className="flex flex-col gap-1 border-b border-border pb-6">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Duration</span>
                        <span className="text-lg font-medium">{project.duration}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Contract Value</span>
                        <span className="text-lg font-medium">
                          {project.value}
                          {project.slug === "hfcl-ofc-up-east" && <span className="block text-xs text-muted-foreground mt-1 leading-relaxed">Includes ₹50.07 Crore specifically<br/>certified for Reliance Jio Digital Fiber</span>}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* Project Gallery */}
        {project.images && project.images.length > 0 && (
          <section className="py-24 border-t border-border bg-background relative noise">
            <div className="container-x relative z-10">
              <Reveal>
                <SectionEyebrow>Execution Showcase</SectionEyebrow>
                <h2 className="font-display text-3xl md:text-5xl uppercase mb-16">Site Gallery</h2>
              </Reveal>
              
              <div className="relative overflow-hidden w-full">
                {/* Left and right fade overlays for premium effect */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-40"
                  style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-40"
                  style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />
                
                {/* Marquee Track */}
                <div className="flex w-max animate-marquee gap-8 py-4 hover:[animation-play-state:paused]">
                  {/* We duplicate the array to create the infinite loop effect seamlessly */}
                  {[...project.images, ...project.images].map((img, i) => (
                    <div 
                      key={i}
                      className="group relative aspect-[4/3] w-[300px] md:w-[450px] shrink-0 overflow-hidden" 
                      style={{ 
                        border: "1px solid oklch(0.94 0.006 60 / 0.1)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                      }}
                    >
                      <img 
                        src={img} 
                        alt={`${project.name} site photo ${i + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Dark overlay that fades on hover */}
                      <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/10" />
                      
                      {/* Subtle gold accent line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 ease-out group-hover:w-full" style={{ background: "var(--gold)" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action for this specific project page */}
        <section className="py-24 border-t border-border bg-background relative overflow-hidden">
          <div className="container-x text-center relative z-10">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl uppercase mb-8">
                Ready for your next <span className="text-gradient-gold">infrastructure package?</span>
              </h2>
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center gap-3 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em]"
                style={{ borderRadius: "2px" }}
              >
                Discuss Your Project
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
