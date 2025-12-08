import { parseWeather } from "../../../utils/dateUtils";
import type { Weather } from "../../../utils/types";

const DIR = {
    CLEAR: 'clear',
    CLOUDY: 'cloudy',
    FOG: 'fog',
    HAIL: 'hail',
    RAIN: 'rain',
    SLEET: 'sleet',
    SNOW: 'snow',
    THUNDER: 'thunder'
}

const ICON = {
    CLEAR_DAY: 'clear-day.svg',
    CLEAR_NIGHT: 'clear-night.svg',
    CLOUDY_DAY: 'cloudy-1-day.svg',
    CLOUDY_NIGHT: 'cloudy-1-night.svg',
    CLOUDY: 'cloudy.svg',
    FOG_DAY: 'fog-day.svg',
    FOG_NIGHT: 'fog-night.svg',
    RAIN_ONE_DAY: 'rainy-1-day.svg',
    RAIN_ONE_NIGHT: 'rainy-1-night.svg',
    RAIN_TWO: 'rainy-2.svg',
    RAIN_TWO_DAY: 'rainy-2-day.svg',
    RAIN_TWO_NIGHT: 'rainy-2-night.svg',
    RAIN_THREE_DAY: 'rainy-3-day.svg',
    RAIN_THREE_NIGHT: 'rainy-3-night.svg',
    RAIN_THREE: 'rainy-3.svg',
    SNOW_ONE_DAY: 'snowy-1-day.svg',
    SNOW_ONE_NIGHT: 'snowy-1-night.svg',
    SNOW_TWO_DAY: 'snowy-2-day.svg',
    SNOW_TWO_NIGHT: 'snowy-2-night.svg',
    SNOW_THREE_DAY: 'snowy-3-day.svg',
    SNOW_THREE_NIGHT: 'snowy-3-night.svg',
    SNOW_AND_SLEET: 'snow-and-sleet-mix.svg',
    RAIN_AND_SLEET: 'rain-and-sleet-mix.svg',
    ISOLATED_THUNDER: 'isolated-thunderstorms.svg',
    ISOLATED_THUNDER_DAY: 'isolated-thunderstorms-day.svg',
    ISOLATED_THUNDER_NIGHT: 'isolated-thunderstorms-night.svg',
    SCATTERED_THUNDER: 'scattered-thunderstorms.svg',
    HAIL: 'hail.svg'
}

const WEATHER_CONDITIONS = [
    {
        code : 1000,
        type: 'sunny',
        text : "Clear",
        icon : {
            day: `${DIR.CLEAR}/${ICON.CLEAR_DAY}`,
            night: `${DIR.CLEAR}/${ICON.CLEAR_NIGHT}`,
        }
    },
    {
        code : 1003,
        type: 'clouds',
        text : "Partly cloudy",
        icon : {
            day: `${DIR.CLOUDY}/${ICON.CLOUDY_DAY}`,
            night: `${DIR.CLOUDY}/${ICON.CLOUDY_NIGHT}`
        }
    },
    {
        code : 1006,
        type: 'clouds',
        text : "Cloudy",
        icon : {
            day: `${DIR.CLOUDY}/${ICON.CLOUDY}`,
            night: `${DIR.CLOUDY}/${ICON.CLOUDY}`
        }
    },
    {
        code : 1009,
        type: 'clouds',
        text : "Overcast",
        icon : {
            day: `${DIR.CLOUDY}/${ICON.CLOUDY}`,
            night: `${DIR.CLOUDY}/${ICON.CLOUDY}`
        }
    },
    {
        code : 1030,
        type: 'fog',
        text : "Mist",
        icon : {
            day: `${DIR.FOG}/${ICON.FOG_DAY}`,
            night: `${DIR.FOG}/${ICON.FOG_NIGHT}`
        }
    },
    {
        code : 1063,
        type: 'rain-1',
        text : "Patchy rain possible",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1066,
        type: 'snow-1',
        text : "Patchy snow possible",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_ONE_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_ONE_NIGHT}`,
        }
    },
    {
        code : 1069,
        type: 'sleet',
        text : "Patchy sleet possible",
        icon : {
            day: `${DIR.SLEET}/${ICON.SNOW_AND_SLEET}`,
            night: `${DIR.SLEET}/${ICON.SNOW_AND_SLEET}` 
        }
    },
    {
        code : 1072,
        type: 'rain-1',
        text : "Patchy freezing drizzle possible",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1087,
        type: 'thunder',
        text : "Thundery outbreaks possible",
        icon : {
            day: `${DIR.THUNDER}/${ICON.ISOLATED_THUNDER_DAY}`,
            night: `${DIR.THUNDER}/${ICON.ISOLATED_THUNDER_NIGHT}`,
        }
    },
    {
        code : 1114,
        type: 'snow-2',
        text : "Blowing snow",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_TWO_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_TWO_NIGHT}`,
        }
    },
    {
        code : 1117,
        type: 'snow-3',
        text : "Blizzard",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_THREE_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_THREE_NIGHT}`,
        }
    },
    {
        code : 1135,
        type: 'fog',
        text : "Fog",
        icon : {
            day: `${DIR.FOG}/${ICON.FOG_DAY}`,
            night: `${DIR.FOG}/${ICON.FOG_NIGHT}`,
        }
    },
    {
        code : 1147,
        type: 'fog',
        text : "Freezing fog",
        icon : {
            day: `${DIR.FOG}/${ICON.FOG_DAY}`,
            night: `${DIR.FOG}/${ICON.FOG_NIGHT}`,
            
        }
    },
    {
        code : 1150,
        type: 'rain-1',
        text : "Patchy light drizzle",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1153,
        type: 'rain-1',
        text : "Light drizzle",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1168,
        type: 'rain-1',
        text : "Freezing drizzle",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1171,
        type: 'rain-3',
        text : "Heavy freezing drizzle",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_THREE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_THREE_NIGHT}`,
        }
    },
    {
        code : 1180,
        type: 'rain-1',
        text : "Patchy light rain",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1183,
        type: 'rain-1',
        text : "Light rain",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1186,
        type: 'rain-2',
        text : "Moderate rain at times",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_TWO_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_TWO_NIGHT}`,
        }
    },
    {
        code : 1189,
        type: 'rain-2',
        text : "Moderate rain",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_TWO_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_TWO_NIGHT}`,
        }
    },
    {
        code : 1192,
        type: 'rain-3',
        text : "Heavy rain at times",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_THREE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_THREE_NIGHT}`,
        }
    },
    {
        code : 1195,
        type: 'rain-3',
        text : "Heavy rain",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_THREE}`,
            night: `${DIR.RAIN}/${ICON.RAIN_THREE}`
        }
    },
    {
        code : 1198,
        type: 'rain-1',
        text : "Light freezing rain",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1201,
        type: 'rain-2',
        text : "Moderate or heavy freezing rain",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_TWO}`,
            night: `${DIR.RAIN}/${ICON.RAIN_TWO}`
        }
    },
    {
        code : 1204,
        type: 'sleet',
        text : "Light sleet",
        icon : {
            day: `${DIR.SLEET}/${ICON.RAIN_AND_SLEET}`,
            night:  `${DIR.SLEET}/${ICON.RAIN_AND_SLEET}`,
        }
    },
    {
        code : 1207,
        type: 'sleet',
        text : "Moderate or heavy sleet",
        icon : {
            day:  `${DIR.SLEET}/${ICON.RAIN_AND_SLEET}`,
            night: `${DIR.SLEET}/${ICON.RAIN_AND_SLEET}`,
        }
    },
    {
        code : 1210,
        type: 'snow-1',
        text : "Patchy light snow",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_ONE_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_ONE_NIGHT}`,
        }
    },
    {
        code : 1213,
        type: 'snow-1',
        text : "Light snow",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_ONE_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_ONE_NIGHT}`,
        }
    },
    {
        code : 1216,
        type: 'snow-2',
        text : "Patchy moderate snow",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_TWO_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_TWO_NIGHT}`,
        }
    },
    {
        code : 1219,
        type: 'snow-2',
        text : "Moderate snow",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_TWO_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_TWO_NIGHT}`,
        }
    },
    {
        code : 1222,
        type: 'snow-3',
        text : "Patchy heavy snow",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_THREE_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_THREE_NIGHT}`,
        }
    },
    {
        code : 1225,
        type: 'snow-3',
        text : "Heavy snow",
        icon: {
            day: `${DIR.SNOW}/${ICON.SNOW_THREE_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_THREE_NIGHT}`,
        }
    },
    {
        code : 1237,
        type: 'hail',
        text : "Ice pellets",
        icon : {
             day: `${DIR.HAIL}/${ICON.HAIL}`,
             night: `${DIR.HAIL}/${ICON.HAIL}`,

        }
    },
    {
        code : 1240,
        type: 'rain-1',
        text : "Light rain shower",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_ONE_DAY}`,
            night: `${DIR.RAIN}/${ICON.RAIN_ONE_NIGHT}`,
        }
    },
    {
        code : 1243,
        type: 'rain-2',
        text : "Moderate or heavy rain shower",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_TWO}`,
            night: `${DIR.RAIN}/${ICON.RAIN_TWO}`
        }
    },
    {
        code : 1246,
        type: 'rain-3',
        text : "Torrential rain shower",
        icon : {
            day: `${DIR.RAIN}/${ICON.RAIN_THREE}`,
            night: `${DIR.RAIN}/${ICON.RAIN_THREE}`
        }
    },
    {
        code : 1249,
        type: 'sleet',
        text : "Light sleet showers",
        icon : {
            day:  `${DIR.SLEET}/${ICON.RAIN_AND_SLEET}`,
            night:  `${DIR.SLEET}/${ICON.RAIN_AND_SLEET}`,
        }
    },
    {
        code : 1252,
        type: 'sleet',
        text : "Moderate or heavy sleet showers",
        icon : {
            day:  `${DIR.SLEET}/${ICON.RAIN_AND_SLEET}`,
            night:  `${DIR.SLEET}/${ICON.RAIN_AND_SLEET}`,
        }
    },
    {
        code : 1255,
        type: 'snow-1',
        text : "Light snow showers",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_ONE_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_ONE_NIGHT}`,
        }
    },
    {
        code : 1258,
        type: 'snow-2',
        text : "Moderate or heavy snow showers",
        icon : {
            day: `${DIR.SNOW}/${ICON.SNOW_TWO_DAY}`,
            night: `${DIR.SNOW}/${ICON.SNOW_TWO_NIGHT}`,
        }
    },
    {
        code : 1261,
        type: 'hail',
        text : "Light showers of ice pellets",
        icon : {
             day: `${DIR.HAIL}/${ICON.HAIL}`,
             night: `${DIR.HAIL}/${ICON.HAIL}`,
        }
    },
    {
        code : 1264,
        type: 'hail',
        text : "Moderate or heavy showers of ice pellets",
        icon : {
             day: `${DIR.HAIL}/${ICON.HAIL}`,
             night: `${DIR.HAIL}/${ICON.HAIL}`,
        }
    },
    {
        code : 1273,
        type: 'rain and thunder',
        text : "Patchy light rain with thunder",
        icon : {
             day: `${DIR.THUNDER}/${ICON.ISOLATED_THUNDER_DAY}`,
             night: `${DIR.HAIL}/${ICON.ISOLATED_THUNDER_NIGHT}`,
        }
    },
    {
        code : 1276,
        type: 'rain and thunder',
        text : "Moderate or heavy rain with thunder",
        icon : {
             day: `${DIR.THUNDER}/${ICON.SCATTERED_THUNDER}`,
             night: `${DIR.HAIL}/${ICON.SCATTERED_THUNDER}`,
        }
    },
    {
        code : 1279,
        type: 'snow and thunder',
        text : "Patchy light snow with thunder",
        icon : {
             day: `${DIR.THUNDER}/${ICON.ISOLATED_THUNDER_DAY}`,
             night: `${DIR.HAIL}/${ICON.ISOLATED_THUNDER_NIGHT}`,
        }
    },
    {
        code : 1282,
        type: 'snow and thunder',
        text : "Moderate or heavy snow with thunder",
        icon : {
             day: `${DIR.THUNDER}/${ICON.ISOLATED_THUNDER}`,
             night: `${DIR.HAIL}/${ICON.ISOLATED_THUNDER}`,
        }
    }
];

export function getAllWeatherConditions(){
    return WEATHER_CONDITIONS;
}

export function getWeatherConditionByCode(weatherData: Weather){
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