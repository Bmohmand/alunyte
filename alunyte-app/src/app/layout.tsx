import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter, poppins } from "@/app/fonts"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alunyte",
  description: "Alunyte — illuminate your data, empower your decisions.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
