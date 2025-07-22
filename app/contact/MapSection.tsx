"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DHANLAXMI_MOTORS_COORDS: [number, number] = [19.8510556, 75.3295722];

const logoIcon = new L.Icon({
  iconUrl: 'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/pt82Q1M.jpeg?updatedAt=1745651316824',
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [0, -60],
  className: 'leaflet-logo-marker',
});

export function MapSection() {
  return (
    <MapContainer
      center={DHANLAXMI_MOTORS_COORDS}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={DHANLAXMI_MOTORS_COORDS} icon={logoIcon}>
        <Popup>
          Dhanlaxmi Motors - Hero MotoCorp
        </Popup>
      </Marker>
    </MapContainer>
  );
} 