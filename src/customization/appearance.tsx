import React, { useState, useEffect, createContext, useCallback } from "react";
import { Appearance } from "../types/customization";

interface IAppearanceCtxProps {
  children: React.ReactNode;
}

/* eslint-disable @typescript-eslint/no-unused-vars */

export const AppearanceContext = createContext({
  appearance: "light",
  setAppearance: (_appearance: Appearance) => {},
});

const AppearanceWrapper: React.FC<IAppearanceCtxProps> = ({ children }) => {
  const [preferredAppearance, setPreferredAppearance] =
    useState<Appearance>("light");

  useEffect(() => {
    const storedAppearanceValue = localStorage.getItem("appearance");
    if (storedAppearanceValue) {
      setPreferredAppearance(storedAppearanceValue as Appearance);
    } else {
      const darkThemeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );
      // Get initial media query value
      if (darkThemeMediaQuery.matches) {
        setPreferredAppearance("dark");
      }
      // Listen for any changes in preferences
      const mediaQueryListener = (e: MediaQueryListEvent) => {
        setPreferredAppearance(e.matches ? "dark" : "light");
      };
      darkThemeMediaQuery.addEventListener("change", mediaQueryListener);
      return () =>
        darkThemeMediaQuery.removeEventListener("change", mediaQueryListener);
    }
  }, []);

  const selectPreferredAppearance = useCallback((appearance: Appearance) => {
    setPreferredAppearance(appearance);
    localStorage.setItem("appearance", appearance);
  }, []);

  return (
    <AppearanceContext.Provider
      value={{
        appearance: preferredAppearance,
        setAppearance: selectPreferredAppearance,
      }}
    >
      {children}
    </AppearanceContext.Provider>
  );
};

export default AppearanceWrapper;
