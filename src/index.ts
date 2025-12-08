import { getRandomJoke, setCurrentJoke } from "./features/joke/data-management/joke-manager.ts";
import { setJoke } from "./features/joke/UI-management/joke-ui-manager.ts";
import { displayWeather, displayGeoError } from "./features/weather/ui-management/weather-ui-manager.ts";
import { getCurrentWeather } from "./features/weather/data-mangement/weather-manager.ts";

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
