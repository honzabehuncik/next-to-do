"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  success?: string | boolean;
  primary?: string | boolean;
  secondary?: string | boolean;
  warning?: string | boolean;
  danger?: string | boolean;
  successButton?: string | boolean;
}


const Button = ({
  type,
  text,
  onClick,
  success,
  primary,
  secondary,
  warning,
  danger,
  successButton,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          successButton === "true" && `bg-green-500 text-white hover:bg-green-600 px-4 transition duration-300 ease-in-out`,
          success === "true" && `bg-green-500 rounded-full p-2 text-white hover:bg-green-600 transition duration-300 ease-in-out`,
          primary === "true" && `bg-purple-700 rounded-full p-2 text-white`,
          warning === "true" && `bg-yellow-500 rounded-full p-2 text-white hover:bg-yellow-600 transition duration-300 ease-in-out`,
          danger === "true" && `bg-red-500 rounded-full p-2 text-white hover:bg-red-600 transition duration-300 ease-in-out`,
          secondary && `bg-gray-300 text-black`,
          `px-2 text-white rounded-2xl`
        )}
      >
        {text}
      </button>
    </>
  );
};



export default Button;
