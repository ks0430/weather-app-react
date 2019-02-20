import React, { Component } from 'react';
import Header from '../weather/Header';
import Footer from '../weather/Footer';
import WeatherChannelRedux from './WeatherChannelRedux';

import { Provider } from 'react-redux';
import store from '../store';

export default class WeatherRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="weather-channel__container">
          <Header />
          <WeatherChannelRedux />
          <Footer />
        </div>
      </Provider>
    )
  }
}
