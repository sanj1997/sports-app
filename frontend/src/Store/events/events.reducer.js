import { CREATE_EVENT_ERROR, CREATE_EVENT_LOADING, CREATE_EVENT_SUCCESS, GET_ALL_EVENTS_ERROR, GET_ALL_EVENTS_LOADING, GET_ALL_EVENTS_SUCCESS, GET_SINGLE_EVENTS_ERROR, GET_SINGLE_EVENTS_LOADING, GET_SINGLE_EVENTS_SUCCESS } from "./events.type"

const initialState={
  loading:false,
  error:false,
  data:[],
  singleEvent:{},
}

const eventsReducer=(state=initialState,{type,payload})=>{
    switch(type){
       case CREATE_EVENT_LOADING:return {
        ...state,loading:true
       }
       case CREATE_EVENT_SUCCESS:return{
        ...state,loading:false
       }
       case CREATE_EVENT_ERROR:return {
        ...state,loading:false,error:true
       }
       case GET_ALL_EVENTS_LOADING:return {
        ...state,loading:true
       }
       case GET_ALL_EVENTS_SUCCESS:return {
        ...state,loding:false,data:payload
       }
       case GET_ALL_EVENTS_ERROR:return {
        ...state,error:true,loading:false
       }
       case GET_SINGLE_EVENTS_LOADING:return {
        ...state,loading:true
       }
       case GET_SINGLE_EVENTS_SUCCESS:return {
        ...state,loading:false,singleEvent:payload
       }
       case GET_SINGLE_EVENTS_ERROR:return {
        ...state,error:true,loading:false
       }
       default:return state
    }
}
export default eventsReducer