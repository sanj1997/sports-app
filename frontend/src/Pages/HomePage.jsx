import { Box, Flex, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import EventsList from '../Components/EventsList'
import { getAllEvents } from '../Store/events/events.action'
import { getUserDetails } from '../Store/users/users.action'
import {debouncing} from "../Utils/helperFunctions"
const HomePage = () => {
    const [filter,setFilter]=useState("Any")
    const [query,setQuery]=useState("")
    const ref=useRef(null)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUserDetails())
    },[])
    useEffect(()=>{
       dispatch(getAllEvents(filter,query))
    },[filter,query])
    const handleFilter=(e)=>{
      setFilter(e.target.value)
    }
    const handleQuery=()=>{
        setQuery(ref.current.value)
    }
   
    const handleChange=debouncing(handleQuery,300)  
  return (
    <Box>
        <Flex m="auto" w="70%" justifyContent={"space-between"} alignItems="center" >
          <Input ref={ref} w={"40%"} onChange={handleChange} placeholder='Search Event here'/>
          <Flex w={"50%"} justifyContent={"space-around"} alignItems="center">
          <Text>Filter By Category:</Text>
          <Select w="40%" name="category" onChange={(e) => handleFilter(e)} mt="15px" placeholder="Select category">
            <option value="Any">Any</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Hockey">Hockey</option>
            <option value="Badminton">Badminton</option>
            <option value="Kabaddi">Kabaddi</option>
            <option value="Swimming">Swimming</option>
          </Select>
          </Flex>
        </Flex>
        <EventsList/>
    </Box>
  )
}

export default HomePage