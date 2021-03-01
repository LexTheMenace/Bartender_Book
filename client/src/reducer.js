import { 
    SEARCH_INGREDIENT, 
    SET_DRINKS, 
    SET_LOADING, 
    CLEAR_DRINK,
    CURRENT_DRINK,
    FILTER_ALCOHOLIC,
    FILTER_CATEGORY
 } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
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
        case FILTER_ALCOHOLIC:
        if (action.payload.alcoholic === true) {
          return {
            ...state,
            results: state.unfilteredRes.filter((drink) => drink.alcoholic),
          }
        }
        if (action.payload.alcoholic === false) {
          return {
            ...state,
            results: state.unfilteredRes.filter((drink) => !drink.alcoholic),
          }
        }
        break;
      case FILTER_CATEGORY:
        return {
          ...state,
          results: state.unfilteredRes.filter(drink => drink.category === action.payload)
        } 
        default:
            break;
    }
};

export default reducer;