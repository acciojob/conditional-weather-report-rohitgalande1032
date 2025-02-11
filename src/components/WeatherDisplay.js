import React from 'react'

const WeatherDisplay = ({weather}) => {
  return (
    <div>
      <p style={{color: weather.temperature > 20 ? "red" : "blue"}}>temperature: {weather.temperature}</p>
      <p>Weathe Condition: {weather.conditions}</p>
    </div>
  )
}

export default WeatherDisplay