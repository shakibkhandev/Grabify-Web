// GlobalContextProvider.tsx

"use client";
import "@mantine/core/styles.css";
import React from "react";

import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

interface GlobalProviderProps {
  children?: React.ReactNode;
}

interface GlobalContextProps {
  sayHello: () => any;
}

const GlobalContext = React.createContext<GlobalContextProps | null>(null);

export const useGlobalContext = () => {
  const state = React.useContext(GlobalContext);
  if (!state) throw new Error("State Is Undefined");

  return state;
};

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
  children,
}) => {
  const sayHello: GlobalContextProps["sayHello"] = React.useCallback(() => {
    console.log("Context API Working ?");
  }, []);
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <GlobalContext.Provider value={{ sayHello }}>
        {children}
      </GlobalContext.Provider>
    </MantineProvider>
  );
};
