import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../context';
const Drink = (props) => {
    const { drink } = props;
    const { name, thumbnail, ingredients, glass, instructions } = drink
    const saveBtn = {
        padding: '20px',
        backgroundImage: 'linear-gradient(black, red)',
        color: 'white',
        zIndex: '2',
        borderRadius: '50px',
        fontSize: '24px',
        border: 'none'
    }
    const onClick = (e) => {
        e.preventDefault();
        const saveBtn = document.getElementById('save');
        const icon = saveBtn.innerHTML;

        axios.post('/api/drinks', drink)
        .then(res => {
            saveBtn.innerHTML = 'Saved!'
            setTimeout(function() {
                saveBtn.innerHTML = icon
              }, 2000)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='drinkCard' >
            <div>
                <h2>{name}</h2>
                <img style={{ width: '200px', marginTop: '10px', marginBottom: '10px', border: '1px solid white' }} src={thumbnail} alt={name} />

                <p><strong>Glass:</strong> {glass}</p>

                <button id='save' style={saveBtn} onClick={onClick} > <i class="fas fa-heart"></i> </button>
            </div>
            <div style={{ color: 'white' }}>
                <h3>Ingredients</h3>
                {ingredients.map(item => {
                    if (!item.amt) {
                        return <div>{item.item}</div>
                    } else {
                        return <div>{item.item} : {item.amt}</div>
                    }
                })}
                <p>Directions: {instructions}</p>

            </div>
        </div>
    )
}
export default Drink;
/*export default class Drink extends Component {
        


        const { name, thumbnail, ingredients, glass, instructions } = this.state.drink
        return (
            <div className='drinkCard' >
                <div>
                    <h2>{name}</h2>
                    <img style={{ width: '200px', marginTop: '10px', marginBottom: '10px', border: '1px solid white' }} src={thumbnail} alt={name} />

                    <p><strong>Glass:</strong> {glass}</p>

                   <button id='save' style={saveBtn}onClick={this.onClick}> <i class="fas fa-heart"></i> </button>
                 </div>
                <div style={{color: 'white'}}>
                    <h3>Ingredients</h3>
                    {ingredients.map(item => {
                        if (!item.amt){
                                return <div>{item.item}</div>
                            } else {
                            return <div>{item.item} : {item.amt}</div>
                        }
                    })}
                    <p>Directions: {instructions}</p>

                </div>
            </div>
        );
    }

};
*/