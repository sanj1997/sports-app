import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserDetails } from '../Store/users/users.action'

const HomePage = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUserDetails())
    },[])
  return (
    <div>HomePage</div>
  )
}

export default HomePage