'use strict';

import {initialState} from './reducer';
import TYPES from './types';

export const resetCharacters = () => {

    return Object.assign({}, {

        type: TYPES.RESET_STATE
    }, initialState);
};

export const setResponse = (input) => {

    return {

        type: TYPES.SET_RESPONSE,
        response: input
    };
};

export const setRowsForPage = (input) => {

    return {

        type: TYPES.SET_ROWSFORPAGE,
        response: input
    };
};

export const setError = (input) => {

    return {

        type: TYPES.SET_ERROR,
        error: input
    };
};