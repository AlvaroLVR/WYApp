import { useState, useEffect } from "react";
import { fetchWeather } from "../../services/apiWheaterServices";

const useWeather = (LAT, LONG, res) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (LAT === null || LONG === null) return; // Esperar hasta tener coordenadas

      setLoading(true);
      try {
        const data = await fetchWeather(LAT, LONG, res);
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [LAT, LONG]);

  return { weather, loading, error };
};

export default useWeather;
