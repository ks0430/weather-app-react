import React, { Component } from 'react';
// Without redux
// import WeatherChannel from './weather/WeatherChannel';
// Within redux
import WeatherRedux from './WeatherRedux/WeatherRedux';


import "./styles/main.css";
import WeatherChannel from './weather/WeatherChannel';

class App extends Component {
  render() {
    return (
      <div>
        {/* <WeatherRedux /> */}
        <h1>Origin without redux</h1>
        <WeatherChannel/>
      </div>
    );
  }
}

export default App;
