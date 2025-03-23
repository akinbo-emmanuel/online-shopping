import type { Metadata } from "next";
import { poppins, volkhov } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Shortcuts from "@/components/Shortcuts";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "FASCO Shop",
  description: "Online Shopping by FASCO Shop built by Emmanuel Akinbo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${volkhov.variable}`}>
      <body>
        <Header />
        {children}

        <Shortcuts />
      </body>

      <Analytics />
    </html>
  );
}
