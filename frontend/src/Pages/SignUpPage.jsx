import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSignUp } from '../Store/users/users.action'
import {checkPassword} from '../Utils/helperFunctions'
const initialState={
    name:"",
    email:"",
    password:""
}
const SignUpPage = () => {
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
        if(handleValidation(creds))
        {
            dispatch(userSignUp(creds)).then((res)=>{
                toast({
                    description:"Sign Up successful",
                    status:"success"
                })
                setTimeout(()=>{
                    navigate("/sign-in")
                },2000)
            }).catch((err)=>{
                toast({
                    description:err.response.data.message,
                    status:"error"
                })
            })
        }
    }

    const handleValidation = (creds) => {
        let mail=creds.email.split("")
        let password=creds.password.split("")
        if (creds.password.length < 8) {
          toast({
            description: "Password lenght should be more than 7",
            status: "error",
          });
          return false
        }
        if(!mail.includes("@","com")) 
        {
          toast({
            description: "Enter valid email address",
            status: "error",
          });
          return false
        }
        if(!checkPassword(password))
        {
          toast({
            description: "Password must include numbers and special characters",
            status: "error",
          });
          return false
        }
        else {
          return true;
        }
      };
      
  return (
    <Box>
        <Text textAlign={"center"} mt="20px" fontWeight={"bold"} fontSize="2xl">Sign Up</Text>
        <Flex w="30%" m="auto" mt="20px">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <Input onChange={(e)=>handleChange(e)} name='name' placeholder='Enter name'/>
                <Input mt="10px" onChange={(e)=>handleChange(e)} name="email" placeholder='Enter email'/>
                <Input type={"password"} mt="10px" onChange={(e)=>handleChange(e)} name='password' placeholder='Enter password'/>
                <Button w="100%" mt="10px" type='submit'>Submit</Button>
            </form>
        </Flex>
    </Box>
  )
}

export default SignUpPage