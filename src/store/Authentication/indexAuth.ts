import { combineReducers } from "redux";
import { authenticationReducer } from "./reducers";

export const authRootReducer = combineReducers({
  auth3: authenticationReducer,
})

export type TAuthRootReducer = ReturnType<typeof authRootReducer>;