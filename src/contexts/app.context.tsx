import React, { createContext, useContext, useState } from "react";

type AppContextType = {
  isProduction: boolean;
  appLoading: boolean;
  setAppLoading: (appLoading: boolean) => void;
};

const AppContext = createContext<AppContextType>({
  isProduction: false,
  appLoading: false,
  setAppLoading: () => {},
});

const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [appLoading, setAppLoading] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{
        isProduction: !!process.env.IS_PRODUCTION,
        appLoading,
        setAppLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { useAppContext, AppContextProvider };
