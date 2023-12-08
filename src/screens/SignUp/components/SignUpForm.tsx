import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { SIGN_UP_INPUT_FIELDS } from "@/constants/auth";

const SignUpForm = () => {
  const { t } = useTranslation();
  const { control } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  return (
    <form className="mt-[34px]">
      {SIGN_UP_INPUT_FIELDS.map((field) => (
        <Controller
          control={control}
          name={field.name}
          render={({ field: { onChange } }) => (
            <Input
              label={t(field.label)}
              placeholder={t(field.placeholder)}
              onChange={onChange}
              type={field.type}
            />
          )}
        />
      ))}
      <Button text={t("signUp.buttonTitle")} type="submit" />
    </form>
  );
};

export default SignUpForm;
