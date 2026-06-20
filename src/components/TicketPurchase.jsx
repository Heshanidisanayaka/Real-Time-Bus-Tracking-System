// src/components/TicketPurchase.jsx
import React, { useState, useContext } from 'react';
import { TicketContext } from '../context/TicketContext';

const TicketPurchase = () => {
  const { createTicket } = useContext(TicketContext);
  const [passengerName, setPassengerName] = useState('');
  const [routeId, setRouteId] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [ticket, setTicket] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = await createTicket({ passengerName, routeId, departureTime });
    setTicket(newTicket);
    setPassengerName('');
    setRouteId('');
    setDepartureTime('');
  };

  return (
    <div className="ticket-purchase">
      <h3>Digital Ticket Purchase</h3>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div>
          <label>Passenger Name:</label>
          <input type="text" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} required />
        </div>
        <div>
          <label>Route ID:</label>
          <input type="text" value={routeId} onChange={(e) => setRouteId(e.target.value)} required />
        </div>
        <div>
          <label>Departure Time:</label>
          <input type="datetime-local" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} required />
        </div>
        <button type="submit">Generate Ticket</button>
      </form>
      {ticket && (
        <div className="ticket-result">
          <p>Ticket ID: {ticket.ticketId}</p>
          <p>QR Code:</p>
          <img src={ticket.qrData} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default TicketPurchase;
