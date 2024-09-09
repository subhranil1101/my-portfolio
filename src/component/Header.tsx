import React from 'react'
import { IconHexagonLetterSFilled } from '@tabler/icons-react';
import SideBar from './SideBar';

const links = ['About', 'Projects', 'Education', 'SKills', 'Contact me']

const navLinks = (col:boolean) => {
  return links.map((link, index) => {
    return <a className={`${col?'flex flex-col justify-center items-center':''} text-textColor hover:text-primaryColor hover:font-semibold`} href={`/${link}`} ><span className='text-primaryColor'>0{index + 1}.</span>{link}</a>
  }
  )
}

const Header = () => {
  return (
    <nav className='flex bg-bgColor text-primaryColor dm-mono-regular  justify-between items-center  px-14 h-[16vh] w-full'>
      <IconHexagonLetterSFilled className='z-10' size={60} />
      <div className='md:flex justify-evenly gap-10 lg-mx:gap-8 md-mx:gap-2 xl:text-2xl md:text-md lg-mx:text-md  hidden'>
        {navLinks(false)}
      </div>
      <span className='md:hidden pb-[40px] px-16' >
        <SideBar />
      </span>
    </nav>
  )
}

export default Header;
export { navLinks };