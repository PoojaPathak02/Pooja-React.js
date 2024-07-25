import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ProductPage = () => {
  const [page,setpage] =useState(1)
  const [product,setproduct]=useState([])
  const getdatafromserver=(()=>{
    axios.get(`http://localhost:0616/product?_page=${page}&_limit=5`)
    .then((res)=>{
      setproduct(res.data)})
    .catch((err)=>{console.log(err)}) 
  })
  useEffect(()=>{
    getdatafromserver()
  },[page])

  const handleLogout=()=>{
    const logout = localStorage.removeItem("token")
    if (!logout)
    {
      alert("Logout Successfully..")
      window.location.href="/login"
    }
  }
  return (
    <div>
      <h1 style={{marginTop:"60px",color:"GrayText"}}>Product Page</h1><hr />
      <button onClick={()=>handleLogout()}>Logout</button>
     <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",marginTop:"80px"}}>
     {product.map((el)=>(
        <div key={el.id} style={{border:"1px solid black",paddingBottom:"15px"}}>
          <h1>{el.id}</h1>
          <Link to={`/singlepage/${el.id}`}>
          <img src={el.image} alt={el.title} style={{height:"200px",width:"200px",paddingTop:"20px "}} />
          </Link>
          <h1>{el.title}</h1>
          <h2>{el.price}</h2>
          <h2>{el.category}</h2>
          <p>{el.description.substring(0,100)}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
     </div>
      <div>
        <button style={{padding:"5px 10px",marginTop:"35px"}} onClick={()=>setpage(page-1)}>Prev</button>
        <span style={{padding:"5px 10px"}}>{page}</span>
        <button style={{padding:"5px 10px",marginTop:"35px"}} onClick={()=>setpage(page+1)}>Next</button>
      </div>
    </div>
  )
}

export default ProductPage
