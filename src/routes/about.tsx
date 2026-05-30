import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { aboutImg, timeline, certifications, dArvind } from "@/data";
import { Award, FileCheck2 } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
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

function AboutPage() {
  return (
    <>
      <SiteNav />
      <CustomCursor />
      <main className="pt-24 pb-36 min-h-screen" style={{ background: "var(--background)" }}>
        <div className="container-x relative z-10">
          
          {/* About Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <img
                  src={aboutImg}
                  alt="Sangya Traders & Construction engineering team on site"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 40%)" }} />
              </div>
            </Reveal>

            <div className="flex flex-col">
              <Reveal delay={0.1}>
                <SectionEyebrow>About The Company</SectionEyebrow>
                <h1 className="font-display max-w-xl text-4xl uppercase leading-tight md:text-5xl text-foreground">
                  Sixteen years of <span className="text-gradient-gold">execution discipline</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Founded in 2007, Sangya Traders & Construction has grown from a regional
                  contractor into a pan-India infrastructure execution firm. We have
                  partnered with India's largest EPC majors and government bodies to
                  deliver telecom, metro, civil, water, road and electrical
                  infrastructure across 18 states.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Our philosophy is simple: complete ownership. By maintaining an in-house
                  machinery fleet and engineering cadre, we eliminate third-party
                  dependency, ensuring aggressive timelines are met without compromising
                  on rigorous quality and safety standards.
                </p>
              </Reveal>

              <div className="mt-16 flex flex-col gap-6 pl-4 border-l border-border relative">
                <div className="absolute left-[-1px] top-0 h-1/3 w-[2px] bg-gold" />
                {timeline.map((t, i) => (
                  <Reveal key={t.year} delay={0.2 + i * 0.1} className="relative">
                    <span className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-background bg-gold" />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-4">
                        <span className="font-numeric text-xl text-gold">{t.year}</span>
                        <span className="font-display text-lg uppercase text-foreground">{t.t}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-36 pt-24 border-t border-border">
            <Reveal>
              <SectionEyebrow>Leadership</SectionEyebrow>
            </Reveal>
            
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              {/* Profile Image */}
              <div className="lg:col-span-5">
                <Reveal variant="fade-right">
                  <div className="relative aspect-[3/4] w-full overflow-hidden" 
                       style={{ 
                         border: "1px solid oklch(0.94 0.006 60 / 0.1)",
                         boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                       }}>
                    <img 
                      src={dArvind} 
                      alt="Arvind Kumar, Managing Director"
                      className="w-full h-full object-cover"
                      style={{ 
                        filter: "grayscale(100%) contrast(1.15) brightness(0.95)",
                      }}
                    />
                    <div className="absolute inset-0" style={{
                      background: "linear-gradient(to top, oklch(0.07 0.005 240 / 0.8) 0%, transparent 30%)"
                    }} />
                    
                    {/* Gold accents */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-b border-gold/30 pb-4">
                      <div>
                        <h3 className="font-display text-2xl uppercase text-white">Arvind Kumar</h3>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mt-1">Managing Director</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Bio Details */}
              <div className="lg:col-span-7 flex flex-col gap-6 pt-4">
                <Reveal variant="fade-left">
                  <h2 className="font-display text-4xl uppercase leading-[1.1] text-foreground mb-8">
                    "Engineering <span className="text-gradient-gold">trust</span> through flawless execution."
                  </h2>
                  <div className="prose prose-invert max-w-none text-muted-foreground">
                    <p className="text-base leading-relaxed mb-6">
                      With over two decades of hands-on experience in heavy infrastructure, Arvind Kumar established Sangya Traders & Construction in 2007 with a clear mission: to build an execution-first contracting company that delivers on time, every time.
                    </p>
                    <p className="text-base leading-relaxed mb-6">
                      Under his leadership, the company has scaled from regional sub-contracting works to executing critical, multi-crore infrastructure packages for India's largest corporate giants and government bodies, including L&T, AFCONS, Reliance Jio, HFCL, and NHAI.
                    </p>
                    <p className="text-base leading-relaxed">
                      His philosophy centers on building robust in-house capabilities rather than relying on external dependencies. By maintaining an owned fleet of heavy machinery and a dedicated cadre of civil, mechanical, and telecom engineers, he ensures the company maintains strict control over quality, safety, and project timelines. This uncompromising approach to execution has cemented the company's reputation as a reliable backbone partner for national infrastructure.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-36 pt-24 border-t border-border">
            <div className="flex flex-col items-center text-center">
              <Reveal>
                <SectionEyebrow>Compliance & Standards</SectionEyebrow>
                <h2 className="font-display mt-4 max-w-2xl text-3xl uppercase md:text-5xl text-foreground">
                  Certified for <span className="text-gradient-gold">Excellence</span>
                </h2>
              </Reveal>
              
              <div className="mt-16 grid w-full grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--border)" }}>
                {certifications.map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.05} className="group relative flex flex-col items-center justify-center gap-4 p-12 text-center" style={{ background: "var(--background)" }}>
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                      style={{ background: "radial-gradient(circle at center, var(--gold) 0%, transparent 70%)" }} />
                    <Award size={32} strokeWidth={1} className="text-gold opacity-80 transition-transform duration-500 group-hover:scale-110" />
                    <div className="relative z-10 flex flex-col gap-1">
                      <span className="font-display text-xl uppercase tracking-wider text-foreground">{c.label}</span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">{c.note}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
