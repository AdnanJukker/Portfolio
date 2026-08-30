"use client";

import { type ReactNode } from "react";

interface DialogueBoxProps {
  children: ReactNode;
  speaker?: string;
  className?: string;
}

export default function DialogueBox({
  children,
  speaker,
  className = "",
}: DialogueBoxProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Speaker name badge */}
      {speaker && (
        <div
          className="absolute -top-4 left-4 px-3 py-1 bg-bg text-primary 
                     font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] border-2 z-10"
          style={{ borderColor: "var(--primary-dim)" }}
        >
          {speaker}
        </div>
      )}

      {/* Main box */}
      <div
        className="relative bg-bg-card p-6 sm:p-8 border-3"
        style={{
          borderColor: "var(--primary-dim)",
          borderWidth: "3px",
          borderStyle: "solid",
          boxShadow: `
            3px 3px 0 0 var(--primary-dim),
            -3px 3px 0 0 var(--primary-dim),
            3px -3px 0 0 var(--primary-dim),
            -3px -3px 0 0 var(--primary-dim),
            inset 0 0 20px rgba(61, 220, 74, 0.03)
          `,
        }}
      >
        {children}

        {/* Blinking triangle indicator */}
        <div className="absolute bottom-3 right-4 text-primary text-lg blink">
          ▼
        </div>
      </div>
    </div>
  );
}
