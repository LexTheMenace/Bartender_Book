import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/search-input.component';
import './navbar.css';

export default function Navbar({noSearch}) {
    return (
        <header className='header' style={{ position: noSearch && 'relative'}}>
            <Link to='/'><h3 style={{color: 'white'}}>Bartender Book</h3></Link>
            {!noSearch && <SearchInput/> }
            {!noSearch && <Link to='/saved' style={{ margin: '5px', color: 'white', display: 'flex', alignItems: 'center'}}><FaHeart/></Link>}
        </header> 
        )
};

