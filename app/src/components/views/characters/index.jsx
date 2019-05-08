'use strict';

import React, {Component, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import * as actions from "./actions";
import {Route} from "react-router-dom";

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

            this.props.dispatch(actions.setResponse(response));
        });
    }

    render() {

        const response = this.props.charactersState && this.props.charactersState.response;
        const results = response && response.data && response.data.data && response.data.data.results || [];
        const listItem = (
            <Suspense fallback={<div>Loading ...</div>}>
                {results.map((obj, i) => {

                return <ListItem alignItems="flex-start" key={i.toString()}>
                    <ListItemAvatar>
                        <Avatar
                            alt={`${obj.name}`}
                            src={`${obj.thumbnail.path}.${obj.thumbnail.extension}`}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={`${obj.name}`}
                        secondary={
                            <React.Fragment>
                                {`${obj.description}`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            })}
            </Suspense>
        );

        return (
            <Grid item xs={12}>
                <h1>List of characters</h1>
                <List>
                    {listItem}
                </List>
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
