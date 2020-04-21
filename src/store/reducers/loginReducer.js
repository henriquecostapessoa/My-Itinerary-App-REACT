import { FETCH_LOGINS, FETCH_LOAD_LOGIN, FETCH_DELETE_FAVORITE, FETCH_ADD_FAVORITE, NEW_LOGIN } from '../actions/types';

const initialState = {
    items: [],
    item: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGINS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                items: action.payload
            }    
        case FETCH_LOAD_LOGIN:
           console.log(action.payload)
        
            return {
                ...state,
                user: action.payload
                
            }  
        case FETCH_DELETE_FAVORITE:
           console.log(action.payload)
        
            return {
                ...state,
                items: action.payload
                
            }  
        case FETCH_ADD_FAVORITE:
           console.log(action.payload)
        
            return {
                ...state,
                items: action.payload
                
            } 
            default:
                return state;  
           
    }
}
