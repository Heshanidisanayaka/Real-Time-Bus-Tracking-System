// mockOverSpeedApi.js
// Mock API for over-speed detection, alerts, and violation reports.

/**
 * Simulate getting the current speed of a bus (km/h).
 * @param {string} busId
 * @returns {Promise<number>} speed in km/h
 */
export async function getCurrentSpeed(busId) {
  // Random speed between 30 and 80 km/h for demo purposes.
  const speed = Math.floor(Math.random() * 50) + 30;
  return speed;
}

/**
 * Check if the given speed exceeds the speed limit.
 * @param {string} busId
 * @param {number} speedLimit - speed limit in km/h
 * @returns {Promise<{violation: boolean, speed: number, limit: number, timestamp: number}>}
 */
export async function checkSpeedViolation(busId, speedLimit) {
  const speed = await getCurrentSpeed(busId);
  const violation = speed > speedLimit;
  return { violation, speed, limit: speedLimit, timestamp: Date.now() };
}

/**
 * Generate a mock list of recent violations.
 * @returns {Promise<Array<{busId:string, speed:number, limit:number, timestamp:number}>>}
 */
export async function generateViolationReport() {
  // Create 5 mock violations.
  const reports = [];
  for (let i = 0; i < 5; i++) {
    const busId = `bus-${i + 1}`;
    const speed = Math.floor(Math.random() * 40) + 50; // 50-90 km/h
    const limit = 60;
    reports.push({ busId, speed, limit, timestamp: Date.now() - i * 60000 });
  }
  return reports;
}
