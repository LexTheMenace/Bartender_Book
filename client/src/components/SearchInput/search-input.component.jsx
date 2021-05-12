import React from 'react'
import { useDrinkContext } from '../../contexts/drink/Store';

const SearchInput = () => {
    const { query, handleSearch } = useDrinkContext();

    return (
        <form className='searchBar__form' onSubmit={(e) => e.preventDefault()}>
<input 
        type='text' 
        name='search'
        id='search'
        className='searchBar__input' 
        placeholder='Enter Ingredient: "rum" or "mint"'
        value={query ? query : ''} 
        onChange={(e) => handleSearch(e.target.value)}
        />
    </form>
    )
}

export default SearchInput
