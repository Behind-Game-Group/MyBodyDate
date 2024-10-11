import {createContext, useContext, useState, ReactNode} from 'react';

type CercleContextType = {
  cercle: string;
  setCercle: (name: string) => void;
  tabPath: string;
  setTabPath: (name: string) => void;
};

const CercleContext = createContext<CercleContextType | undefined>(undefined);

type CercleProviderProps = {
  children: ReactNode;
};

export const CercleContextProvider = ({children}: CercleProviderProps) => {
  const [cercle, setCercle] = useState<string>('Amour');
  const [tabPath, setTabPath] = useState<string>('Discover');

  return (
    <CercleContext.Provider value={{cercle, setCercle, tabPath, setTabPath}}>
      {children}
    </CercleContext.Provider>
  );
};

export const useCercleContext = () => {
  const context = useContext(CercleContext);
  if (context === undefined) {
    throw new Error(
      'useCercleContext must be used within a CercleContextProvider',
    );
  }
  return context;
};
