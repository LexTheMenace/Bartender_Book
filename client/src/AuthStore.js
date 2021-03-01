import React, { useContext, useReducer } from 'react';
import reducer from './authReducer'
const initialState = {
    legal: getLocalStorage()
};

const AuthContext = React.createContext();

function getLocalStorage() {
    const item = localStorage.getItem('legal') ? JSON.parse(localStorage.getItem('legal')) : null

    // if the item doesn't exist, return false
    if (!item) {
        return false;
    }

    const now = new Date();
    
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage and return false
        localStorage.removeItem('legal')
        return false
    }
    return true
};

const Auth = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
};

// make sure use
export const useAuthContext = () => {
    return useContext(AuthContext);
};

export { AuthContext, Auth };