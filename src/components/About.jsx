import React from "react";

export const About = () => {
  return (
    <>
      <section className="ezy__about15 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-[30vw] bg-yellow-600 bg-opacity-30 -z-[1]"></div>
        <div className="container px-4">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 lg:col-span-4">
              <div>
                <img
                  src="DeCaminoCirculo.png"
                  alt=""
                  className="max-w-full h-auto"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Acerca de DeCamino
                </h1>
                <p className="opacity-75">
                  DeCamino Maps es la extension de la App 
                  <a href="https://decamino.vercel.app/"> 
                    <b>Decamino</b>
                  </a>
                  realizada para la empresa Igrowker, durante junio y julio del
                  2024 las funcionalidades de la misma incluian geolocalizacion
                  del usuario y de los comercios , sobre todo restaurantes y
                  puntos de interes (POI) en cada pueblo, con la capacidad de
                  crear un perfil personalizado para realizar reservas y
                  hospedaje. Al incrementar las opciones de la APP , DeCamino
                  Maps corrió con la misma suerte, generando todo tipo de
                  recursos para el usuario siendo escalado a nivel nacional y no solo
                  para una porcion del territorio Argentino. Dentro de esas
                  funcionalidades podrás , por ejemplo,  geolocalizarte presionando el boton
                  <img src="arrow.png" className="h-6 w-6  inline-block mr-2" />
                  flecha , haciendo un simple click dentro del mapa tendras la
                  opcion de elegir un punto de inicio o de llegada al destino
                  que selecciones , tambien está habilitada la busqueda de
                  direcciones tanto por coordenadas como por direccion fisica .
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div>
                <p className="opacity-75 mt-4">
                  Encontrarás tambien muchos sitios de interes con sus
                  respectivas descripciones. El limite de opciones es amplio y
                  va a seguir creciendo a medida que siga desarrollando la
                  aplicacion.
                  <br />
                  Ahora vamos a ponernos mas tecnicos!, Qué tecnologias se
                  usaron para el desarrollo de DeCamino Maps? Desarrollada
                  integramente desde el lado del cliente utilizando la libreria{" "}
                  <img src="react.png" className="h-6 w-6  inline-block mr-2" />
                  React integrando Vite y estilizada con las opciones de NextUI
                  y Tailwind . Para el manejo de estados la opcion principal fue
                  Redux Toolkit . La estrella de esta App que centra su
                  funcionalidad en la Geolocalizacion, se la lleva la
                  herramienta{" "}
                  <img
                    src="maps-and-location.png"
                    className="h-6 w-6  inline-block mr-2"
                  />
                  Leaflet que es una biblioteca JavaScript de código abierto
                  para mapas interactivos. Leaflet Routing Machine que es un
                  complemento para Leaflet que facilita la adición de
                  funcionalidades de enrutamiento a los mapas Leaflet. Permite a
                  los usuarios calcular rutas entre dos o más puntos en el mapa,
                  mostrando la ruta óptima basada en varios criterios como
                  distancia, tiempo, etc. Y Nominatim que es un servicio de búsqueda
                  de lugares y geocodificación basado en datos de OpenStreetMap.
                  Permite convertir direcciones en coordenadas geográficas
                  (geocodificación) y viceversa (geocodificación inversa)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
