// src/api/mockAnalyticsApi.js

// Synthetic analytics data generators
export const getDailyReport = async () => {
  const today = new Date();
  const data = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    data.push({ date: d.toISOString().split('T')[0], trips: Math.floor(Math.random() * 50) + 10 });
  }
  return data;
};

export const getMonthlyReport = async () => {
  const now = new Date();
  const data = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    data.push({ month: d.toLocaleString('default', { month: 'short', year: 'numeric' }), trips: Math.floor(Math.random() * 1500) + 300 });
  }
  return data;
};

export const getPassengerStats = async () => {
  // Returns a distribution of passenger counts per trip range
  return Array.from({ length: 10 }, (_, i) => ({
    range: `${i * 10}-${(i + 1) * 10 - 1}`,
    trips: Math.floor(Math.random() * 20) + 5
  }));
};

export const getRoutePerformance = async () => {
  // Mock performance metrics per route
  return [
    { routeId: 'R1', avgSpeed: (Math.random() * 30 + 20).toFixed(1), onTimePct: Math.floor(Math.random() * 20) + 80 },
    { routeId: 'R2', avgSpeed: (Math.random() * 30 + 20).toFixed(1), onTimePct: Math.floor(Math.random() * 20) + 80 },
    { routeId: 'R3', avgSpeed: (Math.random() * 30 + 20).toFixed(1), onTimePct: Math.floor(Math.random() * 20) + 80 }
  ];
};
