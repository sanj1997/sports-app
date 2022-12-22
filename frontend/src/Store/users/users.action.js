import axios from "axios"
import instance from "../../middleware/axios.middleware"
import { GET_USER_DETAILS_ERROR, GET_USER_DETAILS_LOADING, GET_USER_DETAILS_SUCCESS, USER_SIGN_IN_ERROR, USER_SIGN_IN_LOADING, USER_SIGN_IN_SUCCESS, USER_SIGN_OUT, USER_SIGN_UP_ERROR, USER_SIGN_UP_LOADING, USER_SIGN_UP_SUCCESS } from "./users.type"
const APP_URL=process.env.REACT_APP_URL
export const userSignUp=(creds)=>async(dispatch)=>{
    dispatch({type:USER_SIGN_UP_LOADING})
    try{
         const response=await axios.post(`${APP_URL}users/sign-up`,creds)
         dispatch({type:USER_SIGN_UP_SUCCESS})
         return response
    }catch(e){
        dispatch({type:USER_SIGN_UP_ERROR})
        return Promise.reject(e)
    }
}

export const userSignIn=(creds)=>async(dispatch)=>{
         dispatch({type:USER_SIGN_IN_LOADING})
         try{
            const response=await axios.post(`${APP_URL}users/sign-in`,creds)
            dispatch({type:USER_SIGN_IN_SUCCESS,payload:response.data})
            return response
         }catch(e){
            dispatch({type:USER_SIGN_IN_ERROR})
            return Promise.reject(e)
         }
}

export const getUserDetails=()=>async(dispatch)=>{
     dispatch({type:GET_USER_DETAILS_LOADING})
     try{
         const response=await instance.get("/users/details")
         dispatch({type:GET_USER_DETAILS_SUCCESS,payload:response.data.data})
     }catch(e){
        dispatch({type:GET_USER_DETAILS_ERROR})
     }
}

export const userSignOut=()=>{
    return ({type:USER_SIGN_OUT})
}