import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const EventsCard = ({data}) => {
    const {name,place,timing,capacity,_id}=data
    const arr=timing.split("T")
    const date=arr[0]
    const time=arr[1]
  return (
    <Flex p="20px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} flexDirection={"column"} gap="10px" justifyContent="space-between">
          <Text fontWeight={"bold"}>Event Name: {name}</Text>
          <Text fontWeight={"bold"}>Place: {place}</Text>
          <Text fontWeight={"bold"}>Time: {time}</Text>
          <Text fontWeight={"bold"}>Date: {date}</Text>
          <Text fontWeight={"bold"}>Available Seats: {capacity}</Text>
          <Link to={`/event-details/${_id}`}><Text textDecorationLine={"underline"} textUnderlineOffset="5px">Click here for more information</Text></Link>
    </Flex>
  )
}

export default EventsCard