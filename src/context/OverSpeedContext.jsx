import React, { createContext, useState, useEffect } from 'react';
import { checkSpeedViolation, generateViolationReport } from '../api/mockOverSpeedApi';

export const OverSpeedContext = createContext();

export const OverSpeedProvider = ({ children }) => {
  const [violations, setViolations] = useState([]);
  const [report, setReport] = useState([]);

  // Fetch initial violations (could be empty for mock)
  useEffect(() => {
    // For demo, check a set of bus IDs periodically
    const busIds = ['bus-1', 'bus-2', 'bus-3'];
    const speedLimit = 60; // km/h
    const loadViolations = async () => {
      const results = await Promise.all(busIds.map(id => checkSpeedViolation(id, speedLimit)));
      setViolations(results.filter(v => v.violation));
    };
    loadViolations();
  }, []);

  const refreshReport = async () => {
    const data = await generateViolationReport();
    setReport(data);
  };

  return (
    <OverSpeedContext.Provider value={{ violations, report, refreshReport }}>
      {children}
    </OverSpeedContext.Provider>
  );
};
