import {createContext, useContext, useState, ReactNode} from 'react';

type UserContextType = {
  user: string;
  setUser: (name: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({children}: UserProviderProps) => {
  const [user, setUser] = useState<string>('');

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};
