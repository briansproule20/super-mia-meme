import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mia R. Massimo",
  description: "otters and seals doing wild flips and flurps. Maximum vibes only.",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🦭</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: "Mia R. Massimo",
    description: "otters and seals doing wild flips and flurps. Maximum vibes only.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Seal emoji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mia R. Massimo",
    description: "otters and seals doing wild flips and flurps. Maximum vibes only.",
    images: ['/og-image.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
