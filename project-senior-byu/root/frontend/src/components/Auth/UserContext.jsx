import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [upload, setUpload] = useState();
  const [imageCount, setImageCount] = useState(0); // Add imageCount state

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin, imageCount, setImageCount }}>
      {children}
    </UserContext.Provider>
  );
};