import { GET_USER_DETAILS_ERROR, GET_USER_DETAILS_LOADING, GET_USER_DETAILS_SUCCESS, USER_SIGN_IN_ERROR, USER_SIGN_IN_LOADING, USER_SIGN_IN_SUCCESS, USER_SIGN_OUT, USER_SIGN_UP_ERROR, USER_SIGN_UP_LOADING, USER_SIGN_UP_SUCCESS } from "./users.type"

const initialState={
   loading:false,
   error:false,
   asv:JSON.parse(localStorage.getItem("asv"))||"",
   csv:JSON.parse(localStorage.getItem("csv"))||"",
   name:"",
   userId:""
}

const userReducer=(state=initialState,{type,payload})=>{
    switch(type){
       case USER_SIGN_UP_LOADING:return {
        ...state,loading:true
       } 
       case USER_SIGN_UP_SUCCESS:return {
        ...state,loading:false
       }
       case USER_SIGN_UP_ERROR:return {
        ...state,loading:false,error:true
       }
       case USER_SIGN_IN_LOADING:return {
        ...state,loading:true
       }
       case USER_SIGN_IN_SUCCESS:
       localStorage.setItem("asv",JSON.stringify(payload.accessToken)) 
       localStorage.setItem("csv",JSON.stringify(payload.refreshToken)) 
       return {
        ...state,loading:false,asv:payload.accessToken,csv:payload.refreshToken,name:payload.name,userId:payload.id
       }
       case USER_SIGN_IN_ERROR:return {
        ...state,loading:false,error:true
       }
       case GET_USER_DETAILS_LOADING:return {
        ...state,loading:true
       }
       case GET_USER_DETAILS_SUCCESS:return {
        ...state,loading:false,name:payload.name,userId:payload.id
       }
       case GET_USER_DETAILS_ERROR:return {
        ...state,loading:false,error:true
       }
       case USER_SIGN_OUT:
       localStorage.removeItem("asv")
       localStorage.removeItem("csv") 
       return {
        ...state,asv:"",csv:"",name:"",userId:"",
       }
       default: return state
    }
}
export default userReducer

