// src/api/mockStopApi.js

let stops = [];
let stopRouteMap = {};

export const addStop = async (stop) => {
  const id = Date.now();
  const newStop = { id, ...stop };
  stops.push(newStop);
  return newStop;
};

export const editStop = async (id, updates) => {
  const index = stops.findIndex((s) => s.id === id);
  if (index === -1) throw new Error('Stop not found');
  stops[index] = { ...stops[index], ...updates };
  return stops[index];
};

export const deleteStop = async (id) => {
  stops = stops.filter((s) => s.id !== id);
  delete stopRouteMap[id];
  return true;
};

export const getStops = async () => stops;

export const mapStopToRoute = async (stopId, routeId) => {
  stopRouteMap[stopId] = routeId;
  return { stopId, routeId };
};

export const getStopRouteMap = async () => stopRouteMap;
