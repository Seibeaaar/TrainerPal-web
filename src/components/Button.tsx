import React from "react";

interface IButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, text }) => (
  <button
    onClick={onClick}
    className="w-full border-2 border-primary bg-primary hover:bg-white hover:text-primary transition-all outline-none rounded-[99px]"
  >
    <p className="text-white py-[18px] w-full h-full hover:text-primary text-base">
      {text}
    </p>
  </button>
);

export default Button;
