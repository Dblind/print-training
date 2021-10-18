import { applyMiddleware, combineReducers, createStore } from "redux";
import authenticationReducer from "./AuthenticationReducer";
import trainingPageReducer from "./trainingPageReducer";
import { reducer as FormReducer } from "redux-form";
import thunk from "redux-thunk";


const redusers = combineReducers({
  trainingPage: trainingPageReducer,
  authentication: authenticationReducer,
  form: FormReducer,
})

const store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;