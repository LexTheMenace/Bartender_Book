import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
   

    return (
        <header className='header' >
            <div className='header__logo'>
            <Link /* style={linkStyle} */ style={{ color: 'white' }}to='/'><h4>The Bartender Book </h4></Link>
            </div>
         {/*    {heading && 
            <div className='header__center'>
                <h4>{heading}</h4>
            </div>
            } */}
        {/*     <div className='header__options'>
                <div className='header__option'>
       <Link style={linkStyle} to='/add'> Create </Link> 

                </div>
                <div className='header__option'>
            <Link style={linkStyle} to='/viewHistory'> Saved </Link> 
                </div>    
                <div className='header__option'>
            <Link style={linkStyle} to='/saved'> Saved </Link> 
                </div> 
            </div>*/}
        </header>
    )
}

