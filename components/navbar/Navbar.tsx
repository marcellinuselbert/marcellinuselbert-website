import React, { useState } from "react";
import { useRouter } from "next/router";
import MenuIcon from "../../public/icons/menu.svg";
import CloseIcon from "../../public/icons/x.svg";
import { NavigationLink, NavLinks } from "@constants";

import Link from "next/link";
import { Header, Button } from "@components";

export const Navbar = () => {
  const { route } = useRouter();
  const baseRoute = "/" + route.split("/");

  const [hasFirstOpened, setFirstOpened] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isNavHidden, setNavHidden] = useState(true);
  const toggleNav = () => {
    const firstOpened = hasFirstOpened || true;
    const navOpen = !isNavOpen;

    setFirstOpened(firstOpened);
    setNavOpen(navOpen);

    if (!navOpen && firstOpened) {
      setTimeout(() => setNavHidden(true), 500);
    } else if (navOpen) {
      setNavHidden(false);
    }
  };

  return (
    <div
      className="fixed w-full h-16 bg-white shadow-lg"
      style={{ zIndex: 9999 }}
    >
      {/* Mobile navigation overlay */}
      {isNavOpen && (
        <div
          className={`absolute inset-0 pt-20 w-full h-screen bg-white ${
            isNavHidden && "hidden"
          } ${
            isNavOpen
              ? "animate-flip-in-vertical-right"
              : hasFirstOpened
              ? "animate-fade-out"
              : ""
          }`}
        >
          <Header
            className={`flex flex-col px-6 text-green-dark gap-10 ${
              isNavHidden && "hidden"
            } ${
              isNavOpen
                ? "animate-fade-in"
                : hasFirstOpened
                ? "animate-fade-out"
                : ""
            }`}
            preset="h4"
          >
            {NavLinks.map(({ href, label, sub }: NavigationLink) => (
              <div
                key={label}
                className={`cursor-pointer dekstop:hover-underline-animation ${
                  href === baseRoute && "text-tosca"
                }`}
              >
                <Link href={href}>{label}</Link>
              </div>
            ))}
          </Header>
        </div>
      )}

      <div className="relative desktop:container flex justify-between items-center mobile:mx-4 h-full">
        <div className="z-10 cursor-pointer" onClick={() => setNavOpen(false)}>
          <Link href="/" passHref>
            hah
            {/* <EducareLogo width={42} height={42} /> */}
          </Link>
        </div>

        <Header
          className="hidden desktop:flex gap-14 text-green-dark"
          preset="h4"
        >
          {NavLinks.map(({ href, label, sub }: NavigationLink) => (
            <div
              key={label}
              className={`cursor-pointer transition duration-100 delay-75 ease-linear hover-underline-animation ${
                href === baseRoute && "text-tosca"
              }`}
            >
              <Link href={href}>{label}</Link>
            </div>
          ))}
        </Header>

        <div className="desktop:hidden z-10 my-auto">
          <div
            className={`cursor-pointer ${
              isNavOpen
                ? "animate-rotate-in-2-clockwise"
                : hasFirstOpened
                ? "animate-rotate-in-2-counter-clockwise"
                : ""
            }
            `}
            onClick={toggleNav}
          >
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};
