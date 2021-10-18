import { authenticationAPI } from "../API/api"


const initialState = {
  isFetching: false,
  conditionMessage: null,
  isAuthorized: false,
  userId: 19,
  login: "guest",
  password: "guest",
  myTexts: ["guest text"],
}

const authenticationReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: action.isAuthorized,
      }
    };
    case SET_AUTHORIZED_USER: {
      return {
        ...state,
        isAuthorized: true,
        userId: action.userData.id,
        login: action.userData.login,
        password: action.userData.password,
      }
    };
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.condition,
      }
    };
    case SET_CONDITION_MESSAGE: {
      return {
        ...state,
        conditionMessage: action.message,
      }
    };
    case SET_MY_TEXTS: {
      return {
        ...state,
        myTexts: action.texts,
      }
    }

    default: return state;
  }
}

const SET_AUTHORIZED = "SET-AUTHORIZED";
const SET_AUTHORIZED_USER = "SET-AUTHORIZED-USER";
const IS_FETCHING = "IS-FETCHING";
const SET_CONDITION_MESSAGE = "SET-CONDITION-MESSAGE";
const SET_MY_TEXTS = "SET-MY-TEXTS";
const SEND_MY_TEXTS = "SEND-MY-TEXTS";

export function setAuthorized(isAuthorized) { return { type: SET_AUTHORIZED, isAuthorized, } };
export function setAuthorizedUser(userData) { return { type: SET_AUTHORIZED_USER, userData, } };
export function setIsFetching(condition) { return { type: IS_FETCHING, condition, } };
export function setMyTexts(texts) { return { type: SET_MY_TEXTS, texts, } };

function setConditionMessage(message) { return { type: SET_CONDITION_MESSAGE, message, } };


export const createUser = userData => dispatch => {
  authenticationAPI.createUser(userData)
    .then(response => {
      // setStatusNote(<span style={{ background: "#0b3", }}>Successful login of the account.</span>);
      dispatch(setConditionMessage(<span style={{ background: "#0b3", }}>Successful creation of the new account.</span>));
      dispatch(setAuthorizedUser(response.data));
      console.log("response user data", response.data);
    })
    .catch(err => {
      dispatch(setConditionMessage(<span style={{ background: "#b03", }}>{err.message}</span>));
    });
}


export const loginUser = (userData) => async (dispatch) => {
  dispatch(setIsFetching(true));

  // const response = await authenticationAPI.loginUser(formData);
  authenticationAPI.loginUser(userData)
    .then(response => {
      // setStatusNote(<span style={{ background: "#0b3", }}>Successful creation of the new account.</span>) })
      dispatch(setAuthorizedUser(response.data[0]));
      dispatch(setConditionMessage(<span style={{ background: "#0b3", }}>Successful login of the account.</span>));
      dispatch(getMyTexts());
      console.log(response.data);
    })
    .catch(err => {
      dispatch(setConditionMessage(<span style={{ background: "#b03", }}>{err.message}</span>));
    });
}

export function getMyTexts() {
  return async function (dispatch, getState) {
    const response = await authenticationAPI.getMyTexts(getState().authentication.userId);
    const data = await response.json();
    console.log(data);
    dispatch(setMyTexts(data.texts));
  }
}

export function sendMyText(text) {
  return function (dispatch, getState) {
    const state = getState();
    authenticationAPI.sendMyTexts(getState().authentication.userId, [...getState().authentication.myTexts, text])
      .then(response => {
        if (response.statusText == "OK")
          dispatch(getMyTexts());
      })
      .catch(err => console.log("send my text err: ", err));
  }
}

export default authenticationReducer;