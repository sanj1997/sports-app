import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RequestCard from '../Components/RequestCard'
import { getBookings } from '../Store/events/events.action'
import { getUserDetails } from '../Store/users/users.action'

const RequestsPage = () => {
    const dispatch=useDispatch()
    const {bookings}=useSelector((store)=>store.events)
    useEffect(()=>{
        dispatch(getUserDetails())
      },[])
    useEffect(()=>{
      dispatch(getBookings())
    },[])
  return (
    <Box>
        <Text textAlign={"center"} mt="20px" fontWeight={"bold"} fontSize="2xl">REQUESTS</Text>
        <Box p="10px" mt="20px" display={"grid"} gridTemplateColumns="repeat(3,1fr)" gap={"20px 20px"} >
            {bookings?.map((el)=>{
                return <RequestCard key={el._id} data={el}/>
            })}
        </Box>
    </Box>
  )
}

export default RequestsPage