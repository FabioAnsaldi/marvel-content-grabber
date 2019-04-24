'use strict';

import React, {Component, lazy, Suspense} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import injectReducer from '../../combiner/injectReducer';
import topbarState from '../widgets/topbar/reducer'

const Topbar = lazy(() => import('../widgets/topbar/index.jsx'));

export class Layout extends Component {

    render() {

        /*const defaultView = this.props.applicationState.routes.reduce((accumulator, current, i) => {

             return current.default ? (<Redirect to={`${current.path}`}/>) : accumulator;
         }, null);*/

        /*const viewsList = (
            <Suspense fallback={<div></div>}>
                <Switch>
                    {this.props.applicationState.routes.map((obj, i) => {

                        let View = lazy(() => import(`../views/${obj.viewFolderName}/index.jsx`));
                        return <Route key={i} exact path={obj.path} component={props => <View {...props} />}/>
                    })}
                    {defaultView}
                </Switch>
            </Suspense>
        );*/

        return (
            <div>
                <header>
                    <Suspense fallback={<div></div>}>

                    </Suspense>
                </header>
                <main>
                    {/*viewsList*/}
                </main>
                <footer>
                    <p>Powered by React + Redux</p>
                </footer>
            </div>
        );
    }
}

const addTopbarReducer = injectReducer({

    key: 'topbarState',
    reducer: topbarState,
});

function mapStateToProps(state) {

    return {

        layoutState: state.layoutState,
        applicationState: state.applicationState,
    };
}

export default withRouter( connect(mapStateToProps)(Layout));
