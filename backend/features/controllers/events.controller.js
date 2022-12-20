const EventsModel = require("../models/events.model")


const createEvent=async(name,description,timing,place,capacity,userId)=>{
    let response
    try{
        const newEvent=await EventsModel.create({name,description,timing,place,capacity,userId})
        response={message:"Successful"}
    }catch(e){
        response={message:e.message}
    }
    return response
}
const getAllEvents=async()=>{
    let response;
    try{
         const allEvents=await EventsModel.find()
         response={message:"Successful",data:allEvents}
    }catch(e){
        response={message:e.message}
    }
    return response
}

const getSingleEvent=async(id)=>{
    let response;
     try{
          const singleEvent=await EventsModel.findOne({_id:id})
          const details=singleEvent.timing.split("T")
          const date=details[0]
          const time=details[1]
          const data={
            name:singleEvent.name,
            place:singleEvent.place,
            date:date,
            time:time,
            capacity:singleEvent.capacity,
            description:singleEvent.description
          }
          response={message:"Successful",data:data}
     }catch(e){
          response={message:e.message}
     }
    return response 
}
module.exports={createEvent,getAllEvents,getSingleEvent}