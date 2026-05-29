import { Mail, MapPin, Phone, ArrowUpRight, ArrowUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const services = [
  "OFC / Fiber Laying",
  "Piling & Foundations",
  "Metro Infrastructure",
  "Roads & Highways",
  "Water Infrastructure",
  "Electrical Works",
];

export function SiteFooter() {
  return (
    <footer
      className="relative border-t overflow-hidden"
      style={{ borderColor: "oklch(0.94 0.006 60 / 0.08)", background: "oklch(0.05 0.005 240)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)" }}
      />

      <div className="container-x relative z-10">


        {/* Footer links grid */}
        <div className="grid gap-12 py-20 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="group inline-flex items-center gap-3.5 hover:opacity-80 transition-opacity">
            <div className="flex flex-col">
              <span className="font-display text-[24px] font-bold uppercase tracking-[0.35em] text-white leading-[0.85]">
                SANGYA
              </span>
              <div className="flex items-center gap-3 mt-1.5 opacity-90">
                <span className="h-[1.5px] w-8" style={{ background: "var(--gold)" }} />
                <span className="font-numeric text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                  TRADERS & CONSTRUCTION
                </span>
              </div>
            </div>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Execution-led infrastructure & engineering across telecom,
              metro, civil, road, water and electrical projects — PAN India.
            </p>

            {/* Social / cert chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["ISO 9001", "ISO 14001", "MSME"].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
                  style={{
                    border: "1px solid oklch(0.94 0.006 60 / 0.10)",
                    borderRadius: "2px",
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="font-numeric text-[10px] uppercase tracking-[0.35em] text-gold mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span
                      className="h-px w-4 transition-all duration-300 group-hover:w-7"
                      style={{ background: "var(--gold)" }}
                    />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="font-numeric text-[10px] uppercase tracking-[0.35em] text-gold mb-6">
              Company
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["About", "Capability", "Certifications", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === "careers" ? "contact" : item.toLowerCase()}`}
                    className="group flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
                  >
                    <span
                      className="h-px w-4 transition-all duration-300 group-hover:w-7"
                      style={{ background: "var(--gold)" }}
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="font-numeric text-[10px] uppercase tracking-[0.35em] text-gold mb-6">
              Contact
            </p>
            <ul className="space-y-5 text-sm text-muted-foreground">
              <li>
                <a href="https://maps.google.com/?q=RiverView+Arcade,+sector+4+-+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010,+India" target="_blank" rel="noreferrer" className="flex gap-3 hover:text-foreground transition-colors">
                  <MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                  <span className="max-w-[200px]">RiverView Arcade, sector 4 - Gomti Nagar, Lucknow, Uttar Pradesh 226010, India</span>
                </a>
              </li>
              <li>
                <div className="flex gap-3 text-muted-foreground">
                  <Phone size={15} className="mt-0.5 shrink-0 text-gold" />
                  <div className="flex flex-col">
                    <a href="tel:+917081886666" className="hover:text-foreground transition-colors">+91 70818 86666</a>
                    <a href="tel:+919793033555" className="hover:text-foreground transition-colors mt-1">+91 97930 33555</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="mailto:sangyaarvind1979@gmail.com" className="flex gap-3 hover:text-foreground transition-colors">
                  <Mail size={15} className="mt-0.5 shrink-0 text-gold" />
                  <span>sangyaarvind1979@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 border-t py-7 text-[11px] text-muted-foreground md:flex-row"
          style={{ borderColor: "oklch(0.94 0.006 60 / 0.08)" }}
        >
          <p>&copy; {new Date().getFullYear()} Sangya Traders & Construction. All rights reserved.</p>
          <p className="font-numeric uppercase tracking-[0.35em]">
            Engineering · Execution · Excellence
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold"
          >
            Back to top
            <span
              className="grid h-7 w-7 place-items-center transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:-translate-y-0.5"
              style={{ border: "1px solid oklch(0.94 0.006 60 / 0.18)" }}
            >
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
