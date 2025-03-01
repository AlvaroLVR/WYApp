import { createContext, useContext, useEffect, useState } from "react";

// Crear el contexto
const TimeContext = createContext();

// Proveedor de tiempo
export const TimeProvider = ({ children }) => {
  const [utcTime, setUtcTime] = useState(new Date(Date.now())); // Usa Date.now() para asegurar que es UTC

  useEffect(() => {
    const interval = setInterval(() => {
      setUtcTime(new Date(Date.now())); // Asegurar que siempre obtenemos UTC
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={{ utcTime }}>
      {children}
    </TimeContext.Provider>
  );
};

// Hook para acceder al contexto
export const useTime = () => {
  return useContext(TimeContext);
};
