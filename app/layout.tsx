import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "DEBUG QUEST | Adnan Jukkerwala — Full-Stack & iOS Developer",
  description:
    "A developer-hero leveling up through real projects and internships. Portfolio of Adnan Jukkerwala — Full-Stack & iOS Developer from Udaipur, India.",
  keywords: [
    "Adnan Jukkerwala",
    "portfolio",
    "developer",
    "iOS",
    "SwiftUI",
    "React",
    "full-stack",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
