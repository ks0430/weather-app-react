import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Forecaster from './Forecaster';
import CityCondition from './CityCondition';
import { fetchCurrentData, fetchForecastData, fetchCityList } from '../api/weather';


export default class WeatherChannel extends Component {

  state = {
    condition: {},
    forecast: [],
    unit: 'C',
    curCity: 'Brisbane',
    curSize: 5,
    curCitycode: 7839562
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

  changeCity = (e) => {
    const city = e.target.value;

    this.setState({
      curCity: city
    }, ()=> {
    console.log(this.state.curCity);
    })
  }

  searchCity = async() => {
    const { curCity } = this.state;
    const data = await fetchCurrentData(curCity, 'au')
    console.log("test",data);
    this.setState({condition:data});
  }


  selectCity = async (option) => {
    console.log(option);
    const cityCode = option.value;
    const condition = await fetchCurrentData(null, null, cityCode);
    const forecastData = await fetchForecastData(null, null, cityCode);
    this.setState({condition, forecastData});
  }

  sizeChange = (size) => {

    this.setState({curSize: size});
  }


  render() {
    console.log("test",process.env.REACT_APP_APIURL);
    const{ condition, forecast, unit, curCity, curSize, curCitycode } = this.state;

    const filteredData = forecast.slice(0, curSize);


    return (
      <div className="weather-channel__container">
        <Header />
        <Navbar tempSwitch={this.tempSwitch} curCity={curCity} changeCity={this.changeCity} searchCity={this.searchCity} selectCity={this.selectCity} />
        <main>
            <CityCondition data={condition} unit={unit} />
            <Forecaster data={filteredData} unit={unit} onSizeChange={this.sizeChange}/>
        </main>
        <Footer />
      </div>
    )
  }
}
