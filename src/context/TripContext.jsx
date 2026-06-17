import React, { createContext, useState } from 'react';

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [activeTrip, setActiveTrip] = useState(null);
  const [tripLog, setTripLog] = useState([]);

  const startTrip = (route) => {
    const startTime = new Date();
    const trip = { route, startTime, endTime: null, passengerCount: 0 };
    setActiveTrip(trip);
    setTripLog((log) => [...log, trip]);
  };

  const endTrip = () => {
    if (!activeTrip) return;
    const endTime = new Date();
    const completedTrip = { ...activeTrip, endTime };
    setActiveTrip(null);
    setTripLog((log) =>
      log.map((t) => (t === activeTrip ? completedTrip : t))
    );
  };

  const updatePassengerCount = (count) => {
    if (activeTrip) {
      setActiveTrip((trip) => ({ ...trip, passengerCount: count }));
    }
  };

  return (
    <TripContext.Provider
      value={{ activeTrip, tripLog, startTrip, endTrip, updatePassengerCount }}
    >
      {children}
    </TripContext.Provider>
  );
};
