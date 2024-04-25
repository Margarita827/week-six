import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
   function maxTemperature() {
    let temperature = Math.round(props.data.temperature.max);
    return `${temperature}º`;
   }

     function minTemperature() {
    let temperature = Math.round(props.data.temperature.min);
    return `${temperature}º`;
   
     }
   
   
   
   
   
   
    return (
      <div>
        <div className="WeatherForecast-day">{forecast[0].dt}</div>
        <WeatherIcon code={forecast[0].weather[0].icon} />
        <div className="WeatherForecast-temperatures">
          <span className="temperature-max">
            {maxTemperature()}
          </span>
          <span className="temperature-min">
            {minTemperature()}
          </span>
        </div>
      </div>
    );
}