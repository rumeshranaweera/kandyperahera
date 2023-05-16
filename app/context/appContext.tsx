"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);

const Appcontext = ({ children }: { children: ReactNode }) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const historyModelRef = useRef<HTMLDivElement>(null);

  return (
    <GlobalContext.Provider
      value={{ isHistoryOpen, setIsHistoryOpen, historyModelRef }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Appcontext;
