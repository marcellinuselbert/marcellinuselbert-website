import { ReactNode } from "react";

type BodyPreset = "p1" | "p2" | "p3" | "b1" | "b2" | "b3";

type BodyProps = {
  className?: string;
  preset: BodyPreset;
  children: ReactNode;
};

export const Body = ({ className, children, preset }: BodyProps) => {
  return (
    <p
      className={`font-futura ${
        preset === "p1"
          ? "lg:text-[1.5rem] text-[1rem]"
          : preset === "p2"
          ? "lg:text-[1rem] text-[0.75rem]"
          : "lg:text-[0.75rem] text-[0.5rem]"
      } ${className}`}
    >
      {children}
    </p>
  );
};
