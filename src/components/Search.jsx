import React from 'react'

const Search = () => {
  return (
    <div className='border-b-2 border-b-gray-500'>
      <div className='p-[10px]'>
        <input type="text" name="" id="" placeholder='Find Any User' className='bg-transparent border-none px-2 text-white outline-none placeholder:text-gray-400' />
      </div>
      <div className='flex flex-row items-center gap-5 m-4 cursor-pointer hover:bg-[#2f2d52]'>
        <img src="https://media.licdn.com/dms/image/C4E03AQH-ORH0IQumxQ/profile-displayphoto-shrink_400_400/0/1589340787928?e=1694649600&v=beta&t=7F5wBhQTuYZm0VY4EzJQ6Su3exKipR6_HpAz-s-egR8" alt="" className='h-[50px] w-[50px] rounded-[50%] object-fit' />
        <div>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search