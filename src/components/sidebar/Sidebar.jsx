import React, { useState } from 'react'
import { TiHome } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { TbBrandMessenger } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import CreatePostModal from '../modal/CreatePostModal';

const sidebarData = [
    {title:"Home",icon:<TiHome size={26} />},
    {title:"Search",icon:<IoIosSearch size={26} />},
    {title:"Explore",icon:<MdOutlineExplore  size={26} />},
    {title:"Reels",icon:<BiSolidMoviePlay  size={26} />},
    {title:"Messages",icon:<TbBrandMessenger  size={26} />},
    {title:"Notification",icon:<FaRegHeart  size={26} />},
    {title:"Create",icon:<CiSquarePlus  size={26} />},
    {title:"profile",icon:<FaCircleUser  size={26} />},
]

const Sidebar = () => {
    const [showmodal, setShowModal] = useState(false)
  return (
    <>
    <div className='border-r-2 fixed border-[#212121] h-full'>
        <div className='px-6 pt-14 flex flex-col justify-between h-full'>
            <p className='font-bold text-2xl max-xl:hidden'>Instagram</p>
            <p className='xl:hidden'><FiInstagram size={26} /></p>
            <div className='h-[65%] flex flex-col justify-between'>
                {
                    sidebarData.map((item,idx)=>(
                        <div onClick={()=> item.title === "Create" ? setShowModal(true) : "" } key={idx} className='flex gap-5 items-center'>
                              <p>{item.icon}</p>
                            <p className='text-lg max-xl:hidden' >{item.title}</p>
                        </div>
                    ))
                }
              
            </div>
            <div className='flex flex-col gap-5 mb-6'>
                <div className='flex items-center gap-5'>
                    <FaThreads size={26}/>
                    <p className='max-xl:hidden'>threads</p>
                </div>
                <div className='flex items-center gap-5'>
                    <FaBars size={26}/>
                    <p className='max-xl:hidden'>more</p>
                </div>
            </div>
        </div>
    </div>
    <CreatePostModal showmodal={showmodal} setShowModal={setShowModal}/>

    </>
  )
}

export default Sidebar