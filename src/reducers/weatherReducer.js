import { FETCH_WEATHER_FORECAST, FETCH_WEATHER_CONDITION } from '../actions/ActionType';

const initialState = {
  conditionData:{
    status: "",
    error: "",
    response: {}
  },
  forecastData:{
    status: "",
    error: "",
    response: []
  }
};

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WEATHER_CONDITION:
      // Process undifeined to empty init empty string.
      // React can not pass undifined value to its children.
      return {
        ...state,
        conditionData: {
          status: action.status || '',
          error: action.error || '',
          response: action.response || state.conditionData.response
        }
      };
    case FETCH_WEATHER_FORECAST:
      return {
        ...state,
        forecastData: {
          status: action.status || '',
          error: action.error || '',
          response: action.response || state.forecastData.response
        }
      };
    default:
      return state;
  }
}



export default weatherReducer;