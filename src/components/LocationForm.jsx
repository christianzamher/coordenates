 export const LocationForm = ({ mapInstance }) => {
    const [address, setAddress] = useState("");
  
    const handleGeocode = () => {
      if (address.trim() === "") return;
  
      if (!mapInstance) {
        alert("El mapa no está cargado correctamente.");
        return;
      }
  
      const geocoder = L.Control.Geocoder.nominatim();
  
      geocoder.geocode(address, (results) => {
        if (results && results.length > 0) {
          const latLng = results[0].center;
  
          const newMarker = L.marker(latLng).addTo(mapInstance);
          newMarker.bindPopup(results[0].name).openPopup();
          mapInstance.setView(latLng, 13);
        } else {
          alert("Dirección no encontrada");
        }
      });
    };
  
    return (
      <div className="location-form">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ingresa una dirección"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleGeocode}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Buscar
        </button>
      </div>
    );
  };
  