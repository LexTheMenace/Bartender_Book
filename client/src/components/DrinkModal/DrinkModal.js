import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
// import Spinner from '../Spinner/spinner.gif';
import axios from 'axios';

import './DrinkModal.css';

const DrinkModal = ({ drink, setModalOpen }) => {

    const onClick = (e) => {
        e.preventDefault();
        const saveBtn = e.target;
        const icon = saveBtn.innerHTML;

        axios.post('http://localhost:5000/api/drinks', drink)
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
        const saveBtn = e.target;.0
        const icon = saveBtn.innerHTML;
        const savedDrinks = JSON.parse(localStorage.getItem('saved-drinks')) || [];
        savedDrinks.push(drink);
        localStorage.setItem('saved-drinks', JSON.stringify(savedDrinks))
        saveBtn.innerHTML = 'Saved!'
        setTimeout(function () {
            saveBtn.innerHTML = icon
        }, 2000)
    }

    const { name, ingredients, thumbnail, instructions, glass, category } = drink;

    if (!ingredients) {
        //Spinner
        return  <div className='spinner_div' style={{ marginTop: '150px'}}>
        {/* <img className='spinner' src={'../Spinner/spinner.gif'} /> */}
        </div>
    }
    const titleStyle = {
        // textDecoration: 'underline',
        fontWeight: 'bold',
    }
    
    return (
        <div className='single__view' id='drink-modal'>
<span className='close-modal'  onClick={() => setModalOpen(false)}><span style={{color: 'white'}}>close </span>&#10007;</span>

            {/* <Link to='/'><h3 className='single__view__back'>Back to Results</h3></Link> */}
            <div className='single__view__main' onClick={(e) => setModalOpen(true)}>
                <h1 className='single__view__title' >{name}</h1>
                <img src={thumbnail} />
                <div className='single__view__info'>
                <p style={titleStyle}> Ingredients</p>
                <ul className='ingredient__list mb-5'>
                    {ingredients.sort((a,b) => a.item.length - b.item.length).map(({ item, amt }) => {
                        return <li key={item}> <span style={{color: 'darkred', textTransform: 'capitalize', fontWeight: 'bold'}}>{item}</span> {amt ? ' - ' + amt : ''} </li> 
                    })}
                </ul>
                <p className='mb-5' 
                style={{
                    padding: '0px 15px', 
                    maxWidth: '400px'
                    }}>
                        <span style={titleStyle}>Instructions:</span>{' ' + instructions}</p>

                <p>Serve in a {glass.split(glass.includes('glass') ? 'glass' : 'Glass')[0] + ' Glass'}</p>
                 <span style={{ 
                     marginTop: '10px', 
                     display: 'flex', 
                     flexDirection: 'column', 
                     alignItems: 'center' 
                     }}>
                         <FaHeart onClick={user ? onClick : localSave} style={{ 
                             color: 'red', 
                             background: 'none', 
                             cursor: 'pointer', 
                             display: 'block' 
                              }}/>{/* SAVE */}</span>
                </div>
                    
            </div>
        </div>
    );
};

export default withRouter(DrinkModal);