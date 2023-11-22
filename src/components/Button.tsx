import React from "react";

interface IButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, text }) => (
  <button
    onClick={onClick}
    className="w-full bg-primary hover:bg-primaryDark transition-all outline-none py-[18px] rounded-[99px]"
  >
    <p className="text-white text-base">{text}</p>
  </button>
);

export default Button;
