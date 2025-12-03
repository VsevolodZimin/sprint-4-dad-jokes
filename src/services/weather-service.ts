import type { Weather } from "../types";
import { parseWeather } from "../utils/dateUtils";
import { WEATHER_CONDITIONS } from "../utils/weather-conditions";
import { validateWeather } from "../utils/zodValidation";
import { get } from "./data-fetch-service";

export async function getCurrentWeather(){
    const position = await new Promise<GeolocationPosition>((success, rej) => {
        navigator.geolocation.getCurrentPosition(success, rej);
    });
    const weatherData = await get(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`) as Weather;    
    if(validateWeather(weatherData)){
        throw new Error('Validation failed!');
    }
    const time = parseWeather(weatherData.location.localtime);
    const condition = WEATHER_CONDITIONS.find(el => el.code === weatherData.current.condition.code);
    if(!condition) throw new Error('Condition does not exist');
    return {
        current: {
            condition: {
                code: weatherData.current.condition.code,
                text: weatherData.current.condition.text,
                icon: time.getHours() > 5 && time.getHours() < 18 ? condition.icon.day : condition.icon.night
            },
            temp_c: weatherData.current.temp_c,
            temp_f: weatherData.current.temp_f,
        },
        location: {
            country: weatherData.location.country,
            name: weatherData.location.name,
            localtime: weatherData.location.localtime
        }
    }
}
