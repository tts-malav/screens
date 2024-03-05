import React from 'react'

const Products = () => {
  return (
    <div className='flex flex-col w-[418px] mr-2 mt-6'>
        <label htmlFor='type' className='mb-1 pl-1 font-bold'>Type</label>
        <input 
            className='h-[42px] w-[122px] font-bold pl-2 rounded-[5px]' placeholder='Select'
        />
    </div>
  )
}

export default Products