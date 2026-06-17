// Mock route data and CRUD operations
let routes = [];

export function getRoutes() {
  return Promise.resolve([...routes]);
}

export function addRoute(route) {
  const id = Date.now().toString();
  const newRoute = { id, stops: [], ...route };
  routes.push(newRoute);
  return Promise.resolve(newRoute);
}

export function updateRoute(id, updates) {
  const index = routes.findIndex(r => r.id === id);
  if (index === -1) return Promise.reject(new Error('Route not found'));
  routes[index] = { ...routes[index], ...updates };
  return Promise.resolve(routes[index]);
}

export function deleteRoute(id) {
  const index = routes.findIndex(r => r.id === id);
  if (index === -1) return Promise.reject(new Error('Route not found'));
  const [removed] = routes.splice(index, 1);
  return Promise.resolve(removed);
}

export function setRouteStops(id, stopIds) {
  return updateRoute(id, { stops: stopIds });
}
