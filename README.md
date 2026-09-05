# ⚔️ Debug Quest — Developer Portfolio

**Debug Quest** is a personal portfolio website built with Next.js, framed as a retro pixel-game "character sheet." It channels the energy of an 8-bit arcade or dungeon-crawler RPG, featuring stat bars, quest logs, and boss battles instead of standard resume sections.

**Live site:** [adnanjukker.github.io/Portfolio](https://adnanjukker.github.io/Portfolio/)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

---

## ✨ Features

- **Retro Aesthetic**: A custom green terminal palette, CRT scanline overlays, blinking cursors, and pixelated borders powered by Tailwind CSS.
- **Character Sheet**: View skills represented as "Stat Bars" (segmented retro health-bar style) and a categorized "Skill Tree" (languages, frameworks, AI/ML, tools).
- **Quest Log**: Experience and internships formatted as an RPG quest log complete with rewards and quest givers.
- **Boss Battles**: Major projects showcased as boss encounters — pulled straight from [github.com/AdnanJukker](https://github.com/AdnanJukker) — complete with dynamic pixel-star difficulty ratings.
- **Save Point (Contact)**: A working contact form powered by Web3Forms, styled as an in-game save point, with a honeypot field for spam protection.
- **Scrollspy Navbar**: The nav highlights the section currently in view; an XP-style progress bar tracks how far you've scrolled.
- **"Quest Failed" 404**: A themed not-found page instead of a generic error screen.
- **SEO-ready**: Open Graph/Twitter metadata, JSON-LD `Person` schema, and static `sitemap.xml` / `robots.txt` generated at build time.
- **Fully Responsive**: Carefully crafted grids and typography that scale beautifully down to mobile devices (375px width tested).
- **Accessible & Performant**: Skip-to-content link, visible focus states, `prefers-reduced-motion` support across all Framer Motion animations, high-contrast colors, and optimized Next.js app router architecture.

## 🚀 Quick Start

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/AdnanJukker/Portfolio.git
cd Portfolio
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, static export)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (`MotionConfig` respects reduced-motion preference)
- **Forms:** [Web3Forms](https://web3forms.com/)
- **Icons:** Custom CSS + inline SVGs (no heavy icon libraries!)
- **Fonts:** VT323 (Body) & Press Start 2P (Display)

## 📁 Project Structure

- `app/` — Next.js app router: `layout.tsx` (metadata, JSON-LD, fonts), `page.tsx` (all sections), `globals.css` (the retro design system), `icon.svg` (favicon), `not-found.tsx` (themed 404), `sitemap.ts` / `robots.ts` (SEO).
- `components/` — Reusable React components (e.g., `BossBattleCard`, `QuestCard`, `PixelButton`, `StatBar`, `LevelTimeline`).
- `lib/data.ts` — The central data file containing all portfolio content (projects, experience, skills, contact info). Edit this file to easily update the site's content!
- `public/` — Static assets, currently just the downloadable `resume.pdf`.
- `.github/workflows/deploy.yml` — Builds the static export and deploys it to GitHub Pages on every push to `master`.

## 🎨 Design System Customization

The retro design system is built entirely using CSS variables in `app/globals.css` combined with Tailwind classes. You can easily tweak the theme colors:

```css
:root {
  --bg: #0a0e0a;           /* Deep terminal background */
  --bg-card: #111a11;      /* Slightly lighter card background */
  --primary: #3ddc4a;      /* Terminal green */
  --primary-dim: #2aaa35;  /* Dim green for borders/shadows */
  --accent: #f2c14e;       /* Amber accent for CTAs */
  --text: #c8f7ca;         /* Soft green-white for body text */
}
```

## 📝 Editing Content

To update the portfolio with your own information, open `lib/data.ts` and modify the exported objects — `personalInfo`, `stats`, `skillCategories`, `quests`, `bossBattles`, `milestones`, and `contact`. The site automatically populates the new data into the retro UI components; no other files need to change for a content-only update.

## 🌐 Deployment

The site is a fully static export (`output: "export"` in `next.config.ts`) served from GitHub Pages at a project subpath, so `basePath` is set to `/Portfolio` to match the repo name. Pushing to `master` triggers `.github/workflows/deploy.yml`, which runs `next build` and publishes the `out/` directory via GitHub Actions.

## 🤝 Contact

Created by Adnan Jukkerwala.
- **GitHub:** [@AdnanJukker](https://github.com/AdnanJukker)
- **LinkedIn:** [Adnan Jukkerwala](https://www.linkedin.com/in/adnan-jukkerwala-023b301a6/)
