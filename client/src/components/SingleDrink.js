import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Store';
import Spinner from './layout/spinner.gif';

import './SingleDrink.css';

const SingleDrink = () => {
    const drinkID = window.location.hash.split('drink/')[1];

    const { getSingleDrink, drinkInfo } = useGlobalContext();

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
    console.log( );
    return (
        <div className='single__view'>
            <Link to='/'><h3 className='single__view__back'>Back to Results</h3></Link>


            <div className='single__view__main'>
                <img src={thumbnail} />
                <div className='single__view__info'>
                <h2 className='single__view__title' >{name}</h2>
                <p style={titleStyle}> Ingredients</p>
                <ul className='ingredient__list mb-5'>
                    {ingredients.sort((a,b) => a.item.length - b.item.length).map(({ item, amt }) => {
                        return <li key={item}>{amt ? item + ' - ' + amt : item} </li> 
                    })}
                </ul>
                <p className='mb-5' 
                style={{
                    padding: '0px 15px', 
                    maxWidth: '400px'
                    }}>
                        <span style={titleStyle}>Instructions:</span>{' ' + instructions}</p>

                <p>Serve in a {glass.split(glass.includes('glass') ? 'glass' : 'Glass')[0] + ' Glass'}</p>
                </div>
    
                    
            </div>
        </div>
    );
};

export default SingleDrink;