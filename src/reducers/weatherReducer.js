import { CHANGE_WEATHER_CONDITION, CHANGE_WEATHER_FORECAST } from '../actions/ActionType';

const initialState = {
  condition:{},
  forecast:[]
};

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_WEATHER_CONDITION:
      return {
        ...state,
        condition: action.condition
      }
    case CHANGE_WEATHER_FORECAST:
      return {
        ...state,
        forecast: action.forecast
      }
    default:
      return state;
  }
}

export default weatherReducer;