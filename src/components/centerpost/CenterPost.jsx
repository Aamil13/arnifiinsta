import React, { useEffect, useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import CommentModal from '../modal/CommentModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../store/instaSlice';

const CenterPost = () => {
  const postsData = useSelector((state)=> state.postSlice)
  const [showmodal, setShowModal] = useState(false)
  const [id, setID] = useState("")
  const [owner, setOwner] = useState([])
  const dispatch = useDispatch()
// console.log(postsData);
  useEffect(()=>{
    dispatch(fetchPost())
  },[])

  return (
    <div className='flex justify-center w-full'>
      <div className='mt-20 w-96'>
    {/* ///loop */}
    {
      postsData?.data?.data?.map((item,idx)=>(

      
        <div className='flex flex-col gap-4 pb-2 mb-20 border-b-2 border-[#212121] '>
          <section className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              <img className='w-10 h-10 rounded-full' src={item?.owner?.picture} alt="profile" />
              <p className='font-semibold text-sm'>{item?.owner?.firstName}</p>
            </div>
            <BsThreeDots size={24}/>
          </section>

          <section>
            <img className='h-[468px] w-full' src={item?.image} alt="post" />
          </section>

          <section className='flex w-full justify-between'>
            <section className='flex gap-4'>
              <FaRegHeart size={26}/>
              <IoChatbubbleOutline size={26}/>
              <IoPaperPlaneOutline size={26}/>
            </section>
            <FaRegBookmark size={26}/>
          </section>

          <p className='text-sm'>{item?.likes} likes</p>

          {/* text details  */}
          <section>
            <p>{item?.owner?.firstName} <span className='text-xs'>{item?.text}</span></p>


        <div className='flex gap-2 text-[#bdcbd7] text-sm'>
         {
          item?.tags?.map((item,idx)=>(
            <p>{item}</p>
          ))
         }
        </div>
          </section>

          <section>
            <p onClick={()=>(setShowModal(true),setID(item?.id),setOwner(item?.owner))} className='text-xs text-gray-200'>View comments</p>
            <div className='flex'>
            <input className='w-full bg-transparent p-2 outline-none' type="text" placeholder='Add a comment..' />
              <button className='text-sm text-blue-600'>Post</button>
            </div>
          </section>
        </div>
))
}
      </div>
      <CommentModal id={id} owner={owner} showmodal={showmodal} setShowModal={setShowModal}/>
    </div>
  )
}

export default CenterPost