import React, { Component, useState } from 'react';
import axios from 'axios';
import './Drink.css'
const Drink = ({ drink }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const [show, setShow] = useState(false);

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

    const { name, thumbnail, ingredients, glass, instructions } = drink;
        // console.log(ingredients.sort((a, b) => a.item.length - b.item.length))

    return (
      
        <div  className='drink__card' >
                   <div onClick={() => setShow(!show)} className={show ? 'drink__card__top border_white' : 'drink__card__top'}>
                              {show ? <div className='card__back'>         {ingredients.map(item => {
                                return <div className='card__back__ingredients'>
                                    {item.item}
                                </div>
                            })}
                            </div> : <img  src={thumbnail} alt={name} />}
                    </div> 
                    <div className='drink__card__footer'>
                        <h4 >{name}</h4>
                        {/* <i id='save' onClick={onClick} className={"fas fa-heart"}> Save </i> */}
                    </div>
                </div>
    );

};

export default Drink;