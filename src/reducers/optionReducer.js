import { CHANGE_CITY_CODE, CHANGE_TEMP_UNIT, CHANGE_FORECAST_SIZE} from "../actions/ActionType";

const initialState = {
  curCitycode: 7839562,
  tempUnit: "C",
  forecastSize: 5
}

const optionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_CITY_CODE:
      return {...state, curCitycode: action.curCity}
    case CHANGE_TEMP_UNIT:
      return {...state, tempUnit: action.unit }
    case CHANGE_FORECAST_SIZE:
      return {...state, forecastSize: action.forecastSize}
    default:
      return state;
  }
}

export default optionsReducer;