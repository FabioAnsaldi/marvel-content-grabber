'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import * as actions from './actions';
import Layout from '../layout/index.jsx';
import store from '../../combiner/store';
import layoutState from '../../components/layout/reducer';

store.attachReducers({layoutState});

export class Application extends Component {

    componentWillMount() {

        axios({

            method: 'get',
            baseURL: `http://${process.env.SERVER_CONFIG.database.address}:${process.env.SERVER_CONFIG.database.port}`,
            url: '/routes',
            timeout: 500,
        }).then((response) => {

            this.props.dispatch(actions.setRoutes(response.data));
        });
    }

    render() {

        return (
            <Layout/>
        );
    }
}

function mapStateToProps(state) {

    return {

        applicationState: state.applicationState
    };
}

export default withRouter(connect(mapStateToProps)(Application));