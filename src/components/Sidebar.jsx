import React from 'react'
import Navbar from './Navbar'
import Search from '../components/Search'
import Chats from '../components/Chats'
const Sidebar = () => {
  return (
    <div className='flex-[1] border-r bg-[#3e3c61]'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar