import { CHANGE_COLOR } from "../actions/ActionTypes";
import * as color from "../contants/constants";

const initialState = {
  color: color.RED
}

export const trafficLightReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      if (action.currentColor === color.RED) state.color = color.ORANGE
      if (action.currentColor === color.ORANGE) state.color = color.GREEN
      if (action.currentColor === color.GREEN) state.color = color.RED
      // console.log(state, "abc");
      return {...state};
    default:
      // state not change
      return state;
  }
}