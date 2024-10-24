import React from 'react'
import aboutImg from '../../assets/about1.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 ' id='about'>
          <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
              <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                 <p className='text-base lg:text-lg'>
                 I am Syed Haris Shah, a front-end web developer from Peshawar, Pakistan. I hold a BS in Software Engineering from Islamia College University Peshawar and have 2 years of experience in front-end web development, specializing in creating responsive and user-friendly websites.
                 </p>

              </div>

            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} alt="" width={300} height={300} />

          </div>
    </div>
  )
}

export default About
