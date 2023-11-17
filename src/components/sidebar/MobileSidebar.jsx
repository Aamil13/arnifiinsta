import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { TbBrandMessenger } from "react-icons/tb";

import { CiSquarePlus } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";


const sidebarData = [
    {title:"Home",icon:<TiHome size={26} />},

    {title:"Explore",icon:<MdOutlineExplore  size={26} />},
    {title:"Reels",icon:<BiSolidMoviePlay  size={26} />},
    {title:"Create",icon:<CiSquarePlus  size={26} />},
    
    {title:"Messages",icon:<TbBrandMessenger  size={26} />},
    {title:"profile",icon:<FaCircleUser  size={26} />},
]

const MobileSidebar = () => {
  return (
    <div className=' fixed w-full bg-[#000000] h-12 bottom-0 border-t-2 border-[#212121] flex justify-between px-16'>
        {
                    sidebarData.map((item,idx)=>(
                        <div key={idx} className='flex gap-5 items-center'>
                              <p>{item.icon}</p>
                            <p className='text-lg max-xl:hidden' >{item.title}</p>
                        </div>
                    ))
                }
      </div>
  )
}

export default MobileSidebar