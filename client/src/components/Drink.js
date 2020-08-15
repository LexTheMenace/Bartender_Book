import React, { Component } from 'react';
import axios from 'axios';

export default class Drink extends Component {
    state = {
        drink: {}
    }

    componentDidMount() {

        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.drink.idDrink}`)
            .then(res => {
               
                const results = res.data.drinks[0];
                const { strInstructions, strDrink, strDrinkThumb, strGlass, idDrink } = results;
                const ingredients = [
                    { item: results.strIngredient1, amt: results.strMeasure1 },
                    { item: results.strIngredient2, amt: results.strMeasure2 },
                    { item: results.strIngredient3, amt: results.strMeasure3 },
                    { item: results.strIngredient4, amt: results.strMeasure4 },
                    { item: results.strIngredient5, amt: results.strMeasure5 },
                    { item: results.strIngredient6, amt: results.strMeasure6 },
                    { item: results.strIngredient7, amt: results.strMeasure7 },
                    { item: results.strIngredient8, amt: results.strMeasure8 },
                    { item: results.strIngredient9, amt: results.strMeasure9 },
                    { item: results.strIngredient10, amt: results.strMeasure10 },
                    { item: results.strIngredient11, amt: results.strMeasure11 },
                    { item: results.strIngredient12, amt: results.strMeasure12 },
                    { item: results.strIngredient13, amt: results.strMeasure13 },
                    { item: results.strIngredient14, amt: results.strMeasure14 },
                    { item: results.strIngredient15, amt: results.strMeasure15 }
                ];

                const drink = {
                    name: strDrink,
                    thumbnail: strDrinkThumb,
                    drink_id: parseInt(idDrink),
                    ingredients: ingredients.filter(item => item.item),
                    glass: strGlass.replace('glass', ''),
                    instructions: strInstructions
                }
                this.setState({ drink })
            })
            .catch(err => console.log(err));
    }

        onClick = (e) => {
            e.preventDefault();
            const saveBtn = document.getElementById('save');
            const icon = saveBtn.innerHTML;

            axios.post('/api/drinks', this.state.drink)
            .then(res => { 
                saveBtn.innerHTML = 'Saved!'
                setTimeout(function() {
                    saveBtn.innerHTML = icon
                  }, 2000)
            })
            .catch(err => console.log(err))
        }

    render() {
        const saveBtn = {
            padding: '20px',  
            backgroundImage: 'linear-gradient(black, red)', 
            color: 'white', 
            zIndex: '2',
            borderRadius: '50px',
            fontSize: '24px',
            border: 'none'
        }
        const { name, thumbnail, ingredients, glass, instructions } = this.state.drink

        if (!ingredients) {
            return (
                <h1>Mixing...</h1>
            )
        }
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
