import React, { useEffect } from 'react'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {logOutUser}=useAuth()
    const navigate=useNavigate()
    useEffect(()=>{
        logOutUser()
    },[])
  return (
    navigate("/login")
  )
}

export default Logout