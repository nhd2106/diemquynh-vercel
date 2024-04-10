import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { cn } from "@/lib/utils";
import Footer from "@/components/modules/footer";
import Header from "@/components/modules/header";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  height: "device-height",
  minimumScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title:
    "VanThinh Seafoods - Premium Barramundi, Grouper, and More from Vietnam",
  description:
    "VanThinhSeafoods Co., Ltd  Specializing in premium seafood, VanThinh Seafoods offers a select range of products including barramundi, grouper, red mullet, and more, sustainably sourced from Vietnam's rich marine biodiversity. Delivering quality to the USA, Europe, Australia, and the UAE. Contact us today to learn more about our products and services.",
  keywords: [
    "VanThinh Seafoods",
    "Vietnamese barramundi",
    "grouper",
    "red mullet",
    "goldband snapper",
    "leather jacket fish",
    " mahi mahi",
    "parrotfish",
    "sillago whiting",
    "seafood supplier",
    "sustainable seafood",
  ],
  authors: [
    { name: "vanthinhseafoods.com", url: "https://vanthinhseafoods.com" },
  ],
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
  ],
  openGraph: {
    title: "VanThinhSeafoods",
    description:
      "VanThinhSeafoods Co., Ltd  Specializing in premium seafood, VanThinh Seafoods offers a select range of products including barramundi, grouper, red mullet, and more, sustainably sourced from Vietnam's rich marine biodiversity. Delivering quality to the USA, Europe, Australia, and the UAE",
    images: ["https://vanthinhseafoods.com/vanthinh-logo.webp"],
    emails: ["myngo@vanhinhsefaoods.com", "info@vanthinhseafoods.com"],
  },
  twitter: {
    site: "@vanthinhseafoods",
    card: "summary_large_image",
    title: "VanThinhSeafoods",
    description:
      "VanThinhSeafoods Co., Ltd  Specializing in premium seafood, VanThinh Seafoods offers a select range of products including barramundi, grouper, red mullet, and more, sustainably sourced from Vietnam's rich marine biodiversity. Delivering quality to the USA, Europe, Australia, and the UAE",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-N6XBKS122E" />
    </html>
  );
}
