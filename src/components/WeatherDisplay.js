import React from 'react'

const WeatherDisplay = ({weather}) => {
  return (
    <div>
      <p>temperature: <span style={{color: weather.temperature > 20 ? "red" : "blue"}}>{weather.temperature}</span></p>
      <p>Weathe Condition: {weather.conditions}</p>
    </div>
  )
}

export default WeatherDisplay