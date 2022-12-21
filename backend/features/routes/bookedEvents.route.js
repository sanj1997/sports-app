const express=require("express")
const { createBooking, getBookings } = require("../controllers/bookedEvents.controller")
const authMiddleware = require("../middlewares/users.middleware")
const route=express.Router()

route.post("/",authMiddleware,async(req,res)=>{
    const response=await createBooking(req.body)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

route.get("/",authMiddleware,async(req,res)=>{
     const {userID}=req.body
     const response=await getBookings(userID)
     if(response.message==="Successful")
     {
        return res.send(response)
     }
     return res.status(401).send(response)
})
module.exports=route