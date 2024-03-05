import React from 'react'

const TypepPoduct = () => {
  return (
    <>
    <div className='flex flex-col w-[279px] mr-4'>
        <label htmlFor='name' className='mb-1 pl-1 font-bold'>Name</label>
        <input 
            className='h-[42px] rounded-[5px]'
        />
    </div>
    <div className='flex flex-col w-[239px]'>
        <label htmlFor='no' className='mb-1 pl-1 font-bold'>Brand</label>
        <input 
            className='h-[42px] rounded-[5px]'
        />
    </div>
    </>
      
  )
}

export default TypepPoduct