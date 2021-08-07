import { GETLIVECARDS, SIGNUP_REQUEST, SIGNUP_SUCCESS, USER_LOGOUT, USER_SIGNIN_SUCCESS } from "./AuthActionType";


const initState={
    user: JSON.parse(localStorage.getItem("codeUser")) || null,
    token:JSON.parse(localStorage.getItem("codeToken")) || null,
    auth: JSON.parse(localStorage.getItem("codeUser")) || false ,
    isLoading: false,
    liveCards:[]
}

export const AuthReducer= (state = initState,action)=>{
   
    switch (action.type) {

        case USER_SIGNIN_SUCCESS:{
         
            localStorage.setItem("codeUser",JSON.stringify(action.payload.user))
            localStorage.setItem("codeToken",JSON.stringify(action.payload.token))
            alert("SignIn Successfull !")
            return{
                ...state,
             user: action.payload.user,
             token: action.payload.token
            }
        }

        case SIGNUP_REQUEST:{
            return{
                ...state,
                isLoading:true
            }

        }
        case SIGNUP_SUCCESS:{
            alert("Registration Successfull !")
            return {
                ...state,
                isLoading:false
            }
        }
        case USER_LOGOUT:{
              localStorage.removeItem("codeUser")
              localStorage.removeItem("codeToken")
              alert("LogOut Successfull !")
            return{
                ...state,
                user:null,
                token: null 
            }
        }
        case GETLIVECARDS:{
          console.log(action);
            return {
                ...state,
                liveCards:action.payload
            }
        } 
            
    
        default:{
            return state
        }
            
    }
}