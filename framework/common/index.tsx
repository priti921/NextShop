import { ReactNode, createContext, useContext } from "react";
import { ApiConfig } from "./types/api";

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
  config: ApiConfig | { testValue: string };
}

export const ApiContext = createContext({});

export const ApiProvider = ({ children, config }: ApiProviderProps) => {
  return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>;
};

export const useApiProvider = () => {
  const context = useContext(ApiContext);
  return context;
};
