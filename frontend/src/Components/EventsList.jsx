import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import EventsCard from './EventsCard'

const EventsList = () => {
    const {data}=useSelector((store)=>store.events)
  return (
    <Box p="10px" mt="20px" display={"grid"} gridTemplateColumns="repeat(3,1fr)" gap={"20px 20px"}>
        {data?.map((el)=>{
            return <EventsCard key={el._id} data={el} />
        })}
    </Box>
  )
}

export default EventsList