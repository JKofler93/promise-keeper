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
        }

        default: 
        return state;
    }
}

export default reducer;