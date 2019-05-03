'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import * as actions from "./actions";

export class Characters extends Component {

    componentWillMount() {

        axios({

            method: 'get',
            baseURL: `https://${process.env.API_MARVEL.address}`,
            url: `${process.env.API_MARVEL.path}/characters`,
            params: {
                ts: '1',
                apikey: `${process.env.API_MARVEL.publicKey}`,
                hash: `${process.env.API_MARVEL.hash}`
            },
            timeout: 3000,
        }).then((response) => {

            //this.props.dispatch(actions.setResponse(response));
        });
    }

    render() {

        //const response = this.props.charactersState.response;

        return (
            <Grid item xs={12}>
                <h1>List of characters</h1>
            </Grid>
        );
    }
}

function mapStateToProps(state) {

    return {

        charactersState: state.charactersState
    };
}

export default withRouter(connect(mapStateToProps)(Characters));
