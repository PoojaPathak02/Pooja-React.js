import React, { useState } from 'react'

const Post = () => {
    const [value,setvalue]= useState([])
   function fetchdata()
   {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>setvalue(data))
    .catch((err)=>console.log(err))
   }
   fetchdata()
  return (
    <div>
      {value.map((el)=>(
        <div className='post' key={el.id}>
            <h1>{el.title}</h1>
            <h3>{el.body}</h3>
        </div>
      ))}
    </div>
  )
}

export default Post
