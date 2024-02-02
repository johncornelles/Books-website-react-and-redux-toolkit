import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from './components/Books/Books'
import Registration from './components/registration/Registration'

const Allroute = () => {
  return (
    <Routes>
        <Route path='/' element={<Books />}/>
        <Route path='/registration' element={<Registration />}/>
    </Routes>
  )
}

export default Allroute