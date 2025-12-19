import React, { useState } from 'react'
import API from '../API/api';

const Register = () => {

    const [data,setData]=useState({
        name:"",
        email:""
    });

    const submit=async()=>{
        await API.post("/register",data);
        alert("Registered Successfully");
    }

  return (
    <div className='p-6'>
        <input className='border p-2' placeholder='Name' onChange={(e)=>setData({...data,name:e.target.value})}/>
        <input className='border p-2 ml-2' placeholder='Email' onChange={(e)=>setData({...data,email:e.target.value})}/>
        <button onClick={submit} className='bg-green-600 text-white p-2 ml-2'>Register</button>
    </div>
  )
}

export default Register