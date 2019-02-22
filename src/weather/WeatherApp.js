import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import WeatherChannel from './WeatherChannel';


export default class WeatherApp extends Component {
  render() {
    return (
      <div className="weather-channel__container">
      <Header />
      <WeatherChannel />
      <Footer />
    </div>
    )
  }
}
