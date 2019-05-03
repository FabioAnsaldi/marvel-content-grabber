'use strict';

import TYPES from './types';

export const initialState = {

    response: {},
    error: ''
};

const charactersState = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_RESPONSE:
            return Object.assign({}, state, {'response': action.response});
        case TYPES.SET_ERROR:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default charactersState;
