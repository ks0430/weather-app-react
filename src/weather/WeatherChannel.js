import React, { Component } from 'react';
import Navbar from './Navbar';
import Forecaster from './Forecaster';
import CityCondition from './CityCondition';
import { fetchCurrentData, fetchForecastData } from '../api/weather';


export default class WeatherChannel extends Component {

  // initial city is brisbane
  state = {
    condition: {},
    forecast: [],
    unit: 'C',
    forecastSize: 5,
    curCitycode: 7839562,
  }

  async componentDidMount() {
    // Initial weather channel data.
    // Initial city is Brisbane: 7839562

    const { curCitycode } = this.state;

    const condition = await fetchCurrentData(curCitycode);
    this.setState({condition});

    const forecast = await fetchForecastData(curCitycode);
    this.setState({forecast});
  }

  // if use simple function, then this will refer to button component
  tempSwitch = () => {
    const unit = this.state.unit === 'C' ? 'F' : 'C';
    this.setState({unit});
  }

  selectCity = async (option) => {
    const cityCode = option.value;
    const condition = await fetchCurrentData(cityCode);
    const forecast= await fetchForecastData(cityCode);
    this.setState({condition, forecast});
  }

  sizeChange = (size) => {
    this.setState({forecastSize: size});
  }

  render() {
    const{ condition, forecast, unit, forecastSize } = this.state;
    const filteredData = forecast.slice(0, forecastSize);

    return (
      <React.Fragment>
        <Navbar tempSwitch={this.tempSwitch}  selectCity={this.selectCity} />
        <main>
            <CityCondition data={condition} unit={unit} />
            <Forecaster data={filteredData} unit={unit} forecastSize={forecastSize} onSizeChange={this.sizeChange}/>
        </main>  
      </React.Fragment>
    )
  }
}
