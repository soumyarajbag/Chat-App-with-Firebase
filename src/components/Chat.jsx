import React from 'react'
import Cam from '../assets/cam.png'
import Add from '../assets/add.png'
import More from '../assets/more.png'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='flex-[2] '>
         <div className='h-[60px] bg-[#5d5b8d] flex flex-row justify-between items-center px-2'>
          <span className='text-xl text-gray-300 font-semibold'>Jane</span>
          <div className='flex flex-row justify-evenly gap-[10px] '>
            <img src={Cam} alt="" className='h-[24px] cursor-pointer' />
            <img src={Add} alt="" className='h-[24px] cursor-pointer' />
            <img src={More} alt="" className='h-[24px] cursor-pointer' />

          </div>
         
         </div>
         <Messages />
         <Input />
    </div>
  )
}

export default Chat