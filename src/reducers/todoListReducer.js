import { ADD_ITEM, MARK_ITEM, DELETE_ITEM, UPDATE_FILTER } from '../actions/ActionTypes';
import * as status from '../contants/todoList'

const initialState = {
  filter: status.ALL,
  data: [
    {
      text: 'Todo List',
      marked: true,
      id: 0
    }]
}

export function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        filter: state.filter,
        data: [{
          id: (state.data.length === 0) ? 0 : state.data[0].id + 1,
          text: action.text,
          marked: false
        }, ...state.data]
      }

    case MARK_ITEM:
      return {
        filter: state.filter,
        data: state.data.map((item) =>
          item.id === action.id ? { ...item, marked: !item.marked } : item
        )
      }
    case DELETE_ITEM:
      return {
        filter: state.filter,
        data: state.data.filter(item => item.id !== action.id)
      }
    case UPDATE_FILTER:
      return {...state, filter: action.status}
    default:
      return state
  }
}
