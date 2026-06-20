// src/components/AdminDashboard.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import { loadBuses, deleteBus } from '../api/mockBusApi';
import BusTable from './BusTable';
import BusManagementForm from './BusManagementForm';
import { TicketProvider } from '../context/TicketContext';
import TicketPurchase from './TicketPurchase';
import TicketValidation from './TicketValidation';

const AdminDashboard = () => {
  const { admin, logout, isAdmin } = useContext(AdminContext);
  const [buses, setBuses] = useState([]);
  const [editingBus, setEditingBus] = useState(null);
  const [activeTab, setActiveTab] = useState('buses'); // 'buses' | 'tickets'

  useEffect(() => {
    if (isAdmin) {
      loadBuses().then(setBuses);
    }
  }, [isAdmin]);

  const handleDelete = async (id) => {
    await deleteBus(id);
    setBuses((prev) => prev.filter((b) => b.id !== id));
  };

  const refreshBuses = async () => {
    const data = await loadBuses();
    setBuses(data);
  };

  if (!isAdmin) {
    return (
      <div className="admin-dashboard">
        <p>Access denied. Please log in as an admin.</p>
      </div>
    );
  }

  return (
    <TicketProvider>
      <div className="admin-dashboard">
        <header className="admin-header">
          <h2>Admin Dashboard</h2>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </header>
        <nav className="admin-nav">
          <button
            className={activeTab === 'buses' ? 'active' : ''}
            onClick={() => setActiveTab('buses')}
          >
            Bus Management
          </button>
          <button
            className={activeTab === 'tickets' ? 'active' : ''}
            onClick={() => setActiveTab('tickets')}
          >
            Ticketing
          </button>
        </nav>
        {activeTab === 'buses' && (
          <section className="bus-management">
            <h3>Bus Management</h3>
            <BusManagementForm onSuccess={refreshBuses} editingBus={editingBus} setEditingBus={setEditingBus} />
            <BusTable buses={buses} onEdit={setEditingBus} onDelete={handleDelete} />
          </section>
        )}
        {activeTab === 'tickets' && (
          <section className="ticketing">
            <h3>Digital Ticketing</h3>
            <TicketPurchase />
            <TicketValidation />
          </section>
        )}
      </div>
    </TicketProvider>
  );
};

export default AdminDashboard;
