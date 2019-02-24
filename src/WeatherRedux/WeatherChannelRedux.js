import React, { Component } from 'react';
import Navbar from './NavbarRedux';
import WeatherChannelBodyRedux from './WeatherChannelBodyRedux'
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

    return (
      <div>
        <Navbar tempSwitch={ this.tempSwitch } selectCity={ this.selectCity } />
        <WeatherChannelBodyRedux 
          conditionData={conditionData}
          forecastData={forecastData}
          unit={unit}
          forecastSize={forecastSize}
          sizeChange={this.sizeChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("test2",state);

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