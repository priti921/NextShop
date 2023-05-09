//instanciation of coreApiProvider to be used in productView
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider,
} from "@common";
import { getConfig } from "./api/config";
import { ReactNode } from "react";

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[];
}

const config = getConfig();

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return (
    <CoreApiProvider config={{ ...config, testValue: "testValue" }}>
      {children}
    </CoreApiProvider>
  );
};

export const useApiProvider = () => useCoreApiProvider();
