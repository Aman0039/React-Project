import { House } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div 
    className='h-8 p-2'
    >
      <button
        onClick={() => alert("Redirected To the Home Page...")}>
        <House/> <span>Home</span>
      </button>
    </div>
    </>
  )
}

export default Navbar;