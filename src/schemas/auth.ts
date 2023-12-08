import * as yup from "yup";
import { PASSWORD_REGEX } from "@/utils/regex";

export const SignUpSchema = yup.object({
  email: yup
    .string()
    .required("signUp.fields.email.required")
    .email("signUp.fields.email.error"),
  password: yup
    .string()
    .required("signUp.fields.password.required")
    .matches(PASSWORD_REGEX, "signUp.fields.password.error"),
});
