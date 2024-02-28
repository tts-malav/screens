import React, { useState } from 'react'
import Modal from './Modal1'

const Popup = () => {
  const [showModal, setshowModal] = useState(false);
  
  const handleCloseModal = (e) => {
    e.preventDefault();
    setshowModal(false);
  };

  return (
    <>
    <div className='bg-slate-400 gap-6 h-screen flex flex-col items-center'>
        <h1 className='text-5xl font-bold mt-12'>Register</h1>
        <button onClick={()=>setshowModal(true)} className='bg-purple-700 px-4 py-2 rounded-lg text-white font-semibold hover:bg-purple-800 cursor-pointer'>Register</button>
        {showModal && <Modal onClose={handleCloseModal} />}
    </div>
    </>
  )
}

export default Popup;
