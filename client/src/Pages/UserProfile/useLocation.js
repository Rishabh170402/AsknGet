import React from 'react';
import axios from 'axios';


import { useEffect, useState } from "react";


function useLocation() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c59cba4ccc479f1955cf3effff42ca6d&units=metric`
      );
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0]);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  return (
    <div className="useLocation">
      <div className="a__container">
        <h1>{cityName}</h1>
      </div>
    </div>
  );
}

export default useLocation;