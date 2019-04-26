'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from '@material-ui/core/Grid';

export class Characters extends Component {

    render() {

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
