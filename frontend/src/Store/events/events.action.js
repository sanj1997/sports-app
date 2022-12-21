import instance from "../../middleware/axios.middleware"
import { CREATE_EVENT_ERROR, CREATE_EVENT_LOADING, CREATE_EVENT_SUCCESS, GET_ALL_EVENTS_ERROR, GET_ALL_EVENTS_LOADING, GET_ALL_EVENTS_SUCCESS, GET_SINGLE_EVENTS_ERROR, GET_SINGLE_EVENTS_LOADING, GET_SINGLE_EVENTS_SUCCESS, POST_BOOK_EVENT_ERROR, POST_BOOK_EVENT_LOADING, POST_BOOK_EVENT_SUCCESS } from "./events.type"
import axios from "axios"
export const createEvent=(data)=>async(dispatch)=>{
     dispatch({type:CREATE_EVENT_LOADING})
     try{
         const response=await instance.post("/events/create",data)
         dispatch({type:CREATE_EVENT_SUCCESS})
         return response
     }catch(e){
         dispatch({type:CREATE_EVENT_ERROR})
         return Promise.reject(e)
     }
}

export const getAllEvents=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_EVENTS_LOADING})
    try{
       const response=await axios("http://localhost:8080/events")
       dispatch({type:GET_ALL_EVENTS_SUCCESS,payload:response.data.data})
    }catch(e){
       dispatch({type:GET_ALL_EVENTS_ERROR})
    }
}

export const getSingleEvent=(id)=>async(dispatch)=>{
     dispatch({type:GET_SINGLE_EVENTS_LOADING})
     try{
       const response=await instance.get(`/events/${id}`)
       dispatch({type:GET_SINGLE_EVENTS_SUCCESS,payload:response.data.data})
     }catch(e){
        dispatch({type:GET_SINGLE_EVENTS_ERROR})
     }
}

export const createBooking=(data)=>async(dispatch)=>{
    dispatch({type:POST_BOOK_EVENT_LOADING})
    try{
        const response=await instance.post("/bookings",data)
        dispatch({type:POST_BOOK_EVENT_SUCCESS})
        return response
    }catch(e){
        dispatch({type:POST_BOOK_EVENT_ERROR})
        return Promise.reject(e)
    }
}