import { combineReducers, createStore } from "redux";
import {trafficLightReducer} from './trafficLightReducer'
import {todoListReducer} from './todoListReducer'

const rootReducer = combineReducers({
  trafficLightReducer, 
  todoListReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;