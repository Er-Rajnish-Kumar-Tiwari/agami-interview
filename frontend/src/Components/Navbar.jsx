import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-600 text-white p-4 flex gap-12'>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/admin">Admin</Link>
    </div>
  )
}

export default Navbar