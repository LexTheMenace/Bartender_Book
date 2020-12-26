import React, { Component, useState } from 'react';
import axios from 'axios';
import './Drink.css'
const Drink = ({drink}) => {
    const [seeMore, setSeeMore] = useState(false)
        const onClick = (e) => {
            e.preventDefault();
            const saveBtn = document.getElementById('save');
            const icon = saveBtn.innerHTML;

            axios.post('/api/drinks', drink)
            .then(res => { 
              console.log(res);
                saveBtn.innerHTML = 'Saved!'
                setTimeout(function() {
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
                <div style={{  overflow: seeMore && 'scroll'}} onClick={() => setSeeMore(!seeMore)} className={seeMore ? 'drink__card d-none' : 'drink__card'}>
                {!seeMore ? (
                  <>
                 <button id='save' onClick={onClick}> <i className="fas fa-heart"></i> </button>
                    <img style={{ border: '1px solid white' }} src={thumbnail} alt={name} />
                    <h4 onClick={() => setSeeMore(!seeMore)}>{name}</h4>
                    </>
                    )
               :     <> <h5>Ingredients:</h5>
               <div className='drink__ingredients'>
                   {ingredients.map(item => { 
                       return <div style={{ display: 'flex', flexDirection: 'column', margin: '2px' }}><span style={{ backgroundColor: 'black', color: 'white' }}>{ item.item }</span> </div>
                   })}    
               </div>
              <div className='drink__card__info'>
                   <p>Directions: {instructions}</p>
                   <p><strong>Glass:</strong> {glass}</p>
                   </div>
</>
                }</div>
                 {/* //use modal instead */}
              {/*  {seeMore &&   <div  onClick={() => setSeeMore(!seeMore)}  style={{ overflow: 'scroll'}} className='drink__card'>
                 <h5>Ingredients:</h5>
                <div className='drink__ingredients'>
                    {ingredients.map(item => { 
                        return <div style={{ display: 'flex', flexDirection: 'column', margin: '2px' }}><span style={{ backgroundColor: 'black', color: 'white' }}>{ item.item }</span> </div>
                    })}    
                </div>
                <div className='drink__card__info'>
                    <p>Directions: {instructions}</p>
                    <p><strong>Glass:</strong> {glass}</p>

                    </div>
                </div>
                }         */} 
            </div> 
        );
    
};
export default Drink;