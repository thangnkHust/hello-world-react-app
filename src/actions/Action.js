import { CHANGE_COLOR } from "./ActionTypes"

export const changeColor = (currentColor) => {
  console.log(currentColor);
  return {
    type: CHANGE_COLOR,
    currentColor
  }
}