import React from 'react'
import { Minus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='bg-[#000122] flex items-center justify-evenly w-[949px] h-[74px] text-white font-semibold'>
        <div className='flex items-center justify-center'>
            <img src='one.svg' className='h-8 mr-2' alt='' />
            <p>Company Details</p>
        </div>
        <div className='flex items-center justify-center'>
            <img src='two.svg' className='h-8 mr-2' alt='' />
            <p>Products & Services</p>
        </div>
        <div className='flex items-center justify-center'>
            <img src='three.svg' className='h-8 mr-2' alt='' />
            <p>Service Areas</p>
        </div>
        <div className='flex items-center justify-center'>
            <img src='four.svg' className='h-8 mr-2' alt='' />
            <p>Past Projects</p>
        </div>
    </nav>
  )
}

export default Navbar