import { combineReducers, createStore } from "redux";
import {trafficLightReducer} from './trafficLightReducer'

const rootReducer = combineReducers({
  trafficLightReducer
});

const store = createStore(rootReducer)

export default store;