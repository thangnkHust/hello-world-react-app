import { CHANGE_COLOR } from "./ActionTypes"

export const changeColor = (currentColor) => {
  return {
    type: CHANGE_COLOR,
    currentColor
  }
}