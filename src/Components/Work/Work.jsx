import React from 'react'
import proj11 from '../../assets/proj11.jpg'
import proj22 from '../../assets/proj22.jpg'
import proj33 from '../../assets/proj33.jpg'
import proj44 from '../../assets/proj44.jpg'
import proj55 from '../../assets/proj55.jpg'
import proj66 from '../../assets/proj66.jpg'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>
        
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                             h-[200px] bg-cover relative'>
                       <img src={proj11}  alt="" />

                       <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Project 1</span>

                             <a href="https://dukaan-henna.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live
                                </button>
                             </a>

                       </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                             h-[200px] bg-cover relative'>
                       <img src={proj22}  alt="" />

                       <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Project 2</span>

                             <a href="https://disney-replica-gzkf.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live
                                </button>
                             </a>

                       </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                             h-[200px] bg-cover relative'>
                       <img src={proj33}  alt="" />

                       <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Project 3</span>

                             <a href="https://e-commerce-haris.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live
                                </button>
                             </a>

                       </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                             h-[200px] bg-cover relative'>
                       <img src={proj44}  alt="" />

                       <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Project 4</span>

                             <a href="https://orange-fruit-shop.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live
                                </button>
                             </a>

                       </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                             h-[200px] bg-cover relative'>
                       <img src={proj55}  alt="" />

                       <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Project 5</span>

                             <a href="https://real-estate-agency-black.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live
                                </button>
                             </a>

                       </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                             h-[200px] bg-cover relative'>
                       <img src={proj66}  alt="" />

                       <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Project 6</span>

                             <a href="https://fyp-intra-chat.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live
                                </button>
                             </a>

                       </div>
            </div>

          </div>

    </div>
  )
}

export default Work
