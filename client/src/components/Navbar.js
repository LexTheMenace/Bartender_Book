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
            <h1>The Bartender Book </h1>
       <Link style={linkStyle} to='/mix'> Mix </Link> ||
            <Link style={linkStyle} to='/Saved'> Saved </Link> 
        </header>
    )
}

