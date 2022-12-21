import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookingCard from '../Components/BookingCard'
import { getMyBookings } from '../Store/events/events.action'
import { getUserDetails } from '../Store/users/users.action'

const MyBookingsPage = () => {
    const dispatch=useDispatch()
    const {myBookings}=useSelector((store)=>store.events)
  useEffect(()=>{
     dispatch(getUserDetails())
  },[])    
  useEffect(()=>{
      dispatch(getMyBookings())
  },[])
      
  return (
    <Box>
        <Text textAlign={"center"} fontWeight="bold" mt={"20px"} fontSize="2xl">Bookings</Text>
        <Box p="10px" mt="20px" display={"grid"} gridTemplateColumns="repeat(3,1fr)" gap={"20px 20px"}>
          {myBookings?.map((el)=>{
             return <BookingCard key={el._id} data={el}/>
          })}
        </Box>
    </Box>
  )
}

export default MyBookingsPage