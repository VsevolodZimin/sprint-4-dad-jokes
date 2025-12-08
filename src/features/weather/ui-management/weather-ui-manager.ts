import type { Weather } from "../../../utils/types";
import { hide, show } from "../../../UI/utils";
// const icons = import.meta.glob('/src/resources/images/weather-icons/**/*', {
//     eager: true,
//     import: "default"
// });

const weatherIcon = document.getElementById("weather-icon") as HTMLImageElement;
const weatherInfo = document.getElementById("weather-info") as HTMLImageElement;
const temperature = document.getElementById("temperature") as HTMLElement;
const region = document.getElementById("region") as HTMLElement;
const weatherLoading = document.getElementById("weather-loading") as HTMLButtonElement;

export function setWeatherWidget(data: Weather){
    try {
        weatherIcon.src = new URL(`/images/weather-icons/${data.current.condition.icon}`, import.meta.env.VITE_BASE_SERVER).href;
        weatherIcon.addEventListener('load', ()=>{        
            temperature.textContent = `${data.current.temp_c} °C`;
            region.textContent = `${data.location.name}`;
        });
    }
    catch(error){
        alert(error);
    }
}

export function displayWeather(weatherData: Weather){
    //Simulates loading state
    setTimeout(() => {
        setWeatherWidget(weatherData);
        hide(weatherLoading);
        show(weatherInfo);
    }, 1000)
}

export function displayGeoError(){
    weatherLoading.textContent = "A location permission would be nice :)"
}

export function showWeatherLoading(){
    show(weatherLoading);
}

export function hideWeatherLoading(){
    hide(weatherLoading);
}