import React from 'react';
import MapComponent from './MapComponent';

function LiveTracking({ navigateTo }) {
  return (
    <div className="live-tracking-dashboard">
      <header className="dashboard-header">
        <div className="header-brand">
          <h2>Live Transit</h2>
        </div>
        <nav className="header-nav">
          <button className="nav-btn active">Map</button>
          <button className="nav-btn" onClick={() => navigateTo('login')}>Logout</button>
        </nav>
      </header>

      <main className="dashboard-content">
        <div className="sidebar">
          <div className="status-card">
            <h3>Route 42 - Downtown Express</h3>
            <div className="status-indicator live">
              <span className="dot"></span> Live
            </div>
            
            <div className="info-list">
              <div className="info-item">
                <span className="label">Next Stop:</span>
                <span className="value">Central Station</span>
              </div>
              <div className="info-item">
                <span className="label">ETA:</span>
                <span className="value">3 mins</span>
              </div>
              <div className="info-item">
                <span className="label">Speed:</span>
                <span className="value">35 mph</span>
              </div>
            </div>
          </div>
          
          <div className="status-card">
            <h3>Bus Details</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="label">Bus ID:</span>
                <span className="value">#8492</span>
              </div>
              <div className="info-item">
                <span className="label">Capacity:</span>
                <span className="value">60% Full</span>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <MapComponent />
        </div>
      </main>
    </div>
  );
}

export default LiveTracking;
