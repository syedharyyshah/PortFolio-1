import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' 

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
      <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
         
         <h1 className='text-3xl font-bold primary-color ml-4 '> SYED HARIS SHAH </h1>
         <ul className='hidden md:flex'>
            <li className='p-5 hover:text-gray-100'><a href="#about">About</a></li>
            <li className='p-5 hover:text-gray-100'><a href="#work">Work</a></li>
            <li className='p-5 hover:text-gray-100'><a href="#contact">Contact</a></li>
            <li className='p-5 hover:text-gray-100'><a href="#media">Media</a></li>

         </ul>


        <div onClick={handleNav}
             className='justify-end flex md:hidden  fixed top-10 left-0 pr-5 w-full bg-transparent text-gray-400 h-[50px] z-50'>
             {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu  size={20}/>}

        </div>

        <div className={nav ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 "
                                                 : "fixed left-[-100%]"}>
                       <h1 className='text-3xl primary-color m-4'>SYED HARIS SHAH</h1>                             
                       <ul className='p-8 text-2xl '>
                       <li className='p-2 hover:text-gray-100'><a href="#about">About</a></li>
                       <li className='p-2 hover:text-gray-100'><a href="#work">Work</a></li>
                       <li className='p-2 hover:text-gray-100'><a href="#contact">Contact</a></li>
                       <li className='p-2 hover:text-gray-100'><a href="#media">Media</a></li>


                       </ul>

        </div>


      </div>
    </div>
  )
}

export default Navbar
