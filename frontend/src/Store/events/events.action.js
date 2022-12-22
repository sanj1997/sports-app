import instance from "../../middleware/axios.middleware"
import { CREATE_EVENT_ERROR, CREATE_EVENT_LOADING, CREATE_EVENT_SUCCESS, GET_ALL_EVENTS_ERROR, GET_ALL_EVENTS_LOADING, GET_ALL_EVENTS_SUCCESS, GET_EVENT_BOOKINGS_ERROR, GET_EVENT_BOOKINGS_LOADING, GET_EVENT_BOOKINGS_SUCCESS, GET_SINGLE_EVENTS_ERROR, GET_SINGLE_EVENTS_LOADING, GET_SINGLE_EVENTS_SUCCESS, MY_EVENTS_BOOKED_ERROR, MY_EVENTS_BOOKED_LOADING, MY_EVENTS_BOOKED_SUCCESS, POST_BOOK_EVENT_ERROR, POST_BOOK_EVENT_LOADING, POST_BOOK_EVENT_SUCCESS, UPDATE_EVENT_BOOKING_ERROR, UPDATE_EVENT_BOOKING_LOADING, UPDATE_EVENT_BOOKING_SUCCESS } from "./events.type"
import axios from "axios"

const APP_URL=process.env.REACT_APP_URL
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

export const getAllEvents=(filter,query)=>async(dispatch)=>{
    dispatch({type:GET_ALL_EVENTS_LOADING})
    try{
       const response=await axios(`${APP_URL}events?filter=${filter}&query=${query}`)
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

export const getBookings=()=>async(dispatch)=>{
    dispatch({type:GET_EVENT_BOOKINGS_LOADING})
    try{
        const response=await instance("/bookings")
        dispatch({type:GET_EVENT_BOOKINGS_SUCCESS,payload:response.data.data})
    }catch(e){
        dispatch({type:GET_EVENT_BOOKINGS_ERROR})
    }
}

export const updateBooking=(id,data)=>async(dispatch)=>{
    dispatch({type:UPDATE_EVENT_BOOKING_LOADING})
    try{
       const response=await instance.patch(`/bookings/${id}`,data)
       dispatch({type:UPDATE_EVENT_BOOKING_SUCCESS})
       return response
    }catch(e){
       dispatch({type:UPDATE_EVENT_BOOKING_ERROR})
       return Promise.reject(e)
    }
}

export const getMyBookings=()=>async(dispatch)=>{
    dispatch({type:MY_EVENTS_BOOKED_LOADING})
    try{
         const response=await instance(`/bookings/mybookings`)
         dispatch({type:MY_EVENTS_BOOKED_SUCCESS,payload:response.data.data})
    }catch(e){
        dispatch({type:MY_EVENTS_BOOKED_ERROR})
    }
}