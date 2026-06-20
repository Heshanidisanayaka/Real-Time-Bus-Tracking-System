// src/api/mockTicketApi.js
// Mock Ticketing API: generate QR tickets and validate them.

let tickets = [];
let validations = [];

function generateId() {
  // Simple pseudo‑UUID
  return 'ticket-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Generate a ticket and a mock QR code (Base64 PNG placeholder).
 * @param {Object} params
 * @param {string} params.passengerName
 * @param {string} params.routeId
 * @param {string} params.departureTime - ISO string
 * @returns {Object} ticket info including a Base64 image data URL.
 */
export function generateTicket({ passengerName, routeId, departureTime }) {
  const ticketId = generateId();
  const details = { passengerName, routeId, departureTime, ticketId };
  // Simple placeholder QR: a data URL with the ticketId as text.
  const qrData = `data:image/png;base64,${btoa(ticketId)}`; // base64 of id, not a real QR but works for demo
  const ticket = { ...details, qrData };
  tickets.push(ticket);
  return ticket;
}

/**
 * Validate a ticket by ID or QR data.
 * @param {string} input - either the ticketId or the Base64 QR string.
 * @returns {Object} validation result.
 */
export function validateTicket(input) {
  // If input contains a comma, assume it's a data URL and extract base64.
  let ticketId = input;
  if (input.includes(',')) {
    // data:image/png;base64,XXXX
    ticketId = atob(input.split(',')[1]);
  }
  const ticket = tickets.find((t) => t.ticketId === ticketId);
  const now = Date.now();
  if (!ticket) {
    const result = { valid: false, ticketId: null, message: 'Ticket not found' };
    validations.push({ ...result, timestamp: now });
    return result;
  }
  const result = { valid: true, ticketId, message: 'Ticket valid' };
  validations.push({ ...result, timestamp: now });
  // Mark as used (remove or flag). For simplicity, remove from list.
  tickets = tickets.filter((t) => t.ticketId !== ticketId);
  return result;
}

/** Return all tickets (for admin view) */
export function listTickets() {
  return [...tickets];
}
/** Return all validation records */
export function listValidations() {
  return [...validations];
}
