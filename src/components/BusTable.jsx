// src/components/BusTable.jsx
import React from 'react';

const BusTable = ({ buses, onEdit, onDelete }) => {
  return (
    <table className="bus-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Bus #</th>
          <th>Route</th>
          <th>Status</th>
          <th>Occupancy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {buses.map((bus) => (
          <tr key={bus.id}>
            <td>{bus.id}</td>
            <td>{bus.busNumber}</td>
            <td>{bus.route}</td>
            <td>{bus.status}</td>
            <td>{bus.occupancy || 'N/A'}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(bus)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(bus.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BusTable;
