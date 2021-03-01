import React from 'react'
import './Drinks.css';
import { useGlobalContext } from '../Store';
import Drink from './Drink';
import Spinner from './layout/spinner.gif';

export default function Drinks() {
    const { results, heading, query, unfilteredRes, isLoading, filterCategory } = useGlobalContext();

    const allCategories = [...new Set(unfilteredRes.map(item => item.category))].sort();

    return (
        query === null ? <h1 className='spinner_div'>Enter a Liquor!</h1> :
            results.length > 1 ?
                <div className='drinks'>
                    <div className='btn-container'>
                        Sort by Category: {allCategories.map(category => <button className='filter-btn' onClick={() => filterCategory(category)}>{category}</button>)}
                    </div>
                    <h4>{heading}</h4>
                    <div className='drinks__container'>
                        {results.map(drink => <Drink key={drink.drinkId} drink={drink} />)}
                    </div>
                </div> :
                unfilteredRes.length > 1 ?
                    <div className='drinks'>
                        <div className='btn-container'>
                            Sort by Category: {allCategories.map(category => <button className='filter-btn' onClick={() => filterCategory(category)}>{category}</button>)}
                        </div>
                        <h4>{heading}</h4>
                        <div className='drinks__container'>
                            {unfilteredRes.map(drink => <Drink key={drink.drinkId} drink={drink} />)}
                        </div>
                    </div> :
                    <div className='spinner_div'>
                        <img className='spinner' src={Spinner} />
                    </div>
    )
}

