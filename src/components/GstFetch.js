import React from 'react'

const GstFetch = () => {

  const handleFetch = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <label htmlFor='gstno' className='mt-8 mb-1 pl-1 font-bold'>GST Number:</label>
    <div className='flex'>
        <input 
            className='w-[528px] h-[42px] rounded-sm'
        />
        <button onClick={(e)=>handleFetch(e)} className='bg-black w-[134px] h-[42px] text-white font-semibold py-2 px-8 ml-2'>Fetch</button>
    </div>
    </>
  )
}

export default GstFetch