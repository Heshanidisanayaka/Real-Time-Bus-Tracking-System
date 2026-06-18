// Mock Traffic API
// Provides traffic congestion data and alternative route suggestions

export function getTrafficCongestion(routeId) {
  // Simulated data: congestion level (0-100) and description
  const congestionLevels = {
    'route-1': { level: 70, description: 'Heavy traffic on Main St.' },
    'route-2': { level: 30, description: 'Light traffic on Oak Ave.' },
    'route-3': { level: 50, description: 'Moderate traffic near River Rd.' },
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(congestionLevels[routeId] || { level: 20, description: 'Low traffic' });
    }, 200); // simulate async latency
  });
}

export function getAlternativeRoutes(routeId) {
  // Simulated alternative routes data
  const alternatives = {
    'route-1': [
      { id: 'alt-1', path: ['Stop A', 'Stop C', 'Stop D'], estimatedTime: 12 },
      { id: 'alt-2', path: ['Stop A', 'Stop E', 'Stop D'], estimatedTime: 14 },
    ],
    'route-2': [
      { id: 'alt-3', path: ['Stop B', 'Stop F', 'Stop G'], estimatedTime: 9 },
    ],
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(alternatives[routeId] || []);
    }, 200);
  });
}
