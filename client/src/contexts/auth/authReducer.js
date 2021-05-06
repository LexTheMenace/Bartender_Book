import {  
    VERIFY_AGE
 } from "../drink/actions";

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
        default:
            break;
    }
}

export default reducer;