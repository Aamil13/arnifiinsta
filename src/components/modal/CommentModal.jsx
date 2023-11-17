import React, { useDebugValue, useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { getcomments } from '../../store/instaSlice';
const CommentModal = ({showmodal,setShowModal,id,owner}) => {
  const commentsdata =  useSelector((state)=>state.postSlice)
  // console.log(commentsdata);
  // console.log("id",id);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getcomments(id))
  },[id])
    
  return (
    <>
    {
        showmodal &&
    
    <div className='fixed  w-full h-full flex justify-center items-center'>
        <div className='absolute bg-gray-900 opacity-70 w-full h-full' ></div>
        <div className='w-80 z-20 h-2/3 bg-black p-4 relative'>
            <div onClick={()=>setShowModal(false)} className='absolute right-0 top-0'><IoClose size={20}/></div>
            <section className='border-b-2 py-2 border-[#212121] flex justify-between '>
                <section className='flex gap-2'>
                    <img className='w-10 h-10 rounded-full' src={owner?.picture} alt="profileimage" />
                    <p className='text-sm font-bold'>{owner?.firstName}</p>
                </section>
                <BsThreeDots size={20} />
            </section>
            {/* comments  */}
            <div className='border-b-2 border-[#212121] min-h-[300px]'>
            { commentsdata?.Comments?.data?.length > 0 ?
              commentsdata?.Comments?.data?.map((item,idx)=>(
                <section className=' py-2 flex justify-between items-center '>
                <section className='flex gap-2'>
                    <img className='w-10 h-10 rounded-full' src={item.owner.picture} alt="profileimage" />
                    <p className='text-sm font-semibold'>{item.owner.firstName} <span className='text-xs font-medium'>
                    {item.message}
                        </span></p>
                </section>
                <FaRegHeart size={22} />
            </section>
              ))
              : <p>No comments yet</p>
            }
            
          
            </div>

            <section className='flex w-full justify-between mt-5'>
            <section className='flex gap-4'>
              <FaRegHeart size={26}/>
              <IoChatbubbleOutline size={26}/>
              <IoPaperPlaneOutline size={26}/>
            </section>
            <FaRegBookmark size={26}/>
          </section>

          {/* <p className='text-sm'>1,100 likes</p> */}
          <section className='mt-4'>
            <div className='flex'>
            <input className='w-full bg-transparent p-2 outline-none' type="text" placeholder='Add a comment...' />
              <button className='text-sm text-blue-600'>Post</button>
            </div>
          </section>
        </div>
    </div>
}
</>
  )
}

export default CommentModal