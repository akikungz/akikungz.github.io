export interface Route {
  href: string;
  children: string;
}

export const routes: Route[] = [
  { href: "/", children: "Home" },
  { href: "/links", children: "Links" },
  { href: "/contact", children: "Contact" },
];