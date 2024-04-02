import React from 'react'

const Projects = () => {
  return (
    <>
    <div className='flex flex-col mt-12'>
            <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Project Name<span className="text-red-500">*</span></label>
            <div className='flex justify-start'>
                <input 
                    className='w-[487px] h-[42px] rounded-sm'
                />
                <button className='bg-black w-[171px] h-[42px] text-white font-semibold py-2 ml-2'>Upload Photo</button>
            </div>
        </div> 
        <div className='flex'>
            <div className='flex flex-col mt-6 mr-4'>
                <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Client Name<span className="text-red-500">*</span></label>
                <div className='flex justify-start'>
                    <input 
                        className='w-[292px] h-[42px] rounded-sm'
                    />
                </div>
            </div>   
            <div className='flex flex-col mt-6'>
                <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Size of Project<span className="text-red-500">*</span></label>
                <div className='flex justify-start'>
                    <input 
                        className='w-[179px] h-[42px] rounded-sm'
                    />
                </div>
            </div>  
        </div>   
        <div className='flex flex-col mt-6'>
            <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Size of Project</label>
            <div className='flex justify-start'>
                <input 
                    className='w-[675px] h-[121px] rounded-sm'
                />
            </div>
        </div> 
    </>
  )
}

export default Projects