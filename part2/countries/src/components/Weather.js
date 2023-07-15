import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;

  const hook = () => {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?";

    axios.get(`${baseURL}?q=${capital}&appid=${api_key}`).then((response) => {
      console.log(response.data.current);
      setWeather(response.data.current);
    });
  };
  useEffect(hook);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>
        <strong>temperature:</strong> {weather.main.temp} Celsius
      </div>
      {/* <img
        src={weather.current.weather_icons}
        alt={weather.current.weather_descriptions}
      />
      <div>
        <strong>wind:</strong> {weather.current.wind_speed} mph direction{" "}
        {weather.current.wind_dir}
      </div> */}
    </div>
  );
};
export default Weather;
