import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { fileReducer, initialState, State, Action } from "../reducers/fileReducer";

type FileContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(fileReducer, initialState);

  return (
    <FileContext.Provider value={{ state, dispatch }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};
