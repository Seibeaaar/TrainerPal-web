import { RouterProvider } from "react-router-dom";

import AppearanceWrapper from "./customization/appearance";
import ScreenContainer from "./components/ScreenContainer";
import router from "./router";

const App = () => (
  <AppearanceWrapper>
    <ScreenContainer>
      <RouterProvider router={router} />
    </ScreenContainer>
  </AppearanceWrapper>
);

export default App;
