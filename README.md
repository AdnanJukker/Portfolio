# ⚔️ Debug Quest — Developer Portfolio

**Debug Quest** is a personal portfolio website built with Next.js, framed as a retro pixel-game "character sheet." It channels the energy of an 8-bit arcade or dungeon-crawler RPG, featuring stat bars, quest logs, and boss battles instead of standard resume sections.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

---

## ✨ Features

- **Retro Aesthetic**: A custom green terminal palette, CRT scanline overlays, blinking cursors, and pixelated borders powered by Tailwind CSS.
- **Character Sheet**: View skills represented as "Stat Bars" (segmented retro health-bar style) and "Skill Trees".
- **Quest Log**: Experience and internships formatted as an RPG quest log complete with rewards and quest givers.
- **Boss Battles**: Major projects showcased as boss encounters, complete with dynamic pixel-star difficulty ratings.
- **Save Point (Contact)**: A fully functional contact form powered by Web3Forms, styled as an in-game save point.
- **Fully Responsive**: Carefully crafted grids and typography that scale beautifully down to mobile devices (375px width tested).
- **Accessible & Performant**: High contrast colors, reduced motion media queries, and optimized Next.js app router architecture.

## 🚀 Quick Start

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/AdnanJukker/portfolio.git
cd portfolio
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [Web3Forms](https://web3forms.com/)
- **Icons:** Custom CSS + inline SVGs (no heavy icon libraries!)
- **Fonts:** Space Mono (Body) & Press Start 2P (Display)

## 📁 Project Structure

- `app/` — Next.js app router, layouts, and global CSS (where the retro design system is defined).
- `components/` — Reusable React components (e.g., `BossBattleCard`, `QuestCard`, `PixelButton`, `StatBar`).
- `lib/data.ts` — The central data file containing all portfolio content (projects, experience, skills, contact info). Edit this file to easily update the site's content!
- `public/` — Static assets like fonts, icons, and the downloadable `resume.pdf`.

## 🎨 Design System Customization

The retro design system is built entirely using CSS variables in `app/globals.css` combined with Tailwind classes. You can easily tweak the theme colors:

```css
:root {
  --bg: #050505;           /* Deep terminal background */
  --bg-card: #0a0a0a;      /* Slightly lighter card background */
  --primary: #3ddc4a;      /* Terminal green */
  --primary-dim: #1a5c20;  /* Dark green for borders/shadows */
  --accent: #f59e0b;       /* Amber accent for CTAs */
  --text: #e2e8f0;         /* Soft white for body text */
}
```

## 📝 Editing Content

To update the portfolio with your own information, simply open `lib/data.ts` and modify the JavaScript objects. The site will automatically populate the new data into the retro UI components.

## 🤝 Contact

Created by Adnan Jukkerwala.
- **GitHub:** [@AdnanJukker](https://github.com/AdnanJukker)
- **LinkedIn:** [Adnan Jukkerwala](https://www.linkedin.com/in/adnan-jukkerwala-023b301a6/)
