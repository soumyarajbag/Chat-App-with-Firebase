import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center bg-[#2f2d52] h-[60px]  p-[10px] content-center text-[#ddddf7] justify-between'>
      <span className='font-bold'>Talkie-Talk</span>
      <div className='flex flex-row gap-[10px] items-center'>
        <img src="https://media.licdn.com/dms/image/C4E03AQH-ORH0IQumxQ/profile-displayphoto-shrink_400_400/0/1589340787928?e=1694649600&v=beta&t=7F5wBhQTuYZm0VY4EzJQ6Su3exKipR6_HpAz-s-egR8" alt="" className='bg-[#ddddf7] h-[24px] w-[24px] rounded-[50%] object-cover' />
        <span>Soumyaraj</span>
        <button className='bg-[#5d5b8d] text-[#ddddf7] rounded-md font-[10px] border-none cursor-pointer p-2'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar