import React from 'react'
import { IconHexagonLetterSFilled } from '@tabler/icons-react';
import SideBar from './SideBar';


const Header = () => {

  const links = ['About', 'Projects', 'Education', 'SKills', 'Contact me']
  const navLinks = () => {
  return links.map((link,index) => {
    return <a className='text-textColor hover:text-primaryColor hover:font-semibold' href={`/${link}`} ><span className='text-primaryColor'>0{index+1}</span>.{link}</a>
  }
  )
  }
  
  return (
    <nav className='flex bg-bgColor text-primaryColor dm-mono-regular  justify-between items-center  px-14 h-[16vh] w-full'>
      <IconHexagonLetterSFilled size={60} />
      <div className='md:flex justify-evenly gap-10 lg-mx:gap-8 md-mx:gap-2 xl:text-2xl md:text-md lg-mx:text-md  hidden'>
        {/* <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/about">About</a>
        <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/project">Projects</a>
        <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/education">Education</a>
        <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/skills">Skills</a>
        <a className='text-textColor hover:text-primaryColor hover:font-semibold' href="/contact">Contact me</a> */}
        {navLinks()}
      </div>
      <span className='md:hidden ' >
        <SideBar/>
      </span>
    </nav>
  )
}

export default Header
