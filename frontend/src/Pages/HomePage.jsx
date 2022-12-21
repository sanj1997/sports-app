import { Box, Flex, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import EventsList from '../Components/EventsList'
import { getAllEvents } from '../Store/events/events.action'
import { getUserDetails } from '../Store/users/users.action'

const HomePage = () => {
    const [filter,setFilter]=useState("Any")
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUserDetails())
    },[])
    useEffect(()=>{
       dispatch(getAllEvents())
    },[])
    const handleChange=(e)=>{
      setFilter(e.target.value)
    }
  return (
    <Box>
        <Flex>
          <Text>Filter By Category</Text>
          <Select name="category" onChange={(e) => handleChange(e)} mt="15px" placeholder="Select category">
            <option value="Any">Any</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Hockey">Hockey</option>
            <option value="Badminton">Badminton</option>
            <option value="Kabaddi">Kabaddi</option>
            <option value="Swimming">Swimming</option>
          </Select>
        </Flex>
        <EventsList/>
    </Box>
  )
}

export default HomePage