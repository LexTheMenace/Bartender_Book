import e from 'cors';
import React from 'react';
import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import DrinkModal from '../DrinkModal/DrinkModal';
import './Drink.css'
const Drink = ({ drink, history, setModalOpen, setCurrentDrink, setSavedDrinks }) => {
  const { name, thumbnail, drink_id } = drink;

  return (
        <div className='drink__card' onClick={() => {
        setCurrentDrink(drink)
        setModalOpen(true)
        }}>
          <div className={'drink__card__top'}>
            <img src={thumbnail} alt={name} />
          </div>
          <div className='drink__card__footer'>
            {setSavedDrinks && <div></div>}
            <h4 >{name}</h4> {setSavedDrinks && <button style={{ zIndex: '20', fontSize: '1.2rem', cursor: 'pointer', background: 'transparent', border: 'none', color: 'red', position: 'relative', right: '-10px'}} onClick={(e) => {
              e.stopPropagation()
              setSavedDrinks(drinks => drinks.filter(drink => drink.drink_id !== drink_id))}}>x</button>}
          </div>
        </div>
  );

};

export default withRouter(Drink);