import {
  GETLIVECARDS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  USER_LOGOUT,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from "./AuthActionType";
import axios from "axios";
export const SignInSuccess = (payload) => {
  console.log(payload, "success");
  return {
    type: USER_SIGNIN_SUCCESS,
    payload,
  };
};

export const SignUpReq = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};
export const SignUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};
export const UserLogOut = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const saveCards = (payload) => {
  return {
    type: GETLIVECARDS,
    payload,
  };
};
export const SigninApi = (payload) => (dispatch) => {
  console.log("payload", payload);
  return axios.post("http://localhost:2244/signin", payload).then((res) => {
    dispatch(SignInSuccess(res.data.data));
  });
};

export const SignUpApi = (payload) => (dispatch) => {
  dispatch(SignUpReq());
  //console.log("payload", payload);
  return axios.post("http://localhost:2244/signup", payload).then((res) => {
    dispatch(SignUpSuccess());
  });
};

export const PostLiveCardsApi = (payload) => (dispatch) => {
  return axios.post("http://localhost:2244/posts", payload).then((res) => {
    dispatch(saveCards(res.data.data));
    //console.log(res.data.data);
  });
};

export const GetLiveCardsApi = (payload) => (dispatch) => {
  return axios.get("http://localhost:2244/posts").then((res) => {
    dispatch(saveCards(res.data.data));
    console.log(res.data.data);
  });
};
