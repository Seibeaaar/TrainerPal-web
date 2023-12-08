import { InputHTMLAttributes, FC } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage: string;
}

const Input: FC<IInputProps> = (props) => {
  return (
    <div className="w-full mb-[15px]">
      <p className="text-sm font-medium">{props.label}</p>
      <div
        className={`py-[10px] px-[12px] border ${
          props.errorMessage ? "border-red-500" : "border-greyTertiary"
        } rounded-xl`}
      >
        <input {...props} className="w-full outline-none border-none" />
      </div>
      <p className="text-sm text-red-500 font-medium">{props.errorMessage}</p>
    </div>
  );
};

export default Input;
