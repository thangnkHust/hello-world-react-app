import * as type from "./ActionTypes"

export const changeColor = (currentColor) => {
  return {
    type: type.CHANGE_COLOR,
    currentColor
  }
}