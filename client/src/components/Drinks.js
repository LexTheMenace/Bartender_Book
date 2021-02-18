import React from 'react'
import './Drinks.css';
import { useGlobalContext } from '../Store';
import Drink from './Drink';
import Spinner from './layout/spinner.gif';

export default function Drinks() {
    const { results, heading, query, unfilteredRes } = useGlobalContext();

    return (
        query === null ? <h1 className='spinner_div'>Enter a Liquor!</h1> :
            results.length > 1 ?
                <div className='drinks'>
                    <h4>{heading}</h4>
                    <div className='drinks__container'>
                        {results.map(drink => <Drink key={drink.drinkId} drink={drink} />)}
                    </div>
                </div> : 
                unfilteredRes.length > 1 ?
                    <div className='drinks'>
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

