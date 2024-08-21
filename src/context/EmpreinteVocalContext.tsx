import {createContext, useContext, useState, ReactNode} from 'react';

type EmpreinteVocalContextType = {
  empreinteVocal: string | undefined;
  setEmpreinteVocal: (user: string | undefined) => void;
};

const EmpreinteVocalContext = createContext<
  EmpreinteVocalContextType | undefined
>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const EmpreinteVocalContextProvider = ({
  children,
}: UserProviderProps) => {
  const [empreinteVocal, setEmpreinteVocal] = useState<string>();

  return (
    <EmpreinteVocalContext.Provider value={{empreinteVocal, setEmpreinteVocal}}>
      {children}
    </EmpreinteVocalContext.Provider>
  );
};

export const useEmpreinteVocalContext = () => {
  const context = useContext(EmpreinteVocalContext);
  if (context === undefined) {
    throw new Error(
      'useEmpreinteVocalContext must be used within a EmpreinteVocalContextProvider',
    );
  }
  return context;
};
