import countryData from './country.json'; // Asegúrate de que la ruta sea correcta.

const getFlagUrl = (timezone) => {
  
  var countryCode = timezone.split("/")[1].substring(0, 2).toLowerCase();
  
  if (timezone == "Europe/Madrid") {
    countryCode = "es";
  }
  // Buscar el nombre del país en el JSON importado.
  const countryName = countryData[countryCode];

  // Si encontramos el país, generamos la URL, si no, mostramos una bandera "desconocida".
  if (countryName) {
    return `https://flagcdn.com/${countryCode}.svg`;
  } else {
    return 'https://flagcdn.com/unknown.svg'; // URL para bandera desconocida
  }
};

export default getFlagUrl