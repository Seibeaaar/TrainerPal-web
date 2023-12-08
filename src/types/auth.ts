import { HTMLInputTypeAttribute } from "react";

export type SignUpFieldName = "email" | "password";

export type SignUpInputField = {
  name: SignUpFieldName;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
};

export type SignUpRequest = {
  email: string;
  password: string;
};
