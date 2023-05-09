//core api context
import { ReactNode, createContext, useContext, useMemo } from "react";
import { ApiConfig, ApiHooks, ApiProviderContext } from "./types/api";

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
  config: ApiConfig;
  hooks: ApiHooks;
}

//context init
export const ApiContext = createContext<Partial<ApiProviderContext>>({});

//provider to wrap around
export const ApiProvider = ({ children, config, hooks }: ApiProviderProps) => {
  const coreConfig = useMemo(() => {
    return {
      fetcher: config,
      hooks,
    };
  }, [config, hooks]);

  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

//hook for accesing context
export const useApiProvider = () => {
  const context = useContext(ApiContext) as ApiProviderContext;
  return context;
};
