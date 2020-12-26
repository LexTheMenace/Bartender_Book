import { SEARCH_INGREDIENT, SET_DRINKS, SET_LOADING, VERIFY_AGE } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case VERIFY_AGE:
            return {
                ...state,
                legal: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }            
        case SET_DRINKS: 
        return {
            ...state, 
            isLoading: false,
            results: action.payload,
            unfilteredRes: action.payload,
            heading: `Search results for ${action.heading}`

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