import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({cities, handleCityChange, selectedCity}) => {
  return (
    <div>
      <Button variant={`${selectedCity === null ? "primary":"outline-primary"}`} onClick={()=>{handleCityChange('current')}}>Current Location</Button>

      {cities.map((city, idx)=>{
        return <Button variant={`${selectedCity === city ? "primary":"outline-primary"}`} key={idx} onClick={()=>{handleCityChange(city)}} >{city}</Button>
      })}
    </div>
  );
};

export default WeatherButton;
