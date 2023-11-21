import { createBrowserRouter } from "react-router-dom";

import WelcomeScreen from "./screens/Welcome";

export default createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
  },
]);
