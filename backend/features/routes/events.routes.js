const express=require("express")
const { createEvent } = require("../controllers/events.controller")
const authMiddleware = require("../middlewares/users.middleware")
const route=express.Router()

route.post("/create",authMiddleware,async(req,res)=>{
    const {name,description,timing,place,capacity,userID}=req.body
     const response=await createEvent(name,description,timing,place,capacity,userID)
     if(response.message==="Successful")
     {
        return res.send(response)
     }
    return res.status(401).send(response) 
})
module.exports=route