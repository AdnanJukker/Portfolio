"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { BossBattle } from "@/lib/data";

/* ── Inline pixel-star SVG ────────────────────────────────────── */
function PixelStar({ filled }: { filled: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      aria-hidden="true"
    >
      {/* 12×12 pixel star shape */}
      <rect x="5" y="0" width="2" height="2" fill={filled ? "var(--accent)" : "var(--bg-muted)"} />
      <rect x="4" y="2" width="4" height="2" fill={filled ? "var(--accent)" : "var(--bg-muted)"} />
      <rect x="0" y="4" width="12" height="2" fill={filled ? "var(--accent)" : "var(--bg-muted)"} />
      <rect x="1" y="6" width="10" height="2" fill={filled ? "var(--accent)" : "var(--bg-muted)"} />
      <rect x="2" y="8" width="8" height="2" fill={filled ? "var(--accent-dim)" : "var(--bg-muted)"} />
      <rect x="3" y="10" width="2" height="2" fill={filled ? "var(--accent-dim)" : "var(--bg-muted)"} />
      <rect x="7" y="10" width="2" height="2" fill={filled ? "var(--accent-dim)" : "var(--bg-muted)"} />
    </svg>
  );
}

interface BossBattleCardProps {
  boss: BossBattle;
  index: number;
}

export default function BossBattleCard({ boss, index }: BossBattleCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="bg-bg-card flex flex-col hover:-translate-y-1 hover:brightness-105 transition-all duration-300"
      style={{
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "var(--danger-dim)",
        boxShadow: `
          3px 3px 0 0 var(--danger-dim),
          -3px 3px 0 0 var(--danger-dim),
          3px -3px 0 0 var(--danger-dim),
          -3px -3px 0 0 var(--danger-dim)
        `,
      }}
    >
      {/* Boss header */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{
          background:
            "linear-gradient(90deg, rgba(231,76,60,0.15), rgba(231,76,60,0.05))",
          borderBottom: "2px solid var(--danger-dim)",
        }}
      >
        <span className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] text-danger">
          BOSS BATTLE
        </span>
        <div
          className="flex gap-0.5"
          role="img"
          aria-label={`Difficulty: ${boss.difficulty} out of 5`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <PixelStar key={i} filled={i < boss.difficulty} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3 className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs text-primary mb-3 leading-relaxed">
          {boss.name}
        </h3>

        <p className="text-text text-sm sm:text-base mb-4 flex-1">
          {boss.description}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-4">
          {boss.features.map((feat, i) => (
            <li key={i} className="text-text text-sm flex gap-2">
              <span className="text-accent shrink-0">▸</span>
              {feat}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="mb-4">
          <span className="font-[family-name:var(--font-pixel)] text-[7px] sm:text-[8px] text-accent">
            TECH USED:
          </span>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {boss.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-bg-muted border text-accent"
                style={{ borderColor: "var(--accent-dim)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action links */}
        <div className="flex gap-3 mt-auto">
          {boss.githubUrl && (
            <a
              href={boss.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] px-4 py-2
                         bg-bg-muted border-2 text-primary 
                         hover:bg-primary/10 transition-colors"
              style={{
                borderColor: "var(--primary-dim)",
                boxShadow: "2px 2px 0 0 var(--primary-dim)",
              }}
            >
              GITHUB
            </a>
          )}
          {boss.demoUrl && (
            <a
              href={boss.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] px-4 py-2
                         bg-bg-muted border-2 text-accent 
                         hover:bg-accent/10 transition-colors"
              style={{
                borderColor: "var(--accent-dim)",
                boxShadow: "2px 2px 0 0 var(--accent-dim)",
              }}
            >
              DEMO
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
