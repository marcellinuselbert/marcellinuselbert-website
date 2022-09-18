import React from "react";

type HeaderProps = {
  className?: string;
  preset: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
};

export const Header = ({ className, preset, children }: HeaderProps) => {
  return (
    <h1
      className={`${
        preset === "h1"
          ? "font-inter font-bold desktop:text-[3rem] mobile:text-[1.5rem]"
          : preset === "h2"
          ? "font-inter font-bold desktop:text-[2rem] mobile:text-[1.25rem]"
          : preset === "h3"
          ? "font-inter font-bold desktop:text-[1.5rem] mobile:text-[1.125rem]"
          : "font-inter font-bold desktop:text-[1.25rem] mobile:text-[1rem]"
      } ${className}`}
    >
      {children}
    </h1>
  );
};
