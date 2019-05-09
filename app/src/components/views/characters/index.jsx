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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import * as actions from "./actions";

export class Characters extends Component {

    constructor(props) {

        super(props);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    componentWillMount() {

        this.handleCallViaAJAX(10, 0);
    }

    handleCallViaAJAX(limit, offset) {

        axios({

            method: 'get',
            baseURL: `https://${process.env.API_MARVEL.address}`,
            url: `${process.env.API_MARVEL.path}/characters`,
            params: {
                ts: '1',
                apikey: `${process.env.API_MARVEL.publicKey}`,
                hash: `${process.env.API_MARVEL.hash}`,
                limit: limit,
                offset: offset
            },
            timeout: 3000,
        }).then((response) => {

            this.props.dispatch(actions.setResponse(response));
        });
    }

    handleChangePage(event, page) {

        const {rowsPerPage} = this.props.charactersState.rowsForPage;

        this.handleCallViaAJAX(rowsPerPage, rowsPerPage * page);
        this.props.dispatch(actions.setRowsForPage({
            rowsPerPage: this.props.charactersState.rowsForPage.rowsPerPage,
            page: page
        }));
    }

    handleChangeRowsPerPage(event) {

        this.props.dispatch(actions.setRowsForPage({rowsPerPage: parseInt(event.target.value), page: 0}));
    };

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
        const {page, rowsPerPage} = {
            rowsPerPage: this.props.charactersState.rowsForPage.rowsPerPage,
            page: this.props.charactersState.rowsForPage.page
        };

        return (
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <h1>List of characters</h1>
                    <List>
                        {listItem}
                    </List>
                </Grid>
                <Grid item xs={8}>&nbsp;</Grid>
                <Grid item xs={4}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[10, 20, 30]}
                                    colSpan={3}
                                    count={response.data.data.total}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
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
