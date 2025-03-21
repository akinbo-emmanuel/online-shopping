import type { Metadata } from "next";
import { poppins, volkhov } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Shortcuts from "@/components/Shortcuts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
    </html>
  );
}
