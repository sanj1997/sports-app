import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
        <Route path='/event-details' element={<EventDetailsPage/>}/>
        <Route path='/create-event' element={<CreateEventPage/>}/>
    </Routes>
  )
}

export default AllRoutes