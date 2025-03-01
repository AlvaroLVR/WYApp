import React, { useState, useEffect } from 'react';
import './wheater.css';
import useWeather from '../../src/hooks/useWheater';
import { useTime } from '../../src/context/TimeProvider';
import getFlagUrl from './getFlagUrl';

const WheaterBase = ({ lat, long, onRefresh, res }) => {
  const { weather, loading, error } = useWeather(lat, long, res);
  const { utcTime } = useTime(); // Obtenemos la hora UTC del contexto
  const [localTime, setLocalTime] = useState(new Date());
  const [flagUrl, setFlagUrl] = useState(null);  // Para guardar la URL de la bandera

  // Calcular la hora local en función del tzoffset
  useEffect(() => {
    if (weather) {
      const adjustedTime = new Date(utcTime.getTime() + (weather.tzoffset * 3600000));
      setLocalTime(adjustedTime);
      
      // Obtener la bandera usando la función getFlagUrl
      const flag = getFlagUrl(weather.timezone);
      setFlagUrl(flag);
    }
  }, [weather, utcTime]);

  return (
    <div className='containerWheater'>
      {error ? (
        <p>Error: {error}</p>
      ) : loading ? (
        <div style={{ display: 'flex', width: '100vw', padding: '10px', justifyContent: 'center' }}>
          <button id="btn-refreshRegion" style={{ color: 'black', padding: '1px' }} onClick={onRefresh}>
            Actualizar
          </button>
        </div>
      ) : (
        <div id="infoAboutRegion">
          <div className="caseOfTemperature">
            {weather && <div id="temperature">{weather.days[0].hours[localTime.getUTCHours().toString()].temp}°C</div>}
            
          </div>
          <div className="caseOfDatatime">
            <div style={{display: 'flex', width: '-webkit-fill-available',justifyContent: 'space-between'}} >
              {weather && <p id="date">{weather.days[0].datetime}</p>}
              {flagUrl && <img className="imgCountry" src={flagUrl} width="40" alt="Country" />}
            </div>
            {weather && (
              <p id="time">
                {localTime.getUTCHours().toString().padStart(2, '0')}:
                {localTime.getUTCMinutes().toString().padStart(2, '0')}:
                {localTime.getUTCSeconds().toString().padStart(2, '0')}
              </p>
            )}
            {weather && <p id="region">{weather.timezone}</p>}
            {res === 'componentFixed' ? null : <button id="btn-refreshRegion" onClick={onRefresh}>Actualizar</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default WheaterBase;
