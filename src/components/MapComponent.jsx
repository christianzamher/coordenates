import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

import "leaflet-routing-machine";

export const MapComponent = ({ center }) => {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      // map.flyTo(e.latlng, map.getZoom());
      // console.log( 'location found  : ',  e)
    },
  });

  const formatLatLng = (latlng) => {
    return `${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)}`;
  };

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Estas Aqui: {formatLatLng(position)} </Popup>
    </Marker>
  );
};
