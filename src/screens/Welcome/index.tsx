import { useTranslation } from "react-i18next";

const WelcomeScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome.intro")}</h1>
    </>
  );
};

export default WelcomeScreen;
