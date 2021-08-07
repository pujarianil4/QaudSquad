import {SIGNUP_REQUEST, SIGNUP_SUCCESS, USER_LOGOUT, USER_SIGNIN_SUCCESS,USER_SIGNUP_SUCCESS} from "./AuthActionType"
import axios from "axios"
export const SignInSuccess=(payload)=>{
    console.log(payload,"success");
    return{
        type: USER_SIGNIN_SUCCESS,
        payload
    }
}

export const SignUpReq=()=>{
   
    return{
        type: SIGNUP_REQUEST,
        
    }
}
export const SignUpSuccess=()=>{
   
    return{
        type: SIGNUP_SUCCESS,
        
    }
}
export const UserLogOut=()=>{
   
    return{
        type: USER_LOGOUT,
        
    }
}
export const SigninApi=(payload)=>(dispatch)=>{

console.log("payload",payload);
    return axios.post("http://localhost:2244/signin",payload)
    .then((res)=>{
        dispatch(SignInSuccess(res.data.data))
    })
}

export const SignUpApi=(payload)=>(dispatch)=>{
     dispatch(SignUpReq())
    console.log("payload",payload);
        return axios.post("http://localhost:2244/signup",payload)
        .then((res)=>{
             dispatch(SignUpSuccess())
        })
    }