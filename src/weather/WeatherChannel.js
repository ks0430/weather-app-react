import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Forecaster from './Forecaster';
import CityCondition from './CityCondition';
import { fetchCurrentData, fetchForecastData } from '../api/weather';


export default class WeatherChannel extends Component {

  state = {
    condition: {
      city: 'Shanghai',
      humidity: 62,
      windSpeed: 230,
      windDirection: 'east',
      temp: {
        C: 26, 
        F:70
      }
    },
    forecastData: [],
    unit: 'F',
    curCity: 'Shanghai'
  }

  async componentDidMount() {
    const { city } = this.state.condition;
    const data = await fetchCurrentData(city, 'cn');
    this.setState({condition:data});
    console.log(data);

    const forecast = await fetchForecastData(city, 'cn');
    console.log("didmount",forecast);
    this.setState({forecastData:forecast});
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

  render() {
    const{ condition, forecastData, unit, curCity } = this.state;
    return (
      <div className="weather-channel__container">
        <Header />
        <Navbar tempSwitch={this.tempSwitch} curCity={curCity} changeCity={this.changeCity} searchCity={this.searchCity} />
        <main>
            <CityCondition data={condition} unit={unit} />
            <Forecaster data={forecastData} unit={unit}/>
        </main>
        <Footer />
      </div>
    )
  }
}
