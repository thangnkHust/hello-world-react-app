import * as type from './ActionTypes'

export const addItem = (text) => {
  return {
    type: type.ADD_ITEM,
    text
  }
}

export const deleteItem = (id) => {
  return {
    type: type.DELETE_ITEM,
    id
  }
}

export const markItem = (id) => {
  return {
    type: type.MARK_ITEM,
    id
  }
}

export const updateFilter = (status) => {
  return {
    type: type.UPDATE_FILTER,
    status
  }
}
