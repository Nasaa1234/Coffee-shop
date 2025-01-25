import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from 'react';
import type {Dispatch, SetStateAction} from 'react';
import {ClearToken, myToken} from '../utils';

interface AuthContextInterface {
  user?: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface,
);
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<string | null>(' ');
  useEffect(() => {
    myToken(setUser);
    if (user === null) {
      ClearToken();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => useContext(AuthContext);
