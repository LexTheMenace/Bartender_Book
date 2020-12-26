import React from 'react'
import { Link } from 'react-router-dom'
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

export default function Navbar() {
    return (
        <header style={headerStyle}>
            <Link style={linkStyle} to='/'>  <h1>The Bartender Book </h1> </Link>
            <Link style={linkStyle} to='/saved'> Saved </Link> 
        </header>
    )
}

