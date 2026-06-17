// Mock driver data and CRUD operations for admin features
let drivers = [];

export function getDrivers() {
  return Promise.resolve([...drivers]);
}

export function addDriver(driver) {
  const id = Date.now().toString();
  const newDriver = { id, assignedBusId: null, ...driver };
  drivers.push(newDriver);
  return Promise.resolve(newDriver);
}

export function updateDriver(id, updates) {
  const index = drivers.findIndex(d => d.id === id);
  if (index === -1) return Promise.reject(new Error('Driver not found'));
  drivers[index] = { ...drivers[index], ...updates };
  return Promise.resolve(drivers[index]);
}

export function deleteDriver(id) {
  const index = drivers.findIndex(d => d.id === id);
  if (index === -1) return Promise.reject(new Error('Driver not found'));
  const [removed] = drivers.splice(index, 1);
  return Promise.resolve(removed);
}

export function assignBusToDriver(driverId, busId) {
  return updateDriver(driverId, { assignedBusId: busId });
}
