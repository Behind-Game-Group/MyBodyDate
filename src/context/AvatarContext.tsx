import {createContext, useContext, useState, ReactNode} from 'react';

type AvatarContextType = {
  avatar: string | undefined;
  setAvatar: (user: string | undefined) => void;
};

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const AvatarContextProvider = ({children}: UserProviderProps) => {
  const [avatar, setAvatar] = useState<string>();

  return (
    <AvatarContext.Provider value={{avatar, setAvatar}}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatarContext = () => {
  const context = useContext(AvatarContext);
  if (context === undefined) {
    throw new Error(
      'useAvatarContext must be used within a AvatarContextProvider',
    );
  }
  return context;
};
