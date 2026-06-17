// src/api/mockLocationApi.js

// Mock API for sending driver location updates
export const sendLocationUpdate = async ({ driverId, busId, latitude, longitude, timestamp }) => {
  // In a real implementation this would POST to a server endpoint.
  // For the demo we just log the payload.
  console.log('Location update sent:', {
    driverId,
    busId,
    latitude,
    longitude,
    timestamp,
  });
  // Simulate async behavior
  return Promise.resolve({ success: true });
};
