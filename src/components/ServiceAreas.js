import React, { useState } from 'react';
import AddState from './AddState';
import AddCity from './AddCity';

const ServiceAreas = (e) => {

  const [area, setArea] = useState();

  return (
    <form className='mt-2 px-4 flex flex-col items-center pb-6 w-[675px] h-[435px]'>
      <h1 className='ml-[89px] font-[800] text-xl self-start w-[316px]'>Add Service Areas</h1>
      <p className='mt-3 ml-[89px] w-[631px] font-medium self-start'>
        Let construction purchase reps know where you're able to offer your services or materials. We'll show your company in search results for the selected areas.
      </p>
      <div className='pl-[90px] w-full flex mt-6 font-medium'>
        <div className='flex mr-16'>
          <input type='radio' name="areas" value="a" onChange={() => setArea("a")} /><p className='ml-2 '>All over India</p>
        </div>
        <div className='flex mr-16'>
          <input type='radio' name="areas" value="b" onChange={() => setArea("b")} /><p className='ml-2'>States</p>
        </div>
        <div className='flex'>
          <input type='radio' name="areas" value="c" onChange={() => setArea("c")} /><p className='ml-2'>Cities</p>
        </div>
      </div>
      {area === "a" ? '' : area === "b" ? <AddState /> : area === "c" ? <AddCity /> : ""}
    </form>
  );
};

export default ServiceAreas;
