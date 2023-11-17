import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import SignModal from '../modal/SignModal';
import { useSelector } from 'react-redux';

const RightSidebar = () => {
  const userdata = useSelector((state)=> state.postSlice)
  const [showmodal, setShowModal] = useState(false)
  const [mode, setMode] = useState("")
  const loggedid = localStorage.getItem("userID")
  const loggeduser = localStorage.getItem("userName")
  return (
    <>
    {
      !loggedid ?
    
    <div className='max-lg:hidden'>
      <div className='flex mt-10 gap-10 border-2 border-[#212121] w-2/3 px-1 py-3 rounded-xl'>
        <p onClick={()=>{setShowModal(true),setMode("SignIn")}}>SignIn</p>
        <p onClick={()=>{setShowModal(true),setMode("SignUp")}}>SignUp</p>
      </div>
      </div>
      :
      <div className='h-20 flex items-center justify-between mt-10 gap-10 border-2 border-[#212121] mr-5 px-3 py-3 rounded-xl'>
        <div className='flex gap-4 items-center'>
          <FaCircleUser size={36}/>
          <p>{loggeduser}</p>
        </div>
        <p className='text-blue-400'>switch</p>
  </div> 
    
    
  }
  <SignModal mode={mode} showmodal={showmodal} setShowModal={setShowModal}/>
    </>
  )
}

export default RightSidebar