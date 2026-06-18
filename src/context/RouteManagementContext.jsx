// src/context/RouteManagementContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getRoutes, addRoute, updateRoute, deleteRoute, setRouteStops } from '../api/mockRouteApi';

export const RouteManagementContext = createContext();

export const RouteManagementProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    loadRoutes();
  }, []);

  const loadRoutes = async () => {
    const data = await getRoutes();
    setRoutes(data);
  };

  const createRoute = async (route) => {
    const newRoute = await addRoute(route);
    setRoutes((prev) => [...prev, newRoute]);
  };

  const editRoute = async (id, updates) => {
    const updated = await updateRoute(id, updates);
    setRoutes((prev) => prev.map((r) => (r.id === id ? updated : r)));
  };

  const removeRoute = async (id) => {
    await deleteRoute(id);
    setRoutes((prev) => prev.filter((r) => r.id !== id));
  };

  const assignStops = async (routeId, stopIds) => {
    const updated = await setRouteStops(routeId, stopIds);
    setRoutes((prev) => prev.map((r) => (r.id === routeId ? updated : r)));
  };

  return (
    <RouteManagementContext.Provider
      value={{ routes, loadRoutes, createRoute, editRoute, removeRoute, assignStops }}
    >
      {children}
    </RouteManagementContext.Provider>
  );
};
