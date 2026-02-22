import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beaconlegal.ai"),
  title: {
    default: "Beacon — AI-Powered Operations for Modern Law Firms",
    template: "%s | Beacon",
  },
  description:
    "Beacon helps law firms monitor portfolio health, review proformas, run AI-powered client due diligence, and manage billing workflows — all in one intelligent platform.",
  keywords: [
    "legal operations",
    "law firm software",
    "proforma review",
    "client intelligence",
    "portfolio health",
    "legal billing",
    "AI legal",
  ],
  openGraph: {
    title: "Beacon — AI-Powered Operations for Modern Law Firms",
    description:
      "Monitor portfolio health, review proformas, and run AI client due diligence.",
    url: "https://beaconlegal.ai",
    siteName: "Beacon",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beacon — AI-Powered Legal Operations",
    description: "The intelligent operations platform for modern law firms.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="bg-bg-base text-text-primary font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
