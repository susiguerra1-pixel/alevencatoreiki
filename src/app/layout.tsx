import JsonLd from "@/components/JsonLd";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

/* ------------------------------------------------------------------ */
/* FONTS                                                               */
/* Primary: Jost (corpo + headings secundários)                        */
/* Serif: Cormorant Garamond (headings principais, quotes, logo)       */
/* ------------------------------------------------------------------ */

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-jost-var",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alevencatoreiki.com.br"),
  title: {
    default: "Reiki em Caxias do Sul | Ale Vencato Reiki — Terapia Energética",
    template: "%s | Ale Vencato Reiki — Caxias do Sul",
  },
  description:
    "Sessões de Reiki Usui em Caxias do Sul com Ale Vencato. Reduza ansiedade, melhore o sono e recupere sua energia. Agende pelo WhatsApp.",
  keywords: [
    "reiki caxias do sul",
    "terapia energética caxias do sul",
    "reiki usui caxias",
    "ansiedade reiki",
    "terapia complementar caxias do sul",
    "reiki caxias do sul rs",
    "terapia holística caxias do sul",
    "equilíbrio energético caxias do sul",
    "Ale Vencato reiki",
    "Alessandra Vencato reiki",
    "sessão de reiki caxias",
    "reiki para ansiedade",
    "reiki para insônia",
    "reiki para esgotamento",
  ],
  authors: [{ name: "Alessandra Vencato" }],
  creator: "Alessandra Vencato",
  publisher: "Ale Vencato Reiki",
  alternates: {
    canonical: "https://alevencatoreiki.com.br",
    languages: { "pt-BR": "https://alevencatoreiki.com.br" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://alevencatoreiki.com.br",
    siteName: "Ale Vencato Reiki",
    title: "Reiki em Caxias do Sul | Ale Vencato Reiki",
    description:
      "Reduza ansiedade, durma melhor e recupere sua energia com sessões de Reiki Usui em Caxias do Sul. Agende agora.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ale Vencato Reiki — Caxias do Sul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reiki em Caxias do Sul | Ale Vencato Reiki",
    description:
      "Sessões de Reiki Usui para reduzir ansiedade, melhorar o sono e recuperar sua energia. Caxias do Sul, RS.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

/* ── Viewport separado (padrão Next.js App Router) ──
   Controla a barra do navegador no mobile e escala inicial */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F0EB",   // cor da barra do Chrome/Safari no mobile
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jost.variable} ${cormorant.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
