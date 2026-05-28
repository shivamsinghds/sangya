import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#capability", label: "Capability" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full origin-left"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, oklch(0.76 0.17 80), oklch(0.58 0.14 62))",
            boxShadow: "0 0 10px 0px oklch(0.72 0.16 78 / 0.8)",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-2xl shadow-[0_4px_60px_-12px_oklch(0_0_0/0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-3.5 hover:opacity-80 transition-opacity">
            <div className="flex flex-col">
              <span className="font-display text-[22px] font-bold uppercase tracking-[0.35em] text-white leading-[0.85]">
                SANGYA
              </span>
              <div className="flex items-center gap-3 mt-1.5 opacity-90">
                <span className="h-[1.5px] w-8" style={{ background: "var(--gold)" }} />
                <span className="font-numeric text-[11px] font-medium uppercase tracking-[0.65em] text-gold">
                  TRADERS
                </span>
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 transition-colors duration-300 hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-gold to-gold/40 transition-all duration-400 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="btn-gold hidden lg:inline-flex items-center gap-2.5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ borderRadius: "2px" }}
          >
            Start a Project
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-border text-foreground lg:hidden"
            aria-label="Toggle menu"
            style={{ borderRadius: "2px" }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="overflow-hidden border-t border-border bg-background/97 backdrop-blur-2xl lg:hidden"
            >
              <div className="container-x flex flex-col gap-1 py-5">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 text-sm font-medium uppercase tracking-[0.22em] text-foreground hover:text-gold transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.3 }}
                  onClick={() => setOpen(false)}
                  className="btn-gold mt-4 px-5 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ borderRadius: "2px" }}
                >
                  Start a Project
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
