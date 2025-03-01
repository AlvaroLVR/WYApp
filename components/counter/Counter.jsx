import { useState, useEffect } from "react";
import { useTime } from "../../src/context/TimeProvider";
import "./counter.css"

const Counter = () => {
  const { utcTime } = useTime();
  const [selectedDate, setSelectedDate] = useState(() => {
    // Cargar la fecha almacenada del localStorage al inicio
    return localStorage.getItem("selectedDate") || "";
  });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Manejar el cambio de fecha en el input
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    localStorage.setItem("selectedDate", newDate); // Guardar la fecha seleccionada en localStorage
  };

  useEffect(() => {
    if (!selectedDate) return;

    const interval = setInterval(() => {
      const now = new Date(utcTime); // Obtener la hora actual en UTC
      const targetDate = new Date(selectedDate + "T00:00:00Z"); // Convertir la fecha seleccionada a formato UTC

      const diff = targetDate - now; // Calcular la diferencia en milisegundos

      if (diff > 0) {
        // Calcular días, horas, minutos y segundos restantes
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds }); // Actualizar el estado con el tiempo restante
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Si la fecha ya pasó, poner todo a 0
        clearInterval(interval); // Detener el intervalo si la fecha ya pasó
      }
    }, 1000); // Actualizar cada segundo

    // Limpiar el intervalo cuando el componente se desmonte o cuando la fecha cambie
    return () => clearInterval(interval);
  }, [selectedDate, utcTime]); // Dependencias: se vuelve a ejecutar si cambia selectedDate o utcTime

  return (
    <div className="counterContainer">
        {selectedDate && (
          <p className="timeLeft">
            {timeLeft.days} días {timeLeft.hours} hs {timeLeft.minutes} min
          </p>
        )}
      <form>
       
        <input
          type="date"
          id="date"
          name="date"
          required
          value={selectedDate}
          onChange={handleDateChange} // Actualizar la fecha al cambiar el input
        />
      </form>
    </div>
  );
};

export default Counter;
