import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
const initialState={
    name:"",
    description:"",
    place:"",
    capacity:0,
    timing:""
}
const CreateEventPage = () => {
    const [data,setData]=useState(initialState)

    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

    const handleSubmit=(e)=>{
       e.preventDefault()
       data.capacity=Number(data.capacity)
       console.log(data)
    }
  return (
    <Box>
        <Text fontWeight={"bold"} mt="20px" textAlign={"center"} fontSize="2xl">Create Event</Text>
        <Flex w="30%" m="auto">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <Input name='name' onChange={(e)=>handleChange(e)} mt="15px" placeholder='Enter name'/>
                <Textarea onChange={(e)=>handleChange(e)} name='description' mt="15px" placeholder='Enter description'/>
                <Input onChange={(e)=>handleChange(e)} name='timing' mt="15px" type="datetime-local"/>
                <Input onChange={(e)=>handleChange(e)} name='place' mt="15px" placeholder='Enter place'/>
                <Input onChange={(e)=>handleChange(e)} name='capacity' mt="15px" type="number" placeholder='Enter capacity'/>
                <Button mt="15px" type='submit' w="100%">Submit</Button>
            </form>
        </Flex>
    </Box>
  )
}

export default CreateEventPage