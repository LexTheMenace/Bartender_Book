import React from 'react'
import { useGlobalContext } from '../Store';
import Drink from './Drink';
import './Drinks.css';

export default function Drinks() {
const { results, heading } = useGlobalContext();
console.log(results);
    if (results.length > 1) {
        return (
            <div className='drinks'>
                    <h4>{heading}</h4>
                <div className='drinks__container'>
                    {results.map(drink =>
                        <Drink key={results.drinkId} drink={drink} />
                    )}
                </div>
            </div>
        )
    } else return null
}

