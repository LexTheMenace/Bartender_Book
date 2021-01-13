import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Store';
import './navbar.css';

const headerStyle = {
    background: 'black',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    borderBottom: 'gray 1px solid',
    marginBottom: '50px'
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

/* export default function Navbar() {
    return (
        <header style={headerStyle}>
            <Link style={linkStyle} to='/'>  <h1>The Bartender Book </h1> </Link>
            <Link style={linkStyle} to='/saved'> Saved </Link> 
        </header>
    )
} */

export default function Navbar() {
    const { heading } = useGlobalContext();

    
    return (
        <header className='header' >
            <div className='header__logo'>
            <Link /* style={linkStyle} */ to='/'><h4>The Bartender Book </h4></Link>

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
            <Link style={linkStyle} to='/saved'> Saved </Link> 
                </div> 
            </div>*/}
        </header>
    )
}

