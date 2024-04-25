import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios, {}from "axios";

export default function WeatherForecast(props) {
 let [loaded, setLoaded] = useState(true);
 let [forecast, setForecast] = useState(null);
 
 function handleResponse(response) {
setForecast(response.data.daily);
 setLoaded(true);
}
 

 if (loaded) {

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <WeatherIcon code="clear-sky-day" />
          <div className="WeatherForecast-temperatures">
            <span className="temperature-max">
              {forecast[0].temperature.current.max}º
            </span>
            <span className="temperature-min">
              {forecast[0].temperature.current.min}º
            </span>
          </div>
        </div>
      </div>
    </div>
  );


  } else {
    




       let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
       let longitude = props.coordinates.longitude;
       let latitude = props.coordinates.latitude;
       let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

       axios.get(apiUrl).then(handleResponse);

       return null;
  }
}
