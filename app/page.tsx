"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CRTOverlay from "@/components/CRTOverlay";
import PixelButton from "@/components/PixelButton";
import StatBar from "@/components/StatBar";
import DialogueBox from "@/components/DialogueBox";
import SectionHeader from "@/components/SectionHeader";
import SkillTile from "@/components/SkillTile";
import QuestCard from "@/components/QuestCard";
import BossBattleCard from "@/components/BossBattleCard";
import LevelTimeline from "@/components/LevelTimeline";

import {
  personalInfo,
  stats,
  aboutText,
  skillCategories,
  quests,
  bossBattles,
  milestones,
  contact,
  navLinks,
} from "@/lib/data";

/* ── Consistent section spacing token ─────────────────────────── */
const SECTION_PY = "py-20 sm:py-28";

/* ────────────────────────────────────────────────────────────────
   TYPEWRITER HOOK
   ──────────────────────────────────────────────────────────────── */
function useTypewriter(text: string, speed = 60, startDelay = 500) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ────────────────────────────────────────────────────────────────
   NAVBAR
   ──────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${scrolled ? "bg-bg/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}
      `}
      style={
        scrolled
          ? { borderBottom: "2px solid var(--primary-dim)" }
          : undefined
      }
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[10px] text-primary hover:text-accent transition-colors"
        >
          DEBUG QUEST
        </a>
        <div className="hidden sm:flex items-center gap-1">
          <span className="text-text-muted text-xs mr-2">&gt;</span>
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <a
                href={link.href}
                className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] text-text-dim 
                           hover:text-primary transition-colors px-2 py-1"
              >
                {link.label}
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-text-muted text-[10px]">|</span>
              )}
            </span>
          ))}
        </div>
        {/* Mobile menu toggle */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="font-[family-name:var(--font-pixel)] text-[10px] text-primary px-2 py-1 border border-primary-dim cursor-pointer"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? "X" : "="}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-bg border-b-2 p-4"
            style={{ borderColor: "var(--primary-dim)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-[family-name:var(--font-pixel)] text-[9px] text-text-dim 
                           hover:text-primary transition-colors py-2"
              >
                &gt; {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   SECTION 1: HERO / LOAD SCREEN
   ──────────────────────────────────────────────────────────────── */
function HeroSection() {
  const { displayed: title, done: titleDone } = useTypewriter(
    personalInfo.heroTitle,
    120,
    300
  );
  const { displayed: subtitle } = useTypewriter(
    personalInfo.heroSubtitle,
    40,
    2000
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
    >
      {/* CRT screen frame */}
      <div
        className="relative w-full max-w-3xl p-6 sm:p-10 md:p-14 text-center"
        style={{
          borderWidth: "4px",
          borderStyle: "solid",
          borderColor: "var(--primary-dim)",
          boxShadow: `
            4px 4px 0 0 var(--primary-dim),
            -4px 4px 0 0 var(--primary-dim),
            4px -4px 0 0 var(--primary-dim),
            -4px -4px 0 0 var(--primary-dim),
            0 0 40px rgba(61, 220, 74, 0.08),
            inset 0 0 60px rgba(61, 220, 74, 0.03)
          `,
          background:
            "linear-gradient(180deg, var(--bg-card) 0%, var(--bg) 100%)",
        }}
      >
        {/* Power indicator */}
        <div className="absolute top-3 right-4 flex items-center gap-2">
          <div
            className="w-2 h-2 bg-primary"
            style={{
              boxShadow: "0 0 6px var(--primary), 0 0 12px var(--primary-glow)",
            }}
          />
          <span className="font-[family-name:var(--font-pixel)] text-[7px] text-text-muted">
            PWR
          </span>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-[family-name:var(--font-pixel)] text-xl sm:text-3xl md:text-4xl text-primary mb-4 glow-pulse leading-relaxed">
            {title}
            {!titleDone && <span className="blink">_</span>}
          </h1>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs text-accent mb-1">
            {personalInfo.name}
          </p>
          <p className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] text-text mb-6">
            {personalInfo.title}
          </p>
        </motion.div>

        {/* Subtitle typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="text-text text-sm sm:text-base mb-8 min-h-[1.5rem]"
        >
          {subtitle}
          <span className="blink text-primary">_</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <PixelButton href="#projects" variant="primary">
            VIEW WORK
          </PixelButton>
          <PixelButton href="./resume.pdf" variant="accent" download>
            DOWNLOAD CV
          </PixelButton>
          <PixelButton href="#contact" variant="outline">
            CONTACT
          </PixelButton>
        </motion.div>

        {/* Fix #5: removed duplicate "PRESS START" — only the subtitle typewriter has it */}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   SECTION 2: CHARACTER SHEET / ABOUT
   ──────────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className={`${SECTION_PY} px-4 sm:px-6`}>
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="CHARACTER SHEET"
          subtitle="Who is this hero?"
        />

        <DialogueBox speaker="ADNAN">
          <div className="space-y-3 mb-8">
            {aboutText.map((paragraph, i) => (
              <p key={i} className="text-text text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6">
            <p className="font-[family-name:var(--font-pixel)] text-[9px] text-accent mb-4">
              === STATS ===
            </p>
            {stats.map((stat, i) => (
              <StatBar
                key={stat.name}
                name={stat.name}
                level={stat.level}
                maxLevel={stat.maxLevel}
                description={stat.description}
                delay={i * 0.2}
              />
            ))}
          </div>

          {/* Social links */}
          <div className="mt-6 flex gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-pixel)] text-[8px] text-text-dim hover:text-primary transition-colors"
            >
              [GITHUB]
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-pixel)] text-[8px] text-text-dim hover:text-primary transition-colors"
            >
              [LINKEDIN]
            </a>
          </div>
        </DialogueBox>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   SECTION 3: SKILL TREE / TECH STACK
   ──────────────────────────────────────────────────────────────── */
function SkillsSection() {
  let tileIndex = 0;

  return (
    <section id="skills" className={`${SECTION_PY} px-4 sm:px-6 bg-bg-light`}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="SKILL TREE"
          subtitle="Technologies unlocked on this journey"
        />

        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-accent mb-5">
                {cat.icon} {cat.category}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3 sm:gap-5">
                {cat.skills.map((skill) => {
                  const idx = tileIndex++;
                  return (
                    <SkillTile key={skill.name} skill={skill} index={idx} />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   SECTION 4: QUEST LOG / EXPERIENCE
   ──────────────────────────────────────────────────────────────── */
function ExperienceSection() {
  return (
    <section id="experience" className={`${SECTION_PY} px-4 sm:px-6`}>
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="QUEST LOG"
          subtitle="Missions completed along the way"
        />

        <div>
          {quests.map((quest, i) => (
            <QuestCard key={quest.title} quest={quest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   SECTION 5: BOSS BATTLES / PROJECTS
   ──────────────────────────────────────────────────────────────── */
function ProjectsSection() {
  return (
    <section
      id="projects"
      className={`${SECTION_PY} px-4 sm:px-6 bg-bg-light`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="BOSS BATTLES"
          subtitle="Major projects that tested my skills"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bossBattles.map((boss, i) => (
            <BossBattleCard key={boss.name} boss={boss} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   SECTION 6: EDUCATION / LEVEL MILESTONES
   ──────────────────────────────────────────────────────────────── */
function EducationSection() {
  return (
    <section id="education" className={`${SECTION_PY} px-4 sm:px-6`}>
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="LEVEL MILESTONES"
          subtitle="Academic checkpoints reached"
        />

        <LevelTimeline milestones={milestones} />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   SECTION 7: SAVE POINT / CONTACT
   Fix #1: Real contact form + static info card
   ──────────────────────────────────────────────────────────────── */
function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Use Web3Forms — free, no backend needed
      // Replace the access_key with your own from https://web3forms.com
      data.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
      data.append("subject", "New message from DEBUG QUEST portfolio");
      data.append("from_name", "DEBUG QUEST Contact Form");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className={`${SECTION_PY} px-4 sm:px-6 bg-bg-light`}>
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="SAVE POINT"
          subtitle="Save your progress - let's connect"
        />

        {/* Static contact info */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          <a
            href={`mailto:${contact.email}`}
            className="p-3 bg-bg-card border-2 hover:border-primary transition-colors group text-center flex flex-col justify-center"
            style={{ borderColor: "var(--primary-dim)" }}
          >
            <span className="font-[family-name:var(--font-pixel)] text-[7px] text-text-muted block mb-1">
              EMAIL
            </span>
            <span className="text-primary text-xs sm:text-sm group-hover:text-accent transition-colors break-all">
              {contact.email}
            </span>
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="p-3 bg-bg-card border-2 hover:border-primary transition-colors group text-center flex flex-col justify-center"
            style={{ borderColor: "var(--primary-dim)" }}
          >
            <span className="font-[family-name:var(--font-pixel)] text-[7px] text-text-muted block mb-1">
              PHONE
            </span>
            <span className="text-primary text-xs sm:text-sm group-hover:text-accent transition-colors">
              {contact.phone}
            </span>
          </a>
          <div
            className="p-3 bg-bg-card border-2 text-center flex flex-col justify-center"
            style={{ borderColor: "var(--primary-dim)" }}
          >
            <span className="font-[family-name:var(--font-pixel)] text-[7px] text-text-muted block mb-1">
              LOCATION
            </span>
            <span className="text-primary text-xs sm:text-sm">{contact.location}</span>
          </div>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-bg-card border-2 hover:border-primary transition-colors group text-center flex flex-col justify-center"
            style={{ borderColor: "var(--primary-dim)" }}
          >
            <span className="font-[family-name:var(--font-pixel)] text-[7px] text-text-muted block mb-1">
              GITHUB
            </span>
            <span className="text-primary text-xs sm:text-sm group-hover:text-accent transition-colors">
              {contact.githubHandle}
            </span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-bg-card border-2 hover:border-primary transition-colors group text-center flex flex-col justify-center"
            style={{ borderColor: "var(--primary-dim)" }}
          >
            <span className="font-[family-name:var(--font-pixel)] text-[7px] text-text-muted block mb-1">
              LINKEDIN
            </span>
            <span className="text-primary text-xs sm:text-sm group-hover:text-accent transition-colors">
              {contact.linkedinHandle}
            </span>
          </a>
        </div>

        {/* Contact form */}
        <DialogueBox speaker="SYSTEM">
          <p className="font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-accent mb-6">
            SEND A MESSAGE
          </p>

          {formState === "sent" ? (
            <div className="text-center py-8">
              <p className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs text-primary mb-2">
                MESSAGE SAVED!
              </p>
              <p className="text-text text-sm">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setFormState("idle")}
                className="mt-4 font-[family-name:var(--font-pixel)] text-[8px] text-accent hover:text-primary transition-colors cursor-pointer"
              >
                [SEND ANOTHER]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-[family-name:var(--font-pixel)] text-[8px] text-text-dim block mb-1.5"
                >
                  YOUR NAME
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name..."
                  className="w-full bg-bg border-2 text-text text-sm px-3 py-2.5
                             placeholder:text-text-muted
                             focus:border-primary focus:outline-none transition-colors"
                  style={{ borderColor: "var(--primary-dim)" }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="font-[family-name:var(--font-pixel)] text-[8px] text-text-dim block mb-1.5"
                >
                  YOUR EMAIL
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email..."
                  className="w-full bg-bg border-2 text-text text-sm px-3 py-2.5
                             placeholder:text-text-muted
                             focus:border-primary focus:outline-none transition-colors"
                  style={{ borderColor: "var(--primary-dim)" }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="font-[family-name:var(--font-pixel)] text-[8px] text-text-dim block mb-1.5"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full bg-bg border-2 text-text text-sm px-3 py-2.5 resize-none
                             placeholder:text-text-muted
                             focus:border-primary focus:outline-none transition-colors"
                  style={{ borderColor: "var(--primary-dim)" }}
                />
              </div>

              {formState === "error" && (
                <p className="font-[family-name:var(--font-pixel)] text-[8px] text-danger">
                  ERROR: Failed to send. Try emailing directly.
                </p>
              )}

              <PixelButton variant="accent">
                {formState === "sending" ? "SAVING..." : "SAVE & SEND"}
              </PixelButton>
            </form>
          )}
        </DialogueBox>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   FOOTER
   ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-8 px-4 text-center border-t-2" style={{ borderColor: "var(--primary-dim)" }}>
      <p className="font-[family-name:var(--font-pixel)] text-[7px] sm:text-[8px] text-text-muted mb-2">
        {new Date().getFullYear()} {personalInfo.name}
      </p>
      <p className="font-[family-name:var(--font-pixel)] text-[7px] text-text-muted">
        BUILT WITH NEXT.JS
      </p>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <CRTOverlay />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
