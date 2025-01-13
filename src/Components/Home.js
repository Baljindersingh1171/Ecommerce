import React from 'react'
import { useLocation } from 'react-router-dom';
import "../home.css"
import {  useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
    const location = useLocation();
  const username = location.state?.displayName;
  console.log("username",{username})
  const imgurl=location.state?.Profileurl
  console.log("image url",imgurl)
  return (
    <div>
    <div className='content'>
    <img src={imgurl} alt="profile"/>
    <button onClick={()=>{navigate('/')}
    }>Logout</button>
  </div>
  <h1>Welcome{username}</h1>
    </div>

  )
}


  