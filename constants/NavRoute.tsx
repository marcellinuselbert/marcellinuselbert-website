export type NavigationLink = {
  href: string;
  label: string;
  sub?: SubNavigationLink[];
};

export type SubNavigationLink = {
  href: string;
  title: string;
  description?: string;
  icon: React.SVGAttributes<SVGElement>;
};

export const NavLinks: NavigationLink[] = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
];
