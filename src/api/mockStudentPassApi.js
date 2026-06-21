// src/api/mockStudentPassApi.js
// In‑memory mock API for Student Bus Pass feature (digital ID & discount fare).

const passes = [];
let nextId = 1;

/**
 * Create a new student pass.
 * @param {Object} param0
 * @param {string} param0.studentName - Student's full name.
 * @param {string} param0.studentId - Unique student identifier.
 * @param {number} [param0.discountRate=15] - Discount percentage (0‑100).
 * @returns {Object} The created pass object.
 */
export function createStudentPass({ studentName, studentId, discountRate = 15 }) {
  if (passes.find(p => p.studentId === studentId)) {
    throw new Error('Student pass already exists for this ID');
  }
  const pass = {
    passId: `SP${nextId++}`,
    studentName,
    studentId,
    discountRate,
    status: 'active',
    createdAt: new Date().toISOString(),
  };
  passes.push(pass);
  return pass;
}

/** Validate a student pass – returns true if active. */
export function validateStudentPass(passId) {
  const p = passes.find(p => p.passId === passId && p.status === 'active');
  return !!p;
}

/** Apply discount to a base fare using a specific pass. */
export function applyDiscount(baseFare, passId) {
  const p = passes.find(p => p.passId === passId && p.status === 'active');
  if (!p) return baseFare;
  const discount = (p.discountRate / 100) * baseFare;
  return Number((baseFare - discount).toFixed(2));
}

/** List all student passes (shallow copy). */
export function listStudentPasses() {
  return passes.map(p => ({ ...p }));
}

/** Deactivate a pass (e.g., after expiration). */
export function deactivatePass(passId) {
  const p = passes.find(p => p.passId === passId);
  if (p) {
    p.status = 'inactive';
    return true;
  }
  return false;
}

/** For testing – reset the store. */
export function _resetStore() {
  passes.length = 0;
  nextId = 1;
}
