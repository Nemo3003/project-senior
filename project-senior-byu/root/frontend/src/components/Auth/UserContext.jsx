import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const updateUserAdminStatus = (isAdmin) => {
    setIsAdmin(isAdmin);
  };

  return (
    <UserContext.Provider value={{ isAdmin: isAdmin || false, updateUserAdminStatus }}>
      {children}
    </UserContext.Provider>
  );
};
