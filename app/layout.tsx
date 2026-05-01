import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html lang="fr" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
