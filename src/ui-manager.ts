import { getRandomJoke, setCurentJoke as setCurrentJoke } from "./services/joke-service";
import { getAllEntries, saveEntry, updateEntry,  } from "./services/joke-log-sevice";
import { getCurrentJoke } from "./services/joke-service";
import { SCORE, type Score, type Weather } from "./types";
const weatherIndicator = document.getElementById("weather-widget") as HTMLElement;
const weatherIcon = document.getElementById("weather-icon") as HTMLImageElement;
const weatherInfo = document.getElementById("weather-info") as HTMLImageElement;
const temperature = document.getElementById("temperature") as HTMLElement;
const region = document.getElementById("region") as HTMLElement;
const jokeBox = document.getElementById("joke-message") as HTMLElement;
const poorBtn = document.getElementById("poor") as HTMLButtonElement;
const averageBtn = document.getElementById("average") as HTMLButtonElement;
const goodBtn = document.getElementById("good") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;
const weatherLoading = document.getElementById("weather-loading") as HTMLButtonElement;

if(
    !weatherIndicator 
    || !jokeBox 
    || !poorBtn 
    || !averageBtn 
    || !goodBtn 
    || !temperature 
    || !weatherIcon 
    || !region
    || !weatherLoading
    || !weatherInfo
){
    throw new Error('A vital HTML element is null');
}

export function setJoke(joke: string){
    jokeBox.textContent = joke;
}

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

nextBtn.addEventListener('click', async () => {
    const joke = await getRandomJoke();
    setJoke(joke.joke);
    setCurrentJoke(joke);
});

poorBtn.addEventListener('click', () => {
    handleRatingBtn(SCORE.POOR);
});
averageBtn.addEventListener('click', () => {
    handleRatingBtn(SCORE.AVERAGE);
});
goodBtn.addEventListener('click', () => {
    handleRatingBtn(SCORE.GOOD);
});


function handleRatingBtn(score: Score){
    let joke = getAllEntries().find(pEntry => pEntry.id === getCurrentJoke().id);
    if(joke){
        updateEntry(joke.id, { score });
        console.log(getAllEntries());
    }
    else {
        saveEntry(getCurrentJoke().id, getCurrentJoke().joke, score);
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

export function show(pElement: HTMLElement){
    if(pElement.classList.contains('hidden')){
        pElement.classList.remove('hidden');
    }
}

export function hide(pElement: HTMLElement){
    if(!pElement.classList.contains('hidden')){
        pElement.classList.add('hidden');
    }
}