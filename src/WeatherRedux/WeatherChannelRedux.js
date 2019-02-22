import React, { Component } from 'react';
import Navbar from './NavbarRedux';
import CityCondition from '../weather/CityCondition';
import Forecaster from '../weather/Forecaster';
import { connect } from 'react-redux';
import { changeTempUnit, getWeatherData, changeForecastSize } from '../actions/ActionType';

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
    const { condition, forecast, unit, forecastSize} = this.props;
    const filteredData = forecast.slice(0, forecastSize);
    
    return (
      <div>
        <Navbar tempSwitch={ this.tempSwitch } selectCity={ this.selectCity } />
        <main>
            <CityCondition data={condition} unit={unit} />
            <Forecaster data={filteredData} unit={unit} forecastSize={forecastSize} onSizeChange={this.sizeChange}/>
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
    forecastSize: state.options.forecastSize
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitch: unit => dispatch(changeTempUnit(unit)),
    getData: (citycode) => dispatch(getWeatherData(citycode)),
    changeForecastSize: (size) => dispatch(changeForecastSize(size))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherChannelRedux)