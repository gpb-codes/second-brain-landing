import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Second Brain | Tu Hub Maestro de Conocimiento",
  description: "Metodologia PACE para organizar tu conocimiento. Vault de Obsidian con auto-update, GitHub Actions y chatbot AI.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Second Brain | Tu Hub Maestro de Conocimiento",
    description: "Metodologia PACE para organizar tu conocimiento. Vault de Obsidian con auto-update, GitHub Actions y chatbot AI.",
    url: "https://second-brain-landing.vercel.app",
    siteName: "Second Brain",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Brain | Tu Hub Maestro de Conocimiento",
    description: "Metodologia PACE para organizar tu conocimiento. Vault de Obsidian con auto-update, GitHub Actions y chatbot AI.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${poppins.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
