import React from 'react'
import { Link } from 'react-router-dom';
import { useDrinkContext } from '../../contexts/drink/Store';
import './navbar.css';

export default function Navbar() {
    const { query, handleSearch } = useDrinkContext();

    return (
        <header className='header' >
            <h3>Bartender Book</h3>
                <form className='searchBar__form' onSubmit={(e) => e.preventDefault()}>
                    {/* <label htmlFor='search'>Search Cocktails By Liquor or Ingredient:</label> */}
                    <input 
                    type='text' 
                    name='search'
                    id='search'
                    className='searchBar__input' 
                    placeholder='Search Ingredient: "rum" or "mint"'
                    value={query ? query : ''} 
                    onChange={(e) => handleSearch(e.target.value)}
                    />
                </form>
        </header> )
};

