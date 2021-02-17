import React from 'react'
import './Drinks.css';
import Drink from './Drink';
import Spinner from './layout/spinner.gif';

export default function SavedDrinks() {
const drinks = localStorage.getItem('saved-drinks') ? JSON.parse(localStorage.getItem('saved-drinks')) : null;

return (
    drinks === null ? <h1>No Saved Drinks to Display</h1> :
    drinks.length > 0 ?
    <div className='drinks'>
                    <h4>Your Saved Drinks</h4>
                <div className='drinks__container'>
                    {drinks.map(drink => <Drink key={drink.drinkId} drink={drink} /> )}
                </div>
            </div> :
            <div className='spinner_div'>
        <img className='spinner' src={Spinner} />
        </div>
    )
}

