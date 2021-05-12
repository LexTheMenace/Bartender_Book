import React from 'react';
import { useDrinkContext } from '../../contexts/drink/Store';
import Drink from '../DrinkCard/Drink';
import ScrollToTop from '../ScrollToTop/ScrollTop';
import './grid.styles.css';

const Grid = ({ setModalOpen, 
    setCurrentDrink,
    setSavedDrinks,
scroll, drinks }) => {
    const { results } = useDrinkContext();
 
    return (
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center'}}>

        <div className='grid' style={{overflow: scroll && 'hidden'}} >
            {
                !drinks ?
                results.map(drink => <Drink setCurrentDrink={setCurrentDrink} drink={drink} setModalOpen={setModalOpen}/> ) :
                drinks.map(drink => <Drink setSavedDrinks={setSavedDrinks} setCurrentDrink={setCurrentDrink} drink={drink} setModalOpen={setModalOpen}/> )
            }
        </div>
            </div>
    )
};

export default Grid;