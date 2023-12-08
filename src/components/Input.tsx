import { InputHTMLAttributes, FC } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<IInputProps> = (props) => {
  return (
    <div className="w-full mb-[15px]">
      <p className="text-sm font-medium">{props.label}</p>
      <div className="py-[10px] px-[12px] border-grayTertiary border rounded-xl">
        <input {...props} className="w-full outline-none border-none" />
      </div>
    </div>
  );
};

export default Input;
