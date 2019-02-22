import axios from 'axios';

// const apitest = "https://weather-app-server-01.herokuapp.com/api/weather/au/brisbane";
const API = "https://weather-app-server-01.herokuapp.com/api";

const fetchCurrentData = (city, country = "au", citycode = "") => {
  return getWeatherAxios(city, country, citycode, "current")
    .then(response => {
      const currentData= response.data.data;
      const newCurrentData = mapCurrentToViewModel(currentData);
      return newCurrentData;
    })
}

const fetchForecastData = (city, country = "au", citycode = "") => {
  return getWeatherAxios(city, country, citycode, "forecast")
  .then(response => {
    const {forecast} = response.data.data;
    const newForecastData = mapForecastToViewModel(forecast);
    return newForecastData;
  });
}

const fetchCityList = (city) => {
  return axios.get(`${API}/city/${city}`)
    .then(response => {
      return response.data.data;
    })
}


const getWeatherAxios = (city, country, citycode, weatherType) => {
  const apiPrefix = `${API}/weather`;
  const apiParams = citycode === "" ? `/${country}/${city}` : `/${citycode}`;
  const apiUrl = apiPrefix + apiParams;
  console.log(apiUrl);
  return axios.get(apiUrl, {
    params: { weatherType }
  })
}


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