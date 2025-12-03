import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const Navbar = () => {
  const [open, setopen] = useState(false)
  return (
    <>
      <nav className='flex items-center justify-between bg-gray-500'>
        <div className='ml-[50px]'>
          <img src="/Logo.png" alt="logo" className='h-[60px]' />
        </div>
        <ul className='flex mr-[100px] gap-[100px] text-white text-[20px] max-md:gap-2.5 max-sm:mr-5'>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li><button>Contact</button></li>
        </ul>
        <div className='flex items-center'>
          <button onClick={() => setopen(!open)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
            {setopen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
