import React, { useMemo } from "react";
import { Steps } from "antd";
import { ONBOARDING_STEPS } from "@/constants/onboarding";
import { useTranslation } from "react-i18next";

interface IOnboardingStepsProps {
  currentStep: number;
}

const OnboardingSteps: React.FC<IOnboardingStepsProps> = ({ currentStep }) => {
  const { t } = useTranslation();
  const stepTitles = useMemo(
    () =>
      ONBOARDING_STEPS.map((s, i) => {
        let stepStatus;
        switch (true) {
          case currentStep > i + 1:
            stepStatus = "finish";
            break;
          case currentStep === i + 1:
            stepStatus = "process";
            break;
          default:
            stepStatus = "wait";
        }
        return {
          title: "",
          status: stepStatus,
        };
      }),
    [t, currentStep, ONBOARDING_STEPS],
  );

  return <Steps items={stepTitles} responsive={false} className="my-[24px]" />;
};

export default OnboardingSteps;
