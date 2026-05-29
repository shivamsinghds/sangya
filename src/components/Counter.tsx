import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function formatNumber(n: number, decimals: number): string {
  const fixed = n.toFixed(decimals);
  // Add commas for thousands
  return fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function Counter({
  to,
  duration = 2.2,
  decimals = 0,
}: {
  to: number;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      // Ease-out-expo for dramatic deceleration
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(value, decimals)}
    </span>
  );
}
