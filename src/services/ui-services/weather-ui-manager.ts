import type { Weather } from "../../types";
import { hide, show } from "./utils";

const weatherIcon = document.getElementById("weather-icon") as HTMLImageElement;
const weatherInfo = document.getElementById("weather-info") as HTMLImageElement;
const temperature = document.getElementById("temperature") as HTMLElement;
const region = document.getElementById("region") as HTMLElement;
const weatherLoading = document.getElementById("weather-loading") as HTMLButtonElement;

export function setWeatherWidget(data: Weather){
    weatherIcon.src = new URL(`resources/img/weather-icons/${data.current.condition.icon}`, window.location.href).href;
    
    // The text takes less time to load than an image, which leads to an ugly flash:
    // 1) Text is loaded (temperature + region)
    // 2) Image is loaded (pushes the text right, creating a flash)
    // To reproduce the flash, extract lines 44 and 45 from inside the event handler     
    weatherIcon.addEventListener('load', ()=>{        
        temperature.textContent = `${data.current.temp_c} °C`;
        region.textContent = `${data.location.name}`;
    });
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