import { 
    SEARCH_INGREDIENT, 
    SET_DRINKS, 
    SET_LOADING, 
    VERIFY_AGE, 
    CLEAR_DRINK,
    CURRENT_DRINK
 } from "./actions";

const setLegal = (val) => {
    const now = new Date()
    const time = (mins = 60) => {
        return 60000 * mins
    }
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const legal = {
        legal: val,
        expiry: now.getTime() + time(), /* 1 hour */
    }

    localStorage.setItem('legal', JSON.stringify(legal))
}

const reducer = (state, action) => {
    switch (action.type) {
        case VERIFY_AGE:
            setLegal(action.payload)
            return {
                ...state,
                legal: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: true,
                results: []
            }    
        case CLEAR_DRINK: 
        return {
            ...state,
            drinkInfo: {}
        }
        case SET_DRINKS: 
        return {
            ...state,
            isLoading: false,
            results: action.payload,
            unfilteredRes: action.payload,
            heading: `Search results for "${action.heading}"`
        }
        case CURRENT_DRINK: 
        return {
            ...state,
            isLoading: false,
            drinkInfo: action.payload
        }
        case SEARCH_INGREDIENT:
            return {
                ...state,
                query: action.payload
            }
        default:
            break;
    }
}
export default reducer;