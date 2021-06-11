import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });
// we will use loading later

useEffect(() => {
    setAuth({ loading: false, data: JSON.parse(window.localStorage.getItem('authData'))});
  }, []);

  useEffect(() => {
    window.localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);

  const setAuthData = (data) => {
    setAuth({data: data});
  };
 // a function that will help us to add the user data in the auth;

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;