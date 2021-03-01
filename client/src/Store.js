import React, { useContext, useEffect, useReducer } from 'react';

import {
    SET_LOADING,
    SET_DRINKS,
    SEARCH_INGREDIENT,
    CLEAR_DRINK,
    CURRENT_DRINK,
    FILTER_ALCOHOLIC,
    FILTER_CATEGORY
} from './actions';

import reducer from './reducer';

const API_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

const initialState = {
    isLoading: true,
    unfilteredRes: [],
    memo: [],
    results: [],
    query: null,
    heading: '',
    drinkInfo: {}
};

const StoreContext = React.createContext();

const makeDrink = async (id) => {
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        let drink = data.drinks[0];
        const { strInstructions, strDrink, strDrinkThumb, strGlass, idDrink, strAlcoholic, strCategory } = drink;

        const ingredients = [
            { item: drink.strIngredient1, amt: drink.strMeasure1 },
            { item: drink.strIngredient2, amt: drink.strMeasure2 },
            { item: drink.strIngredient3, amt: drink.strMeasure3 },
            { item: drink.strIngredient4, amt: drink.strMeasure4 },
            { item: drink.strIngredient5, amt: drink.strMeasure5 },
            { item: drink.strIngredient6, amt: drink.strMeasure6 },
            { item: drink.strIngredient7, amt: drink.strMeasure7 },
            { item: drink.strIngredient8, amt: drink.strMeasure8 },
            { item: drink.strIngredient9, amt: drink.strMeasure9 },
            { item: drink.strIngredient10, amt: drink.strMeasure10 },
            { item: drink.strIngredient11, amt: drink.strMeasure11 },
            { item: drink.strIngredient12, amt: drink.strMeasure12 },
            { item: drink.strIngredient13, amt: drink.strMeasure13 },
            { item: drink.strIngredient14, amt: drink.strMeasure14 },
            { item: drink.strIngredient15, amt: drink.strMeasure15 }
        ];

        drink = {
            name: strDrink,
            thumbnail: strDrinkThumb,
            drink_id: parseInt(idDrink),
            ingredients: ingredients.filter(item => item.item),
            glass: strGlass.replace('glass', ''),
            instructions: strInstructions,
            alcoholic: strAlcoholic === 'Alcoholic' ? true : false,
            category: strCategory
        };

        return drink;

    } catch (error) {
        console.log(error);
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getDrinks = async (url) => {
        dispatch({ type: SET_LOADING });
        try {
            const response = await fetch(url)
            const data = await response.json();

            const datas = await data.drinks.map(async ({ idDrink }) => {
                const drink = await makeDrink(idDrink)
                return drink;
            });
            const drinks = await Promise.all(datas).then(res => res)

            dispatch({
                type: SET_DRINKS,
                payload: drinks, heading: state.query
            }
            );
        } catch (error) {
            console.log(error)
        }
    };
    
    const getSingleDrink = async (url) => {
        if (!url) dispatch({ type: CLEAR_DRINK })
        dispatch({ type: SET_LOADING });
        try {
            const response = await fetch(url)
            const data = await response.json();
            const drink = await makeDrink(data.drinks[0].idDrink)

            dispatch({
                type: CURRENT_DRINK,
                payload: drink
            });

        } catch (error) {
            console.log(error)
        }
    };

    const handleSearch = (query) => {
        dispatch({ type: SEARCH_INGREDIENT, payload: query })
    };
    const filterDrinks = (alcoholic) => {
        dispatch({ type: FILTER_ALCOHOLIC, payload: alcoholic })
      }
    
      const filterCategory = (category) => {
        dispatch({ type: FILTER_CATEGORY, payload: category })
      }
    

    useEffect(() => {
        getDrinks(`${API_ENDPOINT}${state.query}`)
    }, [state.query]);

    return (
        <StoreContext.Provider
            value={{
                ...state,
                dispatch,
                handleSearch,
                getSingleDrink,
                filterDrinks,
                filterCategory
            }}
        >
            {children}
        </StoreContext.Provider>
    )
};

// make sure use
export const useGlobalContext = () => {
    return useContext(StoreContext);
};

export { StoreContext, Store };