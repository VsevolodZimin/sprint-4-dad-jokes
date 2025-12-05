import { getRandomJoke, setCurrentJoke } from './services/joke-apis/joke-service.ts';
import { setJoke } from './services/ui-services/ui-manager.ts';
import { displayWeather, displayGeoError } from './services/ui-services/weather-ui-manager.ts';
import { getCurrentWeather } from './services/weather-service.ts';

try {
    const joke = await getRandomJoke();
    setJoke(joke.joke);
    setCurrentJoke(joke);
    const weatherData = await getCurrentWeather();
    displayWeather(weatherData);
}
catch(error){
    alert((error as Error).message);
    displayGeoError();
    console.log(error);
}

[1,2,3].concat([4,5], [6,7], [8,9]);