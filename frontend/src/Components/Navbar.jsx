import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NameCard from './NameCard'
import SignOutButton from './SignOutButton'

const Navbar = () => {
  const {asv}=useSelector((store)=>store.users)
  return (
    <Flex p="15px" bg={"#5dcaca"} justifyContent="space-between">
        <Link to={"/"}><Image w="45px" src='https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4bc.svg'/></Link>
        <Flex w="60%" justifyContent={"space-evenly"} alignItems="center">
        <Link to={"/"}><Text fontWeight={"bold"}>All Events</Text></Link>
        <Link to={"/mybookings"}><Text fontWeight={"bold"}>My Bookings</Text></Link>
        <Link to={"/create-event"}><Text fontWeight={"bold"}>Create Events</Text></Link>
        <Link to={"/event-requests"}><Text fontWeight={"bold"}>Event Requests</Text></Link>
        {asv!=""?<NameCard/>:<Link to={"/sign-up"}><Text fontWeight={"bold"}>SignUp</Text></Link>}
        {asv!=""? <SignOutButton/>:<Link to={"/sign-in"}><Text fontWeight={"bold"}>SignIn</Text></Link>}
        </Flex>
    </Flex>
  )
}

export default Navbar