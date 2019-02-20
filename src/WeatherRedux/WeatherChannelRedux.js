import React, { Component } from 'react';

import Navbar from '../weather/Navbar';
import CityCondition from '../weather/CityCondition';
import Forecaster from '../weather/Forecaster';

import { connect } from 'react-redux';
import {CHANGE_TEMP_UNIT} from '../actions/ActionType';

class WeatherChannelRedux extends Component {


  render() {
    const { condition,forecast, unit, onSwitch} = this.props;
    return (
      <div>
        <Navbar tempSwitch={() => { onSwitch(unit === "C" ? "F" : "C")}} />
        <main>
            <CityCondition data={condition} unit={unit} />
            <Forecaster data={forecast} unit={unit}/>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    condition: state.weatherData.condition,
    forecast: state.weatherData.forecast,
    unit: state.options.tempUnit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitch: (unit) => {
      dispatch({type:CHANGE_TEMP_UNIT, unit})
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherChannelRedux)