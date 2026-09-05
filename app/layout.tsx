import type { Metadata, Viewport } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

import { personalInfo, contact } from "@/lib/data";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

const siteUrl = "https://adnanjukker.github.io/Portfolio";
const title = "DEBUG QUEST | Adnan Jukkerwala — Full-Stack & iOS Developer";
const description =
  "A developer-hero leveling up through real projects and internships. Portfolio of Adnan Jukkerwala — Full-Stack & iOS Developer from Udaipur, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | DEBUG QUEST",
  },
  description,
  keywords: [
    "Adnan Jukkerwala",
    "portfolio",
    "developer",
    "iOS",
    "SwiftUI",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "LLM",
    "NLP",
    "full-stack",
  ],
  authors: [{ name: personalInfo.name, url: contact.github }],
  creator: personalInfo.name,
  applicationName: "Debug Quest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Debug Quest",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e0a",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  url: siteUrl,
  email: `mailto:${contact.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: contact.location,
  },
  sameAs: [contact.github, contact.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
