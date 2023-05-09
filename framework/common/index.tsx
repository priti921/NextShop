//core api context
import { ReactNode, createContext, useContext } from "react";
import { ApiConfig } from "./types/api";

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
  config: ApiConfig | { testValue: string };
}

//context init
export const ApiContext = createContext({});

//provider to wrap around
export const ApiProvider = ({ children, config }: ApiProviderProps) => {
  return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>;
};

//hook for accesing context
export const useApiProvider = () => {
  const context = useContext(ApiContext);
  return context;
};
