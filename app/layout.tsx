import "@/styles/globals.css";
import "@upstash/claps/style.css";

import AnalyticsWrapper from "./analytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  style: "normal",
  subsets: ["latin-ext"],
});

const title = "M. Furkan Eminer";
const description = "software developer, ex security researcher.";
const url = "https://furkaneminer.com";
const locale = "tr-TR";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@mfeminer",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/icons/icon-android-chrome-192x192.png",
    apple: "/icons/icon-apple-touch-icon.png",
  },
  manifest: `${url}/manifest.json`,
};

export default async function Layout({ children }) {
  return (
    <html lang="tr" className={`"scroll-smooth" ${inter.variable}`}>
      <body className="bg-white text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400">
        <div className="flex min-h-screen flex-col pt-10 pb-14">
          <Header />
          <main className="mt-10 flex-grow sm:mt-20">{children}</main>
          <Footer />
        </div>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
