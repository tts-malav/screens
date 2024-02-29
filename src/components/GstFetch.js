import React, { useState } from 'react'

const GstFetch = () => {

  const [fetch, setFetch] = useState(false)
  const handleFetch = (e) => {
    e.preventDefault();
    setFetch(!fetch);
  }

  return (
    <>
    <label htmlFor='gstno' className='mt-8 mb-1 pl-1 font-bold'>GST Number:</label>
    <div className='flex'>
        <input 
            className='w-[528px] h-[42px] rounded-sm'
        />
        <button onClick={(e)=>handleFetch(e)} className='bg-black w-[134px] h-[42px] text-white font-semibold py-2 ml-2'>{fetch?"Change GST No.":"Fetch"}</button>
    </div>
    {fetch && (
      <div className='flex flex-col mt-2'>
        <div className='flex flex-col w-[675px]'>
          <label htmlFor='line1' className='mb-1 mt-4 pl-1 font-bold'>Company Address Line 1</label>
          <input 
            className='h-[112px] rounded-[5px]'
          />
        </div>
        <div className='flex mt-6'>
          <div className='flex flex-col w-[311px] mr-3'>
            <label htmlFor='at' className='mb-1 pl-1 font-bold'>Annual Turnover</label>
            <input 
              className='h-[42px] rounded-[5px]'
            />
          </div>
            <div className='flex flex-col w-[344px]'>
              <label htmlFor='ct' className='mb-1 pl-1 font-bold'>Company Type</label>
                <input 
                  className='h-[42px] rounded-[5px]'
                />
            </div>
          </div>
        </div>
        )}
    
    </>
  )
}

export default GstFetch