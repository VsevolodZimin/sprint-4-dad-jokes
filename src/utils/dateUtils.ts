export function parseWeather(weatherDate: string) {
    const year = Number(weatherDate.slice(0, 4));
    const month = Number(weatherDate.slice(5, 7));
    const dayOfMonth = Number(weatherDate.slice(8, 10));
    const hours = Number(weatherDate.slice(11, 13));
    const minutes = Number(weatherDate.slice(14, 16));
    return new Date(year, month, dayOfMonth, hours, minutes);
}

export function parseChuck(chuckDate: string) {
    const year = Number(chuckDate.slice(0, 4));
    const month = Number(chuckDate.slice(5, 7));
    const dayOfMonth = Number(chuckDate.slice(8, 10));
    const hours = Number(chuckDate.slice(11, 13));
    const minutes = Number(chuckDate.slice(14, 16));
    const seconds = Number(chuckDate.slice(17, 19));
    const milis = Number(chuckDate.slice(20));
    return new Date(year, month, dayOfMonth, hours, minutes, seconds, milis);
}

export function parseISO(isoDate: string) {
    const year = Number(isoDate.slice(0, 4));
    const month = Number(isoDate.slice(5, 7));
    const dayOfMonth = Number(isoDate.slice(8, 10));
    const hours = Number(isoDate.slice(11, 13));
    const minutes = Number(isoDate.slice(14, 16));
    const seconds = Number(isoDate.slice(17, 19));
    return new Date(year, month, dayOfMonth, hours, minutes, seconds);
}