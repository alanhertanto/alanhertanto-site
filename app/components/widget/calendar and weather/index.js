import axios from "axios";
import Calendar from "./Calendar";

async function getLocation() {
    const API_KEY_IP = '5c2fa50057844954b1f5fa1442ba96cf';
    const { data } = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY_IP}`);
    return data.city;
}

async function getWeather(city) {
    const API_KEY = "6dde2ffc1e4b6a1bfeb8d1736f2f4a84";
    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return data;
}

export default async function CalendarWeather() {
    const city = await getLocation();
    const weather = await getWeather(city);

    return (
        <div className="flex gap-4 w-full justify-center items-center">
            {/* Weather Widget */}
            <div className="flex flex-col items-center">
                <div className="w-40 h-40 flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-700 text-white shadow-lg">
                    {weather ? (
                        <div>
                            <p className="text-xl">{city}</p>
                            <p className="text-3xl">{weather.main.temp}°</p>
                            <p className="text-sm">{weather.weather[0].main}</p>
                            <p className="text-sm">H:{weather.main.temp_max}° L:{weather.main.temp_min}°</p>
                        </div>
                    ) : (
                        <p>Loading weather...</p>
                    )}
                </div>
                <p className="text-sm text-white mt-1">Weather Info</p> {/* Text Below */}
            </div>

            {/* Calendar Widget */}
            <div className="flex flex-col items-center">
                <div className="w-40 h-40 flex items-center justify-center rounded-2xl bg-gradient-to-b from-gray-700 to-gray-600 shadow-lg overflow-hidden">
                    <div className="transform scale-75">
                        <Calendar />
                    </div>
                </div>
                <p className="text-sm text-white mt-1">Calendar</p> {/* Text Below */}
            </div>
        </div>
    );
};

