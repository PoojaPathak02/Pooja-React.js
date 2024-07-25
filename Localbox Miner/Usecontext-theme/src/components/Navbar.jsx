import React, { useContext } from 'react'
import { themecontext } from '../Context/Themecontext'


const Navbar = () => {
  const {theme} = useContext(themecontext)

  return (
    <div>
      <h1>Navbar</h1>
      <h3>This Theme is {theme}</h3>
    </div>
  )
}

export default Navbar
