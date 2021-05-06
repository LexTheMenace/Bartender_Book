import React from 'react';
import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import DrinkModal from '../DrinkModal/DrinkModal';
import './Drink.css'
const Drink = ({ drink, history }) => {
    const { name, thumbnail, drink_id } = drink;
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
  <div>
{ modalOpen && <DrinkModal setModalOpen={setModalOpen} drink={drink}/>}
        <div  className='drink__card' onClick={() => setModalOpen(true)}>
                   <div className={'drink__card__top'}>
                          <img  src={thumbnail} alt={name} />
                    </div> 
                    <div className='drink__card__footer'>
                        <h4 >{name}</h4>
                    </div>
        </div>
  </div>    
    );

};

export default withRouter(Drink);