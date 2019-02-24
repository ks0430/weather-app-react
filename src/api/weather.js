import axios from './httpService';
import { toast } from 'react-toastify';
// Gei APIURL from .env file
const API = process.env.REACT_APP_APPURL;

// Get current weather data
const fetchCurrentData = (citycode) => {
  return getWeatherAxios(citycode, "current")
    .then(response => {
      const currentData= response.data.data;
      const newCurrentData = mapCurrentToViewModel(currentData);
      return newCurrentData;
    })
    .catch(e => {
      toast.error(`current data cannot be found!  ${e.request.responseURL}`);
    }) 
}

// Get forecast weather data
const fetchForecastData = (citycode) => {
  return getWeatherAxios(citycode, "forecast")
  .then(response => {
    const {forecast} = response.data.data;
    const newForecastData = mapForecastToViewModel(forecast);
    return newForecastData;
  })
  .catch(e => {
    toast.error(`forecast cannot be found! ${e.request.responseURL}`);
  }) 
  ;
}

// Search city name, return city list (same city name in different countries)
const fetchCityList = (city) => {
  return axios.get(`${API}/city/${city}`)
    .then(response => {
      return response.data.data;
    })
}

// Wrap weather axios
const getWeatherAxios = (citycode, weatherType) => {
  const apiUrl = `${API}/weather/${citycode}`;
  return axios.get(apiUrl, {
    params: { weatherType }
  })
}

// Map forecast data to view model
const mapForecastToViewModel = (forecast) => {
  return forecast.map(item => {
    let weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    let time = new Date(item.time * 1000); // unix time should times 1000
    return {
      day: weekdays[time.getDay()],
      time: `${time.getHours()}:00`,
      high: { C: item.maxCelsius, F: item.maxFahrenheit },
      low: { C:item.minCelsius, F:item.minFahrenheit }
    };
  })
}

// Mao current data to view model
const mapCurrentToViewModel = ({city, current}) => {
  return ({
    city: `${city.name}, ${city.country}`,
    windDirection: current.windDirection,
    windSpeed: current.windSpeed,
    humidity: current.humidity,
    temp:{
      C: current.maxCelsius,
      F: current.maxFahrenheit
    }
  })
}

export { fetchCurrentData, fetchForecastData, fetchCityList };