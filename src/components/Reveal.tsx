import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale" | "clip";

const variants: Record<RevealVariant, { hidden: object; visible: object }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.93 },
    visible: { opacity: 1, scale: 1 },
  },
  clip: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  style,
  variant = "fade-up",
  duration = 0.8,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  variant?: RevealVariant;
  duration?: number;
}) {
  const v = variants[variant];
  return (
    <motion.div
      className={className}
      style={style}
      initial={v.hidden}
      whileInView={v.visible}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
