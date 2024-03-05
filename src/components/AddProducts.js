import React, { useState } from 'react'
import { PlusCircle, X } from 'lucide-react';
import Products from './Products';

const AddProducts = () => {

  const [addProducts, setAddProducts] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setAddProducts([...addProducts, <Products key={addProducts.length} onDelete={() => handleDelete(addProducts.length)} />]);
  };

  const handleDelete = (index, e) => {
    e.preventDefault();
    const updatedMembers = addProducts.filter((member, i) => i !== index);
    setAddProducts(updatedMembers);
  };

  return (
    <form className='mt-2 px-4 flex flex-col pb-6 ml-[89px]'>
        <h1 className=' font-[800] text-xl self-start w-[316px]'>Add Products & Services</h1>
        <p className='mt-3  w-[528px] font-medium self-start'> 
        Select the specific trades and market sectors you service. We'll display this information on your Neevay Network page to help you find leads.
        </p>
        <div className='flex flex-col mt-6'>
            <label htmlFor='email' className='mb-1 pl-1 font-bold self-start'>Market Sector</label>
            <div className='flex justify-start'>
                <input 
                    className='w-[675px] h-[42px] rounded-sm'
                />
            </div>
            <h1 className='mt-8 font-[700] border-b border-b-black'>Materials or Services Offered</h1>
            
            <div className='flex flex-col w-[418px] mr-2 mt-6'>
                <label htmlFor='type' className='mb-1 pl-1 font-bold'>Type</label>
                <input 
                    className='h-[42px] w-[122px] font-bold pl-2 rounded-[5px]' placeholder='Select'
                />
            </div>
        </div>

        {addProducts.map((member, index) => (
            <div className='flex w-full justify-between' key={index}>
                {member}
                    <button className=' self-end hover:bg-red-600' onClick={(e) => handleDelete(index, e)}><X /></button>
                </div>
                ))}

            <button onClick={(e)=>handleAdd(e)} className='flex mt-6 font-semibold'>
                <PlusCircle className='rounded-full mr-2'/>
                <p>Add Another</p>
            </button>
    </form>
  )
}

export default AddProducts