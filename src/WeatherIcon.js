import React from "react";

export default function WeatherIcon({ icon }) {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return <img src={iconUrl} alt="Weather icon" className="WeatherIcon" />;
}
