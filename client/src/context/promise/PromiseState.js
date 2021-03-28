// gives access to state and dispatch
import React, { useReducer } from 'react';
import uuid from 'uuid';
import PromiseContext from './promiseContext';
import promiseReducer from './promiseReducer';
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
} from '../types.js'

const PromiseState = props => {
    const initialState = {
        promises: [
            {
                id: 1,
                content: "This is the first promise that is hard coded",
                completed: false
            },
            {
                id: 2,
                content: "This is the second promise that is hard coded",
                completed: false
            },
            {
                id: 3,
                content: "This is the third promise that is hard coded",
                completed: false
            }
        ]
    }
}