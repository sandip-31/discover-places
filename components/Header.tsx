import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-3 px-5 shadow-sm'>
      <div className='flex gap-3 items-center'>
        <Image src='/logo.png' alt='logo' width={50} height={50}></Image>
        <h2 className='text-[25px] text-red-500 tracking-wider font-semibold'>Discover</h2>
      </div>
      <ul className='flex gap-8 items-center'>
        <li className='text-[18px] hover:text-red-500 cursor-pointer'>Home</li>
        <li className='text-[18px] hover:text-red-500 cursor-pointer'>About Us</li>
        <li className='text-[18px] hover:text-red-500 cursor-pointer'>Contact Us</li>
      </ul>
    </div>
  )
}

export default Header
