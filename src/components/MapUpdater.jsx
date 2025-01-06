import {  useMap } from "react-leaflet";

export const MapUpdater = ({ coordinates }) => {
    const map = useMap();
    if (coordinates) {
      map.setView([coordinates.lat, coordinates.lon], 13);
    }
    return null;
  };

 