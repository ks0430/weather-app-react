import { fetchCurrentData, fetchForecastData } from '../api/weather';

export const CHANGE_CITY_CODE = "CHANGE_CITY_CODE";
export const CHANGE_TEMP_UNIT = "CHANGE_TEMP_UNIT";
export const CHANGE_FORECAST_SIZE = "CHANGE_FORECAST_SIZE";
export const CHANGE_WEATHER_CONDITION = "CHANGE_WEATHER_CONDITION";
export const CHANGE_WEATHER_FORECAST = "CHANGE_WEATHER_FORECAST";

export const changeTempUnit = unit => ({
    type: CHANGE_TEMP_UNIT,
    unit
})

export const changeForecastSize = size => ({
  type: CHANGE_FORECAST_SIZE,
  forecastSize: size
})

export const getWeatherData = citycode => async dispatch => {
    // Initial weather channel data.
    // Initial city is Brisbane: 7839562
    const condition = await fetchCurrentData(citycode);
    const forecast = await fetchForecastData(citycode);


    // Get data from remote then dispatch
    dispatch({
      type: CHANGE_WEATHER_CONDITION,
      condition
    });
    dispatch({
      type: CHANGE_WEATHER_FORECAST,
      forecast
    });
}


export const FETCH_WEATHER_CONDITION = "FETCH_WEATHER_CONDITION";
export const FETCH_WEATHER_FORECAST = "FETCH_WEATHER_FORECAST";

export const fetchWeatherData = citycode => async dispatch => {
  // Dispatch fetch process
    dispatch({
      type: FETCH_WEATHER_CONDITION,
    });
    dispatch({
      type: FETCH_WEATHER_FORECAST
    })

    // Initial weather channel data.
    // Initial city is Brisbane: 7839562
    const condition = await fetchCurrentData(citycode);
    const forecast = await fetchForecastData(citycode);

    // After fetch weather condition
    dispatch({
      type: FETCH_WEATHER_CONDITION,
      status: "success",
      response: condition
    })

    dispatch({
      type: FETCH_WEATHER_FORECAST,
      status: "success",
      response: forecast
    })
} 


