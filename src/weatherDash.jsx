/* eslint-disable react/prop-types */
import Thermometer from "./assets/thermometer.png"
import Humidity from "./assets/humidity.png"
import Precipitation from "./assets/weather.png"
import Wind from "./assets/wind.png"
import Arrow from "./assets/arrow.png"
import Sunrise from "./assets/sunrise.png"
import Sunset from "./assets/sunset.png"

export default function WeatherDash({weatherData}) {
  return (
    <div className="weather-dash">
      <div className="current-weather">
        <div className="current-weather-val">
            <img src={Thermometer} alt="Thermometer" className="w-img" />
            <div>
                <h2 className="val">{weatherData.current.temperature_2m}{weatherData.current_units.temperature_2m}</h2>
                <small>Feels like {weatherData.current.apparent_temperature}{weatherData.current_units.apparent_temperature}</small>
            </div>
        </div>

        <div className="current-weather-val">
            <img src={Humidity} alt="Humidity" className="w-img" />
            <div>
                <h2 className="val">{weatherData.current.relative_humidity_2m}{weatherData.current_units.relative_humidity_2m}</h2>
                <small>Relative Humidity</small>
            </div>
        </div>

        <div className="current-weather-val">
            <img src={Precipitation} alt="Precipitation" className="w-img" />
            <div>
                <h2 className="val">{weatherData.current.precipitation}{weatherData.current_units.precipitation}</h2>
                <small>Precipitation</small>
            </div>
        </div>

        <div className="current-weather-val">
            <img src={Wind} alt="Wind Speed" className="w-img" />
            <div>
                <h2 className="val">{weatherData.current.wind_speed_10m}{weatherData.current_units.wind_speed_10m}</h2>
                <small>Wind Speed</small>
            </div>
        </div>

        <div className="current-weather-val" style={{position: "relative"}}>
            <small style={{color: "rgb(0, 183, 255)",position: "absolute", top: "35px", left: "50px"}}>N</small>
            <img src={Arrow} alt="Wind Direction" className="w-img arrow" style={{rotate: `${weatherData.current.wind_direction_10m - 90}deg`}} />
            <div>
                <h2 className="val">{weatherData.current.wind_direction_10m}{weatherData.current_units.wind_direction_10m}</h2>
                <small>Wind Direction</small>
            </div>
        </div>
      </div>
      
      <div className="daily-weather">

      </div>
    </div>
  )
}
