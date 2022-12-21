const BookedEventsModel = require("../models/bookedEvents.model")

const createBooking=async(data)=>{
     let response
     try{
         const newBooking=await BookedEventsModel.create(data)
         response={message:"Successful"}
     }catch(e){
        response={message:e.message}
     }
   return response  
}

const getBookings=async(id)=>{
    let response
    try{
        const allBookings=await BookedEventsModel.find({organizerID:id})
        response={message:"Successful",data:allBookings}
    }catch(e){
        response={message:e.message}
    }
    return response
}
module.exports={createBooking,getBookings}