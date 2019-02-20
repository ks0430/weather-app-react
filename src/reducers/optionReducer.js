import { CHANGE_CITY, CHANGE_TEMP_UNIT} from "../actions/ActionType";

const initialState = {
  curCity: "Brisbane",
  tempUnit: "C"
}

const optionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_CITY:
      return {...state, curCity: action.curCity}
    case CHANGE_TEMP_UNIT:
      return {...state, tempUnit: action.unit }
    default:
      return state;
  }
}

export default optionsReducer;