import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cogitau",
  description: "Blog, journal, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${sourceSerif.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto max-w-2xl px-6">
          <Nav />
          <main className="py-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
