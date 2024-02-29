import React, { useRef } from 'react'
import { X } from 'lucide-react';
import Form from './Form1';
import Navbar from './Navbar';
import BottomNav from './BottomNav';


const Modal = ({onClose}) => {

  const modalRef = useRef();

  // const closeModal =(e) => {
  //   if(modalRef.current === e.target){
  //     onClose();
  //   }
  // }

  return (
    <div ref={modalRef} 
        //  onClick={closeModal} 
         className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg  flex flex-col justify-center items-center'>
      <Navbar />
      <div className='px-4 py-2 flex flex-col w-[949px] bg-[#D9D9D9] max-h-[424px] overflow-auto'>
        <button onClick={onClose} className='place-self-end mt-2 hover:bg-red-700 '><X /></button>
        <Form />
      </div>
      <BottomNav />
    </div>
  )
}

export default Modal