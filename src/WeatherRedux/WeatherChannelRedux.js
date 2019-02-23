import React, { Component } from 'react';
import Navbar from './NavbarRedux';
import CityCondition from '../weather/CityCondition';
import Forecaster from '../weather/Forecaster';
import { connect } from 'react-redux';
import { changeTempUnit, changeForecastSize, fetchWeatherData } from '../actions/ActionType';

class WeatherChannelRedux extends Component {

  componentDidMount() {
    // Get Init data;
    const { curCitycode, getData } = this.props;
    getData(curCitycode);
  }

  tempSwitch = () => {
    const { unit, onSwitch } = this.props;
    onSwitch(unit === "C" ? "F" : "C");
  }

  selectCity = async (option) => {
    const cityCode = option.value;
    const { getData } = this.props;
    getData(cityCode);
  }

  sizeChange = (size) => {
    const { changeForecastSize } = this.props;
    changeForecastSize(size);
  }

  render() {
    const { conditionData, forecastData, unit, forecastSize} = this.props;

    // get each data status & response
    const {error: conditionError, status: conditionStatus, response: condition } = conditionData;
    const {error: forecastError, status: forecastStatus, response: forecast } = forecastData;

    // filter forecast data
    const filteredData = forecast && forecast.slice(0, forecastSize);

    return (
      <div>
        <Navbar tempSwitch={ this.tempSwitch } selectCity={ this.selectCity } />
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
              onSizeChange={ this.sizeChange }
              status={ forecastStatus }
              error={ forecastError }
            />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("test2",state);

  return {
    conditionData: state.weatherData.conditionData,
    forecastData: state.weatherData.forecastData,
    unit: state.options.tempUnit,
    curCitycode: state.options.curCitycode,
    forecastSize: state.options.forecastSize,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitch: unit => dispatch(changeTempUnit(unit)),
    getData: citycode => dispatch(fetchWeatherData(citycode)),
    changeForecastSize: (size) => dispatch(changeForecastSize(size))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherChannelRedux)