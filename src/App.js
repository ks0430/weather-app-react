import React, { Component } from 'react';
// Within redux
import WeatherRedux from './WeatherRedux/WeatherRedux';
import "./styles/main.css";
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div>
        <WeatherRedux />
      </div>
    );
  }
}

export default App;
