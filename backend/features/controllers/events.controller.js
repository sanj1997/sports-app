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

module.exports={createEvent}