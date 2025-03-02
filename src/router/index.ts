export interface Route {
  href: string;
  children: string;
}

export const routes: Route[] = [
  { href: "/", children: "Home" },
  // { href: "/projects", children: "Projects" },
  // { href: "/blogs", children: "Blogs" },
  // { href: "/contact", children: "Contact" },
];