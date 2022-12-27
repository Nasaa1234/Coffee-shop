/* eslint-disable react/react-in-jsx-scope */
import {createContext, useContext, useEffect, useState} from 'react';
import {instance} from '../utils/axios';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    modalVisible && setTimeout(() => setModalVisible(false), 2000);
  }, [modalVisible]);

  const LoginWithPassword = (username, password) => {
    instance
      .post('Login', {
        username,
        password,
      })
      .then(el => {
        setUser(el.data.message);
        setModalVisible(true);
      });
  };

  return (
    <AuthContext.Provider value={{LoginWithPassword, user, modalVisible}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
