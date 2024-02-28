import React from 'react'

const AddTeam = () => {
  return (
    <>
        <h1 className="mt-8 font-bold border-b border-b-black">
        Add Team Members
        </h1>
        <div className="flex mt-4">
            <div className="flex flex-col w-[418px] mr-2">
                <label htmlFor="name" className="mb-1 pl-1 font-bold">
                    Name
                </label>
                <input className="h-[42px] rounded-[5px]" />
            </div>
            <div className="flex flex-col w-[243px]">
                <label htmlFor="no" className="mb-1 pl-1 font-bold">
                    Phone Number
                </label>
                <input className="h-[42px] rounded-[5px]" />
            </div>
        </div>
        <div className="flex flex-col w-[675px]">
            <label htmlFor="email" className="mb-1 mt-4 pl-1 font-bold">
                Email ID
            </label>
            <input className="h-[42px] rounded-[5px]" />
        </div>
    </>
  );
}

export default AddTeam