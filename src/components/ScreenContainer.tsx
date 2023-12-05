import React from "react";

interface IScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer: React.FC<IScreenContainerProps> = ({ children }) => {
  return (
    <main className={`w-screen h-screen bg-background flex flex-col`}>
      {children}
    </main>
  );
};

export default ScreenContainer;
