
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay.js";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });
  useEffect(()=> {
    setWeather({temperature: 25, conditions: "Sunny"});
  }, [])
  console.log(weather);
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherDisplay weather={weather}/>
        
    </div>
  )
}

export default App
