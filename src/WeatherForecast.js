import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";



export default function WeatherForecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="clear-sky-day" />
            <div className="WeatherForecast-temperatures">
              <span className="temperature-max">19º</span>
              <span className="temperature-min">10º</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="clear-sky-day" />
            <div className="WeatherForecast-temperatures">
              <span className="temperature-max">19º</span>
              <span className="temperature-min">10º</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="clear-sky-day" />
            <div className="WeatherForecast-temperatures">
              <span className="temperature-max">19º</span>
              <span className="temperature-min">10º</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="clear-sky-day" />
            <div className="WeatherForecast-temperatures">
              <span className="temperature-max">19º</span>
              <span className="temperature-min">10º</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="clear-sky-day" />
            <div className="WeatherForecast-temperatures">
              <span className="temperature-max">19º</span>
              <span className="temperature-min">10º</span>
            </div>
          </div>
        </div>
      </div>
    );
}