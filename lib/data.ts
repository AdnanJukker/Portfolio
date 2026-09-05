// ─── Personal Info ──────────────────────────────────────────────
export const personalInfo = {
  name: "ADNAN JUKKERWALA",
  title: "Full-Stack & iOS Developer",
  tagline:
    "A developer-hero leveling up through real projects, internships, and late-night debugging sessions.",
  heroTitle: "DEBUG QUEST",
  heroSubtitle: ">> PRESS START TO BEGIN YOUR ADVENTURE",
};

// ─── Stats (Character Sheet) ────────────────────────────────────
export interface Stat {
  name: string;
  level: number;
  maxLevel: number;
  description: string;
}

export const stats: Stat[] = [
  {
    name: "MOBILE DEV",
    level: 85,
    maxLevel: 100,
    description: "SwiftUI · iOS · React Native",
  },
  {
    name: "WEB DEV",
    level: 80,
    maxLevel: 100,
    description: "React · JavaScript · PHP",
  },
  {
    name: "UI/UX",
    level: 70,
    maxLevel: 100,
    description: "Figma · Prototyping · User Research",
  },
  {
    name: "GAME DESIGN",
    level: 65,
    maxLevel: 100,
    description: "Level Design · Game Mechanics · Storytelling",
  },
];

// ─── About ──────────────────────────────────────────────────────
export const aboutText = [
  "I started my coding journey fueled by curiosity, copious amounts of chai, and way too many late-night debugging sessions.",
  "Over time I evolved from a wide-eyed beginner into a full-stack developer who builds polished iOS apps, scalable web platforms, and occasionally designs game worlds.",
  "When I'm not squashing bugs, you'll find me exploring new frameworks, tinkering with side projects, or leveling up my skills one commit at a time.",
];

// ─── Skills (Skill Tree) ───────────────────────────────────────
export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "LANGUAGES",
    icon: ">",
    skills: [
      { name: "C", icon: "C" },
      { name: "C++", icon: "++" },
      { name: "Java", icon: "JV" },
      { name: "JavaScript", icon: "JS" },
      { name: "TypeScript", icon: "TS" },
      { name: "Python", icon: "PY" },
      { name: "Dart", icon: "DA" },
      { name: "Swift", icon: "SW" },
    ],
  },
  {
    category: "DATABASES",
    icon: ">",
    skills: [
      { name: "PHP", icon: "HP" },
      { name: "SQL", icon: "SQ" },
      { name: "MySQL", icon: "MY" },
      { name: "PostgreSQL", icon: "PG" },
    ],
  },
  {
    category: "FRAMEWORKS",
    icon: ">",
    skills: [
      { name: "SwiftUI", icon: "UI" },
      { name: "React", icon: "RE" },
      { name: "Next.js", icon: "NX" },
      { name: "React Native", icon: "RN" },
      { name: "Flutter", icon: "FL" },
    ],
  },
  {
    category: "AI / ML",
    icon: ">",
    skills: [
      { name: "FastAPI", icon: "FA" },
      { name: "LangGraph", icon: "LG" },
      { name: "NLP / NER", icon: "NL" },
      { name: "LLM Integration", icon: "AI" },
      { name: "Vector Search", icon: "VD" },
    ],
  },
  {
    category: "TOOLS",
    icon: ">",
    skills: [
      { name: "Git", icon: "GI" },
      { name: "Docker", icon: "DK" },
      { name: "VS Code", icon: "VS" },
      { name: "Xcode", icon: "XC" },
    ],
  },
];

// ─── Experience (Quest Log) ────────────────────────────────────
export interface Quest {
  title: string;
  questGiver: string;
  dates: string;
  status: "COMPLETE" | "IN PROGRESS";
  description: string[];
  rewards: string[];
}

export const quests: Quest[] = [
  {
    title: "iOS App Development Intern",
    questGiver: "MLSU Career Incubation Centre",
    dates: "Jun 2025 – Jul 2025",
    status: "COMPLETE",
    description: [
      "Built and shipped an iOS application using SwiftUI and Core Data",
      "Implemented complex tax calculation logic with real-time UI updates",
      "Collaborated with mentors to refine UX patterns for mobile-first design",
    ],
    rewards: ["SwiftUI", "Core Data", "iOS", "Xcode"],
  },
  {
    title: "Freelance Web Developer",
    questGiver: "TravelerzPlan",
    dates: "Jul 2024 – Aug 2024",
    status: "COMPLETE",
    description: [
      "Designed and developed a responsive travel booking platform",
      "Created intuitive UI/UX flows for trip planning and itinerary management",
      "Delivered pixel-perfect frontend with cross-browser compatibility",
    ],
    rewards: ["HTML/CSS", "JavaScript", "UI/UX", "Freelance"],
  },
  {
    title: "Game Design Intern",
    questGiver: "Altworld",
    dates: "Dec 2022 – Oct 2023",
    status: "COMPLETE",
    description: [
      "Designed game mechanics and level layouts for interactive experiences",
      "Prototyped gameplay concepts and iterated based on playtesting feedback",
      "Collaborated with cross-functional teams on narrative-driven game design",
    ],
    rewards: ["Game Design", "Level Design", "Prototyping", "Teamwork"],
  },
];

