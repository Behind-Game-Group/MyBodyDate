import {createContext, useContext, useState, ReactNode} from 'react';

type DateOfBirthContextType = {
  dateOfBirth: string | undefined;
  setDateOfBirth: (dateOfBirth: string | undefined) => void;
  age: number | undefined;
  setAge: (age: number | undefined) => void;
};

const DateOfBirthContext = createContext<DateOfBirthContextType | undefined>(
  undefined,
);

type UserProviderProps = {
  children: ReactNode;
};

export const DateOfBirthContextProvider = ({children}: UserProviderProps) => {
  const [dateOfBirth, setDateOfBirth] = useState<string>();
  const [age, setAge] = useState<number>();

  return (
    <DateOfBirthContext.Provider
      value={{dateOfBirth, setDateOfBirth, age, setAge}}>
      {children}
    </DateOfBirthContext.Provider>
  );
};

export const useDateOfBirthContext = () => {
  const context = useContext(DateOfBirthContext);
  if (context === undefined) {
    throw new Error(
      'useDateOfBirthContext must be used within a DateOfBirthContextProvider',
    );
  }
  return context;
};
