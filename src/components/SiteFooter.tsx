import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
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
            <a href="/" className="group inline-flex items-center gap-3.5 hover:opacity-80 transition-opacity">
            <div className="flex flex-col">
              <span className="font-display text-[24px] font-bold uppercase tracking-[0.35em] text-white leading-[0.85]">
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
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span
                      className="h-px w-4 transition-all duration-300 group-hover:w-7"
                      style={{ background: "var(--gold)" }}
                    />
                    {s}
                  </a>
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
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
                  >
                    <span
                      className="h-px w-4 transition-all duration-300 group-hover:w-7"
                      style={{ background: "var(--gold)" }}
                    />
                    {item}
                  </a>
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
              <li className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
                <span className="leading-relaxed">
                  Corporate Office<br />
                  Lucknow, Uttar Pradesh, India
                </span>
              </li>
              <li>
                <a href="tel:+910000000000" className="flex gap-3 hover:text-foreground transition-colors">
                  <Phone size={15} className="mt-0.5 shrink-0 text-gold" />
                  <span>+91 00000 00000</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@sangyatraders.com" className="flex gap-3 hover:text-foreground transition-colors">
                  <Mail size={15} className="mt-0.5 shrink-0 text-gold" />
                  <span>info@sangyatraders.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-3 border-t py-7 text-[11px] text-muted-foreground md:flex-row"
          style={{ borderColor: "oklch(0.94 0.006 60 / 0.08)" }}
        >
          <p>© {new Date().getFullYear()} Sangya Traders & Company. All rights reserved.</p>
          <p className="font-numeric uppercase tracking-[0.35em]">
            Engineering · Execution · Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