// ─── Projects (Boss Battles) ───────────────────────────────────
export interface BossBattle {
  name: string;
  difficulty: number; // 1–5 stars
  techStack: string[];
  description: string;
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const bossBattles: BossBattle[] = [
  {
    name: "NarcoNet — Trafficking Intelligence Graph",
    difficulty: 5,
    techStack: ["Python", "FastAPI", "LangGraph", "Next.js", "PostgreSQL", "Qdrant"],
    description:
      "A full-stack intelligence platform built in a 36-hour hackathon with Team Dragnet: ingests raw text reports and runs them through a fine-tuned NER + LLM pipeline to extract and correlate entities into a live trafficking-route knowledge graph.",
    features: [
      "LangGraph-orchestrated pipeline (normalize → candidate_search → resolve → link) with a three-tier fallback: trained model → LLM → rules",
      "Entity resolution via Qdrant vector search + sentence-transformer embeddings, deduplicating mentions into a shared knowledge graph instead of duplicate nodes",
      "Next.js 16 dashboard using a Backend-for-Frontend pattern — a force-directed network graph, incident feed, and seizure timeline updating in real time",
      "FastAPI backend with API-key auth, per-route rate limiting, and an integration test suite that runs against real Postgres + Qdrant containers",
    ],
    githubUrl: "https://github.com/AdnanJukker/NarcoNet",
  },
  {
    name: "Income Tax Calculator",
    difficulty: 4,
    techStack: ["SwiftUI", "Core Data", "iOS"],
    description:
      "A full-featured iOS app that calculates income tax under both Old and New Indian tax regimes with a clean, dark-mode-ready interface.",
    features: [
      "Old & New tax regime comparison",
      "Core Data persistence for saved calculations",
      "Dark mode support with adaptive UI",
      "Real-time calculation with animated results",
    ],
    githubUrl: "https://github.com/AdnanJukker/IncomeTax_Calculator_App-",
  },
  {
    name: "Ledger — Expense Tracker",
    difficulty: 3,
    techStack: ["React", "Vite", "JavaScript", "Context API", "CSS Custom Properties"],
    description:
      "A client-side expense tracker with a warm paper-and-ink visual identity — no backend required.",
    features: [
      "Global state handled with Context API + useReducer — no external state library",
      "Custom useLocalStorage hook for persistence, plus a dark/light theme toggle saved across sessions",
      "Hand-rolled bar chart for category breakdowns instead of pulling in a charting dependency",
    ],
    githubUrl: "https://github.com/AdnanJukker/Expense_Tracker_app",
  },
  {
    name: "Shoe Store — E-Commerce App",
    difficulty: 3,
    techStack: ["Flutter", "Dart"],
    description:
      "A Flutter e-commerce app for browsing and buying shoes, with a full cart flow from listing to checkout.",
    features: [
      "Cart state managed through a dedicated Cart model — add, remove, and quantity handling",
      "Multi-page flow: intro screen, shop listing, product tiles, and cart page",
      "Custom shoe-tile and bottom-nav components built from scratch, not a UI kit",
    ],
    githubUrl: "https://github.com/AdnanJukker/e_commerce_Flutter_App",
  },
];

// ─── Education (Level Milestones) ──────────────────────────────
export interface Milestone {
  level: number;
  degree: string;
  institution: string;
  year: string;
  status: "COMPLETE" | "IN PROGRESS";
}

export const milestones: Milestone[] = [
  {
    level: 3,
    degree: "MCA — Master of Computer Applications",
    institution: "SRMIST, Chennai",
    year: "2026 – 2028",
    status: "IN PROGRESS",
  },
  {
    level: 2,
    degree: "BCA — Bachelor of Computer Applications",
    institution: "MLSU, Udaipur",
    year: "2022 – 2025",
    status: "COMPLETE",
  },
  {
    level: 1,
    degree: "HSSC — Higher Secondary ",
    institution: "Udaipur",
    year: "2022",
    status: "COMPLETE",
  },
];

// ─── Contact (Save Point) ──────────────────────────────────────
export const contact = {
  email: "adnanjukker402@gmail.com",
  phone: "+91-8769552538",
  location: "Udaipur, India",
  github: "https://github.com/AdnanJukker",
  githubHandle: "AdnanJukker",
  linkedin: "https://www.linkedin.com/in/adnan-jukkerwala-023b301a6/",
  linkedinHandle: "Adnan Jukkerwala",
};

// ─── Navigation ─────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "QUESTS", href: "#experience" },
  { label: "BOSSES", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];
