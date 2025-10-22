import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
        url: '/mrm favicon.png',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: "Mia R. Massimo",
    description: "otters and seals doing wild flips and flurps. Maximum vibes only.",
    images: [
      {
        url: '/mrm favicon.png',
        width: 1200,
        height: 630,
        alt: "Mia R. Massimo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mia R. Massimo",
    description: "otters and seals doing wild flips and flurps. Maximum vibes only.",
    images: ['/mrm favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
