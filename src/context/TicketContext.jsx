// src/context/TicketContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { generateTicket, validateTicket, listTickets, listValidations } from '../api/mockTicketApi';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [validations, setValidations] = useState([]);

  const refreshTickets = () => {
    setTickets(listTickets());
  };

  const refreshValidations = () => {
    setValidations(listValidations());
  };

  useEffect(() => {
    refreshTickets();
    refreshValidations();
  }, []);

  const createTicket = (data) => {
    const ticket = generateTicket(data);
    setTickets((prev) => [...prev, ticket]);
    return ticket;
  };

  const validate = (input) => {
    const result = validateTicket(input);
    // refresh after validation
    refreshTickets();
    refreshValidations();
    return result;
  };

  return (
    <TicketContext.Provider value={{ tickets, validations, createTicket, validate, refreshTickets, refreshValidations }}>
      {children}
    </TicketContext.Provider>
  );
};
