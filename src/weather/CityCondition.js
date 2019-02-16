import React from 'react';
import iconWind from '../images/icon/icon-wind.png';
import iconUmberella from '../images/icon/icon-umberella.png';
import iconCompass from '../images/icon/icon-compass.png';

// Design props data

const CityCondition = (props) => {
  const {city,humidity,windSpeed,windDirection,temp} = props.data;
  const {unit} = props;
  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{city}</div>
        <div style={{textAlign: "center", fontSize: "14px"}}>Clear</div>
        <div className="weather-condition__temp">{temp[unit]} {unit}</div>
        <div className="weather-condition__desc">
        <div>
            <img src={iconUmberella} alt="icon-umberella" />
            <span className="citem">{humidity}</span>
        </div>
        <div>
            <img src={iconWind} alt="icon-wind" /> <span className="citem">{windSpeed} km/h</span>
        </div>
        <div>
            <img src={iconCompass} alt="icon-compass" /> <span className="citem">{windDirection}</span>
        </div>
      </div>
    </section >
  )
}



export default CityCondition
