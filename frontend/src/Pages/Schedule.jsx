import React, { useEffect, useState } from 'react'
import API from '../API/api';

const Schedule = () => {

    const [schedule,setSchedule]=useState([]);

    useEffect(()=>{
        API.get("/confrence").then((res)=>{
            setSchedule(res.data);
        })
    },[]);

  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-4'>Conference Schedule</h1>
        {schedule.map((item)=>(
            <div key={item.id} className='border p-4 mb-4'>
                <h2 className='text-lg font-bold'>{item.title}</h2>
                <p className='text-sm'>{item.date}</p>
            </div>
        ))}
    </div>
  )
}

export default Schedule