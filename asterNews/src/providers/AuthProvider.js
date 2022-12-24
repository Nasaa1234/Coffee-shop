/* eslint-disable react/react-in-jsx-scope */
import {createContext, useContext, useState, useEffect} from 'react';
import {instance} from '../utils/axios';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const Login = (username, password) => {
    instance
      .post('Login', {
        username,
        password,
      })
      .then(el => console.log('success', el));
  };

  return (
    <AuthContext.Provider value={{Login}}>{children}</AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
