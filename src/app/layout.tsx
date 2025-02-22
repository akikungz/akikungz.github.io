import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { _class } from "@/functions/class";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@akikungz",
  description: "@akikungz profile page created with Next.js and Tailwind CSS",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={_class(
        inter.className,
        "bg-slate-950"
      )}>{children}</body>
    </html>
  );
}
