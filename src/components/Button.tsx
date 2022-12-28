import type React from "react";
import { cva } from "class-variance-authority";

type ButtonProps = {
  text: string;
  onClickButton: () => void;
  intent: "primary" | "secondary" | "success";
};
const buttonStyle = cva(" text-white font-bold py-2 px-4 rounded-full", {
  variants: {
    intent: {
      primary: "bg-blue-500 hover:bg-blue-700",
      secondary: "bg-purple-500 hover:bg-purple-700",
      success: "bg-green-500 hover:bg-purple-700",
    },
  },
  defaultVariants: { intent: "primary" },
});
const btn = "";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={buttonStyle({ intent: props.intent })}
      onClick={props.onClickButton}
    >
      {props.text}
    </button>
  );
};
