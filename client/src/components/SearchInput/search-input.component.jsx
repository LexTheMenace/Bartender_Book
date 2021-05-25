import React from 'react'
import { useDrinkContext } from '../../contexts/drink/Store';

const SearchInput = () => {
    const { query, handleSearch } = useDrinkContext();

    return (
<input 
        type='text' 
        name='search'
        id='search'
        className='searchBar__input' 
        placeholder='Enter Ingredient: "rum" or "mint"'
        value={query ? query : ''} 
        onChange={(e) => handleSearch(e.target.value)}
        />

    )
}

export default SearchInput
