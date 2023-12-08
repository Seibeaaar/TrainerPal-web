import { HTMLInputTypeAttribute } from "react";

export type SignUpFieldName = "email" | "password" | "firstName" | "lastName";

export type SignUpInputField = {
  name: SignUpFieldName;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
};
