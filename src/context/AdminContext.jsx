import React, { createContext, useState, useEffect } from 'react';

// Simple admin authentication context (mock)
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const stored = localStorage.getItem('adminProfile');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, password) => {
    // Mock check – in real app verify against backend
    if (username && password) {
      const profile = { username, role: 'admin', token: 'admin-mock-token' };
      setAdmin(profile);
      localStorage.setItem('adminProfile', JSON.stringify(profile));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('adminProfile');
  };

  // Protect admin routes – simple helper
  const isAdmin = !!admin;

  return (
    <AdminContext.Provider value={{ admin, login, logout, isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
