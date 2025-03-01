// Cargar el archivo country.json
const countryData = JSON.parse(fs.readFileSync('country.json', 'utf8'));

// Función para obtener la URL de la bandera a partir de la zona horaria
function getFlagUrl(timezone) {
    // Extraer el código de país de la zona horaria (ejemplo: "Europe/Madrid" -> "es")
    const countryCode = timezone.split("/")[1].toLowerCase();

    // Verificar si el código de país existe en el archivo JSON
    if (countryData[countryCode]) {
        // Construir la URL de la bandera
        return `https://flagcdn.com/${countryCode}.svg`;
    } else {
        return "País no encontrado en el archivo";
    }
}