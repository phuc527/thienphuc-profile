import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phúc | Fullstack Developer",
  description:
    "Personal portfolio of Phúc — Fullstack Developer specializing in React, TypeScript, PHP, Laravel and Node.js.",
  metadataBase: new URL("https://phuc527.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}