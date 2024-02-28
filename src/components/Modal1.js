import React, { useRef } from 'react'
import { X } from 'lucide-react';
import Form from './Form1';


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
         className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg flex justify-center items-center'>
      <div className='px-4 py-2 flex flex-col bg-neutral-400 max-h-[90vh] overflow-auto'>
        <button onClick={onClose} className='place-self-end mt-2 hover:bg-red-700 '><X /></button>
        <Form />
      </div>
    </div>
  )
}

export default Modal