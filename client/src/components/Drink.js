import React from 'react';
import { Link } from 'react-router-dom'
import './Drink.css'
const Drink = ({ drink }) => {
    const { name, thumbnail, drink_id } = drink;
    return (
      
        <div  className='drink__card' ><Link to={`/drink/${drink_id}`}>
                   <div className={'drink__card__top'}>
                          <img  src={thumbnail} alt={name} />
                    </div> 
                    <div className='drink__card__footer'>
                        <h4 >{name}</h4>
                    </div>
                </Link></div>
    );

};

export default Drink;