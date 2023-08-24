"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';

const error: PositionErrorCallback = (error) => {
  console.log("Unable to retrieve your location", error);
}

export default function Mapa() {
  const [latitude, setLatitude] = useState(-22.91);
  const [longitude, setLongitude] = useState(-42.49);
  const mapRef = useRef<Map>(null)

  useEffect(() => {
    const success: PositionCallback = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      mapRef.current?.flyTo([latitude, longitude], 14)
      setLatitude(latitude);
      setLongitude(longitude);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, [])

  return (
    <MapContainer center={[latitude, longitude]} zoom={14} scrollWheelZoom={true} ref={mapRef}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
    </Marker>
  </MapContainer>
  )
}
