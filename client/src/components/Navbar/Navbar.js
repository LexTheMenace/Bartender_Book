import React from 'react'
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/search-input.component';
import './navbar.css';

export default function Navbar({noSearch}) {
    return (
        <header className='header' >
            <Link to='/'><h3 style={{color: 'white'}}>Bartender Book</h3></Link>
            {!noSearch && <SearchInput/> }
            {!noSearch && <Link to='/saved' style={{ margin: '5px', paddingRight: '15px'}}>Saved</Link>}
        </header> 
        )
};

