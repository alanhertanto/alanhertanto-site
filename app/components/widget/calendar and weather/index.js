'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from './Calendar';

export default function CalendarWeather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchLocationAndWeather() {
            try {
                // Get City by IP (client-side)
                const geoRes = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=5c2fa50057844954b1f5fa1442ba96cf`);
                const cityName = geoRes.data.city;
                setCity(cityName);

                // Get Weather for that city
                const weatherRes = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=6dde2ffc1e4b6a1bfeb8d1736f2f4a84`
                );
                setWeather(weatherRes.data);
            } catch (error) {
                console.error('Error fetching location or weather:', error);
            }
        }

        fetchLocationAndWeather();
    }, []);

    return (
        <div className="flex gap-4 w-full justify-center items-center ">
            {/* Weather Widget */}
            <div className="flex flex-col items-center">
                <div className="w-40 h-40 flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-700 text-white shadow-lg">
                    {weather ? (
                        <>
                            <p className="text-xl">{city}</p>
                            <p className="text-3xl">{weather.main.temp}°</p>
                            <p className="text-sm">{weather.weather[0].main}</p>
                            <p className="text-sm">H:{weather.main.temp_max}° L:{weather.main.temp_min}°</p>
                        </>
                    ) : (
                        <p>Loading weather...</p>
                    )}
                </div>
                <p className="text-sm text-white mt-1">Weather Info</p>
            </div>

            {/* Calendar Widget */}
            <div className="flex flex-col items-center">
                <div className="w-40 h-40 flex items-center justify-center rounded-2xl bg-gradient-to-b from-gray-700 to-gray-600 shadow-lg overflow-hidden">
                    <div className="transform scale-75 calendar">
                        <Calendar />
                    </div>
                </div>
                <p className="text-sm text-white mt-1">Calendar</p>
            </div>
        </div>
    );
}
