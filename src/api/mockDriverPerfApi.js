// Mock Driver Performance Analysis API
// Provides speed monitoring, route adherence, and trip completion rate data.

/**
 * Get speed records for a driver over a time range.
 * Returns an array of { timestamp: number, speedKmh: number }.
 */
export function getSpeedRecords(driverId) {
  // Generate mock data: 20 records spaced 5 minutes apart.
  const records = [];
  const now = Date.now();
  for (let i = 0; i < 20; i++) {
    records.push({
      timestamp: now - i * 5 * 60 * 1000,
      speedKmh: Math.round(Math.random() * 30 + 30), // 30-60 km/h
    });
  }
  return records;
}

/**
 * Get route adherence percentage for a driver on a specific route.
 * Returns a number between 0 and 100.
 */
export function getRouteAdherence(driverId, routeId) {
  // Mock adherence based on random value.
  return Math.round(Math.random() * 20 + 80); // 80-100%
}

/**
 * Get trip completion rate for a driver over a period.
 * Returns a ratio (completed / assigned) as a percentage.
 */
export function getTripCompletionRate(driverId) {
  const assigned = Math.floor(Math.random() * 5 + 5); // 5-9 assigned trips
  const completed = Math.floor(Math.random() * assigned);
  return Math.round((completed / assigned) * 100);
}
