import React, { useState } from 'react';
import WheaterBase from './WheaterBase';

const WheaterDynamic = () => {
  const [coords, setCoords] = useState({ lat: null, long: null });

  const getCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    } else {
      console.error('La geolocalización no está soportada en este navegador.');
    }
  };

  return <WheaterBase lat={coords.lat} long={coords.long} onRefresh={getCoords} res={'componentDynamic'}/>;
};

export default WheaterDynamic;
