// gives access to state and dispatch
import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types.js'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        user: null,
        isAuthenticated: null,
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Load user get user

    // regiserUser

    // Login User 

    // logout

    //clear errors



    return (
        <AuthContext.Provider
            value={{
               token: state.token,
               user: state.user,
               isAuthenticated: state.isAuthenticated,
               loading: state.loading,
               error: state.error
            }}    
        >
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthState;