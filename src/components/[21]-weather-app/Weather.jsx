import React, { useEffect, useState } from "react";
import Search from "./Search";
import style from "./weather.module.css";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (query) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`Gagal mengambil data cuaca: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        setWeatherData(data);
      }
      //   console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetchWeatherData("Bandung");
  }, []);

  return (
    <div className={style.container}>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <p className={style.loading}>Loading...</p>
      ) : (
        <div>
          <div className={style["city-name"]}>
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className={style.date}>
            <span>{getCurrentDate()}</span>
          </div>
          <div className={style.temp}>{weatherData?.main?.temp}</div>
          <p className={style.description}>
            {weatherData?.weather[0] ? weatherData?.weather[0].description : ""}
          </p>
          <div className={style["weather-info"]}>
            <div className={style.column}>
              <div>
                <p className={style.wind}>{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className={style.column}>
              <div>
                <p className={style.humidity}>{weatherData?.main?.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
