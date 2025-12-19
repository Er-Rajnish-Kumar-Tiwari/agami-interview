import React, { useState } from 'react'
import API from '../API/api';

const Feedback = () => {

    const [msg,setMsg]=useState("");

    const submit=async()=>{
        await API.post("/feedback",{message:msg});
        alert("Feedback submitted: " + msg);
    }

  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-4'>Feedback</h1>
        <textarea  onChange={(e)=>setMsg(e.target.value)} className='border p-2 w-full mb-4'></textarea>
        <button onClick={submit} className='bg-blue-500 text-white p-2 rounded'>Submit Feedback</button>
    </div>
  )
}

export default Feedback