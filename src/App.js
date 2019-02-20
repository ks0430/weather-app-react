import React, { Component } from 'react';
// Without redux
// import WeatherChannel from './weather/WeatherChannel';
// Within redux
import WeatherRedux from './WeatherRedux/WeatherRedux';


import "./styles/main.css";

class App extends Component {
  render() {
    return (
      <WeatherRedux />
    );
  }
}

export default App;
