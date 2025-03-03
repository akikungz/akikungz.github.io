import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { _class } from "@/functions/class";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@akikungz",
  description: "@akikungz profile page created with Next.js and Tailwind CSS",
  icons: "/favicon.ico",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <ThemeProvider>
      <body className={_class(
        inter.className,
        "dark:bg-[#0f0f0f] dark:text-white relative min-h-screen"
      )}>
        <Navbar />
        <div className="w-full px-4 md:px-0 mx-auto container">
          {children}
        </div>
      </body>
    </ThemeProvider>
  );
}
