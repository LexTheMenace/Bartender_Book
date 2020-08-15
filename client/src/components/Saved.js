import React, { Component } from 'react';
import axios from 'axios';

export default class Saved extends Component {
    state = {
        drinks: []
    }

    componentDidMount() {
        axios.get(`/api/drinks`)
            .then(res => this.setState({ drinks: res.data}))
            .catch(err => console.log(err));
    }

  delDrink = (_id, e) => {
            e.preventDefault();
        axios.delete(`/api/drinks/${_id}`)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err));
        }

    render() {
        const drinkCard = {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            margin: 'auto',
            borderBottom: '3px solid white',
            maxWidth: '500px',
            padding: '10px'                
        }

      

        if (this.state.drinks === [] || this.state.drinks === undefined) {
            return (
               <h1>Mixin'</h1>
            )
        } else {

            
            return(   
                <React.Fragment>
                    {this.state.drinks.map(drink => {
                    const { name, thumbnail, ingredients, glass, instructions, _id } = drink
    
                    return(
                        <div className='drinkCard' >
                            <div>
                                <h2>{name}</h2>
                                <img style={{ width: '200px', marginTop: '50px', marginBottom: '50px'  }} src={thumbnail} alt={name} />
                                <button style={{padding: '20px', width: '100px', background: 'red', color: 'white'}} onClick={this.delDrink.bind(this, _id)}>Remove  </button>
                            </div>
                            <div>
                                <h4>Ingredients</h4>
                                {ingredients.map(item => {
                                    if (!item.amt){ return <div> {item.item} </div> } else {
                                        return <div key={item._id}><span >{item.item}</span> : <span > {item.amt}</span></div>
                                    }
                                })} 
                                <p style={{ margin: '50px' }}>Serve In: {glass}</p>
                                <p style={{ margin: '50px' }}>Directions: {instructions}</p>
                             </div>
                         </div>
    )} )}
</React.Fragment>
         )
        
            
        }

    }
};
