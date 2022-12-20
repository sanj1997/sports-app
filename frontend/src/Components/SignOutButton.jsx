import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { userSignOut } from '../Store/users/users.action'

const SignOutButton = () => {
    const dispatch=useDispatch()
  const handleSignOut=()=>{
     dispatch(userSignOut())
  }  
  return (
    <Button onClick={handleSignOut}>Sign Out</Button>
  )
}

export default SignOutButton