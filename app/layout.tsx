import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Step1 — Clone a landing page, make it yours with AI",
  description:
    "Step1 is a Chrome extension to clone public landing pages into editable code, then refine copy, colors, and layout with AI.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
