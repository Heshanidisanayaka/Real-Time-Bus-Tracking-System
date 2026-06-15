import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default leaflet icons not showing up in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// A custom bus icon with dynamic rotation using a divIcon
const createBusIcon = (rotation) => {
  return L.divIcon({
    className: 'custom-bus-icon',
    html: `
      <div style="transform: rotate(${rotation}deg); width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background-color: var(--primary); border-radius: 50%; color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 2px solid white;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 6v6"/>
          <path d="M15 6v6"/>
          <path d="M2 12h19.6"/>
          <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
          <circle cx="7" cy="18" r="2"/>
          <path d="M9 18h5"/>
          <circle cx="16" cy="18" r="2"/>
        </svg>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

// Helper component to center map when bus changes
function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  return null;
}

function MapComponent({ selectedBus }) {
  const defaultCenter = [40.7128, -74.0060];
  const [position, setPosition] = useState(selectedBus ? selectedBus.startCoordinates : defaultCenter);
  const [rotation, setRotation] = useState(0);

  // Update starting position when a new bus is selected
  useEffect(() => {
    if (selectedBus) {
      setPosition(selectedBus.startCoordinates);
    }
  }, [selectedBus]);

  // Simulate bus movement
  useEffect(() => {
    if (!selectedBus) return;

    let angle = 0;
    const radius = 0.005; // Make the circle a bit smaller
    const center = selectedBus.startCoordinates;

    const interval = setInterval(() => {
      angle += 0.1;
      const newLat = center[0] + radius * Math.cos(angle);
      const newLng = center[1] + radius * Math.sin(angle);
      
      setPosition([newLat, newLng]);
      
      // Calculate direction indicator rotation based on movement
      const directionDeg = (angle * 180 / Math.PI) + 90;
      setRotation(directionDeg);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedBus]);

  const mapCenter = selectedBus ? selectedBus.startCoordinates : defaultCenter;

  return (
    <MapContainer center={mapCenter} zoom={14} style={{ height: '100%', width: '100%', borderRadius: '16px' }}>
      <MapUpdater center={mapCenter} />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {selectedBus && (
        <Marker position={position} icon={createBusIcon(rotation)}>
          <Popup>
            <strong>Bus {selectedBus.busNumber}</strong><br/>{selectedBus.route} - {selectedBus.destination}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default MapComponent;
