import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const WelcomeScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="w-1/3 max-md:w-full max-md:px-[24px] max-lg:w-2/3 m-auto flex flex-col justify-center items-center h-full">
      <div className="text-center mb-[24px] animate-fadeTop">
        <h1 className="font-bold text-4xl mb-[12px]">{t("welcome.heading")}</h1>
        <h3 className="text-xl font-thin">{t("welcome.intro")}</h3>
      </div>
      <div className="animate-fadeBottom w-full">
        <Button
          text={t("welcome.start")}
          onClick={() => navigate("/onboarding")}
        />
      </div>
    </section>
  );
};

export default WelcomeScreen;
