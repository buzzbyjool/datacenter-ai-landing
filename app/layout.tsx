import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Datacenter Luxembourg — Solutions IA",
  description:
    "Provisioning IA et sécurité réseau intelligente pour votre infrastructure",
  keywords:
    "datacenter luxembourg, IA, intelligence artificielle, infrastructure, sécurité réseau, NIS2, provisioning",
  authors: [{ name: "Datacenter Luxembourg" }],
  openGraph: {
    title: "Datacenter Luxembourg — Solutions IA",
    description:
      "Provisioning IA et sécurité réseau intelligente pour votre infrastructure",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
