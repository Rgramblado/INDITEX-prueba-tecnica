import React,{ createContext, useContext } from "react";

type AppContextType = {
    isProduction: boolean;
}

const AppContext = createContext<AppContextType>({ isProduction: false });


const useAppContext = () => useContext(AppContext)


const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppContext.Provider value={{ isProduction: !!process.env.IS_PRODUCTION }}>
            {children}
        </AppContext.Provider>
    );
}

export { useAppContext, AppContextProvider };
