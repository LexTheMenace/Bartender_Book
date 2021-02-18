import React from 'react';
import { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Store';
import Spinner from './layout/spinner.gif';
import axios from 'axios';

import './SingleDrink.css';

const SingleDrink = () => {
    const drinkID = window.location.hash.split('drink/')[1];
    const { getSingleDrink, drinkInfo } = useGlobalContext();
    const onClick = (e) => {
        e.preventDefault();
        const saveBtn = e.target;
        const icon = saveBtn.innerHTML;

        axios.post('http://localhost:5000/api/drinks', drinkInfo)
            .then(res => {
                saveBtn.innerHTML = 'Saved!'
                setTimeout(function () {
                    saveBtn.innerHTML = icon
                }, 2000)
            })
            .catch(err => console.log(err)) 
    }

    const user = null;
    const localSave = (e) => {
        e.preventDefault();
        const saveBtn = e.target;
        const icon = saveBtn.innerHTML;
        const savedDrinks = JSON.parse(localStorage.getItem('saved-drinks')) || [];
        console.log(savedDrinks);
        savedDrinks.push(drinkInfo);
        localStorage.setItem('saved-drinks', JSON.stringify(savedDrinks))
    }

    useEffect(() => {
        getSingleDrink(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`)
        return () => {
            //remove drinkInfo
            getSingleDrink(null)
        }
    }, [drinkID]);

    const { name, ingredients, thumbnail, instructions, glass, category } = drinkInfo;

    if (!ingredients) {
        //Spinner
        return  <div className='spinner_div' style={{ marginTop: '150px'}}>
        <img className='spinner' src={Spinner} />
        </div>
    }
    const titleStyle = {
        // textDecoration: 'underline',
        fontWeight: 'bold',
    }
    
    return (
        <div className='single__view'>
            <Link to='/'><h3 className='single__view__back'>Back to Results</h3></Link>


            <div className='single__view__main'>
                <h1 className='single__view__title' >{name}</h1>
                <img src={thumbnail} />
                <div className='single__view__info'>
                <p style={titleStyle}> Ingredients</p>
                <ul className='ingredient__list mb-5'>
                    {ingredients.sort((a,b) => a.item.length - b.item.length).map(({ item, amt }) => {
                        return <li key={item}> <span style={{color: 'darkred', textTransform: 'capitalize'}}>{item}</span> {amt ? ' - ' + amt : ''} </li> 
                    })}
                </ul>
                <p className='mb-5' 
                style={{
                    padding: '0px 15px', 
                    maxWidth: '400px'
                    }}>
                        <span style={titleStyle}>Instructions:</span>{' ' + instructions}</p>

                <p>Serve in a {glass.split(glass.includes('glass') ? 'glass' : 'Glass')[0] + ' Glass'}</p>
                 {/* <span style={{ marginTop: '10px'}}><FaHeart onClick={user ? onClick : localSave} style={{ color: 'red', background: 'none'}}/></span> */}
                </div>
                    
            </div>
        </div>
    );
};

export default SingleDrink;