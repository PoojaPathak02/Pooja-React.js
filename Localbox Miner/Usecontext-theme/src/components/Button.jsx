import React, { useContext } from 'react'
import { themecontext } from '../Context/Themecontext'

const Button = () => {
  const {theme,themeupdaterfunction}= useContext(themecontext)
  return (
    <div>
      <button onClick={themeupdaterfunction} style={{marginTop:"10px",backgroundColor:theme=="light"?"#1F6C7A":"white",color:theme=="light"?"white":"#1F6C7A"}}>ChangeTheme</button>
    </div>
  )
}

export default Button
