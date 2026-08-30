"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StatBarProps {
  name: string;
  level: number;
  maxLevel: number;
  description: string;
  delay?: number;
}

const TOTAL_SEGMENTS = 20;

export default function StatBar({
  name,
  level,
  maxLevel,
  description,
  delay = 0,
}: StatBarProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const filledSegments = Math.round((level / maxLevel) * TOTAL_SEGMENTS);

  return (
    <div ref={ref} className="mb-5">
      {/* Label row */}
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-primary">
          {name}
        </span>
        <span className="font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-accent">
          {level}/{maxLevel}
        </span>
      </div>

      {/* Description */}
      <p className="text-text text-sm mb-2">{description}</p>

      {/* Segmented pixel bar */}
      <div
        className="flex gap-[2px] p-[3px] border-2"
        style={{
          borderColor: "var(--primary-dim)",
          background: "var(--bg)",
          boxShadow: "inset 0 1px 4px rgba(0,0,0,0.6)",
        }}
      >
        {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => {
          const isLit = i < filledSegments;
          return (
            <motion.div
              key={i}
              className="flex-1 h-3 sm:h-4"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      scaleY: 1,
                      backgroundColor: isLit
                        ? "var(--primary)"
                        : "var(--bg-muted)",
                    }
                  : { opacity: 0, scaleY: 0 }
              }
              transition={{
                duration: 0.05,
                delay: delay + i * 0.04,
                ease: "easeOut",
              }}
              style={{
                backgroundColor: "var(--bg-muted)",
                boxShadow: isLit
                  ? "0 0 4px var(--primary-glow)"
                  : "none",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
