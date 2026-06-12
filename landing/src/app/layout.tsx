import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Second Brain - Tu Hub Maestro de Conocimiento",
  description: "Un vault de Obsidian que funciona como centro de control para todos tus otros vaults. Auto-update con GitHub Actions.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Second Brain - Tu Hub Maestro de Conocimiento",
    description: "Un vault de Obsidian que funciona como centro de control para todos tus otros vaults. Auto-update con GitHub Actions.",
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
    title: "Second Brain - Tu Hub Maestro de Conocimiento",
    description: "Un vault de Obsidian que funciona como centro de control para todos tus otros vaults. Auto-update con GitHub Actions.",
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
        className={`${poppins.variable} ${openSans.variable} font-body antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
