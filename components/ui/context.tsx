import { createContext, FC, useContext, useMemo, useReducer } from "react";

// -- DEFINING TYPES --
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
//action types for reducer
type Action = { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" };

//-- DEFINING CONTEXT && REDUCER --
//creating functions for state modifiers && initial state
const stateModifiers = { openSidebar: () => {}, closeSidebar: () => {} };
const initialState = { isSidebarOpen: false };

//creating context
const UIcontext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

//creating reducer
const uiReducer = (state: StateValues, action: Action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        isSidebarOpen: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        isSidebarOpen: false,
      };
    }
  }
};

//creating provider component to wrap it around layout for central state management && also added state value
export const UIprovider: FC<{ children: any }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const value = useMemo(() => {
    return {
      ...state,
      openSidebar,
      closeSidebar,
    };
  }, [state.isSidebarOpen]);

  return <UIcontext.Provider value={value}>{children}</UIcontext.Provider>;
};

//using the context state
export const useUI = () => {
  const context = useContext(UIcontext);
  return context;
};
