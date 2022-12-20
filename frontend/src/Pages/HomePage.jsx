import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EventsList from '../Components/EventsList'
import { getAllEvents } from '../Store/events/events.action'
import { getUserDetails } from '../Store/users/users.action'

const HomePage = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUserDetails())
    },[])
    useEffect(()=>{
       dispatch(getAllEvents())
    },[])
  return (
    <Box>
        <EventsList/>
    </Box>
  )
}

export default HomePage