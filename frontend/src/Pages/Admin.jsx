import React, { useState } from 'react'
import API from '../API/api';

const Admin = () => {

    const [conf,setConf]=useState({
        title:"",
        date:""
    });

    const addConference=async()=>{
        await API.post("/confrence",conf);
        alert("Conference Added");
    }

  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <div className='mb-4'>
            <label className='block mb-2'>Conference Title</label>
            <input type="text" onChange={(e)=>setConf({...conf,title:e.target.value})} className='border p-2 w-full' placeholder='Title'/>
        </div>
        <div className='mb-4'>
            <label className='block mb-2'>Conference Date</label>
            <input type="date"  onChange={(e)=>setConf({...conf,date:e.target.value})} className='border p-2 w-full' placeholder='Date'/>
        </div>
        <button onClick={addConference} className='bg-green-500 text-white p-2 rounded'>Add Conference</button>
    </div>
  )
}

export default Admin