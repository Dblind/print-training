import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authRootReducer } from "./Authentication/indexAuth";
import authentication, { authenticationReducer, IState } from "./Authentication/reducers";
import trainingPage, { IStateTraininPage } from "./TrainingPage/reducer";

export interface RootState {
  authentication: IState,
  trainingPage: IStateTraininPage,
}

const reducers = combineReducers({
  authentication,
  trainingPage,
});

export const reducersToStore = {
  authentication,
  trainingPage,
}

// const store_index = createStore(reducers, applyMiddleware(thunk));
// export default store_index;
// export type TAppStore = ReturnType<typeof reducers>;





//************** */
export const store_new = createStore(authRootReducer, applyMiddleware(thunk));
export type TAppStore_new = ReturnType<typeof authRootReducer>;