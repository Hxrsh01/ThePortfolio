import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const Navbar = () => {
  const [open, setopen] = useState(false)
  return (
    <>
      <nav className='flex items-center justify-between bg-black'>
        <div className='ml-[50px] max-sm:ml-5'>
          <img src="/Logo.png" alt="logo" className='h-[60px]' />
        </div>
        <ul className='flex mr-[100px] gap-[100px] text-white text-[20px] max-md:mr-[50px] max-md:gap-[50px] max-sm:hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li><button>Contact</button></li>
        </ul>
        <div className='flex items-center sm:hidden'>
          <button onClick={() => setopen(!open)}
            className="p-2 rounded-md text-white hover:bg-gray-100">
            {open ? (<X className="h-7 w-7" />) : (<Menu className="h-7 w-7" />)}
          </button>
        </div>
        {open && (
          <div className='absolute top-15 left-0 w-full bg-black text-white sm:hidden'>
            <ul className='flex flex-col py-5 gap-[10px] items-center text-xl'>
              <li>Home</li>
              <li>About</li>
              <li>Project</li>
              <li><button>Contact</button></li>
            </ul>
          </div>
          )}
      </nav>
    </>
  )
}

export default Navbar
