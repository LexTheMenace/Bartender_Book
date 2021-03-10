import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <header className='header' >
            <div></div>
            <div className='header__logo'>
            <Link style={{ color: 'white' }}to='/'><h4>The Bartender Book </h4></Link>
            </div>
            <div className='header__links'>
            <Link style={{ color: 'white' }}to='/saved'>Saved</Link>

            </div>
        </header>
    )
}

