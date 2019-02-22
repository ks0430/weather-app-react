import React, { Component } from 'react';
import Navbar from './NavbarRedux';
import CityCondition from '../weather/CityCondition';
import Forecaster from '../weather/Forecaster';
import { connect } from 'react-redux';
import { changeTempUnit, getWeatherData } from '../actions/ActionType';

class WeatherChannelRedux extends Component {


  componentDidMount() {
    // Get Init data;
    const curCitycode = this.props.curCitycode;
    this.props.getData(curCitycode);
  }

  render() {
    const { condition, forecast, unit, onSwitch} = this.props;
    return (
      <div>
        <Navbar tempSwitch={() => { onSwitch(unit === "C" ? "F" : "C")}} />
        <main>
            <CityCondition data={condition} unit={unit} />
            <Forecaster data={forecast} unit={unit}/>
        </main>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    condition: state.weatherData.condition,
    forecast: state.weatherData.forecast,
    unit: state.options.tempUnit,
    curCitycode: state.options.curCitycode,
    forcastSize: state.options.forecastSize
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitch: (unit) => dispatch(changeTempUnit(unit)),
    getData: (citycode) => dispatch(getWeatherData(citycode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherChannelRedux)