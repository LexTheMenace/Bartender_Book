import React from 'react';
import { useDrinkContext } from '../../contexts/drink/Store';
import Drink from '../DrinkCard/Drink';
import './grid.styles.css';

const Grid = ({ singleView }) => {
    const { results } = useDrinkContext();

    return (
        <div className='grid' style={{ 
            gridAutoFlow: singleView && 'column'
        }}>
            {results.map(drink => <Drink drink={drink} /> )}
        </div>
    )
};

export default Grid;