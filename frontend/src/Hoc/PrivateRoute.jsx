import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
     const {asv}=useSelector((store)=>store.users)
     if(asv=="")
     {
        return <Navigate to={"/sign-in"}/>
     }
     return children
}

export default PrivateRoute