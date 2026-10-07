import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const localTitle = `${siteConfig.name} | Home Barber Service in ${siteConfig.address.city}`;
const localDescription = `Professional home barber services in ${siteConfig.address.city}. Haircut, beard trimming, facials, hair spa, grooming packages and more at your doorstep. Book via WhatsApp today.`;
const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Home Barber Service in ${siteConfig.address.city}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: localTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: localDescription,
  keywords: [
    "home barber coimbatore",
    "barber service at home",
    "mens grooming coimbatore",
    "haircut at home coimbatore",
    "beard trimming coimbatore",
    "home salon for men",
    "mobile barber service",
    "barber near me coimbatore",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: localTitle,
    description: localDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: localTitle,
    description: localDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "lifestyle",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
