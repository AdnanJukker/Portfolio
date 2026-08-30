"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Milestone } from "@/lib/data";

interface LevelTimelineProps {
  milestones: Milestone[];
}

export default function LevelTimeline({ milestones }: LevelTimelineProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="relative pl-8 sm:pl-12">
      {/* Vertical pixel line */}
      <div
        className="absolute left-3 sm:left-5 top-0 bottom-0 w-0.5"
        style={{
          background:
            "repeating-linear-gradient(180deg, var(--primary-dim) 0px, var(--primary-dim) 6px, transparent 6px, transparent 10px)",
        }}
      />

      {milestones.map((m, i) => (
        <motion.div
          key={m.level}
          className="relative mb-8 last:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
        >
          {/* Node dot */}
          <div
            className={`
              absolute -left-5 sm:-left-7 top-1 w-5 h-5 sm:w-6 sm:h-6
              flex items-center justify-center border-2
              font-[family-name:var(--font-pixel)] text-[7px] sm:text-[8px]
              ${m.status === "IN PROGRESS" ? "bg-accent text-bg border-accent-dim" : "bg-primary text-bg border-primary-dim"}
            `}
          >
            {m.level}
          </div>

          {/* Content */}
          <div
            className="bg-bg-card p-4 sm:p-5 border-2 ml-2"
            style={{
              borderColor:
                m.status === "IN PROGRESS"
                  ? "var(--accent-dim)"
                  : "var(--primary-dim)",
              boxShadow:
                m.status === "IN PROGRESS"
                  ? "2px 2px 0 0 var(--accent-dim)"
                  : "2px 2px 0 0 var(--primary-dim)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] text-text-muted">
                LVL {m.level}
              </span>
              {m.status === "IN PROGRESS" && (
                <span className="font-[family-name:var(--font-pixel)] text-[7px] text-accent blink">
                  ⟳ IN PROGRESS
                </span>
              )}
            </div>
            <h3 className="font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-primary leading-relaxed mb-1">
              {m.degree}
            </h3>
            <p className="text-text-dim text-sm">
              {m.institution} · {m.year}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
