import React, { Component } from 'react'
import axios from 'axios';
import Drink from './Drink'
import Drinks from './Drinks';
import { Consumer } from '../context';

function makeDrink(){
    
}
class Mix extends Component {
    state = {
        searchTerm: ''

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.searchTerm}`)
            .then(res => {
                const drinksArr = [];
                const { searchTerm } = this.state
                // MAP
                res.data.drinks.map(drink => {
                    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
                        .then(res => {
                            console.log(res);
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

                            drinksArr.push(drink)
                        })
                        .catch(err => console.log(err))
                })
                // Map End
                console.log(res);
                setTimeout(function () {
                    dispatch({
                        type: 'SEARCH_INGREDIENT',
                        payload: drinksArr,
                        name: searchTerm
                    })
                }, 300);
            })
            .catch(err => console.log(err));
    }

    onClick = (e) => {
        e.preventDefault();
        console.log('click')
        this.setState({ search: '', results: '' })
    }

    random = (dispatch, e) => {
        e.preventDefault();

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => {
                console.log(res);
                axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${res.data.drinks[0].idDrink}`)
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
                           dispatch({
                    type: 'RANDOM_DRINK',
                    payload: [drink],
                    name: drink.name,
                })
                    })
             
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div>
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <h5>Search By Liquor/ Ingredient:</h5>
                                <input type='text' name='searchTerm' value={this.state.searchTerm} placholder='Liquor Name' onChange={this.onChange}></input>
                                <button type='submit' value='Submit' style={{ width: '120px', margin: '10px', fontSize: '24px' }}> SEARCH </button>
                            </form>
                            <form onSubmit={this.random.bind(this, dispatch)}>
                                <h5>Random Cocktail</h5>
                                <button type='submit' value='Submit' style={{ width: '120px', margin: '10px' }}> <h5> "Surpise Me"! </h5> </button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Mix
