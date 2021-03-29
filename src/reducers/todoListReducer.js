import { ADD_ITEM, MARK_ITEM } from '../actions/ActionTypes';

const initialState = [{
  text: 'Todo List',
  marked: true,
  id: 0
}]

export function todoListReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ITEM:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        text: action.text,
        marked: false
      }, ...state]
    
    case MARK_ITEM:
      return state.map((item) =>
        item.id === action.id ? {...item, marked: !item.marked} : item 
      )
    // case CLEAR_MARKED:
      
    default:
      return state
  }
}
