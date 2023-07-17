import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login  = () => {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const email = e.target[0].value;
    const password = e.target[1].value;
   

    try {
     await signInWithEmailAndPassword(auth, email, password) ;
     navigate("/");
    } catch (err) {
      setErr(true);
    }
  };





  return (
    <div className='flex h-[100vh] items-center justify-center bg-[#050c35]'>
        <div className='bg-[#0b2039] border rounded-lg text-black flex flex-col gap-[10px] items-center py-[20px] px-[80px]'>
            <span className='font-bold text-3xl text-red-900 '>Talkie-Talk</span>
            <span className='font-semibold text-2xl text-green-700'>Register here !</span>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-[15px] items-center justify-center'>
                
                <input type="email" name="" id="" placeholder='Email' className='px-4 h-10 w-full  border-2 rounded-lg bg-gray-300 placeholder:text-black' />
                <input type="password" name="" id="" placeholder='Password' className='px-4 h-10 w-full border-2 rounded-lg bg-gray-300 placeholder:text-black' />
                <button className='bg-orange-600 text-white py-2 px-5 rounded-lg font-semibold'>Login</button>
                {err && <span>Something Went Wrong !</span>}
            </form>
            
            <p className='text-center font-bold text-lg text-white'>Don't Have An Account ? </p>
            <Link to='/register'><h1 className='text-green-700  hover:text-green-500 hover:cursor-pointer text-center font-bold'>Sign Up</h1></Link>
        </div>
    </div>
  )
}

export default Login 