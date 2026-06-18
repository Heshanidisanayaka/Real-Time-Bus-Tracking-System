// Mock Weather API
// Provides weather alerts (rain, flood, road closures) and simple weather info.

/**
 * Get current weather alerts relevant to bus operations.
 * Returns an array of objects: {type: 'rain'|'flood'|'road_closure', description: string}
 */
export function getWeatherAlerts() {
  // Static mock alerts; replace with real API integration later.
  return [
    { type: 'rain', description: 'Heavy rain expected in downtown area.' },
    { type: 'road_closure', description: 'Road closure on 5th Avenue due to construction.' },
    { type: 'flood', description: 'Potential flooding near River Bridge after storms.' },
  ];
}

/**
 * Get simple weather information for a specific location.
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {{temperature:number, condition:string}}
 */
export function getWeatherForLocation(lat, lon) {
  // Mock weather data based on coordinates (very simplified).
  const isRainyArea = lat > 0 && lon > 0; // dummy condition
  return {
    temperature: isRainyArea ? 22 : 28,
    condition: isRainyArea ? 'Rain' : 'Clear',
  };
}
