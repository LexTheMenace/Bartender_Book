import React, { Component } from 'react'
import Drink from './Drink'
import { Consumer } from '../context';

export default class Drinks extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { drinks, heading } = value
                    const { strInstructions, strDrink, strDrinkThumb, strGlass, idDrink } = drinks
                    if (drinks === undefined || drinks.length === 0) {
                        return <h1 style={{display: 'none'}}>Nothing to Show.</h1>
                    }
                    else {
                        return (
                            <div>
                             <h2>{heading}</h2> <br/>
                            <div className='container'>
                            <React.Fragment>
                                {drinks.map(drink => (
                                    <Drink key={drink.idDrink} drink={drink} />
                                ))}
                            </React.Fragment>
                            </div>
                            </div>
                        )
                    }
                }}
            </Consumer>
        )
    }
}
