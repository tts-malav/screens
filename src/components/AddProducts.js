import React, { useState } from 'react'
import { PlusCircle, X } from 'lucide-react';
import Products from './Products';
import TypepPoduct from './TypepPoduct';
import { TypeService } from './TypeService';
import Spec1 from './Spec';

const AddProducts = () => {

  const [addProducts, setAddProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
            <div className='flex w-[675px] mt-6'>
                <div className=' flex flex-col mr-4'>
                    <label htmlFor='type' className='mb-1 pl-1 w-[122px] font-bold'>Type</label>
                    <select 
                        id='type' 
                        className='h-[42px] w-[122px] font-bold pl-2 rounded-[5px]'
                        value={selectedValue}
                        onChange={handleSelectChange}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value='option1'>Product</option>
                        <option value='option2'>Service</option>
                    </select>
                </div>
                {selectedValue === 'option1' ? <TypepPoduct /> : selectedValue === 'option2' ? <TypeService /> : ""}
            </div>
            {selectedValue === 'option1' ? <Spec1 /> : ""}
            
        </div>

        {addProducts.map((member, index) => (
            <div className='flex flex-col w-full ' key={index}>
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