// src/api/mockPaymentApi.js
// Mock Payment API for card and mobile‑wallet transactions.

let transactions = [];

function generateId() {
  return "txn-" + Math.random().toString(36).substr(2, 9);
}

/**
 * Simulate processing a credit/debit card payment.
 * @param {Object} cardInfo - { number, expiry, cvv, amount }
 * @returns {{ success: boolean, transactionId?: string, message: string }}
 */
export function processCardPayment(cardInfo) {
  // Very naive validation – always succeeds in mock.
  const transactionId = generateId();
  const record = { id: transactionId, method: "card", amount: cardInfo.amount, timestamp: Date.now() };
  transactions.push(record);
  return { success: true, transactionId, message: "Card payment processed successfully" };
}

/**
 * Simulate processing a mobile‑wallet payment.
 * @param {Object} walletInfo - { provider, token, amount }
 * @returns {{ success: boolean, transactionId?: string, message: string }}
 */
export function processMobileWallet(walletInfo) {
  const transactionId = generateId();
  const record = { id: transactionId, method: walletInfo.provider, amount: walletInfo.amount, timestamp: Date.now() };
  transactions.push(record);
  return { success: true, transactionId, message: `${walletInfo.provider} payment successful` };
}

/** Return all recorded transactions (for admin view) */
export function listTransactions() {
  // Return a shallow copy to prevent mutation.
  return [...transactions];
}
