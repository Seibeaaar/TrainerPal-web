import { useTranslation } from "react-i18next";
import ScreenContainer from "../../components/ScreenContainer";
import OnboardingSteps from "./components/Steps";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { ONBOARDING_STEPS } from "@/constants/onboarding";
import Button from "@/components/Button";

const OnboardingScreen = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const { image, step } = ONBOARDING_STEPS[currentStep - 1];

  const isLastStep = currentStep === ONBOARDING_STEPS.length;

  const onButtonClick = () => {
    if (isLastStep) {
      navigate("/signUp");
      localStorage.setItem("isOnboarded", "true");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const buttonText = t(`onboarding.${isLastStep ? "finish" : "next"}`);

  return (
    <ScreenContainer>
      <section className="flex flex-col flex-grow pb-[24px] px-[48px]">
        <OnboardingSteps currentStep={currentStep} />
        <article className="flex flex-col flex-grow">
          <div className="flex-grow flex-col items-center flex justify-between my-[30px]">
            <h2 className="font-bold text-3xl text-center">
              {t(`onboarding.${step}.title`)}
            </h2>
            <img className="w-[400px] h-[350px]" alt={`${step}`} src={image} />
            <p className="text-xl font-thin text-center">
              {t(`onboarding.${step}.text`)}
            </p>
          </div>
          <div className="mx-auto w-1/3 max-md:w-full max-md:px-[24px] max-lg:w-2/3">
            <Button onClick={onButtonClick} text={buttonText} />
          </div>
        </article>
      </section>
    </ScreenContainer>
  );
};

export default OnboardingScreen;
