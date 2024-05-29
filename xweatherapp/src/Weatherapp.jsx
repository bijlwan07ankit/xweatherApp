import React from 'react'

function Weatherapp() {
  return (
    <div>
        <search className="searchbar">
        <input type = "text" placeholder="Enter City Name"></input>
        <button type="submit">Search</button>
        </search>

        <card className="weather-cards">
            <div className="weather-card">
                <h2>Temperature</h2> <p>30 <sup>o</sup> C</p></div>
            <div className="weather-card">
                <h2>Humidity</h2><p>30%</p></div>
            <div className="weather-card">
                <h2>Condition</h2><p>Sunny</p></div>
            <div className="weather-card">
                <h2>Wind Speed</h2><p>14.2 kph</p></div>
        </card>
    </div>
  )
}

export default Weatherapp