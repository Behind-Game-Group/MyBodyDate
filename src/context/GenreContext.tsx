import {createContext, useContext, useState, ReactNode} from 'react';
import {GenreType} from '../../types/GenreTypes';

type GenreContextType = {
  genre: GenreType | undefined;
  setGenre: (user: GenreType | undefined) => void;
};

const GenreContext = createContext<GenreContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const GenreContextProvider = ({children}: UserProviderProps) => {
  const [genre, setGenre] = useState<GenreType>();

  return (
    <GenreContext.Provider value={{genre, setGenre}}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenreContext = () => {
  const context = useContext(GenreContext);
  if (context === undefined) {
    throw new Error(
      'useGenreContext must be used within a GenreContextProvider',
    );
  }
  return context;
};
