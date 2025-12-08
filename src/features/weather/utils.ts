export function generateWeatherURL(position: GeolocationPosition){
    return `${import.meta.env.VITE_BASE_WEATHER}?key=${import.meta.env.VITE_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`
}

