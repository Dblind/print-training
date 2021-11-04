import { applyMiddleware, combineReducers, createStore } from "redux";
import authenticationReducer from "./AuthenticationReducer";
import trainingPageReducer from "./trainingPageReducer";
import { reducer as FormReducer } from "redux-form";
import thunk from "redux-thunk";
import { reducerToExport } from ".";



// const redusers = combineReducers({
//   trainingPage: trainingPageReducer,
//   authentication: authenticationReducer,
//   form: FormReducer,
// })
const redusers = combineReducers({
  ...reducerToExport,
  form: FormReducer,
})

const store = createStore(redusers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export default store;