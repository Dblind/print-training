import { combineReducers } from "redux";
import { AuthActionTypes, TAction } from "./actions";


const initialState = {
  isFetching: false,
  conditionMessage: "null",
  isAuthorized: false,
  userId: 19,
  login: "guest",
  password: "guest",
  myTexts: ["guest text"],
}

export interface IAuthenticationState {
  isFetching: boolean,
  isAuthorized: boolean,
  conditionMessage: string,
  userId: number,
  login: string,
  password: string,
  myTexts: string[],
}

export const authenticationReducer = (state = initialState, action: TAction): IAuthenticationState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: action.isAuthorized,
      }
    };
    case AuthActionTypes.SET_AUTHORIZED_USER: {
      return {
        ...state,
        isAuthorized: true,
        userId: action.userData.id,
        login: action.userData.login,
        password: action.userData.password,
      }
    };
    case AuthActionTypes.IS_FETCHING: {
      return {
        ...state,
        isFetching: action.condition,
      }
    };
    case AuthActionTypes.SET_CONDITION_MESSAGE: {
      return {
        ...state,
        conditionMessage: action.message,
      }
    };
    case AuthActionTypes.SET_MY_TEXTS: {
      return {
        ...state,
        myTexts: action.texts,
      }
    }

    default: return state;
}}

// export default combineReducers<IState>({ authenticationReducer, });
export default authenticationReducer;




export interface IState { authenticationReducer: IAuthenticationState, }