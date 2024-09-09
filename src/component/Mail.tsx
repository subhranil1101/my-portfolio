import React from 'react'

const Mail = () => {
  return (
    <div className='flex  gap-4 items-center fixed bottom-[178px] -right-[220px] rotate-90'>
      <a href='mailto:subhr750nil@gmail.com' className='text-textColor font-mono text-lg hover:cursor-pointer hover:font-medium hover:text-primaryColor letter tracking-widest hover:-translate-x-2 transition transform duration-150 ease-in-out'>subhr750nil@gmail.com</a>
      <hr className='border-[1px] bg-textColor rounded-full border-textColor text-textColor w-72'/>
    </div>
  )
}

export default Mail
