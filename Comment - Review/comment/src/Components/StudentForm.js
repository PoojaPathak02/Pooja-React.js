import React, { useState } from 'react'

let initialstate={
  name:"",
  email:"",
  password:"",
  grade:"",
  gender:""

}
const StudentForm = () => {

   const [value,setvalue]=useState(initialstate)
   const handlechange = (e)=>{
    setvalue({...value,[e.target.name]:e.target.value})}

    const{name,email,password,grade} = value;
    const handlesubmit =(e)=>{
      e.preventDefault()
      console.log(value)
    }
   
  return (
    <div >
      <form onSubmit={(e)=> handlesubmit(e)}>
      <h2>Student Form</h2>
      <input type='text' onChange={(e)=>handlechange(e)} value={name} name="name" placeholder='Enter Your Full Name'/> <br/>
      <input type='text' onChange={(e)=>handlechange(e)} value={email} name="email" placeholder='Enter Your Email'/> <br/>
      <input type='text' onChange={(e)=>handlechange(e)} value={password} name="password" placeholder='Enter Your Password'/> <br/>
      <select onChange={(e)=>handlechange(e)} name='grade' value={grade}>
        <option>Select Your Grade</option>
        <option>Freshman</option>
        <option>Sophomore</option>
        <option> Junior</option>
        <option> Senior</option>
      </select><br></br>
      Male <input type='radio' onChange={(e)=>handlechange(e)} value={"Male"} name="gender" /> 
      Female <input type='radio' onChange={(e)=>handlechange(e)} value={"Feamale"} name='gender'/> 
      Other <input type='radio'onChange={(e)=>handlechange(e)} value={"Other"} name='gender'/><br/>
      <input type='submit'/>
      </form>
    </div>
   
  )
}

export default StudentForm
