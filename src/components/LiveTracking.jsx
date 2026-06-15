import React, { useState } from 'react';
import MapComponent from './MapComponent';
import { mockBuses } from '../data/mockBuses';

function LiveTracking({ navigateTo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBus, setSelectedBus] = useState(mockBuses[0]);

  // Unified search logic: filter by bus number, route, or destination
  const filteredBuses = mockBuses.filter((bus) => {
    const query = searchQuery.toLowerCase();
    return (
      bus.busNumber.toLowerCase().includes(query) ||
      bus.route.toLowerCase().includes(query) ||
      bus.destination.toLowerCase().includes(query)
    );
  });

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
          {/* Search Section */}
          <div className="search-section">
            <input
              type="text"
              className="search-input"
              placeholder="Search by bus #, route, or destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="search-results">
              <h4 className="results-header">Search Results ({filteredBuses.length})</h4>
              {filteredBuses.length > 0 ? (
                <div className="results-list">
                  {filteredBuses.map((bus) => (
                    <div 
                      key={bus.id} 
                      className={`result-item ${selectedBus?.id === bus.id ? 'selected' : ''}`}
                      onClick={() => setSelectedBus(bus)}
                    >
                      <div className="result-bus-number">{bus.busNumber}</div>
                      <div className="result-details">
                        <span className="result-route">{bus.route}</span> - {bus.destination}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">No buses found matching your search.</div>
              )}
            </div>
          )}

          {/* Active Bus Status Card */}
          {selectedBus && (
            <>
              <div className="status-card">
                <h3>{selectedBus.route} - {selectedBus.destination}</h3>
                <div className={`status-indicator ${selectedBus.status}`}>
                  <span className="dot"></span> {selectedBus.status.charAt(0).toUpperCase() + selectedBus.status.slice(1)}
                </div>
                
                <div className="info-list">
                  <div className="info-item">
                    <span className="label">Next Stop:</span>
                    <span className="value">{selectedBus.nextStop}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">ETA:</span>
                    <span className="value">{selectedBus.eta}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Speed:</span>
                    <span className="value">{selectedBus.speed}</span>
                  </div>
                </div>
              </div>
              
              <div className="status-card">
                <h3>Bus Details</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="label">Bus ID:</span>
                    <span className="value">{selectedBus.busNumber}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Capacity:</span>
                    <span className="value">{selectedBus.capacity}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="map-container">
          <MapComponent selectedBus={selectedBus} />
        </div>
      </main>
    </div>
  );
}

export default LiveTracking;
