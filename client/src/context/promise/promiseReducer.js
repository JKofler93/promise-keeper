import {
    ADD_PROMISE,
    DELETE_PROMISE,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PROMISE,
    FILTER_PROMISES,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
} from '../types.js';

const reducer = (state, action) => {
    
    switch(action.type) {
        
        case ADD_PROMISE:
        return {
            ...state,
            promises: [...state.promises, action.payload]
        };

        case UPDATE_PROMISE:
            return {
                ...state,
                promises: state.promises.map(promise => promise.id === action.payload.id ? action.payload : promise)
            };

        case DELETE_PROMISE:
            return {
                ...state,
                promises: state.promises.filter(promise => promise.id !== action.payload)
            };

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };

        default: 
        return state;
    }
}

export default reducer;