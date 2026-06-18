// src/api/mockAIPredictionApi.js
// Mock AI Prediction API for delay and ETA predictions.
// This placeholder uses simple heuristics; replace with real ML model in production.

/**
 * Predict delay (minutes) based on traffic, weather, and historical average delay.
 * @param {Object} params
 * @param {number} params.trafficLevel - 0 (low) to 10 (high) traffic intensity.
 * @param {number} params.weatherSeverity - 0 (clear) to 10 (severe) weather impact.
 * @param {number} params.historicalAvgDelay - average delay from past trips (minutes).
 * @returns {number} Predicted delay in minutes.
 */
export function predictDelay({ trafficLevel = 0, weatherSeverity = 0, historicalAvgDelay = 0 }) {
  const trafficFactor = trafficLevel * 0.8; // weight traffic
  const weatherFactor = weatherSeverity * 0.5; // weight weather
  const base = historicalAvgDelay || 2; // fallback base delay
  const prediction = Math.max(0, base + trafficFactor + weatherFactor);
  return Math.round(prediction);
}

/**
 * Predict ETA (minutes) for a bus on a specific route.
 * @param {Object} params
 * @param {string} params.routeId - Identifier of the route.
 * @param {number} params.currentProgress - Completed percentage of the route (0‑100).
 * @param {number} params.averageRouteTime - Historical average total time for the route (minutes).
 * @param {Object} params.aiFactors - Object containing trafficLevel, weatherSeverity, historicalAvgDelay.
 * @returns {number} Estimated time of arrival in minutes from now.
 */
export function predictETA({ routeId, currentProgress = 0, averageRouteTime = 30, aiFactors }) {
  const remainingPercent = Math.max(0, 100 - currentProgress) / 100;
  const remainingBase = averageRouteTime * remainingPercent;
  const delay = predictDelay(aiFactors);
  const eta = remainingBase + delay;
  return Math.round(eta);
}

/**
 * Utility to generate random mock factors for testing/demo purposes.
 * @returns {{trafficLevel:number, weatherSeverity:number, historicalAvgDelay:number}}
 */
export function generateMockFactors() {
  return {
    trafficLevel: Math.floor(Math.random() * 11), // 0‑10
    weatherSeverity: Math.floor(Math.random() * 11), // 0‑10
    historicalAvgDelay: Math.floor(Math.random() * 5) + 1, // 1‑5 minutes
  };
}
