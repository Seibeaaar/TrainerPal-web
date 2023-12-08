import { SignUpInputField } from "@/types/auth";

export const SIGN_UP_INPUT_FIELDS: SignUpInputField[] = [
  {
    name: "email",
    label: "signUp.fields.email.label",
    placeholder: "signUp.fields.email.placeholder",
    type: "email",
  },
  {
    name: "password",
    label: "signUp.fields.password.label",
    placeholder: "signUp.fields.password.placeholder",
    type: "password",
  },
];

export const PASSWORD_REQUIREMENTS_FIELDS = [
  "lowercase",
  "uppercase",
  "digit",
  "symbol",
];

export const NAME_INPUT_FIELDS = [
  {
    name: "firstName",
    label: "signUp.fields.firstName.label",
    placeholder: "signUp.fields.firstName.placeholder",
  },
  {
    name: "lastName",
    label: "signUp.fields.lastName.label",
    placeholder: "signUp.fields.lastName.placeholder",
  },
];
