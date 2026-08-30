"use client";

import { type ReactNode } from "react";

interface PixelButtonProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  type?: "button" | "submit";
}

const variantStyles = {
  primary: {
    bg: "bg-primary",
    text: "text-bg",
    shadow: "var(--primary-dim)",
    hoverBg: "hover:brightness-110",
  },
  accent: {
    bg: "bg-accent",
    text: "text-bg",
    shadow: "var(--accent-dim)",
    hoverBg: "hover:brightness-110",
  },
  outline: {
    bg: "bg-transparent",
    text: "text-primary",
    shadow: "var(--primary-dim)",
    hoverBg: "hover:bg-primary/10",
  },
};

export default function PixelButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  download,
  type,
}: PixelButtonProps) {
  const v = variantStyles[variant];

  const baseClasses = `
    inline-flex items-center justify-center
    font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs
    px-5 py-3 sm:px-6 sm:py-3
    border-2 cursor-pointer
    transition-transform duration-100
    active:translate-y-[3px]
    ${v.bg} ${v.text} ${v.hoverBg}
    ${className}
  `.trim();

  const style = {
    borderColor: v.shadow,
    boxShadow: `
      4px 4px 0 0 ${v.shadow},
      -1px -1px 0 0 ${v.shadow}
    `,
    imageRendering: "pixelated" as const,
  };

  const activeStyle = `
    .pixel-btn:active {
      box-shadow: 1px 1px 0 0 ${v.shadow} !important;
    }
  `;

  if (href) {
    return (
      <>
        <style>{activeStyle}</style>
        <a
          href={href}
          className={`pixel-btn ${baseClasses}`}
          style={style}
          download={download || undefined}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      </>
    );
  }

  return (
    <>
      <style>{activeStyle}</style>
      <button
        type={type ?? (onClick ? "button" : "submit")}
        onClick={onClick}
        className={`pixel-btn ${baseClasses}`}
        style={style}
      >
        {children}
      </button>
    </>
  );
}
