import { createContext, FC, useContext, useState } from "react";

//defining types for context state and modifiers
export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}
//combining both types
type State = StateValues & StateModifiers;
//creating functions for state modifiers && initial state
const stateModifiers = { openSidebar: () => {}, closeSidebar: () => {} };
const initialState = { isSidebarOpen: false };

//creating context
const UIcontext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

//creating provider component to wrap it around layout for central state management && also added state value
export const UIprovider: FC<{ children: any }> = ({ children }) => {
  const openSidebar = () => alert("opening sidebar");
  const closeSidebar = () => alert("closing sidebar");

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: true,
  };

  return <UIcontext.Provider value={value}>{children}</UIcontext.Provider>;
};

//using the context state
export const useUI = () => {
  const context = useContext(UIcontext);
  return context;
};
