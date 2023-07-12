import React from 'react'
import Add from '../assets/addAvatar.png'

const Register = () => {
  return (
    <div className='flex h-[100vh] items-center justify-center bg-[#050c35]'>
        <div className='bg-[#0b2039] border rounded-lg text-black flex flex-col gap-[10px] items-center py-[20px] px-[40px]'>
            <span className='font-bold text-3xl text-red-900 '>Talkie-Talk</span>
            <span className='font-semibold text-2xl text-green-700'>Register here !</span>
            <form action="" className='flex flex-col gap-[15px] items-center justify-center'>
                <input type="text" name="" id="" placeholder='Name ' className='px-4 h-10 w-full border-2 rounded-lg bg-gray-300 placeholder:text-black'/>
                <input type="email" name="" id="" placeholder='Email' className='px-4 h-10 w-full  border-2 rounded-lg bg-gray-300 placeholder:text-black' />
                <input type="password" name="" id="" placeholder='Password' className='px-4 h-10 w-full border-2 rounded-lg bg-gray-300 placeholder:text-black' />
                <input type="file" name="" id="photo" placeholder='Your Profile Photo' className='w-[210px] hidden text-white'  />
               <label htmlFor="photo" className='text-white mb-2 gap-2 cursor-pointer text-xl flex flex-row items-center'>
                <img src={Add} alt="" className='h-[30px] w-[30px] ' />
                Profile Photo</label>
            </form>
            <button className='bg-orange-600 text-white py-2 px-5 rounded-lg font-semibold'>Sign Up</button>
            <p className='text-center font-bold text-md text-white'>Already Have An Account Have An Account ? <h1 className='text-green-700  hover:text-green-500 hover:cursor-pointer'>Sign Up</h1></p>
        </div>
    </div>
  )
}

export default Register