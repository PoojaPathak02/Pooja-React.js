import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <NavLink to={"/"} style={({isActive})=>{return { color: isActive ? "grey":"blue" ,textDecoration:"none"}}}>HOME</NavLink>
      <NavLink to={"/product"} style={({isActive})=>{return { color: isActive ? "grey":"blue" ,textDecoration:"none"}}}>PRODUCT</NavLink>  
      <NavLink to={"/about"} style={({isActive})=>{return { color: isActive ? "grey":"blue" ,textDecoration:"none"}}}>ABOUT</NavLink>
      <NavLink to={"/login"} style={({isActive})=>{return { color: isActive ? "grey":"blue" ,textDecoration:"none"}}}>LOGIN</NavLink>

    </div>
  )
}

export default Navbar
