import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/syedharyyshah', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/syed-haris-shah-3271182b8/', '_blank');
  };

  return (
    <div id='media'>
       <div className='flex items-center mr-20  md:justify-end p-5'>
      <FaGithub 
          className='text-4xl sm:2xl: cursor-pointer mx-2 my-2 text-cyan-300' 
          onClick={handleGitHubClick} 
        />
        <FaLinkedin 
          className='text-4xl sm:2xl: cursor-pointer mx-2 my-2  text-cyan-300' 
          onClick={handleLinkedInClick} 
        />
      </div>
     <div className='max-w-[1200px] sm:h-[150px] p-5 flex  justify-between items-center  mx-auto'>
     <span className='primary-color text-lg font-semibold'>SYED HARIS SHAH</span>
      <div className='flex items-center'>
        <p className='text-gray-600 mr-4'>
          syedharryshah1@gmail.com <br /> #webDev2024
        </p>
       
      </div>
     </div>
     
    </div>
  );
}

export default Footer;
