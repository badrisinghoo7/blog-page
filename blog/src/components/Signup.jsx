import React from 'react'
import { useState } from 'react'
import axios from "axios"
const Signup = () => {
    const [username, setUsername]= useState("")
    const [email, setEmail]= useState("")
    const [pass, setPass]= useState("")
    const apiUrl="https://blogpage-backenddata.onrender.com"

    const handleSubmit=()=>{
        let user={
            username,
            email,
            pass
        }
        axios.post(`${apiUrl}/users/register`,user)
        .then(res=>{console.log(res)
                alert("Register Successful")
            })
        .catch(error=>console.log(error))
    }
  return (
    <div>
        <h3>User Registration</h3>
        <input type="text" placeholder='username'  value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
        <input type="pass" placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)}  />
        <button onClick={handleSubmit}>SignUp</button>
    </div>
  )
}

export default Signup