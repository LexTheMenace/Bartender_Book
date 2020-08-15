import React from 'react'
import Drink from './Drink'

export default function Drinks(props) {
const {results, onClick} = props
console.log(props);
    if (results.length > 1) {
        return (
            <React.Fragment>
                <button style={{padding: '15px', background: 'black', color: 'white'}} onClick={onClick}>Re-Mix?</button>
                <div className='container'>
                    {results.map(drink =>
                        <Drink key={results.drinkId} drink={drink} />
                    )}
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <button style={{padding: '10px', background: 'black', color: 'white', border: '1px solid gray', margin: '10px'}} onClick={onClick}>Re-Mix?</button>
                <div className='container'>
                    <Drink key={results.drinkId} drink={results} />
                </div>
            </React.Fragment>
        )
    }

}
