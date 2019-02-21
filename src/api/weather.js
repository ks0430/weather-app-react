import axios from 'axios';

// const apitest = "https://weather-app-server-01.herokuapp.com/api/weather/au/brisbane";
const API = "https://weather-app-server-01.herokuapp.com/api";

const fetchCurrentData = (city, country = "au") => {
  return axios.get(`${API}/weather/${country}/${city}`,{
    params:{weatherType: "current"}
  })
  .then(response => {
    console.log("response",response.data);
    const {city, current} = response.data.data;
    const newData = {
      city: `${city.name}, ${city.country}`,
      windDirection: current.windDirection,
      windSpeed: current.windSpeed,
      humidity: current.humidity,
      temp:{
        C: current.maxCelsius,
        F: current.maxFahrenheit
      }
    }
    console.log("newdata",newData);
    return newData;
  })
}

const fetchForecastData = (city, country = "au") => {
  return axios.get(`${API}/weather/${country}/${city}`,{
    params: { weatherType: "forecast"}
  })
  .then(response => {
    console.log("forecast",response);
    const {forecast} = response.data.data;
    const newForecastData = forecast.map(item => {
      let weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
      let time = new Date(item.time * 1000); // unix time should times 1000
      return {
        day: weekdays[time.getDay()],
        time: `${time.getHours()}:00`,
        high: { C: item.maxCelsius, F: item.maxFahrenheit },
        low: { C:item.minCelsius, F:item.minFahrenheit }
      };
    })
    return newForecastData;
  });

}


export { fetchCurrentData, fetchForecastData };