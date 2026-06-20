// Mock Fuel Monitoring API
// Provides fuel usage reports and fuel efficiency tracking for buses.

export const getFuelUsageReport = (busId) => {
  // Simulated fuel usage data (liters per 100km)
  const usageData = {
    'bus-001': { date: '2026-06-15', fuelUsedLiters: 120, distanceKm: 350 },
    'bus-002': { date: '2026-06-15', fuelUsedLiters: 95, distanceKm: 280 },
    'bus-003': { date: '2026-06-15', fuelUsedLiters: 110, distanceKm: 330 },
  };
  return usageData[busId] || null;
};

export const getFuelEfficiency = (busId) => {
  const report = getFuelUsageReport(busId);
  if (!report) return null;
  // Fuel efficiency = distance / fuel used (km per liter)
  const efficiency = report.distanceKm / report.fuelUsedLiters;
  return { busId, efficiency: Number(efficiency.toFixed(2)) };
};
