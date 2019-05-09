'use strict';

import TYPES from './types';

export const initialState = {

    response: {
        data: {
            data : {
                total: 0
            }
        }
    },
    rowsForPage: {
        rowsPerPage: 10,
        page: 0
    },
    error: ''
};

const charactersState = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_RESPONSE:
            return Object.assign({}, state, {'response': action.response});
        case TYPES.SET_ROWSFORPAGE:
            return Object.assign({}, state, {'rowsForPage': action.response});
        case TYPES.SET_ERROR:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default charactersState;
