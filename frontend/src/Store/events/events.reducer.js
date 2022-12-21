import { CREATE_EVENT_ERROR, CREATE_EVENT_LOADING, CREATE_EVENT_SUCCESS, GET_ALL_EVENTS_ERROR, GET_ALL_EVENTS_LOADING, GET_ALL_EVENTS_SUCCESS, GET_EVENT_BOOKINGS_ERROR, GET_EVENT_BOOKINGS_LOADING, GET_EVENT_BOOKINGS_SUCCESS, GET_SINGLE_EVENTS_ERROR, GET_SINGLE_EVENTS_LOADING, GET_SINGLE_EVENTS_SUCCESS, MY_EVENTS_BOOKED_ERROR, MY_EVENTS_BOOKED_LOADING, MY_EVENTS_BOOKED_SUCCESS, POST_BOOK_EVENT_ERROR, POST_BOOK_EVENT_LOADING, POST_BOOK_EVENT_SUCCESS, UPDATE_EVENT_BOOKING_ERROR, UPDATE_EVENT_BOOKING_LOADING, UPDATE_EVENT_BOOKING_SUCCESS } from "./events.type"

const initialState={
  loading:false,
  error:false,
  data:[],
  singleEvent:{},
  bookings:[],
  myBookings:[]
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
       case POST_BOOK_EVENT_LOADING:return {
        ...state,loading:true
       }
       case POST_BOOK_EVENT_SUCCESS:return {
        ...state,loading:false
       }
       case POST_BOOK_EVENT_ERROR:return {
        ...state,error:true,loading:false
       }
       case GET_EVENT_BOOKINGS_LOADING:return {
        ...state,loading:true
       }
       case GET_EVENT_BOOKINGS_SUCCESS:return {
        ...state,loading:false,bookings:payload
       }
       case GET_EVENT_BOOKINGS_ERROR:return {
        ...state,error:true,loading:false
       }
       case UPDATE_EVENT_BOOKING_LOADING:return {
        ...state,loading:true
       }
       case UPDATE_EVENT_BOOKING_SUCCESS:return {
        ...state,loading:false
       }
       case UPDATE_EVENT_BOOKING_ERROR:return {
        ...state,loading:false,error:true
       }
       case MY_EVENTS_BOOKED_LOADING:return {
        ...state,loading:true
       }
       case MY_EVENTS_BOOKED_SUCCESS:return {
        ...state,loding:false,myBookings:payload
       }
       case MY_EVENTS_BOOKED_ERROR:return {
        ...state,loading:false,error:true
       }
       default:return state
    }
}
export default eventsReducer