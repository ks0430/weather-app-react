import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import optionReducer from './optionReducer';

// Combine children reducers
export default combineReducers({
  weatherData: weatherReducer,
  options: optionReducer
})
