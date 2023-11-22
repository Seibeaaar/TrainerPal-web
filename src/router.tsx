import { createBrowserRouter } from "react-router-dom";

import WelcomeScreen from "./screens/Welcome";
import OnboardingScreen from "./screens/Onboarding";

export default createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
  },
  {
    path: "/onboarding",
    element: <OnboardingScreen />,
  },
]);
