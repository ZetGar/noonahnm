
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import WeatherBox from "../component/WeatherBox";
import WeatherButton from "../component/WeatherButton";

import ClipLoader from "react-spinners/ClipLoader";

function Weather() {
  // 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다
  // 2. 날씨 정보에는 현재 도시, 섭씨, 화씨, 날씨 상태
  // 3. 5개의 버튼이 있다 (현재위치, 다른도시(4개))
  // 4. 도시 버튼을 클릭할때마다 도시별 날씨가 나온다
  // 5. 현재위치 버튼을 누르면 다시 현재위치 기반으로 돌아온다
  // 6. 데이터를 들고오는 동안 로딩 스피너가 돈다

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [APIError, setAPIError] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeaterByCity();
    }
  }, [city]);

  // useEffect(()=>{
  //   console.log('city?', city);
  //   getWeaterByCity();
  // },[city])

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.lattitude;
      let lon = position.coords.longitude;

      getWeaterByCurrentLocation(lat, lon);
    });
  };

  const getWeaterByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34c25cf798e98ec81e7c6418d46cced8&units=metric`;

      setLoading(true);

      let response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const getWeaterByCurrentLocation = async (lat, lon) => {
    try {
      // let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}`
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=34c25cf798e98ec81e7c6418d46cced8&units=metric`;

      setLoading(true);

      let response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };
  return (
    <div className="weather_wrap">
      {loading ? (
        <ClipLoader
          color={"#eee"}
          loading={loading}
          // cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            handleCityChange={handleCityChange}
            selectedCity={city}
          />
        </div>
      )}
    </div>
  );
}

export default Weather;
