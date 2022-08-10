import { createContext } from 'react';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  return (
    <UserContext.Provider value={{ usuario: 'Lucas' }}>
      {children}
    </UserContext.Provider>
  );
};
