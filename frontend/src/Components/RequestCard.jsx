import { Button, Flex, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings, updateBooking } from '../Store/events/events.action'

const RequestCard = ({data}) => {
    const {time,place,date,createdBy,status,eventName,capacity,eventID,_id,category}=data
    const toast=useToast()
    const dispatch=useDispatch()
    const handleBookingStatus=(e)=>{
        const payload={
            capacity:capacity,
            eventID:eventID,
            status:e.target.innerText,
        }  
        dispatch(updateBooking(_id,payload)).then((res)=>{
            dispatch(getBookings()).then((res)=>{
                toast({
                    description:"Booking status updated",
                    status:"success"
                })
            })
        })
    }
  return (
    <Flex textAlign={"center"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} flexDirection={"column"} justifyContent="space-between" p={"20px"} gap="15px">
         <Text fontWeight={"bold"}>Event Name: {eventName}</Text>
         <Text fontWeight={"bold"}>Booked by: {createdBy}</Text>
         <Text fontWeight={"bold"}>Event Category: {category}</Text>
         <Text fontWeight={"bold"}>Event Date: {date}</Text>
         <Text fontWeight={"bold"}>Event Time: {time}</Text>
         <Text fontWeight={"bold"}>Event Place: {place}</Text>
         <Text fontWeight={"bold"}>Booking Status: {status}</Text>
         <Text fontWeight={"bold"}>Available Seats: {capacity}</Text>
         <Flex w={"60%"} m="auto" justifyContent="space-between">
            <Button onClick={(e)=>handleBookingStatus(e)} disabled={capacity<=0||status=="Accept"}>Accept</Button>
            <Button onClick={(e)=>handleBookingStatus(e)} disabled={status==="Reject"}>Reject</Button>
         </Flex>
    </Flex>
  )
}

export default RequestCard