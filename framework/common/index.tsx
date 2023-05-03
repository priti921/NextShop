import { getConfig } from "@framework/api/config";
import { ReactNode, createContext, useContext } from "react";

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
}

const config = getConfig();

export const ApiContext = createContext({});

export const ApiProvider = ({ children }: ApiProviderProps) => {
  return (
    <ApiContext.Provider value={{ ...config, testValue: "test" }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiProvider = () => {
  const context = useContext(ApiContext);
  return context;
};
