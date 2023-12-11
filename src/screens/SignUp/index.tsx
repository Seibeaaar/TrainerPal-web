import ScreenContainer from "@/components/ScreenContainer";
import { useTranslation } from "react-i18next";
import GymImage from "@/assets/images/Gym.webp";
import SignUpForm from "./components/SignUpForm";

const SignUpScreen = () => {
  const { t } = useTranslation();
  return (
    <ScreenContainer>
      <div className="w-full h-full flex items-center">
        <section className="flex-grow flex flex-col items-center justify-center">
          <div className="w-1/2 max-md:w-full max-md:px-[24px] max-lg:w-2/3">
            <h1 className="font-bold text-center text-4xl">
              {t("signUp.title")}
            </h1>
            <p className="font-thin text-center text-base">
              {t("signUp.subtitle")}
            </p>
            <SignUpForm />
          </div>
        </section>
        <img
          alt="Gym picture"
          src={GymImage}
          className="w-1/2 h-full max-xl:hidden"
        />
      </div>
    </ScreenContainer>
  );
};

export default SignUpScreen;
