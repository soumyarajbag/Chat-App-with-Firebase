import React from 'react'
import Add from '../assets/addAvatar.png'

const Login  = () => {
  return (
    <div className='flex h-[100vh] items-center justify-center bg-[#050c35]'>
        <div className='bg-[#0b2039] border rounded-lg text-black flex flex-col gap-[10px] items-center py-[20px] px-[80px]'>
            <span className='font-bold text-3xl text-red-900 '>Talkie-Talk</span>
            <span className='font-semibold text-2xl text-green-700'>Register here !</span>
            <form action="" className='flex flex-col gap-[15px] items-center justify-center'>
                
                <input type="email" name="" id="" placeholder='Email' className='px-4 h-10 w-full  border-2 rounded-lg bg-gray-300 placeholder:text-black' />
                <input type="password" name="" id="" placeholder='Password' className='px-4 h-10 w-full border-2 rounded-lg bg-gray-300 placeholder:text-black' />
        
            </form>
            <button className='bg-orange-600 text-white py-2 px-5 rounded-lg font-semibold'>Login</button>
            <p className='text-center font-bold text-lg text-white'>Don't Have An Account ? <h1 className='text-green-700  hover:text-green-500 hover:cursor-pointer'>Sign Up</h1></p>
        </div>
    </div>
  )
}

export default Login 