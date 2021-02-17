import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Drink.css'
const Drink = ({ drink }) => {

    // COuld set liked/ Saved Boolean
    const onClick = (e) => {
        e.preventDefault();
        const saveBtn = e.target;
        const icon = saveBtn.innerHTML;

        axios.post('/api/drinks', drink)
            .then(res => {
                saveBtn.innerHTML = 'Saved!'
                setTimeout(function () {
                    saveBtn.innerHTML = icon
                }, 2000)
            })
            .catch(err => console.log(err)) 
    }
    
    const { name, thumbnail, drink_id } = drink;
        // console.log(ingredients.sort((a, b) => a.item.length - b.item.length));

    return (
      
        <div  className='drink__card' ><Link to={`/drink/${drink_id}`}>
                   <div className={'drink__card__top'}>
                          <img  src={thumbnail} alt={name} />
                    </div> 
                    <div className='drink__card__footer'>
                        <h4 >{name}</h4>
                        {/* <i id='save' onClick={onClick} className={"fas fa-heart"}> Save </i> */}
                    </div>
                </Link></div>
    );

};

export default Drink;