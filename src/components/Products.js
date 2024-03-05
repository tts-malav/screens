import React, { useState } from 'react'
import TypepPoduct from './TypepPoduct';
import { TypeService } from './TypeService';

const Products = () => {

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    
      <div className="flex flex-col w-[675px] mr-2 mt-6">
        <label htmlFor="type" className="mb-1 pl-1 font-bold">Type</label>
        <select
          id="type"
          className="h-[42px] w-[122px] font-bold pl-2 rounded-[5px]"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="" disabled selected>Select</option>
          <option value="option1">Product</option>
          <option value="option2">Service</option>
        </select>
      </div>
      
  );
}

export default Products