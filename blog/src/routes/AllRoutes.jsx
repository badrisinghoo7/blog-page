import React from 'react'
import {Routes, Route} from "react-router-dom"
import Signup from '../components/Signup'
import Login from '../components/Login'
import Notes from '../components/Notes'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/users/register' element={<Signup />} />
    <Route path='/users/login' element={<Login />} />
    <Route path='/notes' element={<Notes />} />
  </Routes>
  )
}

export default AllRoutes