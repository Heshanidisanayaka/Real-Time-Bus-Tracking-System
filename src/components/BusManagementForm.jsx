// src/components/BusManagementForm.jsx
import React, { useState, useEffect } from "react";
import { addBus, updateBus } from "../api/mockBusApi";

/**
 * BusManagementForm component for adding and editing bus records.
 * Props:
 *   - onSuccess: callback to refresh the bus list after a successful add/update.
 *   - editingBus: the bus object being edited (null for create mode).
 *   - setEditingBus: function to clear editing state after edit or cancel.
 */
const BusManagementForm = ({ onSuccess, editingBus, setEditingBus }) => {
  const [busNumber, setBusNumber] = useState("");
  const [route, setRoute] = useState("");
  const [capacity, setCapacity] = useState("");

  // Populate fields when editing a bus
  useEffect(() => {
    if (editingBus) {
      setBusNumber(editingBus.busNumber || "");
      setRoute(editingBus.route || "");
      setCapacity(editingBus.capacity || "");
    } else {
      setBusNumber("");
      setRoute("");
      setCapacity("");
    }
  }, [editingBus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const busData = { busNumber, route, capacity };
    try {
      if (editingBus) {
        await updateBus(editingBus.id, busData);
        setEditingBus(null);
      } else {
        await addBus(busData);
      }
      if (onSuccess) onSuccess();
      // reset form
      setBusNumber("");
      setRoute("");
      setCapacity("");
    } catch (err) {
      console.error("Bus operation failed", err);
    }
  };

  const handleCancel = () => {
    setEditingBus(null);
    setBusNumber("");
    setRoute("");
    setCapacity("");
  };

  return (
    <form className="bus-management-form" onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <div>
        <label>Bus Number:</label>
        <input type="text" value={busNumber} onChange={(e) => setBusNumber(e.target.value)} required />
      </div>
      <div>
        <label>Route:</label>
        <input type="text" value={route} onChange={(e) => setRoute(e.target.value)} required />
      </div>
      <div>
        <label>Capacity:</label>
        <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <button type="submit" className="primary-btn">{editingBus ? "Update Bus" : "Add Bus"}</button>
        {editingBus && (
          <button type="button" className="secondary-btn" onClick={handleCancel} style={{ marginLeft: "0.5rem" }}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default BusManagementForm;
