import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { machinery } from "@/data";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/capability")({
  component: CapabilityPage,
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

function CapabilityPage() {
  return (
    <>
      <SiteNav />
      <CustomCursor />
      <main className="pt-24 pb-36 min-h-screen" style={{ background: "var(--background)" }}>
        <div className="container-x relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16">
            <Reveal>
              <SectionEyebrow>Execution Muscle</SectionEyebrow>
              <h1 className="font-display mt-4 max-w-2xl text-4xl uppercase leading-[1.1] md:text-6xl text-foreground">
                Heavy machinery. <span className="text-gradient-gold">Rapid mobilization.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                We don't just manage projects; we execute them. Our ₹30 Cr owned machinery fleet ensures zero dependencies on third-party rentals.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 items-center">
            <Reveal delay={0.2} className="relative aspect-square md:aspect-video lg:aspect-square">
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 border border-border"
                style={{ background: "oklch(0.94 0.006 60 / 0.05)" }}
              />
              <img
                src={machinery}
                alt="Sangya Traders & Construction heavy construction machinery fleet at dusk"
                loading="lazy"
                className="relative z-10 h-full w-full object-cover"
                style={{ filter: "contrast(1.1) saturate(0.85)" }}
              />
              <div
                className="absolute -bottom-6 -left-6 z-20 flex flex-col gap-2 p-6"
                style={{ background: "var(--foreground)", color: "var(--background)" }}
              >
                <span className="font-numeric text-4xl text-gold">₹30Cr+</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]">Owned Fleet Value</span>
              </div>
            </Reveal>

            <div className="flex flex-col gap-8">
              {[
                { label: "Piling Rigs (MAIT / Casagrande)", count: "12+" },
                { label: "HDD Machines (Ditch Witch / Vermeer)", count: "45+" },
                { label: "Excavators (Tata Hitachi / JCB)", count: "60+" },
                { label: "Transit Mixers & Batching Plants", count: "30+" },
                { label: "OFC Blowing & Splicing Units", count: "100+" },
              ].map((item, i) => (
                <Reveal key={item.label} delay={0.3 + i * 0.1}>
                  <div className="group flex items-center justify-between border-b border-border pb-6 transition-colors hover:border-gold">
                    <span className="font-display text-xl uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground md:text-2xl">
                      {item.label}
                    </span>
                    <span className="font-numeric text-xl text-gold md:text-3xl">
                      {item.count}
                    </span>
                  </div>
                </Reveal>
              ))}
              
              <Reveal delay={0.8} className="mt-8">
                <p className="text-sm leading-relaxed text-muted-foreground p-6 border-l-2 border-gold" style={{ background: "oklch(0.94 0.006 60 / 0.03)" }}>
                  "Owning our fleet allows us to mobilize within 72 hours across any of our 18 active state regions, guaranteeing project timelines that asset-light contractors simply cannot match."
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
