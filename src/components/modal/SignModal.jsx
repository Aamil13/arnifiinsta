import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/instaSlice';


const SignModal = ({showmodal,setShowModal,mode}) => {
  const dispatch = useDispatch()
  const [data, setData] =useState({
    firstName:"",
    lastName:"",
    email:""
  })

  const handleChange=(e)=>{
    
    setData((prevstate)=>({
      ...prevstate,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
     {
        showmodal &&
    
    <div className='fixed  w-full h-full flex justify-center items-center'>
        <div className='absolute bg-gray-900 opacity-70 w-full h-full' ></div>
        <div className='w-80 z-20 h-2/3 bg-[#000000] p-4 relative'>
            <div onClick={()=>setShowModal(false)} className='absolute right-0 top-0'><IoClose size={20}/></div>
           <p className='text-center mt-5 text-lg font-bold'>{mode}</p>
           <section className='flex flex-col mt-10 items-center gap-8'>
            <input onChange={handleChange} value={data.firstName} name='firstName' className='w-full bg-transparent p-2 outline-none border-2 rounded-xl' type="text" placeholder='First Name' />
            <input onChange={handleChange} value={data.lastName} name='lastName' className='w-full bg-transparent p-2 outline-none border-2 rounded-xl' type="text" placeholder='Last Name' />
            <input onChange={handleChange} value={data.email} name='email' className='w-full bg-transparent p-2 outline-none border-2 rounded-xl' type="text" placeholder='Email' />
           <button onClick={()=>dispatch(signUp(data))} className='bg-gray-200 p-2 rounded-xl text-black'>Submit</button>
           </section>
        </div>
    </div>
}
    </>
  )
}

export default SignModal