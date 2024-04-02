import React from 'react'

const NonGst = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col w-[675px]'>
        <label htmlFor='add1' className='mb-1 mt-4 pl-1 font-bold'>Company Address Line 1<span className="text-red-500">*</span></label>
        <input className='h-[42px] rounded-[5px]'/>
      </div><div className='flex flex-col w-[675px]'>
        <label htmlFor='add2' className='mb-1 mt-4 pl-1 font-bold'>Company Address Line 2</label>
        <input className='h-[42px] rounded-[5px]'/>
      </div>
      <div className='flex mt-4'>
        <div className='flex flex-col w-[229px] mr-5'>
          <label htmlFor='city' className='mb-1 pl-1 font-bold'>City<span className="text-red-500">*</span></label>
            <input className='h-[42px] rounded-[5px]'/>
        </div>
        <div className='flex flex-col w-[213px] mr-5'>
            <label htmlFor='state' className='mb-1 pl-1 font-bold'>State<span className="text-red-500">*</span></label>
            <input className='h-[42px] rounded-[5px]'/>
        </div>
        <div className='flex flex-col w-[193px]'>
            <label htmlFor='pin' className='mb-1 pl-1 font-bold'>Pin Code<span className="text-red-500">*</span></label>
            <input className='h-[42px] rounded-[5px]'/>
        </div>
      </div>
      <div className='flex mt-4'>
        <div className='flex flex-col w-[311px] mr-5'>
          <label htmlFor='aturn' className='mb-1 pl-1 font-bold'>Annual Turnover<span className="text-red-500">*</span></label>
            <input className='h-[42px] rounded-[5px]'/>
        </div>
        <div className='flex flex-col w-[344px]'>
          <label htmlFor='ctype' className='mb-1 pl-1 font-bold'>Company Type<span className="text-red-500">*</span></label>
          <input className='h-[42px] rounded-[5px]'/>
        </div>
      </div>
    </div>
  )
}

export default NonGst