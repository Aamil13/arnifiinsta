import React from 'react'
import { IoClose } from "react-icons/io5";
const CreatePostModal = ({showmodal,setShowModal}) => {
    
  return (
    <>
    {
        showmodal &&
    
    <div className='fixed  w-full h-full flex justify-center items-center'>
        <div className='absolute bg-gray-900 opacity-70 w-full h-full' ></div>
        <div className='w-80 z-20 h-3/4 bg-black p-4 relative'>
            <div onClick={()=>setShowModal(false)} className='absolute right-0 top-0'><IoClose size={20}/></div>
           
           <section>
            <img className='w-full min-h-[430px]' src="" alt="postimage" />
           </section>

          <section className='flex flex-col gap-7'>
            <div className='flex'>
            <input className='w-full bg-transparent p-2 outline-none' type="text" placeholder='Type something' />
            </div>
            <button className='text-sm text-blue-600'>Post</button>

          </section>
        </div>
    </div>
}
</>
  )
}

export default CreatePostModal