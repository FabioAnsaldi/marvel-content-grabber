'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class Application extends Component {

    render() {

        return (
            <div>CIAO</div>
        );
    }
}

function mapStateToProps(state) {

    return {

        applicationState: state.applicationState
    };
}

export default withRouter(connect(mapStateToProps)(Application));