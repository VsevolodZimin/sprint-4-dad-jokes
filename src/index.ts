import { getRandomJoke, setCurentJoke } from './services/joke-service.ts';
import { getCurrentWeather } from './services/weather-service.ts';
import { displayGeoError, displayWeather, setJoke } from './ui-manager.ts';

try {
    const joke = await getRandomJoke();
    setJoke(joke.joke);
    setCurentJoke(joke);
    const weatherData = await getCurrentWeather();
    displayWeather(weatherData);
}
catch(error){
    alert((error as Error).message);
    displayGeoError();
    console.log(error);
}