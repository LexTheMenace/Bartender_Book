import React from 'react'
import { useGlobalContext } from '../Store'
import './Searchbar.css';

function SearchBar() {
const { query, handleSearch } = useGlobalContext();
    return (
        <div className='searchBar'>
                <form className='searchBar__form' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='search'>Search By Liquor/ Ingredient:</label>
                    <input 
                    type='text' 
                    name='search'
                    className='searchBar__input' 
                    value={query} 
                    onChange={(e) => handleSearch(e.target.value)}/> <br/>
                </form>
            {/*     <form onSubmit={this.random}>
                    <h5> "Surpise Me"! </h5>
                    <button type='submit' value='Submit' style={{ width: '10%' }}><img style={{ width: '100px' }} src='https://mattsko.files.wordpress.com/2013/07/dancing-cocktail-shaker.gif' /></button>
                </form> */}
        </div>
    )
}

export default SearchBar
