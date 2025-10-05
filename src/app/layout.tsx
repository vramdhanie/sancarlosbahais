import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
        className={`${crimsonText.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
