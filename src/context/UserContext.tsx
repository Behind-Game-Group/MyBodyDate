import {createContext, useContext, useState, ReactNode} from 'react';
import {User} from '../../interfaces/UserInterface';

type UserContextType = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({children}: UserProviderProps) => {
  const [user, setUser] = useState<User>();

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
