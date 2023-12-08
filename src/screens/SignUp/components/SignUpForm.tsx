import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/schemas/auth";
import { SignUpRequest } from "@/types/auth";
import Input from "@/components/Input";
import Button from "@/components/Button";
import PasswordTip from "./PasswordTip";

const SignUpForm = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SignUpSchema),
  });

  const onSignUp = (data: SignUpRequest) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSignUp)} className="mt-[34px]">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <Input
            label={t("signUp.fields.email.label")}
            placeholder={t("signUp.fields.email.placeholder")}
            onChange={onChange}
            type="email"
            errorMessage={t(errors.email?.message || "")}
          />
        )}
      />
      <div className="flex items-center gap-[8px]">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              label={t("signUp.fields.password.label")}
              placeholder={t("signUp.fields.password.placeholder")}
              onChange={onChange}
              type="password"
              errorMessage={t(errors.password?.message || "")}
            />
          )}
        />
        <PasswordTip />
      </div>
      <Button text={t("signUp.buttonTitle")} type="submit" />
    </form>
  );
};

export default SignUpForm;
