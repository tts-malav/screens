import React, { useState } from 'react'
import { PlusCircle, X } from 'lucide-react';
import Projects from './Projects';

const AddProjects = () => {

  const [addProjects, setAddProjects] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setAddProjects([...addProjects, <Projects key={addProjects.length} onDelete={() => handleDelete(addProjects.length)} />]);
  };

  const handleDelete = (index, e) => {
    e.preventDefault();
    const updatedMembers = addProjects.filter((member, i) => i !== index);
    setAddProjects(updatedMembers);
  };

  return (
    <>
    <form className='mt-2 px-4 flex flex-col pb-6 ml-[89px]'>
        <h1 className=' font-[800] text-xl self-start w-[316px]'>Add Past Projects</h1>
        <p className='mt-3  w-[528px] font-medium self-start'> 
            Add clients that you have worked with in the past.
        </p>
        <div className='flex flex-col mt-6'>
            <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Project Name</label>
            <div className='flex justify-start'>
                <input 
                    className='w-[487px] h-[42px] rounded-sm'
                />
                <button className='bg-black w-[171px] h-[42px] text-white font-semibold py-2 ml-2'>Upload Photo</button>
            </div>
        </div> 
        <div className='flex'>
            <div className='flex flex-col mt-6 mr-4'>
                <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Client Name</label>
                <div className='flex justify-start'>
                    <input 
                        className='w-[292px] h-[42px] rounded-sm'
                    />
                </div>
            </div>   
            <div className='flex flex-col mt-6'>
                <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Size of Project</label>
                <div className='flex justify-start'>
                    <input 
                        className='w-[179px] h-[42px] rounded-sm'
                    />
                </div>
            </div>  
        </div>   
        <div className='flex flex-col mt-6'>
            <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Work Description</label>
            <div className='flex justify-start'>
                <input 
                    className='w-[675px] h-[121px] rounded-sm'
                />
            </div>
        </div> 
        {addProjects.map((member, index) => (
            <div className='flex flex-col' key={index}>
                {member}
                    <button className='mt-4 self-end hover:bg-red-600' onClick={(e) => handleDelete(index, e)}><X /></button>
                </div>
                ))}

            <button onClick={(e)=>handleAdd(e)} className='flex mt-6 font-semibold'>
                <PlusCircle className='rounded-full mr-2'/>
                <p>Add Another</p>
            </button>
    </form>
    </>
  )
}

export default AddProjects