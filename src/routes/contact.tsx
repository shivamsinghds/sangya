import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
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

function ContactForm() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link from form data
    const fd = new FormData(formRef.current!);
    const subject = encodeURIComponent(`Project Inquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nCompany: ${fd.get("company")}\nPhone: ${fd.get("phone")}\n\nMessage:\n${fd.get("message")}`
    );
    window.location.href = `mailto:sangyaarvind1979@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Full Name *</label>
          <input name="name" required className="input-premium" placeholder="Arvind Kumar" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Company / Organisation</label>
          <input name="company" className="input-premium" placeholder="L&T, AFCONS, NHAI..." />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Phone Number *</label>
          <input name="phone" type="tel" required className="input-premium" placeholder="+91 98765 43210" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Project Type</label>
          <select name="type" className="input-premium" style={{ appearance: "none" }}>
            <option value="">Select Category...</option>
            <option>OFC / Fiber Laying</option>
            <option>Piling & Foundations</option>
            <option>Metro Infrastructure</option>
            <option>Roads & Highways</option>
            <option>Water Infrastructure</option>
            <option>Civil Construction</option>
            <option>Electrical Works</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Project Brief *</label>
        <textarea
          name="message"
          required
          rows={5}
          className="input-premium resize-none"
          placeholder="Describe your project scope, location, timeline and any specific requirements..."
        />
      </div>
      <button
        type="submit"
        className="btn-gold group mt-2 inline-flex w-full items-center justify-center gap-3 py-4 text-[11px] font-bold uppercase tracking-[0.28em]"
        style={{ borderRadius: "2px" }}
      >
        {sent ? "Opening Email Client..." : "Send Inquiry"}
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <SiteNav />
      <CustomCursor />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-36 pb-24 noise"
        style={{ background: "var(--background)" }}
      >
        <div
          className="pointer-events-none absolute left-1/3 top-1/3 w-[700px] h-[500px] rounded-full opacity-12"
          style={{ background: "radial-gradient(ellipse, oklch(0.72 0.16 78) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="industrial-grid absolute inset-0 opacity-20" />
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <SectionEyebrow>Engage with Us</SectionEyebrow>
            <h1 className="font-display mt-4 max-w-4xl mx-auto text-[clamp(2.5rem,7vw,6rem)] uppercase leading-[0.9] tracking-tight">
              Let's Build <span className="text-gradient-gold">Together</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl mx-auto text-base leading-relaxed text-muted-foreground">
              For tenders, joint ventures, sub-contracting, or vendor registrations — our
              execution team reviews every inquiry and responds within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="border-t border-border" style={{ background: "var(--background)" }}>
        <div className="container-x">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-5" style={{ borderBottom: "1px solid var(--border)" }}>

            {/* Left — Info */}
            <div className="lg:col-span-2 flex flex-col gap-10 py-16 pr-0 lg:pr-16 border-b lg:border-b-0 lg:border-r border-border">
              <Reveal variant="fade-left">
                <h2 className="font-display text-3xl uppercase leading-tight">
                  Contact <span className="text-gradient-gold">Information</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Reach our corporate office or write to us. We operate Mon–Sat, 9:00 AM – 6:00 PM IST.
                </p>
              </Reveal>

              <Reveal delay={0.1} variant="fade-left" className="flex flex-col gap-7">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center" style={{ background: "oklch(0.72 0.16 78 / 0.08)", border: "1px solid oklch(0.72 0.16 78 / 0.25)" }}>
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-1">Headquarters</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      RiverView Arcade, Sector 4<br />
                      Gomti Nagar, Lucknow<br />
                      Uttar Pradesh 226010, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=RiverView+Arcade,+sector+4+-+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010,+India"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold hover:opacity-70 transition-opacity"
                    >
                      Get Directions <ArrowUpRight size={11} />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center" style={{ background: "oklch(0.72 0.16 78 / 0.08)", border: "1px solid oklch(0.72 0.16 78 / 0.25)" }}>
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-1">Direct Lines</p>
                    <a href="tel:+917081886666" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">+91 70818 86666</a>
                    <a href="tel:+919793033555" className="block text-sm text-muted-foreground hover:text-foreground transition-colors mt-0.5">+91 97930 33555</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center" style={{ background: "oklch(0.72 0.16 78 / 0.08)", border: "1px solid oklch(0.72 0.16 78 / 0.25)" }}>
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-1">Email</p>
                    <a href="mailto:sangyaarvind1979@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      sangyaarvind1979@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center" style={{ background: "oklch(0.72 0.16 78 / 0.08)", border: "1px solid oklch(0.72 0.16 78 / 0.25)" }}>
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-1">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                    <p className="text-sm text-muted-foreground mt-0.5">Sunday: Closed</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3 py-16 lg:pl-16">
              <Reveal variant="fade-right">
                <h2 className="font-display text-3xl uppercase mb-8">
                  Send an <span className="text-gradient-gold">Inquiry</span>
                </h2>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <div className="w-full border-t border-border" style={{ height: "400px" }}>
        <iframe
          src="https://maps.google.com/maps?q=RiverView%20Arcade,%20Sector%204,%20Gomti%20Nagar,%20Lucknow,%20Uttar%20Pradesh%20226010,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(1.2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sangya Traders & Construction Office Location"
        />
      </div>

      <SiteFooter />
    </>
  );
}
