//instanciation of coreApiProvider to be used in productView
import { ReactNode } from "react";
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider,
} from "@common";
import { getConfig } from "./api/config";
import { shopifyHooks } from "./hooks";

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[];
}

const config = getConfig();
console.log(config);

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return (
    <CoreApiProvider config={{ ...config }} hooks={shopifyHooks}>
      {children}
    </CoreApiProvider>
  );
};

export const useApiProvider = () => useCoreApiProvider();
