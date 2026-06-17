// src/context/DriverManagementContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getDrivers, addDriver, updateDriver, deleteDriver, assignBusToDriver } from '../api/mockDriverApi';

export const DriverManagementContext = createContext();

export const DriverManagementProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    loadDrivers();
  }, []);

  const loadDrivers = async () => {
    const data = await getDrivers();
    setDrivers(data);
  };

  const createDriver = async (driver) => {
    const newDriver = await addDriver(driver);
    setDrivers((prev) => [...prev, newDriver]);
  };

  const editDriver = async (id, updates) => {
    const updated = await updateDriver(id, updates);
    setDrivers((prev) => prev.map((d) => (d.id === id ? updated : d)));
  };

  const removeDriver = async (id) => {
    await deleteDriver(id);
    setDrivers((prev) => prev.filter((d) => d.id !== id));
  };

  const assignBus = async (driverId, busId) => {
    const updated = await assignBusToDriver(driverId, busId);
    setDrivers((prev) => prev.map((d) => (d.id === driverId ? updated : d)));
  };

  return (
    <DriverManagementContext.Provider
      value={{ drivers, createDriver, editDriver, removeDriver, assignBus, loadDrivers }}
    >
      {children}
    </DriverManagementContext.Provider>
  );
};
