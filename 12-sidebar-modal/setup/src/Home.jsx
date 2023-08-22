import React, { useContext } from 'react'
import { FaBars, FaMapPin } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Home = () => {
  const {openModal, openSidebar} = useGlobalContext()
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}><FaBars /></button>
      <button className="btn" onClick={openModal}>Modal</button>
    </main>
  )
}

export default Home
