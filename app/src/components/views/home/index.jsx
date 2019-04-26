'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

export class Home extends Component {

    render() {

        return (
            <Grid item xs={12}>
                <h1> Welcome to the Time Marvel project</h1>
                <p>Navigate the <b>Menu</b> and go to <b>Characters</b> page</p>
                <p><b>Enjoy it!</b></p>
            </Grid>
        );
    }
}

function mapStateToProps(state) {

    return {

        homeState: state.homeState
    };
}

export default withRouter(connect(mapStateToProps)(Home));
