import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Easylab AI × Datacenter Luxembourg — Solutions IA sur mesure",
  description:
    "Deux solutions IA exclusives pour Datacenter Luxembourg : Natural Language Infrastructure Provisioning et AI Network Security Monitor. Par Easylab AI.",
  keywords:
    "datacenter luxembourg, IA, intelligence artificielle, infrastructure, sécurité réseau, NIS2, easylab",
  authors: [{ name: "Easylab AI" }],
  openGraph: {
    title: "Easylab AI × Datacenter Luxembourg",
    description:
      "L'intelligence artificielle au cœur de votre infrastructure datacenter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
