import { combineReducers, createStore } from "redux";
import trainingPageReducer from "./trainingPageReducer";


const redusers = combineReducers({
  trainingPage: trainingPageReducer
})

const store = createStore(redusers);

window.store = store;

export default store;