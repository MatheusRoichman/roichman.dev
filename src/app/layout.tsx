import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const soraSans = localFont({
  src: "../../public/fonts/sora-variable.ttf",
  variable: "--sora-sans",
  display: "swap",
});

const dmMono = localFont({
  src: "../../public/fonts/dm-mono-regular.ttf",
  variable: "--dm-mono",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matheus Roichman — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specializing in scalable UI architecture, design systems, and React/TypeScript. Building maintainable frontend foundations for growing teams.",
  keywords: [
    "Frontend Engineer",
    "UI Architecture",
    "Design Systems",
    "React",
    "TypeScript",
    "Frontend Architecture",
  ],
  authors: [{ name: "Matheus Roichman" }],
  openGraph: {
    type: "website",
    url: "https://roichman.dev",
    title: "Matheus Roichman — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in scalable UI architecture, design systems, and React/TypeScript.",
    siteName: "Matheus Roichman",
  },
  twitter: {
    card: "summary",
    title: "Matheus Roichman — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in scalable UI architecture, design systems, and React/TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://roichman.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${soraSans.variable} ${dmMono.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
