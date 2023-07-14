import React from 'react'
import Img from '../assets/img.png'
import Attach from '../assets/attach.png'
const Input = () => {
  return (
    <div className='h-[50px] bg-white p-[10px] flex flex-row justify-between'>
        <input type="text" name="" id="" placeholder='Type Something...' className='border-none outline-none color:#2f2d52 w-[100%] ' />
        <div className='flex flex-row items-center gap-4'>
            <img src={Attach} alt="" />
            <input type="file" style={{display:"none"}} name="" id="" />
            <label htmlFor="">
                <img src={Img} alt="" />
            </label>
            <button className='p-2'>Send</button>
        </div>
    </div>
  )
}

export default Input