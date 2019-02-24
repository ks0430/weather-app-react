import React from 'react';
import CityCondition from '../weather/CityCondition';
import Forecaster from '../weather/Forecaster';

const WeatherChannelBodyRedux = ({conditionData, forecastData, unit, sizeChange, forecastSize}) => {

  // get each data status & response
  const {error: conditionError, status: conditionStatus, response: condition } = conditionData;
  const {error: forecastError, status: forecastStatus, response: forecast } = forecastData;

  // filter forecast data
  const filteredData = forecast && forecast.slice(0, forecastSize);

  // If in request process, show waiting board
  const isRequest = conditionStatus === "request" || forecastStatus ==="request";

  if (isRequest) {
    return (
      <div style={{width:"100%", height:"21rem", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <p style={{fontSize:"2.5rem"}}>Waiting</p>
      </div>
    )
  }

  return (
    <main>
      <CityCondition 
        data={ condition } 
        unit={ unit } 
        status={ conditionStatus } 
        error={ conditionError } 
      /> 
      <Forecaster 
        data={ filteredData } 
        unit={ unit } 
        forecastSize={ forecastSize } 
        onSizeChange={ sizeChange }
        status={ forecastStatus }
        error={ forecastError }
      />
    </main>
  )
}

export default WeatherChannelBodyRedux
