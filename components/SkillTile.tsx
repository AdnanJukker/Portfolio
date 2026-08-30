"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Skill } from "@/lib/data";

interface SkillTileProps {
  skill: Skill;
  index: number;
}

export default function SkillTile({ skill, index }: SkillTileProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: "easeOut",
      }}
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center 
                   bg-bg-muted border-2
                   hover:bg-primary/10 hover:border-primary transition-colors duration-200
                   cursor-default"
        style={{
          borderColor: "var(--primary-dim)",
          boxShadow: `
            2px 2px 0 0 var(--primary-dim),
            -2px -2px 0 0 var(--primary-dim)
          `,
        }}
      >
        {/* Render icon as pixel-font text */}
        <span
          className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-[11px] text-primary select-none"
          aria-label={skill.name}
        >
          {skill.icon}
        </span>
      </div>
      <span className="text-text text-sm text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}
