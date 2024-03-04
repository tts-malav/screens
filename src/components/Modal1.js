import React, { useRef, useState } from 'react'
import { X } from 'lucide-react';
import Form from './Form1';
import Navbar from './Navbar';
import ServiceAreas from './ServiceAreas';
import AddProjects from './AddProjects';


const Modal = ({onClose}) => {

  const modalRef = useRef();
  const [page, setPage] = useState(0);

  const handleNextClick = () => {
    if(page < 3){
      setPage(page+1);
    }
  };

  const handleBackClick = () => {
    if(page){
      setPage(page-1);
    }
  };

  console.log(page)

    return (
    <div ref={modalRef} 
         className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg  flex flex-col justify-center items-center'>
      <nav className='bg-[#000122] flex items-center justify-center w-[949px] h-[74px] text-white font-semibold'>
        <div className='flex items-center justify-center'>
            <img src={ page === 0 ? 'one.svg' : 'tick.svg'} className='h-8 mx-2' alt='' />
            <p>Company Details</p>
            <img src='line.svg'alt=''  className='mx-4 w-8'/>
        </div>
        <div className='flex items-center justify-center'>
            <img src={ page <= 1 ? 'two.svg' : 'tick.svg'} className='h-8 mx-2' alt='' />
            <p>Products & Services</p>
            <img src='line.svg' alt='' className='mx-4 w-8' />
        </div>
        <div className='flex items-center justify-center'>
            <img src={ page <= 2 ? 'three.svg' : 'tick.svg'}  className='h-8 mx-2' alt='' />
            <p>Service Areas</p>
            <img src='line.svg' alt='' className='mx-4 w-8'/>
        </div>
        <div className='flex items-center justify-center'>
            <img src={ page <= 3 ? 'four.svg' : 'tick.svg'} className='h-8 mx-2' alt='' />
            <p>Past Projects</p>
        </div>
      </nav>
      <div className='px-4 py-2 flex flex-col w-[949px] bg-[#D9D9D9] max-h-[424px] overflow-auto'>
        <button onClick={onClose} className='place-self-end mt-2 hover:bg-red-700 '><X /></button>
        { page === 0 ? (<Form />) :  page === 1 ? (<AddProjects />) : page === 2 ? (<ServiceAreas />) : (<AddProjects />)} 
      </div>
      <div className='flex flex-col border-t border-t-slate-400 bg-[#D9D9D9] h-[103px] w-[949px] items-center'>
        <button className='font-bold mt-[18px] text-white w-[675px] h-[41px] bg-[#FD6600]'
          onClick={handleNextClick}>
          {` Next : ${ page === 0 ? "Product and Services" : page === 1 ? "Service Areas" : "Past Projects"} `}</button>
        <button className='font-bold w-[675px] h-[41px]'
          onClick={handleBackClick}>
            Back
        </button>
      </div>
    </div>
  )
}

export default Modal