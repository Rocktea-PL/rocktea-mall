// UserContext.js
import  { createContext, useContext, useState } from 'react';

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || 'dropshipper');

  const setRole = (newRole) => {
    localStorage.setItem('userRole', newRole);
    setUserRole(newRole);
  };

  return (
    <UserRoleContext.Provider value={{ userRole, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRoleContext = () => {
  return useContext(UserRoleContext);
};
