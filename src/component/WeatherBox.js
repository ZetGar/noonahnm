import React, { useEffect, useState } from "react";

const WeatherBox = ({ weather }) => {
  const [fahrenheit, setFahrenheit] = useState(null);

  console.log("weather?", weather);

  const fahrenheitConversion = (celsius) => {
    setFahrenheit((celsius * 9) / 5 + 32);
  };

  useEffect(() => {
    if (weather?.main.temp !== null) {
      fahrenheitConversion(weather?.main.temp);
    }
  }, [weather]);

  return (
    <div className="weather_content">
      <div>
        <h1>{weather?.name}</h1>
        <h2>
          {weather?.main.temp}°C / {fahrenheit}°F
        </h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </div>
  );
};

export default WeatherBox;
