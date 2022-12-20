import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Hoc/PrivateRoute'
import CreateEventPage from '../Pages/CreateEventPage'
import EventDetailsPage from '../Pages/EventDetailsPage'
import HomePage from '../Pages/HomePage'
import SignInPage from '../Pages/SignInPage'
import SignUpPage from '../Pages/SignUpPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-in' element={<SignInPage/>}/>
        <Route path='/sign-up' element={<SignUpPage/>}/>
        <Route path='/event-details/:id' element={<PrivateRoute><EventDetailsPage/></PrivateRoute>}/>
        <Route path='/create-event' element={<PrivateRoute><CreateEventPage/></PrivateRoute>}/>
    </Routes>
  )
}

export default AllRoutes