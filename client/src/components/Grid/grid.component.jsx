import React from 'react';
import { useDrinkContext } from '../../contexts/drink/Store';
import Drink from '../DrinkCard/Drink';
import './grid.styles.css';

const Grid = ({ setModalOpen, 
    setCurrentDrink,
scroll }) => {
    const { results } = useDrinkContext();

    return (
        <div className='grid' style={{overflow: scroll && 'hidden'}} >
            {results.map(drink => <Drink setCurrentDrink={setCurrentDrink} drink={drink} setModalOpen={setModalOpen}/> )}
        </div>
    )
};

export default Grid;