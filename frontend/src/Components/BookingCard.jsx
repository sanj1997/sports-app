import { Flex, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import AttendeesList from './AttendeesList'

const BookingCard = ({data}) => {
    const {name,place,date,time,capacity,attendees,status,category}=data
  return (
    <Flex position={"relative"} p="20px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} flexDirection={"column"} gap="10px" justifyContent="space-between">
          <Text fontWeight={"bold"}>Event Name: {name}</Text>
          <Text fontWeight={"bold"}>Event Category: {category}</Text>
          <Text fontWeight={"bold"}>Event Place: {place}</Text>
          <Text fontWeight={"bold"}>Event Time: {time}</Text>
          <Text fontWeight={"bold"}>Event Date: {date}</Text>
          <Text fontWeight={"bold"}>Booking Status: {status}</Text>
          <Text fontWeight={"bold"}>Available Seats: {capacity}</Text>
          {attendees.length>=1?<Text fontWeight={"bold"}>Attendees :</Text>:null}
          {attendees.length>=1?<UnorderedList>{attendees.map((el,i)=>{
                return <AttendeesList key={i+1} data={el} />
          })}</UnorderedList>:null}
    </Flex>
  )
}

export default BookingCard