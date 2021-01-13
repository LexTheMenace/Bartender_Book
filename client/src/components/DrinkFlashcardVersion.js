import React, { Component, useState } from 'react';
import axios from 'axios';
import './Drink.css'
const Drink = ({ drink }) => {
    const [seeMore, setSeeMore] = useState(false)
    const onClick = (e) => {
        e.preventDefault();
        console.log(e);
        const saveBtn = document.getElementById('save');
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
        <div className='drink' >
            <div onClick={() => setSeeMore(!seeMore)} className={'drink__card'} >
                <div className={seeMore ? 'drink__card d-none' : 'drink__card'}>
                    <div className='drink__card__top'>

                    {!seeMore ? (
                        <>
                            <button id='save' onClick={onClick}> <i className="fas fa-heart"></i> </button>
                            <img style={{ border: '1px solid white' }} src={thumbnail} alt={name} />
                        </>
                    )
                    :
                    <div className='drink__ingredients'>
                        <h2>Ingredients</h2>
                            {ingredients.map(item => {
                                return <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '2px'
                                }}>
                                    <span style={{ backgroundColor: 'black', color: 'white' }}>{item.item}</span>
                                </div>
                            })}
                        </div>
                    }
                    </div>
                    <div>
                        <h4 >{name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Drink;