import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {CgProfile} from "react-icons/cg"
import { useSelector } from 'react-redux'
const NameCard = () => {
    const {name}=useSelector((store)=>store.users)
  return (
    <Flex alignItems={"center"} gap="10px">
        <CgProfile size={"40px"}/>
        <Text fontWeight={"bold"}>{name}</Text>
    </Flex>
  )
}

export default NameCard