import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liberty Scale — Lancez votre LLC américaine",
  description:
    "Liberty Scale aide les entrepreneurs du monde entier à créer et gérer leur LLC américaine depuis n'importe où. Delaware, Wyoming, EIN, compte bancaire professionnel, support compliance.",
  keywords: "création LLC américaine, Delaware LLC, Wyoming LLC, EIN, compte bancaire professionnel, entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050510] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
