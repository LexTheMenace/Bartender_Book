import React, { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
// import Spinner from '../Spinner/spinner.gif';
import axios from 'axios';

import './DrinkModal.css';

const DrinkModal = ({ drink, setModalOpen, saved }) => {
    
    useEffect(() => {
        
        const origOffset = window.pageYOffset;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
          document.body.style.overflowY ='hidden'
        return () => {
            document.body.style.overflowY ='auto';
            window.scrollTo({
                top: origOffset,
                behavior: "smooth"
              })

        }
    }, [])

    
    const onClick = (e) => {
        e.preventDefault();
        const saveDiv = document.querySelector('#save-div');


        axios.post('http://localhost:5000/api/drinks', drink)
            .then(res => {
                saveDiv.innerHTML = 'Saved!'
                setTimeout(function () {
                    saveDiv.innerHTML =  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" id="save-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: red; background: none; cursor: pointer; display: block;"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>`;
                }, 2000)
            })
            .catch(err => console.log(err)) 
    }

    const user = null;

    const localSave = (e) => {
        e.preventDefault();
       
        const saveDiv = document.querySelector('#save-div');
        const savedDrinks = JSON.parse(localStorage.getItem('saved-drinks')) || [];

        if(savedDrinks.filter(({drink_id}) => drink_id === drink.drink_id).length){

            saveDiv.innerHTML = `You've already saved ${drink.name}!`
            setTimeout(function () {
                saveDiv.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" id="save-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: red; background: none; cursor: pointer; display: block;"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>`;
            }, 2000)
            return
        } 
        savedDrinks.push(drink);

        localStorage.setItem('saved-drinks', JSON.stringify(savedDrinks))
        
        saveDiv.innerHTML = 'Saved!'
        setTimeout(function () {
            saveDiv.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" id="save-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: red; background: none; cursor: pointer; display: block;"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>`;
        }, 2000)
        return;
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

                <p>Serve in a {glass.toLowerCase().split(glass.includes('glass') ? 'glass' : 'Glass')[0] + ' glass.'}</p>
           {!saved && <span id='save-div' style={{ 
                     marginTop: '10px', 
                     display: 'flex', 
                     flexDirection: 'column', 
                     alignItems: 'center' 
                     }}>
                         <FaHeart id='save-icon' onClick={user ? onClick : localSave} style={{ 
                             color: 'red', 
                             background: 'none', 
                             cursor: 'pointer', 
                             display: 'block' 
                              }}/>{/* SAVE */}</span>}
                </div>
                    
            </div>
        </div>
    );
};

export default withRouter(DrinkModal);