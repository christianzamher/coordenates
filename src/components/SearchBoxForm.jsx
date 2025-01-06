import React from "react";

const Formulario = ({ address, setAddress, handleDirectGeocode, handleReset, errorMessage }) => {
  return (
    <div className="w-full max-w-md p-6 bg-gray-100 shadow-md flex flex-col space-y-6 sm:w-1/4">
      {/* Título */}
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Bienvenido</h1>
      <h3 className="text-l sm:text-2xl font-semibold text-gray-800">Ingrese coordenada o direccion física</h3>
      
      {/* Entrada y botón */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ingresa una dirección"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring focus:ring-blue-200 focus:outline-none"
          
        />
       
        <button
          onClick={handleDirectGeocode}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition focus:outline-none"
        >
           
          Ir
        </button>
      </div>

      {/* Botón de reset */}
      <button
        onClick={handleReset}
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition focus:outline-none"
      >
        
        Borrar
      </button>
     

      {/* Mensaje de error */}
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500 text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export default Formulario;
