import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { userSignIn } from '../Store/users/users.action';
const initialState={
    email:"",
    password:""
}
const SignInPage = () => {
    const [creds,setCreds]=useState(initialState)
    const navigate=useNavigate()
    const toast=useToast()
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCreds({...creds,[name]:value})
      }
    const handleSubmit=(e)=>{
       e.preventDefault()
       dispatch(userSignIn(creds)).then((res)=>{
            toast({
                description:"Sign In successful",
                status:"success"
            })
            navigate("/")
       }).catch((err)=>{
        if(err.message==="Network Error")
        {
          toast({
            description: "Oops! Something went wrong",
            status: "error",
          });
        }
        else
        {
          toast({
            description:err.response.data.message,
            status:"error"
        })
        }
       })
    }    
  return (
    <Box>
        <Text textAlign={"center"} mt="20px" fontWeight={"bold"} fontSize="2xl">Sign In</Text>
        <Flex w="30%" m="auto" mt="20px">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <Input isRequired mt="10px" onChange={(e)=>handleChange(e)} name="email" placeholder='Enter email'/>
                <Input isRequired type={"password"} mt="10px" onChange={(e)=>handleChange(e)} name='password' placeholder='Enter password'/>
                <Button w="100%" mt="10px" type='submit'>Submit</Button>
            </form>
        </Flex>
    </Box>
  )
}

export default SignInPage