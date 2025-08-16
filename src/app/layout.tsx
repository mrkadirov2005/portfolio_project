import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muzaffar Abdukadirov | Full-Stack Developer Portfolio",
  description:
    "Welcome to the official portfolio of Muzaffar Abdukadirov, a full-stack developer specializing in React, Next.js, TypeScript, Node.js, and Python. Explore my projects, skills, and experience.",
  keywords: [
    "Muzaffar Abdukadirov",
    "Muzaffar Portfolio",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Python Developer",
    "Frontend Developer Uzbekistan",
  ],
  authors: [{ name: "Muzaffar Abdukadirov", url: "https://m-kadirov.uz" }],
  creator: "Muzaffar Abdukadirov",
  publisher: "Muzaffar Abdukadirov",
  metadataBase: new URL("https://m-kadirov.uz"),

  // ✅ Favicons & App Icons
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Muzaffar Abdukadirov | Full-Stack Developer",
    description:
      "Portfolio of Muzaffar Abdukadirov showcasing projects in React, Next.js, TypeScript, Python, and Node.js.",
    url: "https://m-kadirov.uz",
    siteName: "Muzaffar Portfolio",
    images: [
      {
        url: "/profile.jpg", // ✅ stored in public/profile.jpg
        width: 1200,
        height: 630,
        alt: "Muzaffar Abdukadirov Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muzaffar Abdukadirov | Full-Stack Developer",
    description:
      "Explore the projects and skills of Muzaffar Abdukadirov, a passionate full-stack developer.",
    images: ["/profile.jpg"], // ✅ stored in public/profile.jpg
    creator: "https://t.me/itechnic_me",
  },

  alternates: {
    canonical: "https://m-kadirov.uz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
