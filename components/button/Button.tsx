import React from "react";
import { Body } from "@components";
type ButtonProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  padding?: string;
  border?: string;
  leftIcon?: React.SVGAttributes<SVGElement>;
  rightIcon?: React.SVGAttributes<SVGElement>;

  type: "primary" | "outlined" | "disabled";

  children?: React.ReactNode;
  [props: string]: any;
};
type ButtonStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
  hover: string;
};

type ButtonPresetProps = {
  [key: string]: ButtonStyleProps;
};

const BUTTON_PRESETS: ButtonPresetProps = {
  primary: {
    border: "rounded-full",
    borderWidth: "border-2",
    color: "bg-salmon",
    hover: "hover:bg-black-600 ",
    text: "text-white",
    borderColor: "border-salmon hover:border-black-600",
  },
  outlined: {
    border: "rounded-full",
    borderWidth: "border-2",
    color: "bg-white",
    hover: "hover:bg-black-600 hover:border-black-600",
    text: "text-salmon hover:text-white",
    borderColor: "border-salmon",
  },
  disabled: {
    border: "rounded-full",
    borderWidth: "border-2",
    color: "bg-disabled",
    hover: "",
    text: "text-grey",
    borderColor: "border-disabled",
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  padding,
  border,
  leftIcon,
  rightIcon,

  ...props
}) => {
  return (
    <button
      className={`transition-all flex justify-center items-center gap-2 rounded-full 
      ${BUTTON_PRESETS[type].text} md:text-base text-sm 
      ${BUTTON_PRESETS[type].border} 
      ${border ? border : BUTTON_PRESETS[type].borderWidth} 
      ${border ? border : BUTTON_PRESETS[type].borderColor} 
      ${BUTTON_PRESETS[type].hover} 
      ${BUTTON_PRESETS[type].color} 
      ${padding ? padding : "py-1 px-4"} 
  
      ${className}`}
      {...props}
      type="button"
      disabled={Object.keys(BUTTON_PRESETS)[0] == "disabled" ? true : false}
    >
      {leftIcon ? <>{leftIcon}</> : null}
      <Body preset="p2">{children}</Body>

      {rightIcon ? <>{rightIcon} </> : null}
    </button>
  );
};
