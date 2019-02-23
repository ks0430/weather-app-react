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
        const conditionStatus = action.status ? action.status : '';
        const conditionError = action.error ? action.error : ''; 
        const conditionResponse = action.response ? action.response : {};
        return {
          ...state,
          conditionData: {
            ...state.conditionData,
            status: conditionStatus,
            error: conditionError,
            response: conditionResponse
          }
        };
    case FETCH_WEATHER_FORECAST:
    const forecastStatus = action.status ? action.status : '';
    const forecastError = action.error ? action.error : ''; 
    const forecastResponse = action.response ? action.response : [];
      return {
        ...state,
        forecastData: {
          status: forecastStatus,
          error: forecastError,
          response: forecastResponse
        }
      };
    default:
      return state;
  }
}

export default weatherReducer;