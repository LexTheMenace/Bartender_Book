import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_INGREDIENT':
            return {
                ...state,
                drinks: action.payload,
                heading: `Search results for ${action.name}`
            }
        case 'RANDOM_DRINK':
            return {
                ...state,
                drinks: action.payload,
                heading: `${action.name}`
            }
    }
}

export class Provider extends Component {
    state = {
        drinks: [],
        searchTerm: '',
        heading: '',
        dispatch: action => this.setState(state => reducer(state, action))
    }
    componentDidMount(){
        axios.get(`/api/drinks`)
        .then(res => this.setState({ drinks: []}))
        .catch(err => console.log(err));
    }
    componentWillUnmount(){
        this.setState({ drinks: []})
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;