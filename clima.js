// Obtener clima de Tulcingo de Valle, Puebla con Open-Meteo
async function obtenerClima() {
    const contenedor = document.getElementById("clima-info");
    if (!contenedor) return;

    // Coordenadas de Tulcingo de Valle, Puebla
    const lat = 18.0433;
    const lon = -98.4419;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error en la respuesta de la API");
        
        const datos = await respuesta.json();
        const temp = datos.current_weather.temperature;
        const viento = datos.current_weather.windspeed;

        // Formato en dos líneas
        contenedor.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 4px;">🌡️ Clima Actual: ${temp} °C</div>
            <div>💨 Viento: ${viento} km/h</div>
        `;
    } catch (error) {
        console.error("Error al obtener el clima:", error);
        contenedor.innerHTML = `Clima no disponible`;
    }
}

// Cargar el clima automáticamente al abrir la página
document.addEventListener("DOMContentLoaded", obtenerClima);
