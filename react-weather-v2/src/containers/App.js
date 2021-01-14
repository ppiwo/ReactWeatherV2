import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import {makeWeatherRequest} from '../api';


export default function App() {
  // user location in lat,long format
  const [userLocation, setLocation] = useState({ lat: -1, long: -1 });
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getLocation();
    loadWeather();
    return () => {

    }
  }, [userLocation])

  let getLocation = () => {
    if (userLocation.lat === -1) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function(position) {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          setLocation({lat: lat, long: long})
        });
      } 
    }
  }

  let loadWeather = () => {
    if (userLocation.lat !== -1)
      setWeatherData(makeWeatherRequest(userLocation.lat, userLocation.long));
  }

  return (
    <div>
      <Spinner userLocation={userLocation} setLocation={setLocation} />
    </div>
  )
}

