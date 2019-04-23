'use strict';

import {combineReducers} from 'redux';
import applicationState from "../components/application/reducer";

export default function createReducer(injectedReducers = {}) {

    return combineReducers({

        applicationState: applicationState,
        ...injectedReducers
    });
}