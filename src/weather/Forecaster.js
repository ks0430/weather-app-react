import React from 'react';

const Forecaster = (props) => {
    const {data, unit, onSizeChange} = props;
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
            <button className="forecast__switch_0 switch-active" onClick={() => onSizeChange(5)} >5 items</button>
            <button className="forecast__switch_1" onClick={() => onSizeChange(10)}>10 items</button>
        </div>
        {
            data.map((item,i) => 
                <div className="weather-forecast__row" key={i}>
                <span className="weather-forecast__day">{item.day}</span>
                <span className="weather-forecast__icon">
                    <i className="fa fa-clock-o"></i> {item.time}
                </span>
                <span className="weather-forecast__high">{item.high[unit]} {unit}</span>
                <span className="weather-forecast__low">{item.low[unit]} {unit}</span>
                </div>
            )
        }
      </section>
     )
}


export default Forecaster;
