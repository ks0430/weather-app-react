import React from 'react';

const Forecaster = (props) => {
    const {data, unit, onSizeChange, forecastSize} = props;

    const buttons = [5,10]

    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
            {buttons.map(btn => 
                <button 
                  key={btn} 
                  className={ getBtnClassName(btn, forecastSize) }
                  onClick={() => onSizeChange(btn)}
                  >
                  {btn} items
                  </button>
            )}
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

const getBtnClassName = (btn, forecastSize) => {
  let className = btn === 5 ? "forecast__switch_0" : "forecast__switch_1";
  className += btn === forecastSize ? " switch-active" : "" ;
  return className;
}

export default Forecaster;
