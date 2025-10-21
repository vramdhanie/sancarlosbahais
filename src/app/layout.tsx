import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

// Cache-busting version for favicon
const FAVICON_VERSION = Date.now();

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baha'is of San Carlos - Building Community Together",
  description: "Join the Baha'i community of San Carlos, California in building a more unified, loving neighborhood through service, study, and spiritual growth.",
  icons: {
    icon: [
      { url: `/favicon.ico?v=${FAVICON_VERSION}`, sizes: 'any' },
      { url: `/favicon.png?v=${FAVICON_VERSION}`, sizes: '32x32', type: 'image/png' },
    ],
    shortcut: `/favicon.ico?v=${FAVICON_VERSION}`,
    apple: [
      { url: `/favicon.png?v=${FAVICON_VERSION}`, sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`/favicon.ico?v=${FAVICON_VERSION}`} sizes="any" />
        <link rel="icon" href={`/favicon.png?v=${FAVICON_VERSION}`} type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href={`/favicon.png?v=${FAVICON_VERSION}`} />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${crimsonText.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
