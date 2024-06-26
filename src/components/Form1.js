import React, { useState } from 'react'
import GstFetch from './GstFetch'
import NonGst from './NonGst';
import { PlusCircle, X } from 'lucide-react';
import AddTeam from './AddTeam1';


const Form = () => {

    const [teamMembers, setTeamMembers] = useState([]);
    const [hasGST, setHasGST] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setTeamMembers([...teamMembers, <AddTeam key={teamMembers.length} onDelete={() => handleDelete(teamMembers.length)} />]);
    };

    const handleDelete = (index, e) => {
        e.preventDefault();
        const updatedMembers = teamMembers.filter((member, i) => i !== index);
        setTeamMembers(updatedMembers);
    };

    return (
        <form  className='mt-2 px-4 flex flex-col items-center pb-6'>
            <h1 className='ml-[89px] font-[800] text-xl self-start w-[316px]'>Add Your Company Details</h1>
            <p className='mt-3 ml-[89px] w-[528px] font-medium self-start'> 
                We'll use this information to create your business page on the Neevay Network. 
                You can always edit this information later.
            </p>

            <div className=' pl-[90px] w-full flex mt-6 font-medium'>
                <div className='flex mr-28'>
                    <input type='radio' name="gstno" value="true" onChange={() => setHasGST(true)} checked={hasGST === true} /><p className='ml-2  w-[222px]'>My Buisness is GST Registered</p>
                </div>
                <div className='flex'>
                    <input type='radio' name="gstno" value="false" onChange={() => setHasGST(false)} checked={hasGST === false} /><p className='ml-2'>I do not have GST Number</p>
                </div>
            </div>

            <div className='flex flex-col '>
            {hasGST ? <GstFetch /> : <NonGst />}
                <h1 className='mt-8 font-bold border-b border-b-black'>Other Information</h1>
                <div className='flex mt-4'>
                    <div className='flex flex-col w-[448px] mr-3'>
                        <label htmlFor='vtype' className='mb-1 pl-1 font-bold'>Vendor Type<span className="text-red-500">*</span></label>
                        <input 
                            className='h-[42px] rounded-[5px]'
                        />
                    </div>
                    <div className='flex flex-col w-[214px]'>
                        <label htmlFor='pno' className='mb-1 pl-1 font-bold'>Office Phone Number<span className="text-red-500">*</span></label>
                        <input 
                            className='h-[42px] rounded-[5px]'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-[675px]'>
                    <label htmlFor='cweb' className='mb-1 mt-4 pl-1 font-bold'>Company Website</label>
                    <input 
                        className='h-[42px] rounded-[5px]'
                    />
                </div>
                <h1 className='mt-8 font-bold border-b border-b-black'>Primary Contact</h1>
                <div className='flex mt-4'>
                    <div className='flex flex-col w-[418px] mr-2'>
                        <label htmlFor='name' className='mb-1 pl-1 font-bold'>Name</label>
                        <input 
                            className='h-[42px] rounded-[5px]'
                        />
                    </div>
                    <div className='flex flex-col w-[243px]'>
                        <label htmlFor='no' className='mb-1 pl-1 font-bold'>Phone Number</label>
                        <input 
                            className='h-[42px] rounded-[5px]'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-[675px]'>
                    <label htmlFor='email' className='mb-1 mt-4 pl-1 font-bold'>Email ID</label>
                    <input 
                        className='h-[42px] rounded-[5px]'
                    />
                </div>

                {teamMembers.map((member, index) => (
                    <div className='flex flex-col' key={index}>
                        {member}
                        <button className='mt-4 self-end hover:bg-red-600' onClick={(e) => handleDelete(index, e)}><X /></button>
                    </div>
                ))}

                <button onClick={(e)=>handleAdd(e)} className='flex mt-4 font-semibold'>
                    <PlusCircle className='rounded-full mr-2'/>
                    <p>Add Additional Team Members</p>
                </button>

                
                <div className='flex items-center justify-start pl-1 pt-4'>
                <label className='flex items-center text-[12px] font-[400]'>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                    <p className='pl-2'>I understand that this information will be publicly available and posted on the <b>Neevay Network</b></p>
                </label>
                </div>
            </div>
        </form>
    )
}

export default Form