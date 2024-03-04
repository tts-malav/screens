import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#000122] flex items-center justify-center w-[949px] h-[74px] text-white font-semibold'>
        <div className='flex items-center justify-center'>
            <img src='one.svg' className='h-8 mx-2' alt='' />
            <p>Company Details</p>
            <img src='line.svg'alt=''  className='mx-4 w-8'/>
        </div>
        <div className='flex items-center justify-center'>
            <img src='two.svg' className='h-8 mx-2' alt='' />
            <p>Products & Services</p>
            <img src='line.svg' alt='' className='mx-4 w-8' />
        </div>
        <div className='flex items-center justify-center'>
            <img src='three.svg' className='h-8 mx-2' alt='' />
            <p>Service Areas</p>
            <img src='line.svg' alt='' className='mx-4 w-8'/>
        </div>
        <div className='flex items-center justify-center'>
            <img src='four.svg' className='h-8 mx-2' alt='' />
            <p>Past Projects</p>
        </div>
    </nav>
  )
}

export default Navbar