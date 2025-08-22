import React, { useState } from 'react'
import {useAuth}from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
const {setIsLoggedIn}=useAuth()
  const navigate=useNavigate()
    const [user,setUser]=useState({
     
        email:"",
        password:""

    })


    const handleChange=(e)=>{
       const name=e.target.name
       const value=e.target.value
       setUser({...user,[name]:value})
      
    } 
     const handleSubmit=(e)=>{
        e.preventDefault();
         localStorage.setItem("user",JSON.stringify(user))
       setIsLoggedIn(true)
       navigate("/")
        
     }
  return (
    <div className='bg-gray-50 h-[60vh] py-20'>
      <h1 className='text-center'>login page</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3'>
        <input type="text" className="p-2 broder border-gray-200 border-1"  name="email" id="" placeholder='eneter email' value={user.email} onChange={handleChange}  />
        <input type="text" className="p-2 broder border-gray-200 border-1" name="password" id="" placeholder='eneter email' value={user.password}  onChange={handleChange}   />
       <button className='p-2 border  bg-blue-500 text-white'>Login</button>
      </form>
    </div>
  )
}

export default Login
