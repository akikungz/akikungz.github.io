"use client";
import { useContext, useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdClose, MdLightMode, MdOutlineDarkMode, MdOutlineMenu } from "react-icons/md";

import { ThemeContext } from "@/context/theme";
import { _class } from "@/functions";
import { routes } from "@/router";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth > 768 && setMenuOpen(false));
    window.addEventListener("scroll", () => setScroll(window.scrollY > 0));

    return () => window.removeEventListener("resize", () => undefined);
  }, []);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 p-2">
        <div className={_class(
          "p-4 dark:text-slate-50 rounded-xl",
          scroll ? "bg-pink-300" : "bg-pink-300/60",
        )}>
          <div className="flex items-center justify-between container mx-auto">
            <Link href="/" className="text-xl font-bold">
              @akikungz
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-4">
                {routes.map(({ ...route }, key) => <NavItem {...route} key={key} />)}
              </div>

              <button onClick={toggleMenu} className="md:hidden text-2xl hover:text-pink-400 cursor-pointer">
                { menuOpen ? <MdClose /> : <MdOutlineMenu /> }
              </button>

              <button onClick={toggleTheme} className="text-2xl hover:text-pink-400 cursor-pointer">
                {theme == "dark" ? <MdLightMode /> : <MdOutlineDarkMode />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={_class("fixed left-0 top-0 w-full h-full bg-slate-300/90 dark:bg-black/90 z-40", !menuOpen && "hidden")}>
        <div className="container mx-auto px-4 pt-22">
          <div className="flex flex-col gap-2">
            {routes.map(({ ...route }, key) => 
              <NavItem 
                {...route} 
                key={key} 
                className="text-center hover:bg-pink-300 hover:text-black! p-2 rounded-md"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

interface NavItemProps {
  href: string;
  children: string;
  className?: string;
  onClick?: () => void;
}

function NavItem({ href, children, className, onClick }: NavItemProps) {
  const pathname = usePathname();

  const isPath = (href: string) => {
    if (href == "/") return pathname == "/";
    return pathname.includes(href);
  }

  return (
    <Link {...{ href, children, onClick }} className={_class(
      isPath(href) && "text-pink-400 underline hover:text-black dark:hover:text-slate-50",
      "hover:underline hover:text-pink-400", className
    )} />
  )
}