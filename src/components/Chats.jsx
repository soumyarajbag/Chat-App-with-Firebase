import React from 'react'

const Chats = () => {
  return (
    <div className='text-white'>
        <div className='flex flex-row items-center gap-5 m-4 cursor-pointer hover:bg-[#2f2d52]'>
        <img src="https://media.licdn.com/dms/image/C4E03AQH-ORH0IQumxQ/profile-displayphoto-shrink_400_400/0/1589340787928?e=1694649600&v=beta&t=7F5wBhQTuYZm0VY4EzJQ6Su3exKipR6_HpAz-s-egR8" alt="" className='h-[50px] w-[50px] rounded-[50%] object-fit' />
        <div>
          <span className='font-bold'>Jane</span>
          <p className='text-[14px] text-gray-300'>Hello</p>
        </div>
      </div>

    </div>
  )
}

export default Chats