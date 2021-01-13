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
                console.log(res);
                saveBtn.innerHTML = 'Saved!'
                setTimeout(function () {
                    saveBtn.innerHTML = icon
                }, 2000)
            })
            .catch(err => console.log(err)) 
    }

    const { name, thumbnail, ingredients, glass, instructions } = drink

    if (!ingredients) {
        return (
            <h1>Mixing...</h1>
        )
    }
    return (
        <>
        <div  className='drink__card' >
                    <div onClick={() => setShow(!show)} className='drink__card__top'>
                            {show ? <div>         {ingredients.map(item => {
                                return <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '2px'
                                }}>
                                    <span style={{ backgroundColor: 'black', color: 'white' }}>{item.item}</span>
                                </div>
                            })}</div> : <img style={{ border: '1px solid white' }} src={thumbnail} alt={name} />}
                    </div>
                    <div className='drink__card__footer'>
                        <span></span>
                        <h4 >{name}</h4>
                        <i id='save' onClick={onClick} className={"fas fa-heart"}></i>

                    </div>
                </div>
    </>
    );

};
export default Drink;