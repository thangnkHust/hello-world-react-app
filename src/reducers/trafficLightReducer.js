import { CHANGE_COLOR } from "../actions/ActionTypes";
import { GREEN, ORANGE, RED } from "../contants/constants";

const initialState = {
  color: GREEN
}

export const trafficLightReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      if (action.currentColor === RED) state.color = ORANGE
      if (action.currentColor === ORANGE) state.color = GREEN
      if (action.currentColor === GREEN) state.color = RED
      return {...state};
    default:
      // state not change
      return state;
  }
}