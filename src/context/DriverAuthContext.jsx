import React, { createContext, useState } from 'react';

// Context to manage driver authentication and profile data
export const DriverAuthContext = createContext();

export const DriverAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock login – accepts any non‑empty credentials
  const login = (username, password) => {
    if (username && password) {
      const profile = { username, name: `Driver ${username}` };
      setUser(profile);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const updateProfile = (updates) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : prev));
  };

  return (
    <DriverAuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </DriverAuthContext.Provider>
  );
};
