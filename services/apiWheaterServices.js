/* import { WEATHER_API_KEY, WEATHER_API_URL } from "../src/utils/config"; */

const WEATHER_API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 



// Función para obtener la fecha actual en formato "YYYY-MM-DD"
const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0]; // Solo la parte de la fecha
};

export const fetchWeather = async (LAT, LONG, res) => {
  const url = `${WEATHER_API_URL}${LAT}%2C${LONG}/today?unitGroup=metric&include=days%2Chours&key=${WEATHER_API_KEY}&contentType=json`;

  console.log(url, 'esta es la URL para hacer la peticion');
  
  // Obtener datos guardados en localStorage
  const cachedWeather = localStorage.getItem(res);

  if (cachedWeather) {
    const parsedData = JSON.parse(cachedWeather);

    // Obtener la fecha actual y la última fecha guardada
    const lastUpdated = parsedData.lastUpdated || ""; 
    const currentDate = getCurrentDate();

    // Si la fecha guardada es la misma que la de hoy, usamos los datos en caché
    if (lastUpdated === currentDate) {
      return parsedData.data;
    }
  }

  // Si no hay datos en caché o es un nuevo día, llamamos a la API
  try {
    console.log(`Consultando nueva información del clima para ${res}...`);
    console.log("URL", url);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al obtener datos del clima: ${response.status}`);
    }

    const result = await response.json();

    // Guardamos los nuevos datos en localStorage con la fecha de actualización
    const dataToCache = {
      data: result,
      lastUpdated: getCurrentDate(), // Guardar la fecha de actualización
      coordinates: { lat: LAT, long: LONG },
    };

    localStorage.setItem(res, JSON.stringify(dataToCache));
    return result;
  } catch (error) {
    console.error(`Error en la API del clima para ${res}:`, error);
    throw error;
  }
};
