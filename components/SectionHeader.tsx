"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="mb-10 sm:mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base md:text-lg text-primary mb-2">
        <span className="text-accent">&gt;&gt;</span> {title}
        <span className="blink text-primary ml-1">_</span>
      </h2>
      {subtitle && (
        <p className="text-text-dim text-base sm:text-lg">{subtitle}</p>
      )}
      {/* Pixel divider */}
      <div className="mt-3 flex gap-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-1 w-3"
            style={{
              backgroundColor:
                i < 6
                  ? "var(--primary)"
                  : i < 10
                    ? "var(--primary-dim)"
                    : "var(--bg-muted)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
