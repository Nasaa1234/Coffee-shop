/* eslint-disable react/react-in-jsx-scope */
import {createContext, useContext, useState, useEffect} from 'react';
import {instance} from '../utils/axios';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const LoginWithPassword = (username, password) => {
    instance
      .post('Login', {
        username,
        password,
      })
      .then(el => setUser(el.data.message));
  };

  return (
    <AuthContext.Provider value={{LoginWithPassword, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
