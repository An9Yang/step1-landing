import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for that clean tech look
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Step1 - Clone any site, make it yours with AI",
  description: "The Vibe Coding tool for Pro Consumers. One-click clone and AI editing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
