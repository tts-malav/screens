import React from 'react'
import { PlusCircle} from 'lucide-react';

const AddCity = () => {

    const handleAdd = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-[675px] pl-[100px] mt-10'>
            <div className='flex flex-col'>
                <label htmlFor='email' className='mb-1 mt-4 pl-1 font-bold'>Search for Cities</label>
                <input 
                    className='h-[42px] rounded-[5px]'
                />
            </div>
            <button onClick={handleAdd} className='flex mt-4 font-semibold'>
                <PlusCircle className='rounded-full mr-2'/>
                <p>Add States</p>
            </button>
        </div>      
    )
}

export default AddCity