import type { Weather } from "../../../utils/types.ts";
import { get } from "../../../services/data-fetch-services/data-fetch-service.ts";
import { validateWeather } from "../validation/zodValidations.ts";
import { generateWeatherURL } from "../utils.ts";
import { getWeatherConditionByCode } from "./weather-conditions-manager.ts";

export async function getCurrentWeather(){
    const position = await new Promise<GeolocationPosition>((success, rej) => {
        navigator.geolocation.getCurrentPosition(success, rej);
    });
    const weatherData = await get(generateWeatherURL(position))as Weather;    
    if(validateWeather(weatherData)){
        throw new Error('Validation failed!');
    }
    return getWeatherConditionByCode(weatherData);
}
