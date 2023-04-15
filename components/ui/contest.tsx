import { createContext, FC, useContext } from "react";

//creating context with a default state
const UIcontext = createContext<{ [key: string]: string }>({
  uiState: "defaultValue",
});

//creating provider component to wrap it around layout for central state management && also added state value
export const UIprovider: FC<{ children: any }> = ({ children }) => {
  return (
    <UIcontext.Provider value={{ uiState: "someState" }}>
      {children}
    </UIcontext.Provider>
  );
};

//using the context state
export const useUI = () => {
  const context = useContext(UIcontext);
  return context;
};
