"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function Mapa() {
  return (
    <MapContainer center={[-22.91, -42.49]} zoom={14} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-22.9369, -42.4915]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
    </Marker>
  </MapContainer>
  )
}
