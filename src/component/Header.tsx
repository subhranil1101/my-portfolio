import React from 'react'
import { IconHexagonLetterSFilled } from '@tabler/icons-react';


const Header = () => {
  return (
    <nav className='flex bg-bgColor text-primaryColor dm-mono-regular  justify-between items-center  px-14 h-[18vh] w-full'>
      <IconHexagonLetterSFilled size={80}/>
      <div className='md:flex justify-evenly gap-10 text-xl hidden'>
            <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/about">About</a>
            <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/project">Projects</a>
            <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/education">Education</a>
            <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/skills">Skills</a>
            <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/contact">Contact us</a>
      </div>
    </nav>
  )
}

export default Header
