// src/api/mockBusApi.js

let buses = [];

export const loadBuses = () => {
  // In a real app this would fetch from a server.
  // Here we simply return the in‑memory array.
  return Promise.resolve([...buses]);
};

export const addBus = (bus) => {
  bus.id = Date.now(); // simple unique id
  buses.push(bus);
  return Promise.resolve(bus);
};

export const updateBus = (id, updates) => {
  const index = buses.findIndex((b) => b.id === id);
  if (index === -1) return Promise.reject(new Error('Bus not found'));
  buses[index] = { ...buses[index], ...updates };
  return Promise.resolve(buses[index]);
};

export const deleteBus = (id) => {
  const initialLength = buses.length;
  buses = buses.filter((b) => b.id !== id);
  return Promise.resolve(buses.length < initialLength);
};

export const getBusById = (id) => {
  const bus = buses.find((b) => b.id === id);
  return Promise.resolve(bus);
};

// Initialize with mockBuses if empty
import { mockBuses } from '../data/mockBuses';
if (buses.length === 0) {
  buses = [...mockBuses];
}
