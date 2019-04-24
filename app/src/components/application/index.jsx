'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Layout from '../layout/index.jsx';

import layoutState from '../layout/reducer';
import injectReducer from "../../combiner/injectReducer";


export class Application extends Component {

    render() {

        return (
            <Layout/>
        );
    }
}

const addLayoutReducer = injectReducer({

    key: 'layoutState',
    reducer: layoutState,
});

function mapStateToProps(state) {
    console.log(state);
    return {

        applicationState: state.applicationState
    };
}

export default withRouter(compose(addLayoutReducer, connect(mapStateToProps)(Application)));
