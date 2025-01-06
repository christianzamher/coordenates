import React, { useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
export const CustomMap = ({ control }) => {
  const map = useMap();
  const [popupOpen, setPopupOpen] = useState(false);
  const [position, setPosition] = useState(null);

  // Función para manejar el clic en el mapa y abrir el popup
  const handleMapClick = (e) => {
    setPosition(e.latlng);
    setPopupOpen(true);
  };

  useEffect(() => {
    // Agrega el event listener al mapa para detectar clics
    map.on("dblclick", handleMapClick);

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      map.off("click", handleMapClick);
    };
  }, [map]);

  const handleStartClick = () => {
    control.spliceWaypoints(0, 1, position);
    setPopupOpen(false);
  };

  const handleDestClick = () => {
    const waypoints = control.getWaypoints();
    control.spliceWaypoints(waypoints.length - 1, 1, position);
    setPopupOpen(false);
  };

  return (
    <>
      {popupOpen && (
        <Marker position={position}>
          <Popup closeButton={true}>
            <div className="flex-col">
              <div className="bg-greenT p-2 m-2 rounded-lg">
                <button onClick={handleStartClick}>Iniciar Aqui</button>
              </div>
              <div className="bg-softWood p-2 m-2 rounded-lg">
                <button onClick={handleDestClick}>Llegar aqui</button>
              </div>
            </div>
          </Popup>
        </Marker>
      )}
    </>
  );
};
