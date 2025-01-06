import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapUpdater } from "./MapUpdater";
import Formulario from "./SearchBoxForm";
import { LocateControl } from "./Locate";
import "leaflet/dist/leaflet.css";

export const RoutePlanner = () => {
  const [address, setAddress] = useState("");
  const [apiAddress, setApiAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const markerRef = useRef();

  const handleReset = () => {
    setCoordinates(null);
    setAddress("");
    setErrorMessage("");
  };

  const handleDirectGeocode = async () => {
    try {
      setErrorMessage("");
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: address,
            format: "json",
            limit: 1,
          },
        }
      );

      if (response.data.length > 0) {
        const locationData = response.data[0];
        setCoordinates({
          lat: parseFloat(locationData.lat),
          lon: parseFloat(locationData.lon),
        });
        setApiAddress(locationData.display_name); // Guarda la dirección de la API
      } else {
        setErrorMessage(
          "No se encontraron resultados para la dirección ingresada."
        );
      }
    } catch (error) {
      setErrorMessage("Hubo un error en la geocodificación.");
      console.error(error);
    }
  };

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Panel izquierdo con el formulario */}
      <Formulario
        address={address}
        setAddress={setAddress}
        handleDirectGeocode={handleDirectGeocode}
        handleReset={handleReset}
        errorMessage={errorMessage}
      />

      {/* Mapa a la derecha */}
      <div className="flex-1">
        <MapContainer
          center={[-34.6047, -58.3995]}
          zoom={13}
          className="h-full w-full"
        >
          <LocateControl />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {coordinates && (
            <>
              <Marker
                position={[coordinates.lat, coordinates.lon]}
                ref={markerRef}
              >
                <Popup>
                  <div className="text-center">
                    <strong>{apiAddress || "Ubicación seleccionada"}</strong>
                    <br />
                    <p>Coordenadas: {coordinates.lat.toFixed(5)},{" "} {coordinates.lon.toFixed(5)}</p>
                    
                    
                  </div>
                </Popup>
              </Marker>
              <MapUpdater coordinates={coordinates} />
            </>
          )}
        </MapContainer>
      </div>
    </div>
  );
};
