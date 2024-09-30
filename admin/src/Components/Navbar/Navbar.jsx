import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className="logo" src="" alt="" />
        <img src={assets.profile_image} className='profile'/>
    </div>
  )
}

export default Navbar