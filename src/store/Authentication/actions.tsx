import React from "react";
import { AnyAction, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TAppStore } from "..";
import { authenticationAPI } from "../../API/api";


// actions definition

export interface ISetAuthorized {
  type: AuthActionTypes.SET_AUTHORIZED,
  isAuthorized: boolean,
}

type TUserData = {
  isAuthorized: boolean,
  id: number,
  login: string,
  password: string,
}
export interface ISetAuthorizedUser {
  type: AuthActionTypes.SET_AUTHORIZED_USER,
  userData: TUserData,
}
interface ISetIsFetching { type: AuthActionTypes.IS_FETCHING, condition: boolean, };
interface ISetMyTexts { type: AuthActionTypes.SET_MY_TEXTS, texts: string[], };
interface ISetConditionMessage { type: AuthActionTypes.SET_CONDITION_MESSAGE, message: string, };

// union action

export type TAction = ISetAuthorized | ISetAuthorizedUser | ISetIsFetching | ISetMyTexts | ISetConditionMessage;

// action creators

export function setAuthorized(isAuthorized: boolean): TAction { return { type: AuthActionTypes.SET_AUTHORIZED, isAuthorized, } };
export function setAuthorizedUser(userData: TUserData): TAction { return { type: AuthActionTypes.SET_AUTHORIZED_USER, userData, } };
export function setIsFetching(condition: boolean): TAction { return { type: AuthActionTypes.IS_FETCHING, condition, } };
export function setMyTexts(texts: string[]): TAction { return { type: AuthActionTypes.SET_MY_TEXTS, texts, } };

function setConditionMessage(message: string): TAction { return { type: AuthActionTypes.SET_CONDITION_MESSAGE, message, } };


type TAuthThunk = ThunkAction<any, any, unknown, TAction>;


export const createUser = (userData: TUserData): TAuthThunk => {
  return async dispatch => {
    const response = await authenticationAPI.createUser(userData)

    // setStatusNote(<span style={{ background: "#0b3", }}>Successful login of the account.</span>);
    dispatch(setConditionMessage("Successful creation of the new account"));
    dispatch(setAuthorizedUser(response.data));
    console.log("response user data", response.data);

    // .catch(err => {
    //   dispatch(setConditionMessage({err.message}));
    // });
  }
}

export function loginUser(userData: TUserData): TAuthThunk {
  return async function (dispatch, getState) {
    dispatch({ type: AuthActionTypes.IS_FETCHING, condition: false, })
    dispatch(setIsFetching(true));
    // const response = await authenticationAPI.loginUser(formData);
    authenticationAPI.loginUser(userData)
      .then(response => {
        // setStatusNote(<span style={{ background: "#0b3", }}>Successful creation of the new account.</span>) })
        dispatch(setAuthorizedUser(response.data[0]));
        dispatch(setConditionMessage("Successful login of the account."));
        dispatch(getMyTexts());
        console.log(response.data);
      })
      .catch((err: any) => {
        dispatch(setConditionMessage(err.message));
      });
  }
}

export function sendMyText(text: string): TAuthThunk { // todo response type
  return async function (dispatch, getState) {
    const state = getState();
    authenticationAPI.sendMyTexts(getState().authentication.userId, [...getState().authentication.myTexts, text])
      .then(response => {
        if (response.statusText == "OK")
          dispatch(getMyTexts());
      })
      .catch(err => console.log("send my text err: ", err));
  }
}

export function getMyTexts(): TAuthThunk {
  return async function (dispatch: Dispatch<TAction>, getState: () => TAppStore) {
    dispatch({ type: AuthActionTypes.IS_FETCHING, condition: false, });
    const response = await authenticationAPI.getMyTexts(getState().authentication.userId);
    const data = await response.json();
    console.log(data);
    // dispatch(setMyTexts(data.texts));
  }
}




// const SET_AUTHORIZED = "pt/auth/SET_AUTHORIZED";
// const SET_AUTHORIZED_USER = "pt/auth/SET-AUTHORIZED-USER";
// const IS_FETCHING = "pt/auth/IS-FETCHING";
// const SET_CONDITION_MESSAGE = "pt/auth/SET-CONDITION-MESSAGE";
// const SET_MY_TEXTS = "pt/auth/SET-MY-TEXTS";
// const SEND_MY_TEXTS = "pt/auth/SEND-MY-TEXTS";

export enum AuthActionTypes {
  SET_AUTHORIZED = "pt/auth/SET_AUTHORIZED",
  SET_AUTHORIZED_USER = "pt/auth/SET-AUTHORIZED-USER",
  IS_FETCHING = "pt/auth/IS-FETCHING",
  SET_CONDITION_MESSAGE = "pt/auth/SET-CONDITION-MESSAGE",
  // SEND_MY_TEXTS = "pt/auth/SEND-MY-TEXTS",
  SET_MY_TEXTS = "pt/auth/SET-MY-TEXTS",
}