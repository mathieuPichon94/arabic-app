import type React from "react";
import { cva } from "class-variance-authority";

type ButtonProps = {
  text: string;
  onClickButton: () => void;
  intent: "primary" | "secondary" | "success" | "danger" | "disabled";
  disabled?: boolean;
};
const buttonStyle = cva("text-white font-bold py-2 px-4 rounded-full", {
  variants: {
    intent: {
      primary: "bg-blue-500 hover:bg-blue-700",
      secondary: "bg-purple-500 hover:bg-purple-700",
      success: "bg-green-500 hover:bg-green-700 ",
      danger: "bg-red-500 hover:bg-red-700",
      disabled: "bg-gray-300 focus:outline-none",
    },
  },
  defaultVariants: { intent: "primary" },
});

export const Button: React.FC<ButtonProps> = ({
  intent,
  text,
  onClickButton,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={buttonStyle({ intent: intent })}
      onClick={onClickButton}
      disabled={disabled !== undefined ? disabled : false}
    >
      {text}
    </button>
  );
};
