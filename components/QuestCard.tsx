"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Quest } from "@/lib/data";

interface QuestCardProps {
  quest: Quest;
  index: number;
}

export default function QuestCard({ quest, index }: QuestCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative bg-bg-card p-5 sm:p-6 mb-6 hover:-translate-y-1 hover:brightness-105 transition-all duration-300"
      style={{
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "var(--primary-dim)",
        boxShadow: `
          3px 3px 0 0 var(--primary-dim),
          -3px 3px 0 0 var(--primary-dim),
          3px -3px 0 0 var(--primary-dim),
          -3px -3px 0 0 var(--primary-dim)
        `,
      }}
    >
      {/* Status badge */}
      <div className="absolute -top-3 right-4">
        <span
          className={`
            font-[family-name:var(--font-pixel)] text-[8px] px-3 py-1 border-2
            ${quest.status === "COMPLETE" ? "bg-primary text-bg border-primary-dim" : "bg-accent text-bg border-accent-dim"}
          `}
        >
          {quest.status === "COMPLETE" ? "✓ QUEST COMPLETE" : "⟳ IN PROGRESS"}
        </span>
      </div>

      {/* Header */}
      <div className="mt-2 mb-3">
        <h3 className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs text-primary leading-relaxed">
          {quest.title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-2">
          <span className="text-accent text-sm">
            🏰 {quest.questGiver}
          </span>
          <span className="text-text-dim text-sm">
            {quest.dates}
          </span>
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-1.5 mb-4">
        {quest.description.map((line, i) => (
          <li key={i} className="text-text text-sm sm:text-base flex gap-2">
            <span className="text-primary-dim shrink-0">▸</span>
            {line}
          </li>
        ))}
      </ul>

      {/* Rewards */}
      <div>
        <span className="font-[family-name:var(--font-pixel)] text-[8px] text-accent">
          REWARD:
        </span>
        <div className="flex flex-wrap gap-2 mt-1.5">
          {quest.rewards.map((reward) => (
            <span
              key={reward}
              className="px-2 py-0.5 text-xs bg-bg-muted border border-primary-dim text-primary"
            >
              {reward}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
