"use client";
import { useContext } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

import { ThemeContext } from "@/context/theme";
import { _class } from "@/functions/class";
import { routes } from "@/router";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="w-full sticky top-0 z-10 p-4">
      <div className="p-4 bg-pink-300/80 dark:bg-pink-300/50 dark:text-slate-50 rounded-xl">
        <div className="flex items-center justify-between container mx-auto">
          <Link href="/" className="text-xl font-bold">
            @akikungz
          </Link>

          <div className="flex items-center gap-4">
            <div className={_class("flex gap-4")}>
              {routes.map(({ ...route }, key) => <NavItem {...route} key={key} />)}
            </div>

            <button onClick={toggleTheme}>
              {theme == "dark" ? <MdLightMode /> : <MdOutlineDarkMode />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ href, children }: { href: string, children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Link {...{ href, children }} className={_class(pathname == href && "dark:text-pink-300 text-pink-700")} />
  )
}