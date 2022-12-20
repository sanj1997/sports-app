import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleEvent } from '../Store/events/events.action'
import { getUserDetails } from '../Store/users/users.action'

const EventDetailsPage = () => {
  const params=useParams()
  const dispatch=useDispatch()
  const {singleEvent,loading}=useSelector((store)=>store.events)
  console.log(singleEvent,"hello")
  useEffect(()=>{
     dispatch(getSingleEvent(params.id))
  },[params.id])
  useEffect(()=>{
    dispatch(getUserDetails())
},[])
  return (
    <Box>
         <Text mt="20px" fontWeight={"bold"} fontSize="2xl" textAlign={"center"}>Event Details</Text>
         <Flex  p="20px" flexDirection={"column"} justifyContent="space-between" m="auto" mt="10px" gap="15px" w={"30%"}>
            <Text fontWeight={"bold"}>Event name: {singleEvent?.name}</Text>
            <Text fontWeight={"bold"}>Event details: {singleEvent?.description}</Text>
            <Text fontWeight={"bold"}>Place: {singleEvent?.place}</Text>
            <Text fontWeight={"bold"}>Date of event: {singleEvent?.date}</Text>
            <Text fontWeight={"bold"}>Starting at: {singleEvent?.time}</Text>
            <Text fontWeight={"bold"}>Available seats: {singleEvent?.capacity}</Text>
            <Button disabled={singleEvent?.capacity==0}>Join</Button>
         </Flex>
    </Box>
  )
}

export default EventDetailsPage