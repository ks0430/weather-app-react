import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Forecaster from './Forecaster';
import CityCondition from './CityCondition';

export default class WeatherChannel extends Component {

  state = {
    condition: {
      city: 'Brisbane, Au',
      humidity: 62,
      windSpeed: 230,
      windDirection: 'east',
      temp: {
        C: 26, 
        F:70
      }
    },
    forecastData: [
      {
        day: 'Fri',
        time: '10:00',
        high: {C: '37',F: '20'},
        low: {C: '30', F: '16'}
      },
      {
        day: 'Fir',
        time: '13:00',
        high: {C: '27',F: '10'},
        low: {C: '30', F: '16'}
      },
      {
        day: 'Mon',
        time: '13:00',
        high: {C: '21',F: '10'},
        low: {C: '18', F: '8'}
      }
    ],
    unit: 'F'
  }

  // if use simple function, then this will refer to button component
  tempSwitch = () =>{
    const unit = this.state.unit === 'C' ? 'F' : 'C';
    this.setState({unit});
  }


  render() {
    const{condition, forecastData, unit} = this.state;
    return (
      <div className="weather-channel__container">
        <Header />
        <Navbar tempSwitch={this.tempSwitch} />
        <main>
            <CityCondition data={condition} unit={unit} />
            <Forecaster data={forecastData} unit={unit}/>
        </main>
        <Footer />
      </div>
    )
  }
}
