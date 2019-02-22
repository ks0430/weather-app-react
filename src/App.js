import React, { Component } from 'react';
// Without redux
// import WeatherChannel from './weather/WeatherChannel';
// Within redux
import WeatherRedux from './WeatherRedux/WeatherRedux';


import "./styles/main.css";
import WeatherApp from './weather/WeatherApp';

class App extends Component {
  render() {
    return (
      <div>
        <WeatherRedux />
        <h1>Origin without redux</h1>
        {/* <WeatherApp/> */}
      </div>
    );
  }
}

export default App;
