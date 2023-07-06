import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
export default function Navbar(){
  return (
    <div className='navbar container'>
        <div className='logo'>
            <img src={Logo} />
        </div>
        <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
    </div>
  )
}
