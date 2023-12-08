import { FC, ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: FC<IButtonProps> = (props) => (
  <button
    {...props}
    className="w-full border-2 border-primary bg-primary hover:bg-white text-white hover:text-primary transition-all outline-none rounded-[99px]"
  >
    <p className="py-[18px] w-full h-full text-inherit text-base">
      {props.text}
    </p>
  </button>
);

export default Button;
