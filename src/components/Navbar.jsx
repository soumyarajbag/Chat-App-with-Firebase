import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import {AuthContext} from '../context/AuthContext'
import {  useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate() ;
  const {currentUser} = useContext(AuthContext) ;
  
  return (
    <div className='flex flex-row items-center bg-[#2f2d52] h-[60px]  p-[10px] content-center text-[#ddddf7] justify-between'>
      <span className='font-bold'>Talkie-Talk</span>
      <div className='flex flex-row gap-[10px] items-center'>
        <img src={currentUser.photoURL} alt="" className='bg-[#ddddf7] h-[24px] w-[24px] rounded-[50%] object-cover' />
        <span className='text-white font-bold text-lg'>{currentUser.displayName}</span>
        <button onClick={()=>{signOut(auth) ; navigate("/login") }} className='bg-[#5d5b8d] text-[#ddddf7] rounded-md font-[10px] border-none cursor-pointer p-2'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar