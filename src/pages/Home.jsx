import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
const Home = () => {
  return (
    <div className='bg-[#a7bcff] flex h-[100vh] items-center justify-center'>
        <div className='border border-1  border-white rounded-md w-[65%] h-[80%] flex flex-row overflow-hidden'>
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home