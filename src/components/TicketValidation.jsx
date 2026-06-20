// src/components/TicketValidation.jsx
import React, { useState, useContext } from 'react';
import { TicketContext } from '../context/TicketContext';

const TicketValidation = () => {
  const { validate } = useContext(TicketContext);
  const [qrInput, setQrInput] = useState('');
  const [result, setResult] = useState(null);

  const handleValidate = async (e) => {
    e.preventDefault();
    const res = await validate(qrInput);
    setResult(res);
    setQrInput('');
  };

  return (
    <div className="ticket-validation">
      <h3>QR Ticket Validation</h3>
      <form onSubmit={handleValidate} className="validation-form">
        <div>
          <label>QR Code Data URL:</label>
          <input
            type="text"
            value={qrInput}
            onChange={(e) => setQrInput(e.target.value)}
            placeholder="Enter QR data URL or ticket ID"
            required
          />
        </div>
        <button type="submit">Validate Ticket</button>
      </form>
      {result && (
        <div className="validation-result">
          <p>{result.valid ? '✅ Ticket valid' : '❌ Ticket invalid'}</p>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
};

export default TicketValidation;
