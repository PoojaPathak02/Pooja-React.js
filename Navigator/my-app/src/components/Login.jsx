import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")

//Post
const handleSubmit=(e)=>{
  e.preventDefault()
  let UserData={
    email,
    password
  }
  // console.log(UserData)
  axios.post("https://reqres.in/api/login",UserData)
  .then((res)=>{
    let gettoken = res.data.token
    localStorage.setItem("token",gettoken)
    alert("Now You Can Access Product Page")
    console.log(gettoken)
  })
  .catch((err)=>{
    alert("Try Again!!")
    console.log(err)
  })
}

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Enter Your Email' /> <br />
        <input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='Enter Your Password' /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login
