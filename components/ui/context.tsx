import { createContext, FC, useContext, useState } from "react";

//creating context with a default state
const UIcontext = createContext<{ [key: string]: any }>({
  uiState: "defaultValue",
});

//creating provider component to wrap it around layout for central state management && also added state value
export const UIprovider: FC<{ children: any }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const uiState = {
    isSidebarOpen,
    setSidebarOpen,
  };

  return <UIcontext.Provider value={uiState}>{children}</UIcontext.Provider>;
};

//using the context state
export const useUI = () => {
  const context = useContext(UIcontext);
  return context;
};
