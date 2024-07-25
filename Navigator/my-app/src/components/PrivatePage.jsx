import React, { useState } from 'react'

const PrivatePage = ({children}) => {
    const isAuth = localStorage.getItem("token")
   
    if(!isAuth)
    {
        alert("You Have to Login first..")
        window.location.href="/login"
    }
    else{
        alert("Here's Your Product Page")
        return children
    }

    
}

export default PrivatePage
