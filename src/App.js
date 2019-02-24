import React, { Component } from 'react';
// Without redux
// import WeatherChannel from './weather/WeatherChannel';
// Within redux
import WeatherRedux from './WeatherRedux/WeatherRedux';
import WeatherApp from './weather/WeatherApp';
import "./styles/main.css";
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div>
        <WeatherRedux />
        {/* <WeatherApp/> */}
      </div>
    );
  }
}

export default App;
