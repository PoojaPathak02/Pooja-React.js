import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import Login from '../components/Login'
import PrivatePage from '../components/PrivatePage'
import About from '../components/About'

const Allroutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product' element={
      <PrivatePage>
     <Products/>
      </PrivatePage>
      }></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
  )
}

export default Allroutes
