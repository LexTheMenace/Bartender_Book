import React, { Component } from 'react'
import axios from 'axios';
import Drink from './Drink'
import Drinks from './Drinks';

class Mix extends Component {
    state = {
        search: '',
        results: '',
        drinkInfo: ''
    }

    onChange = (e) => {
        this.setState({ search: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.search}`)
            .then(res => this.setState({ results: res.data.drinks }))
            .catch(err => console.log(err));

    }

    onClick = (e) => {
        e.preventDefault();
        console.log('click')
        this.setState({ search: '', results: '' })
    }

    random = (e) => {
        e.preventDefault();

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => this.setState({ results: res.data.drinks[0] }))
            .catch(err => console.log(err))
            
    }

    render() {
        const { results } = this.state
        if (results) {
          if (results.length > 1) {
            return (
                <React.Fragment>
                    <button style={{padding: '15px', background: 'black', color: 'white'}} onClick={this.onClick}>Re-Mix?</button>
                    <div className='container'>
                        {results.map(drink =>
                            <Drink key={results.drinkId} drink={drink} />
                        )}
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <button style={{padding: '10px', background: 'black', color: 'white', border: '1px solid gray', margin: '10px'}} onClick={this.onClick}>Re-Mix?</button>
                    <div className='container'>
                        <Drink key={results.drinkId} drink={results} />
                    </div>
                </React.Fragment>
            )
        }
        }

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h5>Search By Liquor/ Ingredient:</h5>
                    <input type='text' name='search' value={this.state.search} onChange={this.onChange}></input> 
                    <button type='submit' value='Submit' style={{ width: '10%', margin: '10px', fontSize: '24px' }}> SEARCH </button>
                </form>
                <form onSubmit={this.random}>
                    <h5>Random Cocktail</h5>
                    <button type='submit' value='Submit' style={{ width: '10%' }}> <h5> "Surpise Me"! </h5> </button>
                </form>
            </div>

        )
    }
}

export default Mix
