import React from "react";

interface ButtonProps {
  style?: string;
  text: string;
}

export const Button = ({text, style}: ButtonProps) => {
  return (
    <button className={`${style}`}>
      <span>{text}</span>
    </button>
  );
};
