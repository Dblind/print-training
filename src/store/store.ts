import { applyMiddleware, combineReducers, createStore } from "redux";
// import authenticationReducer from "./AuthenticationReducer";
// import trainingPageReducer from "./trainingPageReducer";
import { reducer as FormReducer } from "redux-form";
import thunk from "redux-thunk";
import { reducersToStore } from ".";
import authentication, { authenticationReducer, IState } from "./Authentication/reducers";
import trainingPage, { IStateTraininPage } from "./TrainingPage/reducer";



// const redusers = combineReducers({
//   trainingPage: trainingPageReducer,
//   authentication: authenticationReducer,
//   form: FormReducer,
// })

export interface RootState {
  authentication: IState,
  trainingPage: IStateTraininPage,
  form: any,
}

const reducers = combineReducers({
  ...reducersToStore,
  form: FormReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export default store;


export type TAppStore = ReturnType<typeof reducers>;