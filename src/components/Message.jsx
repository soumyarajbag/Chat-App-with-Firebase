import React, { useState } from 'react'

const Message = () => {
    const [user , setUser]=useState(false)
  return (
    <div className={`flex ${user?"flex-row-reverse items-end":"flex-row items-start"} gap-[20px]`}>
        <div className='flex flex-col text-md text-gray-600 mb-[20px]'>
            <img src="https://media.licdn.com/dms/image/C4E03AQH-ORH0IQumxQ/profile-displayphoto-shrink_400_400/0/1589340787928?e=1694649600&v=beta&t=7F5wBhQTuYZm0VY4EzJQ6Su3exKipR6_HpAz-s-egR8" alt=""  className='h-[40px] w-[40px] rounded-full object-cover' />
            <span>Just Now</span>
        </div>

        <div className='max-w-[50%] flex flex-col gap-[10px]  '>
            <p className={`bg-white p-[10px] text-white  ${user?"bg-[#8da4f1] rounded-bl-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10px]" : "rounded-t-0 rounded-br-[10px] rounded-bl-[10px] rounded-tr-[10px]"} `}>Hello</p>
            <img src="https://media.licdn.com/dms/image/C4E03AQH-ORH0IQumxQ/profile-displayphoto-shrink_400_400/0/1589340787928?e=1694649600&v=beta&t=7F5wBhQTuYZm0VY4EzJQ6Su3exKipR6_HpAz-s-egR8" alt=""  className='h-[50px] w-[50px] rounded-full object-cover max-content' />
        </div>
    </div>
  )
}

export default Message